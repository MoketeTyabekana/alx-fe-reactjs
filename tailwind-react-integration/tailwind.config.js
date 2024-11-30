/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: { 
    extend: {
      maxWidth: {
        'max-w-sm': '400px',
      },
    } 
  },
  variants: { extend: {} },
  plugins: [],
};