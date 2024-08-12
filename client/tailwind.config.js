/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dmSans:['DM Sans', 'sans-serif'],
      },
      colors:{
        richRed: '#E11D48',
        richBlack: {
          25:'#747474',
          50:'#191919',
          100:'#0F0F0F',
          200:'#000000'
        }
      }
    },
  },
  plugins: [],
}

