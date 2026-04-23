# PHASE 6 — Fill Matrix Gaps + Refresh Phase 1 (25 pages)

**Paste this prompt into a fresh Claude Code session when you're ready to ship Phase 6.**

---

## Context

Skill references per prior phases. 125 pages live. Phase 6 closes the matrix and uses 6 months of Search Console data to optimize the earliest pages.

## Phase 6 Objective

Build **15 new pages** + **refresh 10 existing Phase 1 pages** = 25 total actions.

## New pages — 15 (fill matrix gaps)

Review the 6-month roadmap keyword matrix and identify 15 unbuilt combinations that:
- Have shown search impressions in Google Search Console but no dedicated landing page
- Cover remaining service × persona or service × neighborhood gaps
- Target specific long-tail queries the client wants to rank for

Examples of the kinds of gaps to fill (actual list depends on GSC data at time of Phase 6):
- `/for/teenagers-jiu-jitsu/` — teens specifically
- `/for/competitors-bjj/` — competition-track adult BJJ
- `/compare/5150-vs-[local competitor]/` — brand-vs-brand if a real competitor has emerged
- `/locations/{neighborhood}/kickboxing/` — kickboxing in neighborhoods that only got BJJ pages in Phase 1
- Niche glossary: `/learn/bjj-rash-guard-guide/`, `/learn/how-often-wash-bjj-gi/`, `/learn/bjj-tournament-rules/`
- Seasonal: `/offers/back-to-school-kids-bjj/`, `/offers/new-years-resolution-kickboxing/`

Pick 15 that align with actual ranking opportunities shown in Search Console.

## Refresh — 10 Phase 1 pages

Pick the 10 Phase 1 pages that have the **most impressions but the lowest CTR** in Google Search Console. For each:

1. Re-read the current content — is it still accurate? (e.g., did the schedule change? is a testimonial now dated?)
2. Rewrite the title tag based on which actual queries drive impressions (from GSC query data)
3. Update the meta description to match — A/B consideration: does the current meta promise match what the page delivers?
4. Add any new FAQ questions users are searching for (GSC reveals this)
5. Add 2–3 new contextual internal links to pages built in Phases 2–5 (older pages get boosted by linking to newer, related pages)
6. Swap out any Unsplash placeholders for real photos if the client has provided them by now
7. Re-run `/seo-audit` on each refreshed page

---

## Integration Checklist

- [ ] 15 new URLs added to `sitemap.xml`
- [ ] Each refreshed Phase 1 page has its `<lastmod>` date updated in `sitemap.xml`
- [ ] Run `/seo-audit` on all 25 pages
- [ ] Commit: `feat: phase 6 SEO expansion — 15 matrix gap pages + 10 refreshes`
- [ ] Push → deploy → resubmit sitemap

## Retrospective Checklist (end of 6 months)

Run this retro after Phase 6 ships:

- [ ] Total indexed pages: target 145+ of 150 planned
- [ ] Pages ranking in top 20 for at least one keyword: target 100+
- [ ] Pages ranking in top 10: target 30+
- [ ] Total incremental organic sessions/mo vs. pre-phase-1: target +3,000/mo
- [ ] Trial bookings attributable to new pages (via GHL form program field + GA4 referrer): target +35/mo
- [ ] Pages to consider deleting/consolidating: any with zero impressions after 90 days

Any pages that failed to gain traction after Phase 6 should be flagged for deletion, consolidation, or no-index in Phase 7 (if the user wants to continue beyond 6 months).

---

## Agency Attribution — Required on Every Page

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```

---

**Target ship date:** _________________
