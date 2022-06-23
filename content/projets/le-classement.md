---
title: Le Classement des Associations
date: 2022
tags:
  - projet
  - intégration
  - web
  - développement
banner: img/le-classement.webp
description: Création d'un site vitrine pour le Classement des Associations
alt: Logo de la page d'accueil du site
order: 11
---

Dans le cadre de l'organisation du concours "Le Classement des associations", j'ai réalisé un nouveau site vitrine !

## Le constat

En effet, après plusieurs années d'utilisation et dans une volonté de réaffirmer les positions et les valeurs du concours, l'équipe a décidé qu'il était temps de reprendre l'ensemble de la charte graphique. Par conséquent, la refonte du site n'y a pas échappé.

## Une première maquette

Pour ce projet, nous sommes accompagné d'[Aneo](https://aneo.eu), une entreprise en conseils. Grâce à elle, nous avons pu bénéficier d'un export en UX UI qui nous a réalisé les nouvelles maquettes !

Afin de lui permettre de réaliser des maquettes au plus proche de nos attentes, nous avons pu lui fournir notre nouvelle charte graphique, l'ancien site ainsi que nos volontés :

- Un site plus épuré
- Un site plus moderne
- Un site plus compréhensible
- Un site plus évocateur sur les volontés et les objectifs du concours

Après seulement quelques jours d'attente, quelques mails et des maquettes intermédiaires, nous avons reçu les maquettes définitives.

## La création du site

Une fois les nouvelles maquettes en main, il a fallu réaliser le site. Mais avant même de mettre la main dans le code, il a fallu choisir les technologies à utiliser et la manière de mettre le code en production.

Les contraintes étaient les suivantes :

- Formulaire de contact
- Peu de temps pour la réalisation
- Besoin de mise en production rapide
- Site statique avec beaucoup de textes
- Seul développeur disponible

Ainsi, nous avons (j'ai) décidé de partir sur des technologies que je maîtrise et qui ont pu faire leur preuve dans d'autres projets :

- [Nuxt3](https://v3.nuxtjs.org/)
- [Nuxt Content v2](https://content.nuxtjs.org/)
- [Netlify](https://www.netlify.com/)

En quelques jours seulement, une première version était en ligne ! Il nous a fallu ensuite mettre à jour les textes et les images !

Au bout de 2 semaines, le site est prêt !

## La mise en ligne

Une étape normalement simple qui s'est révélée bien plus complexe que prévue.

En théorie, il suffit d'ajouter 2 records à notre DNS pour que Netlify reconnaisse le site et lui génère son certificat SSL.

Mais comme depuis des années le site était piloté par Webflow, il y avait un grand nombre de records DNS inutiles qu'il a fallu supprimer. Il a tout de même fallu faire attention à ne pas couper les mails et à effectuer la redirection de [https://www.le-classement.fr](https://www.le-classement.fr) vers [https://le-classement.fr](https://le-classement.fr).

🥳 Mais ça y est ! Le site est en ligne, accessible par tous !

## Une nouvelle expérience

C'est la première fois que j'ai pu avoir accès à des maquettes de qualités et réalisées sur Figma à intégrer avec un framework front-end.

C'est très formateur et n'ayant pas la main sur les maquettes, je n'ai pas eu d'autres choix que de la respecter de A à Z !

Enfin, ce projet a été l'occasion de prendre en main Nuxt3, la nouvelle version de Nuxt, basée sur Vue3 !
