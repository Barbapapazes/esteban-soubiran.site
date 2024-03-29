---
title: Construire une recherche pour Nuxt Content
description: Améliorer l'expérience utilisateur et l'accessibilité de votre site Nuxt Content avec une recherche.
image: /assets/socials/construire-une-recherche-pour-nuxt-content.jpg
cover:
  src: /assets/articles/construire-une-recherche-pour-nuxt-content/cover.webp
  alt: Image d'illustration de l'article Construire une recherche pour Nuxt Content
resources:
  - name: Code Source du Projet
    url: https://github.com/barbapapazes/alpine-with-search
    icon: i-simple-icons-github
  - name: Nuxt Content
    url: https://content.nuxt.com
    icon: i-simple-icons-nuxtdotjs
  - name: Nuxt Studio
    url: https://nuxt.studio
    icon: i-simple-icons-nuxtdotjs
datePublished: 2023-10-17
dateModified: 2023-10-17
---

Avec l'arrivée de [Nuxt Studio](https://nuxt.studio), il n'a jamais été aussi simple de créer, utiliser et alimenter un site web comme un portfolio, un blog ou une documentation. Pour autant, ni Nuxt Content ni les différents templates proposés ne proposent de barre de recherche. Nous allons donc pallier à ce manque ensemble.

Dans cet article, nous allons voir comment construire une barre de recherche pour un site qui utilise Nuxt Content. Pour l'exemple et rendre les explications concrètes, nous allons faire cela sur le [template Alpine](https://github.com/nuxt-themes/alpine) !

Une barre de recherche est un élément très apprécié des utilisateurs. En effet, elle permet de passer rapidement d'un contenu à un autre sans avoir à naviguer dans les menus. Ainsi, c'est un élément très important pour l'expérience utilisateur et s'assurer qu'ils trouvent rapidement ce qu'ils cherchent.

