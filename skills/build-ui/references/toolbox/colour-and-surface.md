# Colour and surface

## The colour rule

Every accent gets a written rule beside its token: when it appears and what it means. "Ember appears only while something is firing or has failed." "Lime picks out financial data, nothing else." A colour with no rule spreads to random buttons; that is how a palette turns into decoration. Token names may come from the world when the world is rich (`--ember`, `--glaze`, `--clay`); roles stay underneath (`--signal: var(--ember)`).

Status hues (success, warning, danger, info) stay separate from the brand hue. A brand that is green or red moves its status shades apart or pairs status with icons.

**Gold**: `colour-rule`.

## Strategies

| Strategy | Encodes | Earned when | Build | Costume when | Gold |
|---|---|---|---|---|---|
| Restrained | Nothing but status and selection | Long-session tools where colour must mean alarm | Neutrals carry structure; one accent for primary, selection and focus; status as tints with same-hue text | It is the default because nothing was decided: then it is Bland | `restrained` |
| Signal | One hue = now, live, attention | Monitoring, timers, live data, anything with a "now" | One saturated hue used only on the live mark, the now line, the active cell; everything else neutral | The signal hue also fills buttons and headers | `signal` |
| Committed shell | The product's identity, held in the frame | A B2B tool with a strong single brand and dense neutral content | Rail, frame or header in a deep brand hue; the work area stays plain; selection inside the rail is a lighter step of that hue | The hue leaks into tables and charts | `committed-shell` |
| Field | Category or section | 3-4 sections or categories that users tell apart; low data density | Flat pale fields per section; text in a dark shade of the field's own hue, never black; no borders | More than four fields, or fields used as a card grid | `field-sections`, `category-tints` |
| State card | The state of one thing | Few cards, each a vital sign (heart rate high = red card) | Card fill changes with state; the rest stay neutral | Cards are coloured for variety | `state-card` |
| Sampled | The content's own colour | Media, art, music, photos | Ground and accent taken from the current artwork, with contrast checked per sample | Sampling from decorative imagery | `sampled-from-art` |
| Drenched moment | One saturated screen per flow | Onboarding, a brand moment, a critical alert | One colour carries the whole screen; the next screen returns to neutral | Every screen is drenched | `colour-field-moment` |
| One ink | A brand hue as the dark ink | Editorial, finance, records | A dark hue (oxblood, navy, bottle green) replaces black for text and lines | | `one-ink` |

## Ground and luminance

Decide light or dark from one sentence of scene: who, where, under what light. A dark product is a direction, not a theme toggle; when both themes ship, design each on purpose and keep sizes, spacing and shapes identical across them. Dark done well: near-black ground, surfaces one or two lightness steps up, solid hairline outlines, status hues lifted to keep contrast. **Gold**: `dark-done-well`.

## Surface models

How layers separate. Pick one per product; the floor's layering rules (`../floor/surfaces.md`) hold inside each.

| Model | Build | Fits |
|---|---|---|
| Hairline | One ground; 1px or 0.5px rules between rows and sections; nothing floats | Dense records, ledgers, reading |
| Panel on ground | Grey ground (~#F2-F4); white content panel with radius 10-16px; hairline rows inside | Most SaaS dashboards in the user's saves |
| Raised controls | Controls and cards lifted by a 1px ring plus a short tucked drop (`0 1px 2px` or `0 3px 4px -1px`) | Tactile, pressable tools |
| Tonal | Soft tinted tiles, large radii (20-28pt), no edges, almost no shadow | Consumer mobile |
| Field | Flat colour blocks are the structure; no lines | See Field strategy |
| Stepped dark | Lightness steps with solid outlines; shadow never the only cue | Dark products |
| Object | The screen is one body with a readout, keys or dials | Single-purpose tools (see `data-marks.md`, Readout) |

Nesting: one level of grouping. An inner card is earned only when it is an object (a scheduled send with its date chip), never to group.

## Button edges

From the user's saves, the shape of a finished filled button:

- Fill: a vertical gradient within ~2-6% lightness, or flat.
- Ring: `0 0 0 1px` in the button's own hue one step darker, never grey on a coloured fill.
- Drop: short and tucked (`0 2px 4px -1px`), never a large blur.
- Dark filled buttons and keycaps may carry a 0.5px lit top edge (`inset 0 0.5px 0` a few steps lighter). Cards and panels never do.

**Gold**: `button-edges`.

## Grain

- **Encodes**: physical material; also hides banding in large gradients.
- **Earned when**: there is a large gradient or flat field at hero scale, or a grain illustration style.
- **Build**: SVG `feTurbulence` (baseFrequency ~0.8, 2-3 octaves) as a data-URI overlay, `mix-blend-mode: soft-light` or `overlay`, opacity 0.04-0.1, `pointer-events: none`, never animated, never under dense text.
- **Costume when**: grain on every panel as the page's only idea.

## Gradients that depict

- **Encodes**: a physical phenomenon the product is about: time of day, sky, heat, a voice level, the namesake's light (aurora for Norrsken).
- **Earned when**: the gradient is literally the subject or the state. Otherwise use flat colour.
- **Build**: `linear-gradient(in oklch, …)` to avoid grey midpoints; grain at large sizes; a live state (voice, temperature) as a shader with parameters tied to data.
- **Costume when**: a mesh blob behind a hero, or a gradient used as a card surface.
- **Gold**: `gradient-depicts`.
