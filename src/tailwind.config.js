/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // si estás usando páginas
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // si usas modo oscuro con class="dark"
  plugins: [],
}
