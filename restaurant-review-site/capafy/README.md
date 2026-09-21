# Capafy Listing Assets

This directory contains the copy and visual assets needed to publish Restaurant Review Site on Capafy.

## Basic information

- **Name:** Restaurant Review Site
- **Short description:** Generate a data-grounded Astro restaurant website from a Google restaurant link.
- **Category:** Website Development
- **Secondary categories:** Design, Marketing
- **Brand color:** `#B95F3D`
- **Runtime:** Codex
- **Delivery mode:** Run Online

## Listing description

Restaurant Review Site turns a Google Maps restaurant link or verified restaurant information into a polished, customer-facing Astro website.

It organizes verified business details, builds a coherent visual direction, and creates a responsive experience for desktop and mobile. When original Google review text can be retrieved from an allowed source, the Agent can add review cards without rewriting what customers said. Missing facts are omitted or clearly marked instead of invented.

## Key capabilities

- Create a complete restaurant homepage from a Google Maps or `share.google` link.
- Organize verified restaurant details such as address, phone number, hours, rating, and review count.
- Retrieve and use identifiable public restaurant photos when available.
- Generate visually consistent replacement imagery only when essential photos are missing.
- Add Google-style review cards only when original review text is verifiable.
- Produce a responsive Astro project and validate it with the existing project checks.

## Input

Required:

- A Google Maps restaurant link, a `share.google` restaurant link, or verified restaurant information.

Optional:

- Preferred visual style, language, audience, or mood.
- Review text or restaurant photos supplied directly by the user.

## Output

- A runnable Astro restaurant website.
- Responsive desktop and mobile layouts.
- Grounded restaurant copy and visit information.
- Local website image assets.
- Validation results and a list of any remaining replacement fields.

## Example prompt

```text
Use $restaurant-review-site with this Google Maps restaurant link to create and run a complete Astro website with verified business information, generated brand photography, and Google-style review cards only when actual review text can be retrieved.
```

## Trust and content boundaries

The Agent keeps structured business facts, customer reviews, and owner posts separate. It does not invent opening hours, menu items, awards, ratings, review text, reservation details, or service promises. If review text cannot be verified, the review section is omitted.

## Files

- `logo.png`: 1024 × 1024 PNG listing icon.
- `logo.svg`: Vector listing icon.
- `cover.png`: 1600 × 900 PNG listing cover.
- `cover.svg`: Vector listing cover.
- `product-description.md`: Full product overview and usage documentation.
- `agent-metadata.yaml`: Display name, short description, brand color, and default prompt.
- `skill-source.md`: Complete skill instructions, renamed to avoid nested skill discovery.
