import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

const tones = {
  light: "bg-chip-mint text-primaryDark",
  dark: "border border-gold/30 bg-gold/10 text-gold",
};

export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill px-4 py-1.5 text-xs font-semibold uppercase tracking-widest",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
