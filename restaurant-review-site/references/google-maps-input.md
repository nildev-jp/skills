# Google Restaurant Links and Data Extraction

## Accepted links

- https://maps.app.goo.gl/...
- https://www.google.com/maps/...
- https://share.google/...
- A restaurant knowledge panel link from Google Search

## Extraction order

First expand the short link and record the final URL, query name, kgmid, Place ID, or Maps canonical URL. Business details may come from an available API or a public page. Reviews must follow this order:

1. Use the configured API first. If it fails, returns no review objects, returns only a review count, or returns incomplete review fields, do not turn summary text into a review.
2. Open the matching public Google Maps page in Chromium. Read only reviews visible on the page, and open the photo gallery to collect public photos. Click More or More reviews when necessary, but record only text visible in the current browser state.
3. If the API and Chromium cannot provide at least one review with an identifiable author and visible original text, return an empty reviews array. The website must omit the entire review module, including notice cards, placeholder reviews, and rewritten review copy.

Collect at least:

- The official restaurant name and category
- Address and phone number
- Opening hours
- Publicly displayed rating and review count
- When available, review author, author information, rating, relative time, and original text
- Publicly displayed review photos or usable photo count
- Popular dishes and price information only when the page explicitly displays them

Expand review text when a More control is available. If only truncated text is visible, preserve the truncation and do not complete it.

## Chromium review extraction rules

- Save only customer reviews visible on the Google Maps page. Owner posts, owner replies, review summaries, and keyword distributions are not customer reviews.
- Each saved review must have an identifiable author and visible original text. Add rating, relative time, Local Guide status, and photos only when the page clearly displays them.
- If a login prompt, CAPTCHA, regional restriction, empty review list, or uncertain place identity appears, stop review extraction and leave reviews empty. Do not bypass the access restriction.
- Do not rewrite search snippets or business descriptions as reviews. Do not turn dish names in owner posts into a fixed menu.

## Chromium photo extraction rules

- Prefer storefront, dining space, and food photos that are identifiable as belonging to the restaurant. Do not save Google icons, user avatars, map tiles, or interface screenshots.
- Use a public image URL or network response loaded by the browser, save the actual file in the website's public/images directory, and make sure the site does not depend on the browser session or a temporary Google URL.
- Give every image an accurate alt description. When the visual content cannot be confirmed, use a neutral description instead of guessing from a filename or owner post.
- Use image_gen only after public photos have been found insufficient. Keep generated images separate from public photos and never present a generated image as a real restaurant photo.

## Short links and ambiguity

share.google may redirect to Google Search and expose only a kgmid and short name. Search Maps with that name, then compare the canonical entity ID, address, category, and review content. If Maps selects a similar but different restaurant, do not silently treat it as the same place.

Continue when public signals identify one unique result, and report the matching basis at delivery. If two or more candidates remain plausible, list the candidate names and addresses and ask the user to choose before generating the website.

## Review preservation

Google review cards should resemble a public page screenshot and use the retrieved author, rating, time, and original text. When no original review text was retrieved, do not show Google review cards. A Google source label indicates data provenance and must not imply Google certification or endorsement.
