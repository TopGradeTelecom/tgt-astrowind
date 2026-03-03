# TODO

## 1) Dial In Downtime Calculator Logic

- [ ] Verify and document benchmark sources used in UI copy:
  - New Relic outage metrics (industry downtime context)
  - BLS ECEC labor cost averages
- [ ] Confirm default assumptions by industry:
  - General: 77 hours/year, $43.31/hour
  - Healthcare: 77 hours/year baseline, $48.39/hour
  - Education: 158 hours/year, $55.31/hour
  - Retail: 164 hours/year, $26.22/hour
- [ ] Re-validate formulas and units end-to-end:
  - Outage cost/hour calculation
  - Annual outage cost calculation
  - MSP projected loss and savings calculation
  - Ensure all user-facing language consistently uses `hours/year`
- [ ] UX logic checks:
  - Industry selection should preset downtime + employee cost immediately
  - Manual overrides should remain editable and respected
  - Simplified and advanced modes should stay in sync
- [ ] QA calculator behavior across desktop/mobile (including edge cases: 0 values, large values, currency switches)

## 2) SEO + Accuracy Review (One Page At A Time)

- [ ] Establish review checklist to apply to every page:
  - Title tag quality and uniqueness
  - Meta description quality and uniqueness
  - Canonical URL correctness
  - One clear H1 and logical heading structure
  - Internal linking relevance and anchor clarity
  - Factual accuracy of claims, stats, and CTAs
  - Schema opportunities (where applicable)

- [ ] Core pages:
  - [ ] `/`
  - [ ] `/about`
  - [ ] `/services`
  - [ ] `/services/[service]`
  - [ ] `/contact`
  - [ ] `/downtime-calculator`
  - [ ] `/pricing`
  - [ ] `/careers`
  - [ ] `/legal`
  - [ ] `/privacy-policy`

- [ ] Supporting/marketing templates:
  - [ ] `/homes/mobile-app`
  - [ ] `/homes/personal`
  - [ ] `/homes/saas`
  - [ ] `/homes/startup`
  - [ ] `/landing/click-through`
  - [ ] `/landing/lead-generation`
  - [ ] `/landing/pre-launch`
  - [ ] `/landing/product`
  - [ ] `/landing/sales`
  - [ ] `/landing/subscription`

- [ ] Platform/system routes:
  - [ ] `/404`
  - [ ] `/rss.xml`
  - [ ] Blog list/pagination/category/tag templates

## 3) Execution Order

- [ ] Complete calculator logic pass first
- [ ] Review pages in priority order (core pages -> supporting pages -> system routes)
- [ ] Log findings and fixes directly under each page item as completed notes

## 4) Visual Content

- [ ] Fix stock images (replace with branded/original photography where possible)
