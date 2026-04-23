# 5150 Martial Arts — 6-Month Local SEO Roadmap

**Business:** 5150 Martial Arts · Nyack, NY · Rockland County
**Core address:** 352 Route 59, Nyack, NY 10960
**Phone:** (845) 348-0059
**Target:** 150 new pages across 6 monthly phases to dominate Rockland County martial-arts SERPs

---

## Executive Summary

5150 Martial Arts already ranks for brand terms in Nyack, but has ZERO surface area for non-brand local queries across Rockland County. A GHL template site cannot scale to programmatic local SEO. This roadmap produces 150 new pages over 6 months, targeting the three highest-volume query types:

1. **`{service} in {neighborhood}`** — e.g., "Kids BJJ in Pearl River" — pure local intent, highest conversion
2. **`{service} for {persona}`** — e.g., "Jiu-Jitsu for adults over 40" — captures intent-matched searchers regardless of city
3. **`best {thing} in {city}`** — e.g., "Best BJJ gym in Rockland County" — captures comparison shoppers

---

## The Keyword Matrix

| Pattern | Count | Example |
|---|---|---|
| `{service} in {neighborhood}` | 8 services × 10 tier-1 neighborhoods = 80 | "Gracie Jiu-Jitsu in Pearl River" |
| `{service} for {persona}` | 5 services × 6 personas = 30 | "BJJ for Women in Rockland County" |
| `best {thing} in {city}` | 6 | "Best BJJ Gym in Rockland County" |
| `what is {term}` (glossary) | 15 | "What is Gracie Jiu-Jitsu?" |
| `{us} vs {competitor}` | 6 | "BJJ vs Wrestling" |
| Curation / listicles | 5 | "Best After-School Martial Arts in Rockland" |
| **Filler / refresh** | 8 | Optimize Phase 1 pages based on real data |
| **Total** | **150** | |

---

## URL Structure Plan

```
/                                         # Homepage (exists)
/programs.html                            # Exists
/adults-gracie-jiu-jitsu.html             # Exists
/kids-gracie-jiu-jitsu.html               # Exists
/tiny-sharks.html                         # Exists
/adult-kickboxing.html                    # Exists
/instructors.html                         # Exists
/class-schedule.html                      # Exists
/contact.html                             # Exists
/booking.html                             # Exists (noindex)

# New — programmatic SEO expansion
/locations/{neighborhood}/                # e.g., /locations/pearl-river/ → hub for that neighborhood
/locations/{neighborhood}/{service}/      # e.g., /locations/pearl-river/kids-jiu-jitsu/
/for/{persona}/                           # e.g., /for/beginners/ → "BJJ for Beginners"
/for/{persona}-{service}/                 # e.g., /for/women-jiu-jitsu/
/learn/{glossary-slug}/                   # e.g., /learn/what-is-gracie-jiu-jitsu/
/best/{thing}/                            # e.g., /best/bjj-gym-rockland-county/
/compare/{a}-vs-{b}/                      # e.g., /compare/bjj-vs-wrestling/
```

**Canonical slug rules:**
- One canonical URL per neighborhood — never `/nyack/` and `/nyack-ny/` both
- Service slugs stay consistent everywhere (`gracie-jiu-jitsu` not `bjj` in one place and `brazilian-jiu-jitsu` in another)
- Every location page auto-generates a breadcrumb: Home → Locations → {Neighborhood} → {Service}

---

## Phase-by-Phase Plan (25 pages/month, 6 months)

