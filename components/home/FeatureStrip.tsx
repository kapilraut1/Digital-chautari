import { Card } from "@/components/Card";
import { chipTones } from "@/components/IconChip";
import { Section } from "@/components/Section";

const features = [
  {
    title: "Growth-Driven",
    body: "Every campaign starts with the number we are trying to move, and ends with a report that tells you honestly whether we moved it.",
    icon: "📈",
  },
  {
    title: "Creative-First",
    body: "Design and storytelling lead the work. We would rather make something people remember than something that merely performs.",
    icon: "🎨",
  },
  {
    title: "Tech-Powered",
    body: "Analytics, automation and clean code underneath every campaign, so growth compounds month after month instead of plateauing.",
    icon: "⚙️",
  },
  {
    title: "Client-Centric",
    body: "A dedicated project manager, weekly updates and honest reporting. You always know where your budget went.",
    icon: "🤝",
  },
];

export function FeatureStrip() {
  return (
    <Section tight className="pt-0">
      <h2 className="sr-only">How we work with clients</h2>

      <ul className="grid gap-grid sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <li key={feature.title} className="h-full">
            <Card
              title={feature.title}
              body={feature.body}
              icon={feature.icon}
              iconTone={chipTones[index % chipTones.length]}
              className="h-full"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
