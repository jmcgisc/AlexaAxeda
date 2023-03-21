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
              sans:   ["Poppins","Cagliostro",  ...defaultTheme.fontFamily.sans],
              serif:  ["Cormorant Garamond","Bodoni Moda",  ...defaultTheme.fontFamily.serif],
                  },
      clipPath: { 
        mypolygon: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        myinset: "ellipse(50% 65% at 70% 50%)", 
                },
            }, 
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}