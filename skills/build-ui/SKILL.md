---
name: build-ui
description: "Build or change product UI in web (React, HTML/CSS) or SwiftUI: new apps, screens, components, dashboards, forms, settings, tables, lists, sheets, menus. Plan, copy a gold reference, build with the project's tokens, then pass a rendered gate before handover."
---

# Build UI

Real product UI: a screen someone uses every day. It reads as one calm product, shows only what this state needs, puts the eye on the next step, and survives worst-case data at every width, theme and text size.

## The one idea

**One next step per surface, the least data that answers the question, hierarchy from contrast steps, and nothing ships until you have looked at the rendered pixels.**

Five ways it fails:

- **Everything at once.** Six figures where one answers it, every field visible, every row of a 200-row list. The more on screen, the more it looks generated.
- **Template.** Centered hero, card grid, rows of identical metric boxes, a card inside a card, icons in colored tiles. Layout chosen before the content.
- **Flat.** Every object the same weight in the same bordered box; three buttons of equal weight. The eye has nowhere to land.
- **Happy path only.** Built for one perfect record. Breaks on a long name, zero rows, a failed load, 320px, dark mode or the largest text size.
- **Unseen.** Shipped from the code without rendering it. Most visible faults (a cut label, a 4px inset, a jump on load) are only visible in pixels.

## Which rules win

1. **The project's own design system**: its tokens, components and recipes. Reuse before inventing; match the neighbour.
2. **The look**: `references/tactile/system.md`, when the project has no system of its own or the user asks for it. On SwiftUI, system components come first; see `references/swiftui.md`.
3. **The craft**: `references/craft.md`, the precision rules (insets, stacks, icons, alignment).
4. **Behaviour**: `references/states.md` (states, forms, tables, navigation, dashboards), then `references/web.md` or `references/swiftui.md`.

A user instruction beats all of them. When two rules conflict, the higher one wins; say which one you followed.

## Workflow

Write the plan before code. Each step ends on its criterion; do not start the next step before it holds.

1. **Plan.** Name, in writing: the surface's job, the single next step (the one primary action, or none), the least data that answers the question, every state it has (first use, no results, loading, failed load, denied, full, worst case), what is left out, and the platform. Use the decision order in `references/tactile/system.md` (hierarchy, amount of data, placement, component). *Done when* the plan names the primary action and every state.
2. **Gold.** Find the closest gold in `gold/README.md` and open it: read the code of a Stageshow example or kit part, look at the Mobbin or Pond image. Write down what you take from it (layout, spacing, row pitch, where actions sit) and what you leave (Stageshow's `Stage`, `Act`, `Bar` filler and crops are illustration machinery; real UI has none). *Done when* you name one gold and three concrete things you copy from it. No gold fits, or the work is a new app or a new look: ask the user whether to run `/gather` for this surface first; on yes, its Copy Picks become the gold.
3. **Look.** Read the project's `DESIGN.md` (if any), tokens and components first. No system: set one up from `references/tactile/tokens.md` (role-based tokens, remapped to the brand's palette and typeface). Pick the icon set the project already uses, else one set on purpose (`references/craft.md`, Icons). *Done when* every color, radius, shadow and size you will use is a token, not a literal.
4. **Build.** Build the screen in every state from step 1, with the project's components, following the reference for the area you touch:
   - buttons, fields, toggles, menus: `references/tactile/buttons-and-controls.md`
   - cards, tables, modals, sheets, toasts, dark mode: `references/tactile/surfaces-and-layering.md`
   - columns, rhythm, figures, empty and loading: `references/tactile/layout-and-hierarchy.md`
   - anything that moves: `references/tactile/motion.md`
   - phone layouts: `references/tactile/mobile.md`
   - spacing, type, icons, alignment: `references/craft.md`
   - states, forms, tables, navigation, dashboards: `references/states.md`
   - platform: `references/web.md` or `references/swiftui.md`

   Feed the screen a worst-case fixture through the same data path as the real data (`references/states.md`, Worst case). *Done when* every state from step 1 renders from real or fixture data, never hard-coded text in the view.
5. **Gate.** Render it and read the pixels (`references/verify.md`):
   - Web: `node ~/.claude/skills/build-ui/scripts/audit.mjs <url> --dark --shots <dir> --gate`, at 1280 and 390 by default. Fix every line it prints, re-run, then Read every shot.
   - SwiftUI: the snapshot matrix (`references/swiftui.md`, Gate), then Read the contact sheet. Interactions on the simulator through the device tools.

   *Done when* the audit ends `audit passed` (web) or the sheet shows no fault at any size (SwiftUI), and you have looked at every state.
6. **Review.** Put your screenshot beside the gold. Ask the questions in `references/verify.md`, Review; any "no" is the next fix. Fix the largest visible fault first: hierarchy, then layout, then spacing, then polish. Re-run the gate after each round. *Done when* every review answer is yes, or the remaining "no" is written in the handover with the reason.
7. **Handover.** Report with the template in `references/verify.md`, Handover: the gold, the states checked, the gate's last line, what you did not check.
8. **Taste.** If the user corrected the UI this session (an explicit correction, a value they edited in your file, repeated nudges that settled somewhere, a revert or a rejected variant), list each one as a proposed rule: what they said, the rule, why (marked *inferred* when they gave no reason), and where it goes (the project's `CLAUDE.md` or `DESIGN.md`; this skill only for a rule that holds across projects). Propose a check in `scripts/audit.mjs` over a sentence when a violation can be found in the DOM. Write only what the user approves. *Done when* every correction is proposed or the user waived the step.

## Gold

`gold/README.md` indexes three sets:

- `gold/stageshow/`: Stageshow's examples, kit and teaching pairs (React + CSS). Real interaction patterns at a high craft bar: field validation, inline table edit, skeleton to content, chart scrub, drag to reorder, share popover, upload, AI answers, command menu, list rows with hover actions and undo. Take geometry, states and motion; leave the stage, filler bars and crops.
- `gold/refs/mobbin.md`: real product screens per pattern, web and iOS, as images.
- `gold/refs/pond.md`: screens and rules from the user's own saves.

## Scope

Marketing pages, launch films and faux-UI demos are other jobs. For a niche topic none of these files cover (three.js, Lottie, a specific framework), `npx ui-skills get <slug>` may load one third-party skill: read it fully first, load one at most, and keep this skill's rules on top.
