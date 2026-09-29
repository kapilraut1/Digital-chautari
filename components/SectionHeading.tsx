import type { ReactNode } from "react";

import { Eyebrow } from "@/components/Eyebrow";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  id?: string;
  eyebrow?: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h2" | "h3";
  children?: ReactNode;
}

export function SectionHeading({
  title,
  id,
  eyebrow,
  lede,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  children,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-lede",
        centered && "mx-auto flex flex-col items-center text-center",
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}

      <Heading
        id={id}
        className={cn(
          "font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
          eyebrow && "mt-6",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Heading>

      {lede ? (
        <p
          className={cn(
            "mt-4 leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-muted",
          )}
        >
          {lede}
        </p>
      ) : null}

      {children ? (
        <div
          className={cn(
            "mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
            centered && "sm:justify-center",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
