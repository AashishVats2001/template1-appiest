/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00bade',
        secondary: '#3e4555',
        accent: '#eaeff3',
        muted: '#8d97ad',
        background: '#ffffff',
        surface: '#f9fafb',
        text: '#3e4555',
        'text-secondary': '#ffffff',
        info: '#368aee',
        success: '#10b981',
        warning: '#facc15',
        error: '#ef4444',
      },
    },
  },
  plugins: [],
};