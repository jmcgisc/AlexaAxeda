const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./main.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  safelist: [
    'bg-white',
    'dark:bg-black', 
    'dark:bg-gray-800',
    'dark:text-white',
    'dark:text-gray-200',
    'dark:hover:bg-gray-700'
  ],
  theme: {
    extend: {
      colors: {
                primary:      "#BD9E4C", //dorado
                primary_isla: "#BD9E4C", //dorado
                secundary:   "#5A463A", //cafe
                isla_black:  "#333333", //negro isla
                diamon: '#B9F2FF',   //azul
                diamonBlack: "#1A1A1A", //azul fuerte
                sand: "#C7BCB2",  
                a: "#DDD8D5", //gris
                b: "#CBB9A6", //gris arena
                c: "#F4DFC5", //carne
                BackgroundGray: "#EEEEEE",
                baby_blue: {
                            light: "#232F3E", //azul fuerte
                            DEFAULT: "131921",
                          }
              },
      fontFamily: { 
        title:  ['Cagliostro', 'Helvetica', 'Arial'],
        body:   ['Poppins'],
        chivo:  ['Chivo'],
        bodoni: ['Bodoni Moda'],
        sans:   [  ...defaultTheme.fontFamily.sans],
        serif:  ["Cormorant Garamond","Bodoni Moda",  ...defaultTheme.fontFamily.serif],
      },
    }, 
  },
  plugins: [
    require('tailwind-clip-path'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
