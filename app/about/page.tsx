import type { Metadata } from "next";

import { AboutStory } from "@/components/about/AboutStory";
import { MissionAndValues } from "@/components/about/MissionAndValues";
import { Roadmap } from "@/components/about/Roadmap";
import { TeamAndCommitments } from "@/components/about/TeamAndCommitments";
import { Button } from "@/components/Button";
import { CtaPanel } from "@/components/CtaPanel";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Digital Chautari is a Kathmandu-based creative technology company building three ventures from one team.",
};

export default function AboutPage() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="About us"
        title="The people behind Digital Chautari"
        highlight="Digital Chautari"
        lede="A small Kathmandu team that builds its own products, hires slowly and ships work it is still proud of five years later."
      >
        <Button href="/contact">Get in Touch &rarr;</Button>
        <Button href="/services" variant="ghost">
          Explore Services
        </Button>
      </Hero>

      <AboutStory />
      <MissionAndValues />
      <TeamAndCommitments />
      <Roadmap />

      <CtaPanel title="Want to join our journey?">
        <Button href="/contact" variant="light">
          Get in Touch &rarr;
        </Button>
        <Button href="/products" variant="outlineLight">
          View Products
        </Button>
      </CtaPanel>
    </main>
  );
}
