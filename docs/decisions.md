# Decisions

Deviations from `docs/brand-spec.md`, and the judgement calls behind them.

## Phase 1: scaffold, tokens, fonts

- **Tailwind v3.4, not v4.** The brief requires every brand token to be a named
  `color` / `spacing` / `radius` / `boxShadow` key in `tailwind.config.ts`.
  Tailwind v4 moves configuration into CSS `@theme`, which would scatter hex
  values through stylesheets instead of one typed token map, so v3 stays.
- **`ctaBlue` is a token I added.** Spec 7 asks the Home closing CTA for a
  "teal-to-blue gradient panel", but section 2 defines no blue. I added
  `ctaBlue: #1D4ED8` and drive the panel from the `bg-cta-panel` gradient. It is
  used by that one panel and nothing else.
- **Fonts self-hosted through `next/font`.** Sora 600/700/800 and Inter
  400/500/600 load via `next/font/google` with `display: swap`, exposing
  `--font-sora` / `--font-inter`, which the Tailwind `font-display` and
  `font-sans` tokens consume. No `<link>` tags, no runtime font requests, nine
  self-hosted woff2 subsets in the build output.
- **Spacing and radius are semantic keys.** Spec 4 gives section rhythm as
  numbers (64 / 48 / 84px, 40px / 22px gutters, 20px grid gaps) and a radius
  scale. They are exposed as `section`, `section-tight`, `hero-top`,
  `hero-bottom`, `gutter`, `gutter-mobile`, `grid`, `button`, `chip`, `card`,
  `badge`, `pill` rather than as bare `px-16`, so components never repeat magic
  numbers.
- **App Router at the repo root.** No `src/` directory; pages in `app/`,
  components in `components/`, both under the `@/*` alias.
- **No image pipeline yet.** The spec has no photography, so blog placeholders,
  product mock panels and the contact map will be built from divs and CSS
  gradients. `next/image` is reserved for files that actually exist; the only
  binary-style asset so far is the SVG brand mark (`app/icon.svg`).

## Phase 2: header, footer, primitives

- **Reduced motion is enforced by Tailwind, not by a runtime check.** Every
  movement is written as `motion-safe:` (which compiles to
  `@media (prefers-reduced-motion: no-preference)`), so card lift, icon-chip
  scale and any future transform are absent by default for users who ask for
  reduced motion. Colour transitions are kept, since those are not motion.
- **No animation library.** The brief allows Framer Motion or CSS +
  IntersectionObserver. I chose the latter: scroll-reveal and staggering are ~30
  lines of `IntersectionObserver` in one hook, and it keeps the first-load
  bundle at 103 kB with zero extra dependencies.
- **`nav: 760px` is a custom Tailwind screen.** Spec 4 and 5 both put the
  mobile cut-off at 760px, but Tailwind's `md` is 768px, so `theme.extend.screens.nav`
  is defined at exactly 760px and every responsive breakpoint in the site uses
  the `nav:` prefix rather than `md:`.
- **Body copy on navy uses `white/70`.** The palette defines no muted-on-dark
  colour, and the only sensible derivation is white at reduced opacity. It
  measures about 7.9:1 against `#0B1220`, comfortably past AA.
- **Links with no destination page use `href="#"`.** The spec calls for a "Read
  more" blog action, a "Visit FAQ page" callout and footer Privacy Policy,
  Terms of Service and FAQ links, none of which have pages in this assignment.
  They are inert links by design rather than invented routes.
- **Footer copyright year is generated at build time** (`new Date().getFullYear()`)
  instead of hardcoding a year the spec never states.
- **Header gutters tighten to 24px between 760px and 1024px.** Wordmark plus
  tagline, five nav links and the Contact Us button do not fit the 40px gutter
  at exactly 760px. The narrower gutter only applies in that band; from 1024px
  it returns to the spec's 40px. This is the tightest spot in the layout and I
  want it confirmed visually in the responsive pass.

## Phase 3: Home

