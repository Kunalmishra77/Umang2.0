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
          50:  '#f0fbfc',
          100: '#d4f1f5',
          200: '#a8e3ec',
          300: '#6acdd9',
          400: '#35b3c4',
          500: '#1E97B2',  // Brand Teal
          600: '#1a8299',
          700: '#196b7e',
          800: '#1a5667',
          900: '#1b4856',
          950: '#0d2f3a',
        },
        accent: {
          50:  '#fffbeb',
          100: '#fff3c6',
          200: '#ffe588',
          300: '#ffd24a',
          400: '#ffbf20',
          500: '#FFA600',  // Brand Orange
          600: '#e09000',
          700: '#b86d02',
          800: '#955408',
          900: '#7b440b',
          950: '#472300',
        },
        brand: {
          dark:   '#0f172a',
          teal:   '#1E97B2',
          orange: '#FFA600',
        },
      },
      fontFamily: {
        sans:  ['Figtree', 'Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'float':  'float 6s ease-in-out infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
    },
  },
  plugins: [],
}
