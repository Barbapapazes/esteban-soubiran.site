---
title: La plateforme de vote du Classement des Associations
datePublished: 2022-12-07
dateModified: 2022-12-07
layout: prose
---

Pour l'édition 2022 du Classement des Associations, j'ai eu l'opportunité de créer sa plateforme de vote.

<!-- more -->

Au travers cet article, tu découvriras les coulisses de la création et mise en production de cette dernière ainsi que quelques exclusivités ! 👀 

> ⚠ Cet article peut contenir des éléments techniques. N'hésite pas à les sauter et passer directement à la suite.
> 

## Le Classement des Associations

Le Classement des Associations est un concours qui permet de rassembler, promouvoir et valoriser la vie étudiante associative ! Ce concours est porté par [Aneo](https://aneo.fr) depuis maintenant plus de 10 ans !

## La plate-forme de vote

Au sein du Classement des Associations, la plate-forme de vote permet à deux associations de se qualifier directement à la finale ! Accéder directement à la finale permet d'une part de gagner mille euros mais aussi de se rapprocher du titre de meilleure association étudiante.

### Objectifs

La plateforme permet aux associations de se mettre en avant et de se faire connaître. En effet, la plateforme est accessible à tous à tout moment et ouverte au vote durant le mois de septembre.

Ainsi, les associations peuvent diffuser le message, le fait de les soutenir, aux nouveaux arrivants, durant les amphis de rentrée et lors des événements organisés par les associations comme les forums des associations.

Pour la Classement, la plateforme de vote est un moyen de se faire connaître par les autres associations.

### Présentation

Sur la page principale de la plateforme, il est possible de découvrir l'ensemble des associations représentées au sein de cartes. Ces dernières contiennent le nom, l'école, la catégorie, un court texte et un visuel ! Le nombre de vote à l'instant du chargement de la page est aussi sur cette carte. 

![Capture d'écran de la plateforme de vote](/images/articles/plateforme-vote-classement-des-associations/plateforme.webp)

![Capture d'écran de la page contenant l'ensemble des associations](/images/articles/plateforme-vote-classement-des-associations/associations.webp)

Des filtres sont à disposition de l'utilisateur pour permettre à chacun de trouver rapidement et simplement l'association qu'il souhaite.

![Capture d'écran des filtres de la plateforme de vote](/images/articles/plateforme-vote-classement-des-associations/filtres.webp)

Une fois l'association voulue trouvée, il est possible de se rendre sur la page de cette dernière. L'utilisateur y trouve alors le rendu écrit et les informations présente sur la carte sauf le visuel. Le rendu écrit est un document PDF permettant aux associations de se présenter, d'exposer leurs projets et d'expliquer en quoi elles peuvent être élues “meilleure association étudiante 2022”.

![Capture d'écran de la page d'une association](/images/articles/plateforme-vote-classement-des-associations/association.webp)

### Réalisation et technique

L’intégralité de la plateforme a été réalisée avec :icon{name=adonisjs} [AdonisJS](https://adonisjs.com/). Il s’agit d’un framework [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) similaire à :icon{name=laravel} [Laravel](https://laravel.com/) ou :icon{name=rails} [Rails](https://rubyonrails.org/). Pour la sauvegarde des données, il a été utilisé une base de données [SQL](https://fr.wikipedia.org/wiki/Structured_Query_Language).

Dans le même temps, pour améliorer l’expérience utilisateur et soulager le serveur, il a été utilisé [Unpoly](https://unpoly.com/). Cet outil permet un rechargement partiel des pages pour rendre la navigation entre ces dernières plus fluide et naturelle. Cela est possible parce qu'il est en mesure d’indiquer au serveur les parties à rendre, ou non. Cela permet de ne générer que le contenu qui va changer et de limiter le temps de calcul, les accès à la base de données et la taille des réponses. Le site est ainsi plus rapide, plus économe en ressource et plus agréable pour les utilisateurs.

Le projet est open-source :git-hub-link{repo=Barbapapazes/vote.le-classement.fr}.

### Les entités

Il existe au sein de la plateforme cinq entités :

- Association
- Category
- School
- User
- Vote

Ces 5 entités sont le coeur de la plateforme et représentent les données qui y sont stockées.

![Capture d'écran des différentes entités](/images/articles/plateforme-vote-classement-des-associations/entites.webp)

### Les associations

Il s’agit de l’entité principal. C’est autour d’elle que tourne l’ensemble de la plateforme.

On peut y voir qu’une association est à une école par une relation [one-to-many](https://en.wikipedia.org/wiki/One-to-many_(data_model)) et à une catégorie par une seconde relation one-to-many. Cette relation nous permet ensuite de filtrer les associations sur les écoles et les catégories.

### Les voix

La seconde grande partie de la plateforme de vote est les voix. En effet, avoir une liste des associations est un bon point de départ mais s’il n’est pas possible de voter pour ces dernières, la plateforme perd de son intérêt.

On peut voir que chacun est relié à une association et que l'email doit être unique au sein de la table. Ainsi, compter le nombre de voix d’une association est une chose assez simple avec SQL.

### Mise en production

Une fois la web application construite, il faut pouvoir la mettre à disposition de tous, c'est à dire la mettre sur internet !

Dans un premier temps, il nous faut un domain ! Pour cela, on va utiliser un sous domain de [le-classement.fr](http://le-classement.fr). Un peut changement DNS et c'est chose faite ! 

Ensuite, il nous faut un serveur pour la base de données, le serveur :icon{name=node} Node.js et y déposer les fichiers des associations. Pour cela, j'ai choisi un VPS chez :icon{name=digitalOcean} DigitalOcean. En effet, un VPS est une machine virtuelle qui peut être facilement redimensionné.

Le seul soucis, c'est qu'un VPS est "nu" lorsqu'on l'achète. Il faut donc le provisionner, c'est à dire installer toutes les ressources nécessaires à son bon fonctionnement comme le reverse proxy :icon{name=nginx} Nginx, le pare-feu, le certbot et bien d'autres comme les outils de monitoring.

Une fois cela fait, il n'y a plus qu'à y déposer son application, créer un utilisateur pour la base de données, mettre à jour les variables d'environnement et c'est parti !

### Fonctionnement de la validation des voix

L'une des premières difficultés fut de créer un système de vote performant et qui limite les risques d'attaques.

Pour cela, il y a deux éléments à prendre en compte :

- La base de données
- Le système d'envoi de mails

En ce qui concerne la base de données, il faut empêcher les utilisateurs d'y écrire autant de données qu'ils le souhaitent. En effet, on pourrait mettre en péril le système si celui venait à être saturé, tant sur la quantité totale que sur le débit. C'est essentiel d'avoir cela en tête lors du design du système de vote. 

L'approche la plus simple consisterait à mettre en place le fonctionnement technique suivant :

- Lorsqu'un utilisateur soumet son adresse électronique pour voter au système, ce dernier l'enregistre avec un flag indiquant l'absence de validation.
- Le système envoie le mail de validation à l'utilisateur.
- L'utilisateur va valide son vote via un lien présent dans le mail. Le système change l'état du flag permettant d'indiquer la validation du vote.

Ce fonctionnement n'est pas viable pour trois raisons. D'une part, il permet à un utilisateur malintentionné de venir saturer la base de données en enregistrant de fausses adresses électroniques. Ensuite, les adresses électroniques de n'importe qui pourrait être sauvegardées sur notre système. Cela pose évidemment des problèmes de sécurité et de gestion des données personnelles sans consentement des utilisateurs concernés. Et enfin, cela signifie devoir gérer ce flag lors du compte des voix (c'est à dire ajouter des conditions pour indiquer les types de voix voulues) ou de son affichage dans le panel d'administration rajoutant de la complexité non nécessaire.

Ainsi, il a été essentiel de trouver une solution technique permettant de ne pas avoir ces problèmes à gérer. Pour cela, les voix sont gérés de la manière suivant :

- Lorsqu'un utilisateur soumet son adresse électronique pour voter, le système génère un lien avec l'adresse électronique et une signature. Cette dernière est un token formé grâce à une clé secrète présente sur le serveur et de l'adresse électronique.
- Le système envoie le mail de confirmation contenant le lien signé mais ne stock aucune information dans la base de données
- L'utilisateur clique ensuite sur le lien présentent dans son mail. Le serveur vérifie la validité du lien et valide le vote en enregistrant les données en base. Le lien n'est plus valide en cas de modification des données qu'il contient ou de sa clé (la clé est une combinaison des données et de la clé secrète du serveur). En effet, les données enregistrées sont présente dans le lien utilisé par l'utilisateur et si une modification est effectuée alors que le lien reste valide, tout ce processus n'a plus de sens.

Ce système permet d'éviter l'ensemble des soucis évoqués précédemment et d'avoir un système simple mais performant et garantissant la protection des données personnelles des utilisateurs en évitant l'injection dans la base de données de n'importe quelle donnée.

### Administration

<!-- Ajouter une image où le lien vers l'administration est cliqué -->

Cette partie du site nous permet de voir l’ensemble des voix, ajouter et supprimer les associations, les écoles et les catégories et de visualiser l’évolution de différentes données. Ainsi, nous avons mis en place différents graphiques nous permettant d’observer le nombre de vote par heure, par jour et par association !

![Graphique montrant l'évolution du nombre de voix par jour](/images/articles/plateforme-vote-classement-des-associations/vote-per-day.png)

![Graphique montrant le nombre de voix par association](/images/articles/plateforme-vote-classement-des-associations/top-10-associations.png)


## Quelques chiffres

Pour finir, voici quelques chiffres de la plateforme de vote durant son utilisation en 2022 :

- Plus de 60 000 utilisateurs uniques
- Plus de 219 000 pages vues
- 46 221 mails envoyés
- 36 mises à jour de la plateforme
- Uptime à 100%

Le tout, en seulement 30 jours !