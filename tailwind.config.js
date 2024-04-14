/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-image": "url('./assets/images/gradient.jpg')",
      },
      colors: {
        primary: "#8358ff",
        secondary: "#7444ff",
        body: "#5a5d79",
      },
      boxShadow: {
        full: "0 0 10px 0 rgba(0, 0, 0, 0.05)",
        primary:
          "5px 5px 10px rgba(108, 106, 213, .25), inset 2px 2px 6px #A78DF0, inset -5px -5px 10px #6336E4",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
