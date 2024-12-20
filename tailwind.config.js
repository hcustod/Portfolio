/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'], // Define the font family as "ubuntu"
      },
    },
  },
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Include all source files
};



