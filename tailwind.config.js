/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // This should just point to index.html
  theme: {
    extend: {
      // Our color palette and fonts are still perfect!
      colors: {
        'sunflower-yellow': '#FFC300',
        'deep-brown': '#6F4E37',
        'leaf-green': '#4A7856',
        'off-white': '#FAF9F6',
        'charcoal': '#333333',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}