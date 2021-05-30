module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        375: '375px',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
