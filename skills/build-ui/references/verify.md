# Verify

Every answer comes from pixels you looked at, never from the code. Fix the largest visible fault first, re-run the gate, return to the top.

## Gate: web

```sh
node ~/.claude/skills/build-ui/scripts/audit.mjs <url> --dark --shots .shots --gate
```

- Default widths 1280 and 390; add the layout's own breakpoints with `--widths 1280,1024,768,390,320`. `--select main` narrows to one region; `--report audit.json` writes JSON.
- One run per state: point the URL at each state (a fixture route, a query flag, a story) or drive the page into it first. A state the audit never rendered is unchecked.
- First run on a new machine: `cd ~/.claude/skills/build-ui/scripts && pnpm install` (installs `playwright-core`; uses the installed Chrome, `CHROME_PATH` overrides).
- Self-test: `test/bad.html` must print findings, `test/good.html` must end `audit passed`.
- `audit passed` means zero box faults, not a good screen. Read every shot in `.shots/` after it passes.

What it checks, per width and theme: page overflow, cut text without ellipsis, text under 11px (12px at phone width), touch targets under 44px for phone controls and crowded targets under 24px, unnamed controls, images without `alt`, console and page errors, failed requests, control fit and insets (Stageshow `layout-core`), and the Stageshow craft detectors (tight inset, tight and loose stacks, touching text, near-aligned edges, uneven padding and gutters, lopsided pills, mixed or translucent icons, emoji icons, squeezed and spilled controls, clipped glyphs, unit wrapped from its number).

## Gate: SwiftUI

`swiftui.md`, Gate. Read the contact sheet for every screen and state you changed.

## What you see, what you do

| You see | You do |
|---|---|
| `page overflow` | Find the box past the viewport: `min-width: 0` on flex children, `flex-wrap`, `overflow-x: auto` on a table wrapper. Never `overflow-x: hidden` on body |
| `cut text` | Truncate with `text-overflow: ellipsis` and a way back to the full value, or let it wrap. Numbers and amounts get the room |
| `small target` | Pad the control or extend its hit area with a pseudo-element; the visual can stay small |
| `small text` | Raise to the type floor; meta text is a smaller ink step, not a smaller size |
| `unnamed control` | Visible text, or `aria-label` on an icon button with the icon `aria-hidden` |
| `tight inset` | Words 12px from the card, row or panel edge |
| `tight stack` / `loose stack` | 4 to 6px of ink between title and subtitle; the row's padding carries the air |
| `touching` | A fixed `gap` of 8 to 12px between the pair |
| `control-block-fit` | Let the content set the height (`min-height`, padding), not a fixed `height` |
| `lopsided` / `uneven` | The control hugs its content; equal padding on both sides |
| `spills its slot` | `minmax(0, 1fr)` or `min-width: 0` on the slot; the content clips inside its box |
| `mixed icons` | One family, one construction (all outline or all filled) per surface |
| A value broken mid-number at ax3 (SwiftUI) | Stack label and value at accessibility sizes (`swiftui.md`, Dynamic Type) |
| Gate green, screen still looks generic | The fault is hierarchy or amount of data: back to the plan, not to spacing |
| Ten gate runs, frame unchanged | Stop. Fresh eye: ask a subagent to review the shots against the gold |

## Review

Answer each from the shots, beside the gold:

- What does the eye land on first, and is it the next step from the plan?
- Is there exactly one primary action on each surface?
- Is this the least data that answers the question? What could go?
- Does it hold at 390 (or 375pt) and at the widest layout, in light and dark?
- Does the worst-case fixture survive: long names, zero rows, 1,284 rows, missing fields, failed load?
- Do siblings match: height, padding, radius, text size, ink?
- Interrupt every motion: click twice fast, hover out halfway, switch views mid-transition. Does anything stack, jump or leave two views mounted?
- Any template tell: card grid, identical metric boxes, card in card, icons in colored tiles, pills for plain metadata, a gradient or glow?
- Put yours beside the gold: say the one difference. Is yours the busier, flatter or emptier one, and why?

## Handover

```md
## UI handover: <screen>
Gold: <file> (kept: …; changed: …)
States checked: <list>, at <widths / sizes>, light and dark
Gate: <last line of audit.mjs, or "snapshot sheet read: no faults">
Fixed after review: <list>
Not checked: <interactions, devices, states, real data, screen reader>
```
