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

## Installation

Install a skill from this repository with the Codex skill installer:

```bash
python /home/devin/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo nildev-jp/skills --path restaurant-review-site --ref main
```

## License

This repository is released under the MIT License. See [LICENSE](LICENSE).
