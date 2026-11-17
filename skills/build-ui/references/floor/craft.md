# Craft

The precision rules for a still frame, adapted from Stageshow's `craft.md` for real UI. Roles and sizes are in `tokens.md`, `controls.md` and `surfaces.md`, and the direction (`../direction.md`) sets their values; behaviour is in `states.md`. The audit's line names are in backticks.

## Restraint

- **Simplify before polishing:** the fewest surfaces and strings that explain the screen, then borders and badges only where they earn their place.
- **One number gets to be big;** the rest are lines.
- **Say it once.** One clear signal for a state, not the same badge in the header, the row and a banner.
- **Compose objects, not an inventory of cards:** hierarchy from proportion, space and surface, not more boxes.
- **The heaviest marks sit on what the screen is about.**
- **Space follows the content.** The result gets the room; no empty band mid-panel while the main thing is pushed down. No void between a figure's label and its number.
- **Judge the silhouette before the details.** At thumbnail size the subject, support and empty space read as one picture.
- **Dots, halos, badges and focus rings sit fully inside the content edge.**
- **Keep the domain's signature content:** album art, thumbnails, avatars. Swapped for icons, a music app reads as a generic list.
- **Named avatars take their own color;** gray discs are for unknown people only.
- **Place a control next to what it changes,** arranged like the thing it sets. If it needs a label to explain what it does, the mapping is weak. [apple-design]
- **Label and value match:** a label beside a real control, never beside an empty pill.

## Type

- **Fit the text before fixing the box.** A control's border-box holds content, padding and border; flex centering does not make it fit (`control-block-fit`).
- **Small text gets a line height of at least 1.3** and an inset on every side.
- **One workhorse family:** the product's or the system stack. A voice face only where the direction's type axis puts it. Mono for code and identifiers compared character by character, or as the whole voice when the direction makes it so.
- **Sentence case** unless the platform uses another case.
- **Hierarchy from one size step and one ink step.** Weight and hue keep the roles the direction gives them.
- **Real headings in real UI:** one `h1` per view, then `h2`/`h3` in order (web); `.accessibilityAddTraits(.isHeader)` on section titles (SwiftUI).

## Spacing and alignment

- **Words keep a 12px inset** from the edge of a card, panel, sheet or hovered row (`tight inset` under 8px).
- **Row padding is 12px,** 8px in a dense list; a one-line row three times taller than its words is a `fat row`.
- **A title over its subtitle reads as one item:** 4 to 6px of ink between the lines, a 1.3 line height plus a 2px gap (`tight stack`, `loose stack`). The air comes from the row's padding.
- **A button keeps 8 to 12px from the field or card edge above it** (`tight control`).
- **A floating card (popover, toast) pads the same all round,** measured to the avatar's and button's edges.
- **Text never touches a neighboring box:** a fixed `gap` of 8 to 12px, never leftover `space-between` (`touching`).
- **Center a label on its letters, not its line box.** A label beside an icon, in a pill, or an initial in a disc reads low: `text-box: trim-both cap alphabetic` on the web.
- **Nested shapes pad evenly,** and the outer radius equals the inner radius plus the padding.
- **Carry the inset round the bottom;** a comfortable top does not excuse a cramped footer.
- **Content clears the bar above it** by at least the content's side inset.
- **Whitespace groups:** a title sits closer to its metadata than to the next record; never spread lines equally to fill a frame.
- **Align the reading edge, then the visible ink.** A small icon aligns with the title's first line.
- **A control hugs its content;** never `flex: 1` with its contents at one end (`lopsided`).
- **Fix overflow by fitting the content,** not by widening the container; re-measure padding after (`uneven`, `spills its slot`).
- **Columns line up:** every row shares one grid template with fixed tracks; optional content keeps its empty track.
- **A dot, badge or ring is not a column:** in the gutter or on the avatar, 6px clear, inside the row's inset (`tight mark`).
- **No near-tangents.** Edges 1 to 3px apart read as an accident: line them up exactly, or part them by at least 8px (`near-tangent`, `near aligned`).
- **A centered amount centers its digits;** the currency sign hangs outside the centering.
- **Links have no hover surface;** a control has a surface visible at rest.
- **Separators in menus and drawers run edge to edge,** with equal space above and below.
- **Hover and selection fills are inset and rounded;** negative margins go on the list, not the row.
- **A trigger with its popover open keeps its pressed look.**
- **A popup under a field lines its sides up with the field's.**

## Icons

- **Icons come from a set, never drawn by hand.** The product's own pack first; else one set chosen on purpose: SF Symbols on Apple platforms, Material Symbols on Android, else Phosphor, Iconoir, Radix, Tabler or Heroicons. Lucide on purpose, not by reflex.
- **One family, one stroke weight, one size** per surface: 14 to 16px on desktop web, 20 to 24pt on a phone (`mobile.md`) (`mixed icons`).
- **Even glyphs in even boxes;** an odd icon in an even box snaps after motion (`half-pixel glyph`).
- **Fixed boxes don't shrink:** an icon button or chip in a flex row gets `flex: none` (`squeezed`).
- **Small icons are filled.** At 14px and under, thin outlines go wiry.
- **Icons are one opaque color;** fade with `opacity` on the svg, no duotone (`translucent icon`).
- **Emoji are content, never icons** (`emoji icon`).
- **Other products' logos are their real marks,** in original proportions; never a look-alike.
- **No invented logo:** a letter in a colored square is not a mark. Use the real mark or a plain text wordmark.
- **External-link arrows only where a link leaves the app.**
- **AI features show what the AI does:** no sparkle, wand or star as decoration, no purple as the AI color.
- **Fit every glyph in its viewBox** (`clipped glyph`).

## Color

- **One neutral family** for every surface; another material differs on purpose.
- **No redundant tonal borders.** Try the fill alone; add the border for separation, state, or because the system draws it.
- **Quiet is not faint:** check text, actions and surfaces against the real ground (4.5:1 for text the user must read).
- **A gradient or glow serves the content or goes.**
- **The main card isn't outlined to point at it.** Lift it with its own surface or shadow; a ring is for a field that has focus.
- **A filled button keeps its color under the pointer:** one step of its own color, never a gray swap.
- **Nothing translucent overlaps** (`onion skin`): stacked avatars and chips take opaque fills.
- **Status color stays legible:** success, pending and disabled distinct.
- **Build once, check every theme:** a light pass does not prove dark. A restyle in one theme leaves the other alone unless it is named.
- **Highlights inside a sentence stay in the text ink;** a hued word reads as a link.
- **Status dots share the status text's colour.**

## Platform chrome

- **Never draw platform chrome from memory;** use the system's or open the real app first.
- **The status bar, home indicator and safe areas come from the system,** never drawn by hand.
- **Columns run the full height of their window;** a column that stops short leaves a seam.
