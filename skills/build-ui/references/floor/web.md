# Web

Web-only rules: pointer, touch, accessibility, browser surfaces, type, dark mode, layout. Mined from the UI Skills catalog and the Vercel web interface guidelines; tags name the source. Phone layout is `mobile.md`. The gate is `../verify.md`.

## Touch and pointer

- Target size: 24x24 CSS px minimum (WCAG 2.5.8 AA); aim for 44x44 on touch and 40x40 on desktop. Extend a smaller visual with a pseudo-element; extended areas never overlap. [krehel-accessibility, addyosmani/accessibility, interface-design]
- Decorative layers over controls get `pointer-events: none`. [krehel-accessibility]
- Spacing between controls: 12px between bordered or filled controls, 24px between the glyphs of borderless controls. [krehel-layout]
- Show press feedback on pointer-down (`:active` or `pointerdown`), not on click. [apple-design, mobile-native]
- Keystrokes, row hovers, tab switches: instant, or 150ms or less on opacity or background-color. No animation on actions repeated 100+ times a day (command palette, shortcuts). [krehel-ui, interface-design]
- Every animated state change also leaves a static cue (color, icon, label). [krehel-ui]
- Gate every `:hover` style behind `@media (hover: hover) and (pointer: fine)`; it latches after a tap on touch. [mobile-native, krehel-ui]
- `-webkit-tap-highlight-color: transparent` on `html`, then give every tappable element its own `:active`. [mobile-native, vercel-wig]
- `touch-action: manipulation` on buttons and links (removes the double-tap delay). [mobile-native, vercel-wig]
- `user-select: none` on buttons, tabs, chips, drag handles only; never on `body` or text containers. [mobile-native, krehel-typography]
- Horizontal carousels: native `scroll-snap-type: x mandatory`; a JS-gesture carousel sets `touch-action: pan-y`. [mobile-native]
- Drags commit after about 10px of movement, then track 1:1 from the grab offset with `setPointerCapture`. [apple-design]
- Every drag, swipe, or pinch has a tap or click and keyboard alternative (WCAG 2.5.7). [krehel-accessibility, vercel-wig]
- During a drag, disable text selection and set `inert` on dragged elements. [vercel-wig]
- Interactive state changes use transitions or springs that can reverse mid-flight, never keyframes. [krehel-ui, apple-design]
- Skip state animations on first render (`AnimatePresence initial={false}` around state swaps). [krehel-ui]

## Accessibility

- Contrast: text 4.5:1, large text (24px, or 18.67px bold) 3:1, component boundaries, states, and meaningful graphics 3:1. Measure the pair as rendered, including alpha and what sits beneath. [krehel-accessibility, krehel-colors]
- Status never relies on color alone; pair it with an icon or text (WCAG 1.4.1). Disabled states too. [krehel-accessibility, fixing-accessibility]
- Focus: style `:focus-visible`; a custom ring reaches 3:1 against every adjacent color; never `outline: none` without a replacement; use `:focus-within` for compound controls. [krehel-accessibility, vercel-wig]
- A focused element is never fully hidden by sticky chrome (WCAG 2.4.11): set `scroll-padding-block-start` to the header height. [krehel-accessibility, krehel-layout]
- `tabindex` only `0` or `-1`; composite widgets use roving tabindex; comboboxes keep focus in the input with `aria-activedescendant`. [krehel-accessibility]
- Stateful widgets (select, combobox, dialog, popover, tooltip, menu, tabs, date picker) come from a headless primitive (Radix, React Aria, Base UI, Ark); never mix primitive systems on one surface. [baseline-ui, interface-design]
- Icon-only buttons get `aria-label`; the icon gets `aria-hidden="true"`; the accessible name starts with the visible label text. [vercel-wig, krehel-accessibility]
- Expandable controls set `aria-expanded` and `aria-controls`. [fixing-accessibility]
- Live regions: `aria-describedby` for field errors, `role="status"` for toasts and result counts, `role="alert"` only for urgent untied errors. Render the empty region before its text changes. [krehel-accessibility]
- Native `disabled` for unavailable controls; `aria-disabled="true"` only when it must stay focusable, with behavior blocked in code. [krehel-accessibility]
- Alt text by purpose: decorative `alt=""`, informative describes meaning, functional describes the action. [krehel-accessibility]
- Reflow at 320px width with no horizontal scroll (1.4.10); text survives 200% resize (1.4.4); never `maximum-scale=1` or `user-scalable=no`. [krehel-accessibility, mobile-native]
- Gate motion with `prefers-reduced-motion: no-preference`; under reduce, replace slides and scales with opacity cross-fades. [krehel-accessibility, krehel-ui, apple-design]
- `prefers-reduced-transparency: reduce` makes translucent surfaces solid; `prefers-contrast: more` gives near-solid backgrounds and defined borders. [apple-design]
- Forced-colors mode drops `box-shadow`: keep `border: 1px solid transparent` under shadow rings. [krehel-ui]
- Moving or auto-updating content lasting over 5 seconds gets pause, stop, or hide. [krehel-accessibility, vercel-wig]
- Verify with a keyboard-only walk and a screen-reader walk; an `aria-live` attribute in the tree does not prove it announces. [krehel-accessibility, accesslint]

