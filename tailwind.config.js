/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    height: {
      600: "600px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [require("rippleui")],
};
