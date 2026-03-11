import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F97316',
          dark: '#ea580c',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        hand: ['"Caveat"', 'cursive'],
      },
      keyframes: {
        'float-google': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0px)' },
          '50%': { transform: 'translateX(-50%) translateY(-8px)' },
        },
        'float-tuf': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(-50%)' },
          '50%': { transform: 'translateX(-50%) translateY(calc(-50% - 8px))' },
        },
        'float-amazon': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0px)' },
          '50%': { transform: 'translateX(-50%) translateY(-8px)' },
        },
        'shine-pulse': {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          to: {
            'background-position': '0% 0%',
          },
        },
      },
      animation: {
        'float-google': 'float-google 10s ease-in-out infinite',
        'float-tuf': 'float-tuf 10s ease-in-out 3.3s infinite',
        'float-amazon': 'float-amazon 10s ease-in-out 6.6s infinite',
        'shine-pulse': 'shine-pulse var(--shine-pulse-duration) infinite linear',
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
