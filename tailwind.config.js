/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'chinese-black': '#141414',
        'jet': "#323437",
        'atomic-tangerine': '#FF9357',
        'dark-gray': '#A8A8A8',
        'vanta-black': '#010101'
      },
      backgroundImage: {
        'hero-bg': "url('./public/images/hero-bg.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    fontFamily: {
      "Poppins": ['Poppins']
    }
  },
  plugins: [],
}