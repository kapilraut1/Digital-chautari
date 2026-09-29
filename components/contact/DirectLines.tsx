import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { departments } from "@/lib/contact";

export function DirectLines() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Direct lines"
        title="Reach the right team"
        lede="Skip the general inbox. Each team reads its own address, so a production question goes to the producers and a build question goes to the developers."
      />

      <ul className="mt-10 grid gap-grid sm:grid-cols-2 lg:grid-cols-4">
        {departments.map((department) => (
          <li key={department.title} className="h-full">
            <Card
              title={department.title}
              body={department.body}
              icon={department.glyph}
              className="flex h-full flex-col"
            >
              <a
                href={`mailto:${department.email}`}
                className="mt-4 block break-words text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {department.email}
              </a>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
