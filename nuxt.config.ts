// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-schema-org',
    'nuxt-icon'
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
