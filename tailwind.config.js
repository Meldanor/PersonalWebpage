module.exports = {
  darkMode: 'selector',
  content: ["./templates/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['InterVariable'],
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
