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
        "lightRed-100": "hsla(0, 100%, 67%, .15)",
        "orangeYellow": "hsl(39, 100%, 56%)",
        "orangeYellow-100": "hsla(39, 100%, 56%, .15)",
        "greenTeal": "hsl(166, 100%, 37%)",
        "greenTeal-100": "hsla(166, 100%, 37%, .15)",
        "cobaltBlue": "hsl(234, 85%, 45%)",
        "cobaltBlue-100": "hsl(234, 85%, 45%, .15)",
        "lightSlateBlue": "hsl(252, 100%, 67%)",
        "lightRoyalBlue": "hsl(241, 81%, 54%)",
        "violetBlue": "hsla(256, 72%, 46%, 1)",
        "persianBlue": "hsla(241, 72%, 46%, 1)",
        "tWhite": "hsla(0, 0%, 100%, .25)",
      },
      listStyleImage: {
        iconMemory: "./src/assets/images/icon-memory.svg",
        iconReaction: "./src/assets/images/icon-reaction.svg",
        iconVerbal: "./src/assets/images/icon-verbal.svg",
        iconVisual: "./src/assets/images/icon-visual.svg",
      },
    },
  },
  plugins: [],
}

