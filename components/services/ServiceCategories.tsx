import { Card } from "@/components/Card";
import { IconChip, chipTones } from "@/components/IconChip";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceCategories } from "@/lib/services";

export function ServiceCategories() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="What we do"
        title="Three services, one team"
        lede="Most clients start with one of these and end up using more than one. They share the same account manager, the same reporting and the same production studio."
      />

      <div className="mt-10 flex flex-col gap-section-tight">
        {serviceCategories.map((category, categoryIndex) => (
          <article
            key={category.id}
            id={category.id}
            className="grid scroll-mt-28 gap-grid rounded-card border border-line bg-white p-card lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-section-tight"
          >
            <div>
              <IconChip
                tone={chipTones[categoryIndex % chipTones.length]}
                size="lg"
              >
                {category.glyph}
              </IconChip>

              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                {category.title}
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                {category.description}
              </p>
            </div>

            <ul className="grid gap-grid sm:grid-cols-2">
              {category.subServices.map((subService) => (
                <li key={subService.title} className="h-full">
                  <Card
                    heading="h4"
                    title={subService.title}
                    body={subService.body}
                    className="h-full"
                  />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
