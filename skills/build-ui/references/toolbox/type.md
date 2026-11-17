# Type

Product UI identity rarely comes from the typeface. In the user's strongest saves nearly every product sets its UI in one plain sans; the voice, when there is one, goes to a few places. Two families at most, two or three weights.

## The workhorse

One sans for every control, row and label. Pick by fit, not fashion: x-height and width that hold at 13-14px, tabular figures, the weights you need, the scripts the product ships (Arabic: IBM Plex Sans Arabic is the common web choice). Fit test and remap: `../floor/tokens.md`, Typeface fit.

## Where a voice goes

| Placement | Encodes | Earned when | Gold |
|---|---|---|---|
| Serif for page and record titles | Warmth, heritage, the human side of a technical product | Security, finance, records, editorial, anything where trust is the product | `serif-titles` |
| Display weight for the hero figure (light or medium at 32-48px, decimals dimmed) | The one number that matters | Every product with a hero figure; it is the cheapest identity move | `figure-dimmed-decimals` |
| Dot, pixel or segment numerals for one readout | A device or signal reading | The readout is the signature (see `data-marks.md`, Readout) | `dot-numerals` |
| Rounded derivative of the workhorse (Collab Sans, intern) | Friendliness without a new skeleton | Consumer finance, health, kids, habits | |
| Condensed serif or display headline, once per flow | A moment: onboarding, a title page | Consumer onboarding, editorial products | `onboarding-headline` |
| Mono as the whole voice | An instrument | Terminal agents, log tools, vaults; when users live in a terminal | `mono-voice` |
| Serif small caps for chart annotations | A value and its story on the chart | Annual figures, milestones | `pixel-block-fill` |

## Mono

Mono is for code, identifiers compared character by character (account numbers, commit hashes, catalogue codes), keys and machine values. A table keeps one typeface except for its identifier column. Mono labels to look technical are costume.

## Figures

`tabular-nums` on every changing or aligned figure. Units and decimals at about half size, one ink step down. Minus signs as U+2212. Diff counts at text size in their status hues (`+3 −1`). **Gold**: `data-typography`.

## Reflex faces

On display sizes these read as the model's default, so a direction that picks one says why it fits this product: Fraunces, Playfair Display, Cormorant, Lora, Newsreader, Syne, Space Grotesk, Space Mono, DM Sans, DM Serif, Outfit, Plus Jakarta Sans, Instrument Sans, Inter as a display face. Inter, Geist and system UI as the workhorse are fine.

## Sources

Free faces seen in the user's saves (licences unverified unless noted): Collab Sans (OFL, yugal.one/collab-sans), Timeless superfamily (timeless.co/type), Geist and Geist Mono, Inter, EB Garamond with Instrument Sans, Doto and DotGothic16 (Google Fonts), JetBrains Mono, IBM Plex Mono, Fontzz (fontzz.vercel.app). Check a licence before shipping a face.
