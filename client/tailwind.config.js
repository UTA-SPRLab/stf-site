/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        confidence: {
          0: '#77b255',
          1: '#93b545',
          2: '#aeb734',
          3: '#c9ba23',
          4: '#e4bd12',
          5: '#ffc001',
          6: '#fca914',
          7: '#f89126',
          8: '#f57a38',
          9: '#f1634a',
          10: '#ed4c5c',
          100: '#ccc'
        }
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      width: {
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '120': '30rem'
      },
      height: {
        '30': '7.5rem',
        '34': '8.5rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        '7.5xl': '84rem',
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
