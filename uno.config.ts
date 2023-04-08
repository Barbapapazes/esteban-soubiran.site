import { defineConfig, presetTypography, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
          'text-decoration-line': 'none'
        },
        'p a': {
          'font-weight': '700',
          color: 'rgb(14 165 233)',
          'text-decoration-color': 'rgb(14 165 233 / 0.3)',
          'transition-property': 'all',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 1, 1)',
          'transition-duration': '150ms'
        },
        'p a:hover': {
          'text-decoration-color': '#0ea5e9'
        },
        '.dark p a': {
          color: 'rgb(56 189 248)',
          'text-decoration-color': 'rgb(56 189 248 / 0.3)'
        },
        '.dark p a:hover': {
          'text-decoration-color': '#38bdf8'
        },
        img: {
          'border-radius': '0.5rem'
        }
      }
    })
  ]
})
