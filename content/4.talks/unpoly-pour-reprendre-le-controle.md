---
title: Unpoly, pour reprendre le contrôle !
description: Tools-in-action un Unpoly, un outil qui permet d'avoir l'expérience utilisateur d'une application web mais sans la complexité.
datePublished: 2023-04-12
dateModified: 2023-04-12
cover:
  src: /assets/talks/unpoly-pour-reprendre-le-controle/cover.webp
  alt: Photo d'Estéban lors de son talk à Devoxx France
resources:
  - name: Slides
    url: https://talks.esteban-soubiran.site/2023/unpoly
    icon: i-heroicons-chat-bubble-bottom-center-text-20-solid?mask
  - name: PDF
    url: /talks/2023-04-12
    icon: i-heroicons-document-text-20-solid?mask
  - name: Vidéo
    url: https://youtu.be/MIM6E_XMRHQ
    icon: i-heroicons-video-camera-20-solid?mask
  - name: Devoxx France
    url: https://www.devoxx.fr/
    icon: i-heroicons-user-group-20-solid?mask
layout: talk
---

Pour la [Devoxx France](https://devoxx.fr) 2023, j'ai eu l'occasion de présenter Unpoly, un outil qui permet d'avoir l'expérience utilisateur d'une application web mais sans la complexité des frameworks front-end. Voici les slides et la transcription de mon talk.

## Transcription

Avant de commencer qui suis-je ?

Je m'appelle Estéban Soubiran. Je suis actuellement :
- Élève ingénieur en cybersécurité à l'INSA Centre Val de Loire
- Développeur web chez Aneo, une agence en transformation digital
- Responsable du Classement des Associations, une aventure pour les associations étudiantes aux travers différents évènements en ligne et physique qui a pour objectif de rassembler, promouvoir et valoriser la vie associative étudiante.

Vous pouvez me retrouver principalement sur LinkedIn où je suis le plus actif ou sur GitHub où où ce talk sera déposée.

Tout au long de cette présentation, nous allons avoir un fil rouge.

Ce fil rouge, nous l’appellerons Atom et c'est lui, ce petit robot.

Atom, il est développeur web **débutant** au sein du Classement des Associations. Pour septembre, il doit développer une plateforme de vote pour permettre aux associations d'être challengées sur leurs capacités à mobiliser leur communauté.

La plateforme doit permettre de :
- Visualiser, ajouter et modifier les associations qui participent au Classement
- Permettre aux personnes de voter avec une adresse mail
- Visualiser sur des graphiques le nombre de vote par jour
- Être SEO friendly, c'est à dire que les moteurs de recherche doivent pouvoir indexer facilement les pages de l'application.
- Avoir une expérience utilisateur rapide et moderne, c'est à dire que les utilisateurs doivent pouvoir naviguer rapidement entre les différentes pages de l'application.
- Être maintenable et peu complexe, c'est à dire que le code doit être facile à comprendre et à modifier.

L'application doit être capable de supporter :
- 100 000 visites par mois
- 25 000 votes par mois
- 45 000 mails par mois

Atom, comme il est débutant, il va faire un tour sur YouTube pour voir comment il pourrait développer sa plateforme de vote. Il tombe sur une vidéo qui lui parle de la MERN stack.

La MERN stack, c'est
- MongoDB pour la base de données
- Express pour le serveur, accessoirement obsolète
- React pour le front-end
- Node.js pour supporter Express et React

Il décide de partir avec cette stack parce qu'il a vu qu'avec React il peut créer une expérience utilisateur moderne et rapide avec des modals et valider ses formulaires depuis le client son application.

Du coup, Atom se lance.

Il commence par trouver, installer et lier ensemble les différentes dépendances de son projet. Ensuite, il structure les données de son application. Puis il définit les routes de son application et il y gère les requêtes en y ajouter des filtres, du tri et de la pagination. Enfin, il sécurise les accès à l'API via de l'authentification et des autorisations, notamment pour que les administrateurs puissent ajouter et modifier les associations.

Pour finir, il rend son application disponible au monde entier en la mettant en production.

Pour Atom, c'est clairement pas une étape facile parce que Express, à la base, c'est jsute un router et parce qu'il doit gérer la connexion entre toutes ces dépendances comme celles de la base de données, de l'authentification, de la gestion des mails, etc.

Avoir développé l'API JSON, ça ne suffit pas. Atom doit maintenant développer l'application web qui va consommer l'API. C'est reparti, il choisi ses dépendances et les glue ensemble. Il gère le routage. Ensuite, il s'occupe de récupérer les données de l'API en faisant attention à la gestion des erreurs, les retry, la validation des formulaires et l'envoi des fichiers comme les images. Puis il s'occupe de la gestion des autorisations, de l'accessibilité et du référencement en prenant en compte qu'il veut une interface moderne. Pour cette partie, il doit générer ses pages côté serveur pour qu'elles soient indexables par les moteurs de recherche. Du coup, il va devoir apprendre un méta framework comme Next.js ou Remix.

Enfin, il va devoir déployer l'application sur un serveur et la rendre disponible pour les utilisateurs.

Bon là, pour Atom, ça comment à devenir compliqué parce que son temps est limité, qu'il est le seul développeur et que gérer 2 applications en production demande du temps.

Ensuite, il aimerait bien ajouter des fonctionnalités au cours du temps pour améliorer l'application et l'expérience utilisateur avec des graphiques de visualisation des votes. Mais clairement, l'application est devenu beaucoup trop complexe entre la gestion des dépendances, le routage serveur et client et toutes les autorisations.

Et si le simple fait d'ajouter quelques fonctionnalités est déjà compliqué, alors imaginer devoir maintenir l'application pendant plusieurs années, c'est carrément impossible. Sauf que le Classement des Associations, ça fait 11 ans qu'il existe et que la plateforme de vote va devoir tenir dans le temps.

Mais nous, on a une solution pour Atom. Elle s'appelle Unpoly.

Unpoly, c'est un script que vous ajoutez simplement à votre application web rendu côté serveur type Laravel, Symfony, Rails, Adonis ou n'importe quel framework du même style et même WordPress et qui vous permet de lui faire bénéficier d'une expérience utilisateur moderne.

Autrement dit, Unpoly est un outil pour construire des applications web sans la complexité des frameworks front-ends mais avec leurs expériences utilisateurs. La promesse est belle.

Du coup, commençons par comprendre ce que les applications rendus côté serveur font de bien.

- Large choix d'outils matures et éprouvés comme Laravel, Symfony, Rails, Adonis...
- Technologie peu complexe puisque vous faites votre rendu côté serveur donc pas besoin de dupliquer le travail côté client.
- Accès aux données de manière synchrone, pas besoin de faire des requêtes AJAX.
- Temps du premier rendu (FCP) plus rapide car le navigateur n'a pas besoin de télécharger le JavaScript pour afficher la page (ou alors de compliquer le code du client pour y faire du rendu côté serveur).
- Fonctionne sur tous les types d'appareils puisque c'est directement de l'HTML qui arrive dans le navigateur.

En revanche, il y a des points sur lesquels les applications rendus côté serveur sont moins bien qu'une application avec un gros framework front-end comme React, Vue ou Angular.

- Retour d'information sur l'interaction lente, par exemple, quand on clique sur un bouton, il faut attendre que la page se recharge pour voir si l'action a été effectuée ou non.
- Chargement des pages détruit les états transitoires. C'est à dire que tout ce qui n'est pas dans l'URL est perdu quand on change de page. Par exemple, si on a un formulaire avec des champs remplis, quand on change de page, tout est perdu.
- Interactivité limitée notamment sur la gestion des "layers". La création des modals et des popups est plus compliquée et moins flexible. que dans une application avec un gros framework front-end.
- Animations complexes, par exemple, quand on veut faire une animation de transition entre 2 pages, c'est pratiquement impossible.
- Gestion des formulaires complexes avec des champs dynamiques, par exemple, quand on veut ajouter un champ dans un formulaire, c'est compliqué.

C'est là qu'intervient Unpoly.

Évidemment, si je vous parle d'Unpoly, c'est parce qu'il permet de combler une partie des lacunes des applications rendus côté serveur.

- Des attributs HTML pour écrire une interface utilisateur moderne. Par exemple, pour faire une animation de transition entre 2 pages, il suffit d'ajouter un attribut à la balise HTML.
- Une logique qui reste sur le serveur dans le sens où il n'y a pas besoin de dupliquer la logique côté client. C'est le serveur qui gère tout comme le routage ou la validation des formulaires.
- Fonctionne avec n'importe quel langage de serveur. Évidemment puisque Unpoly est un script JavaScript qui est lu et interprété sur le client
- Gère la navigation, les formulaires, les animations et les interactions. C'est à dire que vous pouvez faire des formulaires complexes avec des champs dynamiques, des animations de transition entre 2 pages, des modals et des popups avec quelques attributs HTML.

Le flux classique des pages est le suivant. À chaque changement de page, l'intégralité de la page est rechargé. Le CSS est parsé à nouveau et le JavaScript est ré-exécuté. Les états qui ne sont pas dans l'URL sont perdus.

Le flux Unpoly est le suivant. Par défaut, les pages sont toujours rendus entièrement par le serveur à chaque requête mais on utilise seulement un fragment. Ce fonctionnement permet de garder les états qui ne sont pas dans l'URL.

Finalement, Unpoly permet de mettre en place de l'amélioration progressive.

Pour bien comprendre de quoi il s'agit, faisons une petit analogie avec un ascenseur et un escalator.

D'un côté, dans un immeuble, vous avez un ascenseur.
De l'autre côté, dans un autre immeuble, vous avez un escalator.

Si l'ascenseur est en panne, c'est pénible parce qu'il n'y a plus de moyen de monter dans les étages.
Mais si l'escalator est en panne, rien de grave, on peut toujours monter les escaliers à pied. L'expérience est simplement dégradée.

Et bien l'amélioration progressive, c'est exactement ça. C'est une stratégie de développement qui différencie strictement le contenu de la présentation de tel sorte que que si on retire le JavaScript ou le CSS de notre application web, on a toujours une page qui fonctionne et qui permet d'y retrouver le contenu. On peut toujours naviguer et toujours remplir des formulaires. C'est simplement moins beau et moins fluide.

Alors bien sûr, un escalator, ça ne va pas partout et un ascenseur non plus ! Il faut choisir le bon en fonction de la situation, c'est pareil avec Unpoly et React.

Finalement, il existe des alternatives à React et le web, c'est pas si compliqué mais avec les bons outils !

Unpoly fait parti de ses bons outils pour vous permettre de reprendre le contrôle sur votre vision du web et votre approche que vous en avez !

Mais pour autant, il existe des cas, rares, où rien ne pourra égaler un framework front-end.

Merci
