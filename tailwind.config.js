/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        raisin_black: { DEFAULT: "#191924", 100: "#050507", 200: "#0a0a0e", 300: "#0f0f16", 400: "#14141d", 500: "#191924", 600: "#3e3e59", 700: "#63638e", 800: "#9595b5", 900: "#cacada" },
        antiwhite: { DEFAULT: "#e8eaed", 100: "#292e35", 200: "#535c69", 300: "#7f8a9a", 400: "#b4bac4", 500: "#e8eaed", 600: "#edeef1", 700: "#f1f2f4", 800: "#f6f7f8", 900: "#fafbfb" },
        steel_blue: { DEFAULT: "#457eb0", 100: "#0e1923", 200: "#1b3247", 300: "#294c6a", 400: "#37658d", 500: "#457eb0", 600: "#6698c4", 700: "#8cb2d2", 800: "#b3cce1", 900: "#d9e5f0" },
        copper: { DEFAULT: "#b78152", 100: "#251a10", 200: "#4b341f", 300: "#704d2f", 400: "#96673f", 500: "#b78152", 600: "#c59a75", 700: "#d4b497", 800: "#e2cdba", 900: "#f1e6dc" },
        sandy_brown: { DEFAULT: "#ef9e57", 100: "#3c1f06", 200: "#773e0b", 300: "#b35d11", 400: "#ea7c1b", 500: "#ef9e57", 600: "#f3b179", 700: "#f6c59a", 800: "#f9d8bc", 900: "#fcecdd" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
