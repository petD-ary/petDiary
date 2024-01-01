/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/assets/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        checkbox: "url('../assets/images/icon-checkbox.png')",
        "checkbox-checked": "url('../assets/images/icon-checkbox-checked.png')",
      },
      fontSize: {
        title1: ["24px", "1.1"],
        title2: ["20px", "1.1"],
        subTitle: ["16px", "1.1"],
        body: ["15px", "1.2"],
        button: ["16px", "1.1"],
        text: ["13px", "1.1"],
        caption1: ["13px", "1.2"],
        caption2: ["12px", "1.5"],
        label: ["11px", "1.45"],
      },
      colors: {
        primary: {
          50: "#FBF6FE",
          100: "#E7C7FA",
          200: "#D298F6",
          300: "#BE69F2",
          400: "#A93AEE",
          500: "#9213E0",
          600: "#740FB3",
          700: "#560B84",
          800: "#370755",
          900: "#190326",
        },
        secondary: {
          50: "#F6F9FE",
          100: "#C7DAFA",
          200: "#98BCF6",
          300: "#699DF2",
          400: "#3A7FEE",
          500: "#1362E0",
          600: "#0F4EB3",
          700: "#0B3984",
          800: "#072555",
          900: "#031026",
        },
        grayColor: {
          10: "#F8F8F8",
          100: "#DEDEDE",
          200: "#C4C4C4",
          300: "#ABABAB",
          400: "#919191",
          500: "#787878",
          600: "#5E5E5E",
          700: "#454545",
          800: "#2B2B2B",
          900: "#121212",
        },
        error: "#E04E45",
        accent: "#E7820B",
        success: "#03A400",
        helpMessage: "#787878",
        text: {
          title: "rgba(0, 0, 0, 0.85)",
          primary: "rgba(0, 0, 0, 0.65)",
          secondary: "rgba(0, 0, 0, 0.45)",
          disable: "rgba(0, 0, 0, 0.25)",
          border: "rgba(0, 0, 0, 0.15)",
          dividers: "rgba(0, 0, 0, 0.06)",
          background: "rgba(0, 0, 0, 0.04)",
          tableHeader: "rgba(0, 0, 0, 0.02)",
        },
        backgroundColor: "#fbfbfb",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addComponents }) {
      const newUtilities = {
        ".header": {
          "@apply w-full md:max-w-3xl h-14 mx-auto px-2 py-1 flex items-center": {},
        },
      };
      addComponents(newUtilities);
    },
  ],
};