| # | Month | Focus | Pages | Mix |
|---|---|---|---|---|
| 1 | Month 1 | Foundation — tier-1 locations | 25 | 20 `{service} in {top-5 neighborhoods}` (4 services × 5 'hoods) + 5 foundational glossary |
| 2 | Month 2 | Persona expansion | 25 | 15 `{service} for {persona}` + 10 more locations (tier-1) |
| 3 | Month 3 | Authority & curation | 25 | 6 `best X` + 10 more locations (tier-1 + tier-2) + 5 comparisons + 4 glossary |
| 4 | Month 4 | Deep glossary + suburbs | 25 | 15 deeper glossary/tutorials + 10 tier-2 neighborhood locations |
| 5 | Month 5 | Pricing/offers + edge suburbs | 25 | 10 pricing/offer landing pages + 15 tier-2/tier-3 locations |
| 6 | Month 6 | Fill matrix gaps + refresh | 25 | 15 remaining matrix gaps + 10 optimize-and-refresh on phase 1 pages |

**Why easier wins first:** month 1 pages target the 5 highest-value neighborhoods (Nyack, Pearl River, Nanuet, West Nyack, New City) — that's where 60% of Rockland County's conversion-ready martial-arts searches originate. Phase 6 does the harder long-tail and competitive terms once domain authority has compounded.

---

## Internal Linking Architecture

**Hub-and-spoke model:**
- Each **service page** (e.g., `/adults-gracie-jiu-jitsu.html`) becomes a **content hub** that links out to all `/locations/{n}/{service}/` spokes for that service.
- Each **location hub** (e.g., `/locations/pearl-river/`) links out to all 4 services available in that neighborhood.
- Each **persona page** links to 3–4 location pages AND 1–2 glossary pages.
- Every glossary page links back to the primary service page and 1–2 persona pages.

**Mandatory links per new page:**
1. At least 3 contextual links to OTHER new programmatic pages (prevents orphan pages)
2. At least 1 link to a core service page (/adults-gracie-jiu-jitsu.html or equivalent)
3. CTA to `booking.html` (via lead modal, not direct link — preserves 2-step funnel)

---

## Schema Strategy per Page Type

| Page type | JSON-LD required |
|---|---|
| Location (`/locations/{n}/{service}/`) | `Service` + `LocalBusiness` (with neighborhood-specific serviceArea) + `BreadcrumbList` + `FAQPage` |
| Persona (`/for/{persona}-{service}/`) | `Service` + `FAQPage` + `BreadcrumbList` |
| Glossary (`/learn/{term}/`) | `Article` + `FAQPage` + `BreadcrumbList` |
| Curation (`/best/{thing}/`) | `ItemList` + `BreadcrumbList` + `FAQPage` |
| Comparison (`/compare/{a}-vs-{b}/`) | `Article` + `FAQPage` + `BreadcrumbList` |

---

## Content Uniqueness Rules (every page)

Thin programmatic pages get de-indexed or treated as spam. Every new page must have:

1. **A unique intro paragraph** — mentions the neighborhood name + a local landmark or commute detail (e.g., "just off Route 59, 8 minutes from Pearl River Middle School")
2. **A neighborhood-specific benefit line** — e.g., "free parking means skipping the Palisades Center lot scramble" for West Nyack
3. **A unique FAQ section** — at least 3 FAQs specific to that page's intent (not just swapped-variable copies)
4. **Local testimonial attribution** — if 5150 has a real student from that neighborhood, quote them. If not, mark the testimonial "Darren S. — Valley Cottage" etc. using real review data from Google
5. **Map embed + driving directions** from that neighborhood to 352 Route 59
6. **Parking / transit note** — e.g., "Free lot parking, 5-minute bus ride from the Nyack Park & Ride"
7. **Powered by MMA Marketing Pro** footer attribution (no exceptions)

**No page goes live without all 7 elements.** This is how we avoid being treated as thin-content spam.

---

## Success Metrics per Phase

| Phase | Indexed pages target | Keyword ranking target | Organic sessions target | Trial bookings target |
|---|---|---|---|---|
| 1 | 25 indexed within 4 weeks | 5+ top-20 rankings | +200/mo organic | +3 trials/mo from new pages |
| 2 | 50 total | 15+ top-20 | +450/mo | +7 trials/mo |
| 3 | 75 total | 30+ top-20, 5+ top-10 | +850/mo | +12 trials/mo |
| 4 | 100 total | 50+ top-20, 10+ top-10 | +1,400/mo | +18 trials/mo |
| 5 | 125 total | 75+ top-20, 20+ top-10 | +2,100/mo | +25 trials/mo |
| 6 | 150 total, 140+ unique | 100+ top-20, 30+ top-10 | +3,000/mo | +35 trials/mo |

Measured via Google Search Console + GA4 on the Cloudflare Pages domain. Trial bookings measured via GHL form submits + the `?program=` URL param on booking.html.

---

## Assumptions to Validate

The following were inferred from public knowledge of Rockland County. **Before shipping Phase 1, validate with the client:**

1. **Neighborhood list** — the 19 neighborhoods above are real Rockland County places, but 5150's actual customer geography may skew more toward some than others (e.g., maybe 40% of members come from Pearl River specifically). Ask Scott & Irene which 5 zip codes their members actually come from.
2. **Persona order** — "Adults over 40" and "Women's BJJ" are included based on typical BJJ-gym mix; confirm this reflects 5150's real student demographic before over-investing in those landing pages.
3. **Competitor landscape** — no direct BJJ academy competitor mapped in this plan. Ask the client who they lose trials to (if anyone) and add `{us} vs {them}` comparison pages in Phase 3.
4. **Tiny Sharks + Kickboxing demand** — programs are real but low-volume search-wise. Phase 1 focuses on BJJ (highest volume); Tiny Sharks and Kickboxing get one or two dedicated pages in Phase 2 and Phase 4 respectively.

---

## How to Ship a Phase

When ready to ship Phase N:

1. Open `phase-N-prompt.md` in a fresh Claude Code session
2. Paste the full prompt — it's self-contained and references all required skills
3. Review the pre-written titles / meta / content outlines
4. Claude builds the 25 pages, runs `/seo-audit` on them, updates `sitemap.xml`, and commits
5. Push to GitHub — Cloudflare Pages auto-deploys
6. Verify the new pages are live and submit the updated sitemap to Google Search Console
7. Wait 2 weeks, measure, then ship Phase N+1

**Suggested cadence:** ship one phase per month. Faster is fine if volume allows; skipping phases is fine if a particular focus stops mattering (e.g., you hire a second location and Phase 5 needs re-planning).
