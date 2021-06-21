// tailwind.config.js
module.exports = {
  theme: {
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
        xxxl: "2000px",
        full: "100%",
        150: "150%",
        auto: "auto",
      },
      skew: {
        25: "-25deg",
        60: "60deg",
      },
      top: {
        "1/4": "25%",
        "4/5": "80%",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
    },
  },
};
