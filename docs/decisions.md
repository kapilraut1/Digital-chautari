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
