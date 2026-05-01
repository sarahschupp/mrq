# Everlock / SkirtingDirect.com — Project Rules for Claude

## Brand & Copy Rules

- **"Lifetime Warranty" is always one word.** Never split it across two lines or two elements as "Life" + "Time Warranty." Always write "Lifetime Warranty" as a single unit.
- **Never say "Practical Pat."** This is an internal buyer persona name. It must never appear in any customer-facing copy, HTML, or content.
- **No free shipping claims** unless explicitly confirmed by the client. This was removed after the first draft.
- **Support copy:** Phone support references should say "from real people based in Boulder, Colorado" — not "no scripts," not "no call centers."
- **No fluff words:** Do not use "revolutionary," "game-changing," "best-in-class," "transformative," "luxury," or "premium experience."
- **No em dashes (—) or en dashes** in copy. Use commas or periods.
- **No exclamation points** unless quoting customer testimonials.
- **American English** throughout.

## Header & Navigation Rules

- **Do not duplicate trust signals in adjacent header sections.** The utility bar and promo banner (if used) must not repeat the same claims (e.g., "Lifetime Warranty" and "2 U.S. Plants" should not appear in both). If both sections exist, give each a distinct message.
- The promo banner is optional and should only be present when there is a real, current offer to communicate.

## Hero Trust Row (stat items)

- The three hero trust stat items should be: **45+** (Years), **2** (U.S. Plants), **∞** (Lifetime Warranty).
- The ∞ symbol (`&#8734;`) prevents "Life / Time" from being split across num/label. Always use this for the warranty stat.

## Product & Page Context

- **Complete Kits:** We DO sell complete kits (panels, rails, hardware by home size). Never say "we do not have pre-packaged kits" — this was the old site copy and is no longer accurate.
- **COVID shipping notice:** Remove any reference to COVID-related shipping delays from all pages.
- **FHA/VA content:** Always include an advisory disclaimer: "Final approval rests with your lender and appraiser, not with Everlock Systems." Do not make absolute compliance guarantees.
- **Pricing:** Use project-based pricing (NOT per-sq-ft). Confirmed live site project prices for a 14' x 66' home at 36" above grade, materials only, freight not included:
  - Everlock Deluxe Vinyl: from $750
  - EverRock Vinyl: from $1,624
  - Thermal EverRock Insulated: from $2,974
  - Gorilla Insulated Skirting: from $3,101
  - Novik Hand-Laid Brick: from $3,320
  - Novik Stacked Stone: from $3,600
  - Premium Novik Hand-Cut Stone: from $3,710
  - Novik Field Stone: from $4,050
  - Novik Dry Stacked Stone: from $5,490
- **Pricing disclaimer required:** "Project pricing based on a 14' x 66' home at 36" above grade, materials only, freight not included. Prices are factory-direct and subject to change. Final pricing confirmed at checkout."

## Confirmed Facts (verified from live site skirtingdirect.com)

- **Founding year: 1981** (not 1980). Footer on live site reads "Founded in Colorado in 1981."
- **Business hours: Monday-Friday, 9am-4pm Mountain Time.** Phone: 800-843-3336.
- **Email: info@skirtingdirect.com** (confirmed — used throughout the redesign).
- **Product name: "Gorilla Insulated Skirting"** (NOT "Gorilla Thermal Insulated" — "Thermal" is not in the product name).
- **Novik line has 6 distinct products:** Hand-Laid Brick, Stacked Stone, Premium Hand-Cut Stone, Field Stone, Dry Stacked Stone, Artisan-Cut Stacked Stone. Never collapse to one card. Artisan-Cut Stacked Stone (product code AC101, $375 per panel on live site) does not have a mail sample available.
- **Accessories (confirmed product names):** Squeek No More, Everlock EZ Storage, Foundation Vents, EZ Access Doors.
- **No HUD CFR citation** (24 CFR §3285.504) — use "HUD Manufactured Home Construction and Safety Standards" generically.
- **No $50 store credit** — unconfirmed; use "We may feature your home here" instead.
- **Color counts:** Do not use specific numbers. Use "available in multiple colors" until client confirms exact counts per product.

## File Structure

```
/Everlock/
  index.html              — Homepage
  faq.html                — FAQ page
  complete-kits.html      — Complete Kits page
  sitemap.xml             — XML sitemap
  robots.txt              — Crawler rules (allows GPTBot, ClaudeBot, PerplexityBot)
  llms.txt                — AI crawler guidance
  photography-brief.md    — Shot list for new photography
  images/                 — Web-ready enhanced images (7 files)
  Everlock Images/        — Source image library (do not overwrite)
```

## Design System

- `--green: #006400` — Primary green (buttons, section labels, CTAs)
- `--navy: #003366` — Secondary (hero bands, FHA section, final CTA)
- `--earth: #f5f2ed` — Background sections
- Font: Inter (Google Fonts)
- Container: `max-width: 1200px; margin: 0 auto; padding: 0 24px;`
- All pages share the same header/nav and footer from index.html.

## Responsive Design Rules for Product Cards

- **Never use horizontal flex (`space-between`) inside a product card footer when there are more than two elements.** Price, disclaimer text, and a CTA button cannot share a row — they will cramp at 3-column widths (~335-368px per card).
- **Product footer layout must be `flex-direction: column`.** Price stacks above disclaimer, button below both with `align-self: flex-start`. This is the correct pattern in index.html.
- **SVG icons in the header or utility bar must have explicit `width` and `height` attributes.** Do not rely on CSS alone — browsers render SVGs without explicit dimensions at their intrinsic size (often 300px). Always add both `width="14" height="14"` inline on the element AND a CSS rule.
- **Products grid breakpoints:** 3 columns above 1100px, 2 columns at 600-1100px, 1 column below 600px. Do not change these without testing at each breakpoint.

## Image Notes

- Best hero image: `images/hero-sandstone-thermal-home.jpg` (cropped from 2592x1936 source)
- 7 web-ready images in `images/` — contrast-enhanced and web-optimized
- `GreyEverRock (1).jpg` in source library is overexposed — do not use
- `tinyhouse2.jpg` is 640x480 — too small for hero, use only as thumbnail
