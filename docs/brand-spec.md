# Frontend Assignment Task

**Stack:** Next.js (frontend and backend)

---

## 1. Brand Overview

**Company:** Digital Chautari, a creative technology company in Kathmandu, Nepal, offering digital marketing, content creation, and health-tech software.

---

## 2. Color Palette

| Role                   | Hex     | Usage                                                                         |
| ---------------------- | ------- | ----------------------------------------------------------------------------- |
| Primary (Teal)         | #0F9488 | Primary buttons, links, active nav state, icon accents                        |
| Primary Dark           | #0B6F66 | Hover states, dark-section accent text                                        |
| Gold / Accent          | #E0A930 | Highlight word in headlines, "most popular" badges, dark-section eyebrow tags |
| Leaf Green             | #7FAE3A | Secondary gradient stop in headline text, tertiary accent                     |
| Ink (text)             | #101826 | Primary body/heading text                                                     |
| Navy (dark sections)   | #0B1220 | Stats banners, footer, "how we work", dark CTA backgrounds                    |
| Navy Card              | #101D2B | Cards placed on navy backgrounds                                              |
| Navy Border            | #223140 | Borders on dark cards                                                         |
| Paper (background)     | #FBFBF9 | Page background                                                               |
| Line (borders)         | #E7E5DF | Default card/input borders                                                    |
| Muted (secondary text) | #5B6472 | Body copy, captions, subtext                                                  |

**Gradient headline treatment:** key phrases in H1s use a 90° gradient across Teal → Gold → Leaf Green, clipped to text:

```css
linear-gradient(90deg, #0F9488, #E0A930, #7FAE3A)
```

**Pastel icon-chip backgrounds** (used behind emoji/icons in feature cards):

| Name       | Hex     |
| ---------- | ------- |
| Mint       | #E7F5EA |
| Pale teal  | #E7F2F4 |
| Pale gold  | #FDF1DE |
| Pale lilac | #F4E9F6 |
| Pale pink  | #FDEEF0 |

Rotate these across repeating icon cards for variety without adding new hues.

---

## 3. Typography

- **Headings font:** "Sora" (Google Fonts), weights 600 / 700 / 800
- **Body font:** "Inter" (Google Fonts), weights 400 / 500 / 600
- **Base body size:** 16px, color `#101826`, line-height 1.5

---

## 4. Layout & Spacing System

- **Max content width:** 1120px, centered, with 40px side padding on desktop, 22px on mobile (≤760px).
- **Vertical section rhythm:** standard sections use 64px top/bottom padding; "tight" sections use 48px; hero sections use 84px top / 48px bottom.
- **Grid gaps:** 20px between cards in a grid (2, 3, or 4 columns depending on content count).
- **Border radius scale:** 9–10px for small icon chips, 12px for all cards/inputs (standardized), 14–20px for pill buttons/badges.
- **Shadows:** cards are borderline flat (1px solid `#E7E5DF`) at rest; on hover, lift 4–5px with a soft shadow `0 16px 30px -18px rgba(16,24,38,0.2)`.
- **Buttons:**
  - Primary: solid teal, white text, 13px/24px padding, 8px radius.
  - Ghost/secondary: white background, 1px border, same padding.

---

## 5. Global Components

- **Header:** sticky, white/blur background, logo (rounded teal-gradient square with "DC" mark) + wordmark + tagline, center nav links (Home / Services / Products / About / Contact), right-aligned "Contact Us" teal button. Collapses to a hamburger dropdown under 760px.
- **Hero pattern (every page):** full-bleed soft mint-to-paper gradient background with a subtle radial teal/gold glow in the top-right corner; centered/left-aligned eyebrow pill + big gradient-word H1 + lede paragraph, max text width ~660–720px.
- **Stat bar:** a single bordered white card split into 3–4 equal segments with vertical dividers, each holding an icon chip + bold number + small label.
- **Dark banner sections:** navy background, gold eyebrow tag, white H2, used for stats, process steps, testimonials-adjacent breaks, and final CTAs.
- **Cards:** white, 1px border, 12px radius, 22px padding, icon chip top-left, H3, muted body text.
- **Footer:** navy background, 4-column layout (brand blurb, Company links, Services links, Legal links), divider line, centered copyright.

---

## 6. Motion & Interaction

- Page/section switches fade + slide in (~0.45s ease).
- Cards and grid items reveal on scroll with a slight upward fade, staggered ~70ms per item.
- Cards lift on hover (translateY -4 to -5px) with shadow growth; icon chips scale up slightly (1.08×) on card hover.
- All motion respects `prefers-reduced-motion`.

---

## 7. Page-by-Page Content Spec

### Home

