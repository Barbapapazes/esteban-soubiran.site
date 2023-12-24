---
title: Nitro 101 - Première prise en main
description: Découvrez Nitro, le framework TypeScript pour écrire des serveurs web ultra rapide.
image: /assets/socials/nitro-101-premiere-prise-en-main.jpg
cover:
  src: /assets/articles/nitro-101-premiere-prise-en-main/cover.webp
  alt: Image d'illustration où on y voit le logo de Nitro ainsi qu'un texte indiquant 'Nitro, pour créer des serveurs qui fonctionnent partout'
resources:
  - name: Code Source du Projet
    url: https://github.com/barbapapazes/nitro-101-first-hand
    icon: i-simple-icons-github
  - name: Code Source de Nitro
    url: https://github.com/unjs/nitro
    icon: i-simple-icons-github
datePublished: 2023-06-24
dateModified: 2023-06-24
---

## Introduction

[Nitro](https://nitro.unjs.io) (Nitropack sur npm), c'est le serveur web écrit en :icon{name="typescript"} TypeScript qui propulse :icon{name="nuxt"} Nuxt. Il a été créé par les équipes de :icon{name="nuxt"} Nuxt et ouvert à la communauté.

Nitro, c'est framework web back-end qui permet :

- Hot Module Replacement (HMR)
- Zéro configuration
- Déployable n'importe où
- Portable et léger
- Routage avec le système de fichier
- Chargement différé par défaut pour un démarrage ultra rapide
- Plugins
- Middlewares
- TypeScript

Ainsi, Nitro est complètement agnostique et peut être utilisé seul ou dans votre prochain projet. Avec Nitro, nous pourrons créer des serveurs web pour des APIs, rendre de l'HTML ou bâtir le prochain framework comme peut l'être [analog](https://analogjs.org/) !

Retrouver le code source de cet article :git-hub-link{repo="barbapapazes/nitro-101-first-hand"}

:another-article{name="le-prochain-framework-vue"}

### UnJS, c'est Quoi ?

[UnJS](https://unjs.io), c'est un écosystème d'outils JavaScript. L'objectif est de fournir des outils qui ne font qu'une seule chose mais qui la font très bien et qui peuvent être combinés entre eux pour créer des outils plus complexes.

UnJS suit [la philosophie UNIX](http://www.catb.org/~esr/writings/taoup/html/ch01s06.html) : _"Faites une chose et faites le bien"_. Ainsi, la plupart des outils UnJS sont des outils avec très peu de fonctionnalités mais dont la force réside dans la modularité avec d'autres outils. À l'origine du projet, il y a [Pooya "Pi0" Parsa](https://github.com/pi0) développeur chez [NuxtLabs](https://github.com/nuxtlabs) et leader de :icon{name="nuxt"} [Nuxt] des premiers commits à son lancement officiel !

Chacun des projets est maintenu par son auteur et des mainteneurs désignés.

Pour en savoir plus, nous pouvons [lire leur gouvernance](https://github.com/unjs/governance).

## Prise en Main

Pour commencer, initialisons un projet en créant un nouveau dossier :

```bash
mkdir nitro-101
cd nitro-101
npm init -y
```

Ensuite, installons Nitro et [H3](https://github.com/unjs/h3) :

```bash
npm i -D nitropack h3
```

::alert{type="info"}
H3 est le serveur web bas niveau utilisé par Nitro. Il est aussi créé par les équipes de :icon{name="nuxt"} Nuxt. Nitro vient par dessous en ajoutant son lot de fonctionnalités, tant pour le développement que pour la production.
::

Nous pouvons ajouter quelques scripts dans notre `package.json` :

```json [package.json]
{
  "scripts": {
    "prepare": "npx nitropack prepare", // Génère les types pour TypeScript
    "dev": "npx nitropack dev", // Lance le serveur en mode développement
    "build": "npx nitropack build", // Compile le serveur pour la production
    "preview": "node .output/server/index.mjs" // Lance le serveur en mode production
  }
}
```

Dernière étape pour nous faciliter la vie et avoir de l'auto-complétion, nous allons créer un fichier `tsconfig.json` à la racine du projet :

```json [tsconfig.json]
{
  "extends": "./.nitro/types/tsconfig.json"
}
```

Parfait, nous sommes prêts à démarrer. Sans plus attendre, lançons Nitro :

```bash
npm run dev
```

::alert{type="info"}
Grâce au HMR, nous n'aurons pas besoin de relancer Nitro sauf lorsque nous créerons un nouveau dossier comme `routes`, `api` ou `middleware` où nous aurons besoin de relancer Nitro. Il s'agit de dossiers qui sont observés par Nitro.
::

## Nos Premières Routes

Pour créer notre première route, il nous faut créer un dossier `routes` à la racine du projet et y ajouter un fichier `index.ts` :

```ts [index.ts]
export default defineEventHandler(() => {
  return 'Hello Nitro!'
})
```

::alert{type="info"}
Nitro utilise le système de fichier pour créer les routes. Ainsi, le fichier `index.ts` sera accessible à l'URL `/`.

Si nous souhaitons créer une route `/hello`, il nous suffit de créer un fichier `hello.ts` dans le dossier `routes`.
::

Comme nous venons de créer un nouveau dossier à observer par Nitro, nous devons relancer Nitro avec `npm run dev`. Ensuite, observons le résultat avec `curl` :

```bash
curl -i http://localhost:3000
```

::alert{type="info"}
Tout au long de cet article, nous utiliserons `curl` pour tester nos routes et ainsi pouvoir observer simplement et rapidement le résultat, les headers et le status code.
::

### Les Params et les Query

Pour jouer avec les params, nous devons créer une nouvelle route. En utilisant les crochets, nous pouvons définir un paramètre. Ainsi, le fichier `routes/[name].ts` sera accessible à l'URL `/hello` ou `/world` et le paramètre `name` sera disponible dans le handler :

```ts [[name].ts]
export default defineEventHandler((event) => {
  const { name } = getRouterParams(event)

  return `Hello ${name}!`
})
```

::alert{type="info"}
Nitro fonctionne avec des composables. Il s'agit de petites fonctions, qui ne font qu'une chose, mais qui le font bien et qui lorsqu'elles sont combinées, permettent de créer de grandes choses.

Les fonctions de Nitro et de h3 sont automatiquement importées et disponibles dans votre projet.

[En savoir plus](https://nitro.unjs.io/guide/auto-imports)
[Pour découvrir tous les composables d'h3](https://www.jsdocs.io/package/h3#package-index-functions)
::

Pour tester notre nouvelle route :

```bash
curl -i http://localhost:3000/hello
```

```bash
curl -i http://localhost:3000/world
```

Pour jouer avec les query, nous pouvons créer une nouvelle route `search.ts`. Comme avec la route précédente, nous allons utiliser un composable pour sortir rapidement la query de la requête :

```ts [search.ts]
export default defineEventHandler((event) => {
  const { q } = getQuery(event)

  return `Search: ${q}`
})
```

::alert{type="info"}
Ce qu'il est important de comprendre avec ces 2 exemples, c'est que Nitro nous permet de sortir rapidement le contenu de la requête via des composables, sans même savoir ce que contient l'`event`.

Ainsi, nous savons déjà comment sortir le `body`, un `header` ou `cookie` de la requête ! Pratique !
::

Pour tester notre nouvelle route :

```bash
curl -i http://localhost:3000/search?q=nitro
```

Le serveur nous renvoie bien `Search: nitro`. :zap:

### Le Body

Pour récupérer le body, nous pouvons utiliser la fonction `readBody`. Pour cela, créons une nouvelle route `body.ts` :

```ts [body.ts]
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  return body
})
```

Ensuite, il est possible d'utiliser `curl` pour envoyer un body :

```bash
curl -i -X POST -H "Content-Type: application/json" http://localhost:3000/body -d '{"hello": "nitro"}'
```

::alert{type="info"}
Il est très important de spécifier dans les headers le `Content-Type` du body. En effet, cela permet à Nitro de savoir comment parser le body. Autrement, il le considérerait comme une chaîne de caractères.
::

### Les Headers

Avec Nitro, il est à la fois possible de récupérer les headers de la requête et d'en ajouter. Pour cela, nous allons créer une nouvelle route `headers.ts` :

```ts [headers.ts]
export default defineEventHandler((event) => {
  const headers = getHeaders(event)

  setResponseHeader(event, 'X-Hello', 'Nitro')

  return headers
})
```

Pour tester notre nouvelle route :

```bash
curl -i http://localhost:3000/headers
```

### Les Cookies

Pour récupérer les cookies, nous pouvons utiliser la fonction `getCookies`. Pour cela, créons une nouvelle route `cookies.ts` :

```ts [cookies.ts]
export default defineEventHandler((event) => {
  const cookie = getCookie(event, 'hello')

  return cookie
})
```

Pour tester notre nouvelle route :

```bash
curl -i http://localhost:3000/cookies -H "Cookie: hello=nitro"
```

Ensuite, nous pouvons aussi ajouter des cookies à la réponse :

```ts [cookies.ts]
export default defineEventHandler((event) => {
  const cookie = getCookie(event, 'hello')

  setCookie(event, 'from', 'nitro', {
    secure: true,
    // Il est possible de définir toute les options relatives aux cookies
  })

  return cookie
})
```

### Les Sessions

Dans la suite des cookies, Nitro permet facilement la création de sessions. Par exemple, il est possible de créer une nouvelle session avec `useSession`. Pour cela, nous pouvons créer une nouvelle route `sessions.ts` :

```ts [sessions.ts]
export default defineEventHandler((event) => {
  const sessions = useSession(event, {
    name: 'nitro-101',
    password: '4554c7e0-0b1a-4b0a-9c0a-8b0b0b0b0b0b',
  })

  return sessions
})
```

Pour gérer les sessions, il existe plusieurs fonctions :

- `getSession` : récupère la session courante
- `updateSession` : met à jour la session courante
- `clearSession` : supprime la session courante

::alert{type="info"}
Nous n'irons pas plus loin dans les explications sur les sessions parce que l'idée de Nitro et h3 est de nous fournir des petites fonctions que nous pouvons assembler pour construire un plus grand système et la gestion des sessions pourrait faire l'objet d'un article complet.
::

## Les Middlewares

Avec Nitro, il est possible de créer des middlewares pour gérer les requêtes avant qu'elles arrivent au contrôleur. Pour cela, il nous faut créer un dossier `middleware` à la racine du projet.

::alert{type="info"}
Pour que Nitro prenne en compte les middlewares, il faut redémarrer le serveur.

⚠️ `middleware`, le nom du dossier, ne prend pas de `S` à la fin.
::

Les middlewares sont exécutés dans l'ordre dans lequel ils sont définis dans le dossier. Par exemple, si nous créons un fichier `middleware/log.ts` et `middleware/auth.ts`, le middleware `auth.ts` sera le premier exécuté. Pour autant, il est possible de préfixer ses middlewares pour changer l'ordre d’exécution.

Comme pour les routes, un middleware va utiliser la fonction `defineEventHandler`. En revanche, elle ne doit jamais rien retourner au risque de clore la requête.

```ts [log.ts]
export default defineEventHandler((event) => {
  console.log('log', event.node.req.url)
})
```

```ts [auth.ts]
export default defineEventHandler((event) => {
  event.context.user = 'nitro'
})
```

::alert{type="info"}
Pour en savoir plus sur les middlewares, nous pouvons [consulter cette PR](https://github.com/unjs/nitro/pull/1307)
::

## Le Stockage

Nitro donne accès à une couche de stockage qui abstrait le système de fichier ou une base de données. Pour y accéder, nous pouvons utiliser la fonction `useStorage`. Pour cela, créons une nouvelle route `storage.ts` et retournons le `package.json` de notre projet :

```ts [storage.ts]
export default defineEventHandler(async () => {
  const file = await useStorage().getItem('root:package.json')

  return file
})
```

Par défaut, Nitro monte un système de fichier de l'ensemble du projet nous permettant d'y accéder facilement.

::alert{type="info"}
Pour en savoir plus sur la couche de stockage, nous pouvons consulter [la documentation de Nitro](https://nitro.unjs.io/guide/storage) et [la documentation d'unstorage](https://unstorage.js.org/guide).
::

Dans le même temps, il est possible de configurer notre stockage via les paramètres de Nitro.

- Configuration du stockage
- Configuration d'un stockage pour le développement
- Création d'un bundle à partir d'un stockage

## Le Pré-Rendu

Le pré-rendu permet de construire l'application au build time. Cela permet d'avoir des fichiers statiques facile et rapide à servir. C'est pratique pour héberger son site sur un CDN ou pour améliorer le SEO de son site en améliorant le temps de réponse.

Pour activer le pré-rendu, il est possible de le faire via les paramètres de Nitro. Pour cela, commençons par créer un fichier `nitro.config.ts` à la racine du projet dans lequel nous allons indiquer vouloir pré-rendre la route `/storage` :

```ts [nitro.config.ts]
export default defineNitroConfig({
  prerender: {
    routes: ['/storage'],
  },
})
```

Ensuite, nous pouvons construire notre application avec `npm run build`.

En inspectant le résultat, nous pouvons trouver un fichier nommé `storage` dans `.output/public`. Il contient le résultat de la route `/storage`. Ainsi, lorsqu'un utilisateur viendra sur cette route, le serveur pourra envoyer directement le fichier statique sans avoir à lire le système de fichier.

::alert{type="info"}
Pour en savoir plus sur le pré-rendu, nous pouvons consulter [la documentation de Nitro](https://nitro.unjs.io/config#prerender).
::

## Connexion à une API

Dans ses contrôleurs, Nitro permet de se connecter à une API et nous donne accès à un objet `$fetch` global. Pour l'utiliser, nous pouvons créer un nouveau fichier `api.ts` :

```ts [api.ts]
export default defineEventHandler(async () => {
  const res = await $fetch('/storage', { method: 'GET' })

  return res
})
```

::alert{type="info"}
`$fetch` est une instance de [ofetch](https://github.com/unjs/ofetch).
::

Ensuite, nous pouvons tester notre nouvelle route :

```bash
curl -i http://localhost:3000/api
```

Avec cette route, nous nous attendons au même résultat que la route `/storage`. Il est possible d'appeler n'importe quelle API, interne ou externe, avec `$fetch`.

## Mise en Production

Rien de plus simple dans cette partie ! En effet, Nitro est compatible avec énormément de providers et est en mesure de les détecter depuis la CI. Autrement dit, nous n'avons rien à faire, si ce n'est utiliser la CI du provider chez qui nous allons déployer notre site. Aussi, nous n'avons rien à modifier dans notre code. Nitro est compatible par défaut avec tous ces providers et même on-edge.

::alert{type="info"}
Pour en savoir plus sur les [providers disponibles](https://nitro.unjs.io/deploy).
::

Autrement, il est tout à faire possible de déployer en local, sur notre machine.

```bash
npm run build && npm run preview
```

## Conclusion

_Voilà_, nous avons maintenant les bases pour utiliser Nitro et commencer à créer tout ce qui nous passe par la tête !
