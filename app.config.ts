export default defineAppConfig({
  ui: {
    primary: 'sky',
    gray: 'zinc',
    divider: {
      border: {
        base: 'flex border-zinc-200 dark:border-zinc-800',
      },
    },
    button: {
      base: 'transition ease-in',
      color: {
        white: {
          solid: 'shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 text-zinc-900 dark:text-white bg-white hover:bg-zinc-50 disabled:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800/50 dark:disabled:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        },
      },
    },
    input: {
      placeholder: 'placeholder-zinc-400 dark:placeholder-zinc-500',
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
      },
    },
    select: {
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
      },
    },
    selectMenu: {
      background: 'bg-white dark:bg-zinc-800',
      ring: 'ring-1 ring-zinc-200 dark:ring-zinc-700',
      option: {
        base: 'cursor-pointer',
        color: 'text-zinc-900 dark:text-white',
        active: 'bg-zinc-100 dark:bg-zinc-900',
      },
    },
  },
  portfolio: {
    socials: {
      github: {
        name: 'GitHub',
        url: 'https://github.com/Barbapapazes',
        icon: 'i-simple-icons-github',
      },
      x: {
        name: 'X',
        url: 'https://x.com/soubiran_',
        icon: 'i-simple-icons-x',
      },
      linkedin: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/esteban25/',
        icon: 'i-simple-icons-linkedin',
      },
    },
    github: {
      dir: 'content',
      branch: 'main',
      owner: 'barbapapazes/esteban-soubiran.site',
    },
  },
  nuxtIcon: {
    aliases: {
      'raspberry-pi': 'logos:raspberry-pi',
      'arduino': 'vscode-icons:file-type-arduino',
      'notion': 'simple-icons:notion',
      'devto': 'ic:outline-logo-dev',
      'html': 'vscode-icons:file-type-html',
      'css': 'vscode-icons:file-type-css',
      'tailwindcss': 'vscode-icons:file-type-tailwind',
      'javascript': 'vscode-icons:file-type-js',
      'typescript': 'vscode-icons:file-type-typescript',
      'php': 'vscode-icons:file-type-php',
      'node': 'vscode-icons:file-type-node',
      'vite': 'vscode-icons:file-type-vite',
      'vue': 'vscode-icons:file-type-vue',
      'nuxt': 'vscode-icons:file-type-nuxt',
      'vuetify': 'logos:vuetifyjs',
      'express': 'simple-icons:express',
      'fastify': 'simple-icons:fastify',
      'nestjs': 'logos:nestjs',
      'feathersjs': 'logos:feathersjs',
      'adonisjs': 'logos:adonisjs-icon',
      'laravel': 'logos:laravel',
      'rails': 'logos:rails',
      'mongo': 'vscode-icons:file-type-mongo',
      'wordpress': 'logos:wordpress-icon',
      'docker': 'vscode-icons:file-type-docker',
      'dialogflow': 'logos:dialogflow',
      'heroku': 'logos:heroku-icon',
      'netlify': 'vscode-icons:file-type-netlify',
      'digital-ocean': 'logos:digital-ocean',
      'nginx': 'vscode-icons:file-type-nginx',
      'postgresql': 'logos:postgresql',
      'mysql': 'vscode-icons:file-type-mysql',
    },
  },
})
