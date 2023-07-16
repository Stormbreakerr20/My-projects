module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      'xlm': '1279px',
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1080px'},
      'lgm': '1080px',
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '820px'},
      // => @media (max-width: 767px) { ... }
      'smd':{'max': '980px'},

      'sm': {'max': '600px'},
      'vsm': {'max': '430px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
});