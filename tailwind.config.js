/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-background": "url('/svg-backgrounds/constellation.svg')",
        "brick-wall-background": "url('/svg-backgrounds/brick-wall.svg')",
        "dots-background": "url('/svg-backgrounds/dots.svg')",
        "graph-paper-background": "url('/svg-backgrounds/graph-paper.svg')",
        "hexagons-background": "url('/svg-backgrounds/hexagons.svg')",
        "movies-background": "url('/svg-backgrounds/kiwi.svg')",
        "melt-background": "url('/svg-backgrounds/melt.svg')",
        "rain-background": "url('/svg-backgrounds/rain.svg')",
        "topo-background": "url('/svg-backgrounds/topography.svg')",
      },
      colors: {
        magpl: {
          DEFAULT: '#2bc9bc',
          50: '#ccf4f1',
          100: '#aaede7',
          200: '#89e6de',
          300: '#67dfd5',
          400: '#45d7cb',
          500: '#2bc9bc',
          600: '#24a79d',
          700: '#1d867d',
          800: '#15645e',
          900: '#0e433e',
          950: '#07211f',
        },
        epl: {
          DEFAULT: '#380038',
          50: '#b700b7',
          100: '#9e009e',
          200: '#840084',
          300: '#6b006b',
          400: '#510051',
          500: '#380038',
          600: '#1f001f',
          700: '#050005',
          800: '#050005',
          900: '#050005',
          950: '#050005',
        },
        fn: {
          'dark-blue': '#1b90dd',
          'light-blue': '#5fceea',
        }
      },
      container: {
        center: true,
      },
      screens: {
        'xxs': '380px',
        'xs': '450px',
        '3xl': '1500px',
      },
    },
  },
  plugins: [],
};
