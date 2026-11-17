# Layout and hierarchy

Where things go, how big they are relative to each other, how much to show, and how the eye is led. `ink-N` is a step of the neutral with the job `tokens.md` §2 gives it. Type sizes, radii and fills come from the direction through the tokens; values marked *example* are the worked example's (compact density), shown for proportion.

## 1. Hierarchy

**Hierarchy comes from contrast steps first: fill, ink and size, before weight or hue.**

The ladder of emphasis, strongest first:

1. **Primary**: the direction's primary fill. The one next step on the surface, or none.
2. **Secondary**: a control in the surface model's raised or outlined recipe. The chosen option, secondary actions, cards.
3. **Quiet fill**: ink-3 or a hue-3 tint. Selected rows, wells, quiet chips.
4. **Text only**: links, ghost actions, labels.

For text, rank with **a size step plus an ink step**:

| Ink | Role |
|---|---|
| ink-12 | titles, values, labels, the variable part of a line |
| ink-11 | descriptions, body, row icons, a fixed prefix, meter labels |
| ink-10 | labels under figures, "/ total" suffixes, placeholders, chevrons, "(optional)", footnotes, pager counts |
| ink-9 | group titles, leading icons |

Text a user must read to act passes 4.5:1. Where ink-9 or ink-10 misses it on its surface, tune the step or set that text in ink-11 (`tokens.md` §2).

**Type scale.** The direction's density sets the sizes (`tokens.md` §8-9). The steps are fixed: body, a meta step one size down, a card or dialog title one step up, a section title, a display or hero figure. Example (compact): 13/20 body, 12/16 meta, 16/24 card title, 20/28 section, 28-32 display.

**Mixed-ink lines** lead the eye to what changes:
- A set filter: label ink-10, value ink-12 ("Status **Failed**").
- A hint: "Filter by" ink-11, the key and value ink-12.
- A two-tone title: lead words ink-11, the key noun ink-12 ("Create your first **project**").

