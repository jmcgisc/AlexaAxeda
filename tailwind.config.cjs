/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    clipPath: { 
        mypolygon: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        myinset: "ellipse(50% 65% at 70% 50%)",
        // mycircle: "circle(70% at 70% 20%)",
        // ellipse2: "circle(50% 35%)",
        
    },
    extend: {
      colors: {
              primary: "#FF6720",
              secundary: "#706FE5",
              axeda: "#FF6720"
              },
    }, 
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}