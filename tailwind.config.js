/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manrope: ["sans-serif"],
    },
    extend: {
      screens: {
        sm: "200px",
      },
    },
  },
  plugins: [],
};
