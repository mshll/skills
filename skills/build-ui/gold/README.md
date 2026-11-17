# Gold

Three kinds of gold, three jobs. Never copy a whole look.

- **Pattern gold** (`screens/`): take structure and decisions: layout, row pitch, where actions sit, which states exist, how copy reads. Leave its look.
- **Technique gold** (`techniques/`): take one technique per screen (a bar encoding, a figure treatment, a motion). Name the technique and the part in the build notes before using it.
- **Direction** (the project's `DESIGN.md`): take the look (palette, type, texture) from the direction. Pattern and technique gold never supply it.
- **Code gold** (`stageshow/`): geometry, states and motion you can read in CSS and TSX. See the Stageshow section.

Workflow: pick the closest pattern gold, open it, write down three concrete things you copy. Pick at most one technique. Measure before quoting a number from an image. Kind: `shipped` = real product, `concept` = designer post or Dribbble-style shot (trust it for an idea, not for edge states or data density). Mobbin screens come from Mobbin's own capture accounts: real structure, thin data. Ignore the Mobbin credit bar at the bottom of its images.

Images are copied as found (webp, jpg, png). Sources over 1.5 MB would be capped at 1600 px; none needed it.

## Screens

Path: `screens/<platform>/<pattern>/<file>`. Web has 57 files, mobile 36.

### Web

#### dashboard

| file | source | kind | part to take |
|---|---|---|---|
| `dashboard/emberline-attention-table-ghost-prior.jpg` | https://x.com/nizamdesign/status/2115126379025141819 | concept | instructional subtitle, sort-rule note, per-row verbs, ghost prior markers, dark done well (Pond BDPWW4) |
| `dashboard/lexnlin-claude-usage-panel.png` | https://x.com/LexnLin/status/2107908984564756628 | shipped | Dense panel |
| `dashboard/menedzher-colour-field-ghost-bars.jpg` | https://x.com/sajon_co/status/2116711849932763575 | concept | colour-field layout with tonal text, ghost-track bars (Pond G1A3BP m3) |
| `dashboard/mercury-home.webp` | https://mobbin.com/screens/a0539f69-cca9-4645-8f3d-aa59048efdd1 | shipped | Greeting, one row of pill actions, then a 2x2 grid of white panels on a near-white page |
| `dashboard/nizam-sentence-unit-kpis-split-bars.jpg` | https://x.com/nizamdesign/status/2116443867801423882 | concept | sentence-unit KPIs with split bars, actual vs predicted, red only for late, due-soon card (Pond ZDF246) |
| `dashboard/quillfen-allocations-consequence-band-table.jpg` | https://x.com/isaacdsign/status/2121516483574394894 | concept | consequence band above the table, quiet Ready vs icon chips, mono account column, KPI split bar, disabled submit with its reason (Pond J75MWN m10) |
| `dashboard/robinebers-openusage-menubar.jpg` | https://x.com/robinebers/status/2064008826224017898 | shipped | Each meter is label left, bar, then "96% left" left and "Resets in 1h 55m" right |
| `dashboard/shabanhr-dark-kpi-strip-dashboard.jpg` | https://x.com/shabanhr/status/2051221262798864460 | concept | KPI strip is one bordered row with dividers, not four cards |
| `dashboard/tobiadonadon-health-tiles-state-colour.jpg` | https://x.com/tobiadonadon_/status/2115551475397259642 | concept | unit sizing, average reference line, today highlight, tile colour = state, ruler input, photo tile (Pond PJPWK3) |

#### data-table

| file | source | kind | part to take |
|---|---|---|---|
| `data-table/adhamuxi-status-chips.jpg` | https://x.com/adhamuxi/status/2047200498261041483 | concept | Chip = tinted background + same-hue icon and text, one hue per meaning |
| `data-table/grok-sparkline-cells.jpg` | https://mobbin.com/screens/fceceda2-ac20-4f8f-84f9-cf27b0408dd9 | shipped | Mono model names, square hairline table, sparkline curve per cell, mono figures right-aligned, blue only in the chart |
| `data-table/irsyad-invoices-dark-table.jpg` | https://x.com/irsyad/status/2094533348630962339 | concept | Table |
| `data-table/mailpulse-campaigns-tick-bar-cells.jpg` | https://x.com/jubayer6910/status/2115884163794645427 | concept | tick bars in open-rate cells, date chips, data-bearing secondary lines (Pond T8J8M0 m1) |
| `data-table/mercury-transactions.webp` | https://mobbin.com/screens/868560a8-9acb-41d7-9708-82730b1257ad | shipped | Filter chips in one row above the table, view controls right-aligned in the same row |
| `data-table/midday-tree-table.jpg` | https://mobbin.com/screens/23b62690-a1a4-4246-8e8f-78a8eb1ab947 | shipped | Square cells ruled in hairlines, thin icon rail instead of sidebar, small coloured category squares, outlined System tags, black Create button |
| `data-table/stripe-transactions.webp` | https://mobbin.com/screens/f706524f-2964-47a5-ba06-4fdf75779e0f | shipped | Page title with primary action top right, text tabs, then status filter chips and a Filter button |
| `data-table/twenty-dense-grid-slide-over.jpg` | https://mobbin.com/screens/313ec099-5e35-4278-b872-a0a149f7d501 | shipped | Spreadsheet-dense record grid, full ruled cells, domain chips as outlined tags, right slide-over form with grey inputs, blue only for submit |
| `data-table/v0-logs.jpg` | https://mobbin.com/screens/d2744109-e571-4ff9-924e-16ca4bb9d0ac | shipped | Mono log lines with small SERVER tags and timestamps, black pill primary, light popover filter menu |

#### chart-analytics

| file | source | kind | part to take |
|---|---|---|---|
| `chart-analytics/adhamuxi-goal-pace-hatched-projection.jpg` | https://x.com/adhamuxi/status/2047210409648947327 | concept | pace marker plus hatched projection (Pond 8BT8J0 m2) |
| `chart-analytics/adhamuxi-zoned-segmented-bars.jpg` | https://x.com/adhamuxi/status/2047210409648947327 | concept | threshold-zoned segmented bars (Pond 8BT8J0 m1) |
| `chart-analytics/gemini-direct-label-chart.jpg` | https://www.are.na/block/41221396 | shipped | Serif title over bar rows in dark green and pale mint with mono-caps labels inside the bars and a faint dotted grid |
| `chart-analytics/mailpulse-engagement-heatmap-funnel.jpg` | https://x.com/jubayer6910/status/2116970231793058125 | concept | weekday x hour heatmap with Best chip, square-segment funnel, derivation footers on KPIs (skip the icon tiles) (Pond CXSGRR) |
| `chart-analytics/uihasan-dot-matrix-kpi-sparklines.jpg` | https://x.com/uihasan2828/status/2108876118854123938 | concept | dot-matrix KPI sparklines, hatched remainder. Viz only: copy is weak (Pond QDH9RK) |

#### form

| file | source | kind | part to take |
|---|---|---|---|
| `form/btsouth-t3-composer-selectors.png` | https://x.com/btsouth/status/2108748856968245532 | shipped | Selectors are text + chevron separated by 1px dividers, not buttons |
| `form/vercel-env-variable.webp` | https://mobbin.com/screens/fce0f81a-790d-4757-95f2-4a6ae033bcde | shipped | Create form in a right side sheet |
| `form/vercel-new-project.webp` | https://mobbin.com/screens/e80f252c-32c8-41f2-acb4-8c620c56f23f | shipped | Narrow centered card on a grey page, one column of fields with a two-up row for team and name, a hairline between groups, one full-width black primary button |

#### settings

| file | source | kind | part to take |
|---|---|---|---|
| `settings/notion-preferences-dark.webp` | https://mobbin.com/screens/d138214d-5351-4bd6-a2bb-c7b3648ea6a5 | shipped | Same layout in dark |
| `settings/postiaux-security-settings-rows.jpg` | https://x.com/PostiauxCharles/status/2089641725602001130 | concept | settings row anatomy, selected nav as raised surface, destructive styling (Pond BC6D5R) |

#### list-detail

| file | source | kind | part to take |
|---|---|---|---|
| `list-detail/linear-issue-detail.webp` | https://mobbin.com/screens/f00cc4fb-4083-43fc-a0fb-703a6c4ef771 | shipped | Detail page |
| `list-detail/linear-issues-list.webp` | https://mobbin.com/screens/ef923b0e-9a40-4fdd-80f2-f3aafb4f36ce | shipped | Rows grouped under collapsible status headers with a count |
| `list-detail/mailpulse-campaign-drawer-deltas.jpg` | https://x.com/jubayer6910/status/2115884163794645427 | concept | drawer with pts deltas and average comparison (Pond T8J8M0 m3) |
| `list-detail/marcelkargul-notes-sidebar-list.jpg` | https://x.com/marcelkargul/status/2115632903833219569 | concept | Note list rows |
| `list-detail/nathanflurry-lettera-markdown-editor.jpg` | https://x.com/NathanFlurry/status/2067737695947026841 | shipped | Selected tree row is the only saturated color (blue fill) |

#### modal-sheet

| file | source | kind | part to take |
|---|---|---|---|
| `modal-sheet/airbnb-profile-decade-dialog-preview.jpg` | https://mobbin.com/screens/f6affc04-2240-4934-a116-34120d3f3d79 | shipped | toggle with a consequence line that previews what others see ("Born in the 90s") |
| `modal-sheet/linear-create-issue.webp` | https://mobbin.com/screens/ffa2e456-85c7-4005-b361-de79dc6b6dc7 | shipped | Compact modal |
| `modal-sheet/quillfen-hold-credits-modal-impact-table.jpg` | https://x.com/isaacdsign/status/2121516483574394894 | concept | hold modal with an impact table, deep green rail (Pond J75MWN m3) |
| `modal-sheet/t3-edit-task-modal.jpg` | https://x.com/i/web/status/2113307866102911343 | shipped | Labels above fields, two-column row for paired fields, footer bar with Cancel (neutral) and Save (the only colored button) |

#### navigation

| file | source | kind | part to take |
|---|---|---|---|
| `navigation/daymark-calendar-rail-now-line.jpg` | https://x.com/marcelkargul/status/2111515571179122856 | concept | category tints with same-hue text, now-line, sidebar rail anatomy (Pond 4JP0GJ) |
| `navigation/dominikmartn-harp-agent-sidebar.jpg` | https://x.com/dominikmartn/status/2112528257924964751 | shipped | Sidebar rows are name left, age + status glyph right in one column |
| `navigation/linear-sidebar.webp` | https://mobbin.com/screens/fd1b4d88-f021-49a3-98af-4cd3a87e1d29 | shipped | Narrow tinted sidebar, workspace switcher on top, active item marked only by a darker fill |
| `navigation/notion-sidebar.webp` | https://mobbin.com/screens/fa353249-a50d-499c-9c72-ffc28f1bd0f0 | shipped | Sidebar is a slightly tinted surface with no borders |

#### notifications-activity

| file | source | kind | part to take |
|---|---|---|---|
| `notifications-activity/linear-notification-settings.webp` | https://mobbin.com/screens/fbb07294-5214-4769-97e0-f2bd9f8cb36a | shipped | Preferences as grouped rows |

#### onboarding-sign-in

| file | source | kind | part to take |
|---|---|---|---|
| `onboarding-sign-in/deck-inline-checklist.jpg` | https://nicelydone.club/examples/screens/51885560-a43a-4920-99fc-e8bf7f057ef6 | shipped | Charcoal ground, hairline-ringed panels, large white numerals (27, 81.4%) with small green delta, cream-yellow primary button, dashed gridlines with green line chart |
| `onboarding-sign-in/resend-onboarding-stepper.jpg` | https://nicelydone.club/examples/screens/22d2f45c-d4fb-4c7b-a022-6f74b1df1e6f | shipped | Near-black ground, one card lit with a green-tinted gradient edge that fades right, mono code block inside a hairline ring, white primary button, ghost-bordered header |
| `onboarding-sign-in/vercel-login.webp` | https://mobbin.com/screens/e839e5dd-ca34-4876-863e-f816ff2757d8 | shipped | Single narrow column, no card |

#### empty-state

| file | source | kind | part to take |
|---|---|---|---|
| `empty-state/adhamuxi-annotated-empty-state.jpg` | https://x.com/adhamuxi/status/2051600036740640924 | concept | empty state drawn as an annotated diagram of what will fill it (Pond 5NNK22 m2, bench) |
| `empty-state/mercury-books-empty-keeps-layout.jpg` | https://mobbin.com/screens/f7740c28-3995-422a-bc34-d10f4bc8c483 | shipped | empty dashboard keeps its full shape: dash placeholders, dotted ghost curves, range scrubber |
| `empty-state/notion-my-tasks.webp` | https://mobbin.com/screens/9cb6b951-3dc3-49f3-a82d-1e7fd7951d72 | shipped | Centered small outlined icon, one grey sentence, one text link as the action |
| `empty-state/stripe-no-payments.webp` | https://mobbin.com/screens/ec91306d-3228-40d9-9faa-65be2cec16c3 | shipped | Zero-valued summary cells stay visible above |

#### search-command

| file | source | kind | part to take |
|---|---|---|---|
| `search-command/v0-command.webp` | https://mobbin.com/screens/5f353fc3-d9ce-4d1c-be9b-cc1b4ad07578 | shipped | Light palette |

#### pricing-billing

| file | source | kind | part to take |
|---|---|---|---|
| `pricing-billing/stripe-choose-plan.webp` | https://mobbin.com/screens/fae6f743-87ee-41b7-8be1-197e0e23d874 | shipped | Two plan cards side by side |
| `pricing-billing/stripe-invoice-settings.webp` | https://mobbin.com/screens/fc7b35c9-f823-4f28-bb16-d981a05cb530 | shipped | Two-column settings rows |

#### profile-account

| file | source | kind | part to take |
|---|---|---|---|
| `profile-account/airbnb-account-privacy.webp` | https://mobbin.com/screens/fb98988d-3bfe-48e3-8c33-0a41db9e4afc | shipped | Left nav list of account sections with one tinted active row |

#### map-location

| file | source | kind | part to take |
|---|---|---|---|
| `map-location/fleet-tracking-map-list.jpg` | https://layers.to/layers/clqvwkfo40010l70duxvzih1v-dark-mode-tracking-pt2 | concept | Fleet map-and-list panel |

#### media

| file | source | kind | part to take |
|---|---|---|---|
| `media/interfere-landing-hero-product.png` | https://interfere.com | shipped | hero is the real product view at readable size, not a mockup collage |
| `media/pankaj-dither-object-landing-grid.jpg` | https://x.com/pankajstwt/status/2086016314062320103 | concept | dither object in one hue, hatched gutters, landing grid (Pond 3ZES0F m3) |
| `media/tiny-computer-landing.png` | https://tinycomputer.co | shipped | serif display plus one type pairing, app grid shown at real size |

### Mobile

#### dashboard

| file | source | kind | part to take |
|---|---|---|---|
| `dashboard/aydaoz-grain-illustration-rooms.jpg` | https://x.com/aydaoz/status/2120148797422711110 | concept | grain illustration per room/device under a white text card, lowercase status copy, labelled floating tab bar (Pond 9DD0K4) |
| `dashboard/gentler-streak-summary.jpg` | https://mobbin.com/screens/14694404-10b6-403b-a01e-6b0afbbd4346 | shipped | Warm grey ground, large radius metric tiles, one orange filled tile selected, orange headings, floating pill tab bar with filled active capsule |
| `dashboard/notevenclose-goals-denominators.jpg` | https://x.com/notevenclose99/status/2122210252397621332 | concept | goals as coloured value over grey denominator with thin progress lines, micro bars by week (Pond EXJ77R m3) |

#### chart-analytics

| file | source | kind | part to take |
|---|---|---|---|
| `chart-analytics/copilot-monthly-spending.webp` | https://mobbin.com/screens/ea210059-6422-4022-a25c-55063fb025b3 | shipped | Sheet with a big figure, a bar chart where only the selected bar and the over-budget bar change color, and a reference line with a value tag |
| `chart-analytics/mrdavenport-sessions-barcode-timeline.jpg` | https://x.com/mrdavenport/status/2047143752691491305 | concept | sessions as category-coloured barcode on a 24 h axis, 2 stat tiles only (Pond 3CT2MN, video frame) |

#### form

| file | source | kind | part to take |
|---|---|---|---|
| `form/airbnb-create-account.webp` | https://mobbin.com/screens/f070057a-bb3f-44f4-a224-ca83e4c25685 | shipped | Large title with one-line subtitle, group labels above stacked fields (first and last name share one bordered box), native wheel date picker with a Done pill above the |

#### settings

| file | source | kind | part to take |
|---|---|---|---|
| `settings/jordanamblin-dial-ruler-alarm.jpg` | https://x.com/JordanAmblin/status/2121610483438674352 | concept | dial ruler as the alarm input (Pond XTVCS0, video frame, alternate) |
| `settings/notion-compact-card-settings.webp` | https://mobbin.com/screens/f2f3317f-3920-467b-b68f-f6bf97d564e0 | shipped | Sheet with a live preview on top, one-line explanation under it, then toggle rows in a white rounded group |

#### list-detail

| file | source | kind | part to take |
|---|---|---|---|
| `list-detail/binance-list-split-bar.jpg` | https://mobbin.com/screens/73715843-3c1e-4f92-a7dc-7fce993615d9 | shipped | Tight list rows, two-line price/volume stack, right-aligned figures, green/red as the only colour, split gain/loss bar under a stat strip |
| `list-detail/linear-issue-detail.webp` | https://mobbin.com/screens/ed788cb0-3715-4383-9cbd-783d2a55bdf8 | shipped | Title large, properties as one rounded chip group under it, body text, sub-issues in a soft panel, activity as a thin timeline |

#### modal-sheet

| file | source | kind | part to take |
|---|---|---|---|
| `modal-sheet/copilot-settings-sheet.webp` | https://mobbin.com/screens/e9c30c51-dbf6-40b7-a579-db112a3abb9d | shipped | Short bottom sheet with a grabber, small caps-free grey section labels, toggle rows and one row with value plus chevron |
| `modal-sheet/linear-display-sheet.webp` | https://mobbin.com/screens/f02d53ae-347f-46d6-9ce4-96063f4edc90 | shipped | Tall sheet of rounded groups, each row a label with a select at right |

#### navigation

| file | source | kind | part to take |
|---|---|---|---|
| `navigation/airbnb-tab-bar.webp` | https://mobbin.com/screens/fca1741d-8901-4f82-8ef8-1d3fb0d45589 | shipped | Five tabs, icon over short label, selected tab only tinted with the accent |
| `navigation/linear-nav-menu.webp` | https://mobbin.com/screens/f97b18e7-5e86-42f2-85df-9e7a000fae0e | shipped | Navigation as a floating rounded menu above a round search button |

#### notifications-activity

| file | source | kind | part to take |
|---|---|---|---|
| `notifications-activity/icanvardar-call-state-warning.jpg` | https://x.com/icanvardar/status/2090784949427159383 | concept | call-state warning screen in plain type (Pond 1HMYZS m2, alternate) |
| `notifications-activity/linear-inbox-unread.webp` | https://mobbin.com/screens/58a6ef8a-408a-4ce7-90d5-08033f7c5a47 | shipped | Unread state is a small blue dot and full-contrast title |

#### onboarding-sign-in

| file | source | kind | part to take |
|---|---|---|---|
| `onboarding-sign-in/abati-colour-field-fanned-cards.jpg` | https://x.com/AbatiSamuel/status/2122254232980275590 | concept | colour-field onboarding, fanned photo cards carrying data (date, city), one CTA plus text link (Pond WJE6PJ m1) |
| `onboarding-sign-in/airbnb-login.webp` | https://mobbin.com/screens/ab3008ee-f81f-4ede-a4ec-f279fc52b107 | shipped | Sheet with centered logo and title, one input, one full-width primary button, "or", then two square provider buttons |
| `onboarding-sign-in/ayodeleee-halftone-login.jpg` | https://x.com/ayodeleee_/status/2053841584467124676 | concept | halftone portrait fading to black, two-tone mono headline, corner-bracket secondary button (Pond 6VEAAF m2) |
| `onboarding-sign-in/notevenclose-serif-headline-progress-list.jpg` | https://x.com/notevenclose99/status/2122210252397621332 | concept | condensed serif headline, step counter "3/3", progress list with mascots and check/spinner states (Pond EXJ77R m8) |

#### empty-state

| file | source | kind | part to take |
|---|---|---|---|
| `empty-state/airbnb-no-results.webp` | https://mobbin.com/screens/ecf07b80-e9a8-4a62-b392-6274ec376bf9 | shipped | The header and sort stay in place |

#### search-command

| file | source | kind | part to take |
|---|---|---|---|
| `search-command/airbnb-search-sheet.webp` | https://mobbin.com/screens/ead18293-e327-4fbd-b5ca-d87de116d6f2 | shipped | Search as a stack of collapsing cards ("Where?", "When", "Who") |
| `search-command/revolut-who-to-pay.webp` | https://mobbin.com/screens/e287ef62-7803-4aeb-a685-e9248c2acb05 | shipped | Large title, search field, filter pills in one row, a Suggested group, then an alphabetical list with a right-edge index |

#### pricing-billing

| file | source | kind | part to take |
|---|---|---|---|
| `pricing-billing/abati-billing-schedule-calendar-markers.jpg` | https://x.com/AbatiSamuel/status/2122254232980275590 | concept | 36 pt figure, calendar with dome markers on payment days, rows with a 3 pt status bar, floating tab bar plus detached "+" (Pond WJE6PJ m11) |

#### profile-account

| file | source | kind | part to take |
|---|---|---|---|
| `profile-account/airbnb-profile-menu.webp` | https://mobbin.com/screens/e3486665-e560-456e-8f55-756507bfd080 | shipped | Profile tab as a plain list of icon, label, chevron rows split into two groups by a hairline |

#### wallet-finance

| file | source | kind | part to take |
|---|---|---|---|
| `wallet-finance/abati-dimmed-decimals-line-chart.jpg` | https://x.com/AbatiSamuel/status/2122254232980275590 | concept | dimmed decimals, edge-to-edge line chart with faint fill, segmented ranges, label/value stats without boxes (Pond WJE6PJ m7) |
| `wallet-finance/copilot-accounts-net-worth.jpg` | https://mobbin.com/screens/f6d7e993-c760-417a-8ea0-d02a457ea165 | shipped | net-worth line with range chips, real card art as account thumbnails, dashed "Link a new account" slot per group |
| `wallet-finance/fuse-dimmed-decimals.jpg` | https://mobbin.com/screens/4d628a74-0e1a-4a5e-9828-0c33899f44c9 | shipped | Huge balance numeral with grey decimal digits, faint ghost cards with dashed ghost card, soft icon squares, black round FAB |
| `wallet-finance/hephraui-consequence-band-recurring-payment.jpg` | https://x.com/HephraUI/status/2093638591234691444 | concept | consequence band "New recurring payment found" with Review button, figure with trend line (Pond CQ73FM m6) |
| `wallet-finance/notevenclose-light-wallet.jpg` | https://x.com/notevenclose99/status/2122210252397621332 | concept | centred figure with hide toggle, 3 round quick actions, scrolling currency cards with masked account, rows with direction arrows (Pond EXJ77R m11) |
| `wallet-finance/revolut-home.webp` | https://mobbin.com/screens/dad40228-042e-4bff-abf4-6c8cee4d9bcb | shipped | Big balance centered, row of four circular actions with labels beneath, then a list of rounded rows |

#### map-location

| file | source | kind | part to take |
|---|---|---|---|
| `map-location/abati-map-navigation.jpg` | https://x.com/AbatiSamuel/status/2122254232980275590 | concept | map navigation screen (Pond WJE6PJ m6, alternate) |
| `map-location/akwaabaaa-route-on-aerial-photo.jpg` | https://x.com/akwaabaaa/status/2057494799444304123 | concept | route traced on aerial photo with summary sheet, tier medals (Pond EB8HHS m2) |

#### media

| file | source | kind | part to take |
|---|---|---|---|
| `media/juxtopposed-artwork-sampled-player.jpg` | https://x.com/juxtopposed/status/2037207906588750229 | concept | screen colour sampled from artwork, grouped action capsule, persistent mini player above floating tab bar (Pond KJK1WK m2) |
| `media/marcelkargul-photo-templates-three-phones.jpg` | https://x.com/marcelkargul/status/2086818999224955293 | concept | restrained photo-app screens, content carries the colour (Pond PE5K0X, alternate) |
| `media/tomthings-poster-lockup-rating-slider.jpg` | https://x.com/tomthings1/status/2023093014231732721 | concept | poster lockup and rating slider (Pond 5J1Y7K m1, alternate) |

## Techniques

Path: `techniques/<file>`. One slug per technique; further sources are `-2`, `-3`. A technique image is not a screen to copy: take the one encoding named, in the project's own direction. Pair each technique with a full pattern screen from the Screens index. Most technique sources are concepts or single widgets.

| slug | files | source | encodes / part to take |
|---|---|---|---|
| annotated-empty | `annotated-empty.jpg` | https://x.com/adhamuxi/status/2051600036740640924 | empty state as an annotated diagram |
| arc-knob | `arc-knob.jpg` | https://layers.to/layers/clkpzvai90007kx0cmhld1adn-retrograde-app (concept) | knob value drawn as a coloured arc on the rim inside a tick ring, value printed on the cap; accent only on the active arc: take the arc and tick ring, leave the white soft-shadow body and script wordmark |
| barcode-timeline | `barcode-timeline.jpg` | https://x.com/mrdavenport/status/2047143752691491305 (video frame) | sessions as a barcode on a 24 h axis |
| bracketed-value | `bracketed-value.jpg` | https://savee.com/i/8qazKBA/ (concept) | value column that fades toward its ends with the current value in corner brackets; side scale with a pointer at the current value: take the bracketed column, leave the amber-on-charcoal HUD |
| branch-graph | `branch-graph.png` | https://www.tensorlake.ai (live capture) | the product's own model (branches, snapshots) drawn as the illustration |
| button-edges | `button-edges-2.jpg`, `button-edges-3.jpg`, `button-edges.jpg` | https://x.com/mannupaaji/status/2040405539205820889 ; https://x.com/marcelkargul/status/2046613075344716078 (file -2) ; https://x.com/tranmautritam/status/2056014508867645732 (file -3, concept) | dark button with a 0.5px lit top edge; coloured button with a ring from its own darker hue; file -3 builds a light button in four steps (top-light gradient, white inner shadow, 1px darker stroke): take the steps, leave the grey |
| calendar-markers | `calendar-markers.jpg` | https://x.com/AbatiSamuel/status/2122254232980275590 | dome markers on payment days |
| category-tints | `category-tints-2.jpg`, `category-tints.jpg` | https://x.com/marcelkargul/status/2111515571179122856 ; https://x.com/artntek/status/2092361432251703541 (file -2, concept) | pastel fill with same-hue text per category; file -2 uses solid fills and turns a past event grey: take the past-goes-grey rule, leave the saturated palette |
| colour-field-moment | `colour-field-moment.jpg` | https://x.com/AbatiSamuel/status/2122254232980275590 (m1) | one saturated colour field on one screen, rest neutral |
| colour-rule | `colour-rule.jpg` | https://x.com/sonia_axion/status/2118114802484867284 | palette card stating its own rule: "Ember only appears while something is firing or has failed" |
| committed-shell | `committed-shell.jpg` | https://x.com/isaacdsign/status/2121516483574394894 (m3) | deep green rail and window edge as the committed chrome |
| compact-to-detail | `compact-to-detail.png` | https://recent.design/i/1sr9bt9-stock-ticker-card-interaction | pill with sparkline expands to a card that scrubs the day |
| content-as-hero | `content-as-hero-2.jpg`, `content-as-hero.jpg` | https://x.com/tomthings1/status/2023093014231732721 ; https://x.com/juxtopposed/status/2037207906588750229 (file -2) | the content (poster, artwork) is the hero; chrome stays out of its way |
| content-filling | `content-filling.png` | https://recent.design/i/1pd6afn-ai-spreadsheet-fill-interaction | AI result lands in a real table; the gradient bloom exists only while generating |
| contours | `contours.png` | https://recent.design/i/k584efx-rare-disease-cluster-explorer | clusters drawn as contour rings; the visual is the data |
| countdown-hero | `countdown-hero.jpg` | https://x.com/RhysSullivan/status/2108597980056211943 | countdown to the next event as the hero |
| cursor-field | `cursor-field.jpg` | https://x.com/emilkowalski/status/2036778116748542220 (video frame) | dots pushed away by the cursor with cubic falloff, spring back |
| dark-done-well | `dark-done-well.jpg` | https://x.com/nizamdesign/status/2115126379025141819 | dark dashboard that holds up: quiet surfaces, ghost prior markers, one lit accent |
| dash-baseline | `dash-baseline.jpg` | https://mobbin.com/screens/80b7eac4-d31c-45ea-90d2-0d8e83141950 (shipped) | 7-day bar sparkline where zero days are short dashes on the baseline, so a quiet week still shows its days and one spike stands out; errors in red even at zero: take the dashed zero days, leave the dark dashboard shell |
| data-on-photo | `data-on-photo.jpg` | https://x.com/akwaabaaa/status/2057494799444304123 | route drawn on an aerial photo |
| data-typography | `data-typography.png` | https://x.com/yugal_one/status/2117891987127034226 | tabular figures, label/value hierarchy, one weight step |
| device-readout | `device-readout-2.jpg`, `device-readout.png` | https://recent.design/i/zuidimn-boarding-pass-scanner ; https://layers.to/layers/clt2pfvza000zig0dm35bybuj-tactile-calculator-for-apple-watch-light-mode (file -2, concept) | device LCD shows state (READY/READING/ERROR/SUCCESS); file -2 keeps unlit segments faintly visible behind the lit digits: take the ghost segments, leave the calculator body and keys |
| display-rows | `display-rows.jpg` | https://layers.to/layers/clxnf79cv0056jp0d0ncwgqaq-office-desk-booking-app (concept) | list rows set at display size (place names) with one small meta line under each (address, availability %) and an arrow at the row's top right: take the type scale of the row, leave the one-blue palette |
| dither-charts | `dither-charts.jpg` | https://x.com/grimcodes/status/2075780400199446966 | dither as chart fill |
| dither-decay | `dither-decay.png` | own build (research eval render, not a third-party source): eval/dose halftone 390-light | decay curve as orange dither, dense at the line, thinning below; the figure in dot numerals |
| dither-photo | `dither-photo-2.jpg`, `dither-photo.jpg` | https://x.com/ayodeleee_/status/2053841584467124676 ; https://x.com/_madebygray/status/2101463932158566699 (file -2) | photo rendered as halftone/dither in one hue |
| domain-artefact-success | `domain-artefact-success.png` | https://recent.design/i/11mncji-ipo-allotment-status-screen | success state as the domain artefact (engraved share certificate) |
| domain-instrument | `domain-instrument.jpg` | https://www.are.na/block/19581018 | domain instrument (helm) as the dashboard |
| domain-object-picker | `domain-object-picker.png` | https://recent.design/i/xub7uik-film-filter-selector-ui | presets drawn as the domain object (film canisters), not swatches |
| domain-object-product-world | `domain-object-product-world.jpg` | https://mobbin.com/screens/2ddb026d-7d04-4d9a-9313-b4a2c6a87098 | product-world object as the main view |
| dot-matrix-cells | `dot-matrix-cells-2.jpg`, `dot-matrix-cells-3.jpg`, `dot-matrix-cells.jpg` | https://x.com/sonia_axion/status/2118114802484867284 ; https://x.com/uihasan2828/status/2108876118854123938 (file -2) ; https://layers.to/layers/clvjbd6dt001ol70kpiz1u6et-daily-focus-widget (file -3, concept) | accent cells only where something fired; dot sparklines per KPI; file -3 draws a bar chart as columns of stacked dots under the figure: take the dot columns, leave the green squircle and glow |
| dot-numerals | `dot-numerals.png` | own build (research eval render, not a third-party source): eval/dose halftone 390-light | figure set in a dot-matrix numeral face |
| engraved-objects | `engraved-objects.jpg` | https://x.com/i/web/status/2121287548349857849 | engraved line objects as the illustration language |
| field-sections | `field-sections.jpg` | https://x.com/sajon_co/status/2116711849932763575 | full colour-field sections with tonal text |
| figure-dimmed-decimals | `figure-dimmed-decimals-2.jpg`, `figure-dimmed-decimals.jpg` | https://x.com/AbatiSamuel/status/2122254232980275590 (m7) ; https://mobbin.com/screens/4d628a74-0e1a-4a5e-9828-0c33899f44c9 (file -2) | whole part of the figure full strength, decimals dimmed |
| ghost-prior | `ghost-prior.jpg` | https://x.com/nizamdesign/status/2115126379025141819 | ghost prior-period markers in a funnel |
| gradient-depicts | `gradient-depicts-2.jpg`, `gradient-depicts.jpg` | https://x.com/sajon_co/status/2120909827069313199 ; https://x.com/JordanAmblin/status/2121610483438674352 (file -2, video frame) | gradient that depicts something (aurora, light on a dial), not decoration |
| grain-illustration | `grain-illustration.jpg` | https://x.com/aydaoz/status/2120148797422711110 | grain illustration per room or device |
| halftone-dot-field | `halftone-dot-field.jpg` | https://x.com/BlessCreatics/status/2051264013829562442 | dot field thinning toward the copy |
| hatched-remainder | `hatched-remainder.jpg` | https://x.com/adhamuxi/status/2047210409648947327 | pace marker plus hatched projection |
| heatmap-funnel | `heatmap-funnel.jpg` | https://x.com/jubayer6910/status/2116970231793058125 | weekday x hour heatmap, square-segment funnel |
| hobby-kit | `hobby-kit.png` | https://recent.design/i/okkc3w9-digital-stamp-collection-site | whole UI is the hobby kit: binder holes, graph paper, loupe, catalogue codes in mono |
| keycap-depth | `keycap-depth.jpg` | https://x.com/LynelDesign/status/2111383376251027661 (concept) | key with a visible lower skirt and a dished top inset, so it reads as pressable depth: take the skirt and inset geometry, leave the all-white keyboard |
| lens-slide | `lens-slide.jpg` | https://x.com/Barbapapapps/status/2115895352851370281 (video frame) | slide-to-delete: thumb grows into a lens on grab, springs home on early release |
| mascot-states | `mascot-states.jpg` | https://x.com/kartikhq/status/2051209252409417889 | mascot changes per state |
| module-hue | `module-hue-2.jpg`, `module-hue.jpg` | https://www.cosmos.so/e/482839588 (concept) ; https://mobbin.com/screens/df005e64-1fa3-4882-a2a5-43852b1da768 (file -2, shipped) | each module owns one hue, used only on its title and toggle; file -2 tints each module's dark panel with its own hue: take hue as module identity, leave the pedal skeuomorphism and the saturated stat tiles |
| mono-voice | `mono-voice.jpg` | https://x.com/ayodeleee_/status/2053841584467124676 | two-tone mono headline (grey and white words) |
| morph-pill | `morph-pill.jpg` | https://x.com/nitishkmrk/status/2054518189019783553 (video frame) | one pill: label to progress bar to check to label |
| onboarding-headline | `onboarding-headline.jpg` | https://x.com/notevenclose99/status/2122210252397621332 (m8) | one condensed serif headline with a step counter |
| one-ink | `one-ink.png` | own build (research eval render, not a third-party source): eval/tidewater statement 1280-light | one ink colour for the whole statement |
| photo-tile | `photo-tile.jpg` | https://x.com/tobiadonadon_/status/2115551475397259642 | one photo tile among data tiles |
| pixel-block-fill | `pixel-block-fill.jpg` | https://x.com/shihaabbbb/status/2060338383684260123 | brand pixel blocks as bar fill, serif caps annotations |
| proportional-blocks | `proportional-blocks-2.png`, `proportional-blocks-3.jpg`, `proportional-blocks.jpg` | https://www.cosmos.so/e/1255535937 ; own build (research eval render, not a third-party source): eval/relay dither 1280-dark (file -2) ; https://www.cosmos.so/e/1984470347 (file -3, concept) | block areas proportional to value; tally bar as dither or hatch fills; file -3 sets two block heights to their percentages and stacks one stat per flat band: take the sized blocks, leave the serif display and the palette |
| radial-timeline | `radial-timeline.png` | https://recent.design/i/hydso8e-kept-memory-visualization | concentric radial timeline, now at the centre, two colours |
| readout-needle | `readout-needle-2.jpg`, `readout-needle.png` | own build (research eval render, not a third-party source): eval/dose bedside 390-light ; https://layers.to/layers/clvo098pv004llf0dfpl6jilh-fm-radio-widget-dark-theme (file -2) | one lit readout, tick scale, needle at now |
| reframed-unit | `reframed-unit.png` | https://recent.design/i/xj080k0-banking-app-work-hours | spend shown as work hours, euro amount small below |
| restrained | `restrained.jpg` | https://x.com/isaacdsign/status/2121516483574394894 (Quillfen table, m10) | near-monochrome table, colour only on status |
| sampled-from-art | `sampled-from-art.jpg` | https://x.com/juxtopposed/status/2037207906588750229 | screen colour sampled from the artwork |
| serif-titles | `serif-titles.jpg` | https://x.com/i/web/status/2121287548349857849 | serif titles over a mono/sans system |
| shared-thumb | `shared-thumb.jpg` | https://x.com/keviduk/status/2115445879725256843 (video frame) | toggle, segmented, slider, stepper share one thumb geometry |
| signal | `signal-2.jpg`, `signal.png` | own build (research eval render, not a third-party source): eval/dose halftone 1280-light ; https://dribbble.com/shots/22036898-Nothing-Widgets-2-0 (file -2, concept) | one orange mark, only on now; file -2 keeps red only for live and recording states across a whole widget set: take the reserved red, leave the dot-matrix widget look |
| split-bar-kpi | `split-bar-kpi.jpg` | https://x.com/nizamdesign/status/2116443867801423882 | KPI with a sentence unit and a split bar |
| split-legend-keys | `split-legend-keys.jpg` | https://savee.com/i/Dc7Xid4/ (concept) | each key carries its main label over its shift label in inverse; hairline brackets with a label group related controls (GAIN, BPM to METRONOME): take the split legends and bracket groups, leave the device body and orange |
| staged-sheet | `staged-sheet-2.jpg`, `staged-sheet.jpg` | https://x.com/desdivj/status/2117204237868466336 (video frames v1, v3) | sheet rows stagger in, then the CTA enables; data swaps in place |
| state-card | `state-card.jpg` | https://x.com/tobiadonadon_/status/2115551475397259642 | card colour = state |
| textured-slider | `textured-slider-2.jpg`, `textured-slider.jpg` | https://x.com/zzzzshawn/status/2114546010647380448 (video frame) ; same post, v2 still (file -2) | remainder texture per slider (ticks, dither, hatch); fill edge dissolves into the pattern |
| tick-bar-cells | `tick-bar-cells.jpg` | https://x.com/jubayer6910/status/2115884163794645427 | open-rate column drawn as about 20 ticks beside the % |
| tick-ruler | `tick-ruler-2.jpg`, `tick-ruler.jpg` | https://x.com/JordanAmblin/status/2121610483438674352 (video frame) ; https://layers.to/layers/clymt0h3l002hjh0jufpo6hrh-time-zones-widget (file -2) | ruler with a now tick and an alarm window |
| time-window-bar | `time-window-bar-2.jpg`, `time-window-bar.jpg` | https://mobbin.com/screens/5326ce88-bcbf-484c-b0fd-56b88a8b2871 ; https://layers.to/layers/cm2gl4zqq000wmf0cjafovu2d-smart-watch-interface (file -2, concept) | time window bar on a day axis; file -2 puts tick marks inside the sleep bar and marks REM stretches with their start times: take the ticked bar with labelled segments, leave the orange and the watch face |
| tint-segment-bar | `tint-segment-bar.jpg` | https://nicelydone.club/examples/screens/31a844e1-b1c1-407f-8d5d-cb23bf5025eb (shipped) | segmented bar where the parts of one group are tints of one hue and the remainder is a contrasting hue, with a legend under each group; light display figures in ruled stat cells: take the tint-family grouping, leave the lilac and lime |
| tinted-offset-shadow | `tinted-offset-shadow.jpg` | https://mobbin.com/screens/5e460c00-e4d5-47de-87d4-79707381b45d (shipped) | hard offset shadow in the card's category tint, matching the ring and sublabel colour: take shadow colour as category, leave the outline-cartoon style and type-on-path rings |
| zoned-bar | `zoned-bar.jpg` | https://x.com/adhamuxi/status/2047210409648947327 | threshold-zoned segmented bars |

### Pond video originals (motion techniques, not copied)

Library root: `~/Pond/My Pond.pond/items/`. The still in `techniques/` is one frame; the motion lives in the video.

| slug | folder | video |
|---|---|---|
| tick-ruler | `~/Pond/My Pond.pond/items/01M7FAE34KEVRJDB86WZXTVCS0.info/` | video-1.mp4 |
| barcode-timeline | `~/Pond/My Pond.pond/items/01M57STN1VNCT71DYGN13CT2MN.info/` | video-1.mp4, video-2.mp4 |
| textured-slider | `~/Pond/My Pond.pond/items/01M6GZ5R1WRM6N5HMX4VM6Q1C7.info/` | video-1.mp4 |
| morph-pill | `~/Pond/My Pond.pond/items/01M57STN2766B427RZTSFQN3HZ.info/` | video-1.mp4 |
| staged-sheet | `~/Pond/My Pond.pond/items/01M7BPJRFT5VE8JM8KK3S0BXV9.info/` | video-1.mp4 to video-4.mp4 |
| shared-thumb | `~/Pond/My Pond.pond/items/01M63R0TP6MV7FAK7Y5AH7QAMZ.info/` | video-1.mp4 |
| lens-slide | `~/Pond/My Pond.pond/items/01M6GZ5R1WEKV99P53EFHTM7ZK.info/` | video-1.mp4 |
| cursor-field | `~/Pond/My Pond.pond/items/01M57STN2B02YTH9YSX39MWDBZ.info/` | video-1.mp4 |

## Gaps

Patterns with no gold (from the v2 audit, minus what v3 added). Build these from the Stageshow code gold or from first principles, and flag the thin spot in the report.

- Tables: no mobile table or data grid, no inline-edit still, no bulk-select action bar
- Forms: no validation or error state image, no multi-step wizard, no long form
- Onboarding: no permissions prompt, no OTP or 2FA, no magic-link sent, no SSO error
- Empty and failed: no first-run with sample data, no failed or error screen, no loading skeleton image (Copilot net-income loading is in the Mobbin collection, not copied)
- Charts: no populated shipped analytics page, no scatter; timeline and heatmap exist only as concepts
- Lists: no swipe actions, no photo-led list (commerce, places, media)
- Navigation: no web top-nav app, no Android nav, no iPad split view
- Detail: no record or person detail, no product or listing detail with media
- Command palettes: both web examples are generic cmdk; no result types, previews or keyboard hints
- Pricing: no marketing pricing page, no checkout
- Landing: only the two live captures and one dither concept (`screens/web/media/`)
- Also missing: maps beyond concepts, calendar beyond Daymark, kanban, editor or canvas, chat and AI answer (code gold only), toasts, destructive confirm (only the Airbnb action sheet), file upload
- Mobbin categories never collected (session logged out): health and fitness, travel tracking, media, Things/Bear/Craft, Raycast, Ramp, Arc, Oura, Partiful, Opal

## Pond rules

Moved from v2 `refs/pond.md`. These are other designers' recipes: the project's direction decides whether one applies.


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

## Collections

- Mobbin collection "build-ui gold": https://mobbin.com/collections/4f891cbb-c176-435f-b6fa-380130e1e6e5/mobile/screens (v2 set of 52 screens; the kept ones are in `screens/`). The user's saved Mobbin screens, 52 in total, are also in the research folder, not copied here.
- Pond library "My Pond": 448 saves scanned. Dropped after viewing in v2: FSearch (empty window), iOS map-bubble collage (decorative). Codenotch usage popover and the Mononote and Quest iOS saves were cut by the audit.
- Direction images from v2 (`directions/`) are now filed by pattern or technique: 21 were already in `screens/` or `techniques/`, 17 more are in `techniques/`, and 18 were dropped (4 lower-resolution copies of files here, 14 whole looks with no technique to take). None remain outside this folder.

## Stageshow

`stageshow/` is Stageshow 1.1.1 (MIT, Benji Taylor): `examples/`, the React `kit/` they import, `teaching/` bad and good pairs, and `teaching.md` describing each pair.

- **Take:** row pitch and padding, control sizes, how a state changes in place (`kit/motion/`: `Collapse`, `Roll`, `Swap`, `Count`, `States`, `Popover`), field and button geometry (`kit/controls/`, `kit/parts/`), menu, toast and chart parts.
- **Leave:** its look (the kit's warm greys, white cards and blue accent are one look; yours comes from the direction), `Stage`, `Act` and the cursor (illustration machinery), `Bar` placeholder lines (real UI shows real data), crops, bleeds and plates (real screens are whole), and the faux product chrome of the product studies.
- **Bad and good pairs:** `teaching/` shows faults beside fixes (composition, continuity, contrasts, details, edges, relationships, text settle). Use them to name a fault you see in your own shot.

Code gold by pattern (`stageshow/examples/`):

| pattern | example |
|---|---|
| Dashboard, overview | `subscriptions` (a figure that rolls with its cause), `dark-hero`, `story` |
| Data table, inline edit | `table-edit` (cell edited in place, the total it feeds updates after), `excel` |
| List and detail | `gmail` (rows, hover actions, archive, undo toast), `linear`, `notion` |
| Form, validation | `form-error` (error on the field that caused it, cleared by fixing it, the button confirms on itself), `controls` |
| Settings | `panel-annotation` (a settings panel and what it changes), `controls` |
| Empty, loading, failed | `loading` (skeleton at the content's own geometry, rows resolving top to bottom) |
| Search, command menu | `linear` (command menu and assignment), `raycast`, `wikipedia` (search suggestions) |
| Navigation | `finder`, `finder-glass` (sidebar the full height of its window) |
| Modal, sheet, popover | `share` (popover: an email becomes a chip, a role menu), `ai-cards` |
| Activity, notifications | `presence`, `slack`, `google-docs` (comment and reply) |
| Chart | `chart-scrub` (hairline and dot follow the pointer, the headline value rolls to the point under it) |
| Drag, reorder, upload | `reorder`, `freeform-drag`, `calendar`, `upload` (upload row with progress that settles as a file row) |
| Chat, AI answer | `ai-chat` (question sent, thinking, answer streams in with its height, sources last), `messages`, `imessage`, `telegram` |
| Phone gestures | `swipe` (press, swipe, throw at the finger's speed, the gap closes), `phone-touch`, `dynamic-island` |
