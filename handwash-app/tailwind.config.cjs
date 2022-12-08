const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          backgroundColor: theme('colors.zinc.900'),
          minHeight: theme('minHeight.full'),
        },
      })
    }),
  ],
}
