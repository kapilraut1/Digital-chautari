import { cn } from "@/lib/cn";
import type { Milestone } from "@/lib/company";

interface TimelineProps {
  milestones: Milestone[];
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[7px] top-0 w-px bg-navyBorder lg:left-1/2 lg:-translate-x-1/2"
      />

      {milestones.map((milestone, index) => {
        const onRight = index % 2 === 1;

        return (
          <li
            key={`${milestone.year}-${milestone.title}`}
            className="relative pb-section pl-10 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-section-tight lg:pb-section"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full bg-leaf ring-4 ring-navy"
            />

            <div
              className={cn(
                onRight
                  ? "lg:col-start-2 lg:pl-section-tight"
                  : "lg:col-start-1 lg:pr-section-tight lg:text-right",
              )}
            >
              <span className="inline-block rounded-pill bg-gold px-3 py-1 font-display text-xs font-bold uppercase tracking-widest text-navy">
                {milestone.year}
              </span>

              <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-white">
                {milestone.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {milestone.body}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
