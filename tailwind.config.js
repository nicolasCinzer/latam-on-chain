/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"Cascadia Code PL"', 'sans'],
      },
    },
    colors: {
      ocean: {
        50: '#E1FAFE',
        100: '#BEF4FD',
        200: '#83E9FC',
        300: '#42DEFA',
        400: '#07D0F3',
        500: '#059AB4',
        600: '#047B90',
        700: '#035D6D',
        800: '#02404A',
        900: '#011E23',
      },
    },
  },
  plugins: [],
};
