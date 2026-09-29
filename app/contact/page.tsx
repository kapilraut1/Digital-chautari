import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { DirectLines } from "@/components/contact/DirectLines";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { stagger } from "@/lib/reveal";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Digital Chautari in Kathmandu, Nepal. Email a department directly or send us your project details.",
};

export default function ContactPage() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Contact us"
        title="Let's start a conversation"
        highlight="start a conversation"
        lede="Tell us what you need and we will route it to the right team the same day. No forms lost in a shared inbox, no autoresponder dead ends."
      >
        <Button href="mailto:hello@digitalchautari.com">Email us &rarr;</Button>
        <Button href="#contact-form" variant="ghost">
          Jump to the form
        </Button>
      </Hero>

      <ContactChannels />
      <DirectLines />

      <Section id="contact-form">
        <div className="grid gap-section lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-section-tight">
          <Reveal delay={stagger(0)}>
            <ContactForm />
          </Reveal>
          <Reveal delay={stagger(1)}>
            <ContactSidebar />
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
