import { BlogCard } from "@/components/BlogCard";
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
        {blogPosts.map((post) => (
          <li key={post.title} className="h-full">
            <BlogCard {...post} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
