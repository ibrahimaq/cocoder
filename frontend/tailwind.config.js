/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/App.js'
    
  ],
  theme: {
    extend: {
      animation: {
        alert: 'alert .75s ease-in-out'
      },
      keyframes: {
        alert: {
          'from': { top: '-2.5rem'},
          'to': { top: '2.5rem' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
