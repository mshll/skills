# Verify

Every answer comes from pixels you looked at, never from the code. Fix the largest visible fault first, re-run the gate, return to the top.

## Gate: web

```sh
node ~/.claude/skills/build-ui/scripts/audit.mjs <url> --dark --drift --shots .shots --gate
```

- Default widths 1280 and 390; add the layout's own breakpoints with `--widths 1280,1024,768,390,320`. `--select main` narrows to one region; `--report audit.json` writes JSON.
- One run per state: point the URL at each state (a fixture route, a query flag, a story) or drive the page into it first. A state the audit never rendered is unchecked.
- First run on a new machine: `cd ~/.claude/skills/build-ui/scripts && pnpm install` (installs `playwright-core`; uses the installed Chrome, `CHROME_PATH` overrides).
- `--drift` compares every font family and corner radius on the page with the `--font-*` and `--radius-*` tokens on `:root`. A `drift` line is a value the direction's token file does not hold: use the token, or add the value to the tokens on purpose. A project whose tokens have other names runs the gate without `--drift`.
- `incomplete:` lines do not fail the gate; they name what the audit could not measure. Read those regions in the shots.
- Self-test, per run (width and theme), with `file://` URLs to `scripts/test/`: `bad.html` prints findings; `good.html --dark --gate` ends `audit passed`; `drift.html --drift` prints two `drift` lines (Georgia, 14px); `contrast.html` prints one `small text`, two `low contrast` and one `incomplete` line; `surfaces.html` prints `selection`, `caret` and `tabular`; `overlap.html` prints two `overlap` and two `separator` lines; `overlap-clean.html` ends `audit passed`. A new check counts only once a planted page shows it failing.
- `audit passed` means zero box faults, not a good screen. Read every shot in `.shots/` after it passes.

What it checks, per width and theme: page overflow, cut text without ellipsis, text under 12px, text contrast against its backdrop under 4.5:1 (3:1 from 24px, or 18.66px bold; disabled controls skipped; text over an image or gradient reported `incomplete`), no `::selection` rule, fields left on the default caret, numeric table cells without tabular figures, touch targets under 44px for phone controls and crowded targets under 24px, unnamed controls, images without `alt`, console and page errors, failed requests, control fit and insets (Stageshow `layout-core`), and the Stageshow craft detectors (tight inset, tight and loose stacks, touching text, near-aligned edges, uneven padding and gutters, lopsided pills, mixed or translucent icons, emoji icons, squeezed and spilled controls, clipped glyphs, unit wrapped from its number), text whose painted glyphs run into other text or a control (`overlap`, after clipping by any `overflow` box; fixed and sticky layers skipped), and a wrapped line that starts with a `·`, `•` or `|` separator (`separator`). Cross-origin stylesheets are not read: with one present, `selection` and `caret` report as `incomplete`.

## Gate: SwiftUI

`floor/swiftui.md`, Gate. Read the contact sheet for every screen and state you changed.

## What you see, what you do

| You see | You do |
|---|---|
| `page overflow` | Find the box past the viewport: `min-width: 0` on flex children, `flex-wrap`, `overflow-x: auto` on a table wrapper. Never `overflow-x: hidden` on body |
| `cut text` | Truncate with `text-overflow: ellipsis` and a way back to the full value, or let it wrap. Numbers and amounts get the room |
| `small target` | Pad the control or extend its hit area with a pseudo-element; the visual can stay small |
| `small text` | Raise to 12px or more; meta text is a lighter ink step, not a smaller size |
| `low contrast` | Move the text one ink step toward the ground's opposite, or the ground one step away; a muted ink still meets 4.5:1. Fix the token, so every use moves |
| `incomplete: contrast not measured` | Zoom the shot on each region; text over a photo gets a scrim or sits on a solid band |
| `selection` | `::selection` from the tokens: the accent's tint with the ink that passes on it |
| `caret` | `caret-color` on fields from the accent or the ink token |
| `tabular` | `font-variant-numeric: tabular-nums` on the column, or on every figure that changes |
| `unnamed control` | Visible text, or `aria-label` on an icon button with the icon `aria-hidden` |
| `tight inset` | Words 12px from the card, row or panel edge |
| `tight stack` / `loose stack` | 4 to 6px of ink between title and subtitle; the row's padding carries the air |
| `touching` | A fixed `gap` of 8 to 12px between the pair |
| `overlap` | Text paints over a neighbour, often a `nowrap` span or a count that sits outside its box. Let it wrap, truncate it with a `title`, or give the box the room it needs |
| `separator` | Keep the separator with the item before it: `ago&nbsp;·`, or each `item ·` as one `nowrap` unit |
| `control-block-fit` | Let the content set the height (`min-height`, padding), not a fixed `height` |
| `lopsided` / `uneven` | The control hugs its content; equal padding on both sides |
| `spills its slot` | `minmax(0, 1fr)` or `min-width: 0` on the slot; the content clips inside its box |
| `mixed icons` | One family, one construction (all outline or all filled) per surface |
| `drift` | Replace the literal with the token; a value the direction needs goes into the token file first |
| A value broken mid-number at ax3 (SwiftUI) | Stack label and value at accessibility sizes (`floor/swiftui.md`, Dynamic Type) |
| Gate green, screen still looks generic | Content first (Review, Content), then hierarchy and amount of data, then the signature (Genericness) |
| Ten gate runs, frame unchanged | Stop. Fresh eye: ask a subagent to review the shots against the gold |

