import { defineConfig, presetTypography, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // TODO: view shortcuts via Devtools from antfu
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
          'text-decoration-line': 'none'
        },
        pre: {
          margin: 0,
          padding: 0
        },
        'p a': {
          color: "theme('colors.sky.500')",
          'text-decoration-line': 'none',
          'transition-property': 'all',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 1, 1)',
          'transition-duration': "theme('duration.150')"
        },
        'p a:hover': {
          color: "theme('colors.sky.600')"
        },
        '.dark p a': {
          color: "theme('colors.sky.400')"
        },
        '.dark p a:hover': {
          color: "theme('colors.sky.300')"
        },
        '.alert p:first-child': {
          'margin-top': 0
        },
        '.alert p:last-child': {
          'margin-bottom': 0
        },
        img: {
          'border-radius': '0.5rem'
        }
      }
    })
  ],
  transformers: [
    transformerDirectives()
  ]
})
