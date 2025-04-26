/** @type {import('tailwindcss').Config} */

const colors = require("./constants/Colors");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
