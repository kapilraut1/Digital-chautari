import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface CtaPanelProps {
  title: string;
  lede?: string;
  children?: ReactNode;
  className?: string;
}

export function CtaPanel({ title, lede, children, className }: CtaPanelProps) {
  return (
    <section className={cn("bg-paper-fade", className)}>
      <div className="mx-auto w-full max-w-content px-gutter-mobile py-section nav:px-gutter">
        <div className="relative overflow-hidden rounded-card bg-cta-panel px-card py-section-tight text-center text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cta-sheen bg-no-repeat"
          />

          <div className="relative mx-auto max-w-lede">
            <h2 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              {title}
            </h2>

            {lede ? (
              <p className="mt-4 leading-relaxed text-white/80">{lede}</p>
            ) : null}

            {children ? (
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                {children}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
