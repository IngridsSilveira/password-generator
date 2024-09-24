/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'p-background': "url('/public/img/password.jpg')",
      }
    },
  },
  plugins: [],
}

