module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'tangerine': '#FF4C00',
        'litudian-orange': '#FF9300'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
