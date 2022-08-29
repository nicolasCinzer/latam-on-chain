/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"Cascadia Code PL"', 'sans'],
      },
    },
  },
  plugins: [],
};
