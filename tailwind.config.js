/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./***.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#1A1A19",
        "custom-dark-green": "#31511E",
        "custom-pink": "#FFCCEA",
      },
      top: {
        "120": "28rem",
        "121": "34rem",
      },
      right: {
        "122": "27rem",
      },
      left: {
        "127": "28rem"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
