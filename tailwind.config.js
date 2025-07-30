/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ← أهم سطر
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        accent: '#14b8a6',
        light: '#f9f9f9',
      },
    },
  },
  plugins: [],
}
