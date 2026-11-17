# Tokens

The token file is a set of **roles**. Components are written against roles ("ink-12", "hue-3 with hue-11 text", "two steps above its ground"), never against hex codes, so one component set works with any palette, typeface and surface model.

**Recipes use tokens only.** Colours, radii, shadows, type and heights come from variables; spacing comes from the 4px scale (`px-3.5`, `gap-1.5`). A literal px or hex in a recipe is a bug: a remap can't reach it.

What the floor fixes: the roles, the step jobs, the step-shift rule, the contrast gates, the spacing grid, the motion tokens and the z-index ladder. What the direction sets: every colour value, the primary fill, the line weight, the shadow and edge recipe, the radii, the faces and weights, and the sizes that follow from density. Section 1 maps each axis to its tokens. Every concrete colour, radius, shadow and type size below is from **the worked example** unless it is marked universal: Radix sand neutral, Inter at 13px, an ink primary, compact density, the raised-controls surface model. It shows how the roles fill; it is one direction's values, not a default.

## Naming

- **Roles underneath, world names on top.** Fill the role tokens (`--ink-*`, `--accent-*`, `--red-*`, `--primary-bg`), then alias where the world is rich: `--ember: oklch(…); --signal: var(--ember);`. Components read the role (`--signal`), so swapping the world name never touches a component.
- **Each accent token carries its rule as a comment**: when it appears and what it means.

```css
--ember: oklch(0.68 0.19 42);
--signal: var(--ember); /* only while a kiln is firing or a firing failed; nothing else */
--glaze: oklch(0.55 0.08 200);
--identity-glaze: var(--glaze); /* the glaze studio's own records: badge, bar, avatar tint */
```

A colour with no rule is a bug (see `README.md`, Never ship).

## 1. Values from the direction

Each axis in `../direction.md` sets a group of tokens. Fill them in this order; the gates in §12 run last.

| Axis | Sets | How |
|---|---|---|
| Colour strategy | `--accent-*`, `--signal`, identity hues, `--primary-bg`/`-fg`, rail and field fills | Restrained: one accent for primary, selection and focus; primary is ink or the accent. Signal: the signal hue on live marks only; primary is ink. Committed shell: rail in brand-9 to -11, selection in the rail one step lighter, primary may be brand-9. Field: a 3/4 tint per section with its own -11/-12 text. One ink: a dark hue replaces ink-12 for text, lines and the primary. Sampled: accent from the artwork, contrast checked per sample. Write the rule beside each token. |
| Ground | which theme leads, the neutral's temperature, `--surface-top`, the dark ground | Warm scene: a warm neutral (sand, olive, mauve). Cool or neutral scene: slate or gray. Dim scene: dark leads and is designed first. `--surface-top` is white for a neutral light ground, a step lighter than root ink-1 when the neutral is tinted. |
| Type | `--font-sans`, `--font-voice`, `--font-mono`, `--font-weight-*`, tracking | The workhorse passes Typeface fit (§12). A voice face goes only where the direction's type axis puts it (`../toolbox/type.md`). One to three weights. |
| Density | `--text-body`, `--row-h`, `--control-h`, cell padding | Compact ops: rows ~36px, body 13px, control 32-36px. Regular: rows ~44px, body 14px, control 36-40px. Roomy consumer: rows ~56-64pt, body 15-17pt, control 44-50pt. Heights follow §9. |
| Surface model | `--hairline`, `--line`, `--surface-top` use, every `--shadow-*`, `--radius-control`, `--control-bg` | The model recipes below. |
| Motion character | spring bounce, which duration in each range | Crisp: the low end of each range, bounce ≤ 0.12. Springy: bounce 0.15-0.25. Stepped: readouts change without tween. The ranges and curves themselves are the floor (`motion.md`). |

### Surface model recipes

Each recipe sets the edge, drop and radius tokens. Light and dark both follow the role rules in §2-§6. Values are starting points.

**Hairline.** One ground; nothing floats but overlays.
- `--ground` = `--panel` = `--raised` = `--surface-top`. Structure is `--line` rules between rows and sections; `--hairline` 0.5px or 1px.
- `--shadow-button`: `0 0 0 1px var(--line)`, no drop. `--shadow-card` and `--shadow-table`: none (a rule does the job).
- Menus, popovers and modals keep a ring and one short drop: overlays always float.
- `--radius-control` 4-6px.

