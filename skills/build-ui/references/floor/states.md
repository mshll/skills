# States and behaviour

Product behaviour that holds on both platforms; web-only items name the API. Mined from the UI Skills catalog and the Vercel web interface guidelines; tags name the source. Layout of empty, loading and error regions: `layout.md` §11. Their copy: `content.md`.

## States: empty, loading, error, success

- Treat five blank causes as five different states: first use, user-cleared, no results, failed load, denied access. Never show an error or a denied access as an empty state. [mrstev3n/balise-ui-states]
- First-use empty: say what will appear and give one next action that really exists. [ibelick/baseline-ui, balise-ui-states]
- No results: keep the query and the active filters visible, and offer a reset. [balise-ui-states]
- Loading takes the smallest scope that is pending: a control, then a region, then the page. One region loading never blanks the rest. [balise-ui-states]
- No spinner or shimmer for work that resolves in under 300ms: the flash reads as a glitch. [remove-animations]
- Content never waits at `opacity: 0` for an observer or script to reveal it; if the script fails it stays invisible. [remove-animations]
- Toast timers pause while the tab is hidden. [emil-design-eng]
- Use a skeleton only when the final structure is known; otherwise use inline status text. [balise-ui-states, baseline-ui]
- On refresh or mutation, keep the existing data on screen and usable, and mark it as updating. [balise-ui-states]
- Show determinate progress only when the percentage is measured. [balise-ui-states]
- Loading text ends with the ellipsis character: "Loading…", "Saving…". [vercel-wig]
- Expose loading to assistive tech: `aria-busy="true"` on the region, or `role="status"` text. [ibelick/fixing-accessibility, addyosmani/frontend-ui-engineering]
- An error message says what happened, what was kept, and the specific recovery action. Error codes are secondary text. [balise-ui-states, vercel-wig]
- Show errors next to the place where the action happened. [baseline-ui]
- Size success feedback to its consequence: inline for a local change, toast for a reversible one, persistent banner when it affects later decisions, a completion screen for a finished flow. [balise-ui-states]
- An optimistic update has a rollback path and a visible failure state. [balise-ui-states, frontend-ui-engineering]
- On timeout or offline, say what is queued, what is blocked, and what is unknown, and block duplicate payment, upload, or destructive submits until the status is known. [balise-ui-states]
- Permission denied names the real boundary and offers only paths that exist: sign in, request access, contact owner, or a safe exit. [balise-ui-states]
- A toast that carries an action or an error stays until dismissed. Critical information never lives only in a toast. [krehel-accessibility, fixing-accessibility]

## Worst case

- Fixture values are realistic or come from the real limits (validation schema, column size, `maxLength`); "no limit found" is a finding to report. [break-ui]
- A dev-only data switch at the data boundary (`?data=worst|empty|one|1000`) lets the gate render every state from one URL. [break-ui]
- Add these rows to the fixture: Vietnamese or Thai diacritics, a newline in a single-line field, exactly page size and page size + 1 items, two identical names, every status at once, the current user in the list, a broken image URL. [break-ui]
- Times: "just now" for now, relative up to 7 days then an absolute date, future dates as "in 3 days", via `Intl.RelativeTimeFormat` and `Intl.DateTimeFormat` in the user's time zone. [break-ui]
- Badges get `white-space: nowrap; flex-shrink: 0`; text boxes with a tight line-height get no `overflow: hidden` (it clips tall scripts); images use `object-fit: cover`. [break-ui]
- Test every list against a worst-case fixture fed through the same data boundary as the demo data: a long hyphenated name, a 60+ character unbreakable email, a 1-letter name, every optional field missing, counts of 0, 1, and 1,284, non-Latin text, emoji. [emilkowalski/break-ui]
- Check that fixture at the real container width, at 320px, at the widest layout, at 200% zoom, in dark mode, and in RTL. [break-ui, krehel-layout]
- Test the realistic upper list length: 1,000+ rows when the list is not paginated. [break-ui]
- Avatars, icons, badges, and trailing actions get `flex-shrink: 0`; the text column gets `min-width: 0` (`minmax(0, 1fr)` in grid). [break-ui, vercel-wig, krehel-layout]
- Emails, URLs, IDs: `overflow-wrap: anywhere`. Never `word-break: break-all` on headings. [break-ui]
- When row text can wrap, top-align the avatar (`align-items: flex-start`). [break-ui]
- A missing optional field omits its whole line; an en dash marks a missing value only inside a column or a label-value pair. [break-ui]
- Pluralize with `Intl.PluralRules` ("1 member", "2 members"); never hardcode the plural. [break-ui]
- Initials come from grapheme clusters (`Intl.Segmenter`), first and last word, skipping Jr, Sr, II, III; a failed avatar image falls back to initials via `onError`. [break-ui]
- Pick per field: wrap identifying names, end-truncate secondary metadata, middle-truncate file names, paths, hashes, and shared-domain emails, clamp card previews to 2 lines. [break-ui]
- Every truncated value has a way back to the full text: `title`, a keyboard-reachable tooltip, or a detail view. [break-ui, krehel-typography, krehel-layout]
- Text boxes use `min-height`, never fixed `height`; translated labels grow, short labels grow the most. [krehel-layout, break-ui]

## Forms

