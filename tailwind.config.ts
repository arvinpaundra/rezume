import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    colors: {
      'imperial-red': '#E63946',
      'vivid-red': '#F94747',
      'erie-black': '#18181B',
      'raisin-black': '#27272A',
      onyx: '#27272A',
      black: '#111111',
      manatee: '#A1A1AA',
      cultured: '#FAFAFA',
      white: '#FFFFFF',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '320px',
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
