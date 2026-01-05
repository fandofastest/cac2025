import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f7f8",
          100: "#eceef1",
          200: "#cfd5db",
          300: "#a9b3bd",
          400: "#7e8996",
          500: "#606c78",
          600: "#4d565f",
          700: "#3e454d",
          800: "#2d3238",
          900: "#1b1f23"
        },
        accent: {
          50: "#fff1f1",
          100: "#ffe0e0",
          200: "#ffb8b8",
          300: "#ff8f8f",
          400: "#ff5f5f",
          500: "#ff3b3b",
          600: "#e62e2e",
          700: "#c32121",
          800: "#901919",
          900: "#5a1111"
        }
      }
    }
  },
  plugins: [],
};
export default config;
