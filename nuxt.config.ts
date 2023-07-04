// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  experimental: {
    watcher: 'parcel'
  },

  app: {
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

  // extends: ['nuxt-seo-kit'],
  modules: [
    'nuxt-clarity-analytics',
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap' // I need to update dateModified to modifiedAt et publishedAt
    // add the new seo-experimental
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
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    }
  },

  sitemap: {
    sitemaps: {
      articles: {
        include: [
          '/articles/**'
        ]
      },
      pages: {
        exclude: [
          '/articles/**'
        ]
      }
    }
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/app.css'
  ],

  colorMode: {
    classSuffix: ''
  },

  linkChecker: {
    exclude: [
      '/a-propos',
      '/projets',
      '/articles',
      '/experience'
    ]
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  devtools: true
})
