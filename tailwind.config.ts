import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "purple": '#A729F5',
      "navyDark": '#313E51',
      'navy': '#3B4D66',
      'navyGray': '#626C7F',
      'whiteMain': '#ABC1E1',
      'pureWhite': '#FFFFFF',
      'green': '#26D782',
      'red': '#EE5454',
    },
  },
  plugins: [],
}
export default config
