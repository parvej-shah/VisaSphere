/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002147', // Dark Navy Blue (common in header and buttons)
        secondary: '#E63946', // Vibrant Red (accent and CTA buttons)
        accent: '#F4F4F4', // Light Gray for background
        neutral: '#FFFFFF', // White for cards and content
        textPrimary: '#343A40', // Dark text for content
        textSecondary: '#6C757D', // Muted text
        error: '#DC3545', // Error Red
        success: '#28A745', // Green for success indicators
        info: '#17A2B8', // Cyan for information highlights
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}