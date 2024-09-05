/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#252525",
        primary: "#6930C3",
        secondary: "#64DFDF",
        tertiary: "#80FFDB",
        "glow-ball-red": "#DF2093",
        "glow-ball-dark-blue": "#1325EC",
        "glow-ball-light-blue": "#13C8EC",
        "glow-ball-purple": "#5C20DF",
      },
    },
  },
  plugins: [],
};
