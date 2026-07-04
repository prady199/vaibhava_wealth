/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#063B2E",
          deep: "#042920",
          light: "#0a5240",
        },
        gold: {
          DEFAULT: "#C89B3C",
          light: "#E4C77E",
        },
        cream: "#F8F4EA",
        charcoal: "#1A1A18",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Poppins'", "sans-serif"],
        ui: ["'Montserrat'", "sans-serif"],
      },
      borderRadius: {
        sm: "2px",
      },
    },
  },
  plugins: [],
};
