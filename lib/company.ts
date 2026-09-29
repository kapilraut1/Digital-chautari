export interface StoryTile {
  value: string;
  label: string;
  tone: "teal" | "navy" | "white" | "gold";
}

export const storyTiles: StoryTile[] = [
  { value: "2025", label: "Founded in Kathmandu", tone: "teal" },
  { value: "3", label: "Products built in-house", tone: "navy" },
  { value: "Kathmandu", label: "Headquarters", tone: "white" },
  { value: "7+", label: "Team members and growing", tone: "gold" },
];

export const principles = [
  {
    title: "Our Mission",
    body: "To help Nepali businesses compete online with the same tools, standards and confidence that brands abroad take for granted.",
  },
  {
    title: "Our Vision",
    body: "To become South Asia's most trusted creative technology company, and to prove that world-class digital work can be built in Kathmandu.",
  },
];

export const values = [
  {
    glyph: "🔥",
    title: "Passion",
    body: "We care about the work at the level of detail clients can feel, even when nobody is checking.",
  },
  {
    glyph: "💡",
    title: "Creativity",
    body: "The obvious answer is rarely the right one. We look for the idea nobody else in the room has had yet.",
  },
  {
    glyph: "🎯",
    title: "Excellence",
    body: "Ship it, then keep improving it. Launch is the midpoint of the work, not the end of it.",
  },
  {
    glyph: "🤝",
    title: "Collaboration",
    body: "Clients are part of the team. We share the work in progress, not just the final screenshots.",
  },
];

export const commitments = [
  {
    glyph: "🏅",
    title: "ISO 9001 Ready",
    body: "Documented processes across sales, delivery and support, so quality does not depend on who is working that week.",
  },
  {
    glyph: "🔒",
    title: "Data Protection",
    body: "We collect the minimum we need, encrypt what we store, and never hand client data to third parties without written consent.",
  },
  {
    glyph: "🌍",
    title: "Global Delivery",
    body: "Remote-first processes built to serve clients in Nepal, India and beyond, across every timezone we have worked in.",
  },
  {
    glyph: "🇳🇵",
    title: "Pan-Nepal Network",
    body: "Partners and on-ground presence from Biratnagar to Pokhara, so campaigns reach beyond the valley.",
  },
];

export const roles = [
  {
    title: "Founder & CEO",
    body: "Sets the direction of the company and stays close to every major client relationship.",
  },
  {
    title: "Co-Founder & COO",
    body: "Runs delivery, operations and the production calendar behind every project.",
  },
  {
    title: "Front-End Developer",
    body: "Builds the interfaces clients and their customers touch, down to the animation timings.",
  },
  {
    title: "Back-End Developer",
    body: "Owns the data layer, the integrations and the uptime of everything we ship.",
  },
  {
    title: "Marketing Lead",
    body: "Plans campaigns, allocates budget and reports honestly on what worked.",
  },
  {
    title: "Sales Executive",
    body: "First point of contact for new enquiries and the person who keeps clients informed.",
  },
  {
    title: "Business Development Officer",
    body: "Builds partnerships, manages accounts and finds the work that fits our strengths.",
  },
];

export interface Milestone {
  year: string;
  title: string;
  body: string;
}

export const milestones: Milestone[] = [
  {
    year: "2025",
    title: "The Idea",
    body: "Digital Chautari starts as a shared space in Kathmandu for brands that needed both creative work and real engineering.",
  },
  {
    year: "2025",
    title: "First Products",
    body: "Eco Creative and One Content launch as separate ventures with their own teams and their own targets.",
  },
  {
    year: "2026",
    title: "Health-Tech Entry",
    body: "Physio@Home brings physiotherapy recovery into the home, with tracking built alongside practising clinicians.",
  },
  {
    year: "2026",
    title: "Company Registration",
    body: "Digital Chautari becomes a registered company, formalising the standards we have been running on informally.",
  },
];
