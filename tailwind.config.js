module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Helvetica', 'Roboto', 'ui-sans-serif', 'system-ui'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('postcss-preset-env')({
    })
  ],
}