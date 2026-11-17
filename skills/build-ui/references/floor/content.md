# Content

Half the polish in the user's strongest saves is the content: real names, units, magnitudes, consequences and verbs from the domain. Generic copy and tidy fake data read as generated faster than any visual tell.

## The fixture

Every screen is built on a fixture: real-shaped data for this domain, fed through the same data path as real data. Write it before the first component.

- **Names vary** in length, origin and form: "Kessler-Moreau Architecture and Interior Design", "Ash & Co", "Nguyễn Thị Hương Studio". Never the same name twice in a list.
- **Magnitudes are uneven**: $860.00 beside $1,048,500.00; 3 rows overdue by 4 days and one by 94. Round numbers everywhere read as invented.
- **Units on every figure**, in the domain's own units: kWh, mg, pts, req/s, nights, covers.
- **Identifiers look real**: INV-2291, 4410-2283-07, `3f9a2c1`, ••••• 1801, 0x932..B6Ed.
- **Time is specific**: "Wed, Dec 16 · 9:00 AM", "14 min ago", "3 days left". Relative for recent, absolute for scheduled.
- **One worst case per field**: the longest name, the largest amount, zero, missing (shown as an en dash), a failed record, an 80-character title.
- **Field manifest** when variants show records: mark each field Real (always present), Sometimes, or Aspirational. Build for Real; design the absence of Sometimes; cut Aspirational.

Fixture data is never shown to real users as real data. A first-use state shows its own empty or sample-labelled content.

## Copy

- **Subtitles answer "which ones" or "sorted how"**: "Newest first · showing 8 of 24", "Sorted by deadline, not by when the lead came in", "5 invoices not reminded in 7 days".
- **Secondary lines carry data**, never filler: "Sent to 17,960 recipients", "99.3% of 17,640 · 128 bounced".
- **Actions name the object and the count**: "Send 5 reminders", "Hold 18 credits", "Book walkaround", "Roll back to e71b04d". A disabled action says why next to it: "Hold or fix 18 flagged subscribers first".
- **A consequence is stated in the domain's terms**, with the number and one action: "18 subscribers would cause Tri-County to reject this file. 11 account mismatch · 4 closed · 3 over-allocated [Review flagged]". One consequence band per surface, placed between the summary and the data, only while the condition holds.
- **Decisions are cards, not toasts**: "Needs your decision: 19 samples time out in the solver at 30s. Raise the timeout to 120s and rerun, or leave them out?" with each answer as a button.
- **Empty states say what is missing and what to do**: "No invoices overdue. The next one falls due Nov 20." Echo the search term in no-results.
- **Descriptions explain the mechanism**, one sentence: "Each key is pinned to one project." A description that restates its title goes.
- **Labels:** capitals for product names and acronyms ("API"), lowercase common nouns inside phrases ("Create a key"); "(optional)" in a lighter ink after the label; a range in brackets ("Runs (24h)").
- **Value the user holds** is named from the holder's side in the product's own unit ("your balance", "your credits"), never framed as "free".
- **Say a repeated phrase once.** A phrase or unit that would repeat on every row ("Under 50 at", "days late", "mg") goes in the column header, section header or sheet header once; rows carry only their values. A delta states its reference once beside it ("later than 10:33 PM").
- **Shorter on a phone:** drop qualifiers the section title supplies; prefer a shorter word to a truncated one.
- **Proofread every string.** Typos and a figure reused for two meanings were the most visible slips in the saves.

## Copy tells

Each is cut, with the positive move beside it.

| Tell | Move |
|---|---|
| A sentence that could appear unchanged in another product | Rewrite with a fact only this product has: a name, a number, a rule |
| Invented specifics for decoration ("trusted by 10,000 teams") | Use only figures the brief or fixture gives |
| A strip of figures over one-word labels | Put each figure in the sentence it proves, or give each its comparison |
| Contrast frames ("not X but Y", "rather than", "instead of") | State the thing directly |
| Labels that repeat the heading, captions that explain the obvious | Delete; let the layout explain |
| "Welcome back, Name!" as the page title | Title the page by its job: "Receivables", "Today" |
| Title Case labels, "..." for an ellipsis, em dashes in UI copy | Sentence case, "…", a comma or colon |

## Quiet normal, loud exception

The normal state is quiet: a dot and a word ("● Ready"), plain ink, no chip. Only exceptions get colour, a tinted chip and their own icon (mismatch, closed, over-allocated). Red text is kept for what is late or about to be; never for every date. When everything is fine, the screen says so in one line and gets out of the way.
