/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customblue: 'rgb(244, 249, 253)', // Enclose in quotes
      },
    },
  },
  plugins: [],
}
