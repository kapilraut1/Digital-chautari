import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export const chipTones = ["mint", "teal", "gold", "lilac", "pink"] as const;

export type ChipTone = (typeof chipTones)[number];

interface IconChipProps {
  children: ReactNode;
  tone?: ChipTone;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const backgrounds: Record<ChipTone, string> = {
  mint: "bg-chip-mint",
  teal: "bg-chip-teal",
  gold: "bg-chip-gold",
  lilac: "bg-chip-lilac",
  pink: "bg-chip-pink",
};

const sizes = {
  sm: "h-9 w-9 text-base",
  md: "h-11 w-11 text-lg",
  lg: "h-14 w-14 text-2xl",
};

export function IconChip({
  children,
  tone = "mint",
  size = "md",
  className,
}: IconChipProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid shrink-0 place-items-center rounded-chip",
        backgrounds[tone],
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