The spec fixes structure, headings, card titles, stat numbers, venture names
and the five sector names for Home, and says nothing about the prose around
them. Everything below is copy I wrote, and it is the only copy in the repo
that is not derived from the spec.

- **Hero lede**, the two "Who We Are" paragraphs, and the body text for the
  four feature-strip cards (Growth-Driven, Creative-First, Tech-Powered,
  Client-Centric — titles are from the spec).
- **Service teaser blurbs** for Digital Marketing, Content Creation, Software
  Development and Branding & Design.
- **Descriptions and category labels for the three ventures**, plus the tag
  lists used on the Products page.
- **Six sector blurbs** (sector names are from the spec).
- **Four process step bodies** for Discover, Design, Develop, Deliver.
- **Three testimonials**: quotes, names and job titles. The companies are
  fictional Nepali businesses, which is the only way to satisfy "3 quote cards
  with name, title/company" without inventing real endorsements.
- **Three blog posts**: titles, excerpts, categories and read times. Dates are
  set in 2026 to sit after the 2025 founding date in the spec.
- **Section eyebrows and supporting headings** such as "Our track record",
  "How we work", "Client stories" and "Experience across six industries",
  because the spec describes these blocks without giving them headings.

Structural choices worth recording:

- **Shared page data lives in `lib/`** (`products`, `sectors`, `testimonials`,
  `posts`) so the Products and Services pages reuse the same ventures and
  sectors instead of restating them.
- **The ventures carry tags, not invented metrics.** The Products page asks for
  "stats or tags"; inventing per-product performance numbers next to the
  spec's real figures (250+ projects, 98% retention) would have made the site
  look more precise than it can be, so the panel shows capability tags.
- **`Card` gained one optional `badge` prop** to hold the process step numbers
  (`01`–`04`) beside the icon, rather than forking a second card component.
- **Blog placeholders are CSS gradients** built from palette tokens with a fixed
  16:10 aspect ratio, so there is no image request and no layout shift. The
  "Read more" link is `href="#"` since there are no post pages.
- **Both stat bars are the same component** (`StatBar`, `tone="navy"` for the
  dark banner), so the hero and the impact banner cannot drift apart.
- **`playwright` is a devDependency** used only by `scripts/audit.mjs`, which
  sweeps all five routes at 1440/1024/760/390px, screenshots each one, and
  records console errors, page errors, failed requests and horizontal overflow.

## Phase 4: Services, Products, About, Contact

As with Home, the spec fixes structure and the important headings; the prose
around them is mine and is listed here.

