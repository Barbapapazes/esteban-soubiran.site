export default defineAppConfig({
  portfolio: {
    socials: {
      github: {
        name: 'GitHub',
        url: 'https://github.com/Barbapapazes',
        icon: 'mdi:github'
      },
      linkedin: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/esteban25/',
        icon: 'mdi:linkedin'
      },
      twitter: {
        name: 'Twitter',
        url: 'https://twitter.com/soubiran_',
        icon: 'mdi:twitter'
      }
    },
    github: {
      dir: 'content',
      branch: 'main',
      owner: 'barbapapazes/esteban-soubiran.site'
    }
  },
  nuxtIcon: {
    aliases: {
      'raspberry-pi': 'logos:raspberry-pi',
      arduino: 'vscode-icons:file-type-arduino',
      notion: 'simple-icons:notion',
      devto: 'ic:outline-logo-dev',
      html: 'vscode-icons:file-type-html',
      css: 'vscode-icons:file-type-css',
      tailwindcss: 'vscode-icons:file-type-tailwind',
      javascript: 'vscode-icons:file-type-js',
      typescript: 'vscode-icons:file-type-typescript',
      php: 'vscode-icons:file-type-php',
      node: 'vscode-icons:file-type-node',
      vite: 'vscode-icons:file-type-vite',
      vue: 'vscode-icons:file-type-vue',
      nuxt: 'vscode-icons:file-type-nuxt',
      vuetify: 'logos:vuetifyjs',
      express: 'simple-icons:express',
      fastify: 'simple-icons:fastify',
      nestjs: 'logos:nestjs',
      feathersjs: 'logos:feathersjs',
      adonisjs: 'logos:adonisjs-icon',
      laravel: 'logos:laravel',
      rails: 'logos:rails',
      mongo: 'vscode-icons:file-type-mongo',
      wordpress: 'logos:wordpress-icon',
      docker: 'vscode-icons:file-type-docker',
      dialogflow: 'logos:dialogflow',
      heroku: 'logos:heroku-icon',
      netlify: 'vscode-icons:file-type-netlify',
      'digital-ocean': 'logos:digital-ocean',
      nginx: 'vscode-icons:file-type-nginx',
      postgresql: 'logos:postgresql',
      mysql: 'vscode-icons:file-type-mysql'
    }
  }
})
