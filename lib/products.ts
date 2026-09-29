export interface Venture {
  id: string;
  name: string;
  category: string;
  description: string;
  glyph: string;
  tone: "mint" | "teal" | "gold" | "lilac" | "pink";
  tags: string[];
}

export const ventures: Venture[] = [
  {
    id: "eco-creative",
    name: "Eco Creative Marketing Agency",
    category: "Digital Marketing",
    description:
      "Performance campaigns, search and paid social for brands that need measurable growth rather than vanity metrics.",
    glyph: "📣",
    tone: "mint",
    tags: [
      "Performance marketing",
      "SEO & SEM",
      "Paid social",
      "Analytics & reporting",
    ],
  },
  {
    id: "one-content",
    name: "One Content Creation Studio",
    category: "Content Creation",
    description:
      "Photography, video and design for Nepali brands, from everyday social reels to full campaign productions.",
    glyph: "🎬",
    tone: "teal",
    tags: ["Photography", "Video production", "Brand design", "Social content"],
  },
  {
    id: "physio-at-home",
    name: "Physio@Home",
    category: "Health-Tech",
    description:
      "Physiotherapy that travels with the patient, pairing guided in-home exercises with remote progress tracking.",
    glyph: "🩺",
    tone: "gold",
    tags: [
      "Home physiotherapy",
      "Exercise tracking",
      "Patient progress",
      "Telehealth",
    ],
  },
];
