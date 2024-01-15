/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'Inika': ['Inika'],
    },
    extend: {
      colors: {
        "brown": "#6A4028",
        "brown-text": "#523728",
        "bg": "#FFF8E1",
        "cheese": "#220404",
        "colors": "rgba(0, 0, 0, 0.70)",
        "third": "#6A4028F0",
        "last": "#734B33",
      }
    },
  },
  plugins: [],
}

