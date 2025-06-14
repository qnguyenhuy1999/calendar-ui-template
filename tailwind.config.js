/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ← your source files
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "var(--light-blue-color)",
        "dark-blue": "var(--dark-blue-color)",
        "light-orange": "var(--light-orange-color)",
        "dark-orange": "var(--dark-orange-color)",
        "calendar-tile": "var(--calendar-tile-color)",
      },
    },
  },
  plugins: [],
};