::alert{type="info"}
[Une PR est ouverte](https://github.com/nuxt/content/pull/2146) pour ajouter cette fonctionnalité directement au cœur de Nuxt Content.
::

## L'Idée Générale

Avant même de s'attaquer à créer une barre de recherche, comprenons la logique de ce que nous allons faire. Il est important de comprendre le fonctionnement pour pouvoir ensuite l'adapter aux besoins du site.

La recherche que nous allons construire est complètement côté client, c'est-à-dire qu'il n'y a aucune requête à un serveur ou à une base de données. C'est un système très pratique lorsque le site est statique, que les données sont des fichiers markdown et qu'il n'y a pas trop de contenus.

::alert{type="info"}
Il est possible d'utiliser des outils comme [Algolia](https://www.algolia.com) pour construire une recherche côté serveur. Cependant, cela demande une configuration et un coût supplémentaire, notamment si vous avez beaucoup de contenu ou de sites à gérer.
::

### Les Outils à notre Disposition

Pour réaliser cette recherche, nous avons 2 outils à notre disposition :

- [MiniSearch](https://lucaong.github.io/minisearch/)
- [Fuse.js](https://www.fusejs.io/)

La différence entre les 2 est très minime. Pour notre cas, nous allons utiliser MiniSearch parce que je le trouve plus simple à utiliser, à configurer et à personnaliser.

::alert{type="info"}
Il est tout à fait possible de faire la même chose que nous allons faire avec Fuse.js.
::

## Concrètement avec Nuxt et Content

Pour pouvoir réaliser une recherche, même côté-client, il est important d'avoir à disposition des données. Dans notre cas, il s'agit de l'ensemble du contenu de Nuxt Content.

Ensuite, il faut fournir ces données à MiniSearch pour qu'il puisse effectuer la recherche à partir du mot clé saisi par l'utilisateur. Pour cela, et parce que nous générons notre site, nous allons créer un fichier JSON contenant l'ensemble des données de Nuxt Content lors de la génération du site. Par la suite, nous allons pouvoir récupérer ce fichier JSON et l'utiliser pour construire notre recherche.

Pour créer notre fichier JSON, nous allons utiliser la partie serveur de Nuxt en créant un nouveau point d'accès à notre site. Avec ce dernier, nous allons pouvoir récupérer l'ensemble des données de Nuxt Content et les transformer en JSON. Grâce au pré-rendu, nous allons générer ce fichier JSON à la construction du site. Cela nous permet de conserver un site statique et de ne pas avoir à le générer à chaque fois que l'utilisateur effectue une recherche.

::alert{type="info"}
Pour en savoir plus sur [la partie serveur de Nuxt](https://nuxt.com/docs/getting-started/server).
::

Avant de commencer à créer notre recherche, nous allons devoir créer un nouveau projet en partant du template d'Alpine :

```bash
npx nuxi init -t themes/alpine alpine-with-search
```

## Créer le Fichier JSON

Dans un premier temps, nous allons créer le fichier JSON qui contiendra l'ensemble des données de Nuxt Content. Pour cela, nous allons créer un nouveau point d'accès à notre site. Nous verrons comment optimiser les performances en pré-rendant ce fichier JSON et en l'indexant.

### Créer le Point d'Accès

Avant tout, créons notre point d'accès `server/api/search.ts` :

```ts [server/api/search.ts]
export default defineEventHandler(async (event) => {
  return 'Hello search'
})
```

Nous pouvons tester notre point d'accès en lançant notre serveur de développement et en allant sur `http://localhost:3000/api/search`.

### Parser le Contenu de Nuxt Content

Ensuite, nous devons récupérer l'ensemble du contenu de Nuxt Content. C'est super simple parce que Nuxt Content fonctionne avec le côté serveur de Nuxt et qu'une fonction est à disposition pour récupérer le contenu.

```ts [server/api/search.ts]
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const files = await serverQueryContent()
  return files
})
```

En actualisant notre navigateur, nous pouvons observer l'ensemble du contenu de Nuxt Content. Parfait !

::detail{title="À quoi ressemble un fichier de Nuxt Content ?"}

Voici à quoi ressemble la structure d'un fichier de Nuxt Content après avoir été parsé :

```json
{
  "parsed": {
    "_path": "/...",
    "_dir": "articles",
    "_draft": false,
    "_partial": false,
    "_locale": "",
    "_empty": false,
    "title": "...",
    "description": "...",
    "image": "...",
    "cover": {
      "src": "...",
      "alt": "..."
    },
    "datePublished": "...",
    "dateModified": "...",
    "layout": "article",
    "body": {
      "type": "root",
      "children": [
        {
          "type": "element",
          "tag": "h2",
          "props": {
            "id": "introduction"
          },
          "children": [
            {
              "type": "text",
              "value": "Introduction"
            }
          ]
        },
        {
          "type": "element",
          "tag": "p", // Une balise <p> avec une <a> à l'intérieur contenant le texte "Nitro"
          "props": {},
          "children": [
            {
              "type": "element",
              "tag": "a", // Une balise <a> avec différents attributs dans props
              "props": {
                "href": "...",
                "rel": [
                  "nofollow"
                ]
              },
              "children": [
                {
                  "type": "text",
                  "value": "Nitro"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

La partie intéressante se trouve dans la clé `body`. C'est ici que se trouve le contenu du fichier markdown. Nous remarquons qu'il s'agit d'un AST (Abstract Syntax Tree) qui est une représentation abstraite du contenu. C'est un format très pratique pour manipuler le contenu et le transformer. Il est intéressant de noter le côté récursif de la structure permettant de la parcourir simplement.
::

Désormais, nous allons devoir travailler ce contenu un peu pour ne garder que les fichiers markdown et retirer ceux en cours de rédaction ou vides.

```ts [server/api/search.ts]
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const files = await serverQueryContent()
  const markdownFiles = files.filter(file => file._extension === 'md' && !file?._draft && !file?.empty)
  return markdownFiles
})
```

Ensuite, nous allons devoir extraire et formater le contenu de chaque fichier markdown vers une nouvelle structure de données. Cette structure permettra à la fois d'avoir du contenu pour alimenter la recherche et d'avoir les liens pour rediriger l'utilisateur. L'idée, pour l'ensemble des fichiers, est la suivante :

- Découpage du contenu en sections (à chaque titre)
- Création de l'URL, `/<path>#<section_id>`, pour chaque section permettant d'associer un lien à chaque section et donc d'utiliser `NuxtLink`
- Extraction du contenu de chaque section pour ne garder que le texte intéressant. Par exemple, il n'est pas pertinent de conserver le contenu des balises `code` ou `style`.

Ainsi, notre structure de données ressemblera à cela :

```ts
interface Section {
  id: string
  title: string
  content: string
}
```

#### Traitement du Body

Dans un premier temps, traitons le `body` dans un fichier `server/utils/search.ts` :

```ts [server/utils/search.ts]
import type { MarkdownNode } from '@nuxt/content/dist/runtime/types'

const UNWANTED_TAGS = ['code', 'style']

function extractTextFromAst(node: MarkdownNode) {
  let text = ''

  // Get text from markdown AST
  if (node.type === 'text')
    text += node.value

  // Do not explore unwanted children
  if (UNWANTED_TAGS.includes(node.tag))
    return ''

  // Explore children
  if (node.children) {
    for (const child of node.children)
      text += ` ${extractTextFromAst(child)}`
  }

  // Trim text to avoid extra spaces
  return text.trim()
}
```

Si nous tombons sur un nœud de type `text`, nous récupérons son contenu. Si nous tombons sur un nœud de type `code` ou `style`, nous ne l'explorons pas parce que le contenu ne nous intéresse pas puisqu'il ne va pas aider l'utilisateur à trouver ce qu'il souhaite. Enfin, si nous tombons sur un nœud avec des enfants, nous les explorons.

::alert{type="info"}
Il est intéressant de noter qu'il est possible de modifier les tags à ne pas explorer. Par exemple, si vous souhaitez conserver le contenu des balises `code`, il suffit de retirer `code` du tableau `UNWANTED_TAGS`. Au contraire, si vous souhaitez retirer le contenu des balises `a`, il suffit de l'ajouter au tableau.
::

#### Création des Sections

Ensuite, nous allons devoir découper nos pages en sections. Pour cela, nous allons créer une fonction prenant en paramètre le contenu d'un fichier markdown et qui retourne un tableau de sections.

```ts [server/utils/search.ts]
interface Section {
  id: string
  title: string
  content: string
}

const HEADING = /^h([1-6])$/
const isHeading = (tag: string) => HEADING.test(tag)

export function splitPageIntoSections(page: ParsedContent): Section[] {
  const sections: Section[] = []

  // First section is the page itself
  sections.push({
    id: page._path as string, // Used as a unique identifier and also as a path
    title: page.title as string,
    content: page.description,
  })

  for (const item of page.body.children) {
    // If we find a heading, create a new section
    if (item.tag && isHeading(item.tag)) {
      const title = extractTextFromAst(item)

      sections.push({
        id: `${page._path as string}#${item.props!.id}`,
        title,
        content: '',
      })
    }
    // Otherwise, append content to the last section
    else if (item.tag) {
      sections[sections.length - 1].content += `${extractTextFromAst(item)} `
    }
  }

  return sections
}
```

Cette fonction réutilise la fonction `extractTextFromAst` pour extraire le contenu de chaque section. Elle utilise aussi une expression régulière pour vérifier si le tag est un titre. Si c'est le cas, elle crée une nouvelle section. Sinon, elle ajoute le contenu à la dernière section.

Enfin, nous allons pouvoir utiliser cette fonction sur l'ensemble de nos fichiers markdown.

```ts [server/api/search.ts]
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const files = await serverQueryContent(event).find()

  // Only for Markdown files
  const sections = files.filter(file => file._extension === 'md' && !file?._draft && !file?.empty)
    .map(page => splitPageIntoSections(page))
    .flat()

  return sections
})
```

_Voilà !_ Nous venons de créer un point d'accès à l'ensemble des données de notre site. Avec l'ensemble de ces données, nous pouvons désormais implémenter simplement notre recherche.

### Indexer le fichier JSON

Il est possible d'utiliser MiniSearch pour indexer le fichier JSON que nous venons de créer. L'indexation permet de générer un fichier contenant une structure de données directement optimisée pour MiniSearch, réduisant ainsi la taille du fichier et le temps de recherche.

::alert{type="info"}
Cette optimisation a un coût sur le serveur. Cependant, nous générons notre site en amont de son utilisation, nous pouvons donc nous permettre de prendre ce temps pour optimiser les performances de la recherche. Ensuite, le fichier généré n'est utilisable que par MiniSearch. Dans notre cas, ce n'est pas un problème.
::

Pour indexer notre fichier JSON, nous allons créer une instance de MiniSearch avec un ensemble d'options, y ajouter l'ensemble de notre contenu et rendre une chaîne de caractères avec le résultat.

```ts [server/api/search.ts]
import MiniSearch from 'minisearch'

