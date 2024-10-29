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
        '140': '34rem',
      },
      right: {
        '120': '20rem'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

