import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionProps {
  children: ReactNode;
  id?: string;
  tight?: boolean;
  className?: string;
}

export function Section({
  children,
  id,
  tight = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(tight ? "py-section-tight" : "py-section", className)}
    >
      <div className="mx-auto w-full max-w-content px-gutter-mobile nav:px-gutter">
        {children}
      </div>
    </section>
  );
}
