/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'textGray': 'rgb(249 250 251)',
         icon:"#20c997"

      },
      backgroundColor:{
        primary:"rgb(17 24 39)",
        secondary:"#3f4144",
        btncolor:"#20c997"
      },
      backgroundImage: {
        'hero-section': "url('https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    },
  },
  plugins: [],
}
