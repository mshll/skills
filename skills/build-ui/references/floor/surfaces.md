# Surfaces

How things sit on top of each other, and how that reads in light and in dark. The layer order, the per-theme elevation rules, the line rules and the anatomy of shell, cards, tables, modals, sheets, menus and toasts hold in every direction. How a layer separates (edge, drop, tint, rule, radius) comes from the direction's surface model (`tokens.md` §1). Concrete px values are the worked example's (compact density, raised controls) unless marked universal.

Every raised thing takes its fill, edge and drop from its ground: the role rule in `controls.md` §1, the mechanics in `tokens.md` §4.

## 1. The layer stack

Bottom to top. The order and the dark relations are universal; the light values come from the model.

| Layer | Light | Dark | Notes |
|---|---|---|---|
| **Ground** (window, rail) | the model's ground | a stop below ink-1 | Under a panel model the panel's edge divides rail from page; no extra border. |
| **Panel** (page body) | `--surface-top`, `--shadow-panel` | ink-1, `--shadow-panel` | Example: floats 8px off the window's top, right and bottom, flush against the rail, `--radius-container`. Pages scroll inside it. Under a hairline model it is the ground. |
| **Raised** (cards, controls, chosen toggle option) | the model's raised fill; `--shadow-button` on controls, `--shadow-card` on cards | parent + 1 (cards), + 2 (controls), each with a solid outline and a tight black drop | |
| **Well** (fields, toggle tracks) | one step darker than its surface | one step lighter | Sinks instead of rising. |
| **Table** | rows on the surface fill, `--line` rules, `--shadow-table` | rows at ink-2, `--line` rules, `--shadow-table` | §6. |
| **Overlay** (menu, popover, modal, side panel, search) | `--surface-top`, the shadow by level; the shadow's ring is the edge | ink-2, a solid outline and black drops by level | Overlays float in every model. |
| **Toast** | the tinted pattern | the tinted pattern | Above everything. |

## 2. Elevation per theme

**Light:** lift comes from the model: an edge and a short drop (raised controls), a lighter panel on a tinted ground (panel on ground), a tint step (tonal), a colour block (field), or a rule and nothing else (hairline).

**Dark:** a shadow alone doesn't read on a dark ground. A raised thing is **lighter** than its parent and carries **one solid outline**, the same colour all round, with a tight black drop under it. That holds whatever the light model is.

**The ladder** (universal shape): each level is the one below plus at most one short drop, tucked under the object by a negative spread. No large soft blur at any level. Worked example:

| Level | Light | Dark |
|---|---|---|
| Control | ring + `0 1px 2px` | parent + 2, 0.5px outline three steps above its fill, `0 1px 2px 0 rgb(0 0 0 / .5)` |
| Table | `0 1px 2px` under its frame | ink-2 rows, frame at `--line`, the black 1px drop |
| Card | ring + `0 1px 2px` + `0 3px 4px -2px` | parent + 1, 0.5px ink-6 outline, + `0 3px 4px -2px rgb(0 0 0 / .4)` |
| Menu, popover | ring + `0 1px 2px` + `0 4px 8px -4px` | ink-2, 0.5px ink-7 outline, + `0 4px 8px -4px rgb(0 0 0 / .5)` |
| Modal, side panel | ring + `0 1px 2px` + `0 6px 8px -4px` | ink-2, 0.5px ink-7 outline, + `0 6px 8px -4px rgb(0 0 0 / .5)` |

Full token values: `tokens.md` §6.

- **Drops are darker than their parent.** Light drops in the neutral's ink-12, dark drops black. A hue's light text colour as a blurred shadow reads as a glow.
- **Cards and panels keep one even outline in dark.** A 0.5px lit top belongs to dark filled buttons and keycaps only (`controls.md` §1).
- In dark, controls, chips, toggles, tables and cards keep their tight drops under the outline; without it a grey control reads flat.
- In table rows, dark buttons sit two steps above the row, two more on hover.

**Sizes never fork** (universal).

- Every ring is a `box-shadow`, so it never changes layout. A light 1px ring and a dark 0.5px outline leave the box the same size.
- Where one theme shows a border the other hides, the border exists in both: `border-transparent` in one, coloured in the other.
- Theme differences live in tokens. A dark change alters colour or shadow values only.

## 3. Hairlines and borders

