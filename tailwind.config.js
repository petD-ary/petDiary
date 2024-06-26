/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/assets/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        checkbox: "url('../assets/images/icon-checkbox.png')",
        'checkbox-checked': "url('../assets/images/icon-checkbox-checked.png')",
      },
      boxShadow: {
        level1: '0, 4px, 4px, 0, rgba(0, 0, 0, 0.04)',
        level2: '0, -4px, 12px, 0, rgba(0, 0, 0, 0.04)',
        level3: '0, 4px, 8px, 0, rgba(0, 0, 0, 0.16)',
      },
      fontSize: {
        title1: ['28px', '1.1'],
        title2: ['24px', '1.1'],
        title3: ['20px', '1.1'],
        subTitle1: ['18px', '1.1'],
        subTitle2: ['16px', '1.1'],
        subTitle3: ['14px', '1.1'],
        body1: ['15px', '1.2'],
        body2: ['14px', '1.15'],
        button: ['16px', '1.1'],
        text: ['13px', '1.1'],
        caption1: ['13px', '1.2'],
        caption2: ['12px', '1.5'],
        'text-extra': ['11px', '1.1'],
      },
      colors: {
        primary: {
          50: '#FBF6FE',
          100: '#E7C7FA',
          200: '#D298F6',
          300: '#BE69F2',
          400: '#A93AEE',
          500: '#9213E0',
          600: '#740FB3',
          700: '#560B84',
          800: '#370755',
          900: '#190326',
        },
        secondary: {
          50: '#F6F9FE',
          100: '#C7DAFA',
          200: '#98BCF6',
          300: '#699DF2',
          400: '#3A7FEE',
          500: '#1362E0',
          600: '#0F4EB3',
          700: '#0B3984',
          800: '#072555',
          900: '#031026',
        },
        grayColor: {
          10: '#F8F8F8',
          100: '#DEDEDE',
          200: '#C4C4C4',
          300: '#ABABAB',
          400: '#919191',
          500: '#787878',
          600: '#5E5E5E',
          700: '#454545',
          800: '#2B2B2B',
          900: '#121212',
        },
        error: '#E04E45',
        accent: '#E7820B',
        success: '#03A400',
        helpMessage: '#787878',
        text: {
          title: 'rgba(0, 0, 0, 0.85)',
          primary: 'rgba(0, 0, 0, 0.70)',
          secondary: 'rgba(0, 0, 0, 0.55)',
          tertiary: 'rgba(0, 0, 0, 0.45)',
          disable: 'rgba(0, 0, 0, 0.25)',
        },
        extra: {
          active: 'rgba(0, 0, 0, 0.25)',
          border: 'rgba(0, 0, 0, 0.15)',
          deviders: 'rgba(0, 0, 0, 0.06)',
          'btn-bg': 'rgba(0, 0, 0, 0.08)',
          'device-bg': '#F6F7F9',
          tableHeader: 'rgba(0, 0, 0, 0.02)',
        },
        backgroundColor: '#fbfbfb',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translate(-50%, 100%)' },
          '100%': { transform: 'translate(-50%, 0)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.4s ease-out',
      },
      dropShadow: {
        floatBtn: '0px 8px 16px 0px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
