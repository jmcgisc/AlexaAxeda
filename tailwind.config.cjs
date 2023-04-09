const defaultTheme = require('tailwindcss/defaultTheme')

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
              secundary: "#706FE5",
              axeda: "#FF6720"
              },
      fontFamily: { 
              title:  ['Cagliostro', 'Helvetica', 'Arial'],
              body:   ['Poppins'],
              chivo:  ['Chivo'],
              bodoni: ['Bodoni Moda'],
              sans:   ["Cagliostro",  ...defaultTheme.fontFamily.sans],
              serif:  ["Cormorant Garamond","Bodoni Moda",  ...defaultTheme.fontFamily.serif],
                  },
            }, 
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}