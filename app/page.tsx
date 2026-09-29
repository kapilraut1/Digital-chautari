import { BlogTeaser } from "@/components/home/BlogTeaser";
import { ClosingCta } from "@/components/home/ClosingCta";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { HomeHero } from "@/components/home/HomeHero";
import { Process } from "@/components/home/Process";
import { ProductTeaser } from "@/components/home/ProductTeaser";
import { Sectors } from "@/components/home/Sectors";
import { StatsBanner } from "@/components/home/StatsBanner";
import { Testimonials } from "@/components/home/Testimonials";
import { WhoWeAre } from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <HomeHero />
      <FeatureStrip />
      <WhoWeAre />
      <StatsBanner />
      <ProductTeaser />
      <Sectors />
      <Process />
      <Testimonials />
      <BlogTeaser />
      <ClosingCta />
    </main>
  );
}
