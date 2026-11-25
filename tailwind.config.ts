import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          muted: "var(--ink-muted)",
        },
        line: "var(--line)",
        lineSoft: "var(--line-soft)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          tint: "var(--accent-tint)",
        },
        cream: "var(--cream)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wider2: "0.08em",
        widest2: "0.2em",
      },
      maxWidth: {
        content: "1200px",
        prose: "680px",
      },
      fontSize: {
        "10xl": ["8.5rem", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
      },
      transitionTimingFunction: {
        executive: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
