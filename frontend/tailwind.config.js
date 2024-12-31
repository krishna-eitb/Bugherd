/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Condensed"', 'sans-serif'],
      },
      colors:{
        'gray':"#e0e0e0",
        'neon-green': '#bfeb9c',
      }
    },
  },
  plugins: [],
}
