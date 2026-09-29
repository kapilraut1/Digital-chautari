"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/nav";

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between gap-4 px-gutter-mobile nav:h-20 nav:px-gutter">
        <Logo tagline="" />

        <nav aria-label="Primary" className="hidden nav:flex nav:flex-1">
          <ul className="mx-auto flex items-center justify-center gap-0.5 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-block rounded-button px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 lg:px-3.5 lg:text-sm",
                      active
                        ? "text-primary"
                        : "text-muted hover:bg-chip-teal hover:text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 nav:block">
          <Button href="/contact">Contact Us</Button>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-button border border-line text-ink transition-colors duration-200 hover:border-primary hover:text-primary nav:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-line bg-white nav:hidden"
      >
        <nav aria-label="Mobile" className="px-gutter-mobile py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-button px-3 py-2.5 text-sm font-medium",
                      active ? "bg-chip-teal text-primary" : "text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 px-3">
            <Button href="/contact" className="w-full">
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
