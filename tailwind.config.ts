import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E8EDF5",
          100: "#C5D0E6",
          200: "#9BAFD4",
          300: "#708EC2",
          400: "#4F74B4",
          500: "#1A3A6B",
          600: "#0F2D5E",
          700: "#0A1F44",
          800: "#071833",
          900: "#040E20",
          950: "#020812",
        },
        accent: {
          50: "#FBF5E8",
          100: "#F5E6C5",
          200: "#EDD49E",
          300: "#E8B94A",
          400: "#D4A84B",
          500: "#C49A3C",
          600: "#A67F2E",
          700: "#876522",
          800: "#694D1A",
          900: "#4A3612",
        },
        dark: {
          50: "#1F2937",
          100: "#1A2332",
          200: "#151D2B",
          300: "#111827",
          400: "#0D1321",
          500: "#0B1121",
          600: "#090E1A",
          700: "#060A13",
          800: "#04070D",
          900: "#020406",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(212, 168, 75, 0.3)",
        "glow-lg": "0 0 40px rgba(212, 168, 75, 0.4)",
        soft: "0 4px 30px rgba(0, 0, 0, 0.08)",
        "soft-lg": "0 8px 40px rgba(0, 0, 0, 0.12)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, rgba(10,31,68,0.85) 0%, rgba(15,45,94,0.6) 50%, rgba(26,58,107,0.4) 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #D4A84B 0%, #E8B94A 50%, #C49A3C 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #0B1121 0%, #111827 50%, #1F2937 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
        pulse_glow: "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 168, 75, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 168, 75, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
