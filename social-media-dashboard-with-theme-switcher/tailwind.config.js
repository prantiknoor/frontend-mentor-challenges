/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      "lime-green": "hsl(163, 72%, 41%)",
      "bright-red": "hsl(356, 69%, 56%)",
      "facebook": "hsl(208, 92%, 53%)",
      "twitter": "hsl(203, 89%, 53%)",
      "youtube": "hsl(348, 97%, 39%)",

      "toggle": "hsl(230, 22%, 74%)",

      "white": "hsl(0, 0%, 100%)",
      "v-pale-blue": "hsl(225, 100%, 98%)",
      "light-g-blue": "hsl(227, 47%, 96%)",
      "dark-g-blue": "hsl(228, 12%, 44%)",
      "v-dark-blue": "hsl(230, 17%, 14%)",

      "v-dark-blue-2": "hsl(232, 19%, 15%)",
      "dark-d-blue": "hsl(228, 28%, 20%)",
      "d-blue": "hsl(228, 34%, 66%)",
    },
    extend: {},
  },
  plugins: [],
};
