import { Reveal } from "@/components/Reveal";
import { stagger } from "@/lib/reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { contactChannels } from "@/lib/contact";

export function ContactChannels() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Get in touch"
        title="Four ways to reach us"
      />

      <ul className="mt-10 grid gap-grid sm:grid-cols-2 lg:grid-cols-4">
        {contactChannels.map((channel, index) => (
          <Reveal
            as="li"
            key={channel.title}
            delay={stagger(index)}
            className="flex flex-col rounded-card border border-line bg-white p-card"
          >
            <span aria-hidden="true" className="text-2xl">
              {channel.glyph}
            </span>

            <h3 className="mt-4 font-display text-base font-bold tracking-tight text-ink">
              {channel.title}
            </h3>

            {channel.lines.map((line) => (
              <p key={line} className="mt-2 text-sm leading-relaxed text-muted">
                {line}
              </p>
            ))}
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
