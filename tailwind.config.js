module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--font-geist-sans)', 'sans-serif'],
      serif: ['"Times New Roman"', 'Times', 'serif'],
      mono: ['var(--font-geist-mono)', 'monospace'],
    },
    extend: {
      colors: {
        dark: {
          text: '#CFE4F3', // light blue color
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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundColor: {
        'card': 'var(--card-bg)',
      },
      borderColor: {
        'default': 'var(--border)',
      },
      boxShadow: {
        'dark-glow': '0 0 15px var(--primary)',
      },
    },
  },
  plugins: [],
}