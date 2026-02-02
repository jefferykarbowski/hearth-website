import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hearth: {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#fad7ad',
          300: '#f6b978',
          400: '#f19342',
          500: '#ed751d',
          600: '#de5b13',
          700: '#b84412',
          800: '#933717',
          900: '#772f16',
          950: '#401509',
        },
      },
    },
  },
  plugins: [],
}
export default config
