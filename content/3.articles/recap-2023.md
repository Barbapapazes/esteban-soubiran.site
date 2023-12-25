---
title: Récap 2023
description: Césure, premier talk Devoxx et intégration d'UnJS, mon année 2023 marque un tournant.
image: /assets/socials/index.png
cover:
  src:
  alt:
resources:
  - name: Talk Devoxx
    url: /talks/unpoly-pour-reprendre-le-controle
    icon: i-heroicons-chat-bubble-bottom-center-text-20-solid
  - name: Le prochain framework Vue.js
    url: /articles/le-prochain-framework-vue
    icon: i-heroicons-document-text-20-solid
datePublished: 2023-12-25
dateModified: 2023-12-25
---

Mon année 2023 marque un tournant dans ma vie et ma petite carrière de développeur. Alors en cette fin d'année, je me suis dit qu'il était temps de faire un petit récapitulatif de cette année.

## Césure

Commençons par le début et revenons sur ma césure.

En mai 2022, je décide de partir en césure à partir de la rentrée 2022 jusqu'à la rentrée 2023. Dans ma tête, cette césure a 2 grands objectifs :

1. Me permettre de me conforter dans ma volonté de faire du développement web;
2. Rencontrer de nouvelles personnes et découvrir de nouveaux univers.

Pour cela, je décide de rester à Paris, où j'y faisais déjà mon stage de mars à août 2022, et de continuer à travailler dans la même entreprise pour avoir une stabilité financière.

### Meetup

Pour rencontrer de nouvelles personnes et découvrir de nouveaux univers, je décide de participer à des meetups, beaucoup de meetups pour y parler de JavaScript, de développement web, de Notion et même d'entrepreneuriat. Chaque mois, j'assiste à 2 à 3 meetups.

2 meetups m'ont particulièrement marqués.

