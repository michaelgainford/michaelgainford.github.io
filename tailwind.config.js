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
        "dots-background": "url('/svg-backgrounds/dots.svg')",
        "graph-paper-background": "url('/svg-backgrounds/graph-paper.svg')",
        "rain-background": "url('/svg-backgrounds/rain.svg')",
        "topo-background": "url('/svg-backgrounds/topography.svg')",
      },
      container: {
        center: true,
      },
      screens: {
        '3xl': '1500px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
