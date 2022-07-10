const { url } = require("inspector");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    extend: {
      backgroundImage: {
        "city-pattern":
          "url('https://res.cloudinary.com/dnw0kiu56/image/upload/v1657181246/portfolio/city_szre4x.gif')",
        "city-pattern-static":
          "url('https://res.cloudinary.com/dnw0kiu56/image/upload/v1657412627/portfolio/city-static_abgjsd.jpg')",
        "street-pattern": "url('/img/street.gif')",
      },
      fontFamily: {
        retro: ["Retro"],
        roadrage: ["RoadRage", "sans-serif"],
        sorw: ["SOR2W", "sans-serif"],
        sorbw: ["SOR2BW", "sans-serif"],
      },
      fontSize: {
        xxs: ".60rem",
        xxxs: ".50rem",
      },
    },
  },
  plugins: [],
};
