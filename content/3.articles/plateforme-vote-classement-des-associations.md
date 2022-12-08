---
title: La plateforme de vote du Classement des Associations
image:
  src: /images/articles/plateforme-vote-classement-des-associations/platform.webp
  alt: Capture d'écran de la plateforme de vote
datePublished: 2022-12-07
dateModified: 2022-12-07
layout: prose
---

Pour l'édition 2022 du Classement des Associations, j'ai eu l'opportunité de créer sa plateforme de vote.

<!-- more -->

Au travers cet article, tu découvriras les coulisses de la création, la mise en production ainsi que l'ensemble des problématique que j'ai pu rencontrer avec les solutions mise en place !

> ⚠ Cet article peut contenir des éléments techniques. N'hésite pas à les sauter et passer directement à la suite.

## Le Classement des Associations

Le Classement des Associations est un concours qui permet de rassembler, promouvoir et valoriser la vie étudiante associative ! Ce concours est porté par [Aneo](https://aneo.fr) depuis maintenant plus de 10 ans !

Dans ce cadre de la 11e édition, il a été choisi de mettre en place une plateforme de vote pour permettre aux associations de se faire connaître et de se qualifier directement à la finale permettant à des associations avec un gros réseau de se qualifier directement à la finale.

## La plateforme

Au sein du Classement des Associations édition 2022, la plateforme de vote permet à deux associations de se qualifier directement à la finale ! Accéder directement à la finale permet d'une part de gagner mille euros mais aussi de se rapprocher du titre de meilleure association étudiante.

### Objectifs

La plateforme permet aux associations de se mettre en avant et de se faire connaître. En effet, la plateforme est accessible à tous à tout moment et ouverte au vote durant le mois de septembre.

Ainsi, les associations peuvent diffuser le message, le fait d'être soutenu, aux nouveaux arrivants de l'école, durant les amphithéâtres de rentrée et lors des événements organisés par les associations comme les forums des associations, les soirées...

Pour la Classement, la plateforme de vote est un moyen de se faire connaître par les autres associations et de promouvoir la vie associative étudiante !

### Présentation

Sur la page principale de la plateforme, il est possible de découvrir l'ensemble des associations représentées au sein de cartes. Ces dernières contiennent le nom, l'école, la catégorie, un court texte et un visuel ! Le nombre de vote à l'instant du chargement de la page est aussi sur cette carte. 

![Capture d'écran de la page contenant l'ensemble des associations](/images/articles/plateforme-vote-classement-des-associations/associations.webp)

Des filtres sont à disposition de l'utilisateur pour permettre à chacun de trouver rapidement et simplement l'association qu'il souhaite.

![Capture d'écran des filtres de la plateforme de vote](/images/articles/plateforme-vote-classement-des-associations/filters.webp)

Une fois l'association voulue trouvée, il est possible de se rendre sur la page de cette dernière. L'utilisateur y trouve alors le rendu écrit et les informations présente sur la carte sauf le visuel. Le rendu écrit est un document PDF permettant aux associations de se présenter, d'exposer leurs projets et d'expliquer en quoi elles peuvent être élues “meilleure association étudiante 2022”.

![Capture d'écran de la page d'une association](/images/articles/plateforme-vote-classement-des-associations/association.webp)

## Réalisation

L’intégralité de la plateforme a été réalisée avec :icon{name=adonisjs} [AdonisJS](https://adonisjs.com/). Il s’agit d’un framework [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) similaire à :icon{name=laravel} [Laravel](https://laravel.com/) ou :icon{name=rails} [Rails](https://rubyonrails.org/).

 Pour le stockage des données, il a été utilisé une base de données [SQL](https://fr.wikipedia.org/wiki/Structured_Query_Language). Cette dernière est la plus adaptée à nos besoins de part l'aspect relationnel des données.

::detail{title="Pourquoi PostgreSQL ?"}
La base de données est une :icon{name=postgresql} [PostgreSQL](https://www.postgresql.org/). Cette dernière est open-source, gratuite et performante.

Il aurait été possible d'utiliser :icon{name=mysql} [MySQL](https://www.mysql.com/).
::

Dans le même temps, pour améliorer l’expérience utilisateur et soulager le serveur, il a été utilisé [Unpoly](https://unpoly.com/). Cet outil permet un rechargement partiel des pages pour rendre la navigation entre ces dernières plus fluide et naturelle. Cela est possible parce que le client est en mesure d’indiquer au serveur les parties à rendre, ou non. Par conséquent, il ne va être rendu que ce qui va changer. On limite ainsi le temps de calcul, les accès à la base de données et la taille des réponses HTTP. Le site est ainsi plus rapide, plus économe en ressource et plus agréable pour les utilisateurs.

::detail{title="Un exemple ?"}

La page principale continent la liste des associations ainsi que l'ensemble des filtres. Le filtre sur les écoles ou les catégories n'est pas écrit en dur dans l'HTML mais est généré à partir de données présentes dans une table de la base de données.

Pour récupérer les données, il est nécessaire de faire la requête suivante :

```sql
select * from schools order by name asc;
```

Puis d'envoyer les données sur le réseau après la génération complète de la page (incluant les autres filtres et la liste des associations).

Avec Unpoly, lorsque l'utilisateur sélectionne une école puis filtre, il n'est pas nécessaire de recharger l'entièreté de la page ni de refaire la requête SQL pour chacun des filtres. Une requête AJAX est envoyée au serveur en lui indiquant de ne re-rendre que la liste des associations.

Ainsi, la charge du serveur est diminuée puisqu'il a moins de requêtes SQL  faire mais aussi moins de pages à générer. Pour le client, l'expérience est plus fluide puisqu'il n'y a pas de rechargement de la page.
::

Le projet est open-source :git-hub-link{repo=Barbapapazes/vote.le-classement.fr} et encore en développement.

### Les entités

Il existe au sein de la plateforme cinq entités :

- Association
- Category
- School
- User
- Vote

Ces 5 entités sont le coeur de la plateforme et représentent les données qui sont stockéesdans la base de données.

![Capture d'écran des différentes entités](/images/articles/plateforme-vote-classement-des-associations/entities.webp)

### Les associations

Il s’agit de l’entité principal. C’est autour d’elle que tourne l’ensemble de la plateforme.

On peut y voir qu’une association est à une école par une relation [one-to-many](https://en.wikipedia.org/wiki/One-to-many_(data_model)) et à une catégorie par une seconde relation one-to-many. Cette relation nous permet ensuite de filtrer les associations sur les écoles et les catégories.

Ces relations permettent de justifier l'utilisation d'une base de données relationnelle.

### Les voix

La seconde grande partie de la plateforme de vote est les voix. En effet, avoir une liste des associations est un bon point de départ mais s’il n’est pas possible de voter pour ces dernières, la plateforme perd de son intérêt.

On peut voir que chacun est relié à une association et que l'email doit être unique au sein de la table. Ainsi, compter le nombre de voix d’une association est une chose assez simple avec SQL.

## Mise en production

Une fois l'application web construite, il faut pouvoir la mettre à disposition de tous, c'est à dire la mettre sur internet !

Dans un premier temps, il nous faut un domain ! Pour cela, on va utiliser un sous domain de [le-classement.fr](http://le-classement.fr). Un petit changement DNS et nous voilà prêt à rendre la plateforme disponible pour tous !

```
vote.le-classement.fr. 18000 IN A 104.248.167.216
```

Ensuite, il nous faut un serveur pour la base de données, le serveur :icon{name=node} Node.js et y déposer les fichiers des associations (images et PDF). Pour cela, j'ai choisi un VPS chez :icon{name=digitalOcean} DigitalOcean. En effet, un VPS est une machine virtuelle qui peut être facilement redimensionné. Cela est pratique pour augmenter les capacités de la machines durant les périodes de forte activité.

Le seul soucis, c'est qu'un VPS est "nu" lorsqu'on l'achète. Il faut donc le provisionner, c'est à dire installer toutes les ressources nécessaires à son bon fonctionnement comme le reverse proxy :icon{name=nginx} Nginx, le pare-feu, le certbot et bien d'autres comme les outils de monitoring.

::detail{title="Provisionner un VPS"}
Pour provisionner mon VPS et parce que ce n'est pas mon coeur de métier, j'ai utilisé un service qui s'appelle [Cleavr](https://cleavr.io/).

C'est très appréciable d'avoir un outil de ce genre parce que le gain de temps est énorme. Le service propose aussi une interface web pour gérer les serveurs et les déploiements ce qui facilite ensuite l'administration.
::

Une fois cela fait, il n'y a plus qu'à y déposer son application, créer un utilisateur pour la base de données, mettre à jour les variables d'environnement, cliquer sur 3 boutons et c'est parti, le site est en ligne et fonctionnel ! 🚀

### Fonctionnement de la validation des voix

L'une des premières difficultés fut de créer un système de vote performant (plus de 25 000 personnes ont votées en 2022) et qui limite les risques d'attaques.

Pour cela, il y a deux éléments à prendre en compte :

- La base de données
- Le système d'envoi de mails

En ce qui concerne la base de données, il faut empêcher les utilisateurs d'y écrire autant de données qu'ils le souhaitent. En effet, on pourrait mettre en péril le système si celui venait à être saturé, tant sur la quantité totale que sur le débit. C'est essentiel d'avoir cela en tête lors du design du système de vote. 

Pour le système d'envoi de mails, il s'agit de ne pas envoyer des mails à n'importe qui. En effet, si un utilisateur malintentionné venait à envoyer des milliers de mails, cela pourrait avoir des conséquences sur le serveur d'envoi de mails d'autant que le système n'est pas gratuit.

### Une première approche

L'approche la plus simple consisterait à mettre en place le fonctionnement technique suivant :

- Lorsqu'un utilisateur soumet son adresse électronique pour voter au système, ce dernier l'enregistre avec un flag indiquant l'absence de validation.
- Le système envoie le mail de validation à l'utilisateur.
- L'utilisateur va valide son vote via un lien présent dans le mail. Le système change l'état du flag permettant d'indiquer la validation du vote.

Ce fonctionnement n'est pas viable pour trois raisons. D'une part, il permet à un utilisateur malintentionné de venir saturer la base de données en enregistrant de fausses adresses électroniques. Ensuite, les adresses électroniques de n'importe qui pourrait être sauvegardées sur notre système. Cela pose évidemment des problèmes de sécurité et de gestion des données personnelles sans consentement des utilisateurs concernés. Et enfin, cela signifie devoir gérer ce flag lors du compte des voix (c'est à dire ajouter des conditions pour indiquer les types de voix voulues) ou de son affichage dans le panel d'administration rajoutant de la complexité non nécessaire.

Ainsi, il a été essentiel de trouver une solution technique permettant de ne pas avoir ces problèmes à gérer.

### La solution

 Pour cela, les voix sont gérés de la manière suivant :

- Lorsqu'un utilisateur soumet son adresse électronique pour voter, le système génère un lien avec l'adresse électronique et une signature. Cette dernière est un token formé grâce à une clé secrète présente sur le serveur et de l'adresse électronique.
- Le système envoie le mail de confirmation, si l'adresse n'est pas une adresse à usage unique, contenant le lien signé mais ne stock aucune information dans la base de données
- L'utilisateur clique ensuite sur le lien présentent dans son mail. Le serveur vérifie la validité du lien et valide le vote en enregistrant les données en base. Le lien n'est plus valide en cas de modification des données qu'il contient ou de sa clé (la clé est une combinaison des données et de la clé secrète du serveur). En effet, les données enregistrées sont présente dans le lien utilisé par l'utilisateur et si une modification est effectuée alors que le lien reste valide, tout ce processus n'a plus de sens.

Ce système permet d'éviter l'ensemble des soucis évoqués précédemment et d'avoir un système simple mais performant et garantissant la protection des données personnelles des utilisateurs en évitant l'injection dans la base de données de n'importe quelle donnée.

### Administration

Cette partie du site nous permet de voir l’ensemble des voix, ajouter et supprimer les associations, les écoles et les catégories et de visualiser l’évolution de différentes données. Elle n'est accessible qu'aux administrateurs du site qui se connecte en HTTP Basic Auth.

::detail{title="HTTP Basic Auth"}
Cette méthode permet d'éviter d'avoir à intégrer tout un système d’authentification qui seraient plus complexe à mettre en place et à maintenir. En utilisant les propriétés du protocol HTTP, on se simplifie la vie.
::

Pour l'ajout des associations, des écoles et des catégories, un simple formulaire fait l'affaire. Grâce à Unpoly, l'expérience est enrichie et agréable pour l'administrateur.
Bien sûr, il est possible de modifier les informations d'une association, d'une école ou d'une catégorie.

Nous avons mis en place différents graphiques nous permettant d’observer le nombre de vote par heure, par jour et par association !

![Graphique montrant l'évolution du nombre de voix par jour](/images/articles/plateforme-vote-classement-des-associations/vote-per-day.png)

![Graphique montrant le nombre de voix par association](/images/articles/plateforme-vote-classement-des-associations/top-10-associations.png)

Développée durant l'utilisation du service, la partie d'administration a beaucoup évoluée. Mais grâce à Cleavr, il a été possible de mettre à jour le système sans aucune interruption de service.

## Quelques chiffres

Pour finir, voici quelques chiffres de la plateforme de vote durant son utilisation en 2022 :

- Plus de 60 000 utilisateurs uniques
- Plus de 219 000 pages vues
- 46 221 mails envoyés
- 36 mises à jour de la plateforme
- Uptime à 100%

Le tout, en seulement 30 jours de fonctionnement !

## Conclusion

Construire un service qui est ensuite utilisé par des milliers de personnes est un exercice qui n'a rien de simple et qui est assez stressant ! Au final, tout s'est bien passé et le projet est une réussite !

J'espère que vous avez apprécié ce retour d'expérience et que vous avez pu en tirer des informations utiles pour vos projets. N'hésitez pas à me contacter si vous avez des questions ou des remarques !