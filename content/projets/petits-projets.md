---
title: Les petits projets
date: 2020 - 2019 - 2018
tags:
  - apprentissage
  - essais
  - projet
  - web
  - électronique
banner: img/github-profil.webp
description: Présentation d'un ensemble de petits projets que j'au eu l'occasion de réaliser !
alt: image de mon profil github
order: 0
---

Ici, c'est le coin des petits projets, souvent inutile mais fun. Ils permettent d'apprendre, de passer un bon moment lors de leur conception et de tester de nouvelles choses ! La plus part de ses petits projets sont disponible et visible sur [mon github](https://github.com/Barbapapazes) !

## Track ENT - 2020

Fort d'un ennui lors du second confinement entremêlé d'un ENT (Espace Numérique de Travail) hors service, je me suis prêté au jeu de pouvoir suivre les temps up et down des services de l'école. D'une simple blague, ce petit projet m'a permis de passer aux travers différentes technologies !

Pour ce projet, je me suis mis en mode "micro-services". Pour cela, j'ai donc utilisé [docker-compose](https://docs.docker.com/compose/) qui me permet de gérer indépendamment chaque service ! On retrouve dans ce projet :

- un service qui permet, via un simple ping, de savoir si la ressource à une URL donnée est up (200) ou down (50X)
- un service qui s'occupe de stocker la data, de la recevoir et de l'envoyer au besoin. Dans notre cas, il s'agit s'implement d'une base de donées in-file
- un service client qui est l'interface utilisateur et qui permet de visualiser les données récupérées par le service de ping et stockée par le service de base de données.
- un service bot qui, à temps régulier, publier sur twitter l'état du service !

Combiné tous ensemble sur un [raspberry pi](https://www.raspberrypi.org/), ils me permettent de suivre en temps réel l'état de l'ENT de l'école.

Vous pouvez retrouver l'ensemble [des sources ici](https://github.com/Barbapapazes/track-ent) !

## Bodybuilding app - 2019

Après avoir appris [Vuejs](https://vuejs.org), quoi de mieux d'un projet concret pour mettre en pratique l'apprentissage ? C'est ce que je me suis dit en 2019 lorsque j'ai l'idée d'une petite application, très simple, pour le sport ! Sur cette dernière, il est possible d'utiliser un chronomètre, un compte à rebours et même d'y renseigner ses entraînements qui peuvent être automatiquement suivi par le compte à rebours !

Pour l'interface graphique, j'ai utilisé [Vuetify](https://vuetify.com). Cela m'a permis de me concentrer sur l'écriture de la logique de l'application, tout en apprenant une librairie graphique et progressant tout doucement le design !

J'ai aussi, durant 1 an, payé un nom de domaine personnalisé afin d'en apprendre un peu plus sur ce sujet !

Vous pouvez retrouver [l'application ici](https://barbapapazes.github.io/bodybuilding-app/) et son [code source ici](https://github.com/Barbapapazes/bodybuilding-app) !

<card>
  <card-image src="img/sport-companion.webp"></card-image>
</card>

## Station météo - 2018

Après avoir expérimenté avec [Expressjs](https://expressjs.com), les [arduino](https://www.arduino.cc/) et un [raspberry pi](https://www.raspberrypi.org/) durant [mon premier projet](projets/projet-1a-insa) à l'INSA Centre Val de Loire, j'ai décidé de continuer durant mes vacances !

L'idée est de connecter des modules à un serveur central via le wifi ! Pour cela, le serveur central est un serveur web mis en place sur un raspberry pi qui a 2 fonctions ! La première est de récolter les informations transmissent par les modules et la seconde est de fournir à l'utilisateur une interface graphique afin de visualiser les données récupérées. Les modules sont des arduino avec une puce wifi. Dans un premier temps ils démarrent en mode server. L'utilisateur doit alors s'y connecter afin d'entrer les identifiants du wifi. Une fois que cela est fait, le module va alors arrêter le serveur web, se connecter au wifi et il peut alors envoyer les informations du capteur de températures qui lui est accroché au serveur central.

Un moyen qui permet alors de positioner des capteurs de températures un peu partout chez soi afin de surveiller facilement la température chez soi !

Vous pouvez retrouver l'ensemble [des sources ici](https://github.com/Barbapapazes/api-subdomain-temp-arduino/tree/dev) !

## Mon premier site - 2018

Depuis mes débuts dans le développement web, j'ai eu envie de me réaliser mon propre site ! Un site où je peux mettre ce que je veux, un site qui me ressemble !

En parallèle de la réalisation du projet [de ma 1A](/projets/projet-1a-insa), je me suis amusé à créer, avec le peu de connaissance que j'avais, mon premier site ! Il s'agit d'un blog, avec un peu de contenu, mais surtout un moyen d'authentification, un changement de thème et même un changement de langue ! La partie intéressante est la gestion du markdown pour les articles du blog !

C'est un projet construit avec [Express](https://expressjs.com) et déposé sur [Héroku](https://heroku.com) ! En terme de contenu, c'est très vide car je ne l'ai jamais terminé ! Il est possible de retrouver les sources du projet [ici](https://github.com/Barbapapazes/esteban-s-website) !

Un aperçu de mon premier site web :

<card>
  <card-image src="img/premier-site.webp"></card-image>
</card>
