/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./*.{ts,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {},
  },
  presets: [require("nativewind/preset")],
  plugins: [],
};
