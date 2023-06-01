/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,vue}"],
  theme: {
    fontFamily:{
      'Poppins': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

