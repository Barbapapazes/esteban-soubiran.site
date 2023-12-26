---
title: Nuxt 3 et le full-stack sur l'edge
description: État de l'art de Nuxt 3 et du full-stack sur l'edge en 2023
image: /assets/socials/index.png
cover:
  src:
  alt:
datePublished: 2023-10-06
dateModified: 2023-10-06
layout: article
---

_J'aime Nuxt, et cet article se veut être un **état de l'art**. Il se veut constructif et bienveillant. Devenir grand prend du temps et ce qui a été accompli ces dernières années est déjà merveilleux !_ 💛

Nuxt, Next, Remix, SvelteKit ou même Solid Start ont un point commun. Après avoir conquis le front-end, ils s'attaquent à la partie back-end du web et tentent de devenir de véritables frameworks full-stack. Mais qu'en est-il aujourd'hui et où en sont-ils par rapport aux frameworks full-stack déjà présents, comme Adonis, Laravel ou Rails, originellement plus axés sur le back-end que le front-end et matures.

::alert{type="info"}
Avec cet article, nous allons prendre l'exemple de Nuxt. Cependant, les autres frameworks cités sont dans la même situation et les conclusions de cet article sont valables pour eux.
::

Avant même de discuter de l'état de Nuxt sur son chemin vers le full-stack, il est important de bien comprendre ce qu'est une application full-stack et les implications de cette appellation.

## Une Application Full-Stack

Il existe plusieurs définitions du full-stack.