- **One line weight per product**: `--hairline` (0.5px or 1px, from the model) in `--line`. Images, screenshots and recordings get the same frame.
- **In dark every structural line is one step darker** (ink-5 for ink-6 in the example), so lines don't glow. A line drawn outside the hairline utilities (an inset box-shadow, a pseudo-element) needs its own dark remap.
- **Bar edges are drawn over the bar.** A top strip's foot rule or a bottom bar's top rule is an absolutely positioned hairline over the edge, not a border, so content centres on the full bar height.
- **One edge per boundary.** A nested element with its own border inside a bordered parent, a doubled bottom line, a header band rounder than its dialog, a border inside a shadow's ring: all bugs. A header strip meeting a body takes the parent's radius minus the border.
- **Remove lines before adding them.** Choice rows, empty states and groups that space already groups carry no lines.
- **Separators in menus and drawers run edge to edge**, with space above and below equal to the side padding.
- **A sticky header's bottom line appears once content scrolls under it.**
- **A fade beats a hard cut.** Where content scrolls, a mask fade in the background colour says "more": 36px on a rail, 20px on a sideways row, 24px under a sticky top. Animate the fade length (registered `@property`, 200ms).
- **Overscroll:** `overscroll-behavior: none` on app scroll containers. No scroll handed to the page behind.

## 4. Shell

### Desktop
- **Rail** on the ground. Width = widest nav label at body size + icon + gap + row padding + rail padding, rounded up to 4px (292px for the example's labels in Inter 13; ~220-250px in the user's saves). Pinned top (workspace switcher: logo, name, subline; search), scrolling middle with edge fades, pinned foot (one notice, then the user row). Space separates the parts, not rules.
- **Rail rows:** control height, control radius, 16px icon, 6px gap, body text in the rail's label ink (ink-10 if it passes 4.5:1 on the rail, else ink-11). Counts right-aligned in a quieter ink. Hover ground + 1 with ink-12 text, fading on that row (150ms). Current page: ground + 2 fill, no edge, no drop; under a committed shell, a lighter step of the rail's hue. Selection is a surface change; a coloured bar beside the row is not needed. Rows 1px apart.
- **Group titles:** body or meta size in a faint ink, set off by 16px of space above. Groups stay open.
- **Top strip of the panel:** `--control-h` + 2 × 8px tall (52px in the example), controls 8px in from every edge, a hairline at its foot. The page title centred and absolutely positioned so it doesn't move with the switcher. Breadcrumbs at the left (they replace back buttons); page actions at the right. The strip is part of the panel.
- **Collapse in three beats:** contents fade out together (80ms), the width changes (220ms), contents fade back in. Contents stay pinned at full width inside the frame, so nothing reflows.

### Phone
See `mobile.md`: the panel goes edge to edge; the rail becomes a top bar with a menu or a tab bar.

## 5. Cards

**When to use a card** (universal)

| Content | Container |
|---|---|
| Navigation, link lists, choice lists | plain rows: no box, fill on hover only |
| One unit of related data (a figure with its chart, a balance, a plan) | a card |
| A step that is itself an action | a clickable card |
| Many records with the same fields | a table |
| Grouped settings or choices on a phone | one card of rows |

**One level of nesting.** A card sits on a panel or the ground, never inside another card for grouping. An inner card is earned only when it is an object the user acts on: a scheduled send with its date chip, an attachment, a draft.

**Section headings sit outside cards.** The heading names the card, so the card doesn't repeat it.

**Data card:** the model's raised fill and `--shadow-card`, `--radius-container`, 16-24px padding, 16-24px gaps. Optional header strip (example: 46px, a body-size title, a hairline under it, its action at the right).

**Clickable card:** 12-16px padding. Hover ground + 1. Press `scale(.99)`. Cards in a row share one height.

**Selection card:** pressed in when picked (`controls.md` §9).

**Notice:** `--radius-feature`, the hairline edge, 24 × 16px padding (example), a title over one line, the action at the right (under it, full width, on a phone). Tinted: hue-3 fill, hue-6 edge, hue-11 text, with the status's icon. The consequence band (`content.md`, Copy) is this notice at full width between the summary and the data.

**Decision card:** a notice titled "Needs your decision", the consequence in one sentence with real numbers, each answer as its own button (`content.md`, Copy).

