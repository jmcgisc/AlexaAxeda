/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
              primary: "#FF6720",
              secundary: "#706FE5"
              },
    },
  },
  plugins: [],
}