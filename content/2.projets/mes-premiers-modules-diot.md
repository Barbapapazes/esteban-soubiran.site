---
title: Mes premiers modules d'IoT
description: J'ai crée mes premiers modules d'internet of things (IoT) lors d'un projet au sein de ma première année d'école d'ingénieurs.
image:
    src: /images/projects/discover-iot.webp
    alt: Première page de notre présentation du projet. On peut y lire "Gestion d'électronique à distance, projet 1A".
datePublished: 2019-06-15
dateModified: 2020-11-05
layout: project
---

## Contexte

Durant le second semestre ma première année d'école, j'ai eu l'opportunité de réaliser un projet technique sur la thématique de mon choix.

Étant tombé amoureux du développement web durant [ma première nuit de l'info](./involvment-nuit-de-linfo.md), j'ai décidé de réaliser un projet avec du web.

Mais ce projet était à réaliser avec 2 autres personnes. Afin de satisfaire chacun, et parce que nous avions carte blanche, nous avons choisi de lier le web et l'électronique. 

## RaspIoT

### Projet

Pour lier le développement et l'électronique, nous avons décidé de créer des modules Arduino pilotable depuis une interface web.

Ainsi, l'idée était la suivante :

- Un utilisateur se connecte à une interface web;
- L'utilisateur peut gérer les différents modules;
- L'utilisateur peut piloter les différents modules via l'interface web;
- L'utilisateur peut piloter les différents modules depuis un interrupteur physique;
- Les modules communiques avec le module principal via une transmission radio;
- Le module principal est en charge du serveur web utilisé par l'interface web;
- L'ensemble des interfaces web sont synchronisées.

Dans notre projet, nous avons choisi que nos modules seraient des lampes multi-couleurs pilotables à distance.

### Fonctionnement

Le fonctionnement est plutôt simple mais la mise en place est plutôt complexe notamment la double possibilité d’interaction avec les modules, en physique ou via l'interface web.

Le :icon{name=raspberryPi} Raspberry Pi est le module principal. Il est connecté via USB à un :icon{name=arduino} Arduino. Les modules sont des Arduino connectés à des lampes multi-couleurs ou mono-couleurs et à un interrupteur physique. Ces modules communiquent avec l'Arduino du module principal via une transmission radio.

#### Physique

Lorsque l'utilisateur interagit avec un interrupteur physique, alors l'état de la lampe du module change. Si la lampe est allumée, alors elle s'éteint. Si la lampe est éteinte, alors elle s'allume.

Il est intéressant de noter que l'interface web reflète la réalité. Ainsi, elle se met à jour en fonction de l'état de la lampe.

Cela est possible grâce à une transmission radio du module au module principal.

#### Interface web

Lorsque l'utilisateur interagit avec l'interface web, via un clique sur cette dernière, alors la lampe du module correspondant change. Si la lampe est allumée, alors elle s'éteint. Si la lampe est éteinte, alors elle s'allume.

Il est intéressant de noter qu'il est possible d'éteindre la lampe via l'interface web puis l'allumer via l’interrupteur physique. L'interface web se mettra alors à jour en fonction de l'état de la lampe.

### Réalisation

La complexité du projet est dans 2 éléments. Le premier est la communication via les modules radios. La seconde est la synchronisation l'utilisation à la fois d'un interrupteur physique et de l'interface web.

Pour mener à bien ce projet, nous avons utilisé les technologies et outils suivants :

- Un Raspberry Pi 3B+;
- Différents Arduino pour les modules;
- Émetteurs et récepteurs radio;
- Un serveur web basé sur Node.js;
- Des scripts pythons pour établir une communication le module principal et l'Arduino principal.

Voici un schéma de notre projet :

![Schéma montrant 1 Raspberry Pi connecté à 2 Arduino. L'un permettant à l'émission des messages et le second à la réception. Le second circuit montre un Arduino connecté à un interrupteur, un récepteur et un émetteur.](/images/projects/discover-iot_schema-full.webp)

Lorsque l'utilisateur appuie sur l'interrupteur physique, un message est émis via le module radio connecté à l'Arduino. Le module de l'interface principal le reçoit et met à jour la base de données via un script python et le port série. En effet, l'Arduino récepteur était en charge de l'écriture sur le port série et un script python avait la charge d'intercepter et interpréter les messages.

Dès que le fichier JSON, servant de base de données était mis à jour, le serveur web était notifié. Via une connexion websocket, il mettait à jour les interfaces web des clients connectés.

Lorsque l'utilisateur interagit via l'interface web, cette dernière envoie un message au serveur web via la connection websocket. Le module principal reçoit l'information, met à jour la base de données et écrit sur le port série. Ce message est lu par l'Arduino et émis via l’émetteur radio. Dans le même temps, l'ensemble des interfaces web sont synchronisées via la connexion websocket.

Dans les faits, cela marchait plutôt bien. Cependant, il pouvait arriver des conflits dans l'écriture et la lecture du fichier JSON. Cela faisait alors planter le serveur web et il fallait réparer à la main le fichier.

Voici un exemple du fichier JSON servant de base de données :

```json
{
  "addDevices": false,
  "bulbs": [
  {
    "name": "one",
    "id": "1",
    "state": true,
    "type": "relay"
  },
  {
    "name": "two",
    "id": "2",
    "value": 36,
    "type": "pwm"
  },
  {
    "name": "three",
    "id": "3",
    "state": true,
    "type": "relay"
  },
  {
    "name": "four",
    "id": "4",
    "value": 91,
    "type": "pwm"
  }
],
"deleteDevices": false,
"python": false
}
```

L'intégralité du projet a été réalisé par le groupe. Nous avons trouvé très peu de documentation sur internet notamment sur l'utilisation des émetteurs et récepteurs radio. Nous avons donc dû nous débrouiller pour trouver des solutions.

Il est aussi intéressant de noter que le concept de base de données n'était pas encore présent dans notre spectre de connaissances. Ainsi, nous avons choisi de stocker les données dans un fichier JSON.

Ce projet est open-source :git-hub-link{repo=barbapapazes/raspIoT}.

## Conclusion

Ce projet est mon premier gros projet de mes études supérieurs et mon premier vrai projet avec une équipe. Il a demandé rigueur, organisation et autonomie pour arriver à mener à bien ce projet ambitieux.

Il m'a permis de continuer à découvrir le développement web mais aussi de pousser mes connaissances en électronique sur Arduino et la transmission radio.

Ce projet est une réussite et il a séduit les différents membres du jury.
