/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '640px',   // 작은 화면
      md: '768px',   // 중간 화면
      lg: '1200px',  // 큰 화면 (1200px)
      xl: '1280px',  // 더 큰 화면
      '1400size': '1400px', 
      '1500size': '1500px', 
      '1600size': '1600px', 
      // '1500size': '1400px', 
    },
  },
  variants: {},
  plugins: [],
}