import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Client stories"
        title="What our clients say"
      />

      <ul className="mt-10 grid gap-grid nav:grid-cols-3">
        {testimonials.map((testimonial) => (
          <li key={testimonial.name} className="h-full">
            <TestimonialCard {...testimonial} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
