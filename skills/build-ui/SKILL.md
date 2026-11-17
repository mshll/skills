---
name: build-ui
description: "Product UI in web (React, HTML/CSS) or SwiftUI. Three branches: start a new project with its direction, tokens and DESIGN.md; build or change screens in a project that has a look; polish UI that looks generic or plain. Plan, direction from the product's world, a craft floor every screen meets, rendered gate, review."
---

# Build UI

Real product UI: a screen someone uses every day. It reads as one product and as *this* product, shows only what this state needs, puts the eye on the next step, and survives worst-case data at every width, theme and text size.

## The bar

The user's own saves set the bar: shipped-quality product screens whose polish comes from **specific content** (real names, units, consequences, a sort rule stated in the subtitle) and whose identity comes from **one idea carried by the data**: a decay curve drawn as dither that thins with the dose, a billing calendar with a marker on each payment day, an open-rate column drawn as tick bars, a bedside device with one lit readout. The rest of the screen is quiet and exact.

Two leading words run through every file:

- **Signature**: the product's one idea, taken from its world and drawn into its data, state or main control. "Service health drawn as a transit map." A palette, a font or a surface treatment on its own is a skin, not a signature.
- **Costume**: world material that encodes nothing. Remove it and no quantity, state or meaning is lost. A technique is **earned** when it encodes a quantity, a state or the product's namesake.

## How it fails

- **Everything at once.** Six figures where one answers it, every field visible, every row of a 200-row list.
- **Template.** Centred hero, card grid, rows of identical metric boxes, a card inside a card, icons in coloured tiles. Layout chosen before the content.
- **Flat.** Every object the same weight in the same box. The eye has nowhere to land.
- **Bland.** Correct and forgettable: the category default with one accent colour, generic copy, no signature. It could be any product in its category.
- **Costume.** The world pasted on as decoration: a terminal look for a dev tool, ledger paper for accounting, dither on a photo that means nothing.
- **Happy path only.** Built for one perfect record. Breaks on a long name, zero rows, a failed load, 320px, dark mode or the largest text size.
- **Unseen.** Shipped from the code without looking at the rendered pixels.

## Two layers

- **The floor** holds on every screen in every look: content, hierarchy, data display, states, sizes, motion timing, accessibility, platform rules and the gate. It makes a screen correct and finished. `references/floor/`.
- **The direction** differs per product: its signature, colour strategy, type, density, surface model and imagery, all derived from the product's world. It lives in the project's `DESIGN.md` and token file. It makes the screen this product's. `references/direction.md`, with techniques in `references/toolbox/`.

The floor never picks a look. The toolbox holds techniques, never looks: each entry says what it encodes, when it is earned, how to build it, and when it turns into costume.

## Which rules win

1. A user instruction.
2. The project's own design system: its tokens, components and `DESIGN.md`. Reuse before inventing; match the neighbour.
3. The direction in `DESIGN.md`, including its licences (at most two of the user's standing design rules, each tied to the signature and a place).
4. The floor: `references/floor/`. On SwiftUI, system components come first (`references/floor/swiftui.md`).

When two rules conflict, the higher one wins; say which one you followed.

## Mode

| The request | Mode | Path |
|---|---|---|
| A new project, or a first screen where no tokens and no `DESIGN.md` exist | **New** | The workflow; step 2 runs Derive: three built variants, the user picks |
| A screen or component in a project that has tokens or a `DESIGN.md` | **Extend** | The workflow; step 2 reads the direction that exists |
| Existing UI that should look better, more specific, less generic | **Polish** | `references/polish.md`, then steps 6 to 9 |

## Workflow

Write the plan before code. Each step ends on its criterion; start the next step only when it holds.

1. **Plan.** Name in writing: the surface's job, the single next step (the one primary action, or none) and every way into it (the common case, recent items, a custom or unknown value, a different time or target), the least data that answers the question, every state (first use, no results, loading, failed load, denied, full, worst case), what is left out, and the platform. Write the fixture: real-shaped data for this domain with names, units, magnitudes and one worst case per field (`references/floor/content.md`). *Done when* the plan names the primary action, every state, and the fixture exists.
2. **Direction.** Follow the path table in `references/direction.md`. *Done when* you can state the signature in one concrete sentence, where it shows on this screen, the colour rule for every accent, and the value on each axis.
3. **Gold.** Open `gold/README.md`. Find the closest *pattern* reference for this kind of screen and write three things you take from it (layout, row pitch, where actions sit, how the consequence is stated). Find one *technique* reference for the signature's technique and write the part you take. Take structure and decisions from gold; take the look from the direction. *Done when* both are named with what you take. No gold fits: ask whether to run `/gather` for this surface; its picks become the gold.
4. **Tokens.** Use the project's token file. In New mode, build it with `references/floor/tokens.md`: fill every role from the direction's values, name tokens from the product's world where the world is rich (`--ember`, not `--accent-2`), write each accent's rule beside it, and pass the contrast gates. *Done when* every colour, radius, shadow, size and font you use is a token.
5. **Build.** Build the screen in every state from step 1 with the project's components, fed by the fixture through the same data path as real data. Read the floor file for each area you touch (index in `references/floor/README.md`) and the toolbox entry for the signature's technique. Web UI used on a touch screen: also load the `mobile-native` skill when it is installed and apply its symptom table (skip its Initial Response line); without it, `references/floor/mobile.md` holds the rules. *Done when* every state renders from fixture data and the signature shows where step 2 said.
6. **Gate.** Render and read the pixels (`references/verify.md`):
   - Web: `node ~/.claude/skills/build-ui/scripts/audit.mjs <url> --dark --drift --shots <dir> --gate`, at 1280 and 390 by default. It takes a URL or a file path; a page that loads ES modules needs a local server (`python3 -m http.server <free port>`). Fix every line it prints, re-run, then Read every shot.
   - SwiftUI: the snapshot matrix (`references/floor/swiftui.md`, Gate), then Read the contact sheet. Interactions on the simulator through the device tools.

   *Done when* the audit ends `audit passed` (web) or the sheet shows no fault at any size (SwiftUI), and you have looked at every state.
7. **Review.** Put your screenshot beside the gold and run the questions and genericness tests in `references/verify.md`. Any "no" is the next fix. Run the blind review there for a new project's first screen and for a polish pass. Fix the largest visible fault first: content and hierarchy, then the signature, then layout, spacing, polish. Re-run the gate after each round. *Done when* every answer is yes, or each remaining "no" is in the handover with its reason.
8. **Handover.** Report with the template in `references/verify.md`, Handover.
9. **Taste.** If the user corrected the UI this session (an explicit correction, a value they edited in your file, repeated nudges that settled, a revert or a rejected variant), list each as a proposed rule: what they said, the rule, why (marked *inferred* when they gave no reason), and where it goes. This product's look goes to its `DESIGN.md`, Decisions. A rule that holds across projects goes to this skill's floor; a technique worth keeping goes to the toolbox. Prefer a check in `scripts/audit.mjs`, seen failing on a planted case, over a sentence. Write only what the user approves. *Done when* every correction is proposed or the user waived the step.

## Scope

Marketing pages belong to `design-taste-frontend`: hand it the project's `DESIGN.md` and token file so the site and the product share signature, type and palette. Launch films and faux-UI demos are other jobs. Charts: this skill decides what the chart says and its signature; the `dataviz` skill, when available, holds chart mechanics. For a topic none of these files cover (three.js, Lottie, a specific framework), `npx ui-skills get <slug>` may load one third-party skill: read it fully first, load one at most, keep this skill's rules on top.
