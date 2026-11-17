# Motion

When things move, how long, on what curve, and what never moves. The floor fixes the gate, the duration classes, the curves and the reduced-motion path. The direction's **motion character** (crisp, springy, stepped, physical) picks where in each range a product sits and its spring bounce (`tokens.md` §1). Signature interactions built on these rules: `../toolbox/interaction.md`.

Values marked **(measured)** come from frame-stepping the user's saved recordings; **(est.)** are estimates; unmarked values are house rules carried from v2, paraphrasing Emil Kowalski's teaching ([animations.dev](https://animations.dev)).

**In one line:** decide whether before how; when it moves, it starts at once, moves transform and opacity on a spring or a strong ease-out, finishes small changes in 150-350ms and whole surfaces in 350-500ms, exits faster than it enters, and ships a reduced-motion version.

## 1. Decision order

Work through these for every motion. Stop at the first "don't animate".

1. **Who caused it, and has the user seen it yet?**
   - Settled on load or by the system: snap into place. No animation on first paint (`initial={false}`, a pre-placed knob, a pill that animates only after a real toggle).
   - Caused by the user: starts on the same frame, from where the input was.
   - The system speaking ("live", "listening", "now"): a slow loop, linear or a breathing ease-in-out.
2. **How often is it seen?** The more often, the less it moves.

   | Tier | Examples | Treatment |
   |---|---|---|
   | Constant | hover, typing, scrolling, chart hover | colour or opacity only, ≤150ms, no travel |
   | Repeated 100+ times a day | keyboard actions, command palette, shortcuts | instant |
   | Frequent | press, toggle, tab, copy, menu | the small-morph class (§3), springs that retarget |
   | Occasional | modal, sheet, step change, range swap | the surface class (§3), a short blur as the bridge |
   | Rare, terminal, chosen | payment sent, account deleted, first success | may run past 500ms; never on a repeated path |

   Drag and resize are instant: nothing animates while the user is dragging.
3. **Name one purpose.** If none fits, it does not move.
   - **Continuity**: the same element changes shape instead of being swapped. If two states are the same thing, one container morphs.
   - **Causality**: motion starts where the input was: a menu grows from its pill, a wave from the touch point, cards leave from the folder and return to it.
   - **Data change in place**: numbers, bars and lines move to their new values where they stand. Values move; layout does not.
   - **Progress in the control**: work that takes time or cannot be undone shows its progress in the control itself.
   - **Readiness**: an action appears after the content that justifies it (rows land, then "Send 3 reminders" enables).
   - **Feedback**: press, tick, shake.
4. **Cheapest tool that works.** CSS transition for state changes (it retargets). CSS keyframes only for mount entrances that must stay smooth while the page loads. Registered `@property` for mask lengths. Web Animations API for a one-off measured height. A motion library for springs, shared layout, exits and choreography. Raw pointer events for drags.
5. **Properties.** `transform` and `opacity`; `filter: blur()` as a bridge; `clip-path` for reveals. Width or height only when measured. Name every property; never `transition: all`.
6. **Spring or curve, and duration.** §2 and §3. Exits faster than entrances.
7. **Interruption.** Anything re-triggerable is a transition or a spring, never keyframes. A spring retargets from its current value and velocity.
8. **Layout stability.** Nothing around it moves (§8).
9. **Reduced motion ships with it** (§9).
10. **Touch.** Hover only under a fine pointer; sheets drag only on phones.
11. **Check it.** Slow it down, look again the next day, check both themes and a phone.

## 2. Springs and curves

**Springs first.** Critically damped, or a small overshoot of at most ~3% **(measured)**. A spring retargets from wherever it is, so a second press or an early release never restarts. Bouncy easing is out on product UI.

Write springs as `{ type: "spring", bounce, duration }`, never stiffness and damping. Overshoot from bounce, roughly: .12 → under 0.5%, .2 → ~1.5%, .25 → ~3%.

| Bounce / duration | Use |
|---|---|
| 0 / 0.5s | camera pans and whole-view moves |
| 0.12 / 0.4s | a segmented toggle's sliding thumb |
| 0.15-0.25 / 0.35-0.5s | small morphs, height reveals, progress fills, a switch knob, a press release; the direction's motion character picks within this |
| above 0.25 | decorative shapes in a rare celebration only (house rule, unmeasured) |

**Springs stay inside their containers.** A clipped overshoot still shows: a thumb flattens against the end of its track. Overshoot grows with travel, roughly travel × e^(−π·(1−bounce)/√(1−(1−bounce)²)): at .35 a thumb crossing 100px overshoots ~7px, past a 4px inset; at .12, under a pixel. `overflow: hidden` is a backstop only.

**SwiftUI:** `.spring(response: 0.3, dampingFraction: 0.85)` for small morphs, `response: 0.45` for sheets **(est.)**; dampingFraction 1.0 where nothing may overshoot. Hand the release velocity to the spring.

**Curves**, when there is no spring (tokens in `tokens.md` §10, defined once):

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.23, 1, .32, 1)` | the default for anything the user caused: press, swap, menu, modal, enter, exit, hover, colour |
| `--ease-move` | `cubic-bezier(.22, 1, .36, 1)` | long moves of large objects: a panel resizing, a card flipping (400-450ms) |
| `--ease-drawer` | `cubic-bezier(.32, .72, 0, 1)` | a sheet after the finger lets go |
| `--ease-in-out` | `cubic-bezier(.77, 0, .175, 1)` | one-off: a card folding to its header, both ends on screen |
| linear | | constant loops only: shimmer, a turning ring |
| ease-in-out keyword | | breathing and pulses only: skeletons, a live ring |

One curve for measured size changes (rail width, row height, disclosure), used everywhere: `--ease-out` by default.

UI never eases in. A colour-only fade with no travel may use the CSS `ease-out` keyword. Tailwind v4 gotcha: the bare `ease-out` class is `cubic-bezier(0, 0, .2, 1)` unless `--ease-out` is redefined in `@theme`; write `ease-[var(--ease-out)]`.

## 3. Durations

For a spring, the duration that matters is when it is 90% done: that is what the eye reads as "arrived". The tail settles after.

| Class | Value | Source |
|---|---|---|
| Hover, colour change | ≤150ms | house |
| Press down | 130ms to reach press scale | (measured) |
| Press release | spring back with ~3% overshoot, settled in 380-550ms | (measured) |
| Small in-place morph: button to progress to check, chip, segmented thumb, menu step | 90% done at 230-320ms, tail to ~380ms | (measured) |
| Morph between control types | 90% at 220-470ms | (measured) |
| Content swap (label, text, figure): blur plus fade | 120-200ms | (est.) / house |
| Menu, popover | in 150ms, out 120ms | house |
| Modal card | in 240ms, out 200ms | house |
| Tab, filter or range swap of a data view | 90% at 300-380ms, full 430-500ms | (measured) |
| Sheet with content | ~670ms total, 90% at ~500ms; rows ~80ms apart | (measured); stagger (est.) |
| Rare terminal event | past 500ms allowed | (measured: 570-730ms morphs, seconds for spectacle) |

**Rule:** product UI state changes finish their visible travel in 150-350ms; anything that moves a whole surface (sheet, panel, view) in 350-500ms. Beyond 500ms only for a rare, terminal, chosen event, never on a path the user repeats.

**Exits are faster than entrances:**

| Element | In | Out |
|---|---|---|
| Text or panel swap | 250ms | 150ms |
| Desktop modal, side panel | 240ms | 200ms |
| Menu, dropdown, popover | 150ms | 120ms |
| Phone sheet | spring, 90% at ~500ms | 200-300ms |

**Holds:** an error or action toast stays until dismissed (`states.md`); an info toast 6000ms; copied tick 1000ms (1500ms on a pill); a rotating hint long enough to read its longest option (example: 2600ms); a finishing beat ~260ms before its fade.

## 4. Travel, blur, scale, stagger

**Travel grows with the size of what moves:**

| Element | Travel |
|---|---|
| phone menu | 4px |
| text and label swaps | 6px |
| step blocks, form views, rows entering a sheet | 8px |
| page sections, modal card | 16px |
| toast exit | 24px |
| sheet | 100% of its own height plus anything riding over its edge (the grabber) |

**Blur is the bridge.** It hides the seam where one thing becomes another, sized to what swaps:

| Blur | Use |
|---|---|
| 2px | small text: button labels, rotating hint words |
| 4px | panels, icons, chevrons, the modal card, rows entering |
| 6-8px | headline-size text, a whole step, a big figure, a large panel entering |

Content swaps use blur plus opacity: rows enter blurred and sharpen, a figure blurs from one value to the next **(measured)**. A flat, plain surface may skip blur and only fade and rise.

**Scale:**
- Press: a small squeeze, smaller targets squeeze more (example: .97 on a button, .92 on a 22px icon, .99 on a card). The depth is motion character.
- Enter from .95-.97, never from 0.
- Icon swaps .5 ↔ 1 with a crossfade.
- Decorative shapes may start at .2-.6. UI never does.

**Stagger:** 40-80ms between children; cap at ~6 children, the rest arrive with the last. One entrance per container: a panel that slides in does not also stagger its children.

## 5. What stays still

- **Layout round the changed thing.** Rows below do not jump. A filter swap keeps header, chips and counts fixed while the list content changes.
- **Text inside a scaling container.** Text swaps with its own short blur-fade and its own enter and exit timing, or it overlaps. Never put `will-change` on anything that scales, or its text renders blurry.
- **Ambient motion on work surfaces.** Cursor fields, shaders, particles and loops belong to brand heroes, marks and empty states, never tables, forms or dashboards.
- **Hover on dense lists.** Rows change fill in place; nothing moves.
- **Keyboard actions, typing, drag and resize.**
- **Data on first paint.** Bars and lines do not grow or sweep on load or reload. A line drawing once on first show is a signature choice (`../toolbox/interaction.md`, In-place data swap), never a default.

## 6. Patterns

### Press
Scale down in ~130ms **(measured)** on pointer-down, spring back on release with ≤3% overshoot. In CSS: `active:scale-[0.97]`, `transition-[transform,scale,<colour property>]`, 150ms on `--ease-out`, so a fast second press retargets. Disabled: no scale.

### Hover
Colour or background only, ≤150ms on `--ease-out`. Fine pointer only; touch gets the same look on `:active`. In a list or menu every row has its own hover fill that fades in and out where it is; one shared highlight sliding from row to row makes the list look as if it is shuffling.

### Menu and popover
Opens from its trigger: `scale(.97)` plus opacity to 1 in 150ms; closes in 120ms in reverse; `transform-origin` at the trigger edge. Both are transitions, so a quick reopen retargets; the menu stays mounted and takes `visibility: hidden` once the exit ends. Icon tooltips: no delay. An open menu holds its position while items change.

### Desktop modal
- Overlay fades in 200ms.
- Card in: 240ms from opacity 0, `translateY(16px)`, `blur(4px)`. Out: 200ms in reverse; it stays mounted until the exit ends.
- The card stays centred; modals do not scale from their trigger.
- Steps inside: content keyed and faded in over 200ms; height follows the measured content over 300ms. Reuse one modal and change its content in place rather than closing and reopening.

### Desktop side panel
Slides from `translateX(100%)` to 0 in 240ms on `--ease-out`, out in 200ms. No fade or blur on the panel. A panel exits along the path it entered.

### Phone sheet
Rises on a spring, 90% at ~500ms with its content, rows ~80ms apart **(measured)**; sinks in 200-300ms. The sheet stays solid the whole way: no fade, no blur on the sheet itself. Drag physics: `mobile.md`, Sheets.

### Phone menu panel
150ms in, 120ms out, opacity plus a 4px drop. No transform once open (so nothing inside is pinned to a transformed parent). `inert` while closed. The hamburger's two lines slide to the middle and turn 45° into an × in 160ms, transform only; at rest each line sits on a whole pixel.

### Collapsing a rail or panel
Contents fade out together (80ms), then the width animates (220ms), then contents fade back in together. Flip the state while nothing is visible. Contents are pinned at full width, so they never slide or reflow.

### Sliding selection thumb
One shared-layout element per segmented control, spring `{ bounce: 0.12, duration: 0.4 }`, so it settles short of the track's ends. The first placement snaps. The thumb marks the choice only; hover never moves it. Optional stretch while travelling, capped at 3px (`scaleX(1 + min(0.1, 3 / width))`) on a nested element. Text colour changes over 150ms. Each control gets its own layout id.

### Switch knob
Moves from start to end as a layout animation, spring bounce ~0.2 / 0.45s. Track colour 150ms. First render does not animate.

### Label swap (loading, done)
Both states in one grid cell. New state rises from +6px, old leaves to −6px, both with `blur(2px)`, ~200ms. No animation on mount.

### Progress in the control
`idle → working → done` in the same element: the button morphs to a track bound to real progress, then a check that holds, then back to its label. 90% at 230-320ms per step **(measured)**. Its size on the page never changes.

### Content arriving after a choice
Opacity plus `blur(4px)` to 0, 200ms, no travel. An empty state swapping for inputs fades out while the inputs fade in, in place.

### Step change in a flow
The old step leaves as one block in 150ms (−8px, 6px blur). The new step un-blurs over 250ms while its blocks rise 8px, 40ms apart. The fields take input at once: nothing visible is locked during a transition.

### Data
- **Range, tab or filter swap:** frame, header and counts stay; bars and lines tween to their new values in place; figures crossfade with blur, keeping dimmed decimals and tabular numerals so the width holds; rows crossfade by key. Full 430-500ms, 90% at 300-380ms **(measured)**.
- Hover dims the other bars over ≤150ms.
- The latest bar may pulse to mean "now".

### Chevrons
A menu trigger's chevron turns over while open: `rotate: 180deg`, 150ms, and back on close. A disclosure's chevron that also changes ink crossfades two stacked chevrons with a 4px blur, 200-300ms.

### Copy
The tick shows on the click itself, before the clipboard answers. Icon to tick: crossfade plus scale .5 ↔ 1, 200ms. If the clipboard refuses, the icon comes straight back, or the button says "Copy failed". A copy that worked gets no toast.

### Rows appearing and leaving
Three beats, the same both ways: content fades out (100ms), height changes (140ms), new content fades in (120ms). When adding, the row's lines are revealed by the height change before the text fades in.

### New row highlight
Background ink-a4 to transparent over ~700ms, colour only.

### Page entrance
Sections fade up 16px over 300ms, 60ms apart, on route mount only. The same entrance on every page.

### Disclosure
`height: 0` to `auto` plus opacity, spring bounce ~0.2 / 0.35s or a 300-320ms tween. A few px of padding with a matching negative margin keep child shadows unclipped.

### Shake (blocked)
The element shakes where it stands, `x: [0, -6, 6, -4, 4, 0]` over 420ms, and the UI says why.

### Live and waiting
- Shimmer on a title while waiting: a gradient ink-12 / ink-9 / ink-12 at 200% size, ~2.2s linear, infinite.
- A ring that breathes in sync with the shimmer and turns once every two breaths.
- Skeletons pulse between ink-a3 and ink-a4 (1-1.4s, alternate). No gradient sweep.
- Status dots for ongoing states pulse on one shared clock, so rows beat together.

### Toast
One at a time. Grows from its trigger or rises from the foot on a spring; a toast wider than 600px only fades in place (a wide expansion reads as a stretch). Decoration leaves first, then the toast drops 24px and fades over 200ms.

### Success as an event
A glow or gradient at the success moment, on the data mark, that then leaves, is an event, not a surface. It appears once, never on errors or routine saves.

## 7. Interruption and staging

- Drag uses the CSS `translate` property, separate from the enter/exit `transform`, so neither interrupts the other.
- Hold the measured height mid-ease; never jump to `auto`.
- Stage: content leaves before its frame moves; the frame moves; new content enters. Lines reveal before text. Keep the whole sequence inside the class durations.
- Unmount only after the exit has finished; timers match the durations.
- A resize handle appears after the panel has settled.
- Reuse an existing animation exactly before writing a new one: the same transition everywhere for the same job.

## 8. Layout stability

- Swapping states share one grid cell, sized to the larger.
- Reserve height for rotating text (its longest option).
- Measure in a layout effect, before paint.
- Rest positions land on whole pixels so lines stay crisp.
- Render nothing until a layout decision is known, so nothing moves when it lands.

## 9. Reduced motion

Under `prefers-reduced-motion: reduce` / `accessibilityReduceMotion`, soften; keep what carries state.

| Normal | Reduced |
|---|---|
| travel, blur, scale, morph, spin | an opacity crossfade, ≤150-200ms |
| progress in a control, hold to confirm | kept, drawn as a plain fill with the same timing |
| a loop that carries state (live, waiting) | its opacity pulse only |
| height changes, a switch knob and its track colour | instant |
| a segmented thumb | a 150ms tween |
| cursor fields, ambient loops, particles, shaders, burns | removed |
| video autoplay | holds the first frame |
| press scale | may stay: it is feedback, not travel |
| stagger delays | 0 |

Information never waits on an animation finishing. Add `motion-reduce:transition-none` (or the library equivalent) to every custom transition.