**Rail notice:** one at a time, by priority (blocking, then warnings, then announcements). Control radius, raised, a header strip, full-width stacked buttons (primary on top). It may fold to its title plus a progress ring. Dismissed through ⋯ or ×, except a blocking state. It finishes by fading out whole.

## 6. Tables

| Part | Rule |
|---|---|
| Frame | from the model: a hairline frame at `--radius-container` with `--shadow-table` (raised), the panel's own edge (panel on ground), or rules only with no frame (hairline) |
| Fill | one fill for header and rows. Stripes only on a long, wide table (ground and ground + 1). |
| Lines | hairline rules between rows. The last row draws no rule, so the frame or the section end is the only bottom line. Column dividers only where columns would otherwise blur. |
| Header | muted ink at body size or one step smaller, sentence case, a hairline under it |
| Rows | `--row-h` from density (compact ~36px, regular ~44px, two-line ~56px); body text; 12-16px cell padding, matched within a table. The frame hugs the last row. |
| Ink | header and the identifying first column in ink-12; other cells in ink-11 (ink-10 only where it passes 4.5:1); secondary lines one step lighter and 1-2px smaller, carrying data |
| Alignment | **numbers right-aligned in `tabular-nums`**, keeping their decimals; text and identifiers left-aligned; a column's header aligns with its cells; first and last cells line up with the container's padding |
| Type | the workhorse in every cell; the identifier column in mono only when users compare it character by character (`data.md`, Tables) |
| Status | a dot and a word; a chip with its own icon only for exceptions (`controls.md` §10) |
| Missing | an en dash |
| Hover, selected | local ground + 1 and + 2, declared after the row fill so they win |
| Columns | hug their content. Free text (names, emails, URLs) caps at ~32ch, then truncates on one line with "…" and a tooltip (`layout.md`, Worst-case data) |
| Actions column | last; hugs its contents with the cell padding either side; a ⋯ menu or a row icon button; only valid actions |
| Expired or inactive row | the whole row at 50% opacity |
| New or merged row | fades from ink-a4 to transparent over 700ms |

**Filters above, pager below** (`data.md`, Tables). The pager sits 12px under the table, outside its frame: the range on the left ("1-50 of 1,240"), rows per page and Previous / Next on the right, only when there is a page to move to. Summary-page lists stop at 5-6 rows.

**Empty state:** header and pager hidden. A centred block at ground + 1, 44px padding, `--radius-container`: an 18px icon (24px on a phone, not in a tile), two body lines in ink that passes 4.5:1: what is missing, then what to do. With filters on: "Try removing a filter, or clear them all."

**Failed load:** the empty-state layout with two lines ("Couldn't load runs." / what to try) and one secondary "Try again".

**Loading:** keep the frame and column widths; pulsing ink-4 bars at control radius in place of text. Skeleton rows: the page size, capped at 10.

**Table inside a card:** runs edge to edge along the card's foot under its own hairline (negative margins equal to the card padding); first and last cells inset by the card's padding.

## 7. Modals (desktop)

**A modal is for a focused task** (a form, a purchase, revealing a secret) or a confirm. It opens over the current page.

**A small confirm shown in place**, with no backdrop, is a card with `--shadow-button`, not `--shadow-modal`.

| Width (example) | Use |
|---|---|
| 620px | forms, purchases, key reveal |
| 460px | confirm, downgrade |
| 440px | compact info or steps |

Always `max-width: 100%` with a 16px backdrop gutter; `max-height: calc(100dvh - 32px)`.

**Card:** the overlay surface, `--radius-container`, `--shadow-modal`, z 100. The shadow's ring is the edge.

**Three parts, split by full-width hairlines:**

1. **Header band:** 20px sides and top, 16px bottom. Title at title size, ink-12; description at body size, ink-11, 4px under. In dark it may lift one step over the body. Takes the card's top corners minus any border.
2. **Body:** 16px padding (24px for roomy forms), 16-24px gaps, inputs fill the width. The only part that scrolls.
3. **Footer:** 12px padding, Cancel left, confirm right, 12px gap, buttons hug their labels.

**Confirm variant (two parts):** the band holds the message, then the actions row.
- The title asks the question; the band states the consequence plainly with its number: "This will delete the key from 3 projects." When the impact has parts, show them as a two-row table before the button.
- Destructive: title in red-11, the destructive confirm.

