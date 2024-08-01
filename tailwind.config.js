/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#101417",
        primary: "#36343a",
        buttonHover: "#4a4459",
        textColor : "#e6e0e9",
        textHoverColor: "#cfbcff"
      },
      screens : {
        mL : '375px'
      }
    },
  },
  plugins: [],
};