Le premier était en novembre 2022 à [ParisJS](https://parisjs.org/). Durant celui-ci, un organisateur de la Devoxx est venu pour présenter l'événement et expliquer qu'il était à la recherche de speaker débutant pour parler de développement web. C'est à ce moment que je me suis dit que je devais me lancer et proposer un talk.

Le second est un meetup chez [Qonto](https://qonto.com/) en mars 2023 où j'ai pu assister au [GDILive#4](https://www.gdiy.fr/live-4automatisation/) (Génération Do It Yourself) avec Matthieu Stefani, Shubham Sharma, Chloe Giraut, Christofer Ciminelli et Antoine Wemaëre. Un moment passionnant avec des échanges passionnants autour de l'automatisation de la finance pour les indépendants.

![GDILive#4](/images/articles/recap-2023/gdi-live.webp)

### Devoxx

Après avoir découvert la Devoxx en novembre et passé mon mois de décembre à réfléchir et soumettre 2 talks pour l'édition 2023, je reçois, en février 2023, un mail m'annonçant que mon talk sur Unpoly a été retenu. Les choses sérieuses commencent, je dois préparer mon talk !

En ayant un talk retenu, ça m'a aussi permis de participer aux 3 jours de la conférence et d'entendre parler de GitOps, de Java, de sécurité, de PostgreSQL et même de [la loi de Conway](https://youtu.be/Kx7XOqrPoWk?si=vqOShmxtMIbsP50b). C'était une expérience de fou, tellement d'entreprises à découvrir et de personnes passionnées avec qui discuter.

![Devoxx](/images/articles/recap-2023/devoxx.webp)

Durant un temps d'échange avec les équipes de GitHub, je découvre qu'ils organisent un GitHub Galaxy à Paris en mai. Alors ni une ni deux, je m'y inscris.

### GitHub Galaxy

En arrivant à l'événement le 3 mai, je me demande un peu ce que je fais là. Le GitHub Galaxy, c'est plutôt un événement à destination des entreprises mais en m'inscrivant, je ne le savais pas. De toute façon, mon objectif était de rencontrer des personnes et de découvrir de nouvelles choses et je n'allais pas être déçu.

Pour l'occasion, des personnes de GitHub étaient venues directement des États-Unis pour présenter les nouveautés de GitHub dont GitHub Copilot. C'était fascinant d'avoir un peu les coulisses de son fonctionnement et de s'immerger dans GitHub Copilot X avec des démonstrations en direct.

![GitHub Galaxy](/images/articles/recap-2023/github-galaxy.webp)

Il y a aussi eu un temps d'échange directement avec les équipes pour discuter de la plateforme et ce qui pouvait y être amélioré.

Et surtout, j'ai eu la chance de rencontrer et échanger avec Anthony Fu ! Il est passionnant !

## Code et Développement web

Ma césure m'a permis de me concentrer davantage sur le développement web en ayant plus de temps à disposition. Ainsi, j'ai pu commencer à utiliser sérieusement Nuxt et Adonis à travers différents projets comme ceux du [Classement des Associations](https://github.com/classement-des-associations). Plus j'utilisais Nuxt et plus je me rendais compte que je ne comprenais pas vraiment ce qu'il se passait, notamment comment utiliser Nitro et où trouver sa documentation.

### Construire un framework web full-stack

Le 11 mai 2023, tout change lorsque je tombe sur la conférence de Daniel Roe : ["Building for the Edge - Crafting a Next-Gen Framework"](https://youtu.be/hdHLU0qHKhA?si=UsjHVTBBAlL6T2OO). Il y construit un framework full-stack à l'aide de Nitro et React. Je dois avouer, j'ai beau la regarder en boucle, je ne comprends pas grand-chose. Pourtant, c'est fascinant de voir à quel point ça lui semble simple.

Alors pour comprendre, je me suis mis en tête que j'allais faire comme lui mais en utilisant Vue. J'avais mal estimé la difficulté ! Il m'a bien fallu 1 semaine avant d'arriver à faire quelque chose de fonctionnel. En revanche, le processus m'a énormément appris, tant sur Vite que sur Nitro et la relation entre les 2. Cela m'a aussi permis de découvrir UnJS et de commencer à me plonger dans l'écosystème !

### UnJS

Construire un framework full-stack m'a permis de faire un premier pas dans l'écosystème incroyable qu'est UnJS. Dans le même temps, que ce soit sur Twitter, sur Discord ou dans les issues GitHub de Nuxt, je me rends compte que la confusion est grande et que ce qu'est UnJS et la manière dont il est utilisé par Nuxt ne sont pas clairs.

Du coup, je décide d'écrire [une prise en main sur Nitro](/articles/nitro-101-premiere-prise-en-main). Je partage l'article sur les réseaux et sur Discord et il est plutôt bien accueilli. Cela me motive à continuer à explorer et partager mes découvertes des différents projets d'UnJS. J'écris donc un article sur consola, defu, rc9, c12 et destr. Puis je reçois un message sur Discord qui me dit que mes articles sont bien mais qu'ils sont en français et qu'une version en anglais, ça serait super !

Effectivement, ça serait super, mais mon petit blog n'a pas vocation à recevoir du contenu en anglais. Du coup, je me pose, je réfléchis et je regarde ce qui se fait dans les autres écosystèmes. Je m'aperçois que le concept de "mastering" x ou y est plutôt commun. Alors pourquoi ne pas lancer la même chose pour UnJS ? C'est comme ça que je me suis lancé dans la création de Mastering UnJS.

Ce projet n'a jamais vu le jour. Pooya Parsa, le créateur d'UnJS, m'a contacté pour me demander si je n'étais pas plus intéressé à l'idée d'aider l'écosystème à se développer en travaillant sur le site et le marketing plutôt que de commencer à séparer la communauté. J'ai trouvé l'idée géniale, l'opportunité unique donc j'ai accepté sans trop hésiter.

Depuis août 2023, je fais partie de l'équipe d'UnJS en charge du site et du marketing. C'est une expérience de dingue où je m'éclate à travailler pour produire des outils et du contenu permettant à chacun de mieux comprendre UnJS. Jusqu'à présent, c'était un travail en sous-marin mais en 2024, ça devrait commencer à devenir très intéressant !

## Conclusion

En bref, une année riche en rencontres et en découvertes, tant humaines que techniques. Une année qui m'a clairement permis de répondre à mes objectifs initialement fixés et d'aller même encore plus loin en me permettant de me plonger dans le monde open-source.

Cet investissement se retrouve clairement dans mes contributions GitHub, passant de 2225 en 2022 à plus de 2600 en 2023 et je suis très fier de ça !

![Mes contributions GitHub](/images/articles/recap-2023/github-contributions.webp)

Joyeux Noël et bonnes fêtes ! 🎄🎉
