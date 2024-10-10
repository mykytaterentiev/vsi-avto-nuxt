/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: '#cc4220',
        secondary: {
          DEFAULT: '#FF5733',
          light: '#FF8A65',
        },
        dark: '#333333',
        background: '#f3dbb3',
        'secondary-light': '#f3dbb3',
        customColors: {
          background: '#090807',
          light: '#f3dbb3',
          medium: '#8e8980',
          highlight: '#db714e',
          accent: '#e08d6b',
          neutral: '#746c56',
          pale: '#c0ae8f',
          salmon: '#ebad89',
          peach: '#e4a47c',
          kolya: '#c75929'
        },
      },
      fontFamily: {
        benzin: ['Benzin', 'sans-serif'],
      },
    },
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  plugins: [],
};
