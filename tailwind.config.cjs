/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./context/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./utils/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        romag: {
          orange: "#FC7B1D",
          gray: "#6A6A6A",
          dark: "#1F2937",
          light: "#F9FAFB",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
