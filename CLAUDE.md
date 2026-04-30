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
- **Pricing:** All prices must include a disclaimer: "Prices are factory-direct and subject to change. Final pricing confirmed at checkout."

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

## Image Notes

- Best hero image: `images/hero-sandstone-thermal-home.jpg` (cropped from 2592x1936 source)
- 7 web-ready images in `images/` — contrast-enhanced and web-optimized
- `GreyEverRock (1).jpg` in source library is overexposed — do not use
- `tinyhouse2.jpg` is 640x480 — too small for hero, use only as thumbnail
