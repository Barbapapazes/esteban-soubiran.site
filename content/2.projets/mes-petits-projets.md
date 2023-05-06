---
title: Mes petits projets
description: Quelques petits projets réalisés lors de moments d'ennui ou pour se découvrir des petites technologies. Souvent rien d’ambitieux mais toujours intéressant à faire.
image: 
  src: /images/projects/side-projects.webp
  alt: Capture d'écran de mon profil GitHub
datePublished: 2020-04-15
dateModified: 2020-11-05
layout: project
---

## Track ENT - 2020

### Contexte

Pendant un moment d'ennui durant le second confinement entremêlé d'un Espace Numérique de Travail (ENT) hors service, j'ai décidé d'agir en suivant les moments de fonctionnement et de dysfonctionnement des différents services.

### Projet

L'idée est simple. Construire différents services qui permettront de monitorer le statut des services de l'ENT. En effet, j'ai choisi de découper l'ensemble de mes services pour découvrir l'architecture des micro-services.

- Service de ping de l'ENT;
- Service de stockage des résultats;
- Client web permettant l'affichage des résultats;
- Bot Twitter permettant de publier régulièrement les résultats.

Tout cela est hébergé sur un :icon{name="raspberry-pi"} Raspberry Pi 3B+ avec :icon{name=docker} Docker Compose pour la gestion des services.

### Conclusion

Ce projet, sans grande prétention, m'a permis de découvrir :icon{name=docker} Docker Compose et l'architecture micro-services.

## Bodybuilding app - 2019

### Contexte

Après avoir appris :icon{name="vue"} Vue.js, j'ai décidé de me lancer dans un petit projet pour mettre en oeuvre tous les concepts que j'avais pu voir.

J'ai alors regardé autour de moi ce que je pouvais faire. Faisant de la musculation, je me suis aperçu qu'il était pénible de naviguer entre son chronomètre et son entraînement. J'ai alors décidé de réunir cela au sein d'une même application.

### Projet

Jai alors eu l'idée de créer une petite application web permettant à un utilisateur d'avoir dans un même endroit, un chronomètre, un compte à rebours et même d'y renseigner ses entraînements qui peuvent être automatiquement suivi par le compte à rebours.

Pour l'interface graphique, j'ai utilisé :icon{name=vuetify} Vuetify. Cela m'a permis de me concentrer sur les fonctionnalités de l'application plutôt que de devoir aussi gérer le design, un sujet que je ne maîtrise pas encore.

Enfin, j'ai mis en production l'application et j'ai acheté un nom de domaine. Cela m'a permis de découvrir la gestion de ce dernier.

![Capture d'écran de l'application Bodybuilding](/images/projects/side-projects_bodybuilding-app.webp)

Le projet est open source :git-hub-link{repo=Barbapapazes/bodybuilding-app}.

### Conclusion

Ce petit projet, que j'ai utilisé à la salle de sport, m'a permis de mettre en pratique toute la découverte de :icon{name="vue"} Vue.js que j'avais pu faire. J'ai également pu découvrir :icon{name=vuetify} Vuetify et la gestion d'un nom de domaine. Une bonne première expérience.

## Station Météo - 2018

### Contexte

Après avoir pu jouer avec des :icon{name=arduino} Arduino et un :icon{name="raspberry-pi"} Raspberry Pi durant mon [projet de première année](./mes-premiers-modules-diot.md), j'ai décidé de continuer avec une nouvelle formule. Cette fois-ci, je voulais pouvoir avoir des données météorologiques en temps réel.

### Projet

Ce projet se voulait être une vraie découverte.

J'ai utilisé des modules  :icon{name=arduino} Arduino ESP8266. Ces modules était connecté à un thermomètre électronique et à un module Wi-Fi. Ainsi, et de manière régulière, des mesures étaient faites et transmis, via le Wi-Fi, au :icon{name="raspberry-pi"} Raspberry Pi.

::detail{title="Connexion à un Wi-Fi"}
Les modules Arduino n'intègre pas directement les identifiants du Wi-Fi. Pour pallier à cela, lorsque l'Arduino démarre, il commence par émettre un réseau wifi. En se connectant dessus via un navigateur internet, on peut alors renseigner les identifiants du Wi-Fi. Une fois cela fait, l'Arduino se connecte au Wi-Fi et peut alors envoyer les données.
::

Sur le :icon{name="raspberry-pi"} Raspberry Pi, j'avais mis en place un server web capable d'enregistrer les données dans une base de données.

Ensuite, j'ai créer des interfaces web permettant de visualiser, via des courbes, l'ensemble des données.

### Conclusion

Ce projet m'a permis de découvrir les modules  :icon{name=arduino} Arduino ESP8266 et de mettre en place un serveur web. Une évolution de mon projet de première année et une bonne expérience dans l'utilisation d'un serveur web.

## Mon premier site - 2018

### Contexte

Depuis mes débuts dans le développement web, j'ai envie de réaliser mon propre site. Un site qui me ressemble et où je peux m'exprimer librement.

### Projet

L'idée est simple, créer un site où je peux être en mesure de créer des articles. En parallèle de mon [projet de première année](./mes-premiers-modules-diot.md), et avec le peu de connaissance que je pouvais avoir, j'ai décidé de me lancer.

Il s'agissait d'un blog créer avec :icon{name=express} Express et :icon{name=mongo} MongoDB. Pour la partie graphique, j'ai essayé de tout faire à la main.

J'ai mis en place l'authentification, un changement de thème et même de langue. La partie intéressante est la gestion du markdown dans l'éditeur de texte.

J'ai ensuite déployé le site du :icon{name=heroku} Heroku avec une base de données MongoDB Atlas.

Le projet est open source :git-hub-link{repo=Barbapapazes/esteban-s-website}.

### Conclusion

Cela ne faisait que quelques mois que je développer mais j'étais tellement fière du résultat ! Mais je n'ai jamais rempli le site et je ne l'ai même jamais terminé.

Mais cela m'a vraiment motivé à continuer à développer et à apprendre de nouvelles choses dans le développement web.