- **Services page:** hero lede; service-category rows get a section heading
  ("Three services, one team") and a lede; the Content Creation and Software
  Development sub-service grids (spec only lists Digital Marketing's four) with
  their blurbs; pricing lede, tier summaries and feature checklists, plus the
  pricing footnote; the "Why work with us" section adds a heading ("Six reasons
  clients stay"); closing CTA heading.
- **Products page:** hero lede; the two-column panel shots use the venture data
  already in `lib/products.ts`, so the descriptions and tags match Home; the
  spotlight banner gains its supporting paragraph ("Recovery does not happen in
  the clinic...").
- **About page:** hero lede; four story paragraphs; the stat tiles map the
  spec's four facts (2025 Founded, 3 Products, Kathmandu HQ, 7+ Team Members)
  into short labels; mission/vision copy; four value-card bodies; four
  trust-card bodies; the seven team cards show job title plus a one-line
  responsibility with a monogram chip instead of invented names (there is no
  naming data in the spec); roadmap milestones get one supporting sentence
  each.
- **Contact page:** hero lede; department blurbs; fake-but-plausible contact
  details (a `@digitalchautari.com` address family, a `+977 984 123 4567`
  phone number and Sunday–Friday office hours, per Nepal's working week); the
  response-time list is verbatim from the spec. The office street line
  ("Jhamsikhel, Lalitpur") is invented for a map card that has no map data.

Structural choices worth recording:

- **`Tabs` is a controlled, generic tablist** (props: `items`, `value`,
  `onChange`, `idPrefix`) with WAI-ARIA roles, roving `tabindex` and arrow /
  Home / End keyboard selection. A tiny client component (`ProductSwitcher`)
  holds the active state while the three venture panels stay server-rendered
  and are passed in as already-rendered nodes — so the page's data work does
  not ship as JavaScript.
- **Mock UI previews are decorative.** Each venture panel pairs its copy with a
  CSS-built mock screen (marketing dashboard, studio board, physio plan) marked
  `aria-hidden="true"`; the venture copy beside it is the accessible content.
  The balance ring in the Physio render uses an SVG circle (token colours via
  `stroke="currentColor"`), not an image.
- **`Card` gained a `heading` prop** (`h2` | `h3` | `h4`) so nested grids
  (category `h3` → sub-service `h4`) keep a correct heading hierarchy.
- **`Timeline`** is the alternating left/right card on the About page: a
  centred line (offsets left on small screens), leaf-coloured dots and gold
  year pills, all from palette tokens.
- **The contact form is front-end only.** It validates with native `required`
  fields, turns the Project Type picker into real radio inputs styled as pills
  (keeps native keyboard and screen-reader behaviour), and swaps in a success
  state on submit. There is no POST target in this assignment, so no mail is
  actually sent; flagged here rather than pretending otherwise.
- **The map card is a placeholder**: a `bg-map-grid` token (a faint grid drawn
  from the ink token) plus decorative blocks and a pin, no map service or
  image request. It carries the office address in real text next to it.
- **Footer service links now point at existing anchors.** The Home teaser
  advertises a "Branding & Design" service that the Services page (per the
  spec) does not include; the footer's fifth link is now "Industries" instead
  of a dead `#branding-design` anchor. This was a `fix:` commit.

## Phase 5: reveal, a11y and Lighthouse

- **Scroll reveal is one `Reveal` component.** It observes its own element with
  `IntersectionObserver` (threshold 0.12, small negative root margin), fades and
  lifts it in over 500ms, and clears its transition delay once visible so
  subsequent hover animations are not delayed. Grid items pass
  `delay={stagger(index)}` (70ms per item, capped at 280ms). Every one of its
  styles is `motion-safe:` (`prefers-reduced-motion: no-preference`) and the
  effect also bails out when `reduce` is active, so the page renders fully
  visible and static for reduced-motion users.
- **`stagger` lives in `lib/reveal.ts`**, a plain server-safe module, because
  the component file is `"use client"` and scheduling helpers cannot be called
  from server components.
- **Contrast fixes from the a11y pass.** White text on the primary teal
  (`#0F9488`) measures 3.74:1 — fine for large display heads, not for 14px
  buttons. So solid fills that carry small text (primary buttons, the selected
  product tab, the selected project-type pill, the skip link, the story
  tiles) moved to `primaryDark` (`#0B6F66`, 6.0:1 white). Emoji + `text-primary`
  links on white (Learn more / Read more / department emails) are now
  `text-primaryDark` and underline on hover; the step badges are solid gold
  with navy text instead of translucent gold, and the logo mark gradient runs
  `primaryDark → navy`. Where a chip tint carries a check mark, `primaryDark`
  is used (all chip tints measure ≥ 5.1:1 against it).
- **Lighthouse 100/100/100 on every page.** After the contrast fixes the
  accessibility, best-practices and SEO categories score 100 across all five
  routes; performance scores 93–98 (mobile-throttled), with products lowest
  due to tab hydration TBT and self-hosted font render-blocking — no structural
  win worth trading for product-breaking motion or CDNs.
- **`scripts/parse-lighthouse.mjs`** reads the per-page JSON reports and prints
  the category scores plus any failing accessibility/best-practices audits, so
  the audit is repeatable without eyeballing 700KB of JSON. Both `.audit` and
  `.lighthouse` outputs are gitignored.
