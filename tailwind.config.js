/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#61DAFB",
      secondary: "#E9FF70",
      white: "#FFFFFF",
      gray: {
        light: "#F8F9FA",
        DEFAULT: "#DEE2E6",
        dark: "#ADB5BD",
      },
      black: {
        text: "#343A40",
        title: "#212529",
        DEFAULT: "#000000",
      },
      red: "#FF322B",
    },
    extend: {
      width: {
        82: "20.5rem",
      },
      height: {
        144: "36rem",
      },
    },
  },
  plugins: [],
};
