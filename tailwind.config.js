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
        secondary: "rgba(var(--secondary))", // Vibrant Red (accent and CTA buttons)
        accent: "rgba(var(--accent))", // Light Gray for background
        neutral: "rgba(var(--neutral))", // White for cards and content
        textPrimary: "rgba(var(--textPrimary))", // Dark text for content
        textSecondary: "rgba(var(--textSecondary))", // Muted text
        error: "rgba(var(--primary))", // Error Red
        success: "rgba(var(--error))", // Green for success indicators
        info: "rgba(var(--info))", // Cyan for information highlights
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}