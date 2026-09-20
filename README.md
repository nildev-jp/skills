# Skills

Public skills for Codex-compatible agents.

## Available skills

### restaurant-review-site

Turn a Google Maps restaurant link or verified restaurant data into a polished Astro restaurant website with grounded copy and generated brand photography. Google review cards are included only when review text is retrieved from an allowed source.

## Repository layout

Each skill is a self-contained directory with a required `SKILL.md` file. Optional directories may include agent metadata, references, and reusable assets.

```text
skills/
|- README.md
|- LICENSE
|- .gitignore
`- restaurant-review-site/
   |- SKILL.md
   |- agents/
   |- references/
   `- assets/
```

## Installation and management

Install the skill with the `skills` CLI through `npx`:

```bash
npx skills add nildev-jp/skills --skill restaurant-review-site
```

List installed skills:

```bash
npx skills list
```

Update the skill:

```bash
npx skills update restaurant-review-site
```

Remove the skill:

```bash
npx skills remove restaurant-review-site
```

The repository does not require a root `package.json`. The `skills` CLI reads each nested `SKILL.md` and manages the installed copy for the selected agent.

## License

This repository is released under the MIT License. See [LICENSE](LICENSE).
