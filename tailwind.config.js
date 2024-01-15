/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary': '#26C0AB',
        'primary-dark': '#00494D',
        'primary-400': '#5E7A7D',
        'primary-300': '#7F9C9F',
        'primary-200': '#C5E4E7',
        'primary-100': '#F4FAFA',
      }
    },
  },
  plugins: [],
}
