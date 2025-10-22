module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        aleo: ['Aleo', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
