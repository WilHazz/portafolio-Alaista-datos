/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // opcional si usas pages además de app
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // si usas dark mode con class
  plugins: [],
};
