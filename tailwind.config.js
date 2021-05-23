// tailwind.config.js
module.exports = {
  theme: {
    height: {
      118: "118px",
      140: "140px",
      xs: "170px",
      sm: "200px",
      mid: "250px",
      md: "300px",
      mmd: "370px",
      xmd: "400px",
      lg: "500px",
      xl: "600px",
      650: "650px",
      xxl: "700px",
      full: "100%",
      auto: "auto",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: { "new-blue": "#eff4fa" },
      screens: {
        xs: "475px",
      },
      width: {
        19.5: "19.5rem",
        26: "26rem",
        31.2: "31.2rem",
        41: "41rem",
        735: "735px",
      },
    },
  },
};
