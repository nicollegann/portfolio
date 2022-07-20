module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#C7B198',
          200: '#A0937D',
          300: '#8E806A',
          400: '#826F66'
        },
        coffee: '#E7D4B5',
        cream: {
          100: '#FFF6EA',
          200: '#F9E4C8',
        },
        neutral: {
          100: '#F8F5F1',
          200: '#F0ECE3',
          300: '#FBF8F1',
        }
      },
      screens: {
        'sm': '500px',
      },
      blur: {
        'xs': '1px'
      },
    },
  },
  plugins: [],
}
