// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtseo/module',
    'nuxt-clarity-analytics',
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-payload-analyzer',
  ],

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

  site: {
    url: 'https://esteban-soubiran.site',
    name: 'Estéban Soubiran',
    description: 'Développeur web passionné par l\'open-source',
    language: 'fr-FR',
    separator: '·',
  },

  content: {
    documentDriven: false,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['sql', 'ini'],
    },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  css: [
    '~/assets/css/app.css',
  ],

  nitro: {
    prerender: {
      routes: ['/', '/api/search.json'],
      crawlLinks: true,
      failOnError: false,
    },
  },

  ui: {
    icons: ['heroicons', 'simple-icons'],
  },

  devtools: true,
})