## Review

Answer each from the shots, beside the gold, in this order. Any "no" is the next fix; fix in the same order.

**Content** (`floor/content.md`, `floor/data.md`):

- Is the fixture specific: names that vary, uneven magnitudes, units on every figure, real-looking identifiers, the worst case on screen? Could any string appear unchanged in another product?
- Does each figure the user must judge carry its comparison: a delta, a denominator, a target, an average?
- Is normal quiet and the exception loud: normal rows a dot and a word, colour and chips only on exceptions?
- When something blocks the user's goal, is there exactly one consequence statement, in the domain's terms, with its number and one action? And none when nothing blocks?

**Hierarchy:**

- What does the eye land on first, and is it the next step from the plan?
- Is there exactly one primary action on each surface?
- Is this the least data that answers the question? What could go?
- Does it hold at 390 (or 375pt) and at the widest layout, in light and dark?
- Does the worst-case fixture survive: long names, zero rows, 1,284 rows, missing fields, failed load?
- Do siblings match: height, padding, radius, text size, ink?
- Interrupt every motion: click twice fast, hover out halfway, switch views mid-transition. Does anything stack, jump or leave two views mounted?
- Any template tell: card grid, identical metric boxes, card in card, icons in coloured tiles, pills for plain metadata, a gradient or glow?

**Signature:**

- Is the signature on the focal data, repeated where that data repeats, and stopped where `DESIGN.md` stops it?
- Is every tell on screen one the direction licenses, in the place its licence names?
- Put yours beside the gold: say the one difference. Is yours the busier, flatter or emptier one, and why?

## Genericness

Answer from the shots with `DESIGN.md` open. Each test fails on the condition after the colon.

- **Similar prompt.** Would you have built this for any brief in the category? Fails: yes.
- **Category guess.** Could someone guess this look from the category, or from the category plus the never-like list? Fails: yes.
- **Name removed.** Cover the product's name and logo. Can someone tell what it is for? Fails: no.
- **Swap.** Move the signature into a rival product. Fails: it survives unchanged; then it is not this product's.
- **Five places.** Point to five places the signature shows. Fails: fewer than five, and `DESIGN.md` does not say where it is earned to stop.
- **Token names.** Read the token file. Fails: generic names (`--accent-2`, `--gray-700`) where the world gives names (`--ember`).
- **Memory.** What would someone describe an hour later? Fails: a mood ("clean", "dark and moody") instead of a thing ("the dither under the curve").
- **Removal.** Remove each decorative element in your head: texture, rule, glyph, tint, image. Fails: nothing is lost. Costume check: it must encode a quantity, a state or the namesake; cut what does not.
- **Calibration.** Put the shot beside each look in `direction.md`, Calibration. Fails: it resembles one the user did not ask for.

Any fail is a fault ranked with content and hierarchy. The fix is a signature shown or a default replaced, never an added effect.

## Blind review

For the first screen of a new project, a polish pass, and any time the genericness answers are in doubt. Start a subagent that gets the shots, the gold image paths and the Direction section of `DESIGN.md` (in Derive, before `DESIGN.md` exists: that candidate's step 4 line and its colour rules), and nothing of your plan or notes. Ask it, in this order: could this be any product in its category; with the name covered, what is it for; what would it describe an hour later; which signature does it see and where; then the Review questions. It returns `ship` or `fix` with at most five findings, each pointing at a region of a shot. Fix them and re-run the gate. A second review is optional: run it only when a fix changed the layout or the signature.

## Handover

```md
## UI handover: <screen>
Direction: <name>. Signature: <datum> drawn as <form>; shows on <places>; stops at <where>
Colour rules: <token>: <rule>; <token>: <rule>
Licences used: <rule, place> | none
Gold: <pattern file> (took: …); <technique file> (took: …)
States checked: <list>, at <widths / sizes>, light and dark
Gate: <last line of audit.mjs, or "snapshot sheet read: no faults">
Genericness: similar prompt …; category guess …; name removed …; swap …; five places …; token names …; memory: "<what they'd describe>"; removal …; calibration …
Blind review: <ship | fix and what changed | not run>
Fixed after review: <list>
Not checked: <interactions, devices, states, real data, screen reader, regions marked incomplete>
```
