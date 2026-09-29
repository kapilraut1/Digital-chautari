import Link from "next/link";

import { cn } from "@/lib/cn";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
  tagline?: string;
}

export function Logo({
  tone = "light",
  className,
  tagline = "Creative technology, Kathmandu",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex shrink-0 items-center gap-3", className)}
      aria-label="Digital Chautari, home"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-card bg-gradient-to-br from-primaryDark to-navy font-display text-sm font-extrabold tracking-tight text-white">
        DC
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          Digital Chautari
        </span>
        {tagline ? (
          <span
            className={cn(
              "text-xs",
              tone === "dark" ? "text-white/70" : "text-muted",
            )}
          >
            {tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
