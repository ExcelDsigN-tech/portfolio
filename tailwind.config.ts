import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#050507",
          900: "#0a0a10",
          850: "#0e0e16",
          800: "#12121c",
          700: "#1a1a28",
        },
        accent: {
          DEFAULT: "#8b7cff",
          400: "#a99dff",
          500: "#8b7cff",
          600: "#6d5cff",
          cyan: "#5ce1e6",
        },
        intel: {
          primary: "#0953de",
          surface: "#121212",
          tertiary: "#374151",
        },
      },
      spacing: {
        xs: "8px",
        sm: "18px",
        md: "32px",
        lg: "50px",
        xl: "80px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139, 124, 255, 0.45)",
        "glow-sm": "0 0 20px -6px rgba(139, 124, 255, 0.4)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(139,124,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,124,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        blink: "blink 1.1s step-end infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;