import { Button } from "@/components/Button";
import { IconChip } from "@/components/IconChip";
import { cn } from "@/lib/cn";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  summary?: string;
  features: string[];
  ctaLabel: string;
  ctaHref?: string;
  featured?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  summary,
  features,
  ctaLabel,
  ctaHref = "/contact",
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-card border p-card transition-[transform,box-shadow] duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card",
        featured ? "border-navyBorder bg-navy" : "border-line bg-white",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            featured ? "text-white" : "text-ink",
          )}
        >
          {name}
        </h3>

        {featured ? (
          <span className="rounded-pill bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy">
            Most Popular
          </span>
        ) : null}
      </div>

      <p className="mt-6 flex items-baseline gap-1">
        <span
          className={cn(
            "font-display text-3xl font-extrabold tracking-tight",
            featured ? "text-white" : "text-ink",
          )}
        >
          {price}
        </span>
        {period ? (
          <span
            className={cn(
              "text-sm font-medium",
              featured ? "text-white/70" : "text-muted",
            )}
          >
            {period}
          </span>
        ) : null}
      </p>

      {summary ? (
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            featured ? "text-white/70" : "text-muted",
          )}
        >
          {summary}
        </p>
      ) : null}

      <ul
        className={cn(
          "mt-6 flex flex-col gap-3 border-t pt-6",
          featured ? "border-navyBorder" : "border-line",
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <IconChip tone={featured ? "mint" : "teal"} size="sm">
              <span className="text-xs font-bold text-primaryDark">✓</span>
            </IconChip>
            <span className={featured ? "text-white/85" : "text-ink"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-0">
        <Button
          href={ctaHref}
          variant={featured ? "light" : "primary"}
          className="w-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
