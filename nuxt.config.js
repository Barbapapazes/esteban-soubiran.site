import getRoutes from './utils/getRoutes'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  generate: {
    fallback: true,
  },
  server: {
    port: 3000,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Estéban SOUBIRAN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Portfolio d'Estéban SOUBIRAN !",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: [
        'scrollbar scrollbar-thumb-light-grey scrollbar-track-deep-blue transition duration-200',
      ],
    },
  },

  loading: {
    color: '#D7D7D7',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/directives', '~/plugins/analytics.client'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/atoms',
    '~/components/atoms/icons',
    '~/components/atoms/logos',
    '~/components/atoms/texts',
    '~/components/organisms',
    '~/components/molecules',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://image.nuxtjs.org
    '@nuxt/image',
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
  ],

  robots: {
    UserAgent: '*',
    Allow: '/',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // https://motion.vueuse.org/
    'nuxt-use-motion',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Sitemap module configuration (https://sitemap.nuxtjs.org)
  sitemap: {
    hostname: process.env.BASE_URL,
    trailingSlash: true,
    routes() {
      return getRoutes()
    },
  },
}
