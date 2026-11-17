# Data marks

Ways to draw a figure, a series or a state so that the drawing is the product's idea. A data mark sits beside its figure, never instead of it: pair every texture with a number someone with low vision can read.

## Tick bar

- **Encodes**: a rate or share per row (open rate, utilisation, completion), read at a glance down a column.
- **Earned when**: a table or list has one percentage per row that users compare.
- **Build**: fixed: ~20 equal ticks, filled count = round(value × 20), the figure to its left in tabular numerals. Varies: tick width and gap, filled hue (the signal colour), unfilled ink (a tint of the same hue or a neutral). CSS: a flex row of `<i>` or a `repeating-linear-gradient` masked to the value.
- **Costume when**: every column gets one, or the ticks carry no value.
- **Gold**: `tick-bar-cells`.

## Dither and halftone fill

- **Encodes**: a continuous quantity over time or space through dot density: decay, dose, exposure, heat, remaining capacity.
- **Earned when**: the quantity fades, accumulates or spreads, and the product has a print, signal or hardware link, or the density itself tells the story (dense at the line, thinning below = decay).
- **Build**: fixed: one ink on the ground, a fixed dot pitch, density or radius mapped from the value. Varies: the ink, the pitch (4-8px), ordered (Bayer) or stochastic. Halftone: SVG grid of `<circle>` with `r = f(value)`; keep pitch fixed and vary only the radius, or it turns to noise. Dither as a data fill: an SVG `<pattern>` per value bucket, or canvas with a Bayer 4×4 threshold. Static art: dither once at build time, ship the image.
- **Costume when**: stock photos are dithered for a lo-fi mood, or the dither sits under body text.
- **Gold**: `dither-decay`, `dither-charts`, `halftone-dot-field`.

## Dot-matrix and pixel cells

- **Encodes**: discrete events; one cell is one thing (a run, a deploy, a cheque, a check-in, an uptime minute).
- **Earned when**: the product counts discrete things and the count matters more than a smooth trend.
- **Build**: fixed: a grid of equal cells, colour per cell from data. Varies: cell shape (square, round), 2-4 tints of one hue for volume and one contrasting hue for exceptions (Saggar: orange cells only where something fired). CSS grid of `<i>` or SVG `<rect>`; canvas above ~2k cells (threshold needs measuring). Dot numerals for one readout: Doto or DotGothic16 (Google Fonts), or a 5×7 glyph map.
- **Costume when**: cells are random noise, frame a hero with no data, or cover every surface.
- **Gold**: `dot-matrix-cells`, `pixel-block-fill`.

## Hatched remainder and projection

- **Encodes**: what is left (capacity, budget, the rest of a limit) or what is projected (pace, forecast), distinct from what is actual.
- **Earned when**: a bar has an actual part and a remaining or predicted part.
- **Build**: fixed: actual solid, remainder or projection hatched at 45°. Varies: hatch pitch (4-6px), ink. `repeating-linear-gradient(45deg, ink 0 1px, transparent 1px 5px)`. Add a pace marker (a tick at where the value should be by now) and a sentence ("ahead of pace").
- **Costume when**: hatch fills a bar with no remainder meaning.
- **Gold**: `hatched-remainder`.

## Zoned and split bars

- **Encodes**: a value against thresholds (training zones, SLA bands, credit limits), or "x of y, some bad".
- **Earned when**: the thresholds or the bad share are what the user acts on.
- **Build**: fixed: one bar split into segments sized by value; the exception segment takes the exception hue, the rest stay neutral; a small legend with figures under it ("46 fixed · 9 open"). Varies: segment gap, height, radius.
- **Costume when**: segments are coloured for variety, not meaning.
- **Gold**: `split-bar-kpi`, `zoned-bar`.

## Ghost marker

- **Encodes**: the prior period, the average, or the target behind the current value.
- **Earned when**: the question is "better or worse than before".
- **Build**: fixed: a faint mark (outline bar, dashed tick, light dot) at the prior value behind the current solid one. Varies: form of the mark.
- **Gold**: `ghost-prior`.

## Readout and needle

