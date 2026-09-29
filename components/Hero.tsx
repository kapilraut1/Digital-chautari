import type { ReactNode } from "react";

import { Eyebrow } from "@/components/Eyebrow";
import { cn } from "@/lib/cn";

interface HeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  lede: string;
  align?: "left" | "center";
  children?: ReactNode;
}

function splitOnHighlight(title: string, highlight: string) {
  const at = title.toLowerCase().indexOf(highlight.toLowerCase());

  if (at === -1) {
    return { before: title, match: null, after: "" };
  }

  return {
    before: title.slice(0, at),
    match: title.slice(at, at + highlight.length),
    after: title.slice(at + highlight.length),
  };
}

export function Hero({
  eyebrow,
  title,
  highlight,
  lede,
  align = "left",
  children,
}: HeroProps) {
  const { before, match, after } = splitOnHighlight(title, highlight);
  const centered = align === "center";

  return (
    <section className="bg-hero-surface bg-no-repeat">
      <div className="mx-auto w-full max-w-content px-gutter-mobile pb-hero-bottom pt-hero-top nav:px-gutter">
        <div
          className={cn(
            "max-w-lede",
            centered && "mx-auto flex flex-col items-center text-center",
          )}
        >
          <Eyebrow>{eyebrow}</Eyebrow>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {before}
            {match ? (
              <span className="bg-headline bg-clip-text text-transparent">
                {match}
              </span>
            ) : null}
            {after}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted">{lede}</p>

          {children ? (
            <div
              className={cn(
                "mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center",
                centered && "sm:justify-center",
              )}
            >
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
