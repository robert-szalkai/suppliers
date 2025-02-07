/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../app/Views/investesc_ro.php",
    "../app/Views/components/header-investesc_ro.php",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: {
        100: "#F7F8FB",
        200: "#F1F5FF",
        300: "#DFE6F6",
        400: "#C1C8D7",
        500: "#717E99",
        600: "#707070",
        800: "#3c3c3d",
      },
      blue: {
        100: "#EFF2F7",
        150: "#EAEFF9",
        200: "#E9EEF9",
        250: "#E7EFFF",
        300: "#EDF3FF",
        350: "#557ACF",
        400: "#2B59C3",
        600: "#1434CB",
        700: "#1240BC",
        900: "#22479C",
      },
      orange: {
        300: "#FCBC2C",
        500: "#FFB100",
        700: "#FCA21B",
      },
      green: "#2CC84D",
      red: "#d50000",
      chart: {
        bar: {
          default: "#717e9980",
          current: "#2b59c380",
          future: "#2cc84d80",
        },
        disc: {
          default: "#717e99",
          current: "#2b59c3",
          future: "#2cc84d",
        },
      },
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        xxs: ["10px", { lineHeight: "12px" }],
        "xxs-1": ["11px", { lineHeight: "13px" }],
        "xs-1": ["13px", { lineHeight: "20px" }],
        "xs-1.5": ["14px", { lineHeight: "20px" }],
        "xs-2": ["15px", { lineHeight: "17px" }],
        "sm-1": ["16px", { lineHeight: "24px" }],
        "md-1": ["18px", { lineHeight: "24px" }],
        "md-1.5": ["20px", { lineHeight: "20px" }],
        "md-2": ["21px", { lineHeight: "28px" }],
        "xl-1": ["24px", { lineHeight: "32px" }],
        "xl-1.5": ["31px", { lineHeight: "40px" }],
        "xl-2": ["34px", { lineHeight: "40px" }],
        "xl-3": ["36px", { lineHeight: "44px" }],
        "xl-5": ["50px", { lineHeight: "56px" }],
      },
      spacing: {
        13: "3.123rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        30: "7.5rem",
        50: "12.5rem",
      },
      animation: {
        "btn-pulse": "pulse 1.5s infinite",
      },
    },
  },
  plugins: [],
  important: true, // needed for investesc page
};
