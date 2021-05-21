---
title: Générateur pour le site campus
date: 2020
order: 3
tags:
  - développement
  - web
  - nuxt
  - vuetify
  - insa
  - campus
banner: img/generator-campus.webp
description: Générateur de template pour le site campus
alt: image du générateur
---

Après avoir [refais le site campus](/projets/site-campus) de mon école, il a fallu lui ajouter du contenu !

Ayant utilisé un CMS basé sur git, Nuxt Content, cela m'a permis de créer et de mettre en page facilement du contenu sur le site. Ce système permet aussi de modifier très simplement et très rapidement les différents éléments à afficher pour chaque association permettant ainsi d'avoir le contenu qui correspond à son association.

Cependant, l'écriture et la compréhension de ce contenu n'est pas si simple que je le pensais. J'ai donc dû trouver un moyen de **simplifier le processus de création** de sa fiche association. Pour cela, j'ai donc mis [au point un générateur](https://campus-insa-cvl.github.io/campus-website-templates/) via un simple formulaire en ligne ! Ce dernier, en fonction du **template** choisi par l'association, demande un ensemble d'informations et les combine pour former le fichier final à intégrer directement dans le site. Il permet aussi de gérer les images, en les retaillant puis en les compressant !

Le formulaire de génération des fiches d'associations :

<card>
  <card-image src="img/generator-campus-form.webp"></card-image >
</card>

Les associations ont le choix parmi différents templates :

<card>
  <card-image src="img/generator-campus-templates.webp"></card-image >
</card>

Avec ce système en place, il devient alors **très simple** pour les associations de créer le contenu, le modifier ou utiliser un nouveau template. Il suffit alors de m'envoyer par mail dossier obtenu afin que je puisse, en quelques cliques, **modifier le contenu du site** !
