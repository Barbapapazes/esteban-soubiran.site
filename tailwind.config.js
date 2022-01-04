module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#344163',
        'dark-blue': '#020025',
        'light-grey': '#D7D7D7',
      },
      height: {
        small: '2px',
        medium: '4px',
      },
      fontSize: {
        '8xl': '6rem',
      },
      boxShadow: {
        'inner-small':
          'inset -5px -5px 8px 0 rgb(62, 78, 119), inset 5px 5px 8px 0 rgb(42, 52, 79)',
        medium:
          '-9px -9px 15px 0 rgb(62, 78, 119), 9px 9px 15px 0 rgb(42, 52, 79)',
      },
      fontFamily: {
        text: ['CascadiaCode', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
