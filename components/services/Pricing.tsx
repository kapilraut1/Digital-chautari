import { PricingCard } from "@/components/PricingCard";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingTiers } from "@/lib/pricing";

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading
        align="center"
        eyebrow="Pricing"
        title="Straightforward monthly pricing"
        lede="Every tier includes strategy, production and reporting. There is no setup fee and no long lock-in beyond the first three months."
      />

      <div className="mt-10 grid items-start gap-grid nav:grid-cols-3">
        {pricingTiers.map((tier) => (
          <PricingCard
            key={tier.id}
            name={tier.name}
            price={tier.price}
            period={tier.period}
            summary={tier.summary}
            features={tier.features}
            ctaLabel={tier.ctaLabel}
            featured={tier.featured}
          />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        Prices exclude VAT and are quoted in Nepalese rupees. Scope that falls
        outside a tier is quoted separately, in writing, before any work starts.
      </p>
    </Section>
  );
}
