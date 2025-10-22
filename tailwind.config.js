// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-150': '#f3f4f6', // warna abu-abu lembut di antara gray-100 dan gray-200
      },
    },
  },
  plugins: [],
}
