module.exports = {
  theme: {
    extend: {
      spacing: {
        1: '5px',
        2: '10px',
      },
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
      borderRadius: {
        5: '5px',
        10: '10px',
      },
      fontFamily: {
        text: ['CascadiaCode', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            textAlign: 'justify',
            img: {
              marginTop: '0',
              marginBottom: '0',
            },
            h2: {
              color: theme('colors.dark-blue'),
            },
            h3: {
              color: theme('colors.dark-blue'),
            },
            a: {
              color: theme('colors.light-grey'),
            },
            strong: {
              color: theme('colors.dark-blue'),
            },
          },
        },
        sm: {
          css: {
            img: {
              marginTop: '0',
              marginBottom: '0',
            },
          },
        },
        lg: {
          css: {
            img: {
              marginTop: '0',
              marginBottom: '0',
            },
          },
        },
        xl: {
          css: {
            img: {
              marginTop: '0',
              marginBottom: '0',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
}