## Browser surfaces

Every default the browser draws takes the product's tokens. Left unthemed, each one is a tell (`README.md`, Never ship). [impeccable craft-floor]

- **Selection:** `::selection { background: var(--accent-3); color: var(--ink-12); }`, or the tint the direction's colour rule names; text keeps 4.5:1 on it in both themes.
- **Caret:** `caret-color` set on `:root` to the accent or ink-12, so fields show the product's colour.
- **Scrollbars:** `scrollbar-color: var(--ink-6) transparent` and `scrollbar-width: thin` on scrolling regions; `color-scheme` set per theme so native bars follow dark mode. Hidden on phones (`mobile.md`).
- **Focus ring:** one token, `--focus-ring`, drawn 2px with an offset on `:focus-visible` on every control; 3:1 against every colour it touches, on the ground, on wells and in dark. Built from a theme token, never a hard-coded dark alpha that vanishes in dark.
- **Underlines:** `text-underline-offset: 0.2em` to `0.25em` and `text-decoration-thickness: from-font` or 1px on links, so descenders stay clear.
- **Numerals:** `font-variant-numeric: tabular-nums` on every numeric cell, figure, timer and counter (`data.md`).
- **Autofill:** restyled to the field's own fill (Layout, scroll and loading, below).

## Type

- Line height, unitless: display 1.1, headings 1.2 to 1.3, body 1.5 to 1.6; anything wrapping to 3+ lines at least 1.4. [krehel-typography]
- Tracking in `em`: headings 24px and up at -0.01 to -0.02em; body 0. [krehel-typography, apple-design]
- Weight 400 or heavier below 18px; weights 100 to 300 only at 28px and up. [krehel-typography]
- Cap reading text at 60 to 75 characters per line. [krehel-typography]
- `tabular-nums` on timers, counters, prices, and numeric columns; proportional figures in prose. [krehel-typography, baseline-ui]
- `text-wrap: balance` on headings and short descriptions (Chromium ignores it past 6 lines); `text-wrap: pretty` on paragraphs. [krehel-typography, baseline-ui]
- `text-align: start` in app UI; no `justify`. [krehel-typography]
- Typographic characters in rendered text: `…`, curly quotes, en dash for ranges, non-breaking space in `10&nbsp;MB` and `⌘&nbsp;K`. In JSX text, paste the real character; `’` renders literally. [vercel-wig, bencium/typography]
- `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` once on the root. [krehel-typography]
- Load every weight and style the design uses; never rely on synthesized bold or italic. Use `font-weight` and `font-variant-numeric`, not raw `font-feature-settings`. [krehel-typography]
- Store text in natural case; set case with `text-transform`. [krehel-typography]
- Set `lang`; wrap mixed-direction values (names, URLs, numbers) in `<bdi>`; brand names and code tokens get `translate="no"`. [krehel-typography, vercel-wig]
- Text over translucent material: heavier weight and a small tracking bump, not flat gray. [apple-design]

## Dark mode

- `color-scheme: dark` on `html` for dark themes (fixes scrollbars and native inputs). [vercel-wig]
- One `<meta name="theme-color">` per `prefers-color-scheme`, matching the top-of-page background. [mobile-native, vercel-wig]
- Native `<select>`: set explicit `background-color` and `color` (Windows dark mode). [vercel-wig]
- Dark tokens are not the light ramp reversed: lower accent chroma, desaturate semantic colors, and remeasure every pair. [krehel-colors, interface-design]
- Use one switching mechanism (media query or `.dark` class), not both. [krehel-colors]
- Suppress all transitions during a theme switch, force a style flush, restore on the next frame. [krehel-ui]
- Content images get a 1px inset outline: black/10 in light, white/10 in dark, never a tinted neutral. [krehel-ui, interface-design]
- White text on a Tailwind 500 fill usually fails 4.5:1; measure, then move to 600. [krehel-colors]
- Reduce text weight slightly on dark. [bencium/typography]

## Layout, scroll and loading

