import { Card } from "@/components/Card";
import { DarkBanner } from "@/components/DarkBanner";
import { chipTones } from "@/components/IconChip";

const steps = [
  {
    title: "Discover",
    body: "We start with your numbers, your customers and your constraints, not with a template someone else used.",
    icon: "🔍",
  },
  {
    title: "Design",
    body: "Strategy, story and interface come together here, and you see the direction before we build it.",
    icon: "✍️",
  },
  {
    title: "Develop",
    body: "Agile sprints, weekly demos, and code that is tested, documented and yours to keep.",
    icon: "🛠️",
  },
  {
    title: "Deliver",
    body: "Launch, measure, iterate. We stay on after go-live, because that is where the value shows up.",
    icon: "🚀",
  },
];

export function Process() {
  return (
    <DarkBanner eyebrow="How we work" title="Our 4-step process">
      <ul className="mt-10 grid gap-grid sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="h-full">
            <Card
              tone="navy"
              title={step.title}
              body={step.body}
              icon={step.icon}
              iconTone={chipTones[index % chipTones.length]}
              badge={`0${index + 1}`}
              className="h-full"
            />
          </li>
        ))}
      </ul>
    </DarkBanner>
  );
}
