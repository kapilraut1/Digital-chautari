export interface Sector {
  name: string;
  shortName: string;
  glyph: string;
  blurb: string;
}

export const sectors: Sector[] = [
  {
    name: "Healthcare",
    shortName: "Healthcare",
    glyph: "🏥",
    blurb:
      "Clinics and health-tech products that patients actually finish using.",
  },
  {
    name: "E-Commerce",
    shortName: "E-Commerce",
    glyph: "🛒",
    blurb:
      "Storefronts and campaigns that turn first-time visitors into repeat buyers.",
  },
  {
    name: "Real Estate",
    shortName: "Real Estate",
    glyph: "🏠",
    blurb:
      "Listings, virtual walkthroughs and lead funnels for developers and brokers.",
  },
  {
    name: "Education",
    shortName: "Education",
    glyph: "🎓",
    blurb:
      "Course platforms and admissions campaigns that work on a student budget.",
  },
  {
    name: "Tourism & Hospitality",
    shortName: "Tourism",
    glyph: "🏔️",
    blurb:
      "Story-led campaigns that put trekking operators and homestays in front of the world.",
  },
  {
    name: "Media & Publishing",
    shortName: "Media",
    glyph: "📰",
    blurb:
      "Audience growth, subscriptions and monetisation for editorial teams.",
  },
];
