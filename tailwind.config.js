module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'tangerine': '#FF4C00',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
