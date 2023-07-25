module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('images/grid_bg.svg')",
        'dot': "url('/image/dot_bg.svg')",
    },
  },
  plugins: [],
}
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

      'rescontact':{'max':'690px'},

      'sm': {'max': '600px'},
      'vsm': {'max': '430px'},
      // => @media (max-width: 639px) { ... }
      
    },
  },
  plugins: [
]

});