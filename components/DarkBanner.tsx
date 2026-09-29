import type { ReactNode } from "react";

import { Eyebrow } from "@/components/Eyebrow";
import { cn } from "@/lib/cn";

interface DarkBannerProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function DarkBanner({
  eyebrow,
  title,
  lede,
  align = "left",
  children,
}: DarkBannerProps) {
  const centered = align === "center";

  return (
    <section className="bg-paper-fade text-white">
      <div className="mx-auto w-full max-w-content px-gutter-mobile py-section nav:px-gutter">
        <div
          className={cn(
            "max-w-lede",
            centered && "mx-auto flex flex-col items-center text-center",
          )}
        >
          {eyebrow ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : null}

          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>

          {lede ? (
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {lede}
            </p>
          ) : null}

          {children ? (
            <div
              className={cn("mt-8 w-full", centered && "flex justify-center")}
            >
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
