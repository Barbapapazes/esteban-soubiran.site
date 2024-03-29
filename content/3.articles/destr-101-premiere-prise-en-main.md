---
title: Destr 101 - Première prise en main
description: Découvrez Destr, l'alternative rapide, sécurisée et pratique à JSON.parse.
image: /assets/socials/destr-101-premiere-prise-en-main.jpg
cover:
  src: /assets/articles/destr-101-premiere-prise-en-main/cover.webp
  alt: Image d'illustration de l'article Destr 101 - Première prise en main
resources:
  - name: Code Source du Projet
    url: https://github.com/barbapapazes/destr-101-first-hand
    icon: i-simple-icons-github
  - name: Code Source de Destr
    url: https://github.com/unjs/destr
    icon: i-simple-icons-github
datePublished: 2023-07-12
dateModified: 2023-07-08
---

## Introduction

[`Destr`](https://github.com/unjs/destr) est un outil de l'écosystème [UnJS](https://unjs.io) qui permet de désérialiser des données JSON en JavaScript. Il se base sur `JSON.parse` en proposant un comportant plus prévisible et gérable lors d'un échec dans la désérialisation des données.

Retrouver le code source de cet article :git-hub-link{repo="barbapapazes/destr-101-first-hand"}

### UnJS, c'est Quoi ?

[UnJS](https://unjs.io), c'est un écosystème d'outils JavaScript. L'objectif est de fournir des outils qui ne font qu'une seule chose mais qui la font très bien et qui peuvent être combinés entre eux pour créer des outils plus complexes.

UnJS suit [la philosophie UNIX](http://www.catb.org/~esr/writings/taoup/html/ch01s06.html) : _"Faites une chose et faites le bien"_. Ainsi, la plupart des outils UnJS sont des outils avec très peu de fonctionnalités mais dont la force réside dans la modularité avec d'autres outils. À l'origine du projet, il y a [Pooya "Pi0" Parsa](https://github.com/pi0) développeur chez [NuxtLabs](https://github.com/nuxtlabs) et leader de :icon{name="nuxt"} [Nuxt] des premiers commits à son lancement officiel !

Chacun des projets est maintenu par son auteur et des mainteneurs désignés.

Pour en savoir plus, nous pouvons [lire leur gouvernance](https://github.com/unjs/governance).

## Installation

Pour commencer à jouer avec `destr`, il faut l'installer. Pour cela, commençons par initier un nouveau projet :

```bash
mkdir destr-101
cd destr-101
npm init -y
```

Ensuite, nous allons installer `destr` :

```bash
npm install destr
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

Qu'est-ce qui peut nous amener à créer un outil pour remplacer `JSON.parse` ? Quelles sont les limites de `JSON.parse` ? C'est les questions auxquelles nous allons répondre dans cette partie.

Avant tout, revenons sur ce qu'est `JSON.parse`. C'est une fonction native de JavaScript qui permet de désérialiser, c'est-à-dire de passer d'une chaîne de caractères à un objet, des données JSON en JavaScript. Elle prend en paramètre une chaîne de caractères et retourne un objet JavaScript. Voyons cela en action. Créons un fichier `simple-parse.ts` dans le dossier `src` et testons la fonction :

```typescript [simple-parse.ts]
console.log(JSON.parse('{"foo": "bar", "baz": 42}'))
```

::alert{type="info"}
Pour exécuter le fichier, nous pouvons utiliser `jiti` :

```bash
npx jiti src/simple-parse.ts
```

::

Nous obtenons le résultat suivant :

```sh [Résultat]
{ foo: 'bar', baz: 42 }
```

Pour autant, `JSON.parse` est loin d'être parfait. En effet, il existe de très nombreux cas où cette fonction peut donner du fil à retordre.

### Le Type Any

D'abord, `JSON.parse` retourne un type `any`. Cela signifie que la fonction retourne tout et n'importe quoi. Cela peut être un objet, un tableau, une chaîne de caractères, un nombre, etc. Généralement, c'est problématique pour le développeur. Ce typage `any` ne permet plus d'avoir d'auto-complétion ni de vérification de type lors du build de notre :icon{name="typescript"} TypeScript.

```typescript [any-type.ts]
const result = JSON.parse('{"foo": "bar", "baz": 42}')

console.log(result.doesNotExist)
```

Dans ce cas, aucune erreur n'est à déclarer. Pour autant, `result.doesNotExist` va nous retourner un `undefined` et non une erreur. Cela peut avoir des conséquences très lourdes dans notre application lors de son exécution, en production par exemple, alors qu'il s'agit d'une erreur simple à détecter lors du développement.

Pour régler ce problème nous pouvons utiliser le mot clé `as` pour typer notre variable :

```typescript [any-type.ts]
const result = JSON.parse('{"foo": "bar", "baz": 42}') as { foo: string; baz: number }

console.log(result.doesNotExist)
```

Maintenant, :icon{name="typescript"} TypeScript va nous signaler une erreur avant même l'exécution de notre code.

### Pollution du Prototype

Ensuite, `JSON.parse` peut polluer le prototype de l'objet retourné. Cela signifie que des propriétés et des méthodes peuvent être ajoutées à l'objet retourné par `JSON.parse` et ainsi modifier son comportement.

```typescript [prototype-pollution.ts]
const data = JSON.parse('{"foo": "bar", "baz": 42, "__proto__": { "isAdmin": "true" } }')

const user = Object.assign({}, data)

console.log(data)
console.log(data.isAdmin) // undefined
console.log(user)
console.log(user.isAdmin) // true
```

`JSON.parse` va retourner une clé `__proto__`, similaire à `foo` et `baz`, qui va contenir un objet n'ayant pas de risque direct. Cependant, lorsque l'objet est assigné à un autre objet via `Object.assign` pour faire une copy profonde, la clé `__proto__` va surcharger celle de l'objet de destination. Ainsi, `user` va avoir une clé `isAdmin` qui n'existe pas dans `data`. Dans notre cas, cela peut être problématique car nous avons un utilisateur qui a des droits d'administrateur alors qu'il ne devrait pas en avoir. Cette attaque est indirecte et peut être très difficile à détecter tout en étant très dangereuse pour notre application.

::alert{type="info"}
Pour en savoir plus, une [explication sur Stack Overflow](https://stackoverflow.com/questions/63926663/how-should-untrusted-json-be-sanitized-before-using-json-parse).
::

Pour gérer cette problématique, nous devons nous assurer de retirer les clés qui peuvent être problématique à chaque fois que nous utilisons `JSON.parse`.

### Erreur de Syntaxe

Le passage d'une chaîne de caractères à un objet :icon{name="javascript"} JavaScript est une opération qui intervient le plus souvent avec des données provenant de l'utilisateur. Or, l'utilisateur peut, volontairement ou non, faire des erreurs dans cette chaîne de caractères à désérialiser menant alors à des erreurs que nous devons gérer. Par exemple, que se passe-t-il si l'utilisateur envoie une chaîne de caractères qui n'est pas un JSON valide ?

```typescript [syntax-error.ts]
JSON.parse('{"foo": "bar", "baz": 42') // Nous pouvons remarquer qu'il manque un } à la fin
```

Nous obtenons l'erreur suivante :

```bash [Résultat]
SyntaxError: Unexpected end of JSON input
```

Ainsi, nous allons devoir gérer cette erreur avec un `try/catch` pour éviter que notre application plante. Cela peut être problématique car nous allons devoir gérer cette erreur à chaque fois que nous utilisons `JSON.parse`.

## La solution Destr

`Destr`, c'est un moyen de résoudre l'ensemble de ces problématiques en une fois. En effet, `destr` gère :

- Retourne `unknown` et non `any` par défaut
- Est typable facilement grâce à un générique
- Retourne la valeur originale si elle n'est pas un JSON valide
- Retire les clés problématiques du prototype
- Est capable de gérer les chaînes de caractères connues

Pour observer cela, créons un fichier `destr.ts` dans notre dossier `src` :

```typescript [destr.ts]
import { destr } from 'destr'

const unknownResult = destr('{"foo": "bar", "baz": 42}') // Retourne un type unknown

interface Result {
  foo: string
  baz: number
}

const typedResult = destr<Result>('{"foo": "bar", "baz": 42}') // Retourne un type Result

const invalidResult = destr('{"foo": "bar", "baz": 42') // Retourne la valeur originale
console.log(invalidResult) // {"foo": "bar", "baz": 42

const prototypePollutionResult = destr('{"foo": "bar", "baz": 42, "__proto__": { "isAdmin": "true" } }')
console.log(prototypePollutionResult) // {"foo": "bar", "baz": 42}

const knownString = destr('TRUE')
console.log(knownString) // true
```

Finalement, c'est très simple d'utiliser `destr` et cela nous permet de résoudre l'ensemble des problématiques que nous avons pu découvrir d'une manière simple et élégante.

::alert{type="info"}
`Destr` vient aussi un une méthode `safeDestr` qui va soulever une erreur lorsque le JSON n'est pas valide.

```typescript [safe-destr.ts]
import { safeDestr } from 'destr'

const invalidResult = safeDestr('{"foo": "bar", "baz": 42') // Retourne une erreur
```

::

### Performance

Sous le capot, `destr` utilise `JSON.parse` pour faire le gros du travail. Ainsi, `destr` se position comme un wrapper résolvant l'ensemble des problématiques que nous avons pu découvrir.

De fait, `destr` est plus lent que `JSON.parse` sur des opérations où le JSON est valide. Pour autant, `destr` reste très performant et **évite la pollution du prototype** qui peut mener à de sérieux risques de sécurité. Ainsi, `destr` se montre bien meilleur lors que les données ne sont pas des chaînes de caractères JSON ou que le JSON provient d'une source externe comme le corps d'une requête HTTP.

::alert{type="info"}
Pour en savoir plus, `destr` a réalisé [un benchmark](https://github.com/unjs/destr#benchmarks).
::

## Conclusion

`Destr` est un outil très simple, léger et qui se positionne comme un remplaçant de `JSON.parse`. En effet, cet utilitaire résout bon nombre de problématique, est sécurisé tout en restant rapide.

Pensons à utiliser `destr` à la place de `JSON.parse` dans nos prochains projets :wink:.
