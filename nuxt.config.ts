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
    description: 'Développeur web passionné par l\'open source',
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
      routes: ['/', '/api/search.txt'],
      crawlLinks: true,
      failOnError: false,
    },
    routeRules: {
      '/projets/creer-un-nouveau-site-campus': {
        redirect: {
          to: '/articles/creer-un-nouveau-site-campus',
          statusCode: 301,
        },
      },
      '/projets/creer-un-site-vitrine-pour-un-client': {
        redirect: {
          to: '/articles/creer-un-site-vitrine-pour-un-client',
          statusCode: 301,
        },
      },
      '/projets/creer-une-plateforme-de-vote': {
        redirect: {
          to: '/articles/creer-une-plateforme-de-vote',
          statusCode: 301,
        },
      },
      '/projets/jai-construit-une-cuisine-numerique': {
        redirect: {
          to: '/articles/jai-construit-une-cuisine-numerique',
          statusCode: 301,
        },
      },
      '/projets/le-refonte-du-site-du-classement-des-associations': {
        redirect: {
          to: '/articles/le-refonte-du-site-du-classement-des-associations',
          statusCode: 301,
        },
      },
      '/projets/mes-participations-aux-nuits-de-linfo': {
        redirect: {
          to: '/articles/mes-participations-aux-nuits-de-linfo',
          statusCode: 301,
        },
      },
      '/projets/mes-petits-projets': {
        redirect: {
          to: '/articles/mes-petits-projets',
          statusCode: 301,
        },
      },
      '/projets/mes-premiers-modules-diot': {
        redirect: {
          to: '/articles/mes-premiers-modules-diot',
          statusCode: 301,
        },
      },
      '/projets/mon-premier-tutoriel': {
        redirect: {
          to: '/articles/mon-premier-tutoriel',
          statusCode: 301,
        },
      },
      '/projets/mon-premier-vrai-porte-folio': {
        redirect: {
          to: '/articles/mon-premier-vrai-porte-folio',
          statusCode: 301,
        },
      },
      '/projets/un-generateur-de-contenu-pour-le-site-campus': {
        redirect: {
          to: '/articles/un-generateur-de-contenu-pour-le-site-campus',
          statusCode: 301,
        },
      },
      '/projets/un-renouveau-pour-le-bnei': {
        redirect: {
          to: '/articles/un-renouveau-pour-le-bnei',
          statusCode: 301,
        },
      },
    },
  },

  ui: {
    icons: ['heroicons', 'logos', 'simple-icons'],
  },

  devtools: true,
})
