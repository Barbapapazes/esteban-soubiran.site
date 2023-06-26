---
title: Créer un nouveau site campus
description: Pour la rentrée scolaire, j'ai eu l'opportunité de mettre à jour le site campus de mon école. Cela est passé par le contact des associations et le développement d'un nouveau site.
image: /assets/socials/index.png
cover:
  src: /images/projects/campus_new-website.webp
  alt: Capture d'écran du nouveau site campus. On peut y voir un titre "#campus INSA CVL".
datePublished: 2020-09-01
dateModified: 2020-11-05
layout: project
---

## Contexte

Depuis plusieurs années, l'ancien site campus n'était plus maintenu et plus à jour. Pourtant, c'est un site majeur pour la vie associative de l'école. En effet, il permet de présenter les associations aux nouveaux arrivants pour les aider à s'investir ! Pour les associations, c'est une opportunité de se faire connaître et d'avoir une place sur internet.

## Site campus

Le précédent site campus était un agrégat de différents site WordPress. Ainsi, il était devenu difficile de les gérer mais surtout, les mots de passe n'étaient pas transmis. Ainsi personne n'avait plus accès aux sites ! C'est aussi pour cela que le site n'était plus à jour. Mais c'est important de le noter pour comprendre la suite.

### Réalisation

La première question que j'ai du me poser est de savoir comment j'allais réaliser ce nouveau site. En effet, je suis encore débutant dans plein de domaines. Mais la plus grandes contraintes est le temps.

En effet, j'ai réalisé ce site durant les grandes vacances, c'est à dire que j'avais 7 semaines pour la réalisation. Évaluer le besoin en contactant les associations, développer le site, le faire valider par le bureau des élèves, le mettre en ligne et ajouter le contenu en contactant à nouveau l'ensemble des associations.

Ainsi, pour réussir à faire cela dans les temps, j'ai choisi la stack technologique suivante :

- :icon{name="nuxt"} [Nuxt2](https://nuxtjs.org/) pour le développement du site;
- [Nuxt Content](https://content.nuxtjs.org/) pour la gestion du contenu via des fichiers markdown;
- :icon{name=vuetify} [Vuetify](https://vuetifyjs.com/en/) pour le design. N'ayant pas les compétences pour les créations de l'interface utilisateur, j'ai choisi une librairie qui me permet de faire des interfaces rapidement quitte à sacrifier la personnalisation;
- :icon{name=netlify} [Netlify](https://www.netlify.com/) pour le déploiement.

### Contenu

Le site contient différentes pages :

- La liste de l'ensemble des pôles;
- La liste de l'ensemble des associations par pôle;
- Une page par association;
- La liste de l'ensemble des services.

Comme chaque fichier, qui est d'ailleurs équivalent à chaque page, est un fichier markdown et que le site est hébergé sur Netlify, la modification du site est aisée pour la plus part des personnes.

::detail{title="Déploiement en continu"}
Le site est déployé automatiquement sur Netlify à chaque push sur la branche `master`. Ainsi, le site est toujours à jour.

Cette fonctionnalité permet à n'importe qui de suggérer des changements via une Pull Request sur GitHub et de les mettre en ligne dès qu'elles sont approuvées.
::

Le site contient aussi une barre de recherche pour faciliter la découverte des associations.

Pour découvrir le site, c'est par ici : [campus.insa-cvl.org](https://campus.insa-cvl.org/)

## Conclusion

J'ai tenu les délais et le site a pu être présenté à l'ensemble des élèves lors de la réunion de rentrée ! 🎉

Le site est open-source :git-hub-link{repo="Campus-INSA-CVL/campus-website"}.

C'était pour moi un sacré challenge parce que c'était la première fois que je devais créer un site en un temps imparti qui allait ensuite être utilisé dans la vraie vie.

C'est aussi un projet qui m'a permis d'approfondir mes compétences dans la définition du besoin et de la compréhension des problématiques.

Aussi, cela m'a permis de progresser dans ma maîtrise de Nuxt2 et de Vuetify. Des outils importants pour mes prochains projets !
