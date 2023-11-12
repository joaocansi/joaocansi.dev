/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F1EEDF',
      },
      fontSize: {
        xs: '19px',
        sm: '22px',
        base: '26px',
        md: '75px',
        lg: ['150px', '1'],
        xl: ['200px', '1'],
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
          '3xl': '1750px',
        },
      },
    },
  },
  plugins: [],
};