En prenant la [définition de développeur full-stack de Wikipédia](https://fr.wikipedia.org/wiki/D%C3%A9veloppeur_full_stack), cela fait référence à un développeur capable de tout faire, des interactions clientes, au développement du logiciel à la configuration de l'infrastructure. C'est une définition qui est très large et qui ne nous intéresse pas ici, d'autant qu'elle fait référence à un développeur et non à un framework.

En cadrant la définition à un framework, nous pouvons considérer le full-stack comme étant le fait de s'occuper à la fois du front-end et du back-end de l'application. C'est-à-dire qu'avec le même outil, il nous est possible de réaliser la présentation des données à l'utilisateur tout en interagissant avec la base de données, au moins d'une API ou non. C'est ce que permettent des outils comme [:icon{name="laravel"} Laravel](https://laravel.com), [:icon{name="rails"} Ruby on Rails](https://rubyonrails.org/) ou [:icon{name="adonisjs"} AdonisJS](https://adonisjs.com).

Concrètement, il est possible de réaliser une application avec un seul et même outil, de la gestion des tables de la base de données à la présentation des données à l'utilisateur, en passant par la validation des données des formulaires, la gestion des sessions, des fichiers, de l'authentification, des autorisations, de l'internationalisation, etc.

Cependant, mettre en production une telle application n'est pas si simple, puisqu'il faut avoir un serveur, le payer, le provisionner avec les bons outils, comme Nginx, Fail2ban, Redis et une base de données SQL, pour le bon fonctionnement de l'application et de l'infrastructure et mettre en place les pipelines de déploiement. C'est une tâche qui peut être très complexe, qui nécessite des compétences spécifiques et qui demande du temps. Ce temps utilisé à mettre en production l'application n'est pas celui utilisé pour **produire de la valeur pour l'utilisateur**.

## Les Changements Depuis Nuxt 2

Cet article n'aurait pas été possible, ou n'aurait eu que peu d'intérêt, il y a encore quelques années, avant le **lancement de Nuxt 3** et l'arrivée des **edge functions**.

### Nuxt 2

Jusqu'à sa version 2, Nuxt ne permettait pas d'interagir facilement avec un serveur et une base de données. Pour utiliser le serveur, il fallait mettre en place un ["server middleware"](https://v2.nuxt.com/docs/configuration-glossary/configuration-servermiddleware). Par conséquent, la réalisation d'applications full-stack était extrêmement limitée.

En 2014, AWS popularise l'idée de "serverless functions" avec [AWS Lambda](https://aws.amazon.com/pm/lambda/) permettant de s'abstraire de l'infrastructure et de ne payer que pour l'usage. Le concept est séduisant, mais [les désavantages sont nombreux](https://en.wikipedia.org/wiki/Serverless_computing#Disadvantages).

À partir de 2016, le mot [Jamstack gagne en popularité](https://jamstack.org/) grâce à Matt Biilmann, créateur de Netlify, et cela change la manière de voir le web. Principalement, l'une des idées est de penser statiquement pour pouvoir stocker son site sur des CDN pour de meilleures performances, une meilleure sécurité, une amélioration de l'expérience développeur et des coûts réduits.

::alert{type="info"}
Pour en savoir plus sur la Jamstack, consultez [jamstack.wtf](https://jamstack.wtf/).
::

### L'Edge

En mars 2018, [Cloudflare annonce ses Workers](https://blog.cloudflare.com/introducing-cloudflare-workers/) permettant d'exécuter du code sur son CDN. C'est une révolution puisque cela permet de faire du serverless au plus proche des clients sans les désavantages des "serverless functions". Ainsi, le CDN n'est plus limité aux fichiers statiques tout en conservant les avantages de la Jamstack, à savoir le déploiement simplifié, les performances, la sécurité et les coûts réduits.

::detail{title="Serverless function vs Edge function"}
Une "edge function" est une "serverless function" puisqu'elle s'exécute sur un serveur géré par un tiers et est déclenchée par une requête HTTP.

Une "edge function" a l'avantage d'avoir [un démarrage à froid presque instantané, de l'ordre de la milliseconde](https://mikhail.io/serverless/coldstarts/big3/) par rapport à une "serverless function". De plus, elle s'exécute au plus proche du client, ce qui permet d'obtenir des temps de réponse très faibles.

Cependant, une "edge function" ne peut pas faire plus de 1MB, "node_modules" inclus, ce qui est très limité et demande une certaine rigueur dans le code qui est écrit. De plus, les API disponibles au sein des "edge functions" sont limitées, ce qui nécessite souvent l'écriture de code spécifique.

Une "edge function" est lié à un fournisseur, ce qui rend difficile la migration vers un autre fournisseur et ne peux durer plus que quelques dizaines de millisecondes.

Ainsi, l'adoption des "edge functions" sans être verrouillé est complexe.
::

Ensuite, Netlify a annoncé ses [serverless functions en avril 2021](https://www.netlify.com/blog/2021/04/19/announcing-native-typescript-support-for-netlify-functions/) et ses [edge functions en avril 2022](https://www.netlify.com/blog/announcing-serverless-compute-with-edge-functions/). Vercel a annoncé ses [edge functions en décembre 2022](https://vercel.com/blog/edge-functions-generally-available).

Ainsi, l'arrivée des "edge functions" simplifie la gestion de l'infrastructure et donne un argument aux frameworks front-end pour se lancer dans le full-stack, tout en ayant un avantage vis-à-vis des frameworks back-end.

Cependant, comme nous le verrons, il reste encore beaucoup de chemin à parcourir pour que Nuxt soit un framework full-stack.

### Nuxt 3

En novembre 2022, [Nuxt 3 a été annoncé](https://nuxt.com/blog/v3) et avec lui, l'arrivée de [Nitro](https://github.com/unjs/nitro). Nuxt 3 change la donne en permettant de créer facilement une partie serveur au sein de son projet, tout en pouvant ensuite déployer son application n'importe où, y compris [sur l'edge](https://nuxt.com/blog/nuxt-on-the-edge), sans rien changer à son code. C'est une révolution.

Nitro est un framework pour créer des serveurs web. Il a la particularité d'avoir un certain nombre de presets qui lui permettent de s'adapter à différents environnements. Par exemple, il existe un preset pour déployer son application sur Cloudflare Workers, un autre pour déployer son application sur Vercel, un autre pour déployer son application sur Netlify, sur Node.js, sur Bun, etc.

Pouvoir déployer son application Nuxt 3 sur l'Edge est un bon début, mais sans une base de données, cela reste limité pour créer des applications full-stack.

### Les Edge Databases

L'histoire continue, et en novembre 2022, Cloudflare a annoncé [D1](https://blog.cloudflare.com/introducing-d1/), une base de données SQLite distribuée sur son CDN. En décembre 2022, Neon a annoncé une base de données [PostgreSQL serverless](https://neon.tech/blog/neon-serverless-postgres-is-live). En janvier 2023, Turso a annoncé [Chiselstrike](https://blog.turso.tech/announcing-chiselstrike-turso-164472456b29), une base de données distribuée et serverless. Ainsi, il est devenu possible de déployer une base de données sur l'Edge et donc de conserver des temps de réponse très faibles et un coût réduit.

De plus en plus, le rêve de pouvoir construire une application full-stack avec Nuxt commence à devenir une réalité.

## Prenons un Exemple

Pour comprendre cet état de l'art, nous allons prendre un exemple concret d'une application full-stack, dont le code source est disponible sur :github-link{name="barbapapazes/s.esteban-soubiran.site"}, et qui nous servira de fil rouge.

Nous sommes un développeur web et nous souhaitons créer une application permettant de raccourcir une URL en utilisant un mot personnalisé. Via un formulaire sur une interface web, il serait possible de définir une clé associée à une URL. En partageant une URL avec cette clé, l'utilisateur sera redirigé vers l'URL associée. Par exemple, notre application pourrait être sur le domaine https://s.example.com. Nous associons le mot "unjs" à l'URL https://unjs.io et lorsque l'utilisateur se rend sur l'URL https://s.example.com/r/unjs, il est redirigé vers https://unjs.io. Ce système permettrait de compter le nombre d'utilisations de l'URL et la provenance de ces derniers.

Pour mener à bien cet exemple, creusons un peu plus la technique nécessaire. Dans un premier temps, il va nous falloir une base de données pour stocker les mots-clés associés aux URLs et l'activité sur chacun de ces URLs. Ensuite, nous allons avoir besoin d'un moyen pour valider les données transmises par le formulaire au serveur. Nous allons devoir vérifier la présence du mot-clé et de l'URL, que l'URL est bien une URL, et que le mot-clé n'est pas déjà utilisé. Enfin, nous allons devoir protéger l'interface d'administration pour éviter à n'importe qui de pouvoir créer ou supprimer des mots-clés et des URLs associées.

Pour la stack, nous allons utiliser Nuxt 3 et déployer l'application avec Cloudflare Pages et D1.

Cette application est très facilement réalisable avec un framework comme Adonis, mais qu'en est-il avec Nuxt ?

## Nuxt 3 et le Full-Stack

Pour bien comprendre où nous en sommes, nous allons découper notre exemple en plusieurs parties.

### L'Interface Utilisateur

La première partie de notre application est l'interface utilisateur. C'est la partie qui va permettre à l'utilisateur de créer un mot-clé et de le partager. C'est la partie qui va permettre de rediriger l'utilisateur vers l'URL associée au mot-clé. Là, rien à dire, c'est faisable sans trop de difficulté et je dirais même que c'est plus simple avec Nuxt qu'avec AdonisJS grâce aux bibliothèques de composants comme [Nuxt UI](https://ui.nuxt.com).

Pour autant, nous allons voir par la suite que la remontée des problèmes de validation des données va être plus complexe avec Nuxt qu'avec Adonis.

### La Base de Données

Pour la base de données de production, nous avons choisi D1. En développement, nous allons devoir trouver une alternative locale. Pour cela, nous allons utiliser SQLite puisque c'est là-dessus que D1 est basé.

Notre code, nous le voulons agnostique de l'environnement. C'est-à-dire qu'il doit fonctionner de la même manière en développement qu'en production. Pour cela, nous allons utiliser [Drizzle ORM](https://orm.drizzle.team/) qui fonctionne sur l'edge et a un adaptateur pour D1 et SQLite (grâce à `better-sqlite`).

La configuration de Drizzle n'est pas très complexe, mais elle demande du temps et n'est, pour le moment, pas du tout intégrée à Nitro. Il faut donc trouver le moyen de lier Drizzle à Nitro.

#### Les Migrations

Pour créer les tables de la base de données, nous devons écrire un schéma en TS et faire tourner Drizzle Kit pour générer les migrations.

```ts [server/db/schema.ts]
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const redirects = sqliteTable('redirects', {
  id: integer('id').primaryKey(),
  name: text('name').notNull().unique(),
  url: text('url').notNull(),
})
```

Puis `drizzle-kit generate:sqlite` pour générer le fichier SQL de la migration.

```sql [server/db/migrations/0000_create_redirects_table.sql]
CREATE TABLE `redirects` (
  `id` integer PRIMARY KEY NOT NULL,
  `name` text NOT NULL,
  `url` text NOT NULL
);
```

Cette étape nous montre que nous n'avons pas la main sur la migration des données. Pour une action simple comme renommer une colonne, il suffit de changer le nom de la colonne dans le schéma, et Drizzle Kit le détectera. Pour une action plus complexe comme la création d'une nouvelle table puis la migration des données de l'ancienne à la nouvelle et la modification de la structure de l'ancienne table, là, rien n'est évident et rien n'est expliqué à ce sujet dans la documentation de Drizzle.

Pourtant, c'est une action assez courante dans le développement et l'évolution d'une application. Je pense que c'est un point important, surtout qu'en déployant dans l'edge, il est question de déployer rapidement et fréquemment. Si la base de données devient une contrainte au bout du second déploiement parce qu'il y a besoin de mettre à jour le schéma, c'est un vrai problème pour faire du full-stack dans l'Edge.

Avec une application Adonis, nous avons la main sur l'ensemble des migrations. Cela nous permet de faire ce que nous voulons de la base de données, d'un simple renommage à une migration bien plus complexe.

Ce problème n'est pas directement lié à Nuxt mais à Drizzle. Pour autant, cela ne change rien à la conclusion. Il est difficile de gérer une base de données avec Nuxt.

::alert{type="info"}
Ce problème est valable pour les autres frameworks front-end.
::

### La Validation des Données

Depuis la version 1.8 de h3, le serveur web qui propulse Nitro, deux nouvelles fonctions permettent de valider plus simplement les données transmises par les formulaires, `getValidatedQuery` et `readValidatedBody`. Malheureusement, il faut passer par un outil externe comme `zod`.

```ts [server/api/index.post.ts]
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, z.object({
    name: z.string().min(3).max(20),
    url: z.string().url(),
  }).parse)

  // ... stockage dans la base de données
})
```

La conséquence de cela, c'est une mauvaise intégration et gestion des erreurs renvoyées au client. Supposons que l'utilisateur envoie au serveur un nom mais pas d'URL. Une erreur est levée et sa réponse est la suivante :

```json
{
  "message": "[\n  {\n    \"code\": \"invalid_type\",\n    \"expected\": \"string\",\n    \"received\": \"undefined\",\n    \"path\": [\n      \"url\"\n    ],\n    \"message\": \"Required\"\n  }\n]",
  "statusCode": 400,
  "statusMessage": "",
  "url": "/api/redirects"
}
```

Le client peut alors faire un traitement pour afficher le bon message d'erreur, mais rien n'est prévu pour cela. Je vais devoir créer moi-même un système de gestion des erreurs pour afficher le bon message d'erreur à l'utilisateur sur le bon champ du formulaire. De plus, si je veux personnaliser le message renvoyé par le serveur, je vais devoir réécrire une bonne partie de la gestion des erreurs.

### L'Authentification

~~Sur cette section, rien n'est prévu ni par Nuxt ni par Nitro pour gérer ses utilisateurs manuellement, et il faudrait donc soit écrire manuellement un système d'authentification, soit utiliser un système d'OAuth avec un fournisseur comme Google ou GitHub. C'est un travail qui peut être long et complexe.~~

~~Heureusement, il existe de plus en plus d'exemples, comme la [nuxt-todo-edge](https://github.com/atinux/nuxt-todo-edge) de Sébastien Chopin, qui permettent de s'inspirer et de gagner du temps.~~

Depuis l'écriture de cet article, Sébastien Chopin a créé un module [nuxt-auth-utils](https://github.com/atinux/nuxt-auth-utils) qui permet de gérer l'authentification avec Nitro avec un cookie ou un provider tier. C'est une excellente nouvelle.

Il est aussi possible d'utiliser des solutions comme [authjs-nuxt](https://github.com/Hebilicious/authjs-nuxt) ou [Clerk](https://clerk.com/) pour gérer l'authentification.

### La Mise en Production

Mettre en production une application Nuxt sur Cloudflare Pages, c'est simple. Rien à redire là-dessus.

Pour la migration de la base de données, il est possible de fournir le fichier SQL à Wrangler. Si le fichier `wrangler.toml` est bien configuré, il s'occupera de la migration. C'est simple et efficace mais cela nécessitera une adaptation pour chaque base de données. De plus, Wrangler n'est pas encore très flexible pour gérer les migrations de données et D1 ne fournit pas beaucoup d'API pour se passer de Wrangler.

Une fois de plus, le problème n'est pas directement lié à Nuxt mais à Cloudflare D1. Cela complique la mise en production d'une application full-stack. Avec une application Adonis, les migrations tournent à chaque déploiement.

## Conclusion

Aujourd'hui, construire une application grâce à Nuxt en récupérant des données depuis une API existante et accessible est tout à fait possible. Il suffit de regarder [Volta](https://volta.net) ou [Studio](https://nuxt.studio) pour s'en rendre compte ! De plus, l'utilisation du côté serveur de Nuxt permet de nouveaux usages comme [Content](https://content.nuxt.com) et simplifie des usages existants tels que la connexion à des API tierces ou la création de sitemaps, de flux RSS ou d'images open-graph au moment de la construction.

En revanche, construire une application full-stack avec Nuxt est bien plus complexe. Rappelons tout de même que Nuxt 3 et l'écosystème qui l'entoure sont encore très jeunes. Je pense qu'il est important de faire un point sur l'état des choses pour comprendre où nous en sommes et ce qu'il reste à faire pour arriver au point tant attendu où nous pourrons créer des applications full-stack avec Nuxt.

Il existe d'autres fonctionnalités, non évoquées ci-dessus, qui font que Nuxt n'est pas encore un framework full-stack. Par exemple, la gestion de l'upload d'un fichier depuis Nuxt vers Nitro pour le stocker ensuite dans un bucket (S3, R2, etc.), la gestion des sessions des utilisateurs, l'envoi de courriers électroniques, l'autorisation, la limitation des requêtes, ou même l'ensemencement de la base de données en développement ne sont pas natifs ni prévus par Nuxt ou un outil externe.

Si je suis si critique, c'est parce que j'attends d'un framework full-stack comme Nuxt qu'il me permette de me concentrer sur la logique métier et la création de valeur pour mes utilisateurs, et non sur la gestion et l'intégration d'outils.

Pour répondre à la question du début, non, il n'est pas possible selon moi de créer des applications full-stack avec Nuxt. Pour autant, je suis convaincu que cela sera possible dans les années à venir. Il reste encore beaucoup de chemin à parcourir, mais je suis confiant. Nuxt est un projet ambitieux, et je suis sûr que l'équipe derrière va nous surprendre. Il suffit de voir les présentations de Sébastien Chopin, [Vue to the Edge](https://www.vuemastery.com/conferences/vueconf-us-2023/vue-to-the-edge/) et Pooya Parsa, [State of Nitro 2023](https://youtu.be/veCxKeLl35A?si=bBRTnaMzsdIEO9nb&t=11254), pour comprendre que Nuxt est sur la bonne voie.

Pour tout le reste, **Nuxt reste excellent** et c'est un plaisir de l'utiliser tous les jours.
