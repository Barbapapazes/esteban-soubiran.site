import typography from 'windicss/plugin/typography'
import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'max-width': 'none',
            p: {
              'margin-top': '1.5rem',
              'margin-bottom': '1.5rem',
            },
          },
        },
        DARK: {
          css: {
            color: colors.zinc[400],
            a: {
              color: colors.sky[500],
              'font-weight': 600,
              'text-decoration': 'underline',
              'text-decoration-color': 'hsla(199, 89%, 48%, 0.3)',
              'transition-property': 'color,text-decoration',
              'transition-duration': '0.15s',
              'transition-timing-function': 'ease-in',
              '&:hover': {
                'text-decoration-color': colors.sky[500],
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography({ dark: true })],
})