**Hue carries the meaning its rule gives it** (status, identity, the direction's signal). Status wins a clash. Highlights inside a sentence stay in ink-12: a hued word reads as a link.

**Say it once.**
- A card under a heading does not repeat the heading's name.
- View switches say "Live" and "All", not "Live projects" and "All projects", when the page title already says it.
- A table's Actions header appears once a row exists.
- A progress bar's position is its own label: its accessible name carries "Step 1 of 4". An alert's title carries the warning; the hue and icon of its frame say the rest.
- A title stands on its own. A small label above it is a licence from the direction, never a default.

## 2. Columns

| Page type | Column (universal) | Why |
|---|---|---|
| Read top to bottom (home, overview, guides) | ~800px, centred | one scan path, a comfortable line |
| Data (tables, charts, usage, plans) | ~1200px | tables and charts need width |
| Form, flow, sign-in | ~440px | one field per line, the eye does not travel |
| Rail | the widest nav label + icon + gap + row and rail padding, rounded up to 4px | example: 292px at 13px Inter |

- **Widths follow the type.** When the direction's body size differs from 13px, scale the columns by the same factor. Cap prose at 70ch in any column.
- A wrapped card column adds its own inner padding to the width (800 + 2 × 12 = 824) so its content lines up with an 800px column elsewhere.
- **Markers hang outside the column** when there is room (container ≥ column + 2 × 48px): step markers sit in the margin and every line of text starts on the page's left edge. Narrower, they move inside.
- **Room at the ends:** 48px above the first title, 64px at the page foot, 16px round the main area on desktop.

## 3. Rhythm

Spacing is the 4px grid (`tokens.md` §9): 2, 4, 6, 8, 12, 16, 20, 24, 32, 48, 64. Nudges are 1, 2 or 4px; blocks move in 8, 16 or 32px.

| Gap | Rule | Example (compact) |
|---|---|---|
| Title to its description | tight: the two read as one unit; grows with the title size, tuned in 2px steps | 2px under a card title, 4px under an app-chrome page title, 6px under a section title, 8px under a display title |
| Heading block to content | about 4× the title-description gap | 24px |
| Section padding | the same above and below | 32px each (64px from one section's content to the next title) |
| Inside a step: title block to content | | 16px |
| Step to step, field to field | | 32px, 20px |
| Card padding | equal on all sides; a step smaller on a phone | 24px (20px phone) |
| Figure to its chart | | 16px |
| Divider between groups | full width, equal clear space each side | hairline, 32px each side |

A title and a following notice sit at the title's own description gap.

**Bar and row heights** are line height + 2 × padding: 36 = 20 + 2 × 8, 46 = 20 + 2 × 13; a 52px strip is a 36px control + 2 × 8px inset. Recompute when the line height changes.

## 4. Proportion

- **Equal padding.** Top and bottom padding match the sides on strips, bars, cards and selectors. An icon button in a bar is as wide as the bar is tall.
- **Match the neighbour.** Input = button = toggle = selector height. Dropdown rows = button height. A selected row in a menu is as wide as the search field above it. Cards in a row share one height. Input text equals button text; a badge beside large text grows with it.
- **Space above equals space below** for anything placed between two things.
- **One left edge.** All text in a column starts on the same line. When centring, centre the text, not the markers beside it.
- **Icons** align to the first line of text, or centre on the title-plus-description block as a whole.
- **Numbers right-aligned in tabular figures** in table columns (`data.md`, Tables); text and identifiers left. A value set against its label also aligns right (a stat row, a meter's amount). In a row of pills, align the text inside them, not the pills.
- **Fixed ratios.** Action cells 1:1. Media and players 16:9. Thumbnails share their card's ratio. Logos in a set get equal visual weight (nudge each 2-10%).
- **Hug or fill.** Table columns, toggles and action cells hug their content, up to the caps in §7, so text does not wrap. Inputs and dropdowns in a modal fill the width. Desktop dialog buttons hug; phone action stacks fill.
- **Nested radius = outer radius minus the padding between them.** No double borders.

## 5. Placement

| Element | Goes |
|---|---|
| Page title | one fixed place per product: the top strip or the top of the column. In a strip, absolutely positioned so it does not move with the switcher |
| Breadcrumbs | top strip, left. Where they exist they replace the back button: one way back |
| Page-level actions | top strip, right |
| Section actions | right of the section title, centred on title + description together (`flex items-center justify-between gap-4`) |
| On a phone | under the title, full width, 16px under the description, 24px before the content |
| **Actions vs data** | **above the data they act on** |
| Paging | below the data, outside its card: count left, Previous / Next right |
| "View all" | after the section's content |
| Filters | one row beside the view toggles, search at the right; scrolls sideways on a phone, never wraps |
| A control that sets something | next to (or right above) the thing it sets |
| Rail | switcher and search pinned top; notices and account pinned at the foot. One notice at a time, by priority |
| Order of a pair, desktop | secondary first, primary at the far right |
| Order of a pair, phone | primary on top for pages; confirm on top for dialogs and flows |

A sticky header shows its bottom edge only once content scrolls under it. A soft fade in the ground colour says "more" better than a hard cut-off.

## 6. How much data to show

**The least that answers the question the page exists for.**

| Where | Rule | Example |
|---|---|---|
| A summary list | 5-6 rows, then a pager under the card or "View all" | |
| A full list page | the rows that fit one viewport at the row height, rounded to 10, 20, 25 or 50 | 20 at 38px rows |
| A period breakdown | one natural period of the data's unit: 24 hours, 7 days, 30 days, 12 months | 30 days |
| A card grid | a whole multiple of the column count, 2-3 rows | 6 (2 × 3) |
| Skeleton rows | the page size, at most 10 | |
| Stats on a phone | rows (label left, value right, hairlines between), so six stay a glance | |

- **Prefer one strong figure.** A big number with its comparison beats a grid of small numbers (`data.md`, Figures).
- **Remove duplicate widgets.** Fold secondary numbers into the card they belong to. The same number twice makes the user wonder which is right.
- **Gate by state.** Until the user has done the first key thing, the steps to do it can be the whole page. Afterwards the remaining steps shrink to one section at the top and leave once done.
- **Progressive disclosure.** Show the next steps after a choice is made; the next marker waits at 50% opacity. "Other" opens an inline field.
- **Hide rather than delete.** Sections and invitations show only if they exist; completed steps hide; optional work stays off the critical path.
- **Real data only.** Fixture data belongs in previews (`content.md`, The fixture).

**Formatting**
- Format with the user's locale through the Intl APIs. The examples show the pattern, not a fixed format.
- Money: `Intl.NumberFormat(locale, { style: "currency", currency })`. **Keep the decimals wherever amounts sit in a column or beside other amounts**, so digits align. A lone whole amount in prose or a phone label may drop ".00" (`minimumFractionDigits: 0`). At most 3 decimals elsewhere.
- Dates: `Intl.DateTimeFormat(locale, { weekday: "short", day: "numeric", month: "short" })` ("Fri, 24 Oct" in en-GB). Drop the time zone on a phone.
- Long IDs: truncated to about 8 characters, the full value in a tooltip with a copy action.
- "0:00" for durations that have not started; `tabular-nums` wherever numbers line up.

## 7. Worst-case data

Design for the shortest and longest real values, not the sample. Fixture rules: `content.md`; the full list: `states.md`, Worst case.

| Case | Rule |
|---|---|
| Free text in cells (names, emails, URLs) | one line; hug up to 32ch, then end-truncate with "…"; full value in a tooltip and still selectable |
| Names in the rail, breadcrumbs, modal titles | the same rule at the container's width |
| Descriptions in cards | clamp to 2 lines |
| Badges | at most 24ch |
| Large amounts | exact wherever the user acts on them (a balance, an invoice, a table they reconcile); give them the room. Compact (`notation: "compact"`, "1.2M") only in overviews, with the exact value one tap or hover away (`data.md`, Figures) |
| Missing or null value | an en dash in ink-10 |
| Counts | plural forms via `Intl.PluralRules` |
| Flex children that hold text | `min-width: 0`, so truncation can happen |

Preview each component with the shortest and longest real values before shipping.

## 8. Figures and meters

What a figure says, its comparison, dimmed decimals and tabular numerals: `data.md`, Figures (the source of truth). The layout parts:

- **The number sits above its label**, the label directly under it with no gap. The range goes in brackets after the label: "Runs (24h)". Two figures side by side sit 32px apart.
- **Loading:** the number shows a pulsing ink-10 dash in its own box; the label stays put, so nothing shifts when the value lands.
- **Meter:** label (ink-11) and amount (ink-12 with an ink-10 "/ total") on one line, the bar under it. Every bar on a surface shares one height (example: 10px, 12px below the line). 0 shows no fill; anything above 0 shows at least a 2% sliver. A bar takes its identity hue and turns to the danger hue at the product's threshold (example: 10% remaining), only for quantities that run down, never for progress.
- **Axis labels:** short forms from `Intl.DateTimeFormat(locale, { weekday: "short" })`, in sentence case, sized so they never collide at 390px.
- Hovering between ticks shows that exact time and dims the nearest ticks. Nothing clips or overflows the chart's box.

## 9. Steps and markers

- **Marker:** a disc in the direction's control recipe with the step number in ink-11, centred on the title's first line. Example: 32px disc on a 24px title line.
- **Connector:** a hairline, 8px under the marker, 12px above the next.
- Marker to text: 16px (12px on a phone). All steps share one height.
- **States:** done = the success hue with a tick; waiting = a slowly turning dashed ring, with a shimmer on the title; counting = a segmented ring (accent-9 done, accent-6 to go).
- **Progress bar:** segments with equal gaps, ink-4 track, ink-12 or accent fill. Example: 6px segments, 6px apart.
- A step that cannot run yet shakes where it stands and says why.
- Celebrate the moment of finishing (a short beat, then the card fades out), never the state. It does not replay on reload.

## 10. Badges beside titles

8px from the title, centred on its first line. A badge beside a section title goes one size up so it reads at the title's scale. Recipe: `controls.md`.

## 11. Empty, loading and error

Which blank cause gets which state: `states.md`, States. The copy: `content.md`. The layout:

- **An empty data region keeps its shape.** Headers, axes, dash placeholders or ghost marks stay, plus one line on what is missing and the next step. A dashboard with no data yet still reads as the dashboard.
- **A list or table with zero rows** collapses to one quiet panel the height of a few rows: an optional small icon (never in a tile), then two lines, what is missing and what to do. "No projects yet." / "Create a project and it will appear here." Each line fits on one line. Table chrome (header, pager) goes while there are no rows.
- **Failed load:** the empty layout with two lines ("Couldn't load runs." / what to try) and one secondary "Try again".
- **Loading:**
  - Skeletons that keep labels and column widths in place and replace only the values, or the empty layout with a spinner in place of the icon.
  - Hold steps and panels at a minimum height so buttons stay put.
  - Cycling text shares one grid cell sized to its longest option.
  - The label is true while loading: "Loading…" and disabled until the real state is known. "Adding funds to your balance…" until it has landed.

## 12. Copy

Fixture, voice, subtitles, actions, consequences, empty-state text and copy tells: `content.md`.
