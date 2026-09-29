import type { ReactNode } from "react";

import { IconChip, type ChipTone } from "@/components/IconChip";
import { cn } from "@/lib/cn";

interface StatBarProps {
  stats: StatBarItem[];
  tone?: "white" | "navy";
  className?: string;
}

export interface StatBarItem {
  value: string;
  label: string;
  icon: ReactNode;
  tone?: ChipTone;
}

const columnLayouts = [
  "",
  "",
  "",
  "nav:grid-cols-3",
  "nav:grid-cols-4",
] as const;

const tones = {
  white: "border-line bg-white",
  navy: "border-navyBorder bg-navyCard",
};

export function StatBar({ stats, tone = "white", className }: StatBarProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 overflow-hidden rounded-card border",
        tones[tone],
        columnLayouts[stats.length] ?? "",
        className,
      )}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "flex flex-col items-center gap-2 px-6 py-7 text-center",
            index % 2 !== 0
              ? "border-l border-line"
              : index > 0 && "border-t border-line nav:border-l",
            tone === "navy" && "border-navyBorder",
          )}
        >
          <IconChip tone={stat.tone} size="sm">
            {stat.icon}
          </IconChip>
          <dd
            className={cn(
              "font-display text-2xl font-extrabold tracking-tight",
              tone === "navy" ? "text-white" : "text-ink",
            )}
          >
            {stat.value}
          </dd>
          <dt
            className={cn(
              "text-xs font-medium uppercase tracking-widest",
              tone === "navy" ? "text-white/70" : "text-muted",
            )}
          >
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
