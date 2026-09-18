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
          950: "#0f0f0f",
          900: "#141414",
          850: "#181818",
          800: "#1d1d1d",
          700: "#242424",
        },
        primary: {
          DEFAULT: "#312E81",
          400: "#4338CA",
        },
        accent: {
          DEFAULT: "#818CF8",
          400: "#A5B4FC",
          500: "#818CF8",
          600: "#6366F1",
        },
        edge: {
          DEFAULT: "#374151",
          subtle: "#494949",
        },
      },
      spacing: {
        xs: "12px",
        sm: "24px",
        md: "48px",
        lg: "80px",
        xl: "128px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(79,70,229,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,70,229,0.07) 1px, transparent 1px)",
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