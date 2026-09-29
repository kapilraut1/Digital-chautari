import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { StatBar } from "@/components/StatBar";

const heroStats = [
  { value: "3", label: "Products", icon: "🧩", tone: "mint" },
  { value: "6+", label: "Team Members", icon: "👥", tone: "teal" },
  { value: "100%", label: "Commitment", icon: "🎯", tone: "gold" },
] as const;

export function HomeHero() {
  return (
    <>
      <Hero
        eyebrow="🚀 Welcome to Digital Chautari"
        title="We build digital bridges between ideas and impact"
        highlight="digital bridges"
        lede="Digital Chautari is a Kathmandu-based creative technology company. We pair strategy, storytelling and engineering to help Nepali brands grow online, and to build the health-tech tools that make care easier to reach."
      >
        <Button href="/services">Explore Services &rarr;</Button>
        <Button href="/products" variant="ghost">
          View Products
        </Button>
      </Hero>

      <div className="mx-auto w-full max-w-content px-gutter-mobile pb-section nav:px-gutter">
        <StatBar stats={heroStats} />
      </div>
    </>
  );
}
