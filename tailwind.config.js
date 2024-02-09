/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "hsla(205, 46%, 10%, 1)",
        mainColor: "#0e1b25",
        // purpleColor: "#9771FF",
        // irisBlueColor: "#01B5C5",
        // headingColor: "#181A1E",
        // textColor: "#4E545F"
      }
    },
  },
  plugins: [],
}