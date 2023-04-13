// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  modules: [
    'nuxt-clarity-analytics',
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-schema-org',
    'nuxt-icon',
    '@nuxthq/studio'
  ],

  runtimeConfig: {
    public: {
      trailingSlash: true,
      siteUrl: 'https://esteban-soubiran.site',
      siteName: 'Estéban Soubiran',
      siteDescription:
        "Développeur web et passionné par l'associatif",
      language: 'fr-FR',
      titleSeparator: '·'
    }
  },

  content: {
    documentDriven: {
      host: 'https://esteban-soubiran.site',
      trailingSlash: true
    },
    highlight: {
      theme: 'github-dark'
    }
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/app.css'
  ],

  colorMode: {
    classSuffix: ''
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: '/favicon.ico'
        }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  }
})
