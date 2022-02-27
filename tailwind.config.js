module.exports = {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'body-color': "#dae3e2",
        'd-body-color': "#03191E"
      },
      screens: {
        'sm': { 'max': '420px' },
        'md': { 'max': '490px' },
        'lg': { 'max': '760px' },
        'xlg': { 'max': '1080px' },
        'desktop': { 'min': '1081px' },
      },
      fontFamily: {
        'IMB-PLEX': 'IBM Plex Sans'
      }
    },
  },
  plugins: [],
}
