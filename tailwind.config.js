/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    //   fadeIn: "fadeIn 2s ease-in forwards",
    //   fadeOut: "fadeOut 2s eae-out forwards"
    // },
    // keyframes: {
    //   fadeIn: {
    //     "0%": { opacity: 0 },
    //     "100%": { opacity: 1 }
    //   },
    //   fadeOut: {
    //     "100%": { opacity: 1},
    //     "0%": { opacity: 0}
    //   }
    // },
    // variants: {
    //   animation: ["motion-safe"]
    }
  },
  plugins: [],
}
