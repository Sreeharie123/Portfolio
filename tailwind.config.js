/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'textGray': 'rgb(249 250 251)',
      },
      backgroundColor:{
        primary:"rgb(17 24 39)"
      }
    },
  },
  plugins: [],
}

