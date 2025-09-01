/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary:"#2563eb", //manga
        accent:"#7c3aed", //violet
      },
    },
  },
  plugins: [],
}








