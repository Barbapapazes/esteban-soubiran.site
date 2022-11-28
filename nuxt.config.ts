// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      microsoftClarityID: process.env.MICROSOFT_CLARITY_ID,
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-schema-org',
    'nuxt-icon',
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark',
    },
    watch: {
      ws: {
        port: 4000,
        hostname: 'localhost',
        showURL: false,
      },
    },
  },
  colorMode: {
    classSuffix: '',
  },
  schemaOrg: {
    canonicalHost: 'https://esteban-soubiran.site',
    defaultLanguage: 'fr-FR',
  },
})
