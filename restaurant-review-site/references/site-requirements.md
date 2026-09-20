# Astro Website Requirements

## Required homepage structure

The homepage must include:

1. Brand navigation and a clear reservation action
2. A hero section using generated brand imagery when public photos are insufficient
3. A restaurant story or set of characteristics grounded in verified data
4. Food or experience highlights
5. A review carousel in the middle of the content sequence when verified reviews exist
6. Space or dining context
7. Opening information, address, and reservation method
8. Footer

Sections may change with the available data. When verified reviews exist, keep the carousel away from the footer and sidebar. When no reviews exist, omit the entire review section and navigation link. Do not show an unavailable notice or substitute review copy. Review cards should resemble white Google Maps screenshot cards with a circular avatar, author name, Local Guide or review count metadata, Google source label, rating, relative time, original text, review photo thumbnails, and Helpful / Share controls. Do not turn reviews into large pull quotes or brand copy. On desktop, center the active card and expose portions of neighboring cards. On mobile, show one complete card.

## Review carousel

- Use article or an appropriate review semantic element and preserve original review text and author.
- The card may resemble a Google Maps screenshot, but must not fake Google certification, official endorsement, or unknown data.
- Show one to three thumbnails when review photos are available. When there are no photos, keep the natural text-card height and do not add fake images.
- Omit unknown ratings, times, and author statistics. Never invent a five-star rating.
- When reviews is empty, render no review section, review navigation, empty carousel, or placeholder review.
- Advance one review every 6 to 8 seconds by default. Do not use continuous high-speed scrolling.
- Provide previous, next, and per-review dot controls.
- Give controls clear aria-label values and use aria-current for the active dot.
- Update an assistive-technology-readable state after a manual change without interrupting readers on every autoplay change.
- Pause on hover, focus inside the container, hidden tabs, and prefers-reduced-motion: reduce.
- Use transform and opacity transitions so card dimensions do not change during navigation.
- Do not require swipe gestures. If touch gestures are implemented, keep all buttons available.

## Technical baseline

- Use Astro strict TypeScript. Write client-side interaction in TypeScript.
- Keep restaurant data in src/data/site.ts with explicit types.
- Store images in public/images/ or use the Astro image pipeline. Provide dimensions and alt text, and lazy-load images below the fold.
- Reserve image dimensions to avoid layout shift. The mobile layout must not overflow horizontally.
- Manage colors with CSS custom properties. Body text must be at least 16px with a line height of at least 1.5.
- Respect reduced-motion preferences and keep visible focus styles.
- Keep non-interactive sections free of client-side JavaScript.

## Verification

Run at least:

- npm run check
- npm run build
- Start npm run dev -- --host 0.0.0.0, request the homepage, and confirm HTTP 200.

When browser automation is available, also check 390px and 1440px viewports. Confirm that review cards do not clip text, controls remain visible, and the homepage has no horizontal overflow.
