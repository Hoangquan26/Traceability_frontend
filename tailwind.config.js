/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#025048',
        secondary: '#f1f4f1'
      },
      textColor: {
        primary : '#025048',
        secondary: '#424b4a',
        grayColor: '#424b4a'
      },
      borderColor: {
        primary: '#025048',
        secondary: '#f1f4f1'
      },
      padding: {
        deskTop : '20rem'
      }
      ,
      keyframes: {
        slideTop: {
          '0%': {top: '100%'},
          '50%': {top: '0%'},
          '100%': {top: '100%'}
        },
        scaleOut: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        }
      },
      animation: {
        slideTop: 'slideTop 4s linear infinite',
        scaleOut: 'scaleOut .2s linear'
      },
    },
  },
  plugins: [],
}