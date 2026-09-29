import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { chipTones } from "@/components/IconChip";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const checklist = [
  "Creative Strategy",
  "Brand Storytelling",
  "Full-Stack Engineering",
  "Health-Tech Expertise",
];

const serviceTeasers = [
  {
    title: "Digital Marketing",
    body: "SEO, paid social and analytics that turn attention into measurable revenue.",
    icon: "🎯",
  },
  {
    title: "Content Creation",
    body: "Photo, video and design that give a brand something worth remembering.",
    icon: "🎬",
  },
  {
    title: "Software Development",
    body: "Web and mobile products built to be maintained, not just launched.",
    icon: "🛠️",
  },
  {
    title: "Branding & Design",
    body: "Identity systems, guidelines and the assets that hold them together.",
    icon: "✏️",
  },
];

export function WhoWeAre() {
  return (
    <Section>
      <div className="grid gap-section-tight lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="A Chautari where ideas meet execution"
            lede="A chautari in Nepal is an open circle where people gather to trade stories, ideas and advice. Digital Chautari started the same way: a few friends in Kathmandu, a whiteboard, and far too many hours arguing about typography."
          />

          <p className="mt-5 max-w-lede leading-relaxed text-muted">
            Today we are a creative technology company of strategists, producers
            and engineers working across three ventures. We still gather the
            same way: around the work, early, and out loud.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-ink"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-chip-mint text-xs font-bold text-primaryDark"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="/about" variant="ghost">
              Meet the Team &rarr;
            </Button>
          </div>
        </div>

        <ul className="grid gap-grid sm:grid-cols-2">
          {serviceTeasers.map((service, index) => (
            <li key={service.title} className="h-full">
              <Card
                title={service.title}
                body={service.body}
                icon={service.icon}
                iconTone={chipTones[index % chipTones.length]}
                className="h-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
