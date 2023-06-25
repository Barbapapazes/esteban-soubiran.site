---
title: Le prochain framework Vue.js
description: Comment écrire le prochain framework et détrôner Nuxt ? C'est ce que nous allons voir !
image: /assets/socials/le-prochain-framework-vue.jpg
cover:
  src: /assets/articles/le-prochain-framework-vue/cover.webp
  alt: Image de couverture sur laquelle on peut lire "Tnux, le prochain framework Vue.js, avec la puissance de Vite et Nitro."
datePublished: 2023-06-17
dateModified: 2023-06-17
layout: article
---

<!-- Harmoniser le nous et le on (et les vous aussi) (sur le nous) -->
<!-- Faire une branch pour le sfc et ajouter le lien vers l'article dans le readme -->
<!-- Harmoniser les titres -->

> TL;DR: Nous n'allons évidemment pas tenter de remplacer [:icon{name="nuxt"} Nuxt](https://nuxt.com) mais plutôt de comprendre son fonctionnement, l'écosystème qu'il a construit et comment nous pourrions en écrire un. À la fin de cette lecture, vous aurez un entre les mains les premières briques de votre propre framework et une bonne compréhension de ce qu'il se passe sous le capot de Nuxt.

Accéder au code source :git-hub-link{repo="barbapapazes/the-next-vue-framework"}

À l'origine de cet article, il y a 2 choses :