// ...
export default defineEventHandler(async (event) => {
  // ...
  // return sections
  // Add an option to enable index
  const miniSearch = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'content'],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: {
        title: 4,
        content: 2,
        titles: 1,
      },
    },
  })

  // Index the documents
  miniSearch.addAll(sections)

  // Send the index to the client
  return JSON.stringify(miniSearch)
})
```

::alert{type="info"}
Retrouvez l'ensemble des options sur la [documentation de MiniSearch](https://lucaong.github.io/minisearch/modules/_minisearch_.html#options).
::

Nous avons maintenant un point d'accès nous retournant un fichier texte contenant l'ensemble de nos données indexées.

### Pré-rendu de l'Index

La dernière chose à faire est d'indiquer à Nitro qu'il doit pré-rendre ce fichier texte lors de la création du site web. Pour cela, direction `nuxt.config.ts`, où nous allons ajouter une règle sur la route `/api/search` :

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  routeRules: {
    '/api/search': {
      prerender: true,
      headers: { 'Content-Type': 'text/plain' },
    },
  },
})
```

Par défaut, Nitro va générer un fichier `/api/search/index.html`. Ainsi, il est important de préciser, à l'aide de l'en-tête `Content-Type`, que le fichier est un fichier texte.

Cette partie est simple mais indispensable pour que notre recherche fonctionne sans avoir à générer le fichier à chaque fois qu'un client effectue une recherche.

