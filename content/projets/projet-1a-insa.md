---
title: Projet 1A Info-Elec
date: 2018
order: 1
tags: insa équipe projet électronique informatique
banner: img/projet-1a-insa.webp
description: Réalisation d'une plateforme de communication radio entre des modules et une page web
alt: Première slide de la présentation de notre projet
---

Durant le second semestre de la première année à l'INSA, j'ai pu réaliser un projet. Nous avions carte blanche sur le choix du sujet. Avec mon groupe, nous avons décidé de réaliser un projet ambitieux, un projet combinant du web et de l'électronique.

## RaspIoT

L'objectif du projet est de créer une plateforme web qui permet d'interagir avec des modules comme allumer des ampoules. Des boutons physiques permettent aussi une interaction avec ces mêmes ampoules et une modification en conséquence de la plateforme web. Les informations de la page web étaient partagées entre tous les clients connectés en temps réel. Le tout avec des connexions sans fil radio !

### Technologies

En ce qui concerne le serveur web, nous avons utilisé [Expressjs](http://expressjs.com/) et les websocket via [socket.io](https://socket.io/) pour permettre le temps réel. Ce server était hébergé sur un [raspberry pi](https://www.raspberrypi.org/). Pour les modules, nous avons utilisé [arduino](https://www.arduino.cc/) et de petits modules RF pour la transmission sans fil.

Voici notre interface web :

<card>
  <card-image src="img/projet-1a-insa_interface-web.webp"></card-image>
</card>

Et le schéma de l'ensemble du projet :

<card>
  <card-image src="img/projet-1a-insa_schema.webp"></card-image>
</card>

### Compétences

Ce projet m'a permis de développer des compétences dans la création de site web simple, la manipulation d'outils et de framework. J'ai appris à utiliser un arduino, des modules RF et à faire des connexions entre eux et envoyer des messages. Et j'ai aussi fait mes premiers pas dans la gestion de projets en équipe. La rigueur et l'autonomie ont été 2 compétences indispensable durant ce projet..

## En savoir plus

- [Code source](https://github.com/Barbapapazes/raspIoT)
- [Présentation du projet](/raspiot-presentation.pdf)
- [Rapport du projet](/raspiot-rapport.pdf)
