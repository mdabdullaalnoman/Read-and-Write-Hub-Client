module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Libre: ['Libre Baskerville', 'serif'],
        Nanum: ['Nanum Gothic', 'sans-serif'],
        Open: ['Open Sans', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'darker': '#12263f',
        'darks': '#152e4d',
        'whiter': '#ecfeff',
        'primaryDarker': '#155e75'
      },
    },
  },
  plugins: [

  ],
}