## Créer la barre de recherche

La partie la plus complexe est passée et la création de la recherche est maintenant très simple.

::alert{type="info"}
Dans cet article, nous n'allons pas mettre en forme la recherche ni créer une modale. Cela sera abordé dans un prochain article.
::

Tout d'abord, créons une nouvelle page dans `content` nommée `search.md`. Nous allons placer un titre dans le front-matter et un composant `Search` dans le corps du fichier.

```md [content/search.md]
---
title: Search
---

:search
```

Maintenant, nous devons créer notre composant `Search` dans `components/content/Search.vue`. Pour le moment, nous pouvons y ajouter un simple placeholder le temps d'implémenter la recherche.

```vue [components/content/Search.vue]
<template>
  <div>
    Search
  </div>
</template>
```

Dans notre composant de recherche, nous allons devoir :

1. Récupérer le contenu du point d'accès `/api/search`
2. Récupérer la chaîne de caractères recherchée par l'utilisateur
3. Effectuer la recherche avec MiniSearch
4. Afficher les résultats

### Récupérer le Contenu du Point d'Accès

Pour récupérer le contenu du point d'accès, nous allons utiliser le composable `useFetch` de Nuxt.

```vue [components/content/Search.vue]
<script lang="ts" setup>
const { data } = await useFetch('/api/search')

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: 'Cannot find search data'
  })
}
</script>
```

