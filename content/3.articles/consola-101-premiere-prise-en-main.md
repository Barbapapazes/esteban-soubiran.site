---
title: Consola 101 - Première prise en main
description: Découvrez Consola, l’élégant wrapper pour la console Node.js ou navigateur.
image: /assets/socials/consola-101-premiere-prise-en-main.jpg
cover:
  src: /assets/articles/consola-101-premiere-prise-en-main/cover.webp
  alt: Image d'illustration de l'article Consola 101 - Première prise en main
datePublished: 2023-06-29
dateModified: 2023-06-29
layout: article
---

## Introduction

[Consola](https://github.com/unjs/consola), c'est un wrapper pour notre console Node.js ou navigateur. Il est simple et configurable tout en étant très puissant !

Il fait parti de l'écosystème UnJS et est utilisé par [Nuxt](https://nuxt.com).

Retrouver le code source de cet article :git-hub-link{repo="barbapapazes/consola-101-first-hand"}

::alert{type="info"}
Article inspiré par [les exemples du repository de `Consola`](https://github.com/unjs/consola/tree/main/examples).
::

### UnJS, c'est quoi ?

[UnJS](https://unjs.io), c'est un écosystème d'outils JavaScript. L'objectif est de fournir des outils qui ne font qu'une seule chose mais qui la font très bien et qui peuvent être combinés entre eux pour créer des outils plus complexes.

UnJS suis [la philosophie UNIX](http://www.catb.org/~esr/writings/taoup/html/ch01s06.html) : _"Faites une chose et faites le bien"_. Ainsi, la plupart des outils UnJS sont des outils avec très peu de fonctionnalités mais dont la force réside dans la modularité avec d'autres outils. À l'origine du projet, il y a [Pooya "Pi0" Parsa](https://github.com/pi0) développeur chez [NuxtLabs](https://github.com/nuxtlabs) et leader de :icon{name="nuxt"} [Nuxt] des premiers commits à son lancement officiel !

Chacun des projets est maintenu par son auteur et des mainteneurs désignés.

Pour en savoir plus, nous pouvons [lire leur gouvernance](https://github.com/unjs/governance).

## Installation

Pour commencer, initialisons un projet en créant un nouveau dossier :

```bash
mkdir consola-101
cd consola-101
npm init -y
```

Ensuite, nous allons installer `Consola` :

```bash
npm install consola
```

Pour la suite, nous allons utiliser :icon{name="typescript"} TypeScript que nous allons devoir installer et configurer :

```bash
npm install -D typescript @types/node
```

Puis, créons un fichier `tsconfig.json` à la racine du projet pour configurer :icon{name="typescript"} TypeScript :

```json [tsconfig.json]
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "types": [
      "node"
    ],
    "moduleResolution": "node",
    "strict": true,
    "strictNullChecks": true,
  }
}
```

Pour faciliter l'exécution de nos fichiers TypeScript, nous allons installer [`jiti`](https://github.com/unjs/jiti) :

```bash
npm install -D jiti
```

<!-- :another-article{name="jiti-101-premiere-prise-en-main"} -->

Pour finir, nous allons créer le dossier `src` qui contiendra toutes nos sources :

```bash
mkdir src
```

_Voilà_, nous sommes prêts à commencer !

## Nos premiers affichages

Pour commencer, créons un fichier `first-console.ts` dans le dossier `src` où nous allons pouvoir commencer à expérimenter avec `Consola` :

```typescript [first-console.ts]
import { consola } from 'consola'

consola.log('Hello World !') // Similaire à console.log
```

Pour exécuter ce fichier, nous allons utiliser `jiti` :

```bash
jiti src/first-console.ts
```

Vous verrez alors s'afficher dans votre console :

```txt
Hello World!
```

Là où les choses deviennent intéressantes, c'est que `Consola` fourni 6 niveaux de logs différents, de 0 à 5, avec 14 types de log différents :

- `silent`
- `fatal`
- `error`
- `warn`
- `log`
- `info`
- `success`
- `fail`
- `ready`
- `start`
- `box`
- `debug`
- `trace`
- `verbose`

Ainsi, il est aisé d'afficher des messages selon leur importance :

```typescript [first-console.ts]
import { consola } from 'consola'

// ...

consola.debug('Debugging message')
consola.info('Info message')
consola.start('Start message')
consola.ready('Ready message')
consola.success('Success message')
consola.warn('Warning message')
consola.error(new Error('Error message'))
consola.fatal(new Error('Fatal message'))
```

Dans notre console s'affiche alors l'ensemble des messages de manière élégante, avec des couleurs et des icônes pour facilement les comprendre !

::alert{type="info"}
Une partie de ces niveaux existent avec `console` mais pas tous. De plus `Consola` fournit des options pour n'afficher que les logs à partir d'un certain niveau ce qui est utile pour la production.
::

## Configuration

Maintenant que nous avons vu l'utilisation de base de `Consola`, nous allons voir comment le configurer et l'utiliser à notre sauce, configurer l'affichage, le niveau de log, etc.

Pour commencer, créons un nouveau fichier `config.ts` dans notre dossier `src`. Ensuite, nous allons pouvoir créer notre propre instance de `Consola` et ne plus utiliser celle par défaut qui est exportable depuis `consola` :

```typescript [config.ts]
import { createConsola } from 'consola'

const consola = createConsola()
```

::alert{type="info"}
`createConsola` nous permet de créer une nouvelle instance de `Consola`. C'est similaire à `const consola = new Consola()`. Pour autant, l'utilisation d'une fonction utilitaire permet à la librairie, au besoin, de changer ce comportement sans casser l'API.
::

Dès maintenant, il est possible d'afficher nos messages.

```typescript [config.ts]
import { createConsola } from 'consola'

const consola = createConsola()

consola.info('Hello World !')
```

Pour le moment, nous n'avons pas changé grand chose. Nous allons maintenant pouvoir configurer notre instance de `Consola` en lui passant un objet. Par exemple, il est possible de décider de changer le reporter `fancy` par un reporter `basic` n'affichant plus les icônes et les couleurs :

```typescript [config.ts]
import { createConsola } from 'consola'

const consola = createConsola({
  fancy: false
})

// ...
```

Il est possible d'ajouter des valeurs par défaut à l'ensemble de nos logs comme un tag ou un message :

```typescript [config.ts]
import { createConsola } from 'consola'

const consola = createConsola({
  fancy: false,
  defaults: {
    tag: 'Consola 101',
    message: 'Default message'
  }
})
```

Nous allons alors voir apparaître dans notre console :

```txt
[info] [Consola 101] Default message Hello World!
```

Ainsi, il est simple d'associer nos logs à la version de notre application. Pour cela, nous allons importer la version du `package.json` dans notre fichier et l'utiliser comme tag :

```typescript [config.ts]
import { createConsola } from 'consola'
import { version } from '../package.json'

const consola = createConsola({
  fancy: false,
  defaults: {
    tag: version,
    message: 'Default message'
  }
})
```

::alert{type="warning"}
Pour que cela fonctionne au mieux, il est essentiel d'ajouter une clé `version` dans notre `package.json`.

```json [package.json]
{
  "version": "0.0.1"
  // ...
}
```

::

Nous allons alors voir apparaître dans notre console :

```txt
[info] [0.0.1] Default message Hello World!
```

Enfin, il est possible de changer le niveau de log à afficher. En effet, il est souhaitable pour une application en production de ne pas afficher les logs de debug ou de trace. Pour cela, nous allons utiliser la clé `level` :

```typescript [config.ts]
import { createConsola } from 'consola'

const consola = createConsola({
  fancy: false,
  defaults: {
    tag: 'Consola 101',
    message: 'Default message'
  },
  level: 1,
})

consola.info('Hello World!')
consola.debug('Debugging message')
```

Avec cette configuration, tous les logs d'un niveau supérieur à `1` ne seront pas affichés. Par défaut, le niveau de `consola` est à `3`. Ainsi, aucun des 2 logs ne sera affiché dans notre exemple.

::alert{type="info"}
D'autres options sont disponibles. Grâce à :icon{name="typescript"} TypeScript, elles sont faciles à découvrir.
::

## Nos reporteurs personnalisés

Un reporteur est un objet qui va implémenter la fonction permettant de gérer les logs. En effet, il n'est pas obligatoire d'afficher les logs dans la console. Il est possible de les envoyer à un service externe, de les enregistrer dans un fichier, etc. Ainsi, `Consola` s'occupe de gérer les logs et nous pouvons nous occuper de les afficher comme nous le souhaitons.

Par défaut, `Consola` fourni 3 reporteurs :

- `basic`
- `fancy`
- `browser`

Pour autant, il est tout à fait possible de construire notre propre reporteur et de l'utiliser très simplement. Ainsi, nous pouvons ajuster l'affichage de nos logs à notre guise et selon nos besoins.

### Notre reporteur JSON

Par exemple, nous pouvons avoir besoin de nos logs en JSON pour faciliter leurs utilisations par un service externe. Pour construire notre reporteur, nous allons créer un dossier `reporters` dans notre dossier `src` et y créer un fichier `json.ts` :

```bash
mkdir src/reporters
touch src/reporters/json.ts
```

Dans notre dossier `src`, créons un fichier `json.ts` qui va nous permettre d'utiliser notre reporteur.

Commençons par configurer notre instance de `Consola` pour déterminer comment nous allons utiliser notre reporteur :

```typescript [src/json.ts]
import { createConsola } from 'consola'

const consola = createConsola({
  reporters: [
    new JsonReporter()
  ]
})

consola.info('Hello World !')
```

Parfait ! Ainsi, nous voyons que pour créer notre reporteur, nous allons devoir créer une classe et l'importer dans notre fichier `src/json.ts`.

Dans notre fichier `src/reporters/json.ts`, nous allons pouvoir créer notre classe `JsonReporter` :

```typescript [src/reporters/json.ts]
import type { ConsolaReporter, LogObject } from 'consola'

export class JsonReporter implements ConsolaReporter {
  log(logObj: LogObject) {
    console.log(JSON.stringify(logObj))
  }
}
```

Le moyen le plus simple pour créer notre reporteur est d'implémenter l'interface `ConsolaReporter` qui nous permet de définir une méthode `log` qui sera appelée à chaque fois qu'un log sera effectué. Ainsi, toute notre logique sera dans cette méthode. Dans notre cas, nous souhaitons simplement afficher notre log en JSON.

Revenons dans notre fichier `src/json.ts` et importons notre reporteur :

```typescript [src/json.ts]
import { createConsola } from 'consola'
import { JsonReporter } from './reporters/json'

const consola = createConsola({
  reporters: [
    new JsonReporter(),
  ],
})

consola.info('Hello World!')
```

Avec la commande `jiti ./src/json.ts`, nous pouvons voir apparaître dans notre console :

```json [Sortie]
{"date":"2023-07-03T07:27:31.651Z","args":["Hello World!"],"type":"info","level":3,"tag":""}
```

### Notre reporteur Emoji

Avoir un reporter JSON, c'est bien mais avoir un reporteur Emoji, c'est beaucoup plus marrant ! Pour faire cela, nous allons suivre la même logique que pour notre reporteur JSON.

- Création d'un fichier `src/reporters/emoji.ts`
- Création d'une classe `EmojiReporter` implémentant `ConsolaReporter`
- Ajout de notre reporteur dans notre instance de `Consola` du fichier `src/emoji.ts`

```bash
touch src/reporters/emoji.ts
```

```typescript [src/reporters/emoji.ts]
import type { ConsolaReporter, LogObject, LogType } from 'consola'

const TYPE_ICONS: { [k in LogType]?: string } = {
  error: '❌',
  fatal: '❌',
  ready: '✅',
  warn: '⚠️',
  info: '✍️',
  success: '✅',
  debug: '⚙️',
  trace: '➡️',
  fail: '❌',
  start: '🟢',
  log: '',
}

export class EmojiReporter implements ConsolaReporter {
  log(logObj: LogObject) {
    const args = logObj.args
    const type = logObj.type

    const emoji = TYPE_ICONS[type] ?? ''

    console.log(emoji, ...args)
  }
}
```

```typescript [src/emoji.ts]
import { createConsola } from 'consola'

const consola = createConsola({
  reporters: [
    new EmojiReporter(),
  ],
})

consola.info('Hello World!')
consola.start('Start Hello World!')
consola.fail(new Error('Fail Hello World!'))
```

::alert{type="info"}
Ce reporteur est simplifié pour l'exemple. Il n'y a que très peu de limite dans la création du reporteur. Pour s'en rendre compte, il suffit de regarder les reporteurs fournis par `Consola` comme `basic` ou `fancy`.
::

## Prompts et boîtes

`Consola` est aussi capable d'afficher des prompts pour demander des informations à l'utilisateur et d'afficher des boîtes pour mettre en valeur des informations.

### Prompts

Pour utiliser les prompts, commençons par créer un fichier `src/prompt.ts` :

```bash
touch src/prompt.ts
```

```typescript [src/prompt.ts]
import { createConsola } from 'consola'

async function main() {
  const consola = createConsola()

  const name = await consola.prompt('What is your name?', {
    placeholder: 'John Doe',
    type: 'text',
  })

  consola.success(`Hello ${name}!`)
}

main()
```

Il est possible de créer différents types de prompts :

- `text`
- `confirm`
- `select`
- `multi-select`

Quelques exemples :

```typescript [src/prompt.ts]
import { createConsola } from 'consola'

async function main() {
  const consola = createConsola()

  const name = await consola.prompt('What is your name?', {
    placeholder: 'John Doe',
    type: 'text',
  })

  const isAdult = await consola.prompt('Are you an adult?', {
    type: 'confirm',
  })

  const favoriteColor = await consola.prompt('What is your favorite color?', {
    type: 'select',
    options: ['red', 'blue', 'green'],
    required: true,
  })

  const favoritePets = await consola.prompt('What are your favorite pets?', {
    type: 'multiselect',
    options: ['dog', 'cat', 'bird', 'fish'],
  })

  consola.success(`Hello ${name}!`)
  consola.success(`You are ${isAdult ? 'an adult' : 'not an adult'}!`)
  consola.success(`Your favorite color is ${favoriteColor}!`)
  consola.success(`Your favorite pets are ${favoritePets.join(', ')}!`)
}

main()
```

Et _voilà_ ! Nous avons maintenant un programme capable de demander des informations à l'utilisateur.

### Boîtes

Pour utiliser les boîtes, commençons par créer un fichier `src/box.ts` :

```bash
touch src/box.ts
```

```typescript [src/box.ts]
import { createConsola } from 'consola'

const consola = createConsola()

consola.box('Hello World!')
```

Sur notre console, nous pouvons voir :

```txt [Sortie]

 ╭────────────────╮
 │                │
 │  Hello World!  │
 │                │
 ╰────────────────╯

```

Cet boîte, il est possible de la personnaliser :

```typescript [src/box.ts]
import { createConsola } from 'consola'

const consola = createConsola()

consola.box({
  title: 'Hello World!',
  message: 'This is a box message',
  style: {
    borderColor: 'red',
    borderStyle: 'double',
    padding: 1,
    margin: 1,
  },
})
```

```txt

 ╔═════Hello World!════════╗
 ║                         ║
 ║  This is a box message  ║
 ║                         ║
 ╚═════════════════════════╝

```

::alert{type="info"}
Sur votre console, la boîte devrait avoir un contour rouge.
::

Et _voilà_ ! Nous avons maintenant un programme capable de mettre en valeur des informations.

## Allons plus loin

Dans le début de cet article, nous avons pu voir les bases de `Consola`, les fonctionnalités qui vont couvrir la plupart des usages. Cependant, `Consola` va bien plus loin et propose des fonctionnalités avancées.

### Redirections

`Consola` est en mesure de se substituer à `console` ou `stdout` permettant d'afficher ses logs via `Consola` sans forcément avoir à modifier son code.

```typescript [src/redirect.ts]
import { consola } from 'consola'

console.info('Hello World!') // Impression via console.info

consola.wrapConsole() // Redirection de console.info vers consola.info

console.info('Hello World!') // Impression via consola.info

consola.restoreConsole() // Restauration de console.info

console.info('Hello World!') // Impression via console.info
```

La différence entre `console` et `consola` est facile à détecter dans notre console grâce de par l'utilisation de la fonction `info`. En effet, `consola` préfixe message avec `ℹ️` alors que `console` ne le fait pas.

::alert{type="info"}
Comment `Consola` fait-il pour rediriger `console` ? Tout simplement en se substituant à `console`.

```typescript
import { consola } from 'consola'

function wrapConsole() {
  consola = consola
}
```

Dans les faits, c'est légèrement plus complexe étant donné que `Consola` sauvegarde `console` avant de se substituer. Cela permet de restaurer `console` à son état initial.
::

Il est possible de faire de même pour `stdout` :

- `consola.wrapStd()`
- `consola.restoreStd()`

Enfin, il est possible de faire `console` et `stdout` en même temps :

- `consola.wrapAll()`
- `consola.restoreAll()`

### Arrêts et reprises

Il est possible avec `Consola` de stopper l'impression des logs et de la reprendre plus tard. Les logs sont alors stockés dans une file d'attente.

Pour tester la fonctionnalité, commençons par créer un fichier `src/stop.ts` :

```bash
touch src/stop.ts
```

```typescript [src/stop.ts]
import { consola } from 'consola'

consola.start('Starting the application...')

consola.pauseLogs()

consola.info('This message will not be logged to the console before resumeLogs() is called')

console.log('This message will be logged to the console because it is not logged by consola')

consola.resumeLogs()

consola.success('This message will be logged to the console because resumeLogs() was called after messages between pauseLogs() and resumeLogs()')
```

Lorsque les messages en attente sont affichés dans la console, ils sont préfixés par une date afin de connaître la date réelle de création.

### Prévention du spam

`Consola` est en mesure de prévenir le spam de logs. Par défaut, il est configuré pour afficher au plus, 5 logs identiques en moins de 1 000 millisecondes.

Pour tester la fonctionnalité, commençons par créer un fichier `src/spam.ts` :

```bash
touch src/spam.ts
```

Ensuite, écrivons un petit bout de code permettant de simuler l'envoi de beaucoup de logs :

```typescript [src/spam.ts]
import { consola } from 'consola'

consola.start('Spam is coming...')

;(async () => {
  for (let i = 0; i < 1000; i++) {
    consola.info('Spam a lot of messages!')
    await new Promise(resolve => setTimeout(resolve, 10))
  }
  consola.success('Spam is over!')
})()
```

En sortie, nous pouvons observer :

```txt [Sortie]
◐ Spam is coming...
ℹ Spam a lot of messages!
ℹ Spam a lot of messages!
ℹ Spam a lot of messages!
ℹ Spam a lot of messages!
ℹ Spam a lot of messages!
ℹ Spam a lot of messages!
ℹ Spam a lot of messages! (repeated 994 times)
✔ Spam is over!
```

`Consola` n'imprime pas les 994 messages similaires puisque plus de 5 logs identiques ont déjà été imprimés en moins de 1000 millisecondes.

## Conclusion

`Consola` est un outil très puissant, beaucoup plus que le simple objet `console`, permettant de gérer les logs de son application. Il est très simple à utiliser et propose des fonctionnalités avancées permettant de l'ajuster parfaitement à ses besoins à la fois pour Node.js et le navigateur.

Aujourd'hui, `Consola` est utilisé dans :icon{name="nuxt"} [`Nuxt`](https://nuxt.com), dans les projets d'UnJS et bien d'autres !
