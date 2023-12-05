import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "rgb(var(--background-rgb) / <alpha-value>)",
      backgroundContrastText:
        "rgb(var(--background-contrast-text-rgb) / <alpha-value>)",
      altBackground: "rgb(var(--alt-background-rgb) / <alpha-value>)",
      backgroundAltContrastText:
        "rgb(var(--background-alt-contrast-text-rgb) / <alpha-value>)",
      accentLight: "rgb(var(--accent-light-rgb) / <alpha-value>)",
      accentMain: "rgb(var(--accent-main-rgb) / <alpha-value>)",
      accentDark: "rgb(var(--accent-dark-rgb) / <alpha-value>)",
    },
  },
  plugins: [],
  // darkMode: ["class", '[data-mode="dark"]'],
};
export default config;
