import { Button } from "@/components/Button";
import { IconChip } from "@/components/IconChip";
import { responseTimes } from "@/lib/contact";

export function ContactSidebar() {
  return (
    <div className="flex flex-col gap-grid">
      <div className="overflow-hidden rounded-card border border-line bg-white">
        <div
          aria-hidden="true"
          className="relative aspect-[16/10] bg-map-grid bg-[size:28px_28px]"
        >
          <span className="absolute left-[18%] top-[28%] h-10 w-14 rounded-badge bg-chip-gold/80" />
          <span className="absolute left-[62%] top-[18%] h-8 w-20 rounded-badge bg-chip-teal/80" />
          <span className="absolute left-[40%] top-[62%] h-12 w-16 rounded-badge bg-chip-lilac/80" />
          <span className="absolute left-[70%] top-[68%] h-6 w-10 rounded-badge bg-chip-pink/80" />
          <span className="absolute left-[24%] top-[74%] h-10 w-12 rounded-badge bg-chip-mint" />

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
            <span className="block h-6 w-6 rounded-full border-4 border-white bg-primary shadow-card" />
            <span className="mx-auto block h-3 w-px -translate-y-px bg-primary/40" />
          </span>
          <span className="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 rounded-pill bg-navy px-3 py-1 text-[11px] font-semibold text-white">
            Kathmandu, Nepal
          </span>
        </div>

        <div className="p-card">
          <h3 className="font-display text-base font-bold tracking-tight text-ink">
            Kathmandu, Nepal
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Jhamsikhel, Lalitpur. Visit the office any working day, or send a
            message first and we will have coffee waiting.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 rounded-card bg-navy p-card">
        <div className="flex items-center gap-3">
          <IconChip tone="gold">
            <span className="text-primaryDark">⚡</span>
          </IconChip>
          <h3 className="font-display text-base font-bold tracking-tight text-white">
            Need quick answers?
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-white/70">
          Most common questions about scope, pricing and timelines are answered
          on the FAQ page.
        </p>
        <Button href="#" variant="light">
          Visit FAQ page &rarr;
        </Button>
      </div>

      <div className="rounded-card border border-line bg-white p-card">
        <h3 className="font-display text-base font-bold tracking-tight text-ink">
          Response times
        </h3>

        <ul className="mt-4 flex flex-col gap-3">
          {responseTimes.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <span className="font-medium text-ink">{item.label}</span>
              <span className="text-muted">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
