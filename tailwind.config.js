/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zina: ["Zina", "sans-serif"],
        cab: ["Cabinet Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
