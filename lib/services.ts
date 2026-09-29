export interface SubService {
  title: string;
  body: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  glyph: string;
  description: string;
  subServices: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    glyph: "🎯",
    description:
      "Search, social and paid campaigns managed against revenue, not impressions.",
    subServices: [
      {
        title: "SEO & SEM",
        body: "Technical fixes, content structure and paid search that share one keyword plan.",
      },
      {
        title: "Social Media Marketing",
        body: "Organic and paid social calendars built around how Nepali audiences actually browse.",
      },
      {
        title: "Paid Advertising",
        body: "Meta, TikTok and YouTube campaigns with creative testing built into the budget.",
      },
      {
        title: "Analytics & Reporting",
        body: "Tracking that survives consent banners and a dashboard you can read in five minutes.",
      },
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    glyph: "🎬",
    description:
      "Photo, video and design produced in-house, from a single reel to a full campaign.",
    subServices: [
      {
        title: "Brand Photography",
        body: "Product, team and lifestyle shoots, edited into a library you can actually reuse.",
      },
      {
        title: "Video Production",
        body: "Script, shoot and edit, including drone and interview work for Kathmandu brands.",
      },
      {
        title: "Motion & Animation",
        body: "Explainer animations and social motion graphics that stay on brand at every size.",
      },
      {
        title: "Social Content Studio",
        body: "A monthly batch of platform-native assets so your channels never go quiet.",
      },
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    glyph: "🛠️",
    description:
      "Web, mobile and health-tech products built to be maintained after launch day.",
    subServices: [
      {
        title: "Web Applications",
        body: "Dashboards, portals and booking systems on a stack your next developer can pick up.",
      },
      {
        title: "Mobile Apps",
        body: "React Native apps with offline support for patchy connectivity and long commutes.",
      },
      {
        title: "Health-Tech Platforms",
        body: "Clinical dashboards and patient portals built around consent and data protection.",
      },
      {
        title: "Maintenance & Support",
        body: "Monitoring, updates and a support channel that answers within a working day.",
      },
    ],
  },
];
