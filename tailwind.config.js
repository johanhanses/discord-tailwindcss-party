const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Whitney', ...defaultTheme.fontFamily.sans],
        title: ['Ginto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: '#5865F2',
        gray: {
          50: '#ECEDEE',
          100: '#DCDDDE',
          200: '#B9BBBE',
          300: '#8E9297',
          400: '#72767D',
          500: '#5C6067',
          600: '#464950',
          700: '#36393F',
          800: '#2F3136',
          900: '#202225'
        }
      }
    }
  },
  plugins: []
}