**Panel on ground.** A tinted ground, one content panel.
- `--ground` ink-2 to ink-3 (a light grey ground, ~#F2-F4 in the user's saves); `--panel` = `--surface-top`, `--radius-container` 10-16px.
- `--shadow-panel`: a 0.5px ink-a4 ring, or none. Rows inside the panel are hairlines; cards inside are rare.
- Controls: `--surface-top` with a 1px ring and an optional 1px drop.

**Raised controls.** Controls and cards lifted from their ground. The worked example.
- `--raised` and `--control-bg` = `--surface-top` in light; each level is a 1px ring plus a 1px drop, plus at most one short tucked drop (§6).
- Optional on a light key: a vertical fill gradient within 1-2% L and a white inset top (Q09N69).
- `--radius-control` 4-8px; the rest follow (§7).

**Tonal.** Soft tinted tiles; colour and space separate layers.
- `--raised`: ink-3 or a hue-2/3 tint on `--surface-top`. No edges: `--shadow-button` and `--shadow-card` none, or a drop under 4% opacity.
- `--radius-container` 20-28pt; `--radius-control` 12pt to full.
- Hover deepens the tint one step. Overlays keep their short drop.

**Field.** Flat colour blocks are the structure.
- Each section's fill is its hue-3 or -4; text in its -11/-12, never neutral ink.
- No lines, no drops. Radius from the direction (12-20px is common).
- A control inside a field takes the field's hue: fill -9 or -12, ring in that hue one step darker.

**Stepped dark.** Lightness steps with solid outlines.
- `--ground` below ink-1 (§12 step 3); `--panel` ink-1; `--raised` ink-2; `--control-bg` its parent + 2.
- Every edge a solid outline three steps above its own fill, the same colour all round; `--hairline` 0.5px.
- Drops black and tight: `0 1px 2px 0 rgb(0 0 0 / .5)`, plus one short drop on cards and overlays.
- Dark filled buttons and keycaps may carry a 0.5px lit top: `inset 0 0.5px 0 <a few steps lighter than the fill>` (A28DN6, 22E4AH, J7P456). Cards and panels keep one even outline.

**Object.** The screen is one body with a readout. The body is one raised surface from whichever recipe above fits; the readout follows `../toolbox/data-marks.md`, Readout.

## 2. The neutral scale (ink)

Twelve steps, each with a job (universal). Any 12-step neutral works if each step does its job and passes the gates in §12.

| Step | Job | Example light (sand) | Example dark (sand) |
|---|---|---|---|
| ink-1 | page ground | #fdfdfc | #111110 |
| ink-2 | app ground, raised surface in dark, stripe | #f9f9f8 | #191918 |
| ink-3 | quiet fill: field well, chip, selected row | #f1f0ef | #222221 |
| ink-4 | hover on a fill, focused well | #e9e8e6 | #2a2a28 |
| ink-5 | pressed fill, dark hairline | #e2e1de | #31312e |
| ink-6 | hairline, control ring | #dad9d6 | #3b3a37 |
| ink-7 | strong line, hovered border | #cfceca | #494844 |
| ink-8 | rare: disabled text on fills | #bcbbb5 | #62605b |
| ink-9 | faint: leading icons, group titles | #8d8d86 | #6f6d66 |
| ink-10 | tertiary: placeholders, chevrons, close ×, a timestamp beside a value | #82827c | #7c7b74 |
| ink-11 | secondary text: descriptions, body, row icons | #63635e | #b5b3ad |
| ink-12 | strong text: titles, values, labels | #21201c | #eeeeec |

**Text a user must read to act passes 4.5:1 on its surface.** Most generated neutrals miss that on the faint steps. Sand, measured: light ink-10 3.87:1 on white and 3.40:1 on ink-3; light ink-9 3.34:1 on white; dark ink-10 4.45:1 and dark ink-9 3.65:1 on ink-1. So either tune ink-9 and ink-10 until they pass, or keep them for placeholders, chevrons, icons and separators and set essential text (rail labels, empty-state lines, figure labels, pager counts) in ink-11.

**Alpha steps** (`--ink-a3`, `--ink-a4`) draw rings that must work on any fill. Take them from the scale's generator, or derive them (§12 step 2).

**Choose the neutral once, at setup.** It may lean toward the brand hue (slate with blue, olive with green, sand with orange). After that, keep brand hue out of the neutral steps.

## 3. Surface roles

Relations are universal; the light values come from the surface model (§1).

| Role | Light | Dark | Why |
|---|---|---|---|
| Ground (window, rail) | the model's ground | a stop below ink-1 | In dark the darkest thing is furthest back. |
| Panel (page body) | `--surface-top` | ink-1 | The working area is the top plane in light, one step up in dark. |
| Raised (cards) | the model's raised fill | parent + 1 | Light raises by edge and drop or by tint; dark raises by being lighter. |
| Control fill (`--control-bg`) | the model's control fill | parent + 2 | In dark a control sits a step above a surface, so it reads as pressable. |
| Well (fields, toggle tracks) | one step darker than its surface | one step lighter | A field sinks. |
| Overlay (modal, menu, popover) | `--surface-top` | ink-2 | Overlays keep their drop in both themes and in every model. |
| Hover on any fill | local ground + 1 | local ground + 1 | One step reads. |
| Selected on any fill | local ground + 2 | local ground + 2 | Hover stays a step below selected, so the two never match. Hovering a selected item keeps it selected. |
| Tooltip | ink-12 fill with ink-1 text, or ink-3 with a hairline | inverted | Short labels for icon-only actions. |

## 4. The step-shift rule

Universal mechanic. Components are drawn as if they sit on an ink-1 page. A container whose ground is a different step **remaps steps 1-7 inside itself**, so every child keeps the same contrast against its ground. Text steps 8-12 never move, so ink reads the same everywhere.

| Surface (light) | Remap | Effect |
|---|---|---|
| Rail on an ink-2 ground | 1→2, 2→3 … 7→8 | A child's ink-2 hover becomes ink-3; an ink-6 line becomes ink-7. |
| Panel | 1→surface top | The page is the top surface. |
| Overlay | 1→surface top, 2→surface top, 3-7 root | Fields inside are true ink-3; hovers use `--root-ink-2`. |
| Raised inside a rail or panel | reset to root | A raised surface is its own ground again. |

In dark the surfaces keep the root scale: the ground is already below ink-1, so panel (ink-1) and overlays (ink-2) step up on their own. Each dark surface instead redeclares `--control-bg` and any solid outline.

**A control's fill, edge and drop come from its ground** (the role rule in `controls.md`). Tokens make that work:

- A step can't be defined from its own neighbours on the same element (each would chain to the last). Keep fixed `--root-ink-N` handles per theme and remap `--ink-N` from those.
- A variable built from a working step resolves where it is declared, not where it is used. Redeclare it on each surface class or it keeps the root step: `--line`, `--control-bg`, `--shadow-primary`, and any shadow with a solid outline. Redeclare an alias (`--shadow-toggle: var(--shadow-button)`) beside it for the same reason.
- An edge or drop drawn in alpha (`rgb(ink / a)`, black, a `currentColor` mix) adapts to whatever is beneath and needs no redeclaration.

Worked example (raised controls; light rings in alpha, dark outlines solid):

```css
/* Light. Scope to light, e.g. :root:not([data-theme="dark"]) .surface-rail { … } */
.surface-rail, .surface-panel, .surface-overlay, .surface-raised {
                   --line: var(--ink-6); --shadow-primary: 0 0 0 1px var(--ink-1); }
.surface-rail    { --ink-1: var(--root-ink-2); --ink-2: var(--root-ink-3); --ink-3: var(--root-ink-4);
                   --ink-4: var(--root-ink-5); --ink-5: var(--root-ink-6); --ink-6: var(--root-ink-7);
                   --ink-7: var(--root-ink-8); }
.surface-panel   { --ink-1: var(--surface-top); }
.surface-overlay { --ink-1: var(--surface-top); --ink-2: var(--surface-top); --ink-3: var(--root-ink-3);
                   --ink-4: var(--root-ink-4); --ink-5: var(--root-ink-5); --ink-6: var(--root-ink-6);
                   --ink-7: var(--root-ink-7); }
.surface-raised  { --ink-1: var(--root-ink-1); --ink-2: var(--root-ink-2); --ink-3: var(--root-ink-3);
                   --ink-4: var(--root-ink-4); --ink-5: var(--root-ink-5); --ink-6: var(--root-ink-6);
                   --ink-7: var(--root-ink-7); }

/* Dark. Steps stay root; each surface sets the control fill (parent + 2) and an outline
   three steps above it. Repeat under prefers-color-scheme, as in the template. */
:root[data-theme="dark"] .surface-panel {
  --control-bg: var(--root-ink-3); --control-hover: var(--root-ink-4);
  --shadow-button: 0 0 0 0.5px var(--root-ink-6), 0 1px 2px 0 rgb(0 0 0 / .5);
  --shadow-toggle: var(--shadow-button); }
:root[data-theme="dark"] :is(.surface-raised, .surface-overlay) { /* a table takes .surface-raised */
  --control-bg: var(--root-ink-4); --control-hover: var(--root-ink-5);
  --shadow-button: 0 0 0 0.5px var(--root-ink-7), 0 1px 2px 0 rgb(0 0 0 / .5);
  --shadow-toggle: var(--shadow-button); }
```

## 5. Hue scales (accent, signal, status, identity)

Every coloured scale has the neutral's 12 positions (universal). Few are used:

| Step | Role |
|---|---|
| hue-3 | tint fill: exception chips, callouts, toasts, status rows, field sections |
| hue-4 | tint hover |
| hue-6 | edge on a tint |
| hue-9 | solid: dots, chart bars, done marks, the destructive confirm, a switch that's on, a coloured primary |
| hue-10 | solid hover |
| hue-11 | text on a tint |
| hue-12 | high-contrast text, text on a field |

One accent is one hue. Its fill (hue-9) and its text (hue-11) are steps of the same scale; never a second near-hue (two ambers, two blues) for text and fill. Check both themes: a light-theme hue-11 pulled toward brown beside a bright hue-9 reads as a second colour.
| hue-contrast | text on hue-9: white for most hues, dark for yellow, amber, lime, mint and sky |

**The tinted pattern:** hue-3 fill, hue-11 text, optional hue-6 hairline. In a Tailwind-style alias, map `-500` to step 9 and `-400` and `-700` to step 11.

**Status roles are fixed and win every clash** (universal):

| Role | Default hue | Meaning |
|---|---|---|
| success / live | green | running, live, done; only when the count is above 0 |
| danger | red | failed, error, deleted, destructive |
| warning | yellow or amber | caution, needs attention |
| info | blue | information, beta |
| inactive | neutral | stopped, paused, off |

Other roles come from the colour strategy, each with its written rule: `--accent` (primary, selection, focus under restrained), `--signal` (one meaning, nothing else), identity hues (a category, tier or product, carried to its badge, bar and avatar tint), field hues (a section).

**Collision rule.** A brand hue within about 25° of a status hue in OKLCH becomes that status's scale and leaves identity use; identity then takes a non-status hue, or status pairs with its own icon. One hue never means both status and identity on a screen. The rule covers every hue the direction adds, including hues used only in data (a material colour, a chart series, a category tint): a data hue within 25° of a status hue moves away from it, or means that status.

**Brand colours:** generate 12 light and 12 dark steps per brand colour (Radix's custom palette method gives alpha steps and the contrast colour too). Alias each standard family to its nearest brand colour; keep the brand scales under their own or world names.

## 6. Lines and shadows

| Token | Sets it | Rule |
|---|---|---|
| `--hairline` | surface model (0.5px or 1px) | One weight for every structural line in the product: borders, dividers, rules, table cells. |
| `--line` | ink-6 light, ink-5 dark (example) | In dark every structural line is one step darker, so lines don't glow. Redeclare it on the element that draws it. |
| `--focus-ring` | a step that passes 3:1 on every surface (ink-10 in the example) | Universal: `outline: 2px solid var(--focus-ring); outline-offset: 2px`, or `box-shadow: 0 0 0 2px var(--focus-ring)` on a field. Never a hard-coded dark alpha: it vanishes in dark. |
| Marks and strokes | the icon stroke | Radio and checkbox rings, icon strokes, spinners: one stroke, matched to the UI weight (1.5px at 16px in the example). |
| Scrollbar (desktop) | 8px, thumb at the hairline step | None on phones. |

A ring drawn as `box-shadow: 0 0 0 <w> var(--line)` replaces a border without touching layout.

**Shadow roles** (universal names; values from the surface model):

| Token | Used for |
|---|---|
| `--shadow-button` | secondary buttons, utility pills, a small dialog shown in place |
| `--shadow-primary` | the primary |
| `--shadow-toggle` | the chosen option of a segmented toggle, filter pills, the switch knob |
| `--shadow-card` | cards |
| `--shadow-table` | tables |
| `--shadow-panel` | the page body over the ground |
| `--shadow-menu`, `--shadow-popover` | menus, dropdowns, search, popovers |
| `--shadow-modal` | dialogs, side panels |
| `--shadow-badge` | exception chips, drawn from their own `currentColor` |
| `--backdrop` | the dim behind a modal |

**Universal shadow rules:**

- A drop is darker than the surface under it. Light drops are drawn in the neutral's ink-12 (`--shadow-ink`), so a tinted neutral gets one shadow colour; dark drops are black. A hue's light text colour as a blurred shadow reads as a glow.
- **The ladder is crisp.** Each level is the previous level plus at most one short drop tucked under the object by a negative spread (blur minus 1, e.g. `0 3px 4px -1px`). No large soft blur at any level.
- In dark a shadow is never the only cue: a raised thing is also lighter and outlined (`surfaces.md`, Elevation).
- A coloured element's ring is its own hue one step darker, never grey.
- A lit top edge goes only on dark filled buttons and keycaps, at 0.5px.

Worked example values (raised controls; `rgb(ink / a)` is `rgb(var(--shadow-ink) / a)`):

| Token | Light | Dark |
|---|---|---|
| `--shadow-button` | `0 1px 2px 0 rgb(ink / .12), 0 0 0 1px rgb(ink / .08)` | `0 0 0 0.5px <fill + 3 steps>, 0 1px 2px 0 rgb(0 0 0 / .5)`, per surface (§4) |
| `--shadow-primary` | `0 0 0 1px var(--ink-1)` (a ring in the local surface colour) | `0 0 0 0.5px var(--primary-bg), 0 1px 2px 0 rgb(0 0 0 / .5)`, optional `inset 0 0.5px 0 <lighter>` on an ink fill |
| `--shadow-card` | `0 0 0 1px rgb(ink / .07), 0 1px 2px 0 rgb(ink / .12), 0 3px 4px -2px rgb(ink / .08)` | `0 0 0 0.5px ink-6, 0 1px 2px 0 rgb(0 0 0 / .5), 0 3px 4px -2px rgb(0 0 0 / .4)` |
| `--shadow-table` | `0 1px 2px 0 rgb(ink / .12)` | `0 1px 2px 0 rgb(0 0 0 / .5)` |
| `--shadow-panel` | `0 0 0 0.5px ink-a4, 0 1px 2px 0 rgb(ink / .015), 0 3px 4px -2px rgb(ink / .025)` | `0 0 0 0.5px ink-a3, 0 1px 2px 0 rgb(0 0 0 / .5), 0 3px 4px -2px rgb(0 0 0 / .4)` |
| `--shadow-menu` | `0 0 0 1px rgb(ink / .08), 0 1px 2px 0 rgb(ink / .12), 0 4px 8px -4px rgb(ink / .16)` | `0 0 0 0.5px ink-7, 0 1px 2px 0 rgb(0 0 0 / .5), 0 4px 8px -4px rgb(0 0 0 / .5)` |
| `--shadow-modal` | `0 0 0 1px rgb(ink / .07), 0 1px 2px 0 rgb(ink / .14), 0 6px 8px -4px rgb(ink / .14)` | `0 0 0 0.5px ink-7, 0 1px 2px 0 rgb(0 0 0 / .5), 0 6px 8px -4px rgb(0 0 0 / .5)` |
| `--shadow-badge` | `0 1px 2px 0 color-mix(in srgb, currentColor 16%, transparent), 0 0 0 1px color-mix(in srgb, currentColor 14%, transparent)` | `0 0 0 0.5px color-mix(in srgb, currentColor 34%, #000), 0 1px 2px 0 rgb(0 0 0 / .5)` |
| `--backdrop` | `rgb(0 0 0 / .3)` | `rgb(0 0 0 / .9)` |

## 7. Radii

Set `--radius-control` from the surface model; the ladder follows (formulas universal, values example).

| Token | Example | Formula | Where |
|---|---|---|---|
| `--radius-xs` | 3px | control / 2 | key chips |
| `--radius-sm` | 4px | control − 2px | checkbox marks |
| `--radius-control` | 6px | set by the model | buttons, fields, selects, menu items, rail rows |
| `--radius-container` | 8px | control + 2px (tonal and panel models set it directly) | panel, cards, tables, popovers, menus, desktop dialogs |
| `--radius-feature` | 12px | container × 1.5 | large notices, feature cards |
| `--radius-sheet` | 14px | the platform's sheet radius | top corners of a phone sheet |
| full | 999px | | pills, dots, avatars, toggle tracks |

**Nested radius = outer radius minus the gap** (universal): minus the border when an edge sits between them, minus the padding when content is inset. A header band inside an 8px dialog keeps 8px when the dialog's edge is a shadow ring, 7.5px under a 0.5px border. A full-bleed phone panel has radius 0.

## 8. Type

**Faces.** One workhorse sans for every control, row and label. A voice face only where the direction's type axis puts it. One mono for machine values (IDs compared character by character, code, keys) or as the whole voice of an instrument product.

**Weights.** One to three. Hierarchy is a size step plus an ink step first; weight is the last lever. Pick the body weight with the weight test (§12, Typeface fit). The example renders every UI weight at Inter 500 and keeps bold for rare emphasis: one direction's choice.

**Line heights are absolute px** on the 4px grid, so children inherit a px value.

Roles are universal; sizes follow density. Compact is the worked example; regular and roomy are derived starting points (not measured), adjusted in the direction.

| Role | Token | Compact | Regular | Roomy | Ink |
|---|---|---|---|---|---|
| Display (one per page at most) | `--text-display` | 32/40 | 32/40 | 34/40 | 12 |
| Hero figure | `--text-figure` | 28/36 | 32/40 | 34/40 | 12, `tabular-nums` |
| Page or section title | `--text-section` | 20/28 | 20/28 | 24/32 | 12 |
| Card, dialog, step title | `--text-title` | 16/24 | 16/24 | 20/28 | 12 |
| Body, controls | `--text-body` | 13/20 | 14/20 | 17/24 | 12 values, 11 descriptions |
| Meta | `--text-meta` | 12/16 | 12/16 | 13/20 | 10 or 11 (§2 gate) |
| Badge | `--text-meta` | 12/20 | 12/20 | 13/20 | hue-11 |
| Field text | `--text-field` | body | body | body | 12 |

Universal floors: hint and meta text ≥ 12px; phone body ≥ 15px; field text 16px on any touch screen (iOS zooms into a smaller field). Hero figure ranges are in `data.md`, Figures.

**Tracking** comes from the face (§12, Typeface fit). Example for Inter: −0.01em on button labels, −0.02em on display, +0.02em on mono in inputs.

## 9. Spacing and sizes

**Grid** (universal): 4px with 2px half-steps. The ladder: 2, 4, 6, 8, 12, 16, 20, 24, 32, 48, 64.

| Where | Spacing (universal) |
|---|---|
| Inside a control or row (icon to label, chip padding) | 4-8px |
| Between items in a group, button to button | 8-12px |
| Between fields, between blocks in a form | 16-20px |
| Card padding, dialog body | 16-24px |
| Between sections | 24-32px |
| Above the first title / page foot | 48px / 64px |

**Heights follow from line height plus padding** (universal): 36 = 20 + 2 × 8; 44 = 20 + 2 × 12. When density changes the type, recompute. Touch targets are 44pt on any touch screen.

| Size | Token | Compact (example) | Regular | Roomy |
|---|---|---|---|---|
| Control | `--control-h` | 36px | 40px | 44-50pt |
| Compact control | `--control-h-compact` | 32px | 32px | 36pt |
| Pill, toggle option, icon button | `--control-h-pill` | 28px | 32px | 36pt |
| Inline row action | `--control-h-inline` | 24px | 28px | 32pt |
| Row icon button | `--control-h-icon` | 22px | 24px | 28pt |
| Badge, search key pill | `--badge-h` | 20px | 22px | 24pt |
| Button key chip | `--key-chip` | 18px | 18px | n/a (no keys) |
| Table row | `--row-h` | 36-38px | 44px | 56-64pt |

On a phone `--control-h` and `--row-h` are 44pt at minimum in every density.

## 10. Motion tokens

Floor tokens; full rules in `motion.md`. The direction's motion character picks within the ranges there and sets spring bounce.

| Token | Value | Role |
|---|---|---|
| `--ease-out` | `cubic-bezier(.23, 1, .32, 1)` | anything the user caused: press, swap, enter, exit, hover, colour |
| `--ease-move` | `cubic-bezier(.22, 1, .36, 1)` | long on-screen moves of big objects (400-450ms) |
| `--ease-drawer` | `cubic-bezier(.32, .72, 0, 1)` | a sheet after the finger lets go |
| `--ease-in-out` | `cubic-bezier(.77, 0, .175, 1)` | one-off: a card folding to its header, both ends on screen |
| `--dur-hover` | 150ms | hover, press, colour |
| `--dur-swap` | 200ms | content swaps, overlay fade, exits |
| `--dur-modal` | 240ms | modal card in |
| `--dur-move` | 300ms | larger state changes, height following content |

Define each curve once.

## 11. Z-index ladder

Universal.

| Layer | z |
|---|---|
| Phone nav menu | 40 (below dialogs, so modals opened from it appear above) |
| Third-party dialogs, popovers, tooltips mounted outside the app's own modals | 50 |
| Fullscreen media viewer | 95 |
| App modals, side panels, menus, search | 100 |
| Anything opened from a modal (select, menu) | 110 |
| Toast, context menu | 120 |

## 12. Build and remap

Steps for a new token file, or for moving an existing one to new values.

1. **Neutral.** Choose a 12-step neutral for light and dark, once (§2). Fill `--root-ink-1..12`. Then pass the **contrast gates** (universal):
   - ink-12: ≥ 7:1 on ink-1 to ink-3.
   - ink-11: ≥ 4.5:1 on ink-3.
   - ink-10: ≥ 4.5:1 on ink-1 if it carries meta or labels; otherwise placeholders, chevrons and icons only, at ≥ 3:1.
   - ink-9: icons and non-essential text only, ≥ 3:1.
   - hue-11: ≥ 4.5:1 on hue-3. Field text (-11/-12): ≥ 4.5:1 on its field.
   - `--primary-fg`: ≥ 4.5:1 on `--primary-bg`.
   - ink-6: ≥ 1.35:1 against `--surface-top`, so a 0.5px hairline shows (sand: 1.41).
   - `--focus-ring`: ≥ 3:1 on `--surface-top`, ink-3, every control fill and the dark surfaces.
2. **Alpha steps.** From the scale's generator, or light `--ink-a3: color-mix(in oklab, var(--root-ink-12) 6%, transparent)` and `--ink-a4` at 10%; dark 7% and 11% of dark ink-12. Check that ink-a3 over ink-1 roughly equals ink-3.
3. **Dark ground.** Lower dark ink-1's OKLCH L by the ink-1 to ink-2 gap (about 0.04) at the same hue and chroma. Sand: L 0.177 to 0.134, #080807.
4. **Surface top.** From the ground axis (§1). Re-check the ink-6 hairline against it.
5. **Hues.** Generate 12 light and 12 dark steps per brand colour. Fill the steps you use (3, 4, 6, 9, 10, 11, 12, contrast). Map status roles and apply the collision rule (§5). If a brand colour at step 9 gives under 4.5:1 with both white and ink-12, keep it as step 9 for fills without text and use -10 or -11 where a solid carries a label. Alias world names on top (Naming).
6. **Primary.** From the colour rule: ink (`--primary-bg: var(--ink-12)`, `--primary-fg: var(--ink-1)`) or a hue (`-9` fill, `-contrast` text, `-10` hover, ring in the hue one step darker). A hue that fills the primary leaves status use, and destructive red stays clearly different from it.
7. **Shadow ink.** `--shadow-ink`: light ink-12 as RGB. Dark drops stay black.
8. **Surface model.** Fill `--hairline`, `--line`, `--control-bg`, every `--shadow-*` and `--radius-control` from the model's recipe (§1), then the per-surface redeclarations (§4).
9. **Density.** Fill the type sizes (§8) and heights (§9) for the density.
10. **Typeface.** Set `--font-sans`, `--font-mono` and any `--font-voice`, then run Typeface fit.
11. **Leave the floor.** The spacing grid, motion tokens, z-index, gates and step jobs stay. A change to them is a floor change, proposed at the Taste step.

### Typeface fit

The example's size table was tuned on Inter. Fit another face in four steps.

1. **Size.** `font-size-adjust: 0.546` on `:root` (Inter's x-height over its em) makes any face match Inter's apparent size at the table's px values. It is inherited, so it covers the mono. Where it isn't available, multiply every size by `0.546 / (your sxHeight / unitsPerEm)` and round to 0.5px. Keep line heights on the 4px grid; raise one by a 4px step if ascender plus descender is over 1.2em. If sizes scale by f, scale the column widths in `layout.md` by f.
2. **Weight.** Render one body-size string at 400, 500 and 600. Pick the weight that reads solid at body size without going heavy (Inter 500 is the example's reference coverage); ties go lighter. On a variable font, 450-550. No medium: use 400 and keep hierarchy in ink. Never a synthesised weight.
3. **Tracking.** A loose face (Inter) takes −0.01em on labels and −0.02em on display; a tight face takes 0. Never below −0.02em at 16px or smaller.
4. **Requirements.** Tabular figures (`tnum`), a real ellipsis glyph (…), the chosen weights as real masters, and every script the product ships. No `tnum`: set aligned figures in the mono.

**Other faces.**

- **Voice face** (serif titles, display figure, rounded derivative, dot numerals): only at the places the direction names (`../toolbox/type.md`), in one weight. Workhorse everywhere else.
- **Non-Latin scripts** (CJK, Arabic, Devanagari): body one step up (14/22 at compact, 16/24 on a phone), no negative tracking, no uppercase rules, `font-size-adjust` per fallback face.
- **Mono:** match the sans's x-height with `font-size-adjust`, or set it at 0.92em as a fallback. Most monos look larger than the sans at the same px.

### Mapping from other token systems

| shadcn | This system |
|---|---|
| background | `--panel` |
| foreground | ink-12 |
| card, popover | `--raised`, `--overlay` |
| muted, input | ink-3 |
| muted-foreground | ink-11 |
| border | `--line` |
| primary / primary-foreground | `--primary-bg` / `--primary-fg` |
| ring | `--focus-ring` |
| destructive | red-9 |

Tailwind grays to ink steps: 50 → 1, 100 → 2-3, 200 → 4-5, 300 → 6-7, 400 → 8-9, 500 → 10, 600 → 11, 900-950 → 12. 700-800 have no direct step; use 11 or 12.

### CSS template

Structure is universal; every value is the worked example (sand, Inter, compact, raised controls, ink primary). Replace the values from §1.

```css
:root {
  /* Neutral (example: Radix sand, light). Fixed handles; never remapped. */
  --root-ink-1: #fdfdfc; --root-ink-2: #f9f9f8; --root-ink-3: #f1f0ef; --root-ink-4: #e9e8e6;
  --root-ink-5: #e2e1de; --root-ink-6: #dad9d6; --root-ink-7: #cfceca; --root-ink-8: #bcbbb5;
  --root-ink-9: #8d8d86; --root-ink-10: #82827c; --root-ink-11: #63635e; --root-ink-12: #21201c;
  --ink-a3: #20100010; --ink-a4: #1f150019;

  /* Working steps: components use these; surfaces remap 1-7 (§4). */
  --ink-1: var(--root-ink-1); --ink-2: var(--root-ink-2); --ink-3: var(--root-ink-3);
  --ink-4: var(--root-ink-4); --ink-5: var(--root-ink-5); --ink-6: var(--root-ink-6);
  --ink-7: var(--root-ink-7); --ink-8: var(--root-ink-8); --ink-9: var(--root-ink-9);
  --ink-10: var(--root-ink-10); --ink-11: var(--root-ink-11); --ink-12: var(--root-ink-12);

  /* Surfaces (example: raised controls) */
  --surface-top: #ffffff;
  --ground: var(--root-ink-2);
  --panel: var(--surface-top);
  --raised: var(--surface-top);
  --overlay: var(--surface-top);
  --control-bg: var(--surface-top);
  --control-hover: var(--root-ink-2);
  --line: var(--ink-6);
  --hairline: 0.5px;
  --focus-ring: var(--ink-10); /* passes 3:1 on white, ink-3 and the dark surfaces in sand */

  /* Hues: any 12-step scales. Fill the steps you use; -contrast is the text on -9. */
  --accent-3: ; --accent-6: ; --accent-9: ; --accent-10: ; --accent-11: ; --accent-contrast: ;
  --red-3: ; --red-6: ; --red-9: ; --red-10: ; --red-11: ; --red-contrast: ;
  --green-3: ; --green-9: ; --green-11: ; --green-contrast: ;

  /* World names over roles, each with its rule (example) */
  --ember: ;
  --signal: var(--ember); /* only while a kiln is firing or a firing failed */

  /* Primary (example: ink, from a restrained colour rule) */
  --primary-bg: var(--ink-12);
  --primary-fg: var(--ink-1);
  --primary-hover: color-mix(in oklab, var(--primary-bg) 93%, var(--primary-fg)); /* lightens dark fills, darkens light ones */

  /* Shadows (example: raised controls). Light shadows read --shadow-ink. */
  --shadow-ink: 33 32 28; /* light ink-12 as RGB */
  --shadow-button: 0 1px 2px 0 rgb(var(--shadow-ink) / .12), 0 0 0 1px rgb(var(--shadow-ink) / .08);
  --shadow-primary: 0 0 0 1px var(--ink-1);
  --shadow-toggle: var(--shadow-button);
  --shadow-card: 0 0 0 1px rgb(var(--shadow-ink) / .07), 0 1px 2px 0 rgb(var(--shadow-ink) / .12),
                 0 3px 4px -2px rgb(var(--shadow-ink) / .08);
  --shadow-table: 0 1px 2px 0 rgb(var(--shadow-ink) / .12);
  --shadow-panel: 0 0 0 0.5px var(--ink-a4), 0 1px 2px 0 rgb(var(--shadow-ink) / .015),
                  0 3px 4px -2px rgb(var(--shadow-ink) / .025);
  --shadow-menu: 0 0 0 1px rgb(var(--shadow-ink) / .08), 0 1px 2px 0 rgb(var(--shadow-ink) / .12),
                 0 4px 8px -4px rgb(var(--shadow-ink) / .16);
  --shadow-popover: var(--shadow-menu);
  --shadow-modal: 0 0 0 1px rgb(var(--shadow-ink) / .07), 0 1px 2px 0 rgb(var(--shadow-ink) / .14),
                  0 6px 8px -4px rgb(var(--shadow-ink) / .14);
  --shadow-badge: 0 1px 2px 0 color-mix(in srgb, currentColor 16%, transparent),
                  0 0 0 1px color-mix(in srgb, currentColor 14%, transparent);
  --backdrop: rgb(0 0 0 / .3);

  /* Shape: set --radius-control; the rest follow */
  --radius-control: 6px;
  --radius-xs: calc(var(--radius-control) / 2);
  --radius-sm: calc(var(--radius-control) - 2px);
  --radius-container: calc(var(--radius-control) + 2px);
  --radius-feature: calc(var(--radius-container) * 1.5);
  --radius-sheet: 14px;

  /* Sizes (example: compact) */
  --control-h: 36px; --control-h-compact: 32px; --control-h-pill: 28px;
  --control-h-inline: 24px; --control-h-icon: 22px; --badge-h: 20px; --key-chip: 18px;
  --row-h: 38px;

  /* Type (example: Inter, compact, one weight) */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: ui-monospace, "SF Mono", Menlo, monospace;
  --font-weight-ui: 500;
  --text-meta: 12px;    --leading-meta: 16px;
  --text-body: 13px;    --leading-body: 20px;
  --text-title: 16px;   --leading-title: 24px;
  --text-section: 20px; --leading-section: 28px;
  --text-figure: 28px;  --leading-figure: 36px;
  --text-display: 32px; --leading-display: 40px;
  --text-field: var(--text-body);
  --tracking-label: -0.01em; --tracking-display: -0.02em;
  font-size-adjust: 0.546; /* Inter's x-height / em */

  /* Durations (floor) */
  --dur-hover: 150ms; --dur-swap: 200ms; --dur-modal: 240ms; --dur-move: 300ms;

  /* Curves (floor). With Tailwind, move these into a plain @theme instead (below). */
  --ease-out: cubic-bezier(.23, 1, .32, 1);
  --ease-move: cubic-bezier(.22, 1, .36, 1);
  --ease-drawer: cubic-bezier(.32, .72, 0, 1);
  --ease-in-out: cubic-bezier(.77, 0, .175, 1);
}

/* Phone and touch: values only. */
@media screen and (width < 48rem) {
  :root { --control-h: 44px; --row-h: 44px; --text-body: 15px; --leading-body: 24px;
          --text-meta: 15px; --leading-meta: 20px; }
}
@media (pointer: coarse) {
  :root { --text-field: 16px; }
}

/* Dark values. Colour and shadow only: never padding, height, radius or border width. */
:root[data-theme="dark"] {
  --root-ink-1: #111110; --root-ink-2: #191918; --root-ink-3: #222221; --root-ink-4: #2a2a28;
  --root-ink-5: #31312e; --root-ink-6: #3b3a37; --root-ink-7: #494844; --root-ink-8: #62605b;
  --root-ink-9: #6f6d66; --root-ink-10: #7c7b74; --root-ink-11: #b5b3ad; --root-ink-12: #eeeeec;
  --ink-a3: #f6f6f513; --ink-a4: #fefef31b;

  --ground: #080807;
  --panel: var(--root-ink-1);
  --raised: var(--root-ink-2);
  --overlay: var(--root-ink-2);
  --control-bg: var(--root-ink-3); --control-hover: var(--root-ink-4); /* panel; per surface in §4 */
  --line: var(--ink-5);

  /* One solid 0.5px outline + a tight black drop. The aliases follow. */
  --shadow-button: 0 0 0 0.5px var(--ink-6), 0 1px 2px 0 rgb(0 0 0 / .5);
  --shadow-primary: 0 0 0 0.5px var(--primary-bg), 0 1px 2px 0 rgb(0 0 0 / .5);
  --shadow-card: 0 0 0 0.5px var(--ink-6), 0 1px 2px 0 rgb(0 0 0 / .5), 0 3px 4px -2px rgb(0 0 0 / .4);
  --shadow-table: 0 1px 2px 0 rgb(0 0 0 / .5);
  --shadow-panel: 0 0 0 0.5px var(--ink-a3), 0 1px 2px 0 rgb(0 0 0 / .5), 0 3px 4px -2px rgb(0 0 0 / .4);
  --shadow-menu: 0 0 0 0.5px var(--ink-7), 0 1px 2px 0 rgb(0 0 0 / .5), 0 4px 8px -4px rgb(0 0 0 / .5);
  --shadow-modal: 0 0 0 0.5px var(--ink-7), 0 1px 2px 0 rgb(0 0 0 / .5), 0 6px 8px -4px rgb(0 0 0 / .5);
  --shadow-badge: 0 0 0 0.5px color-mix(in srgb, currentColor 34%, #000), 0 1px 2px 0 rgb(0 0 0 / .5);
  --backdrop: rgb(0 0 0 / .9);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* repeat the dark block */ }
}

/* Surface classes: the step remap and per-surface redeclarations are in §4. */
```

A dark product whose primary is a dark filled button (a dark product with keycap-like controls) adds its lit top to the primary only: `--shadow-primary: inset 0 0.5px 0 var(--ink-7), 0 0 0 0.5px var(--ink-1), 0 2px 4px rgb(0 0 0 / .15);`.

### Tailwind v4 mapping

```css
@theme inline {
  --color-ink-1: var(--ink-1); /* … through ink-12 */
  --color-line: var(--line);
  --color-focus-ring: var(--focus-ring);   /* outline-focus-ring, ring-focus-ring */
  --color-panel: var(--panel); --color-raised: var(--raised); --color-overlay: var(--overlay);
  --color-control: var(--control-bg); --color-control-hover: var(--control-hover);
  --color-primary: var(--primary-bg); --color-primary-foreground: var(--primary-fg);
  --color-signal: var(--signal);
  --radius-button: var(--radius-control);
  --text-xs: var(--text-meta);     --text-xs--line-height: var(--leading-meta);
  --text-sm: var(--text-body);     --text-sm--line-height: var(--leading-body);   /* the density's body size */
  --text-base: var(--text-title);  --text-base--line-height: var(--leading-title);
  --text-xl: var(--text-section);  --text-xl--line-height: var(--leading-section);
  --text-2xl: var(--text-figure);  --text-2xl--line-height: var(--leading-figure);
  --text-3xl: var(--text-display); --text-3xl--line-height: var(--leading-display);
  --font-weight-normal: var(--font-weight-ui);   /* example: one weight; map as many as the direction uses */
  --font-weight-medium: var(--font-weight-ui);
  --font-weight-semibold: var(--font-weight-ui);
  --breakpoint-md: 48rem;
}

/* Shadows stay arbitrary values: shadow-[var(--shadow-button)], shadow-[var(--shadow-card)].
   The utility then reads the token on the element itself, so the per-surface
   redeclarations in §4 reach it. A plain @theme alias would resolve once, at :root. */

/* The curves, defined once. A plain @theme emits them as variables, so the
   ease-out utility and var(--ease-out) are the same value. Leave them out of :root. */
@theme {
  --ease-out: cubic-bezier(.23, 1, .32, 1);
  --ease-move: cubic-bezier(.22, 1, .36, 1);
  --ease-drawer: cubic-bezier(.32, .72, 0, 1);
  --ease-in-out: cubic-bezier(.77, 0, .175, 1);
}
```

**Gotcha:** in Tailwind v4 the bare `ease-out` class is `cubic-bezier(0, 0, .2, 1)` unless `--ease-out` is redefined in `@theme`. Writing `ease-[var(--ease-out)]` in recipes avoids the trap either way.
