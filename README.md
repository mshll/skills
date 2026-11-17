# skills

Personal agent skills.

| Skill | What it does |
|---|---|
| [build-ui](skills/build-ui/SKILL.md) | Build or change product UI (web React, SwiftUI): a direction derived from the product's world, a craft floor every screen meets, gold references, a rendered gate, review |

## Install

```sh
npx skills add mshll/skills --skill build-ui -g -a claude-code -y
pnpm install --dir ~/.claude/skills/build-ui/scripts
```

The second line installs `playwright-core` for the web gate. Run it again after `npx skills update build-ui -g`, which replaces the folder.

## Update

Edit here, commit, push, then on each machine:

```sh
npx skills update build-ui -g -y
pnpm install --dir ~/.claude/skills/build-ui/scripts
```

## Third-party content

`skills/build-ui` vendors MIT-licensed work, each with its license beside it: Stageshow (Benji Taylor) in `gold/stageshow/` and `scripts/vendor/`, tactile-design in `references/floor/`. Images in `gold/screens/` and `gold/techniques/` are screenshots from Mobbin and saved posts, kept for private reference.
