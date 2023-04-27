const tailwindcss = require("tailwindcss");

// module.exports = {
//     plugins: [
//         tailwindcss('./tailwind.js'),
//         require('autoprefixer')
//     ]
// };

module.exports = {
    plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    }
}