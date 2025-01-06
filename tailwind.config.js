/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))", // Dark Navy Blue (common in header and buttons)
        background: "rgba(var(--background))", // Vibrant Red (accent and CTA buttons)
        accent: "rgba(var(--accent))", // Light Gray for background
        secondary: "rgba(var(--secondary))", // White for cards and content
        textPrimary: "rgba(var(--text))", // Dark text for content
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}