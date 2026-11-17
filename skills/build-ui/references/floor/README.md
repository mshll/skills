# The floor

What every screen meets in every direction. The floor holds mechanics: content, hierarchy, amount of data, placement, sizes, states, motion timing, accessibility and platform rules. It never picks a look: fills, edges, radii, type character and colour strategy come from the direction (`../direction.md`) through the role tokens (`tokens.md`).

Rules are written as roles and ratios ("the -3 tint with its -11 text", "one step above its ground"). Where a file gives a concrete value, it is either a size that holds everywhere (44pt targets, 4.5:1 contrast) or a worked example marked as one.

## Posture

- **Smallest change that fixes it.** Move in 2px, one ink step, or 5% of opacity or scale.
- **Reuse before inventing.** Match the recipe the product already uses. A new component needs a reason.
- **Remove before adding.** Borders, containers, separators, icons, labels that repeat a heading. Run the removal test: name the element, state its job, remove it in your head; add something back only when its job is unfilled.
- **Match the neighbour.** Siblings share height, padding, radius, text size and ink.
- **Borrow from the parent.** A control's fill, edge and drop come from the surface it sits on, so it reads the same on a panel, card, row, sheet or tint, in both themes.
- **A rule is global.** Once decided, apply it to every instance in the same change.
- **Show only what this state needs.** New and returning users can see different screens.
- **Check at zoom.** 4-8×, both themes, worst-case data, every state.

## The decision order

Work top to bottom. Most weak UI starts at step 5.

1. **Content.** The fixture and the copy (`content.md`): real names, units, magnitudes, consequences, verbs.
2. **Hierarchy.** Name the single next step: the one primary action, or none. Rank the rest below it: secondary, utility, tertiary. Destructive is never the primary.
3. **Amount of data.** The least that answers the question. One strong figure beats six small ones. Lists stop at 5-6 rows, then a pager or "View all". Hide what is empty, finished or not yet relevant.
4. **Placement.** Column by page type: ~800px to read, ~1200px for data, ~440px for a form or flow. A section's actions sit at the right of its title, above the data they act on. Paging sits below the data. A control sits next to what it sets.
5. **Component.** Plain rows for lists and navigation, a card for one unit of related data, a table for many records. Inline first. A modal only for a focused task or a confirm; a bottom sheet on a phone. A toast only for a result the user can't otherwise see.
6. **Surface and layer.** The direction's surface model; then raise or sink each thing from its ground (`surfaces.md`).
7. **Type and spacing.** One workhorse face, one to three weights. Hierarchy is a size step plus an ink step. 4px grid: 4-8px inside a control, 12-16px between items, 24-32px between sections.
8. **Colour roles.** Neutrals carry structure. Hue carries meaning: status, identity, or the direction's signal, each by its written rule. Status wins a clash.
9. **Motion gate.** Should it move at all? The more often it is seen, the less it moves (`motion.md`).
10. **Phone.** 44pt targets, 15px text floor (16px in fields), ~20px gutters, stacked full-width actions, sheets for dialogs, nothing hover-only (`mobile.md`).
11. **Review.** Zoom in on both themes: 1px seams, double borders, mismatched radii, cut labels, layout that jumps, siblings that don't match.

## Files

| Working on | Read |
|---|---|
| Fixture, copy, consequences, empty-state text | [content.md](content.md) |
| Figures, KPIs, tables, charts, marks in rows | [data.md](data.md) |
| Tokens, roles, contrast gates, remapping a palette or typeface | [tokens.md](tokens.md) |
| Buttons, fields, toggles, menus, badges | [controls.md](controls.md) |
| Grounds, cards, tables, modals, sheets, toasts, dark elevation | [surfaces.md](surfaces.md) |
| Columns, rhythm, proportion, placement, figures, empty and loading | [layout.md](layout.md) |
| Anything that moves | [motion.md](motion.md) |
| Phone layouts | [mobile.md](mobile.md) |
| Spacing, type, icons, alignment precision | [craft.md](craft.md) |
| States, forms, tables, navigation, dashboards behaviour | [states.md](states.md) |
| Web platform: touch, accessibility, browser surfaces, dark mode, loading | [web.md](web.md) |
| SwiftUI platform and its gate | [swiftui.md](swiftui.md) |

## Never ship

- [ ] Placeholder, repeated or tidy fake data; generic copy that fits any product
- [ ] More than one primary on a surface, or a primary that isn't the real next step
- [ ] A destructive action styled as the primary
- [ ] A figure with no comparison where the user must judge it; a chart that highlights nothing
- [ ] Every state shouting: chips, colour and icons on normal rows
- [ ] A colour with no written rule, or a status hue reused as brand
- [ ] A dark-mode style that changes padding, height, radius or border width
- [ ] A shadow as the only elevation cue in dark mode; a big soft shadow blur
- [ ] Double borders, or an inner radius that isn't the outer radius minus the padding
- [ ] Text the user must read to act under 4.5:1 contrast; hint text under 12px
- [ ] Browser defaults left unthemed: selection colour, caret, scrollbars, focus ring, underline offset
- [ ] Actions placed below the data they act on (paging is the exception)
- [ ] Layout that jumps when data, a label or a loading state arrives
- [ ] Overlapping chart labels or tags at any width
- [ ] Title Case labels, three dots instead of "…", em dashes in UI copy
- [ ] `transition: all`, ease-in on UI, scaling from 0, motion on a path the user repeats many times a minute
- [ ] A transition with no reduced-motion path
- [ ] Hover-only information, or hover styles that stick on touch
- [ ] Touch targets under 44pt, fields under 16px on touch screens
- [ ] A signature missing from the screen, or spread past where `DESIGN.md` stops it
- [ ] Not checked at 4-8× in both themes

## Credit

The role layer, step-shift rule and several recipes derive from tactile-design (MIT, [LICENSE](LICENSE)); motion and mobile values partly from the user's saves, measured where marked.
