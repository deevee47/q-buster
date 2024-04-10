/** @type {import('tailwindcss').Config} **/
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#F45E5E',
        'primary-beige': '#F7D297',
        'primary-green': '#35580F',
        'primary-orange': '#FC9A63',
        'secondary': '#333333',
        'tertiary': '#000000'
      },
      fontFamily: {
        'Poppins': ['Poppins'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

