---
title: Defu 101 - Première prise en main
description: Découvrez Defu, l'utilitaire pour attribuer des propriétés de manière récursive à des objects JavaScript.
image: /assets/socials/defu-101-premiere-prise-en-main.jpg
cover:
  src: /assets/articles/defu-101-premiere-prise-en-main/cover.webp
  alt: Image d'illustration de l'article Defu 101 - Première prise en main
resources:
  - name: Code Source du Projet
    url: https://github.com/barbapapazes/defu-101-first-hand
    icon: i-simple-icons-github
  - name: Code Source de Defu
    url: https://github.com/unjs/defu
    icon: i-simple-icons-github
datePublished: 2023-07-03
dateModified: 2023-07-03
---

## Introduction

[`Defu`](https://github.com/unjs/defu) est un utilitaire :icon{name="javascript"} JavaScript qui permet d'attribuer des propriétés par défaut de manière récursive à des objects JavaScript.

L'objectif de cet article est de présenter cet outil ! En effet, il est utilisé dans d'autres projets comme [`c12`](https://github.com/unjs/c12) ou [`RC9`](https://github.com/unjs/rc9).

<!-- :another-article{name="c12-101-premiere-prise-en-main"} -->

:another-article{ name="rc9-101-premiere-prise-en-main"}

Il fait parti de l'écosystème UnJS.

Retrouver le code source de cet article :git-hub-link{repo="barbapapazes/defu-101-first-hand"}

### UnJS, c'est Quoi ?

[UnJS](https://unjs.io), c'est un écosystème d'outils JavaScript. L'objectif est de fournir des outils qui ne font qu'une seule chose mais qui la font très bien et qui peuvent être combinés entre eux pour créer des outils plus complexes.

UnJS suit [la philosophie UNIX](http://www.catb.org/~esr/writings/taoup/html/ch01s06.html) : _"Faites une chose et faites le bien"_. Ainsi, la plupart des outils UnJS sont des outils avec très peu de fonctionnalités mais dont la force réside dans la modularité avec d'autres outils. À l'origine du projet, il y a [Pooya "Pi0" Parsa](https://github.com/pi0) développeur chez [NuxtLabs](https://github.com/nuxtlabs) et leader de :icon{name="nuxt"} [Nuxt] des premiers commits à son lancement officiel !

Chacun des projets est maintenu par son auteur et des mainteneurs désignés.

Pour en savoir plus, nous pouvons [lire leur gouvernance](https://github.com/unjs/governance).

## Installation

Pour commencer, initialisons un projet en créant un nouveau dossier :

```bash
mkdir defu-101
cd defu-101
npm init -y
```

Ensuite, nous allons installer `Defu` :

```bash
npm install defu
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

## La Problématique

Avant d'aller plus loin, il est important de comprendre la problématique à laquelle répond `Defu`.

Imaginons un outil qui laisse à l'utilisateur **la possibilité**, de configurer son comportement. C'est à dire que l'utilisations pourrait écrire un fichier `mon-outil.config.ts` qui ressemblerait à ça :

```typescript [mon-outil.config.ts]
import { defineMonOutilConfig } from 'mon-outil'

export default defineMonOutilConfig({
  extends: [
    'ma-typographie',
    'mon-theme'
  ],

  app: {
    port: 5678
  },

  // ...
  modules: [
    'mes-composants',
    'mon-pinceau'
  ],

  content: {
    defaultLocale: 'fr'
  }
})
```

Dans le même temps, l'outil `MonOutil` possède déjà, en interne, une configuration par défaut.

La problématique est donc la suivante : **comment combiner la configuration par défaut de `MonOutil` avec la configuration de l'utilisateur ?**

### La Solution Naïve

La solution naïve serait de faire un `Object.assign`. D'après [MDN](https://developer.mozilla.org), ça semble correspondre à ce que nous voulons faire.

> La méthode Object.assign() est utilisée afin de copier les valeurs de toutes les propriétés directes (non héritées) d'un objet qui sont énumérables sur un autre objet cible. Cette méthode renvoie l'objet cible.

Essayons de l'appliquer à notre cas en créant plusieurs fichiers.

- `default-config.ts`, qui contient la configuration par défaut de `MonOutil` :

```typescript [default-config.ts]
export default {
  extends: [],
  app: {
    port: 3000,
    secure: false,
  },
  plugins: [
    'super-chargement',
  ],
  modules: [],
  content: {
    documentDrivent: false,
  },
}
```

- `user-config.ts`, qui contient la configuration de l'utilisateur :

```typescript [user-config.ts]
export default {
  extends: [
    'ma-typographie',
    'mon-theme',
  ],

  app: {
    secure: true,
  },

  modules: [
    'mes-composants',
    'mon-pinceau',
  ],

  plugins: [
    '~/plugins/mon-plugin',
  ],

  content: {
    defaultLocale: 'fr',
  },
}
```

- `my-tool.ts`, qui contient notre solution naïve :

```typescript [my-tool.ts]
import defaultConfig from './default-config'
import userConfig from './user-config'

const config = Object.assign({}, defaultConfig, userConfig)

console.log(config)
```

Résultat de la configuration finale :

```sh [Résultat]
{
  extends: [ 'ma-typographie', 'mon-theme' ],
  app: { secure: true },
  plugins: [ '~/plugins/mon-plugin' ],
  modules: [ 'mes-composants', 'mon-pinceau' ],
  content: { defaultLocale: 'fr' }
}
```

_Mmmh_ ! Ce n'est pas vraiment ce que nous voulions. En effet, nous avons perdu une partie de la configuration par défaut. Dans la clé app, nous n'avons plus le port de l'application ce qui va déranger pour la démarrer. Dans le même temps, nous avons perdu le plugin `super-chargement` au profit de celui de l'utilisateur. Ce n'est pas ce que nous voulions.

En effet, le principe de la configuration par défaut est qu'elle permette à l'utilisateur de ne pas avoir à tout configurer. Dans le même temps, s'il l'utilisateur ne peut pas juste changer une clé sans devoir ajouter toutes les autres, la configuration par défaut n'a plus vraiment d'intérêt rendant la création de la configuration une étape fastidieuse.

::alert{type="info"}
Notre configuration reste relativement simple avec simplement une configuration par défaut et une configuration utilisateur. Dans la réalité, il est possible d'avoir des configurations dans le projet sous différents noms, des configurations globales et surtout des configurations beaucoup plus longues, profondes et complexes.
::

Il est clair que notre solution naïve ne fonctionne pas. Nous allons donc devoir trouver une autre solution.

## Notre Solution

Maintenant que nous avons pris le temps de comprendre la problématique, réfléchissons à une solution.

Dans notre cas, nous avons un problème lorsqu'il s'agit de merger deux objets. En effet, nous avons besoin de garder les clés de la configuration par défaut et de les fusionner avec les clés de la configuration utilisateur. Nous ne voulons pas perdre les clés de la configuration par défaut.

Prenons un exemple simple :

```sh [Exemple]
# configuration par défaut
{
  app: {
    port: 3000,
    secure: false,
  },
}

# configuration utilisateur
{
  app: {
    secure: true,
  },
}

# Nous nous attendons à avoir :
{
  app: {
    port: 3000,
    secure: true,
  },
}
```

Pour arriver à cela, codons une fonction `merge` qui prend en paramètre deux objets et qui retourne un nouvel objet qui est la fusion des deux objets. Pour cela, nous allons devoir faire un [deep merge](https://www.lakum.in/blog/shallow-merge-vs-deep-merge-in-javascript) c'est à dire que nous allons devoir merger les objets en profondeur. Pour faire cela, la manière la plus simple est de le faire récursivement sur l'ensemble des clés de l'objet.

```typescript [merge.ts]
// Notre configuration par défaut
const defaultLocaleConfig = {
  app: {
    port: 3000,
    secure: false,
  },
}
// La configuration utilisateur
const userLocaleConfig = {
  app: {
    secure: true,
  },
}

function merge(defaultConfig, userConfig) {
  // Récupérations de l'ensemble des clés des 2 objets.
  // Importants de le faire sur les 2 objets pour éviter de perdre des clés qui serait présentent dans un seul des 2 objets.
  const keys = new Set([...Object.keys(defaultConfig), ...Object.keys(userConfig)])

  const mergedConfig = {}

  // Pour chaque clé, nous allons merger les valeurs
  for (const key of keys) {
    // Récupérations de la valeur par défaut
    const defaultValue = defaultConfig[key]
    // Récupération de la valeur de l'utilisateur
    const userValue = userConfig[key]

    // Si la valeur par défaut ou la valeur utilisateur est un objet, nous allons merger les 2 objets.
    // Nous faisons cela de manière récursive pour merger les objets en profondeur et éviter la problématique de la solution naïve.
    if (typeof defaultValue === 'object' || typeof userValue === 'object')
      mergedConfig[key] = merge(defaultValue, userValue)

    // Si ce n'est pas un objet, nous prenons la valeur de l'utilisateur si elle existe, sinon nous prenons la valeur par défaut.
    else
      mergedConfig[key] = userValue || defaultValue
  }

  return mergedConfig
}
```

Essayons avec notre exemple :

```typescript [merge.ts]
// ...
console.log(merge(defaultLocaleConfig, userLocaleConfig))
```

Résultat :

```sh [Résultat]
{
  app: {
    port: 3000,
    secure: true,
  },
}
```

Parfait ! :rocket:

Essayons maintenant avec un exemple plus complexe :

```typescript [merge.ts]
import defaultConfig from './default-config'
import userConfig from './user-config'

// ...

function merge(defaultConfig, userConfig) {
  // ...
}

// ...

console.log(merge(defaultConfig, userConfig))
```

Résultat :

```sh [Résultat]
{
  extends: { '0': 'ma-typographie', '1': 'mon-theme' },
  app: { port: 3000, secure: true },
  plugins: { '0': '~/plugins/mon-plugin' },
  modules: { '0': 'mes-composants', '1': 'mon-pinceau' },
  content: { documentDrivent: false, defaultLocale: 'fr' }
}
```

Il semble que nos tableaux, clés `extends`, `plugins` et `modules`, ne soit pas mergés correctement. D'une part, ce ne sont plus des tableaux et d'autres part, nous avons perdu les valeurs de la configuration par défaut.

Pour pallier à ce problème, nous allons devoir gérer le cas des tableaux. Revenons à notre fonction `merge` :

```typescript [merge.ts]
// ...

function merge(defaultConfig, userConfig) {
  const keys = new Set([...Object.keys(defaultConfig), ...Object.keys(userConfig)])

  const mergedConfig = {}

  for (const key of keys) {
    const defaultValue = defaultConfig[key]
    const userValue = userConfig[key]

    if (Array.isArray(defaultValue) || Array.isArray(userValue))
      mergedConfig[key] = [...defaultValue, ...userValue]

    else if (typeof defaultValue === 'object' || typeof userValue === 'object')
      mergedConfig[key] = merge(defaultValue, userValue)

    else
      mergedConfig[key] = userValue || defaultValue
  }

  return mergedConfig
}

// ...
```

Résultat :

```sh [Résultat]
{
  extends: [ 'ma-typographie', 'mon-theme' ],
  app: { port: 3000, secure: true },
  plugins: [ 'super-chargement', '~/plugins/mon-plugin' ],
  modules: [ 'mes-composants', 'mon-pinceau' ],
  content: { documentDrivent: false, defaultLocale: 'fr' }
}
```

Ça fonctionne ! :tada: Nous avons réussi à merger nos 2 configurations sans perdre les clés de la configuration par défaut.

## La Solution de Defu

Du coup, c'est quoi `Defu` ?

`Defu`, c'est notre fonction `merge`, tout simplement (avec quelques fonctionnalités en plus) ! :smile:

### Utilisation

Pour utiliser `Defu`, c'est super simple ! Pour cela, créons un fichier `defu.ts` dans le dossier `src` avec le contenu suivant :

```typescript [defu.ts]
import { defu } from 'defu'
import defaultConfig from './default-config'
import userConfig from './user-config'

console.log(defu(userConfig, defaultConfig))
```

::alert{type="info"}
Plus l'objet est à gauche, plus il a de poids. Cela signifie que les valeurs de l'objet de gauche seront prioritaires sur les valeurs de l'objet de droite.
::

Et c'est tout ! Nous pouvons maintenant lancer notre script pour y voir apparaître :

```sh [Résultat]
{
  extends: [ 'ma-typographie', 'mon-theme' ],
  app: { port: 3000, secure: true },
  plugins: [ 'super-chargement', '~/plugins/mon-plugin' ],
  modules: [ 'mes-composants', 'mon-pinceau' ],
  content: { documentDrivent: false, defaultLocale: 'fr' }
}
```

Le résultat est le même qu'avec notre fonction merge ! `Defu`, c'est simple et efficace ! :rocket:

`Defu` propose également deux autres fonctions :

- `defuFn`, permet, si la valeur est une fonction, de l'appliquer sur l'élément à merger.

```typescript [defuFn.ts]
import { defuFn } from 'defu'

console.log(defuFn({
  app: {
    // Nous ne gardons que les valeurs commençant par un point.
    ignore: (items: string[]) => items.filter(item => item.startsWith('.')),
    // Nous nous assurons que le niveau est compris entre 0 et 5.
    level: (value: number) => Math.max(0, Math.min(5, value)),
  },
},
{
  app: {
    ignore: ['node_modules', '.git', '.nuxt'],
    level: 90,
  },
}),
)
```

- `defuArrayFn`, est similaire à `defuFn` mais ne s'appplique que sur les tableaux.

### Un Merge Personnalisable

Avec `Defu`, il est possible de personnaliser le comportement du merge en créant notre propre merger. Pour cela, nous allons créer notre instance de `Defu` avec la fonction `createDefu` dans un nouveau fichier `custom-defu.ts` dans le dossier `src` :

```typescript [custom-defu.ts]
import { createDefu } from 'defu'

const sum = createDefu((obj, key, value) => {
  console.log(obj, key, value)
  if (typeof obj[key] === 'number' && typeof value === 'number') {
    obj[key] += value
    return true
  }
})

console.log(sum({ a: 1, b: 2 }, { a: 2, b: 3 }))
```

::alert{type="info"}
Il est très important de renvoyer `true` dans notre fonction pour indiquer à `Defu` que nous avons bien mergé les valeurs et qu'il n'y a pas besoin de faire l'opération par défaut.
::

Avec cette fonction, nous obtenons le résultat suivant :

```sh [Résultat]
{ a: 3, b: 5 }
```

### Le Type Defu

Dans sa proposition de valeur, `Defu` va encore plus loin en proposant un type :icon{name="typescript"} permettant de faire un deep merge sur les types.

Par exemple, créons un fichier `type.ts` dans le dossier `src` avec le contenu suivant :

```typescript [type.ts]
import type { Defu } from 'defu'

interface userConfig {
  app: {
    secure: boolean
  }
}

interface defaultConfig {
  app: {
    port: number
  }
}

type Config = Defu<userConfig, [defaultConfig]>

const config: Config = {
  app: {
    // ...
  },
}
```

Dans l'objet `config.app`, notre IDE nous signale que les clés `port` et `secure` sont manquantes, signe que le type `Config` est bien un deep merge des types `userConfig` et `defaultConfig`.

## Conclusion

`Defu` est une librairie permettant de réaliser un deep merge de 2 objets. Ell est notamment très utile pour merger des configurations ou des options, comme les options d'un plugin.

Dans le même temps, `Defu` fournit un type permettant de faire un deep merge sur les types. Cela peut être très utile pour merger des types de configuration ou d'options qui ne sont pas forcément connu à l'avant ! Mais cela fera l'objet d'un autre article. :wink:
