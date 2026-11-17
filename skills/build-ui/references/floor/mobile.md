# Mobile

A phone layout follows the platform's habits: thumb-sized targets, one left edge, stacked actions, sheets from the bottom, presses that answer like native controls. Apply these to every phone change without being asked. Values marked **(est.)** were measured off full-resolution saves of strong mobile screens and are estimates in points; the direction's density moves them within their range.

## 1. Breakpoints and pointers

- **Phone:** under 48rem (768px), `screen` only, so a printed page keeps desktop sizes.
- **Touch:** `(pointer: coarse)`. 16px fields, 44pt hit areas and no key chips apply on any touch screen, tablets included.
- Put phone and theme overrides in unlayered CSS (or a later layer) so they beat utilities without `!important`.

## 2. Native feel (always on)

| Rule | How | Why |
|---|---|---|
| Hover only on a fine pointer | hover styles under `(hover: hover) and (pointer: fine)` | hover states stick after a tap otherwise |
| The hover look shows on press instead | same styles on `:active` under `(pointer: coarse)`, wrapped in `:where()` so a control's own `active:` style still wins | every control answers a press as a native one does |
| No tap highlight | `-webkit-tap-highlight-color: transparent` | controls press with their own scale |
| No double-tap delay | `touch-action: manipulation` on controls | taps land at once |
| No accidental selection | `user-select: none; -webkit-touch-callout: none` on controls; links and content stay selectable | long-press does not select button text |
| No rubber banding | `overscroll-behavior: none` on the app root; `contain` on scrolling sheets and menus | the page does not bounce or chain scroll to what is behind |
| Real viewport height | `100dvh` | `100vh` hides content under the browser bars |
| Safe areas | `env(safe-area-inset-*)` on bars, sheets and fixed actions | nothing under the notch, island or home indicator |
| No scrollbars | hide them on phones | a fade or a cut-off item says "more" |
| No hover-only information | info tips open on tap; a disabled control's reason shows as text under it | there is no hover |
| Fields do not zoom | 16px field text on any touch screen | iOS zooms into anything smaller and stays zoomed |

```css
/* Tailwind v4: hover only for a mouse or trackpad */
@custom-variant hover {
  @media (hover: hover) and (pointer: fine) {
    &:hover { @slot; }
  }
}

/* A 44x44 hit area round a small control, look unchanged */
@media (pointer: coarse) {
  .touch-target { position: relative; }
  .touch-target::after {
    content: ""; position: absolute; left: 50%; top: 50%;
    width: max(100%, 44px); height: max(100%, 44px);
    transform: translate(-50%, -50%);
  }
}
```

## 3. One gutter, one left edge

- **Side gutter 18-20pt (est.)**, one value per product. Every title, row and card starts on the same x. A gutter under ~16pt reads cramped.
- Each block owns its own sides; nothing adds a second gutter inside the first.
- A centred hero figure is the only element allowed off that edge.

## 4. Sizes

| Item | Phone |
|---|---|
| Buttons, fields, selects | 44pt minimum (desktop control heights lift automatically) |
| Primary CTA in a flow or onboarding | full width, 50-56pt (est.), in the bottom third; the secondary as a text link or tinted twin under it |
| Segmented control | each option a 44pt hit area; the track's visual height is the direction's |
| Switch | the platform's (Apple HIG: 51×31 track); 44pt hit area |
| A control at a row's end | as far from the row's right edge as it is from the row's top and bottom |
| Field | 44pt tall, 16px text; an icon or key inside sits in a 32pt box near the end |
| Icon buttons, pills, small marks | keep their look; `touch-target` gives a 44pt hit area |
| Top-bar icon buttons | 38-44pt circles (est.) |
| Gap between small icon buttons | wide enough that hit areas do not overlap (22px icons sit 22px apart) |
| List rows | 44pt minimum; two-line rows with a leading mark 57-66pt pitch (est.) |
| Rows in a sheet or grouped card | 48pt minimum |
| Table rows | 44pt minimum |
| Icons | one family, one stroke weight, 20-24pt (est.); filled only for the active tab |

## 5. Type

At most four sizes per screen, plus the hero figure. Weight steps are regular to semibold; bold for everything flattens the hierarchy.

| Role | Phone |
|---|---|
| Hero figure | `data.md`, Figures: 32-36pt, up to ~48pt when the figure is the whole screen (est.); dimmed decimals, units and denominators |
| Screen or section title | 17-24pt, medium or semibold (est.); the platform's large title where the app uses native navigation |
| Body, controls, row titles | 15-17pt; 15px is the floor for anything the user reads to act |
| Meta, descriptions directly under a 15pt+ lead | 13-14pt, one ink step down (est.); never the only text a user acts on |
| Field text | 16px |

Body line height grows with the size: a 15px line takes ~24px. Hint text stays ≥12px (`README.md`, Never ship).

## 6. Lists

Each row has three parts:

- a leading mark, 36-44pt (est.): logo, avatar, direction arrow, category glyph
- title over meta on the left, two lines
- the value right-aligned on the right, in tabular figures, with a meta value under it when needed

Separate rows by spacing or by one group surface; hairlines between rows inside a group are optional, a box round each row is out. A status can be a thin leading bar or a dot and a word; an exception gets its chip (`content.md`, Quiet normal, loud exception). Real brand marks, masked accounts ("••••• 1801"), dates with year and time: the realism is the data (`content.md`, The fixture).

## 7. Navigation

**3-5 top-level sections: a bottom tab bar.**
- A floating capsule inset from the edges, clear of the home indicator, 4-5 items.
- The active item gets a filled shape and its label; inactive items show the icon only (each keeps an accessible name).
- The primary create action is a separate circle beside the bar, not a tab.
- List content fades out under the bar with a gradient mask in the ground colour, not a hard edge, and scrolls clear of it at the end.
- The fill, blur and edge of the capsule come from the direction's surface model.

**Top of screen.** Two circular icon buttons with a centred title, or a context switcher at the left ("Acme Studio ⌄"). A child page names itself in the title or breadcrumb; its back control sits top-left.

**More sections, or a web app with deep navigation: a menu panel.**
- Top bar: 56pt plus the top safe area, the title or breadcrumb at the left, a 44pt menu button at the right whose two lines turn into an × (`motion.md`, Phone menu panel).
- The panel runs fixed from under the bar to the foot of the screen, stays mounted and `inert` while closed (so dialogs opened from it survive), z-index below dialogs (`tokens.md` §11).
- Order: search, navigation, account, settings, then a full-width secondary for a low-priority action. Separators run edge to edge.

**Top controls** sit at `calc(22px + env(safe-area-inset-top))`; content starts at `calc(64px + env(safe-area-inset-top))` where there is no bar.

## 8. Colour budget

Whatever the direction's colour strategy, the **interactive accent** (the hue that means "selected" or "act here") marks at most: the active tab, the primary action and the selected segment. The direction's signal or field hues follow their own written rules. Success and danger hues stay for deltas and due states ("Due in 2 days").

## 9. Segmented ranges

Any figure that changes over time gets a segmented range under its chart: "1D 5D 1M 6M 1Y MAX", "D W M Y". The selected segment is the only accented element in the control. A range swap animates the data in place (`motion.md`, Data).

## 10. Layout changes

| Desktop | Phone |
|---|---|
| Actions right of the title | under it, full width, stacked; page stacks keep a 12px gap |
| Side-by-side button pair | stacked full width. Pages: primary on top. Dialogs and flows: confirm on top, 8px apart. Put the primary first in the DOM and lay out the wide row with `flex-direction: row-reverse`, so phone focus order matches what is seen |
| Previous / Next | stay side by side, half and half |
| Multi-column grid | one column; banners go edge to edge |
| Segmented control that does not fit | a dropdown pill that opens a sheet |
| Search in a toolbar | first, full width, 44pt |
| Filter row | scrolls sideways under the gutter with edge fades; never wraps |
| Hover tooltip | opens on tap |
| Flow actions in the content | fixed at the foot of the screen (§13) |
| Footer © line | hidden |
| Long labels | shortened: drop qualifiers the section title supplies ("Included" for "Included in your plan"), short forms ("org") |
| The desktop panel | edge to edge: no float, no radius, no drop |

```css
@media screen and (max-width: 47.99rem) {
  /* :not(:root) lifts specificity so a flex-row on the same element can't override it */
  .mobile-stack:not(:root)         { flex-direction: column;         align-items: stretch; }
  .mobile-stack-reverse:not(:root) { flex-direction: column-reverse; align-items: stretch; }
  :is(.mobile-stack, .mobile-stack-reverse) > * { width: 100%; justify-content: center; }
}
```

The utilities set no gap. Page action stacks keep their own 12px; dialog, sheet and flow footers set 8px.

## 11. Sheets

Every dialog becomes a bottom sheet on a phone.

**Anatomy**
- A grabber centred at the top.
- Title top-left on the sheet itself (a section-title size), no header band.
- One visible close: a close circle top-right, or the grabber as a button labelled "Close" with an 88 × 44 hit area. Every sheet closes without a drag (WCAG 2.5.7).
- The parent screen dims behind it; any blur on the backdrop is the direction's.
- The primary action pinned to the foot of the sheet.

**Shape**
- Full width, rises from the bottom; top corners at the direction's container radius; an edge on the top only.
- Max height `calc(100dvh - env(safe-area-inset-top) - 24px)`; the 24px stays clear for the grabber.
- The sheet's colour runs ~200px below its foot, so pulling up never shows a gap.
- The home-indicator inset is a transparent bottom border, so the sheet's padding stays its own.
- Closed, it rests at `translateY(calc(100% + 48px))`, so a grabber riding over its top edge leaves the screen with it.

