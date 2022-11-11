// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      microsoftClarityID: process.env.MICROSOFT_CLARITY_ID,
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-schema-org', 'nuxt-icon'],
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
  schemaOrg: {
    canonicalHost: 'https://esteban-soubiran.site',
    defaultLanguage: 'fr-FR',
  },
})
