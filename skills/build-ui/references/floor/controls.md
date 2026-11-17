# Controls

Buttons, fields, selection controls, badges, labels and keyboard. Roles, counts, order, sizes and states hold in every direction. Fills, edges, drops and radii come from the direction's surface model through the tokens (`tokens.md`). `ink-N` is a neutral step, `hue-N` a coloured step. Concrete px values are the worked example's (compact density) unless marked universal.

## 1. The role rule

**A control's fill, edge and drop come from its ground.** None is an absolute value. The same button, pill, toggle or chip reads the same on a panel, card, rail, table row, sheet or tint, in both themes.

| Part | How it follows the ground |
|---|---|
| Fill | `--control-bg`: a fixed step distance from the parent (the model's control fill in light; parent + 2 in dark). |
| Edge | An alpha ring adapts to whatever is beneath on its own. A solid outline is a fixed step (three above its own fill in the example), so each surface redeclares it (`tokens.md` §4). |
| Drop | Darker than the parent: the neutral's ink-12 in light, black in dark. |
| Coloured fill | Its ring is its own hue one step darker (B6VR4V). A badge or chip draws its edge from its own `currentColor`. |
| Lit top | Dark filled buttons and keycaps may carry a 0.5px lit top (`inset 0 0.5px 0` a few steps lighter than the fill). Cards and panels keep one even outline. |

A control on a parent of the same fill (a white button on a white card) takes its edge from its ring and drop, not from a fill change.

## 2. Roles

Pick the role before the look.

| Role | Use it for | Build |
|---|---|---|
| **Primary** | The one action that commits or completes this surface: Create, Save, Continue, Apply | `--primary-bg` fill, `--primary-fg` text, `--shadow-primary`. The fill comes from the colour rule: ink, or a brand hue at -9 with -contrast text. |
| **Secondary** | Every other action of the surface: Cancel, Close, Skip, section and header actions | `--control-bg`, `--shadow-button`, ink-12 text |
| **Utility pill** | Tools attached to one piece of content: Copy on a code block, filters, presets, Back in a flow, Show key in a field, the ⋯ menu | the secondary's fill and edge at pill height, fully round, 14px icon, body-size label |
| **Icon** | Per-row or in-field tools with a universal glyph: copy, edit, delete | no fill, ink-10 glyph, ink-12 on hover |
| **Ghost** | Tertiary actions in a form: Remove, Clear | no fill, ink-10 text, ink-12 over a ground + 1 wash on hover |
| **Text link** | Tertiary navigation in a sentence: "No account? Sign up", only the link word underlined | the button text size |
| **Destructive trigger** | Opens a destructive confirm: Delete, Revoke | the secondary with red-11 text and icon, red-3 hover; or soft: red-3 fill, red-6 edge, red-11 text |
| **Destructive confirm** | The final yes inside a destructive dialog | red-9 fill, red-contrast text, ring in red one step darker |

**Rules behind the table**

- **Shape tells the role.** Page and dialog actions share one shape; tools that act on one piece of content take the other (a rectangle at `--radius-control` and a full pill, in the example). When the model's control radius is already full, content tools keep the pill but drop to the pill height.
- **Primary fill follows the colour rule.** Restrained, signal and one-ink directions fill it with ink (the darkest thing on a light page, the lightest on a dark one). Committed shell and field directions may fill it with the brand hue. A hue that fills the primary leaves status use, and the destructive confirm stays clearly different from it. A signal hue keeps to its signal.
- **Secondary reads as enabled.** Where the model fills secondaries with a tint or grey, disabled drops the edge and fades, so the two never match.
- **Destructive is never the primary.** Solid red appears only at the last step, inside the dialog; the trigger is softer.
- **Hover works with any fill.** The primary hovers to `--primary-hover`, a 7% mix toward its text colour: it lightens a dark fill and darkens a light one. `brightness(.95)` is fine on a mid-tone like red-9 and barely moves near-black.

### Examples per surface model

How the same roles look under each recipe in `tokens.md` §1. Starting points, not specs.

| Model | Secondary | Primary | Chosen toggle option |
|---|---|---|---|
| Hairline | transparent or `--surface-top`, a 1px `--line` ring, no drop | ink or hue fill, no drop | `--surface-top` with the line ring, on an ink-3 track |
| Panel on ground | `--surface-top`, 1px ring, optional 1px drop | ink or brand fill, ring in the surface colour or its own hue one step darker | `--surface-top` with the ring |
| Raised controls (example) | white, `0 1px 2px 0 rgb(ink / .12), 0 0 0 1px rgb(ink / .08)`; optional fill gradient within 1-2% L and a white inset top (Q09N69) | ink-12, a 1px ring in the local surface colour, no drop | white with the button's ring and drop |
| Tonal | ink-3 or the section's hue-3, no edge; hover one step deeper | ink or hue-9, no edge, large radius | `--surface-top` on a tinted track |
| Field | the field's hue-4 to -6, text in its -12 | the field's -9 or -12, ring one step darker | the field's -2 on its -4 track |
| Stepped dark | parent + 2, a 0.5px outline three steps above, `0 1px 2px 0 rgb(0 0 0 / .5)` | ink-12 with a 0.5px outline in its own fill and the black drop; or a dark fill with a near-black ring and a 0.5px lit top (A28DN6) | parent + 2 with the button's outline and drop |

## 3. How many primaries

Universal.

- **One per surface.** Exactly one in each modal footer, flow footer and menu (Apply). A page usually has none or one: header and section actions are secondary, and the primary is kept for the commit.
- **Repeated row actions.** When every row of a list carries the same commit (log, pay, water), the row the user should act on next takes the primary and the rest are secondary; after each commit the primary moves to the new next row. Rows that cannot be acted on today show no button.
- **Only when it's the real next step.** Upgrade shows only on the plan that can upgrade.
- **Key chips go on the page's primary only.** Not on next/previous, navigation, copy or sign-in.
- **When the user is about to give something up** (downgrade, cancel a plan), the safe choice ("Keep current plan") is the primary.
- **When the user already chose to destroy**, the confirm is the destructive confirm and names the action: "Yes, delete", "Delete project". Cancel is secondary. The heaviest irreversible deletes may ask for press and hold.
- **Disabled until it can work.** Create stays disabled until the required field is filled; Apply until something is picked.

## 4. Order and placement

Universal.

| Context | Order | Notes |
|---|---|---|
| Dialog footer | Cancel left, confirm right | buttons hug their labels; after the task is done, Cancel becomes Close |
| Page or section group | secondary first, primary last at the far right | |
| Flow footer | Skip, then Continue filling the rest | when Skip leaves (scale .95 + fade, 200ms) Continue grows into the space |
| Phone, page | stacked full width, primary on top | 12px apart |
| Phone, dialog or flow | stacked, confirm on top | 8px apart, iOS alert order |
| Previous / Next | side by side on a phone too, half and half | |

- Desktop footer buttons hug their labels. Phone action stacks fill the width.
- A modal opens with focus on its first field, not on Cancel.
- A section's actions sit at the right of its title, above the data they act on (`layout.md`).

## 5. Recipes (Tailwind v4)

Token-only, so one recipe serves every surface model: the model changes the tokens, not the classes. A literal px or hex here is a bug. Name every transitioned property and include `scale` (Tailwind v4's `scale-*` sets the separate `scale` property).

```html
<!-- Primary -->
<button class="h-[var(--control-h)] px-3.5 rounded-[var(--radius-control)] bg-[var(--primary-bg)] text-[var(--primary-fg)]
  text-sm tracking-[var(--tracking-label)] shadow-[var(--shadow-primary)]
  hover:bg-[var(--primary-hover)] active:scale-[0.97]
  transition-[transform,scale,background-color] duration-[var(--dur-hover)] ease-[var(--ease-out)]
  disabled:opacity-60 disabled:active:scale-100 disabled:hover:bg-[var(--primary-bg)]">Create project</button>

<!-- Secondary -->
<button class="h-[var(--control-h)] px-3.5 rounded-[var(--radius-control)] bg-[var(--control-bg)] text-ink-12
  text-sm tracking-[var(--tracking-label)] shadow-[var(--shadow-button)]
  hover:bg-[var(--control-hover)] active:scale-[0.97]
  transition-[transform,scale,background-color] duration-[var(--dur-hover)] ease-[var(--ease-out)]
  disabled:opacity-60">Cancel</button>

<!-- Utility pill (icon leads) -->
<button class="h-[var(--control-h-pill)] pointer-coarse:h-9 rounded-full pl-2.25 pr-2.75 gap-1 inline-flex items-center
  bg-[var(--control-bg)] hover:bg-[var(--control-hover)] text-sm shadow-[var(--shadow-toggle)]
  active:scale-[0.97] touch-target">Copy</button>

<!-- Row icon button -->
<button aria-label="Delete" class="size-[var(--control-h-icon)] rounded-[var(--radius-control)] text-ink-10
  hover:text-ink-12 hover:bg-ink-4 active:scale-[0.92] disabled:opacity-40 touch-target">…</button>
```

- `--control-h` is 44pt on a phone, so these lift without a `max-md:` class.
- **Theme differences live in tokens.** A `dark:` utility may change colour or shadow; it never changes padding, height, radius or border width.
- **Over media:** `bg-black/50 backdrop-blur-md text-white`.
- **Sheet action (phone):** a full-width secondary at `--control-h`, icon before the words, 16/24 text. A real button, not a row of words.

## 6. Sizes

**One control height rules a surface** (universal): input = button = toggle = selector. Things beside a button (stat chips, selectors) take its height. Heights come from density (`tokens.md` §9); touch targets are 44pt on any touch screen.

| Example height | Token | Used for |
|---|---|---|
| 44 | `--control-h` on a phone | every button, field and toggle track on a phone |
| 36 | `--control-h` | button, field, select, menu item, rail row |
| 32 | `--control-h-compact` | compact confirm inside a menu |
| 28 | `--control-h-pill` | pills, toggle options, icon buttons |
| 24 | `--control-h-inline` | inline row or card actions |
| 22 | `--control-h-icon` | row icon buttons |
| 20 | `--badge-h` | chips, the search key pill |
| 18 | `--key-chip` | the key chip on a button |

| Padding (example) | Where |
|---|---|
| 14px a side | centred text buttons: dialog footers, flows, sheets |
| 12px | page-level buttons |
| 10px | header and section actions, inline actions |
| icon side 2px tighter | `pl-2.5 pr-3` with a 6px gap; a glyph with built-in air gets `pl-2` and a 4px gap |

| Icon | Size and ink |
|---|---|
| Leading icon in a button | 16px; one ink step under the label; label 2px closer to it than to the edge |
| Small icon beside text (pills, toggle options) | 14px, 4px before the label |
| Standalone, row icon | 16-20px, ink-10 to ink-11 |
| Empty-state icon | 18px desktop, 24px phone |
| External-link arrow | only when the link leaves the app; 14px, ink-10 |
| Spinner | 14px, the button's own ink, in the icon's 16px slot |

**Icon stroke matches the UI weight.** Example: 1.5px rendered at 16px for Inter 500 (Lucide with `absoluteStrokeWidth` at 1.5); 1.25px beside a light face, 1.75px beside a heavy one. Small icons need a heavier stroke on the 24px grid (2.5 at 14px, about 1.46px rendered), or an absolute stroke width. An icon beside text centres on the text's line (`inline-flex items-center`). A filled glyph means "ready to run" (a filled play on Start).

## 7. States

Universal mechanics.

### Hover
- One step above the local ground on fills; ink-11 to ink-12 on text; `--primary-hover` on the primary.
- Selected is two steps above the local ground, so hover never matches it. Hovering a selected item keeps it selected.
- Colour only, 150ms. Nothing moves.
- Each row in a list or menu fades its own fill in and out where it is; one shared highlight never slides from row to row.
- Fine pointer only. On touch the same look shows while pressed (`mobile.md`).

### Press
In CSS, so a quick second press retargets instead of restarting. The squeeze deepens as the target shrinks:

| Scale | Target |
|---|---|
| .99 | cards, full-width rows |
| .97 | buttons, pills |
| .94 | 44px round icon buttons |
| .92 | 22px icon buttons |

Disabled controls cancel both: `disabled:active:scale-100`, and hover returns to the resting fill.

### Focus
Every interactive element has a visible `:focus-visible` state drawn with `--focus-ring`, which passes 3:1 on every fill in both themes (`tokens.md` §12 gates).
- Buttons, pills, toggle options, switches, icon buttons, rows and cards reached by Tab: `outline: 2px solid var(--focus-ring); outline-offset: 2px`.
- Items moved through with arrow keys (menus, choice lists) show the highlight fill instead.
- Fields: deepen the fill one step (as pointer focus does) and add `box-shadow: 0 0 0 2px var(--focus-ring)`; a one-step fill shift alone is about 1.08:1, too faint. Text fields match `:focus-visible` on click too; accept that or show it only after a keydown.

### Disabled
- `opacity: .6` for buttons, switches and fields; `.4` for icon buttons. Hover and press off. Pick one opacity per product.
- A faded light fill on a dark ground still glows like a live button. In dark, a disabled light primary turns solid: ink-4 fill, ink-8 text, full opacity, no edge or drop.
- On a phone, say why a control is disabled in text under it, never only in a tooltip.

### Loading (label swap)
- The label swaps in place to a spinner plus an -ing verb: "Saving…", "Creating…". Always the real "…".
- Both labels share one grid cell, so the button keeps the wider width until the old label has gone. It never jumps mid-fade.
- Incoming rises from `translateY(6px)` with `blur(2px)` and opacity 0; outgoing leaves to `translateY(-6px)` with `blur(2px)`. 200ms, `--ease-out`.
- No animation on mount. Reduced motion: crossfade only.
- A send button may drop its text and become just the spinner.
- When the current state is unknown, the button reads "Loading…" and is disabled, never a wrong label.

### Copy feedback
- The copy icon turns into a tick **on the click itself**, before the clipboard answers.
- The tick is drawn at 1.3× so it reads the size of the icon it replaces.
- Both scale between .5 and 1 with a crossfade, 200ms. Reduced motion: opacity only.
- The tick holds 1000ms on an icon button, 1500ms on a pill.
- No toast, no flash of the field.
- If the clipboard refuses, revert at once to the copy icon. A pill with words says "Copy failed" in place of its label for the same hold.

## 8. Fields

**A field never looks like a button** (universal). Buttons are raised or filled; fields are sunk or outlined.

| Model | Field |
|---|---|
| Raised, panel, tonal (example) | a well: one step darker than its surface in light (ink-3 on white), one step lighter in dark; no border, no shadow; focus deepens it one step |
| Hairline | `--surface-top` with a `--hairline` `--line` ring; focus ring in ink-12 or the accent |
| Field | the section's hue-2 or `--surface-top` well inside the tint, text in ink-12 |
| Stepped dark | one step lighter than its surface with a solid outline one step above it |

Example well: `h-[var(--control-h)] rounded-[var(--radius-control)] border-0 bg-ink-3 px-3 text-[length:var(--text-field)] leading-[var(--leading-body)] placeholder:text-ink-10 focus:bg-ink-4`. A lighter variant on a white surface: ink-2 resting, ink-3 on focus.

- Read-only keeps its resting fill on focus. Disabled: `opacity: .6`.
- Label at body size, ink-12 (ink-11 in flows), 6-8px above the field. Help text at meta size, ink-10 if it passes, under it. "(optional)" in the help ink.
- 16-20px between fields. Fields in a modal fill its width.
- Textarea: the same recipe, three lines minimum.
- Placeholders start with a capital letter and show an example value, never the label.
- Field text matches button text size. On any touch screen it is 16px (`--text-field`), gated on `(pointer: coarse)` so an iPad's wider layout gets it too.
- Any icon or key inside a field keeps the same distance from the end at every height.
- A button that opens search wears the field's look, at the control height.

**Select trigger:** the secondary button at control height with a 16px chevron at the right that turns over (`rotate(180deg)`) while open.

### Errors
- **Invalid field:** keep the field and add a 1px red-11 ring as a box-shadow (`0 0 0 1px var(--red-11)`), so nothing moves.
- **Message:** meta size, red-11, directly under the field, replacing the help text. Link it with `aria-describedby`; `role="alert"`. Say what to do: "That name already exists. Pick another name."
- **When:** validate on blur and on submit, never on each keystroke. On submit, focus the first invalid field.
- The primary stays enabled once required fields are filled; errors show on submit.

## 9. Selection controls

### Segmented toggle
- **One view-switching component per product**, used everywhere: a segmented toggle or underline tabs, chosen once and recorded in `DESIGN.md`. The rules below are the segmented toggle's.
- Track: fully round (or the control radius), 4px padding, 4px gap, a well: one step darker than its surface in light, one step lighter in dark.
- Options: pill height, track = pill height + 8px. Active text ink-12; inactive ink-11, ink-12 on hover.
- One sliding pill behind the active option, with `--control-bg` and `--shadow-toggle`, so it follows its ground like a button.
- The pill moves as a shared-layout spring, `{ bounce: 0.12, duration: 0.4 }`; its overshoot stays inside the track's 4px inset (at bounce .35 a 100px move overshoots ~7px and hits the end). `overflow: hidden` at the track's radius is a backstop, not the fix.
- The first placement snaps; only a real toggle animates.
- A page-level toggle (Light / Dark) adds a 14px icon left of each label.
- Toggles hug their content; they are the one control that doesn't fill a modal's width.
- Phone: options 34px, track 42px, 44pt hit area per option. At the end of a settings row it sits as far from the right edge as from top and bottom. It may fill the width with equal options. If options don't fit, it becomes a dropdown pill that opens a sheet.
- `role="radiogroup"`, one tab stop, arrow keys between options.

### Action rows (the row is the action)
- A list whose rows do something on tap (log this drink, open this record, add this item) shows that at rest, not only on hover: a trailing chevron or verb icon in ink-10, or the rows grouped on one raised surface. A plain text row reads as a label.
- The whole row is the target; hover ground + 1, press ground + 2, focus ring on the row.
- When the rows are the screen's primary action, the group carries the primary's weight: it sits where the primary would sit, and no other primary competes.

### Choice rows (radio and checkbox lists)
- **The row is the control; the mark is only drawn.**
- Rows at control height, 8px padding, control radius, 2-4px apart, no box and no lines between them.
- Hover ground + 1, selected ground + 2 (inside an overlay: `--root-ink-2` and `--root-ink-3` in light).
- Optional 16px ink-11 icon, 6px before the label. The mark at the far right (top right on a selection card).
- Marks: 18px with a stroke-weight ring in ink-6. Radio selected: an 8px ink-12 dot (or `--accent-9` under a restrained rule with an accent) in a well. Checkbox ticked: `--radius-sm`, filled, contrast check.
- The dot or check enters with `@starting-style` from scale .9 and opacity 0, 150ms.
- Single choice uses circles; multiple choice uses squares.
- "Other" comes last. Picking it opens a field below (height 0 to auto plus fade, 200ms) and focuses it.

### Choice tiles
For options in a grid on a page.
- 12px padding, control radius, the mark at the right. Two columns, 10px gap; one on a phone.
- Resting ground + 1, hover and selected ground + 2; in dark selected also takes a hairline ring a few steps above. The filled mark tells selected from hovered.
- Error: a 1px red-11 ring on the unselected tiles until one is picked.

### Selection card
- At least ~48px taller than its words, title at the top, description at the foot.
- Picked reads **pressed in, not raised**: ground + 2 fill with the hairline only, no drop.

### Switch
- **Desktop** (example): a 52×26 track with a 20px knob 3px in all round: small beside a 36px toggle, a mark in a settings row.
- **Phone:** the platform's switch (iOS: 51×31, knob 4px in), 44pt hit area, aligned with any toggle above it.
- Place the knob with flex (`p-1`, `justify-start` off, `justify-end` on) and a layout animation, so it is right at every size from the first paint.
- The knob takes `--shadow-toggle` and stays light in dark: a grey knob reads as a hole.
- On: green-9 by default; the accent-9 where the colour rule makes one hue mean on and selection. Off: a well step (ink-7 light; between ink-5 and ink-6 dark).
- The knob springs `{ bounce: 0.2, duration: 0.45 }`, short enough that the overshoot stays off the track's edge; the track colour changes over 150ms. First render places it without animating. Reduced motion: instant.
- Disabled `opacity: .6`.

### Filter pills
- Each names what is picked ("Status Failed") with a × to clear it (20px, 28px on a phone). Label ink-10, value ink-12.
- Pill height, `--control-bg` with `--shadow-toggle`. Open state: ground + 1.
- One row beside the view toggle, search at the right. The last pill truncates (value max ~180px) so search keeps its place. On a phone the row scrolls sideways under 20px edge fades and never wraps.

### Dropdowns and menus
- **Trigger:** the select trigger (§8).
- **Menu:** `--shadow-menu`; surface and padding in `surfaces.md`, Menus.
- **Opening:** `scale(.97)` to 1 plus opacity, origin at the trigger; 150ms in, 120ms out, `--ease-out`.
- **Fit:** a menu stays inside the container it opens in (modal, sheet, card). Shorten the list until it fits.

**Items**
- Control height (40px in long lists, 48pt in a phone sheet), 2px apart, control radius, body text in ink-11.
- Highlight (pointer or arrow keys, one state): local ground + 1, ink-12 text. Chosen: local ground + 2, ink-12 text, no tick. Highlight stays a step below chosen.
- A menu with no chosen item may highlight one step deeper.
- A destructive item is red-11 with a red-a3 hover.
- A multi-select menu ends with a primary Apply (compact height; full width at 44pt on a phone), faint while there's nothing to apply.

## 10. Status, chips, key chips

### Status: dot and word
**Normal status is a dot and a word** ("● Ready", "● Paid"), plain ink, no fill. This holds for every row, table cell and card.
- Dot: 8px, `currentColor` of its label's hue. Dots replace ticks and crosses in status text.
- Ongoing states ping (`animate-ping`, opacity .75); every dot shares one clock phase so rows beat together. No ping under reduced motion.

### Chips (pills)
A pill earns its place in two cases only (see `../direction.md`, Licence):
1. **An exception status with its own icon**: mismatch, closed, over-allocated, failed. The tinted pattern: hue-3 fill, hue-11 text and icon, `--shadow-badge` (its edge from its own colour).
2. **A typed value the user edits**: a date, a recurrence, a picked filter. The control fill with `--shadow-toggle`, ink-12 value; it opens its picker.

Ordinary metadata (a plan name, a category, a count, an amount) stays plain text.

- `h-[var(--badge-h)] rounded-full px-2 text-xs leading-[var(--badge-h)]`; 6px on the side where the icon leads. Always fully round.
- **The edge comes from its own colour** (example values in `tokens.md` §6): light, a 14% ring and a 16% drop of `currentColor`; dark, a 0.5px outline of `currentColor` mixed 34% into black plus the black drop. Never the hue's light text colour as a blurred shadow.
- Numbers in `tabular-nums`.
- Beside a section title it goes one size up (24px, 13px text, 10px sides, 8px from the title). Phone: 22px, 14px text.
- Loading: a pulsing ink-3 pill of the chip's typical width holds its place.
- One formula for every chip at every size.

### Key chips
Two chips, one fill: `color-mix(in srgb, currentColor 14%, transparent)` with `--radius-xs`. Both hidden under 768px and on coarse pointers.

| Chip | Where | Size and type (example) |
|---|---|---|
| **Button key chip** | after the label of the page's primary only | 18px square (`--key-chip`), 4px side padding, 11px mono, `leading-none`, 8px after the label |
| **Search key pill** | inside the search field (⌘K) | `--badge-h` tall, 6px side padding, meta size sans |

Where the direction draws keys as keycaps, a dark key chip may carry the 0.5px lit top (§1).

## 11. Labels

- Sentence case, verb first, short: "Create project", "Invite member", "Copy", "Show key" / "Hide key", "Continue" ("Finish" on the last step), "Skip", "Cancel".
- Name the object and the count where there is one: "Send 5 reminders" (`content.md`, Copy).
- Confirm buttons name the action: "Yes, delete".
- Loading: "Verb-ing…" with the real ellipsis.
- Sentence case, "…" and commas or colons in every label.

## 12. Keyboard

- Enter submits or continues. Escape closes a modal, menu or panel (in a flow, Escape skips).
- `⌘K` opens search, shown as the search key pill in the field.
- Arrow keys move inside toggles and menus. One tab stop per toggle group.
