/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: { 
    extend: {
      screens: {
        // => @media (min-width: 400px) { ... }
        'max-w-sm': '400px',
        // => @media (min-width: 640px) { ... }
        'max-w-xs':'640px',
      },
    } 
  },
  variants: { extend: {} },
  plugins: [],
};