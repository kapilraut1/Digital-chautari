# Digital Chautari — marketing website for a Kathmandu creative-technology studio

- **Live:** <https://digital-chautari-pi.vercel.app/>
- **Repo:** <https://github.com/kapilraut1/Digital-chautari>

## What this is

A five-page marketing site (Home, Services, Products, About, Contact) built as a frontend assignment. It implements a provided brand spec rather than approximating it — palette, typography, spacing, radii, and motion behavior all follow `docs/brand-spec.md`. The site is statically rendered; only the menu, product tabs, contact form, and scroll reveals run client-side.

## Tech stack

- Next.js 15 (App Router, static output)
- React 19 + TypeScript
- Tailwind CSS 3.4
- next/font — Sora and Inter, self-hosted (no external stylesheets or CDN fonts)
- Husky + lint-staged, ESLint, Prettier
- Playwright, used only by the headless QA scripts

## Features

- [x] **Home** — hero, feature strip, impact stats, sectors, process, testimonials, blog teaser, closing CTA
- [x] **Services** — three categories with sub-services, pricing tiers with a featured card, industries grid, why-us
- [x] **Products** — accessible tab switcher (click plus arrow, Home, and End keys) across three ventures with mock UI previews
- [x] **About** — story tiles, mission and values, team roles, roadmap timeline
- [x] **Contact** — channel cards, direct lines, form with pill-style radio tags and a success state
- [x] **Motion** — scroll reveal with a 70ms stagger, fully disabled under `prefers-reduced-motion`
- [x] **Accessibility** — Lighthouse accessibility 100 on every page; one H1 per page; heading hierarchy verified by script
- [x] **Responsive** — audited at 1440, 1024, 760, and 390px with no overflow at any width

## Design system

Colors, spacing, radii, shadows, and type presets all live in one file: `tailwind.config.ts`, which encodes the brand spec in `docs/brand-spec.md` token-for-token. Components reference tokens by name (`bg-primaryDark`, `text-muted`, `py-section`, `rounded-card`), and no component hardcodes a hex value. The only palette addition is `ctaBlue` (#1D4ED8), which the spec's teal-to-blue closing CTA gradient needs because the spec defines no blue of its own.

## Getting started

Requires Node 18.18+ or any recent LTS. No environment variables are needed.

```bash
git clone https://github.com/kapilraut1/Digital-chautari.git
cd Digital-chautari
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

## Project structure

```
.
├── app/          # routes — one folder per page plus layout.tsx
├── components/   # primitives (Button, Card, Tabs, Reveal, Timeline) + per-page sections
├── lib/          # copy data and helpers (nav, pricing, sectors, contact, cn, reveal)
├── docs/         # brand-spec.md
└── scripts/      # audit, interaction verification, lighthouse report parser
```

## Decisions and trade-offs

- The spec gives section intent but not final wording for testimonials, blog posts, and page intros, so I wrote that copy in the brand voice without inventing client names.
- Links with no target page in the brief ("Read more", FAQ, legal links) use `href="#"` rather than fabricated routes.
- The spec lists no contact details, so the contact form is front-end only: native validation, a success state, and no fake backend.
- White on the spec's Primary teal measures 3.74:1, below WCAG AA; primary buttons and selected tabs use Primary Dark (#0B6F66, roughly 6:1) instead.
- I kept Tailwind v3.4 so the design system stays in one config file; v4 spreads tokens into CSS `@theme`, which would put hex values back into stylesheets.
- Given more time I would add real article pages, a backend for the contact form, and deeper product pages than the tab panels.

## Lighthouse

Mobile-throttled runs against the production build, saved as JSON per page in `.lighthouse/`. Accessibility, best practices, and SEO score 100 on every page; the performance column is the only variation:

| Page     | Performance | Accessibility | Best practices | SEO |
| -------- | ----------- | ------------- | -------------- | --- |
| Home     | 95          | 100           | 100            | 100 |
| Services | 96          | 100           | 100            | 100 |
| Products | 93          | 100           | 100            | 100 |
| About    | 98          | 100           | 100            | 100 |
| Contact  | 98          | 100           | 100            | 100 |
