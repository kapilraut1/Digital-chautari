import { Card } from "@/components/Card";
import { chipTones } from "@/components/IconChip";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { sectors } from "@/lib/sectors";

export function Sectors() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Sectors we serve"
        title="Experience across six industries"
      />

      <ul className="mt-10 grid gap-grid sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector, index) => (
          <li key={sector.name} className="h-full">
            <Card
              title={sector.name}
              body={sector.blurb}
              icon={sector.glyph}
              iconTone={chipTones[index % chipTones.length]}
              className="h-full"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
