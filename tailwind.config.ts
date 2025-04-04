import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary' : '#4703a6',
        'secondary' : '#1e1b4b',
        'hack4her-bg' : '#A72A8E',
        'hack4her-font' : '#FF3E7F'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
