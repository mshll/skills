# Data

Figures, tables and charts. Values marked *est.* are estimated from the user's saves, not measured; adjust to the direction's density.

## Figures

- **One hero figure per surface.** The figure that answers the plan's question is the largest thing on screen: 28-36px on desktop, 32-36pt on a phone, up to ~48pt when the figure is the whole screen (*est.*).
- **Dim what matters less inside the figure**: decimals, units and denominators one ink step down and about half the figure's size: "$1,087,716**.25**", "385,942 kWh", "12,501/20K".
- **Every figure has a comparison.** A delta in the right unit (pts for rates, % for counts), an "of N" denominator, a dashed average line, a target, or a split bar. A bare number is not a KPI.
- **Tabular numerals** on every figure that changes or sits in a column: `font-variant-numeric: tabular-nums`. Amounts keep their decimals in columns so they align.
- **Large amounts stay exact** where the user acts on them (a balance, an invoice). Compact forms ("$1.4M") only for overviews where the exact value is one tap away.
- **Missing is an en dash**, not 0 and not blank.

## Tables

- Row height ~44px for one line, ~56px for two (*est.*); compact ops products ~36px.
- Primary text at body size, secondary line 1-2px smaller in a lighter ink, carrying data.
- **Numbers right-aligned** in tabular figures; text and identifiers left-aligned. Identifiers in mono only when users compare them character by character.
- Header in a muted ink at body size or one step smaller, sentence case.
- Status as a dot and a word for normal states, a chip with an icon only for exceptions.
- Filters above the table on one row: segmented tabs with counts ("All 24 · Sent 19 · Drafts 3") on the left; search, date range and export on the right.
- Footer: range on the left ("1-50 of 1,240"), rows per page and pager on the right, outside the table's frame.
- Bulk selection shows an action bar that names the count ("3 selected · Send reminders").
- Worst first when the job is triage; say the sort in the subtitle.

## Charts

- **The chart answers one question**, stated in its title or the sentence above it.
- **Bars for counts per period and for status or health; a line for a continuous measure where the trend is the question** (latency, a balance over time).
- **Highlight the one that matters**: today's bar, the over-limit bar, the selected series in the accent; the rest in a neutral. Never four saturated series when one carries the answer.
- **Reference lines are labelled**: a dashed average, limit or target with its value in a tag ("avg 59", "400 mg limit").
- **Direct labels** over legends where there is room.
- **Tooltips speak**: "24h · 49.8% opened", "33 walkarounds · 80% of leads · 8 dropped off".
- **Forecast or projection is drawn differently** from actuals: dashed line, hatched bar or lighter fill.
- **Axis labels never collide** with marks, tags or each other at 390px. The gate does not catch overlapping chart labels: check them in the shots.
- Chart mechanics (colour formula, mark specs, accessibility): the `dataviz` skill when available.

## Micro-viz in rows

A small mark inside a table cell or list row is floor-level when it carries the row's own data: a tick bar for a rate, a sparkline of the last hour, a split bar for "x of y, some bad". It sits beside the figure, never instead of it. A sparkline or ring that stands in for missing content is decoration; cut it. Techniques for drawing them as a signature: `../toolbox/data-marks.md`.
