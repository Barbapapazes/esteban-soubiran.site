---
title: La refonte du site du Classement des Associations
createdAt: 2022-05-20
---

Dans le cadre de l'organisation du concours "Le Classement des Associations", j'ai réalisé le nouveau site web de l'événement.

<!-- more -->

## Contexte

Dans le cadre des mes [activités au sein du BNEI](../experience/bnei), j'ai eu l'opportunité de participer à l'organisation du concours [Le Classement des Associations](../experiences/classement-des-associations).

Afin de faciliter la promotion du concours, l'ensemble de l'équipe organisatrice a décidé de revoir l'entièreté de la charte graphique du concours passant de rien à cela :

<!-- Mettre une image de la charte graphique -->

Ainsi, nous avons revu l'ensemble des supports de communication du concours et notamment le site web. 

## Le site web

Le site web est une composante importante du concours et de sa promotion. En effet, il permet à n'importe qui et en quelques clics d'en savoir plus et de s'inscrire au concours.

Le site web précédent était réalisé avec Webflow. Il était simple mais très peu ergonomique, pas à jour et surtout pas à l'image de la version que nous voulions mettre en place cette année.

<!-- Image du précédent website -->

### Besoins et objectifs

Afin d'apporter le plus de valeurs à ce site internet, nous avons commencé par définir les besoins.

Nous voulions un site épuré, moderne et jeune, compréhensible et qui permet à l'utilisateur de ressentir l'ambiance du concours.

Le site devait être facilement modulaire pour permettre une modification rapide et simple des informations. Il devait aussi comporter un formulaire de contact pour permettre aux utilisateurs de nous contacter.

### Maquettes

Une fois que nous avions défini les besoins, nous avons commencé à travailler sur les maquettes du site. Mais comme nous n'avions pas les compétences nécessaires pour cela, nous avons fait appel à une experte d'[Aneo](https://aneo.eu/). Aneo est l'agence pour laquelle nous organisons l'évènement.

En quelques jours et grâce à l'ensemble des informations que nous avions pu lui transmettre comme la nouvelle charte graphique et les besoins, elle a pu nous fournir des maquettes.

<!-- Image de la première version des maquettes -->

Les première maquettes ont permis de valider l'agencement général du site. Une fois ce dernier validé, nous avons reçu les maquettes définitives.

<!-- Image de la seconde version des maquettes -->

### Développement

Une fois les maquettes validées, nous avons commencé à travailler sur le développement du site. Mais avant même de mettre les mains dans le code, il a fallu définir les technologies à utiliser.

Les contraintes étaient les suivantes :

- Formulaire de contact;
- Peu de temps pour le développement;
- Besoin régulier de mettre en production;
- Site vitrine.

Avec tout cela en tête, j'ai choisi d'utiliser des technologies que j'ai déjà pu utiliser dans le passé sur d'autres projets et qui me permettent de mettre en place rapidement un site web.

Je suis parti sur la stack suivante :

- [Nuxt3](https://v3.nuxtjs.org/)
- [Nuxt Content v2](https://content.nuxtjs.org/)
- [Netlify](https://www.netlify.com/)

C'est une stack que j'ai déjà pu mettre en oeuvre lors de la création de [mon porte-folio](./first-portfolio-in-production) et sur la [création du site campus](./new-website-campus) de mon école.

La nouveauté était le passage à de Nuxt2 à Nuxt3. J'ai donc profité de ce projet pour prendre en main cette nouvelle version de Nuxt.

C'est une stack très efficace qui m'a permis en une vingtaine d'heures de créer les différentes maquettes, notamment les différents carousels et autres interactions.

Ce projet est open-source et disponible à [juste ici](https://github.com/barbapapazes/le-classement.fr) !

### Mise en production

Avec Netlify, la mise en production est toujours un plaisir. Il suffit de suivre les indications et ça fonctionne !

Cependant, j'ai pu rencontrer quelques difficultés lors de la mise en place du formulaire. En effet, des changements internes à Nuxt, comme son utilisation des _functions_, ont compliqué sa mise e place. Mais après quelques quelques recherches, j'ai pu trouver la solution.

::details
---
title: En savoir plus
---

Désormais, Nuxt utilise Nitro. Ainsi, Nuxt est en mesure d'être en SSR via les _functions_ de Netlify.

Mais cela a pour conséquences que l'ensemble des requêtes sont interceptées par Nitro et non plus par Netlify. Sauf que pour l'envoi du formulaire, il est nécessaire de passer par Netlify.

Ainsi, il a fallu créer une fausse route dans public afin que Nitro ne prenne pas en charge la requête et qu'elle puisse être reçue par Netlify.
::

Et pour finir, il a fallu changer le DNS du nom de domain pour le faire pointer vers le nouveau site !

Et voilà !

<!-- Image du site fonctionnel dans un navigateur en navigation privée -->

## Conclusion

Ce projet a été une très bonne expérience pour moi. J'ai pu mettre en place une stack que je connaissais déjà et que j'ai pu améliorer. J'ai pu également découvrir Nuxt3 et ses nouveautés.

Dans le même temps, j'ai pu travailler avec des maquettes réalisées par un professionnel et qui m'ont permis de mettre en place un site web qui correspond à ce que nous voulions. Je n'ai pas eu le choix que de m'adapter aux maquettes et de les respecter.

Lors de la présentation du site web, nous avons eu de très bon retours et nous avons pu directement nous en servir promouvoir l'évènement.

Ce projet est une réussite ! 🎉

