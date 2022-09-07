/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9ca3af",

          "secondary": "#16a34a",

          "accent": "#b4ebf7",

          "neutral": "#1c1917",

          "base-100": "#FAF9FB",

          "info": "#22d3ee",

          "success": "#10b981",

          "warning": "#EB9C2D",

          "error": "#E61E46",
        },
      },
      {
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}
