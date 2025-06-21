/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",

        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",

        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
      },
    },
  },
  plugins: [],
};