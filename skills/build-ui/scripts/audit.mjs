#!/usr/bin/env node
import { launch } from './vendor/browser.mjs'
import { filmChecksSource } from './vendor/film-checks.mjs'
import { auditLayout } from './vendor/layout-core.mjs'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const USAGE = `usage: node audit.mjs <url> [--select body] [--widths 1280,390] [--dark] [--wait 500] [--shots dir] [--report file.json] [--gate]
Renders the page at each width (and dark when --dark), runs the layout, craft and real-UI checks,
prints one line per finding. --gate exits 1 on any finding and ends "audit passed" only at zero.`

const FILM_DETECTORS = [
  'detectClipped', 'detectPaddingRunIns', 'detectCoveredCopy', 'detectLopsidedPills', 'detectDoubleCorner',
  'detectTranslucentIcons', 'detectTightControl', 'detectNearAligned', 'detectUnevenInset', 'detectMixedIcons',
  'detectEmojiIcon', 'detectFatRow', 'detectTightInset', 'detectUnevenPadding', 'detectUnevenGutters',
  'detectPillInset', 'detectTightStack', 'detectClippedGlyph', 'detectUnitWrapped', 'detectUnsizedText',
  'detectOnionSkin', 'detectTightMark', 'detectHalfPixelGlyph', 'detectSqueezed',
]
const FRAME_DETECTORS = ['detectTouchingText', 'detectBylineGap', 'detectShadowHalo']

function parseArgs(argv) {
  const opts = { select: 'body', widths: [1280, 390], dark: false, wait: 500, shots: null, report: null, gate: false }
  let url
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help') { console.log(USAGE); process.exit(0) }
    else if (arg === '--dark') opts.dark = true
    else if (arg === '--gate') opts.gate = true
    else if (/^--(select|widths|wait|shots|report)$/.test(arg)) {
      const value = argv[++i]
      if (value === undefined || value.startsWith('--')) throw new Error(`${arg} needs a value`)
      opts[arg.slice(2)] = value
    } else if (arg.startsWith('--') || url) throw new Error(`unexpected argument: ${arg}`)
    else url = arg
  }
  if (!url) throw new Error('a URL is required; --help')
  opts.widths = String(opts.widths).split(',').map(Number)
  opts.wait = Number(opts.wait)
  if (opts.widths.some((w) => !Number.isInteger(w) || w < 200)) throw new Error('--widths takes integers of 200 or more')
  return { url, opts }
}

function runnerSource() {
  const film = filmChecksSource()
  const runner = `
window.__buildUiAudit = (selector) => {
  const root = document.querySelector(selector)
  if (!root) return { error: 'no element matches ' + selector }
  const ctx = stageContext(root)
  const frame = frameContext(ctx)
  const lines = []
  for (const fn of [${FILM_DETECTORS.join(', ')}]) lines.push(...fn(ctx))
  for (const fn of [${FRAME_DETECTORS.join(', ')}]) lines.push(...fn(frame))
  lines.push(...detectSpills(root))
  const iconLabelGap = (line) => /^touching: .* is [4-9]px from /.test(line)
  return { lines: lines.filter((line) => typeof line === 'string' && line.includes(':') && !iconLabelGap(line)) }
}`
  const end = film.lastIndexOf('})()')
  return film.slice(0, end) + runner + '\n' + film.slice(end)
}

