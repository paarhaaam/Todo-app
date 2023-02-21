/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  daisyui: {
    themes: [
      {
        mytheme: {
        
"base-100": "#FFFFFF",
        
"secondary": "#F000B8",
        
"accent": "#37CDBE",
        
"neutral": "#3D4451",
        
"primary": "#570DF8",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
