const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/components/**/*.{vue,js}',
      './src/layouts/**/*.vue',
      './src/pages/**/*.vue',
      './src/plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {
      pointerEvents: ['disabled', 'group-hover', 'group-focus'],
      opacity: ['group-focus']
    }
  },
  plugins: []
}
