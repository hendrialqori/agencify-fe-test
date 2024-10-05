/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dm_sans: ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

