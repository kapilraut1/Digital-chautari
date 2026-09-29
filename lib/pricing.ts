export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  summary: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "Rs 15,000",
    period: "/mo",
    summary: "For a new business that needs a consistent online presence.",
    features: [
      "One paid social channel",
      "Monthly SEO health check",
      "Up to 4 content assets",
      "Monthly performance report",
      "Email support",
    ],
    ctaLabel: "Start with Starter",
  },
  {
    id: "professional",
    name: "Professional",
    price: "Rs 45,000",
    period: "/mo",
    summary:
      "For a growing brand that treats marketing as a channel, not an expense.",
    features: [
      "Up to three paid channels",
      "Full SEO and technical audit",
      "Up to 12 content assets",
      "Conversion tracking setup",
      "Dedicated account manager",
      "Bi-weekly strategy call",
    ],
    ctaLabel: "Go Professional",
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    summary:
      "For multi-brand and multi-market scopes that need their own team.",
    features: [
      "Custom team and delivery plan",
      "Quarterly roadmap reviews",
      "Priority support channel",
      "On-site workshops in Kathmandu",
      "Full reporting suite",
      "Contracted SLA",
    ],
    ctaLabel: "Talk to sales",
  },
];
