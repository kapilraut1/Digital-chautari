import { DarkBanner } from "@/components/DarkBanner";
import { Timeline } from "@/components/Timeline";
import { milestones } from "@/lib/company";

export function Roadmap() {
  return (
    <DarkBanner
      eyebrow="Roadmap"
      title="Where we have been, where we are going"
    >
      <div className="mt-12">
        <Timeline milestones={milestones} />
      </div>
    </DarkBanner>
  );
}
