# PHASE 1 — Foundation: Tier-1 Location Pages (25 pages)

**Paste this entire prompt into a fresh Claude Code session when you're ready to ship Phase 1.**

---

## Context — Read These First

1. `.agent/skills/site-redesign/SKILL.md` — design system + Mobile Quality Bar
2. `.agent/skills/taste-skill/SKILL.md` — premium design rules
3. `.agent/skills/seo-audit/SKILL.md` — post-build SEO pass
4. `.agent/skills/programmatic-seo/SKILL.md` — playbooks and uniqueness rules
5. `sites/5150-bjj/brand-kit.json` — Electric indigo `#3225BA` on obsidian dark-mode
6. `sites/5150-bjj/seo-roadmap/keywords.json` — keyword + location inventory
7. `sites/5150-bjj/seo-roadmap/roadmap.md` — full 6-month overview

## Phase 1 Objective

Build **25 new pages** that establish 5150 Martial Arts as a local authority in the top 5 Rockland County neighborhoods. 20 location pages + 5 foundational glossary pages.

## Pages to Build

### Location pages — 20 (`/locations/{neighborhood}/{service}/`)

Build one page per combination of the 5 **top-priority neighborhoods** × 4 **primary services**:

**Neighborhoods (tier 1, highest customer overlap):**
1. `nyack` (core service address)
2. `pearl-river`
3. `nanuet`
4. `west-nyack`
5. `new-city`

**Services:**
1. `gracie-jiu-jitsu` (adults)
2. `kids-jiu-jitsu`
3. `tiny-sharks` (parent-and-me 3–5)
4. `kickboxing`

### Glossary foundation — 5 (`/learn/{slug}/`)

1. `what-is-gracie-jiu-jitsu`
2. `what-is-brazilian-jiu-jitsu`
3. `is-bjj-safe-for-kids`
4. `what-to-wear-first-bjj-class`
5. `how-old-kids-bjj`

---

## Title + Meta + H1 — Pre-Written

### Location pages — pattern

- **Title:** `{Service} in {Neighborhood}, NY | 5150 Martial Arts` (55–60 chars)
- **Meta description:** `{Service} near {Neighborhood}, NY — Gracie-lineage training at 5150 Martial Arts. Free trial class. Just minutes from {neighborhood-specific landmark}.` (150–160 chars)
- **H1:** `{Service} in {Neighborhood}, NY`

### Glossary pages — pattern

- **Title:** `{Question}? — 5150 Martial Arts Nyack NY` (55–60 chars)
- **Meta description:** `{1-sentence answer}. Explained by the Gracie-lineage professors at 5150 Martial Arts in Nyack, NY. Free trial class available.` (150–160 chars)
- **H1:** `{Question Answered in Heading Form}` — e.g., "What Is Gracie Jiu-Jitsu?"

---

## Content Outline (every location page)

1. **Hero:** H1 + 1-sentence lead that mentions neighborhood landmark (e.g., "Just 7 minutes from Pearl River Middle School").
2. **Unique intro paragraph** — 80–120 words. Name the neighborhood, mention commute time to 352 Route 59, name one or two local landmarks (schools, malls, parks, parkways), and state which 5150 program fits best.
3. **What you'll learn** (3-card benefits block — pull from `content-profile.json` program content)
4. **Schedule snapshot** (table of 3–5 class slots for this service; link to full schedule)
5. **Testimonial** — real review from `content-profile.json`, ideally one attributable to a similar neighborhood
6. **Neighborhood-specific FAQ (3 questions)** — examples:
   - "How long does it take to get from {neighborhood} to 5150 Martial Arts?"
   - "Do you offer classes that fit {neighborhood parent} work schedules?"
   - "Is parking easy at 352 Route 59?"
7. **Embedded map** showing the route from the neighborhood center to 352 Route 59
8. **CTA** — "Book your free {service} class" → opens lead modal with `data-program` preset to the service
9. **Related pages** — 3–4 contextual links to OTHER Phase 1 pages (e.g., from "Kids BJJ in Pearl River" link to "Kids BJJ in Nanuet" and "Adults BJJ in Pearl River")

## Content Outline (every glossary page)

1. **Hero:** H1 + 1-sentence plain-English answer
2. **Deep answer** — 400–600 words of authoritative content, written as if Prof. Scott O'Keeffe is explaining it
3. **Sidebar/callout** — "Want to see this in person? Book a free class at 5150." (CTA → lead modal)
4. **Related FAQs** — 5 additional questions + short answers, wrapped in `FAQPage` schema
5. **Related reading** — 3 links to other glossary pages + 1 link to a core service page
6. **Local attribution** — "By the team at 5150 Martial Arts — Nyack, NY" byline with link to `/instructors.html`

---

## Required Schema per Page

- **Location pages:** `Service` + `LocalBusiness` (with `serviceArea` scoped to the neighborhood) + `BreadcrumbList` + `FAQPage`
- **Glossary pages:** `Article` + `FAQPage` + `BreadcrumbList`

---

## Integration Checklist

- [ ] Add new pages to `sitemap.xml` with `priority: 0.7` for locations, `0.6` for glossary
- [ ] Add a "Locations" dropdown to the main navbar OR a Locations section to the footer linking to all 5 neighborhood hubs
- [ ] Update the footer "Quick Links" column to include a `/learn/` link pointing to a new glossary index (optional)
- [ ] Every new page must include the same nav, footer (including **"Powered by MMA Marketing Pro"** attribution linking to `https://www.mmamarketingpro.com` in a new tab with `rel="noopener"`), and lead modal as the existing 9 content pages
- [ ] Run `/seo-audit` on all 25 new pages after building
- [ ] Git commit: `feat: phase 1 SEO expansion — 20 location + 5 glossary pages`
- [ ] Push to GitHub → Cloudflare Pages auto-deploys
- [ ] Submit updated `sitemap.xml` to Google Search Console

## Post-Build Verification

- Open each page in browser at 375px and 1440px — verify mobile hero, mobile menu, all CTAs work
- Each location page has a unique neighborhood landmark in the hero
- Each FAQ section is actually neighborhood-specific (not variable-swap copies)
- No page is orphaned — every new page has at least 3 inbound links from elsewhere in the site
- All 25 new pages have the **"Powered by MMA Marketing Pro"** footer line

---

## Agency Attribution — Required on Every Page

Every page built in this phase must include this line in the footer, linked to `https://www.mmamarketingpro.com`, opening in a new tab with `rel="noopener"`:

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```

Never remove, replace, or rebrand this. The `/seo-audit` step verifies it.

---

**Target ship date:** _________________ (user fills in)
