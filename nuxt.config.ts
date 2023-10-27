// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  modules: [
    'nuxt-clarity-analytics',
    '@nuxt/ui',
    '@nuxt/content',
    // '@unocss/nuxt', // we need to remove this and to update every styles
    'nuxt-icon',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-payload-analyzer',
  ],

  experimental: {
    inlineSSRStyles: false,
  },

  runtimeConfig: {
    public: {
      trailingSlash: true,
      siteUrl: 'https://esteban-soubiran.site',
      siteName: 'Estéban Soubiran',
      siteDescription:
        'Développeur web et passionné par l\'associatif',
      language: 'fr-FR',
      titleSeparator: '·',
    },
  },

  content: {
    documentDriven: {
      host: 'https://esteban-soubiran.site',
      trailingSlash: true,
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['sql', 'ini'],
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/app.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: '/favicon.ico',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false,
    },
  },

  routeRules: {
    '/api/search': {
      prerender: true,
      // Use text/plain to avoid Nitro render an index.html
      headers: { 'Content-Type': 'text/plain' },
    },
  },

  linkChecker: {
    exclude: [
      '/a-propos',
      '/projets',
      '/articles',
      '/experience',
    ],
  },

  ui: {
    icons: ['heroicons', 'simple-icons'],
  },

  devtools: true,
})
