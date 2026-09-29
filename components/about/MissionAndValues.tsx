import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { principles, values } from "@/lib/company";

export function MissionAndValues() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="What drives us"
        title="Mission, vision and the values in between"
      />

      <div className="mt-10 grid gap-grid lg:grid-cols-2">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="rounded-card border border-line bg-white p-card"
          >
            <h3 className="font-display text-lg font-bold tracking-tight text-ink">
              {principle.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{principle.body}</p>
          </article>
        ))}
      </div>

      <ul className="mt-grid grid gap-grid sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <li
            key={value.title}
            className="rounded-card border border-line bg-chip-mint/50 p-card transition-[transform,box-shadow] duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card"
          >
            <span aria-hidden="true" className="text-2xl">
              {value.glyph}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">
              {value.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {value.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
