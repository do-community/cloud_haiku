# Benvenuto in Cloud Haiku

Cloud Haiku è una repository open-source che colleziona haiku riguardo il cloud e la tecnologia e li pubblica sul suo sito.

**Data la popolarità di questa repository durante l'Hacktoberfest, per favore rispetta il tempo che impiegano gli amministratori per confermare e unire le pull requests. Potresti aspettare anche una settimana per ricevere una risposta, che potrebbe includere richieste di cambiamento.**

## [Haiku](https://do-community.github.io/cloud_haiku/haikus/)

Tutti gli haiku inseriti dagli utenti **[haiku](https://do-community.github.io/cloud_haiku/haikus/)** sono disponibili nella cartella [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) .

## Dai anche tu il tuo contributo

Per inserire un haiku in questa repository, leggi come inviare una pull request nel tutorial creato da DigitalOcean "[How To Create a Pull Request on GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)" dopodichè componi un haiku in formato Markdown (`.md`).

**Nota bene: Vista la popolarità di questa repository, specialmente per l'Hacktoberfest, accetteremo un solo haiku per utente.**

### Nomi File e Cartelle

Dovresti rinominare il tuo haiku `titolo_haiku.md` e inserirlo nella cartella [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) di questo progetto.

### Formato Jekyll

Poichè questo sito è in formato [Jekyll](https://jekyllrb.com/) , avrai bisogno anche di una targhetta all'inizio del file:

```yaml
---
layout: haiku
title: IL TUO TITOLO
author: IL TUO NOME
---
```

Mantieni il layout come `haiku` e: 
-Vicino a `title:` inserisci il titolo del tuo haiku. 
-Vicino `author:` inserisci il tuo nome (puoi anche inserire uno pseudonimo se vuoi).
-Si prega di non aggiungere altre righe alla targhetta iniziale.

**Nota**: Usiamo Travis CI come metodo per testare automaticamente i file in formato markdown. Per favore lascia l'intestazione del tuo file Markdown come descritto sopra in modo da assicurarti che la pull request sia accettata e unita alla repository.

Al di sotto della intestazione scriverai il tuo haiku.

### Scrivere un Haiku

Nello spirito open source, ci piacerebbe che tu scrivessi un haiku originale piuttosto che inviarne uno scritto da altri.

Il tuo haiku dovrà essere difficile ma divertente da scrivere. Dovrai assicurarti che il tuo haiku rispecchi le linee guida di questo tipo di poesia che troverai qui sotto.

### Haiku Format

Gli Haiku sono una forma di poesia tradizionale giapponese. 
Consistono di tre versi e 17 sillabe totali che seguono lo schema di sillabe 5-7-5.

Le *Sillabe* sono un'unità organizzativa delle parole che di solito contengono una vocale.
Per esempio, la parola **telefono** è composta di quattro sillabe: **te** - **le** - **fo** - **no**.
Consideriamo un esempio di haiku in Inglese preso da questa repository...

```
Distributed cloud  <br>
Like the octopuses' minds  <br>
Across the network  <br>
```

Notiamo che l'haiku è composto da tre versi.

Il primo è di 5 sillabe, il secondo di 7 sillabe, e il terzo di nuovo di 5, seguendo quindi lo schema proposto.

```
Dis-trib-ut-ed cloud  # 5 sillabe 
Like the oc-to-pus-es' minds  # 7 sillabe  
A-cross the net-work  # 5 sillabe
```

Per verificare che tu stia usando il numero giusto di sillabe puoi utilizzare il tool [http://www.haikusyllablecounter.com](http://www.haikusyllablecounter.com).

Molte forme di poesia hanno le proprie regole da seguire. Questa sfida rende la poesia una forma d'arte ancora piu divertente.

### Fine riga

Per essere sicuro/a che le righe vengano divise, usa le "line breaks" del linguaggio HTML come segue:

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

### Esempio

Per esempio, l'haiku di Sammy the Shark è chiamato "Octopus Cloud", e lui ha scritto il suo nome come "Sammy". Sammy ha rinominato il suo file [`octopus_cloud.md`](https://github.com/do-community/cloud_haiku/blob/master/_haikus/octopus_cloud.md).

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

### Test

Questa repository contiene uno script di test che verrà effettuato su ogni pull request. Per fare il test in locale avrai bisogno di Node.js installato. Poi potrai installare le dipendenze e fare i tuoi test.

Innanzitutto clona la repository, se non l'hai gia fatto:

```shell
$ git clone https://github.com/do-community/cloud_haiku.git
```

Dopodichè cambia cartella e installa le dipendenze `npm`:

```shell
$ cd cloud_haiku
$ npm install
```

Infine, fai i test:

```shell
$ npm test
```

Nota bene che vista la "creatività" della linguà inglese è possibile che la libreria che conta le sillabe sbagli. Se la tua pull request fallisce un test e pensi che ci sia un errore, rispondi con un commento.

### Invia una a Pull Request

Siamo felici di unire una pull request valida a questa repository! Ogni pull request che rispetta le linee guida sopra riportate sarà aggiunta in questo progetto.

Conserva gli haiku riguardo la tecnologia cloud, e divertiti contribuendo a questo progetto!

![Sammy the Shark and other fish swimming](https://do-community.github.io/cloud_haiku/assets/swim.png)
