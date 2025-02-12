/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#B3D1FF',
          200: '#80B3FF',
          300: '#4D94FF',
          400: '#1A75FF',
          500: '#60A5FA',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        accent: {
          50: '#F5F3FF',
          100: '#E9E5FF',
          200: '#D4CCFF',
          300: '#BEB2FF',
          400: '#A799FF',
          500: '#918CFF',
          600: '#766AC7',
          700: '#5A4F95',
          800: '#3E3563',
          900: '#221A31',
        },
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};