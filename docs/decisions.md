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
