# Gold

Pick the closest one before you build, open it, and write down three concrete things you copy. Code golds (Stageshow) show geometry, states and motion you can read in CSS and TSX; image golds (Mobbin, Pond) show layout and hierarchy from real products. Measure before quoting a number from an image.

## By pattern

| Pattern | Code gold (`stageshow/examples/`) | Image gold (`refs/`) |
|---|---|---|
| Dashboard, overview | `subscriptions` (a figure that rolls with its cause), `dark-hero`, `story` | web `dashboard/`, `chart-analytics/`; ios `dashboard/`; pond `shadcn-dark-dashboard`, `health-dashboard-cards` |
| Data table, inline edit | `table-edit` (cell edited in place, the total it feeds updates after), `excel` | web `data-table/`; pond `invoices-dark-table` |
| List and detail | `gmail` (rows, hover actions, archive, undo toast), `linear`, `notion` | web `list-detail/`; ios `list-detail/`; pond `notes-sidebar-list` |
| Form, validation | `form-error` (error on the field that caused it, cleared by fixing it, the button confirms on itself), `controls` | web `form/`; ios `form/`; pond `t3-edit-task-modal` |
| Settings | `panel-annotation` (a settings panel and what it changes), `controls` | web `settings/`; ios `settings/`; pond `settings-security` |
| Empty, loading, failed | `loading` (skeleton at the content's own geometry, rows resolving top to bottom) | web `empty-state/`; ios `empty-state/` |
| Search, command menu | `linear` (command menu and assignment), `raycast`, `wikipedia` (search suggestions) | web `search-command/`; ios `search-command/` |
| Navigation | `finder`, `finder-glass` (sidebar the full height of its window) | web `navigation/`; ios `navigation/` (tab bars) |
| Modal, sheet, popover | `share` (popover: an email becomes a chip, a role menu), `ai-cards` | web `modal-sheet/`; ios `modal-sheet/` |
| Activity, notifications | `presence`, `slack`, `google-docs` (comment and reply) | web `notifications-activity/`; ios `notifications-activity/` |
| Chart | `chart-scrub` (hairline and dot follow the pointer, the headline value rolls to the point under it) | web `chart-analytics/`; ios `chart-analytics/` |
| Drag, reorder, upload | `reorder`, `freeform-drag`, `calendar`, `upload` (upload row with progress that settles as a file row) | |
| Chat, AI answer | `ai-chat` (question sent, thinking, answer streams in with its height, sources last), `messages`, `imessage`, `telegram` | pond `quest-agent` |
| Phone gestures | `swipe` (press, swipe, throw at the finger's speed, the gap closes), `phone-touch`, `dynamic-island` | ios `pond/` |
| Sign-in, onboarding | | web `onboarding-sign-in/`; ios `onboarding-sign-in/` |
| Pricing, billing | | web `pricing-billing/` |
| Profile, account | | web `profile-account/`; ios `profile-account/` |
| Menu bar, utility panels | | pond `openusage-menubar`, `codenotch-claude-usage`, `claude-usage-panel`, `t3-composer` |

## Stageshow code gold

`stageshow/` is Stageshow 1.1.1 (MIT, Benji Taylor): `examples/`, the React `kit/` they import, `teaching/` bad and good pairs, and `teaching.md` describing each pair.

- **Take:** row pitch and padding, control sizes, how a state changes in place (`kit/motion/`: `Collapse`, `Roll`, `Swap`, `Count`, `States`, `Popover`), field and button geometry (`kit/controls/`, `kit/parts/`), menu, toast and chart parts.
- **Leave:** `Stage`, `Act` and the cursor (illustration machinery), `Bar` placeholder lines (real UI shows real data), crops, bleeds and plates (real screens are whole), and the faux product chrome of the product studies.
- **Bad and good pairs:** `teaching/` shows faults beside fixes (composition, continuity, contrasts, details, edges, relationships, text settle). Use them to name a fault you see in your own shot.

## Image gold

- `refs/mobbin.md`: 52 screens, web and iOS, two per pattern, with what to take from each. Mobbin collection "build-ui gold" holds the same screens.
- `refs/pond.md`: 16 screens and 14 rules from the user's saves. Its button recipes (gradient fills, lit top edges, 24px radii) are other designers' looks: where they conflict with `../references/tactile/`, tactile wins unless the user asks for that look.
- More: search Mobbin for the pattern (`mcp__mobbin__search_screens`), or browse inspora.design for credited visual references.
