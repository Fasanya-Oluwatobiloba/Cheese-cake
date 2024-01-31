/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'Inika': ['Inika'],
    },
    screens: {
      'small': '425px',
      'smallest': '375px',
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
        "contact": "#FCAE36",
      }
    },
  },
  plugins: [],
}

