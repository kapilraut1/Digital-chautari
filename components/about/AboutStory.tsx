import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { storyTiles } from "@/lib/company";
import { cn } from "@/lib/cn";

const tileTones: Record<string, string> = {
  teal: "bg-primary text-white",
  navy: "bg-navy text-white",
  white: "border border-line bg-white text-ink",
  gold: "bg-gold text-navy",
};

export function AboutStory() {
  return (
    <Section>
      <div className="grid gap-section lg:grid-cols-2 lg:gap-section-tight">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title="From a chautari to a digital powerhouse"
          />

          <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted">
            <p>
              A chautari is a Nepali village meeting place: an open space where
              people gather to trade news, settle disputes and turn individual
              concerns into shared ones. We named the company after that idea,
              because the best digital work starts the same way, with a room
              where everyone can speak.
            </p>
            <p>
              What began as a handful of freelance campaigns became three
              ventures, each with its own team, its own clients and its own
              reason to exist. The common thread is that we build in-house:
              strategists, designers, developers and producers who work in the
              same room, on the same calendar, accountable to the same standard.
            </p>
            <p>
              We are young, we are based in Kathmandu, and we are deliberately
              ambitious. The next chapter is about depth rather than breadth:
              fewer projects, better maintained, each one still running years
              after it launched.
            </p>
          </div>
        </div>

        <ul className="grid gap-grid sm:grid-cols-2">
          {storyTiles.map((tile) => (
            <li
              key={tile.label}
              className={cn(
                "flex flex-col justify-center rounded-card p-card",
                tileTones[tile.tone],
              )}
            >
              <span className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {tile.value}
              </span>
              <span
                className={cn(
                  "mt-2 text-sm font-medium",
                  tile.tone === "white" ? "text-muted" : "text-white/80",
                )}
              >
                {tile.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
