import { DarkBanner } from "@/components/DarkBanner";
import { Reveal } from "@/components/Reveal";
import { StatBar } from "@/components/StatBar";

const impactStats = [
  { value: "250+", label: "Projects Delivered", icon: "🚀", tone: "mint" },
  { value: "40+", label: "Happy Clients", icon: "🙌", tone: "teal" },
  { value: "1M+", label: "Content Views", icon: "👁️", tone: "gold" },
  { value: "98%", label: "Client Retention", icon: "🔁", tone: "lilac" },
] as const;

export function StatsBanner() {
  return (
    <DarkBanner
      align="center"
      eyebrow="Our track record"
      title="Results our clients can point to"
    >
      <Reveal>
        <StatBar stats={impactStats} tone="navy" />
      </Reveal>
    </DarkBanner>
  );
}
