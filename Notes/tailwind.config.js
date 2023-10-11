/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      defaultbg:'#F9D6D6',
      happybg:'#628674',
      smilebg:'#D9C93D',
      okbg:'#308E83',
      sadbg:'rgba(87, 32, 156, 0.65)',
      defaultemoji:'#C9B6B6',
      happyemoji:'#BCEBC6',
      smileemoji:'#EAEBBC',
      okemoji:'#57E176',
      sademoji:'#E2CDEE',
      white:'white',
      black:'black',
      blue:'#0E25F1'
    }
  },
  plugins: [],
}