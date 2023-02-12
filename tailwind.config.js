/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#FF2625',
        'secondary': '#293451'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 15px",
          
          "@screen sm": {
            maxWidth: "540px"
          },
          "@screen md": {
            maxWidth: "720px"
          },
          "@screen lg": {
            maxWidth: "960px"
          },
          "@screen xl": {
            maxWidth: "1140px"
          }
        },
        ".container-fluid": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 15px",
          width: "100%"
        }
      })
    }
  ],
}
