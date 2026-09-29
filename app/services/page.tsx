import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { CtaPanel } from "@/components/CtaPanel";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/services/Industries";
import { Pricing } from "@/components/services/Pricing";
import { ServiceCategories } from "@/components/services/ServiceCategories";
import { WhyUs } from "@/components/services/WhyUs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing, content creation and software development from a Kathmandu-based creative technology company.",
};

export default function ServicesPage() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Our services"
        title="Services that drive growth"
        highlight="drive growth"
        lede="Strategy, production and engineering under one roof. Pick the service you need today, and add the others when you are ready."
      >
        <Button href="/contact">Book a Consultation &rarr;</Button>
        <Button href="/products" variant="ghost">
          View Products
        </Button>
      </Hero>

      <ServiceCategories />
      <Pricing />
      <Industries />
      <WhyUs />

      <CtaPanel title="Let's find the right service for you">
        <Button href="/contact" variant="light">
          Book a Consultation &rarr;
        </Button>
        <Button href="/products" variant="outlineLight">
          View Products
        </Button>
      </CtaPanel>
    </main>
  );
}
