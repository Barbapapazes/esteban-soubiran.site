import { defineConfig, presetIcons, presetTypography, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: [
    {
      'text-content': 'text-zinc-800 dark:text-zinc-100',
      'text-reduced': 'text-zinc-500 dark:text-zinc-400',
      'text-primary': 'text-sky-500 dark:text-sky-400',

      'border-base': 'ring-1 ring-zinc-900/5 dark:ring-white/10',
      'border-primary': 'border-sky-500 dark:border-sky-400',

      'shadow-base': 'shadow-lg shadow-zinc-800/5',

      'transition-base': 'transition ease-in',

      'bg-blur': ' backdrop-blur bg-white/90 dark:bg-zinc-800/90',
    },
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include
        'app.config.ts',
      ],
    },
    filesystem: [
      '.nuxt/content-cache/**/*',
    ],
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography({
      cssExtend: {
        'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
          'text-decoration-line': 'none',
        },
        'pre': {
          margin: 0,
          padding: 0,
        },
        'p a': {
          'color': '#0ea5e9',
          'text-decoration-line': 'none',
          'transition-property': 'all',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 1, 1)',
          'transition-duration': '150ms',
        },
        'p a:hover': {
          color: '#0284c7',
        },
        '.dark p a': {
          color: '#38bdf8',
        },
        '.dark p a:hover': {
          color: '#7dd3fc',
        },
        '.alert *:first-child': {
          'margin-top': 0,
        },
        '.alert *:last-child': {
          'margin-bottom': 0,
        },
        'img': {
          'border-radius': '0.5rem',
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
