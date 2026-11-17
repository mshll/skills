# Interaction

Signature interactions: one or two per product, on its most-used action or its core control. Timing and easing rules are in `../floor/motion.md`; values marked *m* were measured from the user's saves, *est.* estimated.

## One-container morph

- **Encodes**: the thing you pressed is the thing now working; nothing new to find.
- **Earned when**: a button starts async work (sync, send, connect), a menu grows from a pill, a toast grows from its trigger.
- **Build**: animate width, radius and fill of one element (Motion `layout`, FLIP, or SwiftUI frame inside `withAnimation(.spring)`); inner content keyed and swapped with a short blur and fade, never scaled. 90% done at 230-320ms (*m*).
- **Gold**: `morph-pill`.

## Progress in the control

- **Encodes**: commit status without a spinner or a toast.
- **Build**: `idle → working → done` in the same pill: a track with a fill bound to real progress, then a check that holds ~1.5s (*est.*) and morphs back. Row height never changes.
- **Gold**: `morph-pill`.

## Staged sheet with readiness

- **Encodes**: the system gathered the items; the action is ready once you can see what it acts on.
- **Earned when**: a batch action from a consequence band ("3 invoices overdue" → Review → "Send 3 reminders").
- **Build**: sheet springs up (~670ms total, *m*); rows enter with fade, short blur and an 8px rise, 60-80ms apart (*est.*), capped at ~6 rows; the action enters disabled, then enables.
- **Gold**: `staged-sheet`.

## In-place data swap

- **Encodes**: same view, new slice.
- **Build**: frame, header and counts stay fixed; figures crossfade with blur; bars and lines tween to new values; rows crossfade by key. 430-500ms (*m*). A line draws left to right on first show only.
- **Gold**: `staged-sheet`.

## Compact to detail

- **Encodes**: a summary that holds more: a pill with a sparkline expands into a card that scrubs the day.
- **Earned when**: list rows, chips or notifications with a detail one step away.
- **Gold**: `compact-to-detail`.

## Result filling in

- **Encodes**: generation or import as content arriving, not a spinner: rows fill in the real table, a sheet grows through import states.
- **Earned when**: AI generation, imports, syncs.
- **Gold**: `content-filling`.

## Shared control DNA

- **Encodes**: one system: the switch knob, segmented thumb and slider thumb are the same object, and can morph into each other.
- **Build**: one thumb token set reused across controls; selection is always the same raised shape inside a tinted track.
- **Gold**: `shared-thumb`.

## Detents and weight

- **Encodes**: a physical value: a ruler that clicks at each major tick, a slide-to-confirm thumb that swells under the finger and springs home on early release.
- **Earned when**: a single value set daily (weight, alarm, volume) or an irreversible action on touch.
- **Build**: drag bound to pointer; past ~90% of the track commits (*est.*); release before springs back from the current position and velocity; haptic on each detent in native.
- **Gold**: `lens-slide`, `tick-ruler`.

## Hold to confirm

- **Encodes**: the weight of an irreversible action grows while you hold; letting go undoes it.
- **Build**: progress over a fixed 1.5-2s hold (*est.*), fill and colour build in the button, release reverses at ~2× speed; copy states the consequence with real numbers ("Your 412 links and 38 collections go with it").

## Material-true effects

An effect is allowed only when it is a real property of the object: a one-time code burns after viewing, a prize card scratches, an ID card is holographic, a ticket tears off. If the property is invented, cut the effect. Runs once, never on a repeated path, and has a reduced-motion version.

## Brand-surface motion

Cursor fields on a dithered mark, pixelated marquee edges, ambient shaders: brand heroes and empty states only, never work surfaces. **Gold**: `cursor-field`.
