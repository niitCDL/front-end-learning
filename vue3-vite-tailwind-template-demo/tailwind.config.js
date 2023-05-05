/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    colors:{
      'ocean': '#16c0b0',
      'leaf': '#84cf6a',
      'mist': '#d8d8d8',
      'midnight': '#39495c',
      'cloud': '#ffffff',
      'purple': '#BB7CD7',
    },
    extend: {},
    container: {
      center: true,
    }
  },
  plugins: [],
}