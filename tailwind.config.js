/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1d21', // Main dark bg
          darker: '#111315', // Card bg
        },
        accent: '#00E5FF', // Teal/Cyan accent
        text: {
          DEFAULT: '#e0e6ed', // Light text
          muted: '#94a3b8', // Muted text
        },
      },
    },
  },
  plugins: [],
}