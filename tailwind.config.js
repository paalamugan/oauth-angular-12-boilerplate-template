module.exports = {
  prefix: '',
  // mode: 'jit',
  important: '#app',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  // plugins: [],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};