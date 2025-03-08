module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
            sans: ['var(--font-geist-mono)'],
            mono: ['var(--font-geist-mono)'],
            DEFAULT: ['var(--font-geist-mono)'],
        },
        colors: {
          dark: {
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
            950: '#0a0a0a',
          },
          primary: {
            light: 'rgb(var(--primary-rgb))',
            dark: 'rgb(var(--primary-rgb))',
          },
          accent: {
            light: 'rgb(var(--accent-rgb))',
            dark: 'rgb(var(--accent-rgb))',
          },
        },
        backgroundColor: {
          'card': 'rgb(var(--card-bg-rgb))',
        },
        borderColor: {
          'default': 'rgb(var(--border-rgb))',
        },
        boxShadow: {
          'dark-glow': '0 0 15px rgba(var(--primary-rgb), 0.3)',
        },
      },
    },
    plugins: [],
  }