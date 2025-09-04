import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#6C63FF",
          50: "#F5F4FF",
          100: "#E8E7FF",
          200: "#CFCBFF",
          300: "#B6AEFF",
          400: "#9E92FF",
          500: "#8676FF",
          600: "#6C63FF",
          700: "#4E48D6",
          800: "#3733A3",
          900: "#24226E"
        }
      },
      boxShadow: {
        "soft": "0 10px 30px rgba(0,0,0,0.08)",
        "glow": "0 10px 40px rgba(108,99,255,0.35)"
      },
      backgroundImage: {
        "grid": "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
        "grid-dark": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)"
      },
      backgroundSize: {
        "grid": "24px 24px"
      }
    }
  },
  plugins: []
};
export default config;
