/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**\*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-black': '#1A1A19',
        'custom-dark-green': '#31511E'
      },
      top: {
        '120': '28rem',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

