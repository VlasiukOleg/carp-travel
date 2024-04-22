/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    maxWidth: {
      'screen-mobile': '480px',
      'screen-tablet': '768px',
      'screen-desktop': '1280px',
    },
  },
};
