/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#0066cc',
        'sand': '#f4e4c1',
        'tropical': '#00b894',
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #0066cc 0%, #00b894 100%)',
      },
    },
  },
  plugins: [],
}
