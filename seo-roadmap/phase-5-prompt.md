# PHASE 5 — Pricing, Offers, and Edge Suburbs (25 pages)

**Paste this prompt into a fresh Claude Code session when you're ready to ship Phase 5.**

---

## Context

Skill references per prior phases. 100 pages live. Phase 5 targets commercial-intent queries (pricing, membership, trial offers) + the furthest-out tier-2/3 neighborhoods.

## Phase 5 Objective

Build **25 pages**: 10 pricing/offer landing pages + 15 edge-suburb locations.

## Pages to Build

### Pricing / offer landing pages — 10

1. `/offers/free-trial-class/` — Free Trial Class (hub page for all trial intent)
2. `/offers/family-membership/` — Family Rates (siblings + parents on same membership)
3. `/offers/kids-birthday-party/` — Kids BJJ Birthday Party Package
4. `/offers/summer-camp/` — Summer Jiu-Jitsu Camp (seasonal — time to launch this in March)
5. `/offers/homeschool-program/` — Daytime Homeschool BJJ Classes
6. `/offers/private-lessons/` — Private BJJ Instruction with Prof. Scott or Irene
7. `/offers/seminars/` — Guest Instructor Seminars (quarterly events)
8. `/offers/membership-pricing/` — Transparent Pricing & Membership Options
9. `/offers/10-class-starter-pack/` — 10-Class Beginner Starter Pack
10. `/offers/gift-certificate/` — Martial Arts Gift Certificates

### Edge suburbs — 15

Fill the remaining Rockland County coverage + nearby Bergen County (NJ) border towns (many Rockland members commute from NJ):

- Rockland: `garnerville`, `thiells`, `pomona`, `suffern`, `montebello`
- Bergen border (NJ): `mahwah-nj`, `upper-saddle-river-nj`, `park-ridge-nj`, `woodcliff-lake-nj`, `old-tappan-nj`
- Westchester border: `tarrytown-ny`, `sleepy-hollow-ny`

Pair each with 1–2 services. 15 total.

**Note on cross-state pages:** NJ border-town pages need to be especially careful — they can't claim 5150 is "in" NJ. Each NJ page must frame as "The closest BJJ academy to {town}, NJ is 5150 Martial Arts in Nyack, NY — a {X}-minute drive over the state line."

---

## Content Outline (offer landing pages)

1. **Hero** — Offer-specific headline (e.g., "Free Trial Class — No Risk, No Commitment")
2. **What's included** — itemized list of what the offer covers
3. **How to claim** — 3-step process, ending with lead modal CTA
4. **Why this offer** — the business rationale (why it's a fair deal for both sides)
5. **Social proof** — 2–3 testimonials from people who used this offer
6. **FAQ** — offer-specific questions (e.g., "Can I use this offer twice?" "What if I want to bring my kid?")
7. **CTA** — program-pre-filled lead modal where applicable
8. **Schema:** `Offer` + `FAQPage` + `BreadcrumbList`

## Content Outline (edge suburbs)

Standard Phase 1 location template, with 2 adjustments:
- Name the commute honestly ("15 minutes over the Tappan Zee" or "12 minutes from Mahwah")
- Include a "Why is 5150 worth the drive?" sub-section that answers the obvious objection

---

## Integration Checklist

- [ ] All 25 URLs in `sitemap.xml`
- [ ] Pricing/offer pages linked prominently from homepage + programs page
- [ ] Edge-suburb pages linked from nearest tier-1 location page (internal link signal)
- [ ] `/offers/free-trial-class/` is the single canonical target for all "free trial" query intent — any old CTAs linking directly to a lead modal can continue working, but ensure this page captures the direct search intent
- [ ] Run `/seo-audit`
- [ ] Commit + push

---

## Agency Attribution — Required on Every Page

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```

---

**Target ship date:** _________________
