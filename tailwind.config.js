// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // Change this line:
  darkMode: 'class', // <--- Add/Change this line
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}