# Bienvenue à Cloud Haiku

Cloud Haiku est un référentiel open-source qui collecte des haïkus sur le cloud et la technologie du cloud et les publie sur son site Web.

Veuillez noter les éléments suivants pour le mois d'octobre et ses environs :

* En raison de la popularité de ce répertoire pendant la célébration de la Hacktoberfest, veuillez respecter le temps nécessaire aux mainteneurs pour examiner et fusionner les demandes de retrait. **Les révisions seront effectuées sur les pull requests dans l'ordre où elles sont reçues, et les révisions peuvent inclure une demande de changement**. 

* Les mainteneurs ne peuvent effectuer qu'un seul tour de révision. Si votre demande n'est pas acceptée lors du deuxième tour, elle sera fermée et marquée comme invalide. 

* Le fait de faire appel à des responsables ralentit en fait le processus, car les responsables sont des **commentaires utilisés pour vérifier** si les demandes pull ont été traitées.

## [Haikus](https://do-community.github.io/cloud_haiku/haikus/)

Tous nos **[haikus](https://do-community.github.io/cloud_haiku/haikus/)** soumis par les utilisateurs sont disponibles via le répertoire [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus).

## Contribuer

Pour contribuer un haiku à ce dépôt, lisez le tutoriel DigitalOcean "[How To Create a Pull Request on GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)" et composez un haiku en Markdown (`.md`).

**Note : En raison de la popularité de ce dépôt, notamment à l'occasion de la Hacktoberfest, nous n'accepterons qu'une seule contribution haïku par utilisateur.**

### Nom de fichier et emplacement

Vous devez nommer votre fichier Markdown " votre_haiku_titre.md " et le placer dans le répertoire [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) de ce projet.

### Format Jekyll

Étant donné qu'il s'agit d'un site [Jekyll](https://jekyllrb.com/), vous devrez également inclure un texte passe-partout en haut du fichier :

```yaml
---
layout: haiku
title:
author:
---
```

Gardez la mise en page comme `haiku`. A côté du `title:` mettez le titre de votre haïku. À côté de l'"auteur", mettez votre nom (il peut s'agir de votre prénom ou d'un pseudonyme si vous le souhaitez).

N'ajoutez pas d'autres lignes au format ci-dessus.

**Note** : Nous utilisons Travis CI comme suite de tests pour nous aider à tester automatiquement les fichiers markdown. Bien que les responsables aient parfois besoin de passer outre la suite de tests, le fait de la désactiver en tant que contributeur entraînera un travail supplémentaire pour les responsables. Veuillez faire en sorte que l'intitulé de votre fichier markdown corresponde exactement à ce qui est décrit ci-dessus afin de garantir la fusion de votre demande de retrait.

Sous ce titre, vous placerez votre haïku.

### Écrire un haïku

Dans l'esprit de l'open source, nous aimerions que vous écriviez un haïku original plutôt que de soumettre un haïku déjà écrit par quelqu'un d'autre.

Votre haïku doit être amusant et stimulant à écrire. Vous devez vous assurer qu'il respecte les directives poétiques de ce qu'est un haïku, que vous pouvez lire dans la section suivante.

### Format du haïku

Les haïkus sont une forme traditionnelle de poésie japonaise. Ils sont composés de trois lignes et comportent un total de 17 syllabes. Ces poèmes suivent le format 5-7-5 des syllabes sur les trois lignes.

*Les syllabes sont une unité d'organisation des sons de la parole qui comprennent généralement une voyelle. Par exemple, le mot **ordinateur** est composé de trois syllabes : **com** - **put** - **er**.

Considérons un exemple de haïku de ce référentiel :

```
Distributed cloud  <br>
Like the octopuses' minds  <br>
Across the network  <br>
```

Ci-dessus, nous voyons que le haïku est composé de 3 lignes.

La première ligne a une longueur de 5 syllabes, la deuxième ligne a une longueur de 7 syllabes et la troisième ligne a une longueur de 5 syllabes.

```
Dis-trib-ut-ed cloud  # 5 syllables  
Like the oc-to-pus-es' minds  # 7 syllables  
A-cross the net-work  # 5 syllables  
```

Pour vérifier que vous utilisez le bon nombre de syllabes, vous pouvez utiliser un outil tel que [http://www.haikusyllablecounter.com](http://www.haikusyllablecounter.com).

De nombreuses formes de poésie ont des règles esthétiques spécifiques à respecter. Ce défi fait de l'écriture de la poésie une forme d'art agréable.

### Sauts de ligne

Pour garantir des sauts de ligne appropriés, veuillez utiliser les sauts de ligne HTML, comme suit :

```markdown
---
layout: haiku
title: Octopus Cloud
author: Sammy
---

Distributed cloud<br>
Like the octopuses' minds<br>
Across the network<br>
```

### Un exemple

Par exemple, le haïku de Sammy le Requin s'appelle "Octopus Cloud", et il a écrit son nom en tant que "Sammy". Sammy a nommé son fichier [`octopus_cloud.md`] (https://github.com/do-community/cloud_haiku/blob/master/_haikus/octopus_cloud.md).

```markdown
---
layout: haiku
title: Octopus Cloud
author: Sammy
---

Distributed cloud<br>
Like the octopuses' minds<br>
Across the network<br>
```

### Soumettre une Pull Request

Nous sommes heureux de fusionner les pull requests valides avec ce dépôt ! Toute demande qui respecte les directives de formatage ci-dessus sera intégrée à ce projet.

Gardez vos haïkus liés à la technologie de l'infrastructure du cloud, et prenez plaisir à contribuer à ce projet !

![Sammy le requin et d'autres poissons qui nagent](https://do-community.github.io/cloud_haiku/assets/swim.png)
