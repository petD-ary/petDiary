/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grayColor: {
          100: '#f0f0f0',
          200: '#d9d9d9',
          300: '#808080',
          400: '#404040',
        },
        backgroundColor: '#fbfbfb',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
