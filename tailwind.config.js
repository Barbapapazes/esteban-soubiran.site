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
        primary: {
          light: 'hsl(225, 20%, 47%)',
          base: 'hsl(223, 31%, 30%)',
          dark: 'hsl(216, 78%, 13%)',
        },
        'grey-primary': {
          light: 'hsl(224, 8%, 47%)',
          base: 'hsl(223, 14%, 30%)',
          dark: 'hsl(216, 16%, 13%)',
        },
        white: 'hsl(0, 0%, 97%)',
        black: 'hsl(227, 100%, 5%)',
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
