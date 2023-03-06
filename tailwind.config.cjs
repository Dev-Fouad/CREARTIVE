/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px', 
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      Sans: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
