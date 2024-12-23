/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}', // 确保 Vue 文件被扫描
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

