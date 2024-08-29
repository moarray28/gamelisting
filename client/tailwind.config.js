/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  darkMode: 'class', 
  theme: {
    extend: { 
      backgroundImage:{
      'dark-gradient': 'linear-gradient(225deg, hsla(220, 7%, 9%, 1) 0%, hsla(255, 19%, 13%, 1) 100%)',
      'light-gradient':'linear-gradient(225deg, hsla(240, 100%, 99%, 1) 0%, hsla(231, 35%, 93%, 1) 100%)'
    },colors: {
      'light-text': '#000000', // Black for light theme
      'dark-text': '#ffffff',  // White for dark theme
    }
  },
  },
  plugins: [],
}