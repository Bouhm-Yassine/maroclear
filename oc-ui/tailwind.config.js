/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#EF8022",
        secondary: "#95C13D",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
