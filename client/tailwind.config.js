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
      },
    },
  },
  plugins: [],
};
