export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const serviceLinks: NavLink[] = [
  { label: "Digital Marketing", href: "/services#digital-marketing" },
  { label: "Content Creation", href: "/services#content-creation" },
  { label: "Software Development", href: "/services#software-development" },
  { label: "Branding & Design", href: "/services#branding-design" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "FAQ", href: "#" },
];
