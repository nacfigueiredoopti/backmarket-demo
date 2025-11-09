/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Back Market Brand Colors
        primary: '#ff7b00',
        'bm-orange': '#ff7b00',
        'bm-green': '#008a55',
        'bm-green-dark': '#006b40',
        'bm-red': '#b71029',
        'bm-purple': '#a164e8',
        'bm-dark': '#0e1016',
        'bm-gray': '#2f3137',
        'bm-light-gray': '#edeff3',
        'cornflower': '#6495ed',
        'blush': '#ffb3ba',
        'emerald': '#008a55',
        'tangaroa': '#1e3a5f',
        'bush': '#0d4d4d',
        'coffee': '#6f4e37',
      },
      fontFamily: {
        sans: ['BMDuplet', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['IvarSoft', 'serif'],
      },
    },
  },
  plugins: [],
}
