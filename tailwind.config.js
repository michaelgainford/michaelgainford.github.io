module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1000px",
      xl: "1440px",
      xxl: "1800px",
    },
    extend: {
      colors: {
        theme: "#16161d",
        "theme-alt": "#21212c",
        "theme-tint": "#dddde4",
        light: "#dedede",
        highlight: "#d9a520",
      },
    },
  },
  plugins: [],
};
