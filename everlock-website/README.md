# Everlock Systems — Website Prototype

A high-fidelity, conversion-optimized HTML prototype for the new **Everlock Systems / Skirting Direct** website. Built to replace the current `everlock.com` and `skirtingdirect.com` sites with a modern, mobile-first, SEO-ready design targeting direct sales of $2M–$5M+ annually.

## Project Overview

| Attribute | Detail |
|---|---|
| **Status** | Design prototype — ready for developer handoff |
| **Platform target** | WordPress + WooCommerce (or Shopify) |
| **Primary brand colors** | Deep Green `#006400` · Navy `#003366` · Earth tones |
| **Typography** | Inter (Google Fonts) |
| **Prototype built** | April 2026 |

---

## File Structure

```
everlock-website/
├── index.html          # Main homepage prototype
├── css/
│   └── styles.css      # All site styles (CSS variables, responsive, components)
├── js/
│   └── main.js         # Calculator logic, nav, persona tabs, smooth scroll
├── images/             # Placeholder — add product photography here
└── README.md
```

---

## What's in the Prototype

### Pages / Sections (all in index.html)
- **Sticky header** — top bar with phone + promo, logo, mega-menu nav, mobile hamburger
- **Hero** — headline, sub, dual CTAs, mini perimeter calculator widget, trust badges
- **Trust bar** — 5-item social proof strip (lifetime warranty, factory direct, 45+ yrs, 2 plants, triple-lock)
- **Products grid** — 6 product cards with color swatches, features, and starting prices:
  - Everlock Deluxe® Vinyl Skirting
  - EverRock® Simulated Rock
  - Thermal EverRock™ (Insulated)
  - Gorilla Thermal™ (Max Insulation)
  - Novik Faux Brick / Stone / Stacked Stone
  - Accessories & Complete Kits
- **Why Everlock** — 6-card benefits section
- **Skirting Calculator** — fully functional JS calculator: dimensions, height, product selection, add-ons, ZIP-based shipping estimate, email quote capture
- **Persona tabs** — switchable profiles for Practical Pat / Investor Mike / Pro Contractor Carla
- **Competitor comparison table** — Everlock vs. Style Crest / DuraSkirt / K-Rok
- **Testimonials** — 3 customer stories with product attribution
- **Blog teasers** — 3 resource/guide cards
- **For Pros / Dealers** — dealer tier table (Certified / Preferred / Elite)
- **Footer CTA** — conversion strip
- **Full footer** — 4-column links, trust badges, phone, legal

---

## Target Personas

| Persona | Share | Key Need |
|---|---|---|
| **Practical Pat** (MH homeowner, 50–65) | ~70% | Affordable, durable, DIY-friendly, lifetime warranty |
| **Investor Mike** (park owner / flipper) | ~20–25% | Bulk pricing, tenant-proof materials, FHA compliance |
| **Pro Contractor Carla** (installer / dealer) | ~10–15% | Fast install, spec sheets, contractor pricing portal |

---

## Skirting Calculator Logic

The calculator (`js/main.js`) computes:

1. **Perimeter** = `2 × (length + width)` + porch/hitch allowance (8 ft each)
2. **Panel rows** = `ceil(height_inches / 16)`
3. **Panels per row** = `ceil(perimeter / 12)` (each panel covers 12 linear ft)
4. **Total panels** = rows × panels/row
5. **Rail sets** = `ceil(perimeter / 12)` (top + bottom)
6. **Pricing** = panels × per-product price + rails + add-ons
7. **Shipping** = ZIP-tier percentage of materials total

Product pricing matrix (prototype values — replace with live pricing):

| Product | Panel Price | Rail Price |
|---|---|---|
| Everlock Deluxe® | $46 | $18 |
| EverRock® | $78 | $22 |
| Thermal EverRock™ | $98 | $22 |
| Gorilla Thermal™ | $110 | $24 |
| Novik Faux Brick/Stone | $82 | $20 |

---

## SEO Foundation (Per Brief)

### Primary Keywords
- `mobile home skirting`
- `vinyl skirting for mobile homes`
- `manufactured home underpinning`
- `EverRock rock skirting`
- `insulated mobile home skirting`
- `lifetime warranty mobile home skirting`

### Technical SEO Notes for Developer
- Add `<meta name="description">` unique per product page
- Add `schema.org/Product` structured data to all product pages
- Add `schema.org/FAQPage` to FAQ section
- Add `schema.org/HowTo` to installation guide pages
- Generate `sitemap.xml` via WordPress Yoast or RankMath
- Set canonical URLs on all pages
- Add breadcrumb nav + schema on product/category pages

---

## Development Handoff Notes

### Priority Pages to Build After Homepage
1. Individual product pages (one per product line)
2. Skirting Calculator (standalone page — promote in nav)
3. Resources / Installation Hub
4. Why Everlock (competitor comparison)
5. For Pros / Dealer Login portal
6. Contact / Get Quote form
7. About Us
8. Blog / Resource archive

### Platform Recommendations
- **CMS**: WordPress + Elementor Pro (or custom theme)
- **E-commerce**: WooCommerce (quote-to-order flow)
- **Calculator**: Port `js/main.js` logic to a custom WP plugin
- **CRM**: HubSpot (free tier) or Pipedrive for quote leads
- **Email/SMS**: Klaviyo for abandoned quote recovery
- **Analytics**: GA4 + Google Tag Manager (track calculator completions, quote submits, phone clicks)
- **CDN**: Cloudflare (free tier sufficient for launch)
- **Hosting**: WP Engine or Kinsta for performance

### Performance Targets
- LCP < 2.5s (Core Web Vitals)
- CLS < 0.1
- All images: WebP format, lazy loaded
- Fonts: self-hosted Inter after launch for GDPR compliance

---

## Competitor Reference
| Competitor | Key Differentiator to Counter |
|---|---|
| Style Crest / Valor | Dealer markup (30–50%) vs. Everlock factory direct |
| DuraSkirt | Concrete = high labor cost, no DIY option |
| K-Rok ABS | No insulated option, limited warranty |

---

## Contact / Sales
**Everlock Systems Inc.**
📞 800-843-3336 | Mon–Fri 8am–5pm CT
Factory direct since 1980.
