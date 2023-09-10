/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#044389',
        secondaryBlue:"#215391",
        primaryYellow: '#FFE500',
      },
      boxShadow: {
        button: 'inset 0px -5px 15px -1px rgba(0, 0, 0, 0.40)',
      },
      fontSize: {
        '3': '3px',
        '60': '60px',
      },
      stroke:{
        text: '2x black'
      },
      spacing: {
        '20': '20px',
        '40': '40px',
      }
    },
  },
  plugins: [],
}

