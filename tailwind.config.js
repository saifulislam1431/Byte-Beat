/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#244d61",

          "secondary": "#5689c0",

          "accent": "#a1e1fa",

          "neutral": "#2b1d2f",

          "base-100": "#ffffff",

          "info": "#8498e1",

          "success": "#7fe6d0",

          "warning": "#f3c672",

          "error": "#f22e1c",
        },
      },
      "night"
    ],
  },
  plugins: [require("daisyui")],
}

