import { IconChip, chipTones } from "@/components/IconChip";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { sectors } from "@/lib/sectors";

export function Industries() {
  return (
    <Section id="industries">
      <SectionHeading
        align="center"
        eyebrow="Industries"
        title="Who we work with"
      />

      <ul className="mt-10 grid gap-grid sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector, index) => (
          <li
            key={sector.name}
            className="flex items-center gap-4 rounded-card border border-line bg-white px-6 py-5 transition-[transform,box-shadow] duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card"
          >
            <IconChip tone={chipTones[index % chipTones.length]}>
              {sector.glyph}
            </IconChip>

            <span className="font-display text-base font-bold tracking-tight text-ink">
              {sector.shortName}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
