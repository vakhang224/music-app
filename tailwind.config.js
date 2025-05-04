/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:"#030014",
        black:{
          100:"#000000",
          300:"#f12001"
        }
        ,
        gray:{
          100:"#cccbc8"
        }
      }
    },
  },
  plugins: [],
}