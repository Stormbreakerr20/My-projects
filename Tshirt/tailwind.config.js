export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#5A5959",
        yellow:"#FFEAAE",
        "dark-yellow":"#FCCA3F",
        orange:"#F6820C",

      },
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
  },
  plugins: [

  ],
}