- Le talk de [Daniel Roe](https://github.com/danielroe) à l'[Agent Conf](https://youtu.be/hdHLU0qHKhA) qui m'a donné envie de me plonger dans Nitro et Vite pour les comprendre et que je vous recommande chaudement.
- L'envie de répondre à la question : "Comment on fait un framework ?", ce que nous allons faire ensemble.

## Prélude

Avant de commencer, c'est quoi un framework pour :icon{name="vue"} Vue ?

C'est une structure, un cadre vous permettant de construire par dessus ce que vous voulez en vous fournissant des outils pour vous faciliter la vie.

C'est très générique mais la notion important à garder en tête est que nous devons construire un cadre pour l'utilisateur. Autrement dit, l'utilisateur doit se concentrer sur la business logic et nous du reste.

En 2023, nous voulons un framework capable :

- d'être une SPA ([Single Page Application](https://vuejs.org/guide/extras/ways-of-using-vue.html#single-page-application-spa)) et interactive client-side
- de faire du SSR ([Server-Side Rendering](https://vuejs.org/guide/extras/ways-of-using-vue.html#fullstack-ssr))
- de gérer le HMR ([Hot Module Replacement](https://vitejs.dev/guide/features.html#hot-module-replacement))
- d'avoir des APIs
- de pouvoir être pré-rendu et statique
- de pouvoir être déployer en [serverless](https://en.wikipedia.org/wiki/Serverless_computing) et [on-edge](https://en.wikipedia.org/wiki/Edge_computing)
- de supporter nativement :icon{name="typescript"} TypeScript pour le code utilisateur

Oui, c'est une bonne liste mais nous allons voir qu'avec les bons outils, c'est tout à fait possible.

## Notre framework Vue

### Architecture du framework

_L'architecture que je vais vous présenter n'est qu'une parmi d'autres. Il est tout à fait possible de trouver une autre architecture fonctionnelle._

Pour réussir à créer notre framework, nous allons avoir besoin de réfléchir à son architecture, c'est à dire à la manière dont nous allons organiser notre code.

Pour ce faire, nous allons nous inspirer des recommandations de [la documentation de Vue sur l'utilisation du SSR](https://vuejs.org/guide/scaling-up/ssr.html).

La première chose à faire, c'est le rendu côté-serveur. Ensuite, il faut hydrater le client et revoir la structure de notre code pour écrire à la fois du code pour le client et pour le serveur.

Du coup, il nous faut un serveur capable de renvoyer de l'HTML et d'envoyer les fichiers :icon{name="javascript"} JavaScript au client pour la phase d'hydratation. Cet ensemble doit répondre à la fois aux requêtes du client et du serveur au travers du même port.

<!-- TODO: faire un schéma avec une requête qui arrive au serveur, une réponse en html et le html qui demande les fichiers et le serveur qui le renvoie -->

Ainsi, le serveur sera notre fondation, l'élément de base, autour duquel nous viendrons ensuite ajouter d'autres outils.

::alert{type="info"}
Globalement, c'est l'architecture actuelle de Nuxt que je viens de décrire.
::

#### Choisir nos outils

Pour construire le prochain :icon{name="nuxt"}, nous n'allons pas partir de 0. D'une part parce que vous êtes seul sur le projet et d'autre part parce que nous ne ferions que perdre du temps à essayer de réinventer la roue alors que des outils très intelligemment conçus existent déjà.

##### Le serveur

Quels sont les choix qui s'offrent à nous ?

- :icon{name="express"} [Express](https://expressjs.com), déprécié puisque n'est plus maintenu.
- :icon{name="fastify"} [Fastify](https://www.fastify.io), ne peut pas être déployé en serverless ou on-edge.
- [Nitro](https://nitro.unjs.com), performant, moderne et répondant à tous nos besoins.

Il en existe d'autres mais Nitro est le plus adapté à ce que nous voulons faire et c'est normal puisque c'est celui qui est utilisé par :icon{name="nuxt"} Nuxt.

Nitro va nous permettre de répondre aux requêtes, de générer l'HTML et de gérer le SSR. Aussi, il va nous permettre d'avoir la partie APIs.

Enfin, Nitro va nous permettre de 'build' la partie serveur, de pré-générer nos pages statiquement et de nous sortir un unique dossier contenant à la fois les fichiers relatifs au server et au client.

::detail{title="Nitro, c'est quoi exactement ?"}
Nitro, c'est un framework :icon{name="typescript"} TypeScript pour écrire des servers web ultra rapide.

Il fait parti de l'écosystème [Unjs](https://unjs.io) dont le but est de créer des outils :icon{name="javascript"} JavaScript performant, moderne et utilisable avec tous les runtimes.

[En savoir plus sur Nitro](https://nitro.unjs.com)
::

<!-- TODO: écrire un article sur Nitro : Nitro 101, la première prise en main (et trouver un moyen de faire un composant stylé pour rediriger vers l'article) (genre avec une preview et tout en mode card comme dans les articles des journaux) -->

##### Le client

Clairement, il n'y a pas de débat ici. Nous allons utiliser :icon{name="vite"} Vite pour la gestion de notre client. C'est l'outil le plus polyvalent et performant. C'est aussi celui qui est utilisé par :icon{name="nuxt"} Nuxt.

:icon{name="vite"} Vite va nous permettre d'envoyer au client les fichiers :icon{name="javascript"} JavaScript et de gérer le HMR. En plus de cela, il va gérer directement la transpilation des fichiers :icon{name="typescript"} TypeScript et la gestion du :icon{name="css"} CSS.

Enfin, Vite va nous permettre de 'build' notre application pour la production.

::detail{title="Vite, c'est quoi exactement ?"}
Vite, c'est un outil de build pour le développement web. Développé par Evan You, le créateur de :icon{name="vue"} Vue, il est pensé pour être performant et moderne avec un système de plugins riches.

Aujourd'hui, :icon{name="vite"} Vite est utilisé partout, du front-end au back-end et avec d'autres langages que :icon{name="javascript"} JavaScript comme :icon{name="php"} PHP avec :icon{name="laravel"} Laravel.

[En savoir plus sur Vite](https://vitejs.dev)
::

### Initialisation du projet

Maintenant que l'on a vu ce que l'on voulait faire, le fonctionnement le Nitro et celui :icon{name="vite"} Vite, il est temps de construire notre propre framework !

Avant toute chose, commençons par initialiser notre espace de travail.

```bash [bash]
mkdir the-nex-vue-framework
cd the-nex-vue-framework
npm init -y
```

### Rendu côté serveur

_Dans cette partie, nous allons mettre en place Nitro pour qu'il soit en mesure de renvoyer de l'HTML._

Pour utiliser Nitro, il faut l'installer.

```bash [bash]
npm install -D nitropack h3
```

::alert{type="info"}
[h3](https://github.com/unjs/h3) est le serveur HTTP utilisé par [Nitro](https://github.com/unjs/nitro).
::

Ensuite, il nous faut ajouter un `tsconfig.json`:

```json [tsconfig.json]
{
  "extends": "./.nitro/types/tsconfig.json"
}
```

::alert{type="info"}
Nous utilisons le `tsconfig.json` de Nitro pour que notre éditeur de code puisse comprendre le code que nous allons écrire par la suite.
::

Et dans le `package.json`, on peut ajouter les scripts suivant :

```json [package.json]
{
  "scripts": {
    "prepare": "npx nitropack prepare",
    "dev": "npx nitropack dev",
    "build": "npx nitropack build",
    "preview": "node .output/server/index.mjs"
  }
}
```

Enfin, créons un dossier `app` dans lequel nous allons mettre le code de notre framework.

```bash
mkdir app
```

Pour terminer, générons les types de Nitro :

```bash [bash]
npm run prepare
```

::alert{type="info"}
Nitro fonctionne avec un modèle où les fonctions peuvent être auto-importées. Afin que notre éditeur puisse comprendre les fonctions que nous sommes en train d'utiliser, nous avons besoin de générer les types.

[En savoir plus sur l'auto-imports de Nitro](https://nitro.unjs.io/guide/auto-imports)
::

_Voilà_, nous sommes prêt à mettre en place le rendu côté serveur et à jouer avec Nitro.

#### Notre premier contrôleur

<!-- TODO: rediriger vers Nitro 101 histoire de ne pas perdre totalement les nouveaux utilisateurs -->

Pour commencer, créons un fichier `server.ts` dans le dossier `app` qui contiendra un contrôleur pour générer notre page. Pour le moment, nous allons simplement retourner une chaîne de caractère.

```typescript [server.ts]
export default defineEventHandler(() => {
  return 'Hello World'
})
```

Lançons notre serveur avec `npm run dev` et allons sur [http://localhost:3000](http://localhost:3000) pour voir le résultat.

Horreur, ça ne fonctionne pas ! :scream:

```json [Réponse du serveur]
{"url":"/","statusCode":404,"statusMessage":"Cannot find any path matching /.","message":"Cannot find any path matching /."}
```

Mais c'est normal puisque nous n'avons pas dit à Nitro que ce fichier est un point d'entrée pour gérer les requêtes.

Pour cela, nous devons créer un fichier `nitro.config.ts` à la racine de notre projet et y ajouter une configuration lui permettant de trouver notre contrôleur et de l'associer à une route. Avec le paramètre `handlers`, nous pouvons définir une liste de contrôleurs à utiliser pour gérer les requêtes en fonction de la route d'entré.

```typescript [nitro.config.ts]
import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  handlers: [
    {
      route: '/**', // Règle pour associer le contrôleur à une route. Dans notre cas, on veut que toutes les routes soient gérées par notre contrôleur.
      handler: './app/server.ts' // Chemin vers notre contrôleur.
    }
  ]
})
```

Relançons notre serveur et allons sur [http://localhost:3000](http://localhost:3000) pour voir le résultat.

Parfait, ça fonctionne ! :tada:

``` [Réponse du serveur]
Hello World
```

#### Rendu HTML

Maintenant que nous avons un serveur web fonctionnel, nous allons pouvoir lui faire renvoyer de l'HTML. Cet HTML, on souhaite qu'il soit construit par Vue nous permettant ensuite de l'hydrater afin de le rendre interactif.

::detail{title="Pourquoi ne pas renvoyer directement de l'HTML ?"}
Renvoyer directement de l'HTML n'a pas d'intérêt dans la mesure où on souhaite ensuite que le développeur puisse utiliser Vue.

En effet, on pourrait faire :

```typescript [server.ts]
export default defineEventHandler(() => {
  return '<button>Click me</button>'
})
```

Mais le développeur ne pourrait pas utiliser Vue pour rendre ce bouton interactif.
::

Pour commencer, nous allons installer Vue :

```bash [bash]
npm install vue
```

Dans notre contrôleur `server.ts`, nous allons pouvoir créer une application Vue. Ensuite, nous devons la transformer en HTML et c'est l'objectif de la fonction `renderToString` de `@vue/server-renderer` :

```typescript [server.ts]
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'

export default defineEventHandler(async () => {
  // Création de l'application Vue.
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
  })

  // Transformation de l'application Vue en HTML.
  const html = await renderToString(app)

  // Renvoi de l'HTML à l'utilisateur.
  return html
})
```

Allons sur [http://localhost:3000](http://localhost:3000).

```html [Réponse du serveur]
<button>1</button>
```

Magnifique, un bouton s'affiche ! :sparkles: Pour autant, lorsque nous cliquons dessus, rien ne se passe. Ce comportement est tout à fait normal dans la mesure où nous n'avons aucun script côté client pour rendre ce bouton interactif (mais ça va venir).

::alert{type="info"}
Pour en savoir plus, vous pouvez lire la documentation de [VueJS SSR](https://vuejs.org/guide/scaling-up/ssr.html).
::

### Un template HTML

Notre application est bien sympa mais pour que la page rendue soit une vraie page HTML, il manque quelques balises.

En effet, nous aimerions bien avoir un `<!DOCTYPE html>`, un `html` avec un `head` et un `body` pour que notre page soit valide. Dans le même temps, nous avons besoin d'entourer notre application d'une `div` avec un `id` pour que Vue puisse l'hydrater par la suite.

Pour cela, commençons par créer un fichier `index.hml` à la racine de notre projet :

```html [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Next Vue Framework</title>
</head>
<body>
  <main id="root" class="container"><!-- ssr-content --></main>
</body>
</html>
```

::alert{type="info"}
La ligne contenant `<!-- ssr-content -->` va nous permettre d'utiliser un simple `replace` pour injecter le HTML rendu par notre application Vue.

:warning: Il est **très important** de ne pas pas aller à la ligne avant et après `<!-- ssr-content -->` pour éviter d'avoir des espaces dans le HTML final et donc des problèmes d'hydratation.

Afin de palier ce problème, il est possible de ne pas utiliser `<!-- ssr-content -->` mais de remplacer directement tout la balise `main`.
::

Ensuite, nous allons utiliser la [couche de stockage](https://nitro.unjs.io/guide/storage) de Nitro pour récupérer ce template, injecter l'HTML rendu par notre application Vue et renvoyer le tout au client.

C'est dans notre contrôleur `server.ts` que nous allons faire cela. Nous allons commencer par récupérer le template :

```typescript [server.ts]
const template = await useStorage().getItem('root:index.html')
```

Ensuite, nous allons remplacer `<!-- ssr-content -->` par l'HTML rendu par notre application Vue :

```typescript [server.ts]
const render = template.replace('<!-- ssr-content -->', html)
```

Tout ensemble, cela donne :

```typescript [server.ts]
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'

export default defineEventHandler(async () => {
  // Récupération du template.
  const template = await useStorage().getItem('root:index.html')

  // Création de l'application Vue
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
  })

  // Transformation de l'application Vue en HTML
  const html = await renderToString(app)

  // Injection de l'HTML dans le template
  const render = template.replace('<!-- ssr-content -->', html)

  // Si vous n'utilisez pas `<!-- ssr-content -->`, alors vous pouvez directement remplacer la balise main et vous vous assurez d'éviter les problèmes d'espaces lors de l'hydratation.
  // const render = template.replace('<main id="root" class="container"></main>', `<main id="root" class="container">${html}</main>`)

  return render
})
```

Maintenant, allons sur [http://localhost:3000](http://localhost:3000).

```html [Réponse du serveur]
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Next Vue Framework</title>
</head>
<body>
  <main id="root" class="container">
    <button>1</button>
  </main>
</body>
</html>
```

::alert{type="info"}
:warning: L'id `root` est essentiel. Il n'est pas recommandé de le changer pour vous éviter des problèmes par la suite de ce tutoriel.
::

C'est beaucoup mieux ! :rocket:

### Hydratation du rendu HTML

La création de notre première page, c'est clairement la partie la plus simple ! Nous allons maintenant devoir hydrater notre page lorsqu'elle arrive chez le client.

::detail{title="C'est quoi l'hydratation ?"}
L'hydratation fait référence au processus côté client au cours duquel Vue prend en charge le HTML statique envoyé par le serveur et le transforme en DOM dynamique qui peut réagir aux changements de données côté client.

C'est à dire que Vue va créer la même application que celle faite côté serveur en matchant les éléments du DOM et en y attachant des `events listeners` pour que l'application soit interactive.

[Pour en savoir plus sur l'hydratation](https://vuejs.org/guide/scaling-up/ssr.html#client-hydration)
::

Pourquoi c'est compliqué ?

Ça devient compliqué parce que nous allons devoir assembler à la fois Nitro et Vite pour qu'il ne fasse qu'un. En effet, on ne souhaite pas avoir à démarrer ni gérer 2 processus différents au travers d'un unique port.

::detail{title="Pourquoi c'est vraiment compliqué ?"}
La partie qui devient vraiment complexe est le "build" de l'application. Pour autant, si nous faisons bien l'intégration du client, la gestion du "build" va devenir ensuite plus simple. La complexité commence dès maintenant. :sweat_smile:
::

#### Le middleware Vite

Dans un premier temps, nous allons intégrer :icon{name="vite"} Vite à Nitro. Pour ce fait, nous allons utiliser :icon{name="vite"} Vite en tant que middleware de Nitro. C'est à dire que Nitro va recevoir les requêtes pour les passer à Vite qui va les traiter puis renvoyer la réponse à Nitro pour la retourner à l'utilisateur.

Ce fonctionnement, nous ne voulons le faire que lorsque nous sommes en train de développer. En effet, pour la production, nous aurons construit nos sources au préalable et nous n'aurons pas besoin de Vite.

Commençons par installer :icon{name="vite"} Vite :

```bash [bash]
npm install -D vite
```

Tout ce système va passer par le fichier de configuration de Nitro `nitro.config.ts` où nous allons ajouter un `handler` (contrôleur), comme précédemment, mais uniquement en développement :

```typescript [nitro.config.ts]
import { defineNitroConfig } from "nitropack/config"
import { createServer } from 'vite'

export default defineNitroConfig({
  handlers: [
    // ...
  ],
  devHandlers: [
    {
      route: '/__vite',
      handler: defineLazyEventHandler(async () => {
        const devViteServer = await createServer({
          appType: 'custom',
          base: '/__vite',
          server: {
            middlewareMode: true,
          },
        })

        return defineEventHandler(fromNodeMiddleware(devViteServer.middlewares))
      })
    },
  ],
})
```

Ce `devHandler` ne va être utilisé que pour les requêtes commençant par `/__vite`. Ensuite, le contrôleur initialise un serveur :icon{name="vite"} Vite avant de le retourner à Nitro sous forme de middleware. Cela nous permet de n'avoir qu'un seul serveur pour les deux parties et donc un unique port à gérer nous simplifiant grandement la vie.

Lors de la création du serveur :icon{name="vite"}, nous passons différentes options :

- `appType: 'custom'`, indique à Vite de ne pas inclure le middleware HTML. C'est l'option à utiliser lorsque Vite est utilisé pour faire du SSR. [Référence](https://vitejs.dev/config/shared-options.html#apptype)
- `base: '/__vite'`, indique à Vite de ne pas utiliser la racine du serveur mais de se baser sur `/__vite`. [Référence](https://vitejs.dev/config/#base)
- `server: { middlewareMode: true }`, indique à Vite de ne pas utiliser le serveur interne mais de se baser sur le middleware. [Référence](https://vitejs.dev/config/server-options.html#server-middlewaremode)

Pour tester que tout fonctionne, nous allons voir si nous pouvons récupérer le client :icon{name="javascript"} JavaScript que met à disposition :icon{name="vite"} Vite.

Pour cela, utilisions `curl` :

```bash [bash]
curl -i http://localhost:3000/__vite/@vite/client
```

Dans votre console va alors apparaître le code du client ainsi que sa source map ! Génial ! :zap:

::alert{type="info"}
Le client de :icon{name="vite"} Vite permet de gérer la connexion websocket et HTTP pour le HMR. Globalement, il permet de gérer la communication entre le serveur et le client.
::

#### Extraction de l'application

Maintenant que nous avons mis en place :icon{name="vite"} Vite, nous allons devoir faire en sorte que le code de notre application soit envoyé au navigateur afin qu'il puisse hydrater le rendu et le rendre interactif.

Pour cela, un peu de restructuration s'impose afin que le serveur et le client utilise le même code sans que nous ayant à l'écrire deux fois.

Dans le dossier `app`, créons un fichier `app.ts` qui va contenir le code de notre application :icon{name="vue"} encapsulé dans une fonction permettant de simplement générer l'application :

```typescript [app.ts]
import { createSSRApp } from 'vue'

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`,
  })
}
```

Ensuite, nous allons devoir mettre à jour notre fichier `server.ts` afin que l'application qu'il utilise soit celle que nous mettons en place dans notre fichier `app.ts` :

```typescript [server.ts]
import { renderToString } from '@vue/server-renderer'
import { createApp } from './app'

export default defineEventHandler(async () => {
  // Création de l'application Vue via notre fichier `app.ts`.
  const app = createApp()

  // Transformation de l'application en HTML.
  const html = await renderToString(app)

  // Renvoi de l'HTML à l'utilisateur.
  return html
})

```

Enfin, nous allons devoir créer un fichier `client.ts` qui va être envoyé au navigateur afin de rendre l'application interactive :

```typescript [client.ts]
import { createApp } from './app'

const app = createApp()

app.mount('#root')
```

Nous allons aussi devoir légèrement modifier notre fichier `index.html` afin d'importer le fichier `client.ts`. Pour cela, il suffit d'ajouter une balise `script` juste avant la fermeture de la balise `body` :

```html [index.html]
<!-- ... -->
  <script type="module" src="/__vite/app/client"></script>
</body>
</html>
```

::alert{type="info"}
Le chemin `/__vite/app/client` est le chemin que :icon{name="vite"} Vite utilise pour servir le fichier `client.ts`. Nous y retrouvons le préfixe `/__vite` défini dans le fichier `nitro.config.ts` et le chemin `app/client` qui correspond au chemin du fichier `client.ts` par rapport à la racine du projet.
::

Ouvrons notre navigateur et allons sur [`http://localhost:3000`](http://localhost:3000). Nous devrions voir un bouton incrémentant un compteur à chaque clic sauf que ce n'est pas le cas et deux messages d'alerte apparaît dans la console.

Le premier nous indique que nous devons utiliser une autre version de vue :

```
[Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
  at <App>
```

Le second nous indique qu'un problème lors de l'hydratation de l'application a eu lieu :

```
[Vue warn]: Hydration node mismatch:
- Client vnode: Symbol(v-cmt)
- Server rendered DOM: <button>​1​</button>​
  at <App>
```

Ces deux erreurs sont liées et en résolvant la première, nous résoudrons la seconde rendant ainsi notre application interactive.

Pour résoudre la première erreur, nous allons devoir changer l'import de `vue` par `vue/dist/vue.esm-bundler.js`. Sauf que le fichier dans lequel nous devons faire cela est le fichier `app.ts` qui est aussi utilisé par le serveur. Ainsi, en changeant l'import, nous allons corriger le client au détriment du serveur que nous allons casser.

Ainsi, nous pouvons résoudre notre problème en utilisant un alias via :icon{name="vite"} Vite. Cet alias va permettre de changer l'import par un autre dès que :icon{name="vite"} le détectera. Pour cela, nous allons devoir modifier notre fichier `nitro.config.ts` et ajouter l'alias dans la configuration du serveur :icon{name="vite"} Vite :

```typescript [nitro.config.ts]
const devViteServer = await createServer({
  appType: 'custom',
  base: '/__vite',
  server: {
    middlewareMode: true,
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js', // Vite remplacera `vue` par `vue/dist/vue.esm-bundler.js` dès qu'il le détectera dans les imports.
    },
  },
})
```

::alert{type="info"}
Le fichier `vue/dist/vue.esm-bundler.js` est le fichier de vue qui permet d'utiliser le runtime compiler. Dans notre cas, nous en avons besoin parce que nous utilisons directement un template compilé dans le navigateur de l'utilisateur.

En savoir plus sur [le runtime compiler](https://v3.ru.vuejs.org/guide/installation.html#with-a-bundler).

En savoir plus sur [les alias](https://vitejs.dev/config/shared-options.html#resolve-alias).
::

Relançons le navigateur, allons sur [`http://localhost:3000`](http://localhost:3000) et cliquons sur le bouton. Nous devrions voir le compteur incrémenter à chaque clic. :rocket:

#### Hot Module Replacement

Ajoutons au template de notre application un titre :

```typescript [app.ts]
export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `
    <h1>Hello world!</h1>

    <button @click="count++">{{ count }}</button>

    `,
  })
}
```

Sauvegardons, retournons sur notre page et non, rien ne se passe.

Nous sommes obligé de recharger la page pour voir le changement. C'est un peu dommage, non ?

Pour palier à cela, on peut simplement ajouter le client de :icon{name="vite"} Vite à notre page. Pour cela, nous allons devoir ajouter une balise `script` dans notre fichier `index.html`, sous la balise `script` qui charge notre application :

```html [index.html]
<!-- ... -->
  <script type="module" src="/__vite/app/client"></script>
  <script type="module" src="/__vite/@vite/client"></script>
</body>
</html>
```

Retournons sur notre page, rechargeons-la pour charger le client. Maintenant que nous avons établi une connexion websocket entre le serveur et le client, modifions le template de notre application. En enregistrant, vous verrez alors votre page recharger automatiquement. :white_check_mark:

::detail{title="C'est quoi ce client ?"}
Le client de :icon{name="vite"} Vite, c'est un script qui crée une connexion websocket entre le serveur et le navigateur. Cette connexion, nous allons pouvoir l'utiliser pour intercepter les messages transmis par le serveur et ainsi mettre à jour notre application sans recharger la page.
::

C'est un bon début mais ce pourrait être le top, c'est que le changement soit appliqué sans recharger la page. Pour cela, nous allons devoir utiliser le [Hot Module Replacement](https://vitejs.dev/guide/features.html#hot-module-replacement) de :icon{name="vite"} Vite.

Pour ce faire, nous allons devoir ajuster notre fichier `client.ts`.

Dans un premier temps, ajoutons les types du client de :icon{name="vite"} Vite en haut du fichier :

```typescript [client.ts]
/// <reference types="vite/client" />
```

Ces types nous permettrons d'avoir l'auto-complétion sur les fonctions relatives au HMR.

Ensuite, pour réussir à changer le contenu de la page sans la recharger, nous allons utiliser [l'API offerte par :icon{name="vite"} Vite](https://vitejs.dev/guide/api-hmr.html) et intercepter les messages envoyés par le serveur par le biais de la connexion websocket.

Pour cela, nous allons utiliser `import.meta.hot` qui est une variable globale injectée par :icon{name="vite"} Vite. Cette variable nous permet d'intercepter les messages envoyés par le serveur.

```typescript [client.ts]
if (import.meta.hot) {
  import.meta.hot.accept((mod) => { // `mod` est le module modifié renvoyé par le serveur. Dans notre cas, il va s'agit de `client.ts`.
    const app = mod.createApp() // On récupère une nouvelle instance de l'application.
    app.mount('#root') // On monte l'application dans le DOM.
  })
}
```

Afin de pouvoir récupérer une nouvelle instance de notre application à l'aide de `mod.createApp()`, nous devons l'exporter depuis le fichier `client.ts`, fichier reçu par le script de :icon{name="vite"} Vite lorsque nous mettons à jour notre application :

```typescript [client.ts]
// ...
import { createApp } from './app'

export { createApp }

const app = createApp()
// ...
```

Pour voir notre HMR en action, il vous suffit simplement de mettre à jour le template de votre application en ajoutant un peu de texte par exemple ! Et ça fonctionne !

Si on regarde la console, on peut voir quelque warning dont :

```
There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.
```

Pour palier ça, nous devons conserver l'instance de notre application dans le scope global de l'application et dès qu'une mise à jour est reçue, nous serons alors en mesure de démonter l'ancienne instance et de monter une nouvelle instance.

```typescript [client.ts]
/// <reference types="vite/client" />

import type { App } from 'vue'
import { createApp } from './app'

export { createApp }

const app = createApp()

if (!window.$root) // Si aucune application n'est montée dans le DOM, on monte l'application.
  app.mount('#root')

window.$root = window.$root || app // On conserve l'instance de l'application dans le scope global.

if (import.meta.hot) {
  import.meta.hot.accept((mod) => {
    window.$root.unmount() // On démonte l'ancienne instance de l'application.
    const app = mod.createApp() // On récupère une nouvelle instance de l'application.
    window.$root = app // On conserve la nouvelle instance de l'application dans le scope global.
    app.mount('#root') // On monte l'application dans le DOM.
  })
}

declare global {
  interface Window {
    $root: App<Element> // On ajoute quelques types pour nous aider.
  }
}
```

Changeons un peu notre template et _voilà_, notre application est mise à jour sans recharger la page ! :fire:

::alert{type="warning"}
Il est important de noter que la mise en place que nous venons de faire n'est pas très approprié dans le vrai monde. Ce n'est pas une bonne idée de sauvegarder notre application dans l'objet `window`. Dans le cadre de cet article, nous ne développerons pas l'utilisation du HMR. Nous verrons même que nous allons pouvoir déléguer cette partie à un plugin.
::

### Un peu de CSS pour plus de style

Maintenant que nous avons un HMR fonctionne, il est temps d'ajouter un peu de styles pour rendre note page un peu plus jolie.

Pour cela, et pour faire simple, nous allons utiliser [Pico.css](https://picocss.com).

Pour commencer, installons la dépendance :

```bash
npm install @picocss/pico
```

Important la dépendance dans notre fichier `app.ts` :

```typescript [app.ts]
import '@picocss/pico'
// ...
```

Et rien à faire, notre application a maintenant un peu de style et avec le HMR, vous pouvez changer votre template et voir le résultat en temps réel !

### Construction de l'application pour la production

Pour le moment, nous avons la possibilité de développer une application en local sur notre machine. Mais qu'en est-il de la mise en production ?

Commençons par tenter de la build avec Nitro :

```bash
npm run build
```

Et lançons le serveur :

```bash
npm run preview
```

Et là, c'est le drame, une erreur 500 ! :scream:

```
Cannot read properties of null (reading 'replace')
```

Cette erreur était attendu parce que nous n'avons pas :icon{name="vite"} Vite lors du build de l'application. Nous ne l'avons installé que dans le cadre du développement. Pour s'en sortir, nous allons devoir créer un CLI qui va nous permettre de lancer notre application en développement ou de la build pour la production avec la même configuration et de manière programmatique.

Créons un fichier `cli.mjs` dans le dossier `bin` :

```bash
mkdir ./bin && touch ./bin/cli.mjs
```

Ajoutons y cette première structure :

```javascript [cli.mjs]
import { resolve } from 'node:path'
import mri from 'mri'
import { build, copyPublicAssets, createDevServer, createNitro, prepare, prerender, writeTypes } from 'nitropack'

async function main() {
  // Used to parse the arguments passed to the CLI.
  const args = mri(process.argv.slice(2))
  const command = args._[0]
  const rootDir = resolve(args._[1] || '.')

  if (command === 'dev') { // Dev command used to start the application in development mode.
    const nitro = await createNitro({
      rootDir,
      dev: true,
      preset: 'nitro-dev',
    })

    const server = createDevServer(nitro)
    await server.listen({})
    await prepare(nitro)
    await build(nitro)
    return
  }

  if (command === 'build') { // Build command used to build the application for production.
    const nitro = await createNitro({
      rootDir,
      dev: false,
    })
    await prepare(nitro)
    await writeTypes(nitro)

    await copyPublicAssets(nitro)

    await prerender(nitro)
    await build(nitro)
    await nitro.close()
    process.exit(0)
  }

  console.error(
    `Unknown command ${command}! Usage: node ./bin/cli.mjs dev|build`,
  )
  process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
```

Installons quelques dépendances :

```bash
npm install -D mri c12
```

Et mettons à jour nos scripts dans le `package.json` :

```json [package.json]
{
  "scripts": {
    "dev": "node ./bin/cli.mjs dev",
    "build": "node ./bin/cli.mjs build",
    "preview": ""
  }
}
```

::alert{type="info"}
Vous pouvez lancer `npm run dev` et vous verrez que votre application fonctionne toujours. En revanche, `npm run build` ne fonctionne pas encore puisqu'elle ne contient pas :icon{name="vite"} Vite.
::

Ce CLI, nous allons devoir le personnaliser :

- Ajouter notre configuration à la fois pour le développement et la production et la cacher. Nous voulons cacher cette configuration car il s'agit de complexité dont le développeur n'a pas besoin de se soucier.
- Donner la possibilité au développeur d'avoir une configuration personnalisée.
- Utiliser :icon{name="vite"} Vite pour construire nos assets pour la production.

Pour cela, nous allons utiliser [c12](https://github.com/unjs/c12) qui est un outil nous permettant de charger simplement une configuration et de la merger avec une configuration par défaut.

Avant l'execution de nos commandes, nous allons charger la configuration :

```javascript [cli.mjs]
// ...
import { loadConfig } from 'c12'
import { defineEventHandler, defineLazyEventHandler, fromNodeMiddleware } from 'h3'
import { createServer } from 'vite'

async function main() {
  const args = mri(process.argv.slice(2))
  const command = args._[0]
  const rootDir = resolve(args._[1] || '.')

  const { config } = await loadConfig({
    configFile: 'paris.config.ts', // Nom du fichier de configuration pour le développeur.
    defaultConfig: { // Nous allons séparer dans la configuration celle de Vite et de Nitro.
      vite: {}, // Configuration de Vite, vide pour le moment
      nitro: { // Configuration de Nitro dans laquelle nous pouvons passer le contenu du fichier `nitro.config.ts`
        handlers: [
          {
            route: "/**",
            handler: './app/server.ts',
          },
        ],
        devHandlers: [
          {
            route: '/__vite',
            handler: defineLazyEventHandler(async () => {
              const devViteServer = await createServer({
                appType: 'custom',
                base: '/__vite',
                server: {
                  middlewareMode: true,
                },
                resolve: {
                  alias: {
                    vue: 'vue/dist/vue.esm-bundler.js',
                  },
                },
              })

              return defineEventHandler(fromNodeMiddleware(devViteServer.middlewares))
            })
          },
        ],
      },
    }
  })

  if (command === 'dev') {
    // ...
  }

  if (command === 'build') {
    // ...
  }
}

// ...
```

Dans le même temps, nous pouvons **supprimer** le fichier `nitro.config.ts` et créer à la place notre fichier de configuration personnalisé `paris.config.ts` dans lequel nous aurons une partie pour :icon{name="vite"} Vite et une partie pour Nitro :

```typescript [paris.config.ts]
import type { NitroConfig } from 'nitropack'
import type { UserConfig } from 'vite'

interface ParisConfig {
  nitro?: NitroConfig
  vite?: UserConfig
}

export default {} satisfies ParisConfig
```

Dans notre `cli.mjs`, nous pouvons désormais utiliser la configuration lors de la création de Nitro :

```javascript [cli.mjs]
// ...

async function main() {
  // ...

  const { config } = await loadConfig({
    // ...
  })

  if (command === 'dev') {
    const nitro = await createNitro({
      rootDir,
      dev: true,
      preset: 'nitro-dev',
      ...(config.nitro ?? {}), // Nous utilisons la configuration de Nitro
    })

    // ...
  }

  if (command === 'build') {
    const nitro = await createNitro({
      rootDir,
      dev: false,
      ...(config.nitro ?? {}), // Nous utilisons la configuration de Nitro
    })

    // ...
  }

  // ...
}

// ...
```

Maintenant, nous pouvons ajouter la création des assets grâce à :icon{name="vite"} Vite lors du build de notre application :

```javascript [cli.mjs]
import { build as buildVite } from 'vite'

async function main() {
  // ...
  if (command === 'build') {
    // ...

    await writeTypes(nitro)

    await buildVite({
      build: {
        outDir: '.nitro/client',
      },
      ...config.vite ?? {}, // Nous importons notre configuration dans celle de Vite. C'est important pour la suite !
    })


    await copyPublicAssets(nitro)

    // ...
  }
}

// ...
```

Désormais, lors que nous allons vouloir build notre application, nous allons build nos assets front-end avec :icon{name="vite"} Vite et les copier dans le dossier `.nitro/client` dans un premier temps puis construire notre application avec Nitro. D'ailleurs, nous allons nous servir de Nitro pour déplacer nos assets publics générés par :icon{name="vite"} Vite dans le dossier `.nitro/public`. Pour cela, dans la configuration de Nitro, nous allons ajouter :

```javascript [cli.mjs]
// ...

async function main() {
  const { config } = await loadConfig({
    // ...
    defaultConfig: {
      // ...
      nitro: {
        // ...
        publicAssets: [
          {
            dir: '.nitro/client/assets', // Dossier dans lequel se trouve les assets générés par vite
            baseURL: '/assets', // URL de base pour les assets.
            maxAge: 60 * 60 * 24 * 365, // Durée de vie du cache. Ajouté par Nitro lorsqu'il sert les assets.
          },
        ],
      },
    }
  })
}

// ...
```

::alert{type="warning"}
Jusqu'à présent, il ne vous est toujours pas possible de build votre application avec `npm run build`, une erreur va se produire à cause de :icon{name="vite"} Vite.
::

En production, nous n'avons pas besoin du client de :icon{name="vite"}. Au contraire, il ne ferait qu'ajouter du poids à notre application. Ainsi, nous allons directement le supprimer dans notre `index.html`. Dans le même temps, nous n'avons configuré :icon{name="vite"} Vite pour comprendre le chemin `__vite` qu'en développement. En production, :icon{name="vite"} Vite ne va pas le comprendre et nous devons le changer.

```html [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Next Vue Framework</title>
</head>
<body>
  <main id="root" class="container"><!-- ssr-content --></main>
  <script type="module" src="./app/client"></script>
</body>
</html>
```

::alert{type="info"}
Désormais, notre mode de développement via `npm run dev` ne fonctionne plus et le mode de production ne fonctionne pas beaucoup plus mais nous allons y arriver !
::

Juste après que :icon{name="vite"} Vite ait build nos assets, nous allons stocker dans Nitro notre template `index.html` :

```javascript [cli.mjs]
// ...

async function main() {
  // ...

  if (command === 'build') {
    // ...
    await buildVite({
      // ...
    })

    const template = await nitro.storage.getItem('build:client:index.html') // Nous récupérons notre template.
    await nitro.storage.setItem('templates:index.html', template) // Nous le stockons dans Nitro dans un espace nommé `templates`.
    // ...
  }

  // ...
}

// ...
```

Pour permettre à Nitro de bundler notre template au reste de l'application, nous devons lui préciser de faire un snapshot de notre espace de stockage `templates` :

```javascript [cli.mjs]
// ...

async function main() {
  const { config } = await loadConfig({
    // ...
    defaultConfig: {
      // ...
      nitro: {
        // ...
        bundledStorage: ['templates'],
      },
    }
  })
}

// ...
```

Enfin, il nous faut aussi résoudre notre problème d'alias de `vue` auquel nous avons pu nous confronter lors du développement de nos applications. Pour cela, il nous suffit d'ajouter notre alias dans notre configuration par défaut :

```javascript [cli.mjs]
// ...

async function main() {
  const { config } = await loadConfig({
    // ...
    defaultConfig: {
      vite: {
        resolve: {
          alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
          },
        },
      },
      nitro: {
        // ...
      },
    }
  })
}

// ...
```

Et pour finir, nous devons mettre à nous notre `server.ts` pour récupérer notre template via l'espace de stockage `templates` et non plus `root` qui n'existe pas en production :

```typescript [server.ts]
// ...

export default defineEventHandler(async () => {
  const template = await nitro.storage.getItem('templates:index.html') as string // Nous récupérons notre template via l'espace de nom `templates` et non plus `root`.

  // ...
})
```

Et _voilà_ ! Nous avons réussi à build notre application avec :icon{name="vite"} Vite et Nitro ! Nous pouvons désormais build notre application et la lancer :

```bash
npm run build && npm run preview
```

### Réparons le mode de développement

Actuellement, le mode de développement avec `npm run dev` ne fonctionne plus parce que nous essayons de récupérer le fichier `index.html` depuis l'espace de stockage `templates` alors que nous ne l'avons jamais déclaré.

Aussi, nous avons retiré le client de notre `index.html`et changé le chemin de notre point d'entrée, ce dernier ne comportant plus `__vite` et ne pouvons donc plus être redirigé vers le serveur :icon{name="vite"} Vite de développement.

Pour corriger ces deux erreurs, nous allons passer par notre CLI.

Pour changer mettre à jour notre template, nous allons simplement le récupérer, le modifier et le stocker dans notre espace de stockage `templates` :

```javascript [cli.mjs]
// ...

async function main() {
  // ...

  if (command === 'dev') {
    const nitro = await createNitro({
      // ...
    })

    const template = await nitro.storage.getItem('root:index.html') // Nous récupérons notre template.
    await nitro.storage.setItem(
      'templates:index.html', // Nous le stockons dans Nitro dans un espace nommé `templates`.
      template.replace( // Nous remplaçons le chemin du script de production par celui de développement avec le client Vite.
        '<script type="module" src="./app/client"></script>',
        `<script type="module" src="/__vite/app/client"></script>
         <script type="module" src="/__vite/@vite/client"></script>`,
      ),
    )

    // ...
  }

  // ...
}

// ...
```

Ensuite, nous allons devoir ajouter un `devStorage` à notre configuration pour indiquer à Nitro où il peut stocker et récupérer nos fichiers :

```javascript [cli.mjs]
// ...

async function main() {
  const { config } = await loadConfig({
    // ...
    defaultConfig: {
      // ...
      nitro: {
        // ...
        devStorage: {
          templates: {
            driver: 'fs',
            base: '.nitro/templates',
          },
        },
      },
    }
  })
}

// ...
```

Notre mode de développement est désormais réparé ! Nous pouvons désormais lancer notre application avec `npm run dev` et voir que tout fonctionne comme avant ! :zap:

::detail
#title
Pourquoi nous n'avons pas eu besoin du `devStorage` avant ?
#default
Lors de la phase de production, nous insérons une clé dans notre espace de stockage `templates`. Ensuite, nous créons un bundle de cet espace de stockage via le paramètre `bundledStorage` de notre configuration. Ce bundle peut ensuite être utilisé par notre `server.ts`.

En développement, le driver par défaut lors de l'utilisation de `useStorage` est le système de fichiers. Ainsi, lorsque nous ajoutons notre template dans l'espace de stockage `templates`, il est simplement en mémoire mais inaccessible par notre `server.ts` qui va le chercher dans nos fichiers. Ainsi, nous devons créer un `devStorage` afin de stocker la version modifiée de notre template et de la rendre accessible à notre `server.ts`.
::


## Allons plus loin

Maintenant que nous avons une application fonctionnelle, nous allons pouvoir nous amuser un peu avec :icon{name="vue"} Vue !

### Les Single File Component

:icon{name="vue"} Vue permet l'utilisation d'un format de fichier `.vue` qui permet de définir un composant en un seul fichier. Ce format de fichier est appelé [`Single File Component`](https://vuejs.org/guide/scaling-up/sfc.html) (SFC).

Dan le même temps, l'utilisation de :icon{name="vite"} Vite nous donne accès à tout l'écosystème de plugins dont [`@vitejs/plugin-vue`](https://github.com/vitejs/vite-plugin-vue/) que nous allons pouvoir utiliser nous permettant d'utiliser les SFC très simplement !

Tout d'abord, nous allons installer le plugin :

```bash
npm install --save-dev @vitejs/plugin-vue
```

Dans notre configuration, nous allons ajouter le plugin :

```javascript [cli.mjs]
// ...
import vueVite from '@vitejs/plugin-vue'

async function main() {
  // ...

  const { config } = await loadConfig({
    // ...
    defaultConfig: {
      vite: {
        // ...
        plugins: [
          vueVite(),
        ],
      },
      nitro: {
        // ...
      },
    }
  })

  // ...
}

// ...
```

Dans le même temps, nous pouvons mettre à jour notre serveur :icon{name="vite"} Vite de développement pour utiliser le plugin :

```javascript [cli.mjs]
// ...

async function main() {
  // ...

  const { config } = await loadConfig({
    // ...
    defaultConfig: {
      vite: {
        // ...
      },
      nitro: {
        devHandlers: [
          {
            route: '/__vite',
            handler: defineLazyEventHandler(async () => {
              const devViteServer = await createServer({
                plugins: [vueVite()],
                // ...
              })

              // ...
            }),
          },
        ],
      },
    }
  })

  // ...
}

// ...
```

Dans le même temps, nous allons devoir faire que Nitro comprenne la syntaxe des SFC afin de pouvoir rendre l'application côté serveur. Pour cela, nous allons utiliser le plugin [`rollup-plugin-vue`](https://rollup-plugin-vue.vuejs.org/) :

```bash
npm install --save-dev rollup-plugin-vue
```

```javascript [cli.mjs]
// ...
import vueRollup from 'rollup-plugin-vue'

async function main() {
  // ...

  const { config } = await loadConfig({
    // ...
    defaultConfig: {
      vite: {
        // ...
      },
      nitro: {
        rollupConfig: {
          plugins: [
            vueRollup(),
          ],
        },
      },
    }
  })

  // ...
}

// ...
```

Maintenant que les plugins sont installés, créons notre premier composant `App.vue` dans notre dossier `app` :

```vue [App.vue]
<template>
  <div>
    <h1>Hello world with SFC!</h1>
  </div>
</template>
```

Puis utilisons le dans notre `app.ts` :

```typescript [app.ts]
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
  return createSSRApp(App)
}
```

Et ça marche ! :tada:

En ce qui concerne le HMR, nous allons pouvoir simplifier notre `client.ts` parce que c'est le plugin :icon{name="vite"} Vite qui va s'occuper de tout pour nous :

```typescript [client.ts]
import { createApp } from './app'

createApp().mount('#root')
```

Rechargez la page et modifier votre template dans `App.vue` pour voir le HMR fonctionner !

Et dans notre configuration, nous pouvons retirer les alias `vue` puisque nous n'utilisons plus directement de `template` lors de la création du composant.

Pour aller encore plus loin, nous pouvons créer un composant `Counter.vue` :

```vue [Counter.vue]
<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">
    {{ count }}
  </button>
</template>
```

Et utilisons le dans notre `App.vue` :

```vue [App.vue]
<script lang="ts" setup>
import Counter from './Counter.vue'
</script>

<template>
  <div>
    <h1>Hello world with SFC with HMR!</h1>
    <Counter />
  </div>
</template>
```

Recharger votre page et cliquez sur le bouton pour voir le compteur augmenter ! Dans le même temps, vous pouvez modifier le contenu du template, en ajouter un peu de texte sous notre compteur, de `App.vue` et voir la précisions du HMR qui ne détruit pas l'état de votre compteur.

Nous pouvons même construire et prévisualiser notre application :

```bash
npm run build && npm run preview
```

Et vous pouvez [la déployer où vous le souhaitez](https://nitro.unjs.io/deploy) !

::alert{type="warning"}
Si vous rencontrez une erreur sur un driver `unstorage` qui n'est pas trouvé lors de la preview, installez la version `1.6.1`.

```bash
npm install --save-dev unstorage@1.6.1
```

Vous pouvez suivre l'[issue sur GitHub](https://github.com/unjs/unstorage/issues/253)
::

Accéder au code source :git-hub-link{repo="barbapapazes/the-next-vue-framework/tree/sfc" name="barbapapazes/the-next-vue-framework#sfc"}

## Fin et suite

Voilà, cette plongé dans la création d'un méta framework prend fin ! Vous avez pu découvrir comment lier Nitro avec :icon{name="vite"} Vite pour créer votre propre méta framework, comment gérer le HMR et créer votre CLI et les dessous du fonctionnement de :icon{name="nuxt"} Nuxt.

Désormais, vous pouvez vous amuser à créer votre propre méta framework et à le partager avec la communauté et peut être contribuer à :icon{name="nuxt"} Nuxt ou Nitro avec vos découvertes !
