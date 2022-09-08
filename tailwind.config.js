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
      extend: {
        colors: { 
          'my-black' :'#25282B ', 
          'my-blue': '#336CFB' , 
          'my-green': '#03B575' , 
          'my-red': '#E74F48' , 
        } 
      }
    },
  },
  plugins: [],
}
