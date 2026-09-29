export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  glyph: string;
  tone: "teal" | "gold" | "leaf" | "navy" | "blue";
}

export const blogPosts: BlogPost[] = [
  {
    title: "What a Rs 50,000 monthly budget actually buys in Nepal",
    excerpt:
      "A realistic breakdown of where digital budgets go in Kathmandu, and which channels still return more than they cost for a growing Nepali brand.",
    category: "Marketing",
    date: "12 Sep 2026",
    readTime: "6 min read",
    glyph: "📊",
    tone: "teal",
  },
  {
    title: "Why home physiotherapy needs better data",
    excerpt:
      "Recovery happens between appointments, not during them. Here is what we learned building progress tracking for patients who never leave home.",
    category: "Health-Tech",
    date: "28 Aug 2026",
    readTime: "8 min read",
    glyph: "🩺",
    tone: "leaf",
  },
  {
    title: "Filming in Kathmandu without losing the light",
    excerpt:
      "Practical notes on shooting documentary-style video in a city where the weather changes every twenty minutes and the traffic never does.",
    category: "Content",
    date: "15 Aug 2026",
    readTime: "5 min read",
    glyph: "🎥",
    tone: "gold",
  },
];