Dans le cas où le point d'accès ne retourne pas de données, nous retournons une erreur 404. Sans le fichier, toute la suite est compromise, c'est pour cela qu'il est nécessaire de lever rapidement une erreur.

### Récupérer la Chaîne de Caractères Recherchée

Pour récupérer la chaîne de caractères recherchée par l'utilisateur, nous allons simplement ajouter un `input` dans notre composant avec un `v-model` :

```vue [components/content/Search.vue]
<script lang="ts" setup>
const search = ref('')
</script>

<template>
  <div>
    <input v-model="search" type="search" placeholder="Search">
  </div>
</template>
```

### Effectuer la Recherche

Pour cette partie, nous allons créer un composable. Il va nous permettre de créer une instance de MiniSearch et de l'utiliser pour effectuer la recherche nous retournant les résultats.

```ts [composables/useIndexedMiniSearch.ts]
import MiniSearch from 'minisearch'

export function useIndexedMiniSearch(search: Ref<string>, data: Ref<string>) {
  const indexedMiniSearch = computed(() => MiniSearch.loadJSON(data.value, {
    fields: ['title', 'content'],
    storeFields: ['title', 'content'],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: {
        title: 4,
        content: 2,
        titles: 1,
      },
    },
  }))

  const results = computed(() => {
    return indexedMiniSearch.value.search(search.value)
  })

  return results
}
```

La création d'une instance de MiniSearch se fait dans une `computed` pour se mettre à jour lorsque de nouvelles données sont disponibles. Nous pouvons remarquer que les options passées à MiniSearch sont les mêmes que celles utilisées pour indexer le fichier JSON. C'est important pour le bon fonctionnement de la recherche.

Ensuite, nous utilisons la fonction `search` de MiniSearch dans une `computed` pour que le résultat se mette à jour à chaque fois que la recherche, au travers de `search`, se met à jour.

Maintenant que notre composable est prêt, nous pouvons l'utiliser dans notre composant.

```vue [components/content/Search.vue]
<script lang="ts" setup>
// ...
const results = useIndexedMiniSearch(search, data as Ref<string>)
</script>
```

La partie du script est terminée.

### Afficher les Résultats

Afficher les résultats est plutôt simple puisqu'il ne s'agit que d'une boucle à travers l'ensemble des résultats.

```vue [components/content/Search.vue]
<template>
  <div>
    <!-- ... -->
    <p>
      {{ results.length }} results
    </p>

    <ol v-if="results.length">
      <li v-for="result in results" :key="result.id">
        <NuxtLink :to="result.id">
          {{ result.title }}, go to {{ result.id }}
        </NuxtLink>
      </li>
    </ol>

    <p v-else>
      No results
    </p>
  </div>
</template>
```

Dans notre exemple, aucune mise en forme n'est effectuée.

Il est intéressant de noter qu'avec le système que nous avons mis en place, il se met à jour automatiquement lorsque le contenu de Nuxt Content change. Pour le constater, effectuons une recherche sur le mot `configure` et mettons à jour le titre du fichier `content/articles/2.configure.md`. Le résultat de la recherche se met à jour. :mage:

## Conclusion

Nous voilà avec une fonction de recherche prête à l'emploi sur notre site Nuxt Content ! :tada:

Nous avons vu comment exposer des données via le côté serveur de Nuxt, comment les transformer et les générer statiquement avant de les utiliser côté client. Nous avons également vu comment utiliser MiniSearch pour indexer des données et effectuer une recherche. Il est intéressant de noter qu'il est possible de personnaliser considérablement le traitement des données du côté serveur en fonction de nos besoins côté client. Nous aborderons ce sujet dans un prochain article.

Cet article constitue un excellent moyen de faire ses premiers pas dans le côté serveur de Nuxt, qui peut sembler un peu obscur au début, mais qui s'avère être incroyablement puissant ! :muscle:
