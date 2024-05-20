/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
       transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black':"#000000",
      'primary': {
        lighter:"#F4F1FC",
        light: '#ECE8FF',
        dark: '#7055DA',      
      },
      'secondary': {
        lighter:"#84818A",
        light: '#585757',
        dark: '#2E2C34',
        darker: '#1C1C1C',
      },
    },
    extend: {},
  },
  plugins: [],
}
