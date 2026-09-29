interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-line bg-white p-card transition-[transform,box-shadow] duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card">
      <p role="img" aria-label="Rated 5 out of 5" className="text-gold">
        ★★★★★
      </p>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
        {quote}
      </blockquote>

      <figcaption className="mt-6 border-t border-line pt-4 text-xs text-muted">
        <span className="block text-sm font-semibold text-ink">{name}</span>
        {role}
      </figcaption>
    </figure>
  );
}
