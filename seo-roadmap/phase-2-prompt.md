# PHASE 2 — Persona Expansion (25 pages)

**Paste this entire prompt into a fresh Claude Code session when you're ready to ship Phase 2.**

---

## Context — Read These First

1. `.agent/skills/site-redesign/SKILL.md`
2. `.agent/skills/seo-audit/SKILL.md`
3. `.agent/skills/programmatic-seo/SKILL.md`
4. `sites/5150-bjj/brand-kit.json`, `sites/5150-bjj/seo-roadmap/keywords.json`, `sites/5150-bjj/seo-roadmap/roadmap.md`
5. All Phase 1 pages already shipped — reference them when internal-linking

## Phase 2 Objective

Build **25 pages**: 15 persona × service combinations + 10 additional tier-1 neighborhood locations.

## Pages to Build

### Persona pages — 15 (`/for/{persona}-{service}/`)

Build one page per combination of these personas × primary services:

**Personas (5):** `beginners`, `adults-over-40`, `women`, `busy-professionals`, `stress-relief`
**Services (3):** `gracie-jiu-jitsu`, `kickboxing`, `kids-jiu-jitsu` (where applicable)

Build all combinations that make semantic sense (e.g., skip "Busy Professionals Kids Jiu-Jitsu" — doesn't match intent). Aim for 15 total.

Suggested pages:
1. `/for/beginners-jiu-jitsu/` — BJJ for Beginners
2. `/for/beginners-kickboxing/` — Kickboxing for Beginners
3. `/for/adults-over-40-jiu-jitsu/`
4. `/for/adults-over-40-kickboxing/`
5. `/for/women-jiu-jitsu/`
6. `/for/women-kickboxing/`
7. `/for/busy-professionals-jiu-jitsu/`
8. `/for/busy-professionals-kickboxing/`
9. `/for/stress-relief-jiu-jitsu/`
10. `/for/stress-relief-kickboxing/`
11. `/for/weight-loss-kickboxing/`
12. `/for/first-time-parents-tiny-sharks/`
13. `/for/shy-kids-jiu-jitsu/`
14. `/for/energetic-kids-jiu-jitsu/`
15. `/for/bullied-kids-jiu-jitsu/`

### Additional locations — 10 (`/locations/{neighborhood}/{service}/`)

Expand tier-1 coverage to these neighborhoods:
- `central-nyack`, `south-nyack`, `upper-nyack`, `valley-cottage`, `rockland-county` (regional umbrella)

Pair each with 2 of the 4 services (whichever has strongest program-market fit for that neighborhood). 5 × 2 = 10 pages.

---

## Content Outline (persona pages)

1. **Hero** — H1 that names the persona + service + city (e.g., "Jiu-Jitsu for Adults Over 40 in Nyack, NY")
2. **Pain points callout** — name 3 specific fears/objections this persona has (e.g., "Worried about injury?" "Think you're too old?" "Intimidated by the younger crowd?")
3. **How 5150 solves each** — 3-card block addressing each concern
4. **A real student match** — find or write a testimonial that matches this persona
5. **What a typical first month looks like** — timeline graphic / 4-stage block
6. **Persona-specific FAQ** — 5 questions tailored to this audience
7. **CTA** — book free class → lead modal with program preset
8. **Related pages** — 3 links to Phase 1 or Phase 2 pages (location + glossary + another persona)

## Content Outline (additional locations)

Same template as Phase 1 location pages — see `phase-1-prompt.md`.

---

## Required Schema

- **Persona pages:** `Service` + `FAQPage` + `BreadcrumbList`
- **Location pages:** `Service` + `LocalBusiness` + `BreadcrumbList` + `FAQPage`

## Integration Checklist

- [ ] Add all 25 new URLs to `sitemap.xml`
- [ ] Every persona page links back to the primary service hub (`/adults-gracie-jiu-jitsu.html` etc.)
- [ ] Every location page links to at least 2 Phase 1 location pages for cross-neighborhood signal
- [ ] Update footer to include a "Who It's For" section listing the 5 most-trafficked persona pages after 30 days
- [ ] Run `/seo-audit` on all 25 new pages
- [ ] Commit: `feat: phase 2 SEO expansion — 15 persona + 10 location pages`
- [ ] Push → auto-deploy → resubmit sitemap

---

## Agency Attribution — Required on Every Page

Every page built in this phase must include this line in the footer, linked to `https://www.mmamarketingpro.com`, opening in a new tab with `rel="noopener"`:

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```

---

**Target ship date:** _________________
