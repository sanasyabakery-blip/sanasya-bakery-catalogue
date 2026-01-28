import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FBF8F3',
        'chocolate': '#3E2723',
        'caramel': '#D4A574',
        'sage': '#8B9B8E',
        'blush': '#F0E6E1',
      },
      fontFamily: {
        'serif': ['Georgia', 'ui-serif', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