**Ground.** The sheet is the ground its parts borrow from: declare it as the overlay surface (`tokens.md` §3) so every fill, edge and drop inside follows the sheet, not the page behind it.

**Content**
- Body padding at the gutter on the sides and top.
- A sheet in parts gives each part its own title, 12px above its content; parts sit 24px apart.
- Related information joins into **one group** of rows (48pt minimum), drawn from the sheet by the surface model. The chosen row and a pressed row take the local ground + 2.
- Buttons sit below the group, 12px under, 8px apart: full width, 44pt, icon before the label. A button inside an information group gets lost.
- Footer stacked, confirm on top, 8px gaps, bottom padding `max(24px, calc(12px + env(safe-area-inset-bottom)))`.

**Motion:** `motion.md`, Phone sheet. Reduced motion: fade only.

**Drag physics** (look-neutral; values from Vaul)
- Drag from anywhere on the sheet: the grabber, the title, the rows and the buttons. The sheet sets `touch-action: none` and `user-select: none`.
- On the grabber a press is a drag at once; released without moving more than 4px, it closes the sheet. Close it from the sheet's `pointerup`: the sheet holds the pointer, so the grabber's own click never fires for a pointer.
- Anywhere else a press becomes a drag once it has moved more than 4px (the slop). Until then it is a tap on the row or button under it.
- Once a press is a drag, the sheet captures the pointer, and the click that ends the drag is swallowed.
- **Only the sheet's own pointer-capture loss cancels a drag.** On touch the browser captures a press to the element it lands on; when the drag moves capture to the sheet, that element's `lostpointercapture` bubbles up. Ignore it unless its target is the sheet. A cancel springs back.
- A body that scrolls keeps its scroll, and drags the sheet only when it is at its top and pulled down.
- Velocity is measured over the last 100ms.
- **Close** when dragged down past `min(64px, 15% of the sheet's height)`, or on a downward flick faster than 0.11 px/ms. Slide out in 300ms on `--ease-drawer`.
- **Otherwise spring back** in 400ms on `--ease-drawer`. A press that catches the sheet mid-spring takes it from where it is.
- Dragging up only gives, tiring out towards 32px: `offset = (1 - 1 / (d * 0.55 / 32 + 1)) * 32`. This is the only rubber band in the app.
- Drag uses the CSS `translate` property so it stacks on the enter/exit `transform`.
- Values tied to the drag (backdrop opacity, the page scaling behind) derive from drag progress.
- Reduced motion: a release snaps straight back, or the sheet fades out from where it is.
- Drag only on a phone, and never while the sheet cannot close (busy, paying).

**Search on a phone** becomes a full-screen sheet: the field across the top (56pt) with Cancel at its end, results below to the foot.

## 12. Tables on a phone

- The frame scrolls sideways with no scrollbar.
- Columns hug their widest cell, header included (a grid with a subgrid per row); cells never wrap.
- The first column stays sticky unless that leaves less than 88px beside it. At rest its edge is a hairline; once scrolled, it gains the direction's edge cue (a short drop in light, the hairline alone in dark).
- Scrolled to the end, the last column fills the remaining width.
- The whole row opens the item, with a pressed fill.
- Dates drop their time zone.
- Pager: the count gets its own line; Previous and Next share the row half and half.
- Charts keep their axis fixed while the bars scroll.
- Six stats or fewer: rows of label left, value right, instead of a table (`layout.md` §6).

## 13. Fixed bottom action bar (flows)

- Fixed to the foot, on the page ground, separated from content by a hairline or a fade.
- Padding: the gutter at the sides, 12px top, bottom `max(20px, env(safe-area-inset-bottom))`.
- Actions stacked full width, primary on top.
- The content gets `calc(160px + env(safe-area-inset-bottom))` of room at its foot so it scrolls out from under the bar.
- An optional context bar (one full-width 44pt button that opens a sheet) follows the same rules; publish its height as a custom property, and anything else fixed to the bottom sits 12px above `max(bar, safe-area)`.

## 14. Safe areas and parity

- Content starts below the status bar and the island. The tab bar and bottom actions clear the home indicator.
- Mockups and screenshots show a real status bar (live time or 9:41), never one drawn from memory (`craft.md`, Platform chrome).
- Light and dark from one token set where the product ships both; sizes never fork between them.

## 15. Check on a phone

- Test on a real device, not only a resized browser.
- Every target at least 44pt; no two hit areas overlap.
- Nothing hides under the notch, island, home indicator or browser bars.
- No hover-only information; no sticky hover after a tap.
- Fields do not zoom the page.
- No scrollbars and no rubber banding outside the sheet's upward give.
- Sheets drag and close as described: a tap on a row still lands, a short pull or a flick closes.
- One left edge down the whole screen; at most four type sizes plus the hero.
- Both themes, at zoom.

Native-feel rules and sheet drag values follow Emil Kowalski's teaching (his mobile-native guidance and Vaul).
