import Link from "next/link";

import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { stagger } from "@/lib/reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ventures } from "@/lib/products";

export function ProductTeaser() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Our products"
        title="Three ventures, one vision"
        lede="Each venture grew out of a client problem we kept meeting. They run independently, but share one team and one standard."
      />

      <ul className="mt-10 grid gap-grid nav:grid-cols-3">
        {ventures.map((venture, index) => (
          <Reveal
            as="li"
            key={venture.id}
            delay={stagger(index)}
            className="h-full"
          >
            <Card
              title={venture.name}
              body={venture.description}
              icon={venture.glyph}
              iconTone={venture.tone}
              className="h-full"
            >
              <span className="mt-5 inline-flex rounded-badge bg-chip-teal px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primaryDark">
                {venture.category}
              </span>

              <Link
                href="/products"
                className="mt-5 inline-flex text-sm font-semibold text-primaryDark underline-offset-4 transition-colors duration-200 hover:underline"
              >
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