**Footer-driven modals close by Cancel, Escape and a backdrop click**; they carry no ×. Footer-less info popups keep a 22px × at 20px from the top right, ink-10, with a ground + 1 hover.

**Backdrop:** `--backdrop` (example 30% black in light, 90% in dark) with a 2px blur. Modals always dim. A side panel dims only when fullscreen. Bring a library dialog that drifts into line.

**Behaviour** (universal)
- `role="dialog"` with `aria-labelledby` on the title.
- On open, focus the first field, or the confirm in a two-part confirm.
- Trap Tab inside; return focus to the trigger on close.
- Lock page scroll while open.
- Once the form has changed, a backdrop click does nothing (Cancel or Escape close it), or it asks before discarding.
- One modal at a time; replace the content in place.

**Multi-step in place.** Form, spinner and result happen inside one card. The card eases between measured heights over 300ms with `--ease-out` while contents crossfade; better, hold the final size from the start. Give a spinner step a fixed height. Move focus into each new step.

**Anything opened from a modal** (select, menu) sits above it at z 110.

**Errors** from a modal on a list page become a toast after it closes.

## 8. Side panel (desktop)

- **Use it** to inspect or edit one record while the list stays visible, the row still highlighted. A focused task or a confirm is a modal; a new context is a page.
- 400-600px wide (*est.* from the user's saves), full height inside the panel float, `--radius-container` on the inner edge.
- The modal's header band, body and footer.
- Overlay surface, `--shadow-modal`, z 100. No dim unless fullscreen.
- Enters `translateX(100%)` to 0 in 240ms on `--ease-out`; exits in 200ms. Escape closes it.
- On a phone it becomes a bottom sheet.

## 9. Bottom sheets (phone)

Every dialog becomes a bottom sheet under 768px. Anatomy and drag physics in `mobile.md`. Surface rules:

- Full width, `--radius-sheet` top corners, a hairline on the top edge only. Overlay surface (`--surface-top` light, ink-2 dark); give it the overlay surface class so everything inside follows the sheet.
- No header band and no ×. The title becomes a section title on the sheet; a grab handle above replaces the ×.
- Rises in 320ms (bring a library dialog's 300ms in line).
- **Related information joins into one card of rows**: the model's raised fill on the sheet, control radius, hairlines between rows, rows at least 48pt.
- **Buttons sit below that card**, 12px under, 8px apart, as full-width 44pt secondaries that look like buttons.

## 10. Menus, popovers, tooltips

**Menu**
- Trigger: the select trigger, its chevron turning over while open.
- Portalled to the body, 6px below the trigger (or centred on it). Min width 160px (320px for a workspace switcher).
- Overlay surface, `--radius-container`, `--shadow-menu` (its ring is the edge), 4-6px padding.
- Items per `controls.md` §9. Each item's fill fades in and out where it is (150ms).
- Opens from the trigger: `scale(.97)` to 1 with a fade, 150ms in, 120ms out.
- Closes on outside press, Escape, resize, or page scroll (scrolling its own list doesn't count).
- An open menu holds its position while items shift; reposition on the next open.
- On a phone it stays 20px from the screen edges, or becomes a sheet.
- One dropdown component everywhere. Shortcuts right-aligned in a muted ink (`⌘P`).

**Info popover:** 12 × 10px padding, meta size, ink-11, `--shadow-popover`. On a phone it opens on tap.

**Action tooltip:** names an icon-only action. ink-3 with a hairline, or ink-12 inverted; meta size; **zero delay**. Never the only place information lives.

## 11. Toasts

- **One at a time.** Bottom centre, 24px from the bottom, z 120. On a phone: 12px above the bottom bar or home indicator, 20px from the sides.
- **Shape:** 48px tall, the model's control shape (fully round in the example). The tone's -3 fill, a hairline ring in its -6, title in -11 (-9 in dark), an optional solid -9 action with -contrast text. The whole toast is the tap target.
- Width: ~400px minimum with an action; otherwise it hugs the title plus 32px.
- Auto-dismiss after 6s.
- **A toast is for a result the user can't otherwise see**: a background job finished, an action from a closed modal failed. It may carry one action ("View project").
- A copy confirms in its own icon; anything already visible on screen needs no toast. A decision is a decision card (§5), not a toast.
- Decorative shapes only for celebrations. Motion in `motion.md`.
