# Pond references

Source: Pond library "My Pond" (448 saves scanned, all 14 folders). Almost all saves are X posts. Kept: 16 screens, 14 rules.

## Screens

| platform | what it shows | local file | source URL | what to take |
|---|---|---|---|---|
| web (macOS app) | Harp: agent app, grouped task list in sidebar, monospace transcript pane | web/pond/harp-agent-sidebar.jpg | https://x.com/dominikmartn/status/2112528257924964751 | Sidebar rows are name left, age + status glyph right in one column; group headers carry a count and an amber "1 needs you" instead of badges |
| web (macOS app) | Lettera: markdown editor, file tree left, document center | web/pond/lettera-markdown-editor.jpg | https://x.com/NathanFlurry/status/2067737695947026841 | Selected tree row is the only saturated color (blue fill); toolbar is two small pill groups top right, nothing else in chrome |
| web (menu bar) | OpenUsage: menu bar popover with usage meters per provider | web/pond/openusage-menubar.jpg | https://x.com/robinebers/status/2064008826224017898 | Each meter is label left, bar, then "96% left" left and "Resets in 1h 55m" right; rows split by hairlines, one rounded group per provider |
| web (menu bar) | Codenotch: Claude usage popover plus ring in the notch | web/pond/codenotch-claude-usage.jpg | https://x.com/hivinz_/status/2101975490496180698 | Label and reset time share one line, bar below, "% Used" below that; one white fill on black, no accent color |
| web (desktop) | Claude usage panel: context bar, plan limits, 0% meters | web/pond/claude-usage-panel.png | https://x.com/LexnLin/status/2107908984564756628 | Dense panel: 13px-class rows, label left and value right, thin 4px-class bars, one secondary "See detailed breakdown" button |
| web (desktop) | T3 Code composer: prompt field, model/effort/access selectors, usage footer | web/pond/t3-composer.png | https://x.com/btsouth/status/2108748856968245532 | Selectors are text + chevron separated by 1px dividers, not buttons; usage numbers sit below the field as muted inline text |
| web (desktop) | T3 Code "Edit task" modal | web/pond/t3-edit-task-modal.jpg | https://x.com/i/web/status/2113307866102911343 | Labels above fields, two-column row for paired fields, footer bar with Cancel (neutral) and Save (the only colored button) |
| web | Dark analytics dashboard: sidebar, period tabs, 4 KPI strip, line chart | web/pond/shadcn-dark-dashboard.jpg | https://x.com/shabanhr/status/2051221262798864460 | KPI strip is one bordered row with dividers, not four cards; delta is small tinted chip at the right edge of each cell; chart has dashed gridlines and no legend |
| web | Dark invoices page: 3 summary blocks, table with status and download | web/pond/invoices-dark-table.jpg | https://x.com/irsyad/status/2094533348630962339 | Table: hairline row borders, muted header, right-aligned amount, status as small tinted text chip, icon-only download in last column |
| web | Settings > Security, sidebar with grouped nav | web/pond/settings-security.jpg | https://x.com/PostiauxCharles/status/2089641725602001130 | Setting rows: label + one-line description left, one control right; destructive row uses red text on a neutral button; selected nav item is a white raised row |
| web | Health dashboard: mixed dark/light/colored metric tiles, nav pill bar | web/pond/health-dashboard-cards.jpg | https://x.com/tobiadonadon_/status/2115551475397259642 | Each tile: label, big number with small unit, sparkline with dashed average line and one orange point for today |
| web | Status chips with icons: date, repeat, Zoom, location, time | web/pond/status-chips.jpg | https://x.com/adhamuxi/status/2047200498261041483 | Chip = tinted background + same-hue icon and text, one hue per meaning; truncate long values with an ellipsis inside the chip |
| web (desktop) | Daymark: calendar app, sidebar with calendar checkboxes, week grid | web/pond/daymark-calendar.jpg | https://x.com/marcelkargul/status/2111515571179122856 | Event blocks are pastel fill + darker same-hue text; "now" is a red time label on the gutter with a 1px line across the grid |
| web (desktop) | Notes app: nav sidebar, search, note list with timestamps | web/pond/notes-sidebar-list.jpg | https://x.com/marcelkargul/status/2115632903833219569 | Note list rows: title, 2-line muted excerpt, relative time; selected row gets a thin blue outline, not a fill |
| ios | Mononote: one note, floating circular actions, pill status | ios/pond/mononote.jpg | https://x.com/dannyacevedoooo/status/2080344350576214093 | Pure black screen, one #111-class card, three 48pt-class dark circular/pill controls along the bottom; no tab bar |
| ios | Quest: three screens of a personal agent app (chat, reveal, onboarding) | ios/pond/quest-agent.jpg | https://x.com/BrettFromDJ/status/2118421750258245949 | Progress shown as a labeled meter ("Understanding 0%" with a marker at 80%); list rows pair a service icon, title, muted subtitle, and one trailing button |

