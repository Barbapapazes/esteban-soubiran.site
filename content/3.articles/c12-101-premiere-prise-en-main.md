---
title: C12 101 - Première prise en main
description: Découvrez C12, l'utilitaire pour charger des configurations intelligemment.
image: /assets/socials/c12-101-premiere-prise-en-main.jpg
cover:
  src: /assets/articles/c12-101-premiere-prise-en-main/cover.webp
  alt: Image d'illustration de l'article C12 101 - Première prise en main
resources:
  - name: Code Source du Projet
    url: https://github.com/barbapapazes/c12-101-first-hand
    icon: i-simple-icons-github
  - name: Code Source de C12
    url: https://github.com/unjs/c12
    icon: i-simple-icons-github
datePublished: 2023-07-12
dateModified: 2023-07-12
---

## Introduction

[`C12`](https://github.com/unjs/c12) est un outil permettant de charger intelligemment des configurations dans un projet pour le paramétrer en utilisant les valeurs de l'utilisateur.

Il se base sur des outils comme [`defu`](https:/github.com/unjs/defu) et [`rc9`](https://github.com/unjs/rc9) pour proposer une solution simple et efficace.

Retrouver le code source de cet article :git-hub-link{repo="barbapapazes/c12-101-first-hand"}

### UnJS, c'est Quoi ?

[UnJS](https://unjs.io), c'est un écosystème d'outils JavaScript. L'objectif est de fournir des outils qui ne font qu'une seule chose mais qui la font très bien et qui peuvent être combinés entre eux pour créer des outils plus complexes.

UnJS suit [la philosophie UNIX](http://www.catb.org/~esr/writings/taoup/html/ch01s06.html) : _"Faites une chose et faites le bien"_. Ainsi, la plupart des outils UnJS sont des outils avec très peu de fonctionnalités mais dont la force réside dans la modularité avec d'autres outils. À l'origine du projet, il y a [Pooya "Pi0" Parsa](https://github.com/pi0) développeur chez [NuxtLabs](https://github.com/nuxtlabs) et leader de :icon{name="nuxt"} [Nuxt] des premiers commits à son lancement officiel !

Chacun des projets est maintenu par son auteur et des mainteneurs désignés.

Pour en savoir plus, nous pouvons [lire leur gouvernance](https://github.com/unjs/governance).

## La Problématique

Imaginons que nous voulions créer le prochain framework :icon{name="vue"} Vue.js.

:another-article{name="le-prochain-framework-vue"}

Pour cela, nous allons devoir utiliser différents outils comme :icon{name="vue"} Vue.js, :icon{name="vite"} et Nitro. Chacun de ses outils, nous allons devoir les configurer pour qu'ils fonctionnent ensemble. Dans le même temps, nous allons devoir permettre à l'utilisateur de configurer notre framework et les outils qu'il utilise pour qu'il puisse les personnaliser selon ses besoins.

::alert{type="info"}
Par exemple, il est important pour l'utilisateur de pouvoir changer le port sur lequel le serveur va écouter.
::

Pour configurer cela, l'utilisateur peut saisir sa configuration dans un fichier de configuration, dans des fichiers RC et même dans le `package.json` de son projet. Ainsi, nous allons devoir charger l'ensemble de ces configurations et les combiner dans le bon ordre pour que l'utilisateur puisse configurer correctement notre framework.

## Installation

Pour commencer à jouer avec `c12`, nous allons l'installer. Pour cela, commençons par initialiser un nouveau projet :

```bash
mkdir c12-101
cd c12-101
npm init -y
```

Ensuite, nous allons installer `c12` :

```bash
npm install c12
```

Pour faciliter l'exécution de nos fichiers :icon{name="typescript"} TypeScript, nous allons installer [`jiti`](https://github.com/unjs/jiti) :

```bash
npm install -D jiti
```

<!-- :another-article{name="jiti-101-premiere-prise-en-main"} -->

Pour finir, nous allons créer le dossier `src` qui contiendra toutes nos sources :

```bash
mkdir src
```

## Chargement des Configurations

Pour charger l'ensemble de ces configurations et les assembler, nous allons pouvoir utiliser `c12` et apprendre à le configurer petit à petit. Dans l'ensemble de ce tutoriel, nous allons faire semblant de vouloir créer une application s'appelant `tnux`.

Pour commencer, nous allons créer un fichier `config.ts` dans le dossier `src` :

```bash
touch src/config.ts
```

Ensuite, nous allons pouvoir utiliser la fonction `loadConfig` de `c12` pour charger la configuration :

```ts [config.ts]
import { loadConfig } from 'c12'

export async function loadTnuxConfig() {
  const { config } = await loadConfig({
    name: 'tnux', // Permet de définir le nom des clés et fichiers de configuration qui seront recherchés par C12.
  })

  return config
}
```

Ensuite, nous allons pouvoir utiliser cette fonction dans notre fichier `index.ts` :

```ts [index.ts]
import { loadTnuxConfig } from './config'

loadTnuxConfig().then((config) => {
  console.dir(config, { depth: null })
})
```

_Parfait_ ! Nous avons réussi à charger la configuration de notre application `tnux`. Maintenant, nous allons pouvoir commencer à la configurer.

::alert{type="info"}
Pour exécuter notre script `index.ts`, nous allons devoir utiliser `jiti` pour exécuter notre fichier :icon{name="typescript"} TypeScript. Pour cela, nous allons devoir ajouter un script dans notre `package.json` :

```json [package.json]
{
  "scripts": {
    "start": "jiti src/index.ts"
  }
}
```

Pour le moment, la function ne retourne qu'un simple objet vide.
::

### Configuration par Défaut

Commençons par mettre en place notre configuration par défaut pour notre application. Pour cela, nous allons pouvoir la définir directement dans la fonction `loadConfig` :

```ts [config.ts]
// ...
export async function loadTnuxConfig() {
  const { config } = await loadConfig({
    name: 'tnux',
    defaults: {
      app: {
        name: 'tnux',
        version: '0.0.1',
      },
      vite: {
        port: 3000,
      },
      tailwind: {
        themes: {
          colors: {
            primary: 'blue',
            secondary: 'gray',
          },
        },
      },
    },
  })

  return config
}
```

Maintenant, nous pouvons exécuter notre script pour voir le résultat et sans surprise. Il s'agit de notre configuration par défaut ! :sunglasses:

::alert{type="info"}
Nous chargeons ici une configuration totalement arbitraire. L'idée est d'avoir une configuration que nous allons pouvoir personnaliser par la suite grâce aux différents points de chargement dont nous avons parlé.
::

Notre configuration par défaut fonctionne ! Nous allons pouvoir commencer à charger une configuration utilisateur.

### Configuration du Package.json

La première configuration que nous allons charger est celle présente dans le `package.json` du projet. Pour trouver cette configuration, `c12` va utiliser la clé `tnux` que nous avons défini lors du paramétrage de `c12`.

Dans notre fichier `package.json`, nous pouvons ajouter une peu de configuration :

```json [package.json]
{
  // ...
  "tnux": {
    "app": {
      "baseUrl": "/tnux"
    }
  }
}
```

Maintenant, nous allons pouvoir exécuter notre script pour voir le résultat :

```bash
npm start
```

Et nous obtenons le résultat suivant :worried: :

```sh [Résultat]
{
  app: { name: 'tnux', version: '0.0.1' },
  vite: { port: 3000 },
  tailwind: { themes: { colors: { primary: 'blue', secondary: 'gray' } } }
}
```

Il manque la clé `baseURL` !

Par défaut, `c12` ne charge pas la configuration du `package.json`. Pour cela, nous allons devoir ajouter une option supplémentaire à notre fonction `loadConfig` :

```ts [config.ts]
// ...
export async function loadTnuxConfig() {
  const { config } = await loadConfig({
    name: 'tnux',
    packageJson: true, // Permet de charger la configuration du package.json.
    defaults: {
      // ...
    },
  })

  return config
}
```

En ré-exécutant notre fichier, nous obtenons maintenant le bon résultat :

```sh [Résultat]
{
  app: { name: 'tnux', version: '0.0.1', baseURL: '/tnux' }, // La clé baseURL est bien présente.
  vite: { port: 3000 },
  tailwind: { themes: { colors: { primary: 'blue', secondary: 'gray' } } }
}
```

### Configuration par Ficher RC Global

Il est possible d'utiliser un fichier RC global pour paramétrer son application. Cette fonctionnalité est pratique pour permettre de configurer l'ensemble de ses applications avec la même configuration initiale.

Pour commencer, nous allons créer un fichier RC global comprenant une petite configuration. Pour cela, créons le fichier `global-rc.ts` :

```ts [global-rc.ts]
import { writeUser } from 'rc9'

writeUser({
  app: {
    name: 'tnux-from-rc',
  },
})
```

:another-article{name="rc9-premiere-prise-en-main"}

Bien sûr, nous ne devons pas oublier de l'installer :

```sh
npm i -D rc9
```

Puis lançons notre script avec `jiti src/global-rc.ts`. Une fois de plus, pour que le fichier RC soit chargé, nous devons mettre à jour notre configuration :

```ts [config.ts]
// ...
export async function loadTnuxConfig() {
  const { config } = await loadConfig({
    name: 'tnux',
    globalRC: true, // Permet de charger la configuration d'un fichier RC globals.
    defaults: {
      // ...
    },
  })

  return config
}
```

Nous pouvons alors voir apparaître `name: 'tnux-from-rc'` dans notre configuration :

```sh [Résultat]
{
  app: { name: 'tnux-from-rc', version: '0.0.1', baseURL: '/tnux' },
  vite: { port: 3000 },
  tailwind: { themes: { colors: { primary: 'blue', secondary: 'gray' } } }
}
```

::alert{type="info"}
Le nom du fichier chargé est `.<name>rc`. Il est possible de le changer avec l'option `rcFile`.
::

### Configuration par Fichier RC Local

Pour tester le chargement d'un fichier local, commençons par le créer en le nommant `.tnuxrc` et ajoutons-y dedans une nouvelle version :

```ini [.tnuxrc]
app.version=0.2.0
```

Chargeons notre configuration et ça fonctionne :tada:, nous pouvons observer la version `0.2.0`.

```sh [Résultat]
{
  app: { name: 'tnux', version: '0.2.0', baseURL: '/tnux' },
  vite: { port: 3000 },
  tailwind: { themes: { colors: { primary: 'blue', secondary: 'gray' } } }
}
```

Cette fonctionnalité est notamment utile pour toucher à la configuration sans avoir à toucher le fichier de configuration de l'utilisateur.

C'est avec cette technique que [Nuxt Studio](https://nuxt.studio) est en mesure d'injecter le module `@nuxthq/studio` dans l'Actions GitHub permettant de déployer le site sans demander à l'utilisateur de réaliser une installation !

Nous pouvons voir cela dans leur script de déploiement :

```yml [studio.yml]
- name: Create .nuxtrc
  run: echo 'modules[]=@nuxthq/studio' > .nuxtrc
```

Cette ligne permet d'ajouter le module dans ceux de l'application uniquement lors du déploiement de celle-ci puisque le fichier `.nuxtrc` est chargé lors de la création de la configuration.

### Configuration par Fichier TS

La manière la plus naturelle d'ajouter de la configuration à un projet est de le faire via un fichier de configuration dédié et c'est ce que nous allons voir dans cette partie.

`C12` supporte le chargement d'un fichier de configuration nommé `<name>.config`.

::alert{type="info"}
Il n'est pas obligatoire que le fichier de configuration soit en :icon{name="typescript"} TypeScript.
::

Dans notre cas, créons un fichier `tnux.config.ts` dans lequel nous allons mettre à jour le port de démarrage de l'application :

```ts [tnux.config.ts]
export default {
  vite: {
    port: 5678,
  },
}
```

Lançons notre configuration à l'aide de `npm run start` et observons le résultat :

```sh [Résultat]
{
  app: { name: 'tnux', version: '0.2.0', baseURL: '/tnux' },
  vite: { port: 5678 },
  tailwind: { themes: { colors: { primary: 'blue', secondary: 'gray' } } }
}
```

Le port a bien été mis à jour !

### Configuration par Options pour Sur-Charger

Maintenant que nous avons vu tous les moyens donnés à l'utilisateur pour configuration son application, il reste une dernière clé à connaître pour garder la main sur la configuration de notre projet. Il s'agit de la clé `overrides`.

Supposons que l'on veuille à tout prix que le port de notre application soit `1234`, il est possible de le faire en ajoutant une cette configuration lorsque nous appelons `loadConfig` :

```ts [config.ts]
// ...

export async function loadTnuxConfig() {
  const { config } = await loadConfig({
    name: 'tnux',
    overrides: {
      vite: {
        port: 1234,
      },
    },
    defaults: {
      // ...
    },
  })

  return config
}
```

Grâce à cette configuration, nous aurons toujours le dernier mot sur le port qu'utilisera notre application.

## Variables d'Environnement

`C12` permet de charger un fichier `.env` dans les variables d'environnement grâce à `dotenv`. Pour cela, nous devons lui indiquer de la faire :

```ts [config.ts]
// ...
export async function loadTnuxConfig() {
  const { config } = await loadConfig({
    name: 'tnux',
    dotenv: true, // Permet d'activer le chargement du fichier .env
    defaults: {
      // ...
    },
  })

  return config
}
```

Ensuite, nous devons créer notre fichier `.env` :

```ini [.env]
AWESOME_ENV=Loaded from .env using c12
```

Enfin, nous allons afficher cette variable pour nous assurer qu'elle est bien chargée :

```ts [index.ts]
// ...

loadTnuxConfig().then((config) => {
  // ...
  console.log(process.env.AWESOME_ENV)
})
```

Et _voilà_! En lançant notre script, nous obtenons le résultat suivant :

```sh [Résultat]
{
  app: { name: 'tnux', version: '0.2.0', baseURL: '/tnux' },
  vite: { port: 3000 },
  tailwind: { themes: { colors: { primary: 'blue', secondary: 'gray' } } }
}
Loaded from .env using c12 // Il s'agit bien du contenu que nous avons placé dans notre fichier .env
```

## Configuration par Environnement

Une fonction supplémentaire offerte par `c12` est la possibilité de sur-charger sa configuration en fonction de l'environnement dans lequel l'application est lancée.

Supposons le cas où nous avons 3 environnements :

- `dev` pour le développement
- `staging` pour la pré-production
- `prod` pour la production

Dans le premier, nous ne voulons pas la minification ni d'HTTPS mais beaucoup de logs, dans le second, nous voulons la minification et beaucoup de logs et l'HTTPS et dans le dernier, nous voulons la minification, l'HTTPS et peu de logs.

Pour cela, il nous serait possible d'avoir tout un jeu de conditions avec la valeur de la variable d'environnement `NODE_ENV` mais `c12` nous permet de faire cela de manière plus simple.

Dans notre cas, nous allons éditer la configuration présente dans `tnux.config.ts` :

```ts [tnux.config.ts]
export default {
  vite: {
    port: 5678,
  },

  $dev: {
    minification: false,
    logLevel: 'debug',
    vite: {
      https: true,
    }
  },

  $staging: {
    minification: true,
    logLevel: 'debug',
    vite: {
      https: true,
    }
  },

  $prod: {
    minification: true,
    logLevel: 'error',
    vite: {
      https: true,
    }
  }
}
```

En utilisant la syntaxe `$<envName>`, nous pouvons définir des configurations qui seront appliquées en fonction de la valeur de `process.env.NODE_ENV`.

Ainsi, avec la commande `NODE_ENV=prod jiti src/index.ts`, nous allons avoir la configuration suivante :

```sh [Résultat]
{
  app: { name: 'tnux', version: '0.2.0', baseURL: '/tnux' },
  vite: { port: 5678, https: true },
  tailwind: { themes: { colors: { primary: 'blue', secondary: 'gray' } } },
  minification: true,
  logLevel: 'error'
}
```

::alert{type="info"}
Il est possible de changer le nom de l'environnement en utilisant la clé `envName` dans la configuration de `c12`. Par défaut, `process.env.NODE_ENV` est utilisé. Ainsi, il suffit de changer la valeur de cette variable pour changer la configuration qui est chargée.
::

## Conclusion

`C12` permet de créer facilement une configuration pour nos applications à partir de plusieurs sources. Voici un récapitulatif de l'ordre de chargement, de celle avec le plus de poids à celle avec le moins d'importance :

- Sur-charge de la configuration par les options
- Fichier de configuration dans le dossier courant
- Fichier RC dans le dossier courant
- Fichier RC global
- Configuration du package.json
- Configuration par défaut
- Extension des configurations des différents couches

Maintenant que nous avons vu la base, les utilitaires bas niveaux, nous allons pouvoir commencer à les assembler dans des outils plus haut niveau pour faire des programmes plus complexes avec des fonctionnalités plus intéressantes. Ainsi, nous découvrirons dans la suite de cette série `citty`, un outil pour créer des applications en ligne de commande. Puis nous verrons comment créer notre propre application en ligne de commande avec `citty` et les autres outils d'UnJS.