function realUiChecks({ selector, phone }) {
  const root = document.querySelector(selector)
  const out = []
  const label = (el) => `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/)[0] : ''}${el.textContent.trim() ? ` "${el.textContent.trim().slice(0, 24)}"` : ''}`
  const shown = (el) => {
    const r = el.getBoundingClientRect()
    if (r.width <= 2 || r.height <= 2) return false
    for (let a = el; a; a = a.parentElement) {
      const cs = getComputedStyle(a)
      if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) < 0.05) return false
    }
    return true
  }
  const overflow = document.documentElement.scrollWidth - innerWidth
  if (overflow > 1) out.push(`page overflow: the page is ${overflow}px wider than the ${innerWidth}px viewport; find the box that runs past it (min-width: 0, flex-wrap, overflow-x: auto on the table)`)

  for (const el of root.querySelectorAll('*')) {
    if (!shown(el) || el.closest('svg')) continue
    const ownText = [...el.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim())
    if (!ownText) continue
    const cs = getComputedStyle(el)
    const clips = ['hidden', 'clip'].includes(cs.overflowX)
    if (clips && el.scrollWidth > el.clientWidth + 1 && cs.textOverflow !== 'ellipsis' && cs.whiteSpace !== 'normal')
      out.push(`cut text: ${label(el)} is cut at its right edge with no ellipsis; truncate with text-overflow: ellipsis and expose the full value (title or tooltip), or let it wrap`)
    const size = parseFloat(cs.fontSize)
    if (el.textContent.trim().length > 2 && size < (phone ? 12 : 11))
      out.push(`small text: ${label(el)} is ${size}px; body and labels stay at ${phone ? 12 : 11}px or more at this width`)
  }

  const interactive = 'a[href], button, input:not([type=hidden]), select, textarea, summary, [role=button], [role=link], [role=tab], [role=menuitem], [role=checkbox], [role=switch], [tabindex]:not([tabindex="-1"])'
  const targets = [...root.querySelectorAll(interactive)].filter(shown)
  const rects = targets.map((el) => el.getBoundingClientRect())
  const crowded = (i) => {
    const r = rects[i], cx = (r.left + r.right) / 2, cy = (r.top + r.bottom) / 2
    return rects.some((o, j) => j !== i && !targets[j].contains(targets[i]) && !targets[i].contains(targets[j]) &&
      Math.hypot(Math.max(o.left - cx, 0, cx - o.right), Math.max(o.top - cy, 0, cy - o.bottom)) < 12)
  }
  targets.forEach((el, i) => {
    const r = rects[i]
    const isLink = el.tagName === 'A' || el.getAttribute('role') === 'link'
    if (phone && !isLink && (r.width < 43.5 || r.height < 43.5))
      out.push(`small target: ${label(el)} is ${Math.round(r.width)}x${Math.round(r.height)}px; touch controls take a 44x44 hit area (pad it or extend with a pseudo-element)`)
    else if ((r.width < 23.5 || r.height < 23.5) && crowded(i))
      out.push(`small target: ${label(el)} is ${Math.round(r.width)}x${Math.round(r.height)}px and another target sits inside its 24px circle; grow it to 24x24 or space the targets apart`)
    const named = (el.getAttribute('aria-label') || '').trim() || el.getAttribute('aria-labelledby') || (el.getAttribute('title') || '').trim() ||
      el.textContent.trim() || el.querySelector('img[alt]:not([alt=""]), svg title') ||
      (el.labels && el.labels.length) || (el.getAttribute('placeholder') || '').trim() || ['submit', 'reset'].includes(el.type)
    if (!named) out.push(`unnamed control: ${label(el)} has no accessible name; add visible text or aria-label`)
  })
  for (const img of root.querySelectorAll('img')) {
    if (shown(img) && !img.hasAttribute('alt')) out.push(`missing alt: img ${img.getAttribute('src')?.slice(0, 40)} has no alt; describe it, or alt="" when decorative`)
  }
  return out
}

async function auditOnce(browser, url, opts, width, scheme, shotsDir) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: scheme, deviceScaleFactor: 2 })
  const errors = []
  page.on('pageerror', (e) => errors.push(`page error: ${e.message}`))
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`console error: ${m.text().slice(0, 200)}`) })
  page.on('response', (r) => { if (r.status() >= 400 && !/favicon/.test(r.url())) errors.push(`resource: ${r.status()} ${r.url()}`) })
  await page.addInitScript(runnerSource())
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.locator(opts.select).first().waitFor({ state: 'visible', timeout: 10000 })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(opts.wait)
  const film = await page.evaluate((s) => window.__buildUiAudit(s), opts.select)
  if (film.error) throw new Error(film.error)
  const layout = await page.locator(opts.select).first().evaluate(auditLayout)
  const real = await page.evaluate(realUiChecks, { selector: opts.select, phone: width <= 480 })
  let shot = null
  if (shotsDir) {
    shot = join(shotsDir, `${width}-${scheme}.png`)
    await page.screenshot({ path: shot, fullPage: true })
  }
  await page.close()
  const findings = [...new Set([...real, ...layout.findings.map((f) => `${f.rule}: ${f.message}`), ...film.lines, ...errors])]
  return { width, scheme, findings, deferred: layout.deferred, shot }
}

async function main() {
  let parsed
  try { parsed = parseArgs(process.argv.slice(2)) } catch (e) { console.error(`audit: ${e.message}`); process.exit(2) }
  const { url, opts } = parsed
  const shotsDir = opts.shots ? resolve(opts.shots) : null
  if (shotsDir) mkdirSync(shotsDir, { recursive: true })
  const browser = await launch()
  const runs = []
  try {
    for (const scheme of opts.dark ? ['light', 'dark'] : ['light'])
      for (const width of opts.widths) runs.push(await auditOnce(browser, url, opts, width, scheme, shotsDir))
  } finally { await browser.close() }

  let total = 0
  for (const run of runs) {
    console.log(`\n${run.width}px ${run.scheme}: ${run.findings.length} finding(s)${run.shot ? `, ${run.shot}` : ''}`)
    for (const line of run.findings) console.log(`  ${line}`)
    for (const line of run.deferred) console.log(`  incomplete: ${line}`)
    total += run.findings.length
  }
  if (opts.report) writeFileSync(resolve(opts.report), JSON.stringify({ url, runs }, null, 2) + '\n')
  console.log(total ? `\naudit: ${total} finding(s); the checks measure boxes, not taste, so look at the shots too` : '\naudit passed')
  if (opts.gate && total) process.exitCode = 1
}

main()
