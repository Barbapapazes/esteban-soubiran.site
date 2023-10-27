import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
              'text-decoration-line': 'none',
            },
            'pre': {
              'border-radius': 0,
              'background-color': 'transparent',
              'margin': 0,
              'padding': 0,
            },
            'p a': {
              'color': theme('colors.sky.500'),
              'text-decoration-line': 'none',
              'transition-property': 'all',
              'transition-timing-function': theme('transitionTimingFunction.easeIn'),
              'transition-duration': theme('transitionDuration.150'),
            },
            'p a:hover': {
              'color': theme('colors.sky.600'),
              'transition-property': 'all',
              'transition-timing-function': theme('transitionTimingFunction.easeIn'),
              'transition-duration': theme('transitionDuration.150'),
            },
            '.dark p a': {
              color: theme('colors.sky.400'),
            },
            '.dark p a:hover': {
              color: theme('colors.sky.300'),
            },
            'img': {
              'border-radius': '0.5rem',
            },
          },
        },
      }),
    },
  },
}
