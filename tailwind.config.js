/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0c',
          800: '#121217',
          700: '#1b1b23',
          600: '#262633',
        },
        brand: {
          accent: '#FF4A60', // Vibrant creative coral
          secondary: '#7928CA', // Sleek violet
          gold: '#FFB800',
          cyan: '#00F0FF'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Prompt', 'sans-serif'],
        display: ['Outfit', 'Prompt', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
