import { cn } from "@/lib/cn";

type BlogTone = "teal" | "gold" | "leaf" | "navy" | "blue";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  glyph: string;
  tone: BlogTone;
  href?: string;
}

const gradients: Record<BlogTone, string> = {
  teal: "from-primary to-primaryDark",
  gold: "from-gold to-leaf",
  leaf: "from-leaf to-primary",
  navy: "from-navy to-ctaBlue",
  blue: "from-ctaBlue to-primary",
};

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  glyph,
  tone,
  href = "#",
}: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-[transform,box-shadow] duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card">
      <div
        aria-hidden="true"
        className={cn(
          "relative grid aspect-[16/10] place-items-center overflow-hidden bg-gradient-to-br",
          gradients[tone],
        )}
      >
        <span className="text-4xl transition-transform duration-200 motion-safe:group-hover:scale-110">
          {glyph}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-card">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-badge bg-chip-mint px-3 py-1 font-semibold uppercase tracking-widest text-primaryDark">
            {category}
          </span>
          <span className="text-muted">
            {date} &middot; {readTime}
          </span>
        </div>

        <h3 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight text-ink">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {excerpt}
        </p>

        <a
          href={href}
          className="mt-5 inline-flex text-sm font-semibold text-primary transition-colors duration-200 hover:text-primaryDark"
        >
          Read more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </article>
  );
}
