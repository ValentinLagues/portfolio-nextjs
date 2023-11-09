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
          "url('https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/city.gif?alt=media&token=eeb84820-d192-4d09-959b-fa076370201d')",
      },
      fontFamily: {
        retro: ["Retro", "sans-serif"],
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
