import type { ReactNode } from "react";

import { IconChip, type ChipTone } from "@/components/IconChip";
import { cn } from "@/lib/cn";

interface CardProps {
  title: string;
  body?: string;
  icon?: ReactNode;
  iconTone?: ChipTone;
  tone?: "white" | "navy";
  as?: "article" | "li" | "div";
  className?: string;
  children?: ReactNode;
}

const tones = {
  white: "border-line bg-white",
  navy: "border-navyBorder bg-navyCard",
};

export function Card({
  title,
  body,
  icon,
  iconTone = "mint",
  tone = "white",
  as: Tag = "article",
  className,
  children,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "group flex flex-col rounded-card border p-card transition-[transform,box-shadow] duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card",
        tones[tone],
        className,
      )}
    >
      {icon ? (
        <span className="mb-5 transition-transform duration-200 motion-safe:group-hover:scale-105">
          <IconChip tone={iconTone}>{icon}</IconChip>
        </span>
      ) : null}

      <h3
        className={cn(
          "font-display text-lg font-bold tracking-tight",
          tone === "navy" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h3>

      {body ? (
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            tone === "navy" ? "text-white/70" : "text-muted",
          )}
        >
          {body}
        </p>
      ) : null}

      {children}
    </Tag>
  );
}