Dropped after viewing: FSearch (empty window), iOS map-bubble collage (decorative).

## Rules found

Buttons and surfaces
- Dark raised button recipe: fill linear gradient #18171C to #312F37, stroke #18171C, inner shadow #FFF 15% x0 y4 blur4, drop shadow #010101 15% x0 y2 blur4, second drop shadow #B4B2BD x0 y4 blur4 spread -3. https://x.com/marcelkargul/status/2048359867786699178
- Dark button variant: fill gradient #201E25 to #323137, stroke gradient #4B4951 to #313036, drop shadow #000 10% y2 blur4, outer ring #0D0D0D spread 1 blur 0. https://x.com/AnasKaratela7/status/2051293308937458144
- A 0.5px inset top highlight (`shadow-[0_0.5px_0_0_neutral-700_inset,0_8px_8px_0_neutral-900]`) plus a dark vertical gradient lifts a dark button. https://x.com/mannupaaji/status/2040405539205820889
- Image-backed tappable cards: white-to-transparent gradient on top (soft light or overlay), black-to-transparent on bottom (soft light or multiply) for text contrast, tint sampled from the bottom-left quadrant of the image, layers exported at 100% opacity and tuned in code. https://x.com/flyosity/status/2115797550452367686
- Nested radius: equal radii on parent and child look wrong; child radius = parent radius minus padding (the `concentric` Tailwind plugin computes it). https://x.com/diip3sh/status/2112576679218696242

System constraints for model-built UI
- 8px base grid, 24px padding, 24px corner radius, at most 2 font families, 2 to 3 font weights. https://x.com/theShaneLevine/status/2096385543042912300
- Add to AGENTS.md: "Avoid unnecessary secondary labels and descriptions. Let the layout do the explaining." https://x.com/luinlee/status/2113085361836744764
- App icon / logo mark: at most 2 colors in the mark, at most 3 main colors including background, rounded thick strokes, no sharp corners or thin lines, must stay legible when scaled down. https://x.com/s1dashu/status/2089720502483067016

Components
- Date picker checklist (what shipped pickers got wrong): visible hover on selected date, visible hover on range dates, no flicker when the second date is picked, light and dark mode, clear which endpoint is being edited, optical alignment of the week-number column, selected time centered in its dropdown, scroll-fade on dropdown, subtle animation on month change. https://x.com/micka_design/status/2115205154446483528
- Browser autofill overrides input styles; restyle `:-webkit-autofill` (and its `:hover`, `:active`, `:focus`) with `-webkit-text-fill-color`, an inset `box-shadow` of 1000px, and `transition: background-color 5000s ease-in-out 0s`. https://x.com/alicalimli_dev/status/2051179835905716448

Mobile
- Multi-step onboarding in React Native: one persistent button and stepper rendered above the navigation stack, state shared by context; keep the keyboard open across screens by focusing a hidden TextInput before navigating. https://x.com/barany6m/status/1980027483740164374
- SwiftUI: split a large body into separate View structs, not computed properties; computed properties share the parent's invalidation boundary, so each state change re-evaluates every section. https://x.com/v_pradeilles/status/2071918929975685351

Unverified: video-only saves (hit-target tip by joshpuckett, date picker demo, keyboard guide by Margelo) have no readable rules in the stored text; I did not watch the videos.
