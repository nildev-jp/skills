---
name: restaurant-review-site
description: Turn a Google Maps restaurant link or verified restaurant data into a polished Astro restaurant website with grounded copy and generated brand photography. Add Google review cards only when review text is retrieved from an allowed source.
---

# Restaurant Review Site

Accept a Google Maps link, a share.google restaurant link, or verified restaurant data pasted by the user. Produce a runnable Astro website whose content is grounded in traceable business information. Add Google review cards only when verifiable review text is available.

Minimal invocation: $restaurant-review-site <Google restaurant link>.

## Before starting

When the user provides a Google restaurant link, read references/google-maps-input.md first. Follow its extraction order: try the configured API, then use Chromium to read visible reviews and public photos. If the user provides review text directly, use that text. Ask for a link or review text only when neither is available. The restaurant name, address, hours, and reservation method may be added later when they are verified.

If the workspace already contains a project, inspect it and preserve the user's existing changes. If there is no project, copy assets/astro-starter to the requested output location. If no location is specified, create a clearly named subdirectory in the current workspace. Do not overwrite unrelated files.

## Workflow

1. From the structured business page, collect the official name, category, address, phone number, opening hours, rating, and review count. Use only values actually displayed on the page. Omit missing fields or mark them clearly as pending replacement.
2. Follow references/google-maps-input.md to collect reviews and public photos. If the API fails, returns no review objects, returns only a review count, or returns incomplete review fields, open the public Google Maps page in Chromium. Open the photo gallery at the same time and download photos that are identifiable as the restaurant's food, space, or storefront. Save only reviews whose author and visible original text can be identified. If neither the API nor Chromium provides a verifiable review, set reviews to an empty array and omit the entire review module, review navigation, notice card, and any substitute copy that could look like a review.
3. Read references/review-inference.md. Keep structured business data, customer reviews, and owner posts separate. Use verified business data in customer-facing copy. Use review impressions to guide the visual direction, but do not expand one review or owner post into a restaurant promise.
4. Define one coherent visual direction with three to five mood words, colors, materials, lighting, and composition rules. All photos must belong to the same restaurant. Prefer real storefront, space, and food photos captured from the public photo gallery in Chromium.
5. If public photos do not cover the hero, food, and space imagery, use the built-in image_gen tool to fill only the missing images. Move every final image into the website's public/images directory, update image paths in styles, and remove unused starter placeholders. Do not rely on a generation tool or a browser cache at runtime. Do not present unsupported dishes, awards, celebrities, history, scenery, or service promises as facts.
6. Edit the starter according to references/site-requirements.md. Keep restaurant content in src/data/site.ts; do not scatter hard-coded restaurant facts across pages and components. Reviews are optional. When there are no reviews, omit the entire review module naturally.
7. When reviews exist, preserve the original text in reviews and retain the available author name, avatar or avatar color, rating, relative time, Local Guide information, and review photos. You may repair common copied line breaks, but do not rewrite meaning, translate, add words, or merge reviews from different authors. Use Google user only when the author name is unavailable. Never invent an unknown rating or time.
8. Place the review carousel in the middle of the homepage sequence. Use a white, screenshot-like card close to the Google Maps review layout. The carousel must autoplay and provide previous, next, and dot controls. Pause autoplay on hover, keyboard focus, hidden tabs, and prefers-reduced-motion: reduce.
9. Write all client-side code in TypeScript and follow the project's ESLint rules. Prefer pure functions and immutable data. Use a mobile-first layout, semantic HTML, visible focus styles, touch targets of at least 44px, and sufficient color contrast.
10. Install dependencies and run npm run check and npm run build. Start the development server, load the homepage, and verify images, business information, and the mobile layout. Check review cards and carousel behavior only when review data exists. Fix errors before delivery.

## Content boundaries

- Write structured business data as factual statements. Limit review-supported claims to the review text or clearly label them as visitor impressions. Use reasonable but unverified design assumptions only for the visual direction, never as restaurant facts.
- Do not turn search summaries, owner posts, or source explanations into the homepage story. They are extraction inputs, not customer-facing copy.
- If the address, phone number, price, opening hours, or reservation URL is unavailable, use a clear replacement marker. Never invent the value.
- Do not show fictional ratings, review counts, review text, or Google certification badges. Show a review card only when the original review text was actually retrieved. A verified rating and review count may be shown as separate statistics, but statistics must never be presented as a review.
- Treat promotions, daily availability, and seasonal dishes in owner posts as volatile data. Do not place them in fixed brand copy unless the user explicitly asks for them.
- If a review contains personal data, abusive language, or unrelated content, preserve the restaurant-relevant portion and explain any omission at delivery.

## Delivery

Report the website path, running local URL, final image paths, final image prompts, and checks that passed. If reviews could not be retrieved from the API or Chromium, explicitly state that the review module was omitted. List every remaining replacement field.
