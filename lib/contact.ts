export interface ContactChannel {
  glyph: string;
  title: string;
  lines: string[];
}

export const contactChannels: ContactChannel[] = [
  {
    glyph: "📍",
    title: "Address",
    lines: ["Kathmandu, Nepal"],
  },
  {
    glyph: "✉️",
    title: "Email",
    lines: ["hello@digitalchautari.com"],
  },
  {
    glyph: "📞",
    title: "Phone",
    lines: ["+977 984 123 4567"],
  },
  {
    glyph: "🕘",
    title: "Business Hours",
    lines: ["Sunday to Friday", "10:00 to 18:00 NPT"],
  },
];

export interface Department {
  glyph: string;
  title: string;
  body: string;
  email: string;
}

export const departments: Department[] = [
  {
    glyph: "📣",
    title: "Marketing",
    body: "Campaigns, SEO, paid media and analytics.",
    email: "marketing@digitalchautari.com",
  },
  {
    glyph: "🎬",
    title: "Content Studio",
    body: "Photo, video and design production enquiries.",
    email: "studio@digitalchautari.com",
  },
  {
    glyph: "🛠️",
    title: "Software Dev",
    body: "Web, mobile and health-tech development.",
    email: "dev@digitalchautari.com",
  },
  {
    glyph: "📈",
    title: "Business Dev",
    body: "Partnerships, resellers and anything else.",
    email: "business@digitalchautari.com",
  },
];

export const projectTypes = [
  "Digital Marketing",
  "Content Creation",
  "Software Development",
  "Health-Tech",
  "Something else",
];

export const responseTimes = [
  { label: "Email", value: "Within 24 hours" },
  { label: "Proposals", value: "2 to 3 working days" },
  { label: "Urgent", value: "Same day" },
];
