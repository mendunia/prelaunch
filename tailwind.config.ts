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
      colors: {
        'grey-medium' : "#7A7A7A",
        'merah-inti' : "#900C0C",
        'dark-blue' : "#05191D",
        'black' : "#231F20",
        "dark-grey": "#414042",
        "light-grey": "#BDBDBD",
        "very-light-grey": "#F7F7F7",
      }
    },
  },
  plugins: [],
}
export default config
