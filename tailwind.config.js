/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkGrayBlue": "hsl(224, 30%, 27%)",
        "lightLavender": "hsl(241, 100%, 89%)",
        "paleBlue": "hsl(221, 100%, 96%)",
        "lightRed": "hsl(0, 100%, 67%)",
        "orangeYellow": "hsl(39, 100%, 56%)",
        "greenTeal": "hsl(166, 100%, 37%)",
        "cobaltBlue": "hsl(234, 85%, 45%)",
        "lightSlateBlue": "hsl(252, 100%, 67%)",
        "lightRoyalBlue": "hsl(241, 81%, 54%)",
        "violetBlue": "hsla(256, 72%, 46%, 1)",
        "persianBlue": "hsla(241, 72%, 46%, 0)"
      },
    },
  },
  plugins: [],
}