- Every input has a `<label for>` or a wrapping `<label>`. A placeholder is never the label. [krehel-accessibility, vercel-wig]
- Placeholders show an example pattern and end with "…". [vercel-wig]
- Set `autocomplete`, a meaningful `name`, the right `type` (`email`, `tel`, `url`, `number`) and `inputmode` (`numeric` for codes, `decimal` for amounts). [vercel-wig, emilkowalski/mobile-native]
- Set `enterkeyhint` (`send`, `search`, `done`) so the return key names its action. [mobile-native]
- Emails, codes, usernames: `spellCheck={false}`, `autocapitalize="none"`, `autocorrect="off"`. [vercel-wig, mobile-native]
- `autocomplete="off"` on non-auth fields that would trigger the password manager. [vercel-wig]
- Never block paste. [vercel-wig, baseline-ui, krehel-accessibility]
- Inputs render text at 16px or larger on touch devices (iOS zooms below 16px and does not zoom back). [mobile-native, krehel-typography]
- Checkbox or radio and its label form one hit target with no dead zone. [vercel-wig, krehel-accessibility]
- Keep submit enabled and validate on submit; on failure set `aria-invalid="true"`, point `aria-describedby` at inline error text, and focus the first invalid field. [krehel-accessibility, vercel-wig]
- Submit disables and shows a spinner only once the request starts, to prevent duplicates. The work loads inside the same button, its width held. [vercel-wig]
- One disabled treatment per control kind, the same everywhere.
- If a control must be disabled, show why next to it; a tooltip on a natively `disabled` control is unreachable, so use text or `aria-disabled`. [fixing-accessibility, krehel-accessibility, balise-ui-states]
- Keep every entered value through a failed submit. [balise-ui-states]
- Warn before leaving with unsaved changes (`beforeunload` or a router guard). [vercel-wig]
- `autoFocus` only on desktop and only on a single primary input. [vercel-wig]
- An input boundary reaches 3:1 against its background (WCAG 1.4.11). [krehel-ui, krehel-accessibility]
- Button labels name the result ("Save API key", not "Continue"). [vercel-wig]
- Destructive or irreversible actions use an AlertDialog or an undo window, never immediate execution. Prefer undo for slips; keep confirmation for the truly irreversible so people do not learn to click through. [baseline-ui, vercel-wig, emilkowalski/apple-design]
- A confirm button names the action ("Yes, delete"); in a "give something up" dialog the keep option is the primary.

## Tables and data

- Tables use `<table>` with `<th scope>` headers (web); row height, alignment and tabular figures are `data.md`, Tables, and the frame is `surfaces.md`. [fixing-accessibility]
- Never truncate numbers, amounts, dates, or anything the user compares; give them the room. The one exception: an overview may show a compact amount ("$1.4M") when the exact value is one tap or hover away (`data.md`, Figures). [break-ui]
- Format with `Intl.NumberFormat` and `Intl.DateTimeFormat` in the user's locale; guard `null`, `NaN`, `undefined` before render. [vercel-wig, break-ui]
- Virtualize lists over 50 items (`virtua`, `content-visibility: auto`), or paginate, and say which. [vercel-wig, break-ui]
- Filters, sort, tabs, pagination, and expanded panels live in the URL query. [vercel-wig, frontend-ui-engineering]
- Data grids, tree views, and comboboxes follow the WAI-ARIA APG pattern via a headless primitive; arrow keys move inside, Tab moves between widgets, roving tabindex. [krehel-accessibility, accesslint]
- Escape user content once, at render; never `dangerouslySetInnerHTML` user data. [break-ui]

## Navigation and overlays

- Navigation is `<a>`/`<Link>` so Cmd/Ctrl-click and middle-click work; actions are `<button>`. [vercel-wig, krehel-accessibility]
- On a client route change, update `document.title` and move focus to the new view's `<h1>` or `<main>`. [krehel-accessibility]
- One visible `<main>`; a "Skip to content" link is the first focusable element when nav precedes it. [krehel-accessibility, vercel-wig]
- Every screen answers: where am I, where can I go, how do I get out. No dead ends. [apple-design, balise-ui-states]
- Name nav items for their contents ("Library", "Progress"), not umbrellas ("Home"). [apple-design]
- One primary action per view; more than 3 secondary actions go into a menu. [krehel-layout]
- Overlays: Escape closes, focus moves inside on open and returns to the trigger on close. Prefer `<dialog>` with `showModal()`; a custom overlay sets `inert` on the background plus `role="dialog"` `aria-modal="true"`. [krehel-accessibility, fixing-accessibility]
- Opening a dialog does not scroll the page. [fixing-accessibility]
- Enter submits a dialog's form; Cancel is never pre-focused.
- One backdrop recipe for every dialog.
- An error from a modal that has closed shows as a toast on the page beneath; it is the only place left to see it.
- A panel exits along the path it entered, and a menu or popover originates from its trigger. [apple-design]
- Modal tasks get a dimming scrim; a parallel non-blocking panel gets no scrim. [apple-design]

## Dashboards

- Name one focal element per view and make it win by size, weight, or contrast; demote the rest. [interface-design]
- Express each metric in the form that fits it (hero number, inline stat, sparkline, progress bar, delta), not identical icon-number-label boxes. [interface-design]
- Write the direction's density as numbers and hold them (example: 12 to 16px panel padding reads as a tool, 24px as a brochure). [interface-design]
- Group spacing at least 2x the spacing inside a group (8px in, 16px+ between). [krehel-layout]
- Hold the expanded layout until content stops fitting; breakpoints come from content, components adapt with `@container`. [krehel-layout]
- Show stale data as stale; show auto-refresh with a pause control once updates are ongoing (WCAG 2.2.2). [balise-ui-states, krehel-accessibility]
