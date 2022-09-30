// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-schema-org'],
  content: {
    documentDriven: true,
  },
  schemaOrg: {
    canonicalHost: 'https://esteban-soubiran.site',
  },
})
