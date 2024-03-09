/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      fontFamily: {
        poppins:["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [
    require('./css/custom.css'),
    require('./css/mediaqueries.css')
  ],
}

