module.exports = {
  content: ["./src/**/*.{js,jsx"],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  media: false,
  theme: {
    fontFamily: {
      primary: "Poppins ", 
      body: "Poppins"
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#ffffff",
        tertiary: "#000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
