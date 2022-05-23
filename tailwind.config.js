module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '500px',
      },
      blur: {
        'xs': '1px'
      }
    },
  },
  plugins: [],
}
