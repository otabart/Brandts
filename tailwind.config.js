/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": "1400px",
    },
    extend: {
      colors: {
        primaryBlue: "#1DA1F2",
        bgDark: "#14171A",
        textGrey: "#E1E8ED",
        accentColor: "#A8B1FF",
      }
    },
  },
  plugins: [],
}

