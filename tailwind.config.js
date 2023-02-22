/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Nunito Sans"]
    },
    extend: {
      colors: {
        'dmDarkBlue-700': 'hsl(209, 23%, 22%)',
        'dmDarkBlue-900': 'hsl(207, 26%, 17%)',
        'lmDarkBlue-900': 'hsl(200, 15%, 8%)',
        'lmDarkGray-700': 'hsl(0, 0%, 52%)',
        'lmLightGray-400': 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}



/*
- Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
*/