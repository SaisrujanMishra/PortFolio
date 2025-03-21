/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
          dark: '#0F0F0F',
        },
        secondary: {
          DEFAULT: '#F5F5F5',
          dark: '#E0E0E0',
        },
        accent: {
          red: '#8B0000',
          blue: '#00BFFF',
          gold: '#D4AF37',
          bronze: '#CD7F32',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
        code: ['Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'accent': '0 0 10px rgba(0, 191, 255, 0.2)',
        'hover': '0 0 15px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}