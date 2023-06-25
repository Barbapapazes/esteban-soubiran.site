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
          color: '#0ea5e9',
          'text-decoration-line': 'none',
          'transition-property': 'all',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 1, 1)',
          'transition-duration': '150ms'
        },
        'p a:hover': {
          color: '#0284c7'
        },
        '.dark p a': {
          color: '#38bdf8'
        },
        '.dark p a:hover': {
          color: '#7dd3fc'
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
