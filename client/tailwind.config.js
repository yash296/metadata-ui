/** @type {import('tailwindcss').Config} */
export default {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './src/**/*.{html,vue,js,ts}',
    './public/index.html',
    './src/data/**/*.json'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

