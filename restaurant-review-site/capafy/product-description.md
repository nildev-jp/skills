<p align="center">
  <img src="assets/branding/logo.png" alt="Restaurant Review Site logo" width="160" />
</p>

<h1 align="center">Restaurant Review Site</h1>

<p align="center">
  Turn a restaurant link into a polished website that builds trust and helps customers decide to visit.
</p>

![Restaurant Review Site converts verified restaurant information into a customer-ready website](assets/branding/readme-hero.png)

## What this Agent does

Restaurant Review Site turns a Google Maps restaurant link or verified restaurant information into a complete, customer-facing website.

It gathers the available business details, organizes the restaurant story, presents useful visit information, and creates a visual experience that matches the character of the restaurant. When real review text is available from an allowed source, it can also add review cards without rewriting what customers said.

## Why use it

| Need | What the Agent provides |
| --- | --- |
| Launch a restaurant website quickly | A complete homepage with clear structure and responsive design |
| Build customer trust | Verified business details and traceable review content |
| Present the restaurant professionally | A coherent visual direction, polished copy, and strong imagery |
| Reduce manual research | Organized name, category, address, phone, opening hours, rating, and review count when available |
| Avoid misleading content | Missing facts are omitted or clearly marked instead of invented |

## What you get

- A polished restaurant homepage for desktop and mobile
- A clear restaurant introduction and story
- Highlight sections based on verified information
- Address, opening hours, phone, and reservation details
- Real restaurant photos when they can be retrieved
- Consistent generated imagery only when essential photos are missing
- Optional customer review cards using retrieved original review text
- A runnable website project with validation checks completed

## How it works

1. Provide a Google Maps restaurant link, a `share.google` restaurant link, or verified restaurant information.
2. Optionally describe the preferred style, language, audience, or mood.
3. The Agent verifies the available details and gathers usable restaurant photos and reviews.
4. It creates the website, validates the result, and reports anything that still needs confirmation.

## Example request

```text
Use $restaurant-review-site with this Google Maps restaurant link.
Create a warm, modern website that highlights the dining experience,
verified business details, and real customer reviews when available.
```

## Trust by design

The Agent keeps business facts, customer reviews, and owner posts separate. It does not invent opening hours, dishes, awards, ratings, review text, or reservation details.

If review text cannot be retrieved and verified, the review section is left out. A rating or review count is never presented as if it were a customer quote.

## Installation

Install the Agent with the `skills` CLI:

```bash
npx skills add nildev-jp/skills --skill restaurant-review-site
```

List, update, or remove it with:

```bash
npx skills list
npx skills update restaurant-review-site
npx skills remove restaurant-review-site
```

## Local requirements

The Agent handles website setup and dependency configuration. To run the generated website locally, Node.js and npm are required. No global website framework installation is needed.

## License

Released under the MIT License.
