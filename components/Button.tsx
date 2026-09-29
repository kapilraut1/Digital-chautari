import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost" | "light" | "outlineLight";

interface ButtonOptions {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

type ButtonLinkProps = ButtonOptions & { href: string };
type ButtonActionProps = ButtonOptions & {
  href?: undefined;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-button px-6 py-[13px] text-sm font-semibold transition-colors duration-200";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primaryDark",
  ghost:
    "border border-line bg-white text-ink hover:border-primary hover:text-primary",
  light: "bg-white text-ink hover:bg-chip-mint",
  outlineLight:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export function Button(props: ButtonLinkProps | ButtonActionProps) {
  const {
    children,
    variant = "primary",
    className,
    ...rest
  } = props as ButtonOptions &
    Partial<Pick<ButtonLinkProps, "href">> &
    Partial<Pick<ButtonActionProps, "type">>;

  const classes = cn(base, variants[variant], className);

  if (rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={rest.type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
