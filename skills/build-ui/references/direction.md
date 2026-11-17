# Direction

A direction is the look of one product, derived from the product's world. It is a **signature** plus a value on each axis below. Layout, navigation and controls come from the plan and the floor: a user knows where everything is before they notice the look. The world lends the signature, colour, type, density, surfaces, imagery, motion character and voice. Nothing else.

There is no library of looks. Every direction is derived fresh from this product's mechanism and its audience's world. The toolbox (`toolbox/`) supplies techniques to draw a signature with; it never supplies a look.

## Which path

| The project has | Path |
|---|---|
| `DESIGN.md` with a Direction section | Use it. Skip this file |
| Tokens and components, no `DESIGN.md` | **Read** |
| Nothing, and this is its first screen | **Derive** |
| Nothing, and the user wants no variants ("just build it") | **Commit** |
| A direction or references named by the user | **Derive**, with theirs as candidate one |

## The signature

The signature is the product's one idea, drawn into the thing the user looks at most: its core figure, its main list, its main control or its key state. It is written as one sentence, "<the product's datum or state> drawn as <a form from the audience's world>":

- a phone battery draining overnight, drawn as a dither that is dense at the curve and thins below it (the charge itself)
- an alarm's sleep window, drawn as a detent tick ruler from night blue to dawn
- a billing month, drawn as a calendar with a dome marker on each payment day
- each campaign's open rate, drawn as a 20-tick bar in its table cell
- a single-purpose bread-proofing timer, drawn as one device with one lit LCD readout and a needle at now
- spending, reframed as hours of work ("52 h", the euro amount small below)
- a kiln studio's status colour, Ember, which appears only while something is firing or has failed

A signature is **earned** when it encodes a quantity, a state or the product's namesake. Test: remove it. If no information or meaning is lost, it is costume. A palette swap, a typeface, a dark mode or a surface treatment is never the signature on its own; they are axis values that serve it.

The signature lives on the focal data and repeats where that data repeats (the row, the detail view, the empty state, the notification). It stops at chrome: navigation, settings and forms stay quiet. Name where it shows and where it stops.

## Axes

Each axis is an open dimension. The examples are prompts, not a menu; a direction may take a value that is not listed.

| Axis | The question | Examples |
|---|---|---|
| Colour strategy | What does colour mean here? Write a rule per accent: when it appears and what it means | restrained (neutrals plus status; one accent for the primary and selection) · signal (one hue means now, live or attention, nothing else) · committed shell (the rail or frame takes the brand hue, the work area stays plain) · field (a hue per category or section, text in a dark shade of its own hue) · sampled (screen colour taken from the content's artwork) · one ink (a dark hue replaces black) · drenched (one saturated colour carries a whole screen, for one moment) |
| Ground | Light or dark, warm or cool, from one sentence of physical scene: who, where, what light | "a nurse at 3am in a dim ward" gives dark and warm; "an accountant at a bright desk all day" gives light and neutral |
| Type | One workhorse sans for UI. Where, if anywhere, does a voice face go? | none (identity from colour and data) · a serif for page and record titles · a display weight for the hero figure · dot or pixel numerals for one readout · a rounded derivative for a friendly consumer product · mono as the whole voice when the product is an instrument (logs, terminal agents) |
| Density | How much per screen, from the scene's time and attention | compact ops (rows ~36px, body 13px) · regular (rows ~44px, body 14px) · roomy consumer (rows ~56-64pt, body 15-17pt) |
| Surface model | How layers separate | hairlines on one ground · white panels on a grey ground · raised controls with a ring and a short drop · tonal tiles with large radii · flat colour fields · stepped dark (lightness steps with solid outlines) · one object with a readout |
| Imagery | What pictures, if any, and what they carry | none · the user's content as hero · photography of people or places · grain or stippled illustration per record · engraved object cut-outs as entity icons · a map · a mascot whose states are system states · art generated from a seed per record |
| Motion character | How things move, from the product's temperament | crisp and fast (ops) · springy with a small overshoot (consumer) · stepped (readouts change in steps) · physical (detents, drags with weight) |
| Voice | How the copy sounds | plain and exact · calm lowercase · instructive ("Book their walkarounds first") · playful, once per flow |

**Product UI rarely varies type.** In the user's strongest saves nearly every product uses one plain sans; identity comes from the signature, the colour rule and the domain content. Vary those first. Type voice belongs mostly to titles, the hero figure and marketing pages.

## Derive

For the first screen of a new project. Each step ends on its criterion.

1. **Brief.** Write four lines. *Mechanism*: what this product does that others in its category do not, in one sentence. *Scene*: who uses it, where, for how long, under what light, and what else is on their screen. *Never like*: looks it must not resemble. *References*: each with what to take and what to avoid ("take the calm spacing, avoid the gradients"). Picks from a `/gather` board are references, each with its note as what to take. When the user gave neither never-like nor references, ask for both in one message, and offer `/gather` for the references; on "you decide", continue and mark them `(assumed)`. *Done when* the four lines exist.
2. **World.** List eight or more concrete things from the audience's world across at least three families: objects and instruments, documents and printed matter, places and light, materials, processes and rituals, signage and marks. Take them from the people's lives, beyond the software category. At most one may be the operator's own work tool (a terminal, a ledger, a control panel), and it can lend only its discipline (tight rows, ruled columns), never its look. Then name the **rut**: the look this category always ships, and its predictable opposite. Both are out, and so is every look in the calibration list below. *Done when* eight items in three families and both halves of the rut are written.
3. **Signatures.** Name the product's focal datum or state (from the plan's least data). Write five signature sentences for it, each drawn from a different world item, each using a technique from `toolbox/` or a new one. Strike any that fail the earned test, that cannot be read by someone with low vision (the value a texture or mark encodes is also written as a figure or word in the same row, or beside the mark), or that would survive unchanged in a rival product. *Done when* at least three signatures pass.
4. **Candidates.** Write five candidate directions, one line each: a one-word name, its signature, then its value on every axis. Run two tests on each and rework what fails. *Similar prompt*: would you arrive here for any brief in this category? *Category guess*: could someone guess this look from the category, or from the category plus your never-like list? Across the five, use at least three colour strategies, two grounds and two surface models. *Done when* five lines exist, each passes both tests, and the spread holds.
5. **Three.** Keep the best fit, the boldest that still fits, and the one least like those two. They differ in signature and in structure (emphasis, density, imagery, what is removed), never in paint alone: three palettes on one layout is one candidate. They also differ in paint: no two share a colour strategy, at most one is restrained, and at least one differs from the others in ground (dark, tinted, or a colour field from the scene) or in surface model. Three neutral light builds with one sans and black buttons are one look, however different their layouts. Each can be said in one sentence a stranger could tell from the other two. The user may also ask for the category standard played straight, at full polish; offer it in one line, never recommend it. *Done when* three sentences exist.
6. **Build.** Build the plan's first screen three times: the same content, fixture and states, one token file per candidate (`direction-<name>.css`, or one theme value in SwiftUI). All three at full fidelity: a polished option beside a sketch is a vote, not a choice. Each variant owns its chrome: nav, header and page frame come from its direction, not from a shared shell. Run the gate on each, then a blind review on each (`verify.md`, Blind review), given that candidate's step 4 line in place of `DESIGN.md`. A variant the reviewer calls "any product in its category" is reworked or replaced before Show. *Done when* three gates pass, each signature is on screen, and no blind review says "any product".
7. **Show.** Shoot each at desktop and phone width and show the three side by side: name, signature sentence, the axis values that differ, its trade-off and any licences. Lead with your recommendation and the reason. A rejection of all three is new information: write what it rules out, then return to step 3. *Done when* the user picks one.
8. **Record.** Write `DESIGN.md` from the built winner (format below), delete the other token files, and append the history row.

## Read

For a project with tokens and components but no `DESIGN.md`. Read its tokens, its three most used components and two of its screens. Name its value on each axis and any signature it already repeats. Write `DESIGN.md` from that. The app's own look is the source: add no colour, face, shadow or radius it lacks. A project with no signature gets that written as an open question, and `polish.md` is where one is proposed.

## Commit

Do Derive steps 1 to 4, take the best-fit candidate, state it to the user in two lines (name, signature, axes, licences) before building, then record it as in step 8.

## Calibration: current AI looks

Dated 2026-11. Each is out unless the user asks for it. Refresh this list when a new cluster shows up in review.

- Warm cream ground, high-contrast serif display, a terracotta or signal-red accent, italic accent words.
- Near-black with one neon accent, glowing edges, glass cards.
- Broadsheet hairlines, italic display serif, small tracked mono labels, numbered sections.
- Flat saturated ink, black boxes, hard offset shadows, heavy condensed display.
- Pastel or purple-blue mesh gradient behind a centred hero; glossy 3D icons.
- The neutral SaaS default: grey ground, white cards, Inter, one blue or violet accent, a row of four identical KPI cards, coloured icon tiles.
- The sterile default: white ground, grey hairlines, one system sans, a black primary button, no colour beyond status. Removing every tell from the neutral default lands here; it is a look, and it is out unless the scene asks for it ("an accountant at a bright desk all day" can; most scenes don't).

Your first palette and first display face are the model's prior; treat them as spent and choose again from the scene and the world.

## Licence

The user's standing design rules hold in every direction. A direction may license at most two of them, each tied to the signature and a place: "mono, for account numbers and catalogue codes only". A licence overrides a standing rule only because the user saw it and chose it: name each variant's licences at Show, and in Commit name them before building. Cases from the user's saves where a rule broke and the screen still worked:

- Pills: an exception status with its own icon, or a typed value the user edits (date, recurrence). Ordinary metadata stays plain text; the normal state stays a dot and a word.
- A row of metrics: one divided strip, or tiles whose figures each carry a different unit, comparison or chart. Identical boxes fail.
- Mono: identifiers compared character by character, or the whole voice of an instrument product. Mono labels for a "technical" mood fail.
- Gradients: only when the gradient depicts something (time of day, artwork colour, a rating scale, the namesake's light). Decorative mesh fails.
- Glow: only as a one-time event on the data mark (success), never on chrome.
- Small caps: annotations on a chart that carry values. Section eyebrows fail.

## DESIGN.md

Written after the first screen is built, from what was built.

```md
# Design

## Product
Mechanism: …
Scene: …
Never like: …

## Direction: <name>
Signature: <datum> drawn as <form>. Shows on: <every place>. Stops at: <where>.
Colour: <strategy>. <token>: <its rule>. <token>: <its rule>.
Ground: … · Type: … · Density: … · Surfaces: … · Imagery: … · Motion: … · Voice: …
Licensed: <at most two standing rules, each with its place>
Bans: <this direction's own list>

## Tokens
<path to the token file>

## References
<url or file>: take …; avoid …

## Decisions
YYYY-MM-DD: <decision> (<why>)
```

Every later design decision and every user correction is appended under Decisions with its date.

## History

`~/.claude/skills/build-ui/state/history.md` holds one row per project: date, project, signature technique, colour strategy, ground, typefaces, accent. Read its last five rows at Derive step 4: a candidate that repeats a recent row's technique and colour strategy together is reworked. Append one row at Record. Create the file with that header row when it is missing.
