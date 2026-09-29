import Link from "next/link";

import { Logo } from "@/components/Logo";
import { legalLinks, navLinks, serviceLinks } from "@/lib/nav";

const columns = [
  { title: "Company", links: navLinks },
  { title: "Services", links: serviceLinks },
  { title: "Legal", links: legalLinks },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto w-full max-w-content px-gutter-mobile py-section-tight nav:px-gutter">
        <div className="grid gap-grid nav:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              A Kathmandu-based creative technology company building digital
              bridges between ideas and impact through marketing, content and
              health-tech software.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors duration-200 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-section-tight border-t border-navyBorder pt-6">
          <p className="text-center text-sm text-white/60">
            &copy; {year} Digital Chautari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
