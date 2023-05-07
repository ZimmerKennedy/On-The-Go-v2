/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      slide: {
        "0%": { backgroundPosition: "0 0" },
        "100%": { backgroundPosition: "100% 0" },
      },
      textShadow: {
        'default': '0 2px 8px rgba(0, 0, 0, 0.7)',
        'lg': '0 5px 20px rgba(0, 0, 128, 1)',
      },

      height: {
        '100rem': '100rem',
      },
      colors: {
        'light-gray': '#eeeee',
        'seafoam-green': '#00ADB5',
        'deep-blue': '#385170',
        'navy-blue': '#142d4c',
        'light-blue': '#0066cc',
        'text-color': '#E3E0DB',
        'primary-color': '#1c1f24'
      },
      boxShadow: {
        'navy-blue': '5px 5px 5px 1px #142d4c',
      },
      fontFamily: {
        'inter-tight': ['Inter Tight', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'tilt-warp': ['Tilt Warp', 'cursive'],
        'bruno-ace-sc': ['Bruno Ace SC', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '.65em',
      },
      spacing:{
        '30rem': '30rem',
        '35rem': '35rem',
        '50rem': '50rem',
        '40rem': '40rem',
      },  
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '0 2px 5px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 0 5px rgba(0, 0, 0, 1)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}