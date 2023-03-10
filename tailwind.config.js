/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3af68c",
        secondary: "#030128",
        tertiary: "#00337C",
      },
      height:{
        120: "30rem",
        180: "45rem",
      }
    },
  },
  plugins: [],
}
