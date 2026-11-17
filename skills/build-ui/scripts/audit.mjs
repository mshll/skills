#!/usr/bin/env node
import { launch } from './vendor/browser.mjs'
import { filmChecksSource } from './vendor/film-checks.mjs'
import { auditLayout } from './vendor/layout-core.mjs'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { join, resolve } from 'node:path'

const USAGE = `usage: node audit.mjs <url> [--select body] [--widths 1280,390] [--dark] [--wait 500] [--shots dir] [--report file.json] [--drift] [--gate]
Renders the page at each width (and dark when --dark), runs the layout, craft and real-UI checks,
prints one line per finding. --drift also flags font families and corner radii that are not in the page's --font-* and --radius-* tokens.
--gate exits 1 on any finding and ends "audit passed" only at zero.`

const FILM_DETECTORS = [
  'detectClipped', 'detectPaddingRunIns', 'detectCoveredCopy', 'detectLopsidedPills', 'detectDoubleCorner',
  'detectTranslucentIcons', 'detectTightControl', 'detectNearAligned', 'detectUnevenInset', 'detectMixedIcons',
  'detectEmojiIcon', 'detectFatRow', 'detectTightInset', 'detectUnevenPadding', 'detectUnevenGutters',
  'detectPillInset', 'detectTightStack', 'detectClippedGlyph', 'detectUnitWrapped', 'detectUnsizedText',
  'detectOnionSkin', 'detectTightMark', 'detectHalfPixelGlyph', 'detectSqueezed',
]
const FRAME_DETECTORS = ['detectTouchingText', 'detectBylineGap', 'detectShadowHalo']

function parseArgs(argv) {
  const opts = { select: 'body', widths: [1280, 390], dark: false, wait: 500, shots: null, report: null, drift: false, gate: false }
  let url
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help') { console.log(USAGE); process.exit(0) }
    else if (arg === '--dark') opts.dark = true
    else if (arg === '--gate') opts.gate = true
    else if (arg === '--drift') opts.drift = true
    else if (/^--(select|widths|wait|shots|report)$/.test(arg)) {
      const value = argv[++i]
      if (value === undefined || value.startsWith('--')) throw new Error(`${arg} needs a value`)
      opts[arg.slice(2)] = value
    } else if (arg.startsWith('--') || url) throw new Error(`unexpected argument: ${arg}`)
    else url = arg
  }
  if (!url) throw new Error('a URL is required; --help')
  if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) {
    if (!existsSync(url)) throw new Error(`no such file: ${url}`)
    url = pathToFileURL(resolve(url)).href
  }
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
  const deferred = []
  const overflow = document.documentElement.scrollWidth - innerWidth
  if (overflow > 1) out.push(`page overflow: the page is ${overflow}px wider than the ${innerWidth}px viewport; find the box that runs past it (min-width: 0, flex-wrap, overflow-x: auto on the table)`)

  const pen = Object.assign(document.createElement('canvas'), { width: 1, height: 1 }).getContext('2d', { willReadFrequently: true })
  const rgba = (css) => {
    pen.clearRect(0, 0, 1, 1)
    pen.fillStyle = css
    pen.fillRect(0, 0, 1, 1)
    const [r, g, b, a] = pen.getImageData(0, 0, 1, 1).data
    return [r, g, b, a / 255]
  }
  const over = (top, under) => under.map((v, i) => (i === 3 ? 1 : top[i] * top[3] + v * (1 - top[3])))
  const scheme = getComputedStyle(document.documentElement).colorScheme
  const darkCanvas = /dark/.test(scheme) && (!/light/.test(scheme) || matchMedia('(prefers-color-scheme: dark)').matches)
  const backdrop = (el) => {
    const layers = []
    for (let a = el; a; a = a.parentElement) {
      const cs = getComputedStyle(a)
      if (cs.backgroundImage !== 'none') return null
      const fill = rgba(cs.backgroundColor)
      if (fill[3] > 0) layers.push(fill)
      if (fill[3] >= 1) break
    }
    return layers.reverse().reduce((under, top) => over(top, under), darkCanvas ? [18, 18, 18, 1] : [255, 255, 255, 1])
  }
  const luminance = (c) => c.slice(0, 3).map((v) => (v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4).reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0)
  const hex = (c) => '#' + c.slice(0, 3).map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')
  const lowContrast = new Map()
  let overImage = 0

  for (const el of root.querySelectorAll('*')) {
    if (!shown(el) || el.closest('svg')) continue
    const ownText = [...el.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim())
    if (!ownText) continue
    const cs = getComputedStyle(el)
    const clips = ['hidden', 'clip'].includes(cs.overflowX)
    if (clips && el.scrollWidth > el.clientWidth + 1 && cs.textOverflow !== 'ellipsis' && cs.whiteSpace !== 'normal')
      out.push(`cut text: ${label(el)} is cut at its right edge with no ellipsis; truncate with text-overflow: ellipsis and expose the full value (title or tooltip), or let it wrap`)
    const size = parseFloat(cs.fontSize)
    if (el.textContent.trim().length > 2 && size < 12)
      out.push(`small text: ${label(el)} is ${size}px; body, labels and hints stay at 12px or more`)
    if (el.closest(':disabled, [aria-disabled="true"]')) continue
    const ground = backdrop(el)
    if (!ground) { overImage++; continue }
    const ink = over(rgba(cs.color), ground)
    const [hi, lo] = [luminance(ink), luminance(ground)].sort((a, b) => b - a)
    const ratio = (hi + 0.05) / (lo + 0.05)
    const floor = size >= 24 || (size >= 18.66 && Number(cs.fontWeight) >= 700) ? 3 : 4.5
    if (ratio >= floor) continue
    const key = `${hex(ink)} on ${hex(ground)} is ${ratio.toFixed(2)}:1`
    const hit = lowContrast.get(key) ?? { count: 0, first: label(el), floor }
    hit.count++
    lowContrast.set(key, hit)
  }
  for (const [key, hit] of lowContrast)
    out.push(`low contrast: ${key} on ${hit.count} text element(s), first ${hit.first}; text takes ${hit.floor}:1${hit.floor === 4.5 ? ' (3:1 from 24px, or 18.66px bold)' : ''}`)
  if (overImage) deferred.push(`contrast not measured on ${overImage} text element(s) over an image or gradient; check them in the shots`)

  const interactive = 'a[href], button, input:not([type=hidden]), select, textarea, summary, [role=button], [role=link], [role=tab], [role=menuitem], [role=checkbox], [role=switch], [tabindex]:not([tabindex="-1"])'
  const targets = [...root.querySelectorAll(interactive)].filter(shown)
  const hitArea = (el) => {
    const r = el.getBoundingClientRect()
    const box = { left: r.left, top: r.top, right: r.right, bottom: r.bottom }
    const cs = getComputedStyle(el)
    if (cs.position === 'static') return { ...box, width: r.width, height: r.height }
    const padding = { left: r.left + parseFloat(cs.borderLeftWidth), top: r.top + parseFloat(cs.borderTopWidth), right: r.right - parseFloat(cs.borderRightWidth), bottom: r.bottom - parseFloat(cs.borderBottomWidth) }
    for (const pseudo of ['::before', '::after']) {
      const ps = getComputedStyle(el, pseudo)
      if (ps.content === 'none' || ps.position !== 'absolute' || ps.display === 'none' || ps.pointerEvents === 'none') continue
      const [top, right, bottom, left] = [ps.top, ps.right, ps.bottom, ps.left].map(parseFloat)
      if ([top, right, bottom, left].some(Number.isNaN)) continue
      box.left = Math.min(box.left, padding.left + left)
      box.top = Math.min(box.top, padding.top + top)
      box.right = Math.max(box.right, padding.right - right)
      box.bottom = Math.max(box.bottom, padding.bottom - bottom)
    }
    return { ...box, width: box.right - box.left, height: box.bottom - box.top }
  }
  const rects = targets.map(hitArea)
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

  const rules = []
  let unread = 0
  const collect = (list) => { for (const rule of list) { if (rule.selectorText) rules.push(rule); if (rule.cssRules) collect(rule.cssRules) } }
  for (const sheet of [...document.styleSheets, ...document.adoptedStyleSheets]) {
    try { collect(sheet.cssRules) } catch { unread++ }
  }
  const unsure = unread ? `; ${unread} cross-origin stylesheet(s) could not be read` : ''
  if (!rules.some((rule) => rule.selectorText.includes('::selection')))
    (unread ? deferred : out).push(`selection: no ::selection rule in the page's stylesheets; theme the selection colour from the tokens${unsure}`)

  const caretRules = ['[style*="caret-color"]', ...rules.filter((rule) => rule.style?.caretColor && rule.style.caretColor !== 'auto' && !rule.selectorText.includes('::')).map((rule) => rule.selectorText)]
  const setsCaret = (el) => caretRules.some((sel) => { try { return el.closest(sel) !== null } catch { return false } })
  const noCaret = [...root.querySelectorAll('textarea, input, [contenteditable=""], [contenteditable="true"]')]
    .filter((el) => shown(el) && !/^(checkbox|radio|range|color|file|submit|button|reset|image|hidden)$/.test(el.type) && !setsCaret(el))
  if (noCaret.length)
    (unread ? deferred : out).push(`caret: ${noCaret.length} field(s) keep caret-color auto, first ${label(noCaret[0])}; set caret-color from the accent or ink token${unsure}`)

  const proportional = (node) => {
    const cs = getComputedStyle(node.parentElement)
    return !cs.fontVariantNumeric.includes('tabular-nums') && !/tnum/.test(cs.fontFeatureSettings) && !/mono|courier|menlo|consolas/i.test(cs.fontFamily)
  }
  const looseCells = [...root.querySelectorAll('td')].filter((td) => {
    const text = td.textContent.replace(/\s/g, '')
    if (!shown(td) || (text.match(/\d/g) || []).length / text.length < 0.5) return false
    const walker = document.createTreeWalker(td, NodeFilter.SHOW_TEXT)
    for (let node = walker.nextNode(); node; node = walker.nextNode()) if (node.textContent.trim() && proportional(node)) return true
    return false
  })
  if (looseCells.length)
    out.push(`tabular: ${looseCells.length} numeric cell(s) use proportional figures, first ${label(looseCells[0])}; set font-variant-numeric: tabular-nums on the column`)

  const pinned = (el) => { for (let a = el; a; a = a.parentElement) if (/fixed|sticky/.test(getComputedStyle(a).position)) return true; return false }
  const textNodes = []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  for (let node = walker.nextNode(); node; node = walker.nextNode())
    if (node.textContent.trim() && node.parentElement && !node.parentElement.closest('svg') && shown(node.parentElement)) textNodes.push(node)
  const range = document.createRange()
  const pieces = []
  const clipped = (r, el) => {
    let box = { left: r.left, top: r.top, right: r.right, bottom: r.bottom }
    for (let a = el; a && a !== document.documentElement; a = a.parentElement) {
      const cs = getComputedStyle(a)
      if (cs.overflowX === 'visible' && cs.overflowY === 'visible') continue
      const c = a.getBoundingClientRect()
      box = { left: Math.max(box.left, c.left), top: Math.max(box.top, c.top), right: Math.min(box.right, c.right), bottom: Math.min(box.bottom, c.bottom) }
    }
    return { ...box, width: box.right - box.left, height: box.bottom - box.top }
  }
  for (const node of textNodes) {
    if (pinned(node.parentElement)) continue
    range.selectNodeContents(node)
    for (const raw of range.getClientRects()) {
      const r = clipped(raw, node.parentElement)
      if (r.width > 1 && r.height > 1) pieces.push({ node, r, text: node.textContent.trim() })
    }
  }
  const controls = targets.filter((el) => !pinned(el)).map((el) => ({ el, r: el.getBoundingClientRect() }))
  const overlap = (a, b) => {
    const x = Math.min(a.right, b.right) - Math.max(a.left, b.left)
    const y = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top)
    return x > 2 && y > 4 && y > 0.25 * Math.min(a.height, b.height)
  }
  const inControl = (node) => targets.some((el) => el.contains(node))
  const quote = (text) => `"${text.slice(0, 24)}"`
  const collisions = new Set()
  for (let i = 0; i < pieces.length; i++) {
    for (let j = i + 1; j < pieces.length; j++)
      if (pieces[i].node !== pieces[j].node && !inControl(pieces[i].node) && !inControl(pieces[j].node) && overlap(pieces[i].r, pieces[j].r)) collisions.add(`text ${quote(pieces[i].text)} runs into text ${quote(pieces[j].text)}`)
    for (const c of controls)
      if (!c.el.contains(pieces[i].node) && overlap(pieces[i].r, c.r)) collisions.add(`text ${quote(pieces[i].text)} runs into ${label(c.el)}`)
  }
  for (const line of collisions)
    out.push(`overlap: ${line}; give the text room (wrap, ellipsis, or space the neighbours apart) so nothing sits under it`)

  const separator = /[·•|]/g
  const lineStart = (el) => {
    let block = el
    while (block.parentElement && (getComputedStyle(block).display.startsWith('inline') || /flex|grid/.test(getComputedStyle(block.parentElement).display))) block = block.parentElement
    const r = block.getBoundingClientRect(), cs = getComputedStyle(block)
    return { block, left: r.left + parseFloat(cs.borderLeftWidth) + parseFloat(cs.paddingLeft) }
  }
  const strandedSeparators = new Set()
  for (const node of textNodes) {
    const { block, left } = lineStart(node.parentElement)
    for (const match of node.textContent.matchAll(separator)) {
      range.setStart(block, 0)
      range.setEnd(node, match.index)
      if (!range.toString().trim()) continue
      range.setStart(node, match.index)
      range.setEnd(node, match.index + 1)
      const r = range.getBoundingClientRect()
      if (r.width > 0 && Math.abs(r.left - left) < 2) strandedSeparators.add(label(block))
    }
  }
  for (const where of strandedSeparators)
    out.push(`separator: a line in ${where} wraps so it starts with a separator; join the separator to the item before it (a no-break space before it, or each "item ·" as one nowrap unit)`)
  return { lines: out, deferred }
}

