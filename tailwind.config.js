/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'super-king-gold': '#FFD700',
        'super-king-dark-gold': '#B8860B',
        'super-king-blue': '#003366',
        'super-king-dark-blue': '#002244',
        'super-king-black': '#1a1a1a',
        'super-king-grey': '#2c2c2c',
        'super-king-light-grey': '#d1d5db',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      // === एनिमेशन यहाँ से शुरू होते हैं ===
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpFade: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: { // मोबाइल मेनू के लिए
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'slide-up-fade': 'slideUpFade 1.2s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.3s ease-out forwards', // मोबाइल मेनू
      },
      // === एनिमेशन यहाँ खत्म होते हैं ===
    },
  },
  plugins: [],
}