/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        "light-gray-01": "#F5F7FB",
        "light-gray-02": "#D9DEE4",
        "light-gray-03": "#E4E4E4",
        "light-gray-04": "#9AA0A4",
        "light-gray-05": "#707070",
        "dark-gray-01": "#2A3F54",
        "dark-gray-02": "#172D44",
        "dark-gray-03": "#515356",
        "dark-gray-04": "#828282",
        "dark-gray-05": "#AAAAAA",
        "dark-gray-06": "#DDDDDD",
        "dark-shade-01": "#081419",
        "dark-shade-02": "#102833",
        "blue-shade-01": "#3C7AB7",
        "dark-tint-01": "#28637F",
        "dark-tint-02": "#489DC5",
        "dark-tint-03": "#4D99D4",

        "green-dark": "#43A047",
        "green-dark-02":"#1ABC9C",
        "green-light": "#DFFFEF",
        "red-dark": "#D90000",
        "red-light": "#FFE6E6",
        "warning-medium" : "#FB6B27"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "2xs": "11px",
      },
    },
  },
  plugins: [],
};
