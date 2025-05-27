// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transformOrigin: {
    'center': 'center',
  },
      colors: {
        dark: '#0B0C10',       // Your main dark background
        base: '#1F2833',
        text: '#C5C6C7',
        accent: '#66FCF1',
        teal: '#45A29E',
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite', // 🔥 added
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // 🔥 added glow animation
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 40px rgba(102, 252, 241, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 80px rgba(102, 252, 241, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