1. **Hero:** Eyebrow "🚀 Welcome to Digital Chautari" · H1 "We build digital bridges between ideas and impact" (gradient on "digital bridges") · lede describing the company · two buttons ("Explore Services →", "View Products") · stat bar (3 Products / 6+ Team Members / 100% Commitment).
2. **Feature strip:** 4 cards: Growth-Driven, Creative-First, Tech-Powered, Client-Centric.
3. **Who We Are:** "A Chautari where ideas meet execution". Two paragraphs of brand story, a 2×2 checklist (Creative Strategy, Brand Storytelling, Full-Stack Engineering, Health-Tech Expertise), "Meet the Team →" button. Right side shows a 2×2 grid of service teaser cards (Digital Marketing, Content Creation, Software Development, Branding & Design).
4. **Dark stats banner:** 250+ Projects Delivered, 40+ Happy Clients, 1M+ Content Views, 98% Client Retention.
5. **Products teaser:** "Three ventures, one vision". 3 cards (Eco Creative Marketing Agency, One Content Creation Studio, Physio@Home), each with icon, category label, description, "Learn more →".
6. **Sectors we serve:** 6 industry cards (Healthcare, E-Commerce, Real Estate, Education, Tourism & Hospitality, Media & Publishing).
7. **Dark "Our 4-step process":** Discover, Design, Develop, Deliver. Numbered icon cards on navy.
8. **Testimonials:** 3 quote cards with 5-star ratings, name, title/company.
9. **Blog teaser:** "Latest from our blog". 3 article cards with colored placeholder image block, category tag, date/read-time, title, excerpt, "Read more →".
10. **Closing CTA:** teal-to-blue gradient rounded panel, "Ready to build something extraordinary together?" with "Start a Project →" and "View Services" buttons.

### Services

1. **Hero:** "Services that drive growth".
2. **Service categories:** 3 rows (Digital Marketing, Content Creation, Software Development), each with icon + title + description on the left and a 2×2 grid of sub-services on the right (e.g. SEO & SEM, Social Media Marketing, Paid Advertising, Analytics & Reporting under Digital Marketing).
3. **Pricing:** 3 tiers:
   - Starter (Rs 15,000/mo)
   - Professional (Rs 45,000/mo, "Most Popular", dark card)
   - Enterprise (Custom)

   Each with a feature checklist and CTA button.

4. **Industries:** "Who we work with". 6 simple icon + label cards (Healthcare, E-Commerce, Real Estate, Education, Tourism, Media).
5. **Dark "Why work with us":** 6 checklist items (Dedicated project manager, Agile development cycle, Transparent pricing, Post-launch support, Scalable architecture, Cross-platform expertise).
6. **Closing CTA:** "Let's find the right service for you" + "Book a Consultation →".

### Products

1. **Hero:** "Three ventures, one vision".
2. **Tabbed product switcher:** pill tabs for Eco Creative Marketing Agency / One Content Creation Studio / Physio@Home. The selected tab shows a two-column panel (category label, title, description, stats or tags, CTA button; mock UI preview panel on the right).
3. **Dark spotlight banner:** "Physio@Home: healthcare reimagined" with supporting line.

### About

1. **Hero:** "The people behind Digital Chautari".
2. **Story block:** "From a chautari to a digital powerhouse". Narrative + 2×2 stat/info tiles (2025 Founded, 3 Products, Kathmandu HQ, 7+ Team Members) in alternating teal / navy / white / gold tiles.
3. **Mission & Vision:** two side-by-side cards.
4. **Values:** 4 cards: Passion, Creativity, Excellence, Collaboration.
5. **Dark "Committed to quality & trust":** 4 cards: ISO 9001 Ready, Data Protection, Global Delivery, Pan-Nepal Network.
6. **Team roles:** 7 cards: Founder & CEO, Co-Founder & COO, Front-End Developer, Back-End Developer, Marketing Lead, Sales Executive, Business Development Officer.
7. **Dark roadmap:** alternating left/right timeline with a centered vertical line, green dots, and gold year pills:
   - The Idea (2025)
   - First Products (2025)
   - Health-Tech Entry (2026)
   - Company Registration (2026)
8. **Closing CTA:** "Want to join our journey?" + "Get in Touch →".

### Contact

1. **Hero:** "Let's start a conversation".
2. **Contact info cards:** Address (Kathmandu, Nepal), Email, Phone, Business Hours.
3. **Direct lines:** "Reach the right team". 4 department cards (Marketing, Content Studio, Software Dev, Business Dev), each with a direct email.
4. **Two-column contact block:**
   - Left: form (Name, Email, Subject, Project Type as clickable pill tags, Message, Send button).
   - Right: map placeholder card, dark "Need quick answers? Visit FAQ page →" callout, and a Response Time list (Email 24h, Proposals 2–3 days, Urgent same day).
