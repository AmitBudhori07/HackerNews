const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
   colors: {
    blue: {
      light: '#0EB1FF',
      DEFAULT: '#5c6ac4',
      dark: '#202e78',
    },
    black: {
      light: '#E5E5E5',
      DEFAULT: '#FFF',
      dark: '#5D646A',
    },
    gray: {
      light: '#F5F6F8',
      lighter: '#E5E5E5',
      DEFAULT: 'gray',
      dark: '#87919A',
    },
    white:{
      DEFAULT:'#FFFFFF'
    }
  },
    extend: {
      fontFamily: {
        sans: ['Montserrat','sans-serif','Lato', ...defaultTheme.fontFamily.sans],
        dropdown:['Lato']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
