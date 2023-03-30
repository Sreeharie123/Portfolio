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
        primary:"rgb(17 24 39)",
        secondary:"#3f4144"
      },
      backgroundImage: {
        'hero-section': "url('https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    },
  },
  plugins: [],
}

