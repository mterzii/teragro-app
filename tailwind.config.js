/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'forest-green': '#1a4d2e',
        'olive-green': '#3d5a3d',
        'accent': '#c9a961',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
      animation: {
        marquee: 'marquee 7s linear infinite',
      },
    },
  },
  plugins: [],
};
