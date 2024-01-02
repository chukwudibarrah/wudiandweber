/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        feldgrau: '#395B50',
        crayola: "#EF7B45",
        gunmetal: "#183642",
        cosmiclatte: "#F7F3E3",
        engviolet: "#9D69A3",
      },
      backgroundImage: {
        'aboutImage': "url('/wudiweber.webp')",
        'aboutMobile': "url('/wudiwebermobile.webp')",
        'aboutTab': "url('/wudiwebertab.webp')",
      },
    },
    fontFamily: {
      vollkorn: ["Vollkorn", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
      sourcecode: ["Source Code Pro", "monospace"],
    },
  },
  plugins: ["@tailwindcss/typography"],
};
