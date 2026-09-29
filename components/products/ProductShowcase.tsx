import type { ComponentType } from "react";

import { Button } from "@/components/Button";
import { MarketingPreview } from "@/components/products/MarketingPreview";
import { PhysioPreview } from "@/components/products/PhysioPreview";
import { ProductSwitcher } from "@/components/products/ProductSwitcher";
import { StudioPreview } from "@/components/products/StudioPreview";
import { Section } from "@/components/Section";
import { ventures, type Venture } from "@/lib/products";

const previews: Record<string, ComponentType> = {
  "eco-creative": MarketingPreview,
  "one-content": StudioPreview,
  "physio-at-home": PhysioPreview,
};

export function ProductShowcase() {
  return (
    <Section>
      <ProductSwitcher
        label="Our products"
        tabs={ventures.map((venture) => ({
          id: venture.id,
          label: venture.name,
        }))}
        panels={ventures.map((venture) => (
          <VenturePanel key={venture.id} venture={venture} />
        ))}
      />
    </Section>
  );
}

function VenturePanel({ venture }: { venture: Venture }) {
  const Preview = previews[venture.id];

  return (
    <div className="mt-10 grid gap-grid lg:grid-cols-2 lg:gap-section-tight">
      <div>
        <span className="inline-flex rounded-badge bg-chip-mint px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primaryDark">
          {venture.category}
        </span>

        <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {venture.name}
        </h2>

        <p className="mt-4 max-w-lede leading-relaxed text-muted">
          {venture.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {venture.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-badge border border-line px-3 py-1.5 text-xs font-medium text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button href="/contact">Talk to us &rarr;</Button>
        </div>
      </div>

      <div className="rounded-card border border-navyBorder bg-navy p-card">
        <Preview />
      </div>
    </div>
  );
}
