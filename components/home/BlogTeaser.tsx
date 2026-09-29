import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import { stagger } from "@/lib/reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/lib/posts";

export function BlogTeaser() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="From the studio"
        title="Latest from our blog"
      />

      <ul className="mt-10 grid gap-grid nav:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Reveal
            as="li"
            key={post.title}
            delay={stagger(index)}
            className="h-full"
          >
            <BlogCard {...post} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
