/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary':{
        100: "#B8B8FF",
        200: "#8383FF",
        300: "#3A3AE4",
        400: "#3A3AFF",
        500: "#242461"
      },
      'black':{
        100:"#49595B",
        200:"#11191A",
        300:"#090D0E"
      },
      'white':"#FBF9FF"
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        colorChange: {
          '0%': { color: '#FBF9FF' },
          '100%': { color: '#3A3AE4' },
        },
      },
      animation: {
        colorChange: 'colorChange 1.2s ease-in-out forwards',
        fadeOut: 'fadeOut 1s ease-in-out forwards',
      },
    },
    spacing: {
      '0':'0px',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '32px',
      '8': '40px',
      '9': '48px',
      '10': '64px',
      '11': '72px',
      '12': '94px',
      '13': '120px',

    }
  },
  plugins: [],
}

