---
title: RC9 101 - Première prise en main
description: Découvrez RC9, l'utilitaire pour attribuer des propriétés de manière récursive à des objects JavaScript.
image: /assets/socials/rc9-101-premiere-prise-en-main.jpg
cover:
  src: /assets/articles/rc9-101-premiere-prise-en-main/cover.webp
  alt: Image d'illustration de l'article RC9 101 - Première prise en main
resources:
  - name: Code Source du Projet
    url: https://github.com/barbapapazes/rc9-101-first-hand
    icon: i-simple-icons-github
  - name: Code Source de rc9
    url: https://github.com/unjs/rc9
    icon: i-simple-icons-github
datePublished: 2023-07-04
dateModified: 2023-07-04
---

## Introduction

[`RC9`](https://github.com/unjs/rc9) est un utilitaire pour lire et écrire des fichiers de configuration (`rc` pour `run commands`) localement ou globalement.

Un `run command` est un fichier de configuration qui est lu par un programme pour définir son comportement. Par exemple, `npm` utilise un fichier `.npmrc` pour définir des options de configuration.

Il fait parti de l'écosystème UnJS.

Retrouver le code source de cet article :git-hub-link{repo="barbapapazes/rc9-101-first-hand"}

### UnJS, c'est Quoi ?

[UnJS](https://unjs.io), c'est un écosystème d'outils JavaScript. L'objectif est de fournir des outils qui ne font qu'une seule chose mais qui la font très bien et qui peuvent être combinés entre eux pour créer des outils plus complexes.

UnJS suit [la philosophie UNIX](http://www.catb.org/~esr/writings/taoup/html/ch01s06.html) : _"Faites une chose et faites le bien"_. Ainsi, la plupart des outils UnJS sont des outils avec très peu de fonctionnalités mais dont la force réside dans la modularité avec d'autres outils. À l'origine du projet, il y a [Pooya "Pi0" Parsa](https://github.com/pi0) développeur chez [NuxtLabs](https://github.com/nuxtlabs) et leader de :icon{name="nuxt"} [Nuxt] des premiers commits à son lancement officiel !

Chacun des projets est maintenu par son auteur et des mainteneurs désignés.

Pour en savoir plus, nous pouvons [lire leur gouvernance](https://github.com/unjs/governance).

## Installation

Pour commencer à jouer avec `RC9`, nous devons commencer par initier un nouveau projet. Pour cela, commençons par créer un nouveau dossier et initialisons un nouveau projet `npm` :

```bash
mkdir rc9-101
cd rc9-101
npm init -y
```

Ensuite, nous pouvons installer `RC9` :

```bash
npm install rc9
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

Comment écrire ou même lire simplement et efficacement un fichier de configuration `rc` local ou global ?

C'est la question à laquelle `RC9` répond. Ce besoin est important notamment lorsque nous développons des outils en ligne de commande. Prenons `nuxt` par exemple, il est possible de le configurer globalement via un fichier `.nuxtrc` pour définir des options par défaut sur l'ensemble des projets de sa machine. Ainsi, il est possible d'ajouter des modules par défaut, des options de build, etc... sans avoir à le faire dans chaque projet individuellement. Il est aussi possible de définir des options de configuration par projet via un fichier `.nuxtrc` à la racine du projet. Dans ce cas là, les options définies dans le fichier local écraseront les options définies dans le fichier global. Ce cas est pratique lorsque nous avons besoin de changer des options du projet dans toucher directement le code du projet, dans le cadre d'un serveur de production par exemple.

## La Solution RC9

Ainsi, `RC9` permet de répondre à cette problématique d'une manière simple et élégante.

### Lire la Configuration Locale

Commençons par la base. Lisons un fichier `.conf` dans notre répertoire courant. Pour cela, créons un fichier `.conf` à la racine de notre projet :

```bash
touch .conf
```

Ensuite, nous allons y écrire une configuration :

```ini [.conf]
port=3000
version=1.0.0
name=rc9-101
```

::alert{type="info"}
Par défaut, `RC9` lit les fichiers nommés `.conf`. Il est possible de changer ce comportement via un paramètre sur l'ensemble des fonctions que nous allons découvrir dans la suite.
::

Dans un fichier `read-local.ts` dans le dossier `src`, nous allons écrire le code suivant :

```typescript [read-local.ts]
import { read } from 'rc9'

const config = read()

console.log(config)
```

::alert{type="info"}
Pour l'exécution de ce fichier, nous pouvons utiliser la commande suivante :

```bash
jiti src/read-local.ts
```

::

Dans notre console, nous voyons le résultat suivant :

```sh [Résultat]
{ port: 3000, version: '1.0.0', name: 'rc9-101' }
```

Nous pouvons constater que `RC9` a bien lu notre fichier `.conf` et a parsé son contenu pour nous fournir un objet :icon{name="javascript"} JavaScript où les nombres ont bien été convertis.

Pour faire cette conversion, `RC9` utilise [destr](https://github.com/unjs/destr)

<!-- :another-article{name="destr-101-premiere-prise-en-main"} -->

### Utiliser la Configuration

Maintenant que nous avons pu extraire et parser notre configuration, il est temps de s'en servir. Mais nous avons un problème. L'objet `config` est du type `RC` équivalent à `Record<string, any>`. Ainsi, nous n'avons pas d'information sur les propriétés de notre objet.

Pour résoudre ça, nous pouvons créer notre propre type :

```typescript [read-local.ts]
// ...

interface Config = {
  port: number
  version: string
  name: string
}

const config = read<Config>()

// ...
```

Désormais, notre objet `config` est correctement typé et plus simple à utiliser.

::alert{type="warning"}
:warning: Le type ne vérifie pas notre configuration. Si nous retirons une propriété de notre fichier `.conf`, le type ne nous avertira pas.

Pour s'assurer que notre configuration contient bien toutes les propriétés attendues, il est possible d'utiliser une solution comme [`zod`](https://zod.dev/).
::

### Configuration Avancée

Avec `RC9`, il est possible d'utiliser des tableaux et des objets dans notre fichier de configuration. Pour tester cela, nous allons devoir le modifier :

```ini [.conf]
port=3000
version=1.0.0
name=rc9-101
author.firstName=Estéban
author.lastName=Soubiran
author.socials.0.name=twitter
author.socials.0.url=https://twitter.com/soubiran_
author.socials.1.name=github
author.socials.1.url=https://github.com/barbapapazes
```

Relançons notre script `read-local.ts` et admirons le résultat :heart_eyes: :

```sh [Résultat]
{
  port: 3000,
  version: '1.0.0',
  name: 'rc9-101',
  author: {
    firstName: 'Estéban',
    lastName: 'Soubiran',
    socials: [
      { name: 'twitter', url: 'https://twitter.com/soubiran_' },
      { name: 'github', url: 'https://github.com/barbapapazes' }
    ]
  }
}
```

::alert{type="info"}
Pour afficher l'ensemble de l'objet dans la console, nous pouvons changer le `console.log(config)` par `console.dir(config, { depth: null })`.
::

### Écrire la Configuration Locale

Il peut aussi être utile d'écrire une configuration voulue par l'utilisateur dans un fichier. Pour cela, `RC9` nous fournit la fonction `write`. Pour l'exemple, nous allons écrire une petite configuration.

Créons un fichier `write-local.ts` dans le dossier `src` :

```typescript [write-local.ts]
import { write } from 'rc9'

const config = {
  port: 5678,
  version: '3.0.0-beta.1',
  keywords: ['rc9', 'config', 'rc'],
}

write(config, 'write.conf') // Pour changer, nous allons écrire notre configuration dans un autre fichier.
```

Après exécution du fichier, nous verrons alors apparaître un fichier `write.conf` à la racine de notre projet :

```ini [write.conf]
port=5678
version=3.0.0-beta.1
keywords.0=rc9
keywords.1=config
keywords.2=rc
```

Simple :muscle: !

::alert{type="info"}
Pour lire le fichier, il suffit de reprendre l'étape précédente et de changer le nom du fichier : `read('write.conf')`.
::

### Écrire la Configuration Globale

Créer une configuration locale pour un projet, c'est déjà bien ! Mais parfois, lorsque que l'outil peut être utilisé depuis plusieurs endroits sur la machine, il peut être intéressant de créer une configuration globale.

Imaginons un CLI qui met en place de la télémétrie pour connaître l'usage des utilisateurs. Pour activer ou désactiver la télémétrie, créer un fichier de configuration dans l'ensemble des dossiers de l'ordinateur n'est pas une bonne idée puisque longue et polluante car les fichiers vont être très redondants. Ainsi, il est préférable de créer un fichier de configuration global sur la machine de l'utilisateur qui peut être lu depuis n'importe où.

La configuration globale est stocké dans le `user home directory` de l'utilisateur. Pour le trouver, il suffit de faire `console.log(os.homedir())`.

::alert{type="info"}
En fonction des OS, la localisation de ce dossier peut changer :

- Windows : `C:\Users\<user>`
- Linux : `/home/<user>`
- macOS : `/Users/<user>`
::

Pour tester ce comportement, nous allons créer un fichier `write-user.ts` dans le dossier `src` :

```typescript [write-user.ts]
import { writeUser } from 'rc9'

const config = {
  telemetry: true,
}

writeUser(config, 'rc9-101.conf') // Afin de s'assurer de ne pas ré-écrire une configuration déjà existant sur la machine, il est recommandé de changer le nom par défaut du fichier.
```

Après l'exécution du script, nous voyons apparaître un fichier `rc9-101.conf` dans notre `user home directory` :

```ini [rc9-101.conf]
telemetry=true
```

### Lire la Configuration Globale

Pour faire cela, c'est exactement comme pour lire une configuration locale sauf qu'il faut utiliser la fonction `readUser` :

```typescript [read-user.ts]
import { readUser } from 'rc9'

const config = readUser('rc9-101.conf') // Afin de s'assurer de ne pas ré-écrire une configuration déjà existant sur la machine, il est recommandé de changer le nom par défaut du fichier.

console.log(config)
```

Dans notre console, nous obtiendrons :

```sh [Résultat]
{ telemetry: true }
```

::alert{type="info"}
Le boolean a bien été parsé en tant que boolean et non en tant que string.
::

### Mettre à Jour une Configuration

Tant la configuration locale que pour cette de l'utilisateur, il est possible de la mettre à jour sans avoir à la lire et la ré-écrire. Pour cela, il suffit d'utiliser les fonctions `update` et `updateUser`.

Pour tester la fonction `update`, nous allons créer un fichier `update-local.ts` dans le dossier `src` :

```typescript [update-local.ts]
import { update } from 'rc9'

update({ author: { firstName: 'John' } })
```

Pour mettre à jour, `RC9` utilise le package [`Defu`](https://github.com/unjs/defu).

:another-article{name="defu-101-premiere-prise-en-main"}

Pour mettre à jour la configuration globale, nous allons créer un fichier `update-user.ts` dans le dossier `src` :

```typescript [update-user.ts]
import { updateUser } from 'rc9'

updateUser({ telemetry: false }, 'rc9-101.conf')
```

Et _voilà_, nous avons mis à jour notre configuration globale !

## Conclusion

Dans cette article, nous avons vu commencer manipuler des fichiers de configuration avec `RC9`. Nous avons vu comment lire, écrire et mettre à jour une configuration locale et globale de manière simple et ergonomique.
