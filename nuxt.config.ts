// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-schema-org',
    'nuxt-icon'
  ],

  runtimeConfig: {
    public: {
      microsoftClarityID: process.env.MICROSOFT_CLARITY_ID
    }
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark'
    }
  },
  colorMode: {
    classSuffix: ''
  },
  schemaOrg: {
    canonicalHost: 'https://esteban-soubiran.site',
    defaultLanguage: 'fr-FR'
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  }
})
