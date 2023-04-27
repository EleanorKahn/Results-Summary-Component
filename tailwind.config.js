/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkGrayBlue": "hsl(224, 30%, 27%)",
        "lightLavender": "hsl(241, 100%, 89%)",
        "paleBlue": "hsl(221, 100%, 96%)",
        "lightRed": "hsl(0, 100%, 67%)",
        "lightRed-100": "hsla(0, 100%, 67%, .10)",
        "orangeYellow": "hsl(39, 100%, 56%)",
        "orangeYellow-100": "hsla(39, 100%, 56%, .10)",
        "greenTeal": "hsl(166, 100%, 37%)",
        "greenTeal-100": "hsla(166, 100%, 37%, .10)",
        "cobaltBlue": "hsl(234, 85%, 45%)",
        "cobaltBlue-100": "hsl(234, 85%, 45%, .10)",
        "lightSlateBlue": "hsl(252, 100%, 67%)",
        "lightRoyalBlue": "hsl(241, 81%, 54%)",
        "violetBlue": "hsla(256, 72%, 46%, 1)",
        "persianBlue": "hsla(241, 72%, 46%, 0)"
      },
      listStyleImage: {
        iconMemory: "./assets/images/icon-memory.svg",
        iconReaction: "./assets/images/icon-reaction.svg",
        iconVerbal: "./assets/images/icon-verbal.svg",
        iconVisual: "./assets/images/icon-visual.svg",
      },
    },
  },
  plugins: [],
}

