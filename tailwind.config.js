/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Include all files in src
  theme: {
    extend: {

      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",

      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        }
      },
    },
  },

  darkMode: "class", // Enable dark mode

  plugins: [],
}

