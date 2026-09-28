import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F9488",
        primaryDark: "#0B6F66",
        gold: "#E0A930",
        leaf: "#7FAE3A",
        ink: "#101826",
        navy: "#0B1220",
        navyCard: "#101D2B",
        navyBorder: "#223140",
        paper: "#FBFBF9",
        line: "#E7E5DF",
        muted: "#5B6472",
        "chip-mint": "#E7F5EA",
        "chip-teal": "#E7F2F4",
        "chip-gold": "#FDF1DE",
        "chip-lilac": "#F4E9F6",
        "chip-pink": "#FDEEF0",
        ctaBlue: "#1D4ED8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      spacing: {
        gutter: "40px",
        "gutter-mobile": "22px",
        section: "64px",
        "section-tight": "48px",
        "hero-top": "84px",
        "hero-bottom": "48px",
        grid: "20px",
      },
      borderRadius: {
        button: "8px",
        chip: "10px",
        card: "12px",
        badge: "14px",
        pill: "20px",
      },
      boxShadow: {
        card: "0 16px 30px -18px rgba(16,24,38,0.2)",
      },
      maxWidth: {
        content: "1120px",
        lede: "700px",
      },
      backgroundImage: {
        headline: "linear-gradient(90deg, #0F9488, #E0A930, #7FAE3A)",
        "hero-wash": "linear-gradient(180deg, #E7F5EA 0%, #FBFBF9 55%)",
        "hero-glow":
          "radial-gradient(55% 55% at 88% 4%, rgba(15,148,136,0.16) 0%, rgba(224,169,48,0.10) 45%, rgba(251,251,249,0) 72%)",
        "cta-panel": "linear-gradient(120deg, #0F9488 0%, #1D4ED8 100%)",
        "paper-fade": "linear-gradient(180deg, #101826 0%, #0B1220 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
