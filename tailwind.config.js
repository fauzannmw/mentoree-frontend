module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
