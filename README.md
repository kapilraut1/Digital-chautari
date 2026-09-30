# Digital Chautari — Marketing Website

- **Live:** pending — after `npx vercel login`, run `npx vercel --prod --yes`
- **Repo:** <https://github.com/kapilraut1/Digital-chautari>

I built this five-page marketing site (Home, Services, Products, About, Contact) for Digital Chautari, a creative technology studio in Kathmandu. It follows the brand spec in `docs/brand-spec.md`, with every design token in `tailwind.config.ts`. Copy that isn't in the spec is flagged in `docs/decisions.md`.

## Stack

- Next.js 15 (App Router, static pages) + React 19 + TypeScript
- Tailwind CSS 3.4
- Sora + Inter fonts via `next/font/google`
- Husky + lint-staged (Prettier + ESLint on commit)

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the dev server                          |
| `npm run build`     | Production build                              |
| `npm run lint`      | ESLint                                        |
| `npm run typecheck` | `tsc --noEmit`                                |
| `npm run audit`     | Viewport/console/overflow sweep + screenshots |
| `npm run format`    | Prettier write                                |

## Structure

- `app/` — routes (one folder per page)
- `components/` — feature sections and shared primitives
- `lib/` — copy data, nav, and helpers
- `docs/` — brand spec and decisions log
- `scripts/` — audit and verification tooling

The whole site is statically rendered. The only client components are the header menu, product tab switcher, contact form, and the scroll-reveal wrapper. All motion respects `prefers-reduced-motion`.