- **Encodes**: one live value in a range, read like an instrument: now, against a scale.
- **Earned when**: the product is single-purpose and its main value is glanced at (a timer, a dose, a level, a bedside check). The whole screen may become one device.
- **Build**: fixed: one lit panel holding the figure, a tick scale under it, one needle or marker at now. Varies: panel colour (LCD amber, e-ink, dark glass), numeral face (segment, dot, mono, light grotesk), tick density. Figures change in steps, not tweens.
- **Costume when**: the device chrome spreads past the readout (wood grain, fake screws), or the readout shows a value nobody needs live.
- **Gold**: `readout-needle`, `device-readout`.

## Tick ruler with now

- **Encodes**: a position in time or a range; the user's window against the day.
- **Earned when**: the product is about a time window (sleep, shifts, bookings, time zones) or a single value set by drag.
- **Build**: fixed: a horizontal ruler with major and minor ticks, a now marker, labels at the majors. Varies: direction, colour band under the window (night to dawn), detent feel on drag (haptic on each major tick in native).
- **Gold**: `tick-ruler`.

## Barcode timeline

- **Encodes**: sessions or events across a day, each as a bar positioned and sized by time, coloured by category.
- **Earned when**: the product logs many short sessions (focus, listening, usage, calls).
- **Build**: fixed: a 24h axis, one thin vertical bar per session. Varies: category hues, bar width rule.
- **Gold**: `barcode-timeline`.

## Calendar markers

- **Encodes**: which days carry an event (payments, doses, deliveries) without opening each day.
- **Earned when**: the product is about a recurring schedule.
- **Build**: fixed: a week or month strip, a small mark on event days, today distinct. Varies: the mark's form (dome, dot, bar), stacking for several events.
- **Gold**: `calendar-markers`.

## Heatmap and segment funnel

- **Encodes**: when things happen (weekday × hour) or how counts fall through ordered stages.
- **Earned when**: timing or drop-off is a decision the user makes ("Best: Tue 9 AM").
- **Build**: heatmap: fixed grid, one hue ramp, the best cell called out with a chip. Funnel: each stage as a row of square segments, count and share beside it.
- **Gold**: `heatmap-funnel`.

## Radial or contour forms

- **Encodes**: recency around a centre (now at the centre, older outward), or clusters and similarity as nested rings.
- **Earned when**: the data is genuinely radial or clustered; a list would hide the structure.
- **Build**: SVG; two colours at most; hover shows a compact row of the record's real fields.
- **Costume when**: a radial layout is used for linear data.
- **Gold**: `radial-timeline`, `contours`.

## Proportional blocks

- **Encodes**: parts of a whole as flat blocks sized to their values (spending by category, drinks against a daily limit).
- **Earned when**: the parts are few (2-8) and the total against a limit matters.
- **Build**: fixed: blocks in one row, widths from values, a limit line across. Varies: gap, radius, hue rule.
- **Labels**: a block gets its value written inside it only when the value fits with the floor's inset. Smaller blocks keep their value on the list row they stand for, with the same order and hue, so every value is written somewhere on screen. Never shrink a label to fit, and never draw a block with no value anywhere on screen. When more than about a third of the blocks are too small for a label, there are too many parts for this technique: merge the smallest into one "other" block, or use a list with tick bars.
- **Gold**: `proportional-blocks`.

## Reframed unit

- **Encodes**: the same quantity in the unit the user feels: spending as hours of work, a loan as months of rent, storage as photos left.
- **Earned when**: the domain unit is abstract and a human unit answers the real question.
- **Build**: the reframed figure as the hero, the domain unit small beneath. One reframe per product; the rest of the UI keeps domain units.
- **Gold**: `reframed-unit`.

## Data on the world

- **Encodes**: location or path, drawn over the place it happened (a route on an aerial photo, stats set on the post's photo, a branch graph of the product's own model).
- **Earned when**: the product is about places, paths or a model the user must picture.
- **Build**: a scrim or solid surface under any text on imagery (`imagery.md`, Text on images). Line weight and colour from the signal rule.
- **Gold**: `data-on-photo`, `branch-graph`.

## Textured track

- **Encodes**: what a control sets (volume as ticks, brightness as dither, sharpness as hatch); the empty part of the track has a material.
- **Earned when**: the product is a media, image, audio or device control panel.
- **Build**: track background is a pattern per property; the filled part is solid; the boundary dissolves over 20-40px (*est.*) through a dither mask.
- **Gold**: `textured-slider`.
