/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "color-one": "#0A0A1F",
        "color-two": "#BEBEBE",
        "color-three": "#E4E5FF",
        "color-four": "#3964D5",
      },
      fontFamily: {
        LeBelle: "La Belle Aurore",
        Poppins: "Poppins",
      },
      keyframes: {
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeLeft: "fadeLeft 2s ease-out",
        fadeRight: "fadeRight 2s ease-out",
      },
    },
  },
  plugins: [],
};

