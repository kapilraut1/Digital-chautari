import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { DarkBanner } from "@/components/DarkBanner";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/products/ProductShowcase";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Eco Creative Marketing Agency, One Content Creation Studio and Physio@Home: three ventures from Digital Chautari.",
};

export default function ProductsPage() {
  return (
    <main id="main" className="flex-1">
      <Hero
        align="center"
        eyebrow="Our products"
        title="Three ventures, one vision"
        highlight="one vision"
        lede="We stopped selling services to everyone and built three products for problems we understood from the inside. Each one is run by its own team and answers to its own numbers."
      >
        <Button href="/contact">Talk to us &rarr;</Button>
        <Button href="/services" variant="ghost">
          Explore Services
        </Button>
      </Hero>

      <ProductShowcase />

      <DarkBanner
        align="center"
        eyebrow="Spotlight"
        title="Physio@Home: healthcare reimagined"
        lede="Recovery does not happen in the clinic. Physio@Home gives physiotherapists and their patients a shared view of the exercises that matter between appointments, and the data to prove they are working."
      >
        <Button href="/contact" variant="light">
          Book a Demo &rarr;
        </Button>
      </DarkBanner>
    </main>
  );
}
