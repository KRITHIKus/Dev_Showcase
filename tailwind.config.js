/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Rajdhani"', 'sans-serif'],
      },
      colors: {
        green: {
          matrix: '#00ff88',
          dim: '#00cc66',
          dark: '#003322',
          faint: 'rgba(0,255,136,0.07)',
        },
        blue: {
          matrix: '#00cfff',
          dim: '#0099cc',
          dark: '#001833',
        },
        bg: {
          DEFAULT: '#020c08',
          2: '#040f0a',
          card: '#061410',
        },
      },
      animation: {
        'blink': 'blink 0.8s step-end infinite',
        'fadeUp': 'fadeUp 0.7s ease forwards',
        'matrix-rain': 'matrixRain 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