- App shells use `100dvh`, never `100vh`/`h-screen`; `width: 100%`, never `100vw` (includes the scrollbar). [baseline-ui, mobile-native, krehel-layout]
- `viewport-fit=cover` in the viewport meta, then `env(safe-area-inset-*, 0px)` on fixed headers, tab bars, toasts, sheets; without the meta every inset is 0. [mobile-native, krehel-layout]
- Add `interactive-widget=resizes-content` so the Android keyboard resizes the layout; keep bottom actions in stable chrome. [mobile-native, krehel-layout]
- `-webkit-text-size-adjust: 100%` on `html`. [mobile-native]
- App roots: `overscroll-behavior: none` on `html` under `(pointer: fine)`; scrollable dialogs, drawers, menus, sheets: `overscroll-behavior: contain`. Never `touchmove` + `preventDefault`. [vercel-wig, mobile-native, krehel-ui]
- Off-screen content gets a cue: the next item peeks 16 to 32px past the scroll edge, or a disclosure control. [krehel-layout]
- Anchored headings get `scroll-margin-top` / `scroll-margin-block-start`. [vercel-wig, krehel-accessibility]
- `<img>` has explicit `width` and `height`; below-fold images `loading="lazy"`; above-fold critical images `fetchpriority="high"`. [vercel-wig]
- Critical fonts: `<link rel="preload" as="font">` with `font-display: swap`. [vercel-wig]
- No layout reads in render (`getBoundingClientRect`, `offsetHeight`, `scrollTop`); flex and grid over JS measurement. [vercel-wig]
- Name transitioned properties; never `transition: all`. Animate only `transform` and `opacity`. [vercel-wig, baseline-ui, krehel-ui]
- `will-change` only after a measured first-frame stutter, naming the property. [krehel-ui, baseline-ui]
- A fixed `z-index` scale; no arbitrary values. [baseline-ui]
- Logical properties (`margin-inline-start`, `inset-inline-*`, `text-align: start`) for anything that mirrors; physical left/right only for safe-area insets. Visual order matches DOM order: no `order` or `row-reverse` to reshuffle. [krehel-layout]
- Hover and active states raise contrast over rest. [vercel-wig]
- Hydration: inputs with `value` have `onChange` (else `defaultValue`); guard server/client date rendering. [vercel-wig]
- Detect language from `Accept-Language`/`navigator.languages`, not IP. [vercel-wig]
- No `useEffect` for anything expressible as render logic. [baseline-ui]
- Test emulation is not enough for sticky hover, tap delay, safe areas, keyboard, and `vh`: confirm on a real phone over LAN with Safari Web Inspector or `chrome://inspect`. [mobile-native]
- Browser autofill overrides input styles: restyle `:-webkit-autofill` (with `:hover`, `:focus`, `:active`) using `-webkit-text-fill-color`, an inset `box-shadow` of 1000px in the field color, and `transition: background-color 5000s`. [pond: alicalimli]

## Motion implementation

Values (durations, curves, springs) are in `motion.md`; these are how to build them.

- Mount entrances with `@starting-style` (a CSS transition from the start state), not a `useEffect` mounted flag. [emil-design-eng]
- Move an element by its own size with `translate` percentages (`translateY(100%)`), not measured pixels. [emil-design-eng]
- Hold to confirm: a colored overlay goes from `clip-path: inset(0 100% 0 0)` to `inset(0)` over 2s linear while pressed; on release it snaps back in 200ms ease-out. [emil-design-eng]
- Once a drag starts, track that one pointer (`setPointerCapture`) and ignore extra touches. [emil-design-eng]
- Per-frame motion never goes through React state or a CSS variable on a parent: write to `ref.style` or a motion value. [animation-performance]
- Motion that plays while the main thread is busy (navigation, fetching, hydration) runs as CSS transitions or WAAPI; main-thread JS animation drops frames there. [emil-design-eng]
- Never transition `box-shadow`: fade in a pseudo-element that already has the target shadow. [animation-performance]
- Values tied to a drag (overlay opacity, the page scaling behind a sheet) derive from drag progress, not their own timers. [gestures]
- One entrance per container: a panel that slides in does not also stagger its children. Menus, command palettes, tabs and list rows opened many times a day appear at once. [choreograph]
- Everything visible is clickable: no input lock during a transition, and a delayed item never holds back a button. [choreograph, apple-design]
- Delayed items use `animation-fill-mode: both`; under reduced motion, delays go to 0. [choreograph]
- Interrupting motion restarts from the current value: a second click, a hover-out or a view switch mid-transition stops the running animation; nothing stacks and only one view stays mounted. [choreograph]
- No artificial debounce, timer or transition wait on the input path. [apple-design]
- A class-based theme toggle updates `<meta name="theme-color">` from JS. [mobile-native]
- Libraries before hand-rolling: cmdk for a command menu, input-otp for codes, dnd kit for drag and drop. Toasts and sheets follow `surfaces.md`, `mobile.md` and `motion.md`, whatever library draws them. [pick-ui-library]
