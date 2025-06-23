/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage:{
              "baner1":"url(/src/imgerack/slider1.jpg)",
              "baner3":"url(/src/imgerack/slider3.jpg)",
              "baner4":"url(/src/imgerack/slider4.jpg)",
              "count":"url(/src/imgerack/line.png)",
              "ban":"url(/src/imgerack/gt.jpg)"
            }
    },
  },
  plugins: [],
}