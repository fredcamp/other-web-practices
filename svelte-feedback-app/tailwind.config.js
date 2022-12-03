const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      boxShadow: {
        highlight: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          backgroundColor: theme('colors.slate.900'),
          minHeight: theme('minHeight.full'),
        },
      })
    }),
  ],
}