function driftChecks({ selector }) {
  const root = document.querySelector(selector)
  const rootStyle = getComputedStyle(document.documentElement)
  const probe = document.body.appendChild(document.createElement('div'))
  const families = new Set()
  const radii = new Set()
  for (const name of rootStyle) {
    if (/^--font-(?!weight)/.test(name)) rootStyle.getPropertyValue(name).split(',').forEach((f) => families.add(f.trim().replace(/^["']|["']$/g, '').toLowerCase()))
    else if (name.startsWith('--radius-')) {
      probe.style.borderTopLeftRadius = `var(${name})`
      const px = parseFloat(getComputedStyle(probe).borderTopLeftRadius)
      if (px > 0) radii.add(px)
    }
  }
  probe.remove()
  if (!families.size && !radii.size) return ['drift: no --font-* or --radius-* tokens on :root, so nothing can be compared; name the tokens that way, or drop --drift for a project with its own token names']
  const label = (el) => `${el.tagName.toLowerCase()}${typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/)[0] : ''}`
  const seen = { font: new Map(), radius: new Map() }
  const note = (kind, key, el) => { const hit = seen[kind].get(key) ?? { count: 0, first: label(el) }; hit.count++; seen[kind].set(key, hit) }
  for (const el of root.querySelectorAll('*')) {
    const r = el.getBoundingClientRect()
    if (r.width <= 2 || r.height <= 2 || el.closest('svg')) continue
    const cs = getComputedStyle(el)
    if (cs.display === 'none' || cs.visibility === 'hidden') continue
    if (families.size && [...el.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim())) {
      const family = cs.fontFamily.split(',')[0].trim().replace(/^["']|["']$/g, '')
      if (!families.has(family.toLowerCase())) note('font', family, el)
    }
    if (radii.size) {
      const radius = parseFloat(cs.borderTopLeftRadius)
      const round = radius >= Math.min(r.width, r.height) / 2 - 1
      const nested = [...radii].some((token) => radius <= token && radius >= token - 1)
      if (radius > 0 && !round && !nested) note('radius', `${radius}px`, el)
    }
  }
  const lines = []
  for (const [family, hit] of seen.font) lines.push(`drift: font "${family}" on ${hit.count} element(s), first ${hit.first}; the tokens allow ${[...families].join(', ')}`)
  for (const [radius, hit] of seen.radius) lines.push(`drift: radius ${radius} on ${hit.count} element(s), first ${hit.first}; the tokens allow ${[...radii].sort((a, b) => a - b).map((v) => v + 'px').join(', ')}`)
  return lines
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
  const drift = opts.drift ? await page.evaluate(driftChecks, { selector: opts.select }) : []
  let shot = null
  if (shotsDir) {
    shot = join(shotsDir, `${width}-${scheme}.png`)
    await page.screenshot({ path: shot, fullPage: true })
  }
  await page.close()
  const findings = [...new Set([...real.lines, ...layout.findings.map((f) => `${f.rule}: ${f.message}`), ...film.lines, ...drift, ...errors])]
  return { width, scheme, findings, deferred: [...layout.deferred, ...real.deferred], shot }
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
