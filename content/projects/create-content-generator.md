---
titre: Un générateur de contenu pour le site campus 
createdAt: 2020-09-16
---

J'ai créé un générateur de contenu pour permettre à chaque association de mon campus de créer et personnaliser sa page pour le site campus.

<!-- more -->

## Contexte

J'ai refait [le site campus](./new-site-campus.md) de mon école. Mais je savais que ça ne pouvait pas être suffisant. En effet, on peut avoir le plus joli site du monde, si ce dernier n'est pas rempli, alors il n'a que peu d'intérêt.

Cependant, le nouveau site campus se basait sur des fichiers markdown. Et je savais que les associations n'allaient pas forcément être à l'aise avec ce format de fichier.

J'ai décidé de simplifier la vie de ces dernières en créant un générateur de contenu. Celui-ci est un ensemble de template accessible via une interface web. Il permet, selon l'aisance de la personne, de créer un fichier markdown avec les informations de l'association.

## Générateur de contenu

Il y a 3 niveaux de fonctionnements.

<!-- Image des 3 niveaux de fonctionnement -->

Le premier est le plus simple. Il s'agit d'un formulaire disponible où, en fonction du template choisi, l'utilisateur a la possibilité de remplir différents champs. Lorsque l'utilisateur a terminé, il peut alors généré le fichier markdown correspondant. Il a aussi la possibilité d'ajouter des images. Il peut ensuite télécharger un dossier contenant le fichier markdown ainsi que les images compressées. Il ne lui reste qu'à l'envoyer au gestionnaire du site pour l'ajouter.

<!-- Image du formulaire -->

Le second niveau consiste à passer par un Codesandbox pour éditer le contenu sans toute la complexité de GitHub. Une fois l'édition effectué, il suffit d'envoyer le lien du Codesandbox au gestionnaire du site pour procéder aux modifications.

Le troisième niveau est le plus complexe. Il s'agit de cloner le repository GitHub du site campus. L'utilisateur peut alors éditer le fichier markdown directement sur son ordinateur. Une fois l'édition effectué, il suffit de push les modifications sur GitHub pour que le site via une Pull Request. Le gestionnaire n'a plus qu'à approuver les modifications et le site est mis à jour.

Le générateur est open-source et [disponible sur GitHub](https://github.com/Campus-INSA-CVL/campus-website-templates).

## Conclusion

Ce générateur m'a permis de simplifier la vie des auteurs de contenu. En effet et dès sa mise en place, j'ai reçu énormément de fiches créées via ce générateur.

Cependant, il ne fut pas si simple à créer. En effet, chacun des formulaires est généré via un fichier de configuration et à la volée. Ainsi, il m'a fallu créer un système de formulaire dynamique où les images sont retenues, optimisées avant d'être téléchargées. Il a aussi fallu mettre en place le système de téléchargement de ce dossier tout cela via une application web static.

J'ai pu continuer à me familiariser avec [VueJS](https://vuejs.org) et [Vuetify](https://vuetifyjs.com). 

Au final, je trouve que c'est un outil très précieux pour garantir le bon fonctionnement du site campus.
