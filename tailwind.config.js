/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
      fontFamily: {
        cc: ['var(--font-cc)'],
        dmmono: ['var(--font-dmmono)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'soft-cyan': '#8be9fd',
        'soft-pink': '#ff79c6',
        'soft-purple': '#bd93f9',
        'soft-yellow': '#f1fa8c',
        'soft-green': '#50fa7b',
      },
    },
  },
  plugins: [],
};
