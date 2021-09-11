module.exports = {
  prefix: "",
  // mode: 'jit',
  important: "#app",
  purge: {
    enabled: process.env.NODE_ENV === "production", // If enabled is true, it will only build with used classes in that tailwind css. Its reduce a file size
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
