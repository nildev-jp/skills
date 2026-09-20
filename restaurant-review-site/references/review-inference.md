# Inferring a Restaurant Direction from Reviews

Reviews contain facts, feelings, and personal preferences. Perform this analysis only when original review text was actually retrieved. When no reviews exist, do not create a review summary and do not present business descriptions or owner posts as reviews.

## Extraction fields

Create an internal summary with:

- facts: Details directly stated in reviews that may be used on the site, such as dishes, service format, space features, or suitable occasions.
- repeated_signals: Taste, atmosphere, service, or value impressions repeated in at least two reviews.
- visual_cues: Clues that can become colors, materials, lighting, or composition.
- voice_cues: Copy tone such as casual, lively, refined, quiet, or craft-focused.
- uncertain: Details mentioned by only one review, unclear details, or details that may be outdated.
- missing_business_data: Name, address, opening hours, phone number, reservation URL, and other fields that are not yet verified.
- volatile_business_data: Owner posts, daily availability, promotions, and seasonal dishes. Unless the user explicitly asks for them, keep these out of fixed brand copy.

## Inference rules

Prioritize signals that are consistent across reviews. A single concrete observation may guide an image direction, but must not become a brand promise. For example, wood tables and warm yellow lights can guide a photo setting; the staff are exceptionally friendly must not become the warmest service in the country. Keep structured business data and review data separate. Never let a review impression overwrite an address, phone number, or opening hours.

Taste words can map to imagery with restraint:

| Review signal | Usable visual direction |
|---|---|
| Home-style, generous portions, lively | Warm colors, shared tables, natural composition, a close camera height |
| Refined, layered, set menu | Negative space, detail close-ups, ceramics, soft side light |
| Charcoal aroma, wok heat, cooked to order | Dark backgrounds, firelight, steam, a captured moment of motion |
| Fresh, clean, seasonal | Daylight, pale surfaces, green plants, ingredient close-ups |
| Date night, quiet, private | Low light, pools of light, dark wood, and textile textures |
| Family, group dining, welcoming | Bright space, generous table spacing, gentle high-color accents |

Use negative reviews only to avoid inaccurate positioning or improve information clarity. Do not turn them into mocking copy. If several reviews mention that the restaurant is hard to find, make the address and map more prominent. If several mention long waits, do not invent fast service.

## Image prompts

Every prompt must use the same colors, materials, lighting, and photographic language. State the website use and leave intentional negative space in the composition. Always add: no text, no watermark, no trademark, no distorted tableware, and realistic edible food.

Keep one side of the hero image clear for the headline. Food images may show dishes mentioned in reviews or generic dishes reasonably covered by the restaurant category. When the cuisine cannot be confirmed, use ingredients and dining context without assigning a national cuisine.
