/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#ffce1a",
        'secondary':"#0d0842",
        'background':'#f3f3f3',
        'favorite':"#ff5841"
      },
      fontFamily:{
        'primary': ["Montserrat"],
        'secondary': ["Nunito Sans"]
      }
    },
  },
  plugins: [],
}

