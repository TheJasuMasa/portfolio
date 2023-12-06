/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'darkgreen': '#040D12',
        'medgreen': '#183D3D',
        'lightgreen': '#5C8374',
        'lightestgreen': '#93B1A6'
      }
    },
  },
  plugins: [],
}

