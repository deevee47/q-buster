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
        'primary': '#F45E5E',
        'secondary': '#333333',
        'tertiary': '#000000'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

