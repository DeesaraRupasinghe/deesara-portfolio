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
        bg: {
          DEFAULT: '#08090D',
          subtle: '#0D0F15',
          secondary: '#10121A',
          elevated: '#171A24',
          card: '#12141F',
          cardHover: '#181C2B',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          strong: 'rgba(255, 255, 255, 0.14)',
          glow: 'rgba(198, 255, 94, 0.25)',
        },
        text: {
          primary: '#F4F5F7',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        lime: {
          DEFAULT: '#C6FF5E',
          hover: '#B5F843',
          dim: 'rgba(198, 255, 94, 0.12)',
          glow: 'rgba(198, 255, 94, 0.3)',
        },
        cyan: {
          accent: '#38BDF8',
          dim: 'rgba(56, 189, 248, 0.12)',
        },
        violet: {
          accent: '#A78BFA',
          dim: 'rgba(167, 139, 250, 0.12)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
