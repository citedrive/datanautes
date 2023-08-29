---
title: "Guida introduttiva a Markdown"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Datanautes Team"]
description: "Scopri Markdown: il linguaggio di markup user-friendly utilizzato da scrittori & sviluppatori. Migliora la leggibilità del contenuto web su piattaforme come GitHub. Immergiti nella nostra guida!"
---

Markdown è un linguaggio semplice progettato per semplificare la scrittura di contenuti. È utilizzato ovunque, da GitHub alle applicazioni di note. Se sei uno scrittore, uno sviluppatore, o semplicemente qualcuno che vuole semplificare la tua scrittura web, questa guida è per te!

## Cos'è Markdown?

Markdown è un linguaggio di markup leggero, creato da John Gruber nel 2004, per rendere il testo formattato facilmente leggibile negli editor di testo semplice. È particolarmente popolare per il blogging, la messaggistica istantanea, i forum, gli strumenti collaborativi, la documentazione e i file readme. Nel tempo, variazioni nella sua interpretazione hanno portato alla creazione di CommonMark nel 2014, una specifica più chiara con un insieme di test per assicurare un'implementazione coerente.

## Sintassi di base

Ecco una rapida panoramica degli elementi più comuni che utilizzerai:

### 1. Intestazioni

Le intestazioni vengono create utilizzando il simbolo `#`, seguito da uno spazio:

```md
# Questo è un H1 
## Questo è un H2 
### Questo è un H3
```

### 2. Evidenziazione

Per l'_italic_, usa `*asterischi*` o `_underscore_`.

Per il **grassetto**, usa `**doppi asterischi**` o `__doppi underscore__`.

### 3. Liste

#### Liste non ordinate

Usa asterischi, più, o meno seguiti da uno spazio:

```md
* Elemento 1 
* Elemento 2   
    * Sotto-elemento 2.1   
    * Sotto-elemento 2.2
```

#### Liste ordinate

Usa semplicemente numeri seguiti da punti:

```md
1. Primo elemento 
2. Secondo elemento 
3. Terzo elemento
```

### 4. Link

Puoi creare un [link inline](https://www.example.com/) con la seguente sintassi:

```md
[Testo mostrato](URL "Titolo opzionale")
```

### 5. Immagini

Le immagini sono simili ai link ma con un punto esclamativo davanti:

```md
![Testo alternativo](URL "Titolo opzionale")
```

### 6. Citazioni

Per le citazioni, usa il carattere `>` prima del tuo testo:

```md
> Questa è una citazione.
```

### 7. Blocchi di codice

Per il codice `inline`, circonda il tuo codice con backticks:

```md
`il codice va qui` 
```

Per blocchi di codice multilinea, usa tre backticks:
```md
\```
Riga 1 di codice
Riga 2 di codice
Riga 3 di codice
\```
```

### 8. Linea orizzontale

Puoi creare una linea orizzontale con tre trattini, asterischi o underscore:

```md
---
```

## Altri elementi utili

1. **Tabelle** :

```md
| Intestazione1 | Intestazione2 | 
|--------------|--------------| 
| cella1       | cella2       | 
| cella3       | cella4       |
```

2. **Liste di compiti** :

```md
- [x] Task completato 
- [ ] Task non completato
```

3. **Barrato** :

Usa `~~` per barrare il testo:

```md
~~barrato~~
```

## Scrivere citazioni in Markdown

Nel tuo file Markdown, puoi aggiungere citazioni usando il simbolo `@` seguito dalla chiave di citazione. Ad esempio:

```md
Secondo studi recenti [@Smith2023], l'effetto è...
```

Puoi anche usare più citazioni:

```md
Alcuni ricercatori sostengono questo punto [@Smith2023; @Doe2022].
```

### Citazioni tra parentesi vs. Citazioni narrative:

Le citazioni **tra parentesi** (o incorporate nel testo) posizionano l'autore e l'anno tra parentesi:

```md
Questo fenomeno è stato osservato in diversi contesti (ad esempio, [@Smith2023]).
```

Le citazioni **narrative** integrano l'autore direttamente nella frase:

```md
Secondo @Smith2023, il fenomeno...
```

### Creare un file di bibliografia:

Per creare e gestire la tua bibliografia, raccomandiamo di utilizzare **[CiteDrive](https://www.citedrive.com/)**. CiteDrive è un gestore di riferimenti BibTeX basato sul cloud, progettato specificamente per gli utenti di Overleaf, LaTeX e R Markdown. Semplifica il processo di conservazione e esportazione delle citazioni nel formato `.bib`.

Ecco una voce BibTeX che potresti avere nel tuo file `.bib`:

```bibtex
@article{Smith2023,
	title        = {Titolo dello studio},
	author       = {Smith, Giovanni},
	year         = 2023,
	journal      = {Nome della rivista},
	volume       = 5,
	pages        = {10--20}
}
```

## Applicazioni e piattaforme che utilizzano Markdown

- **GitHub** - Per la documentazione e i commenti all'interno dei repository.
- **Obsidian** - Una base di conoscenze che funziona su una cartella locale di file Markdown in formato testo.
- **R Markdown** - Integra la sintassi di base di markdown con frammenti di codice R per generare documenti dinamici.
- **Docusaurus** - Una moderna piattaforma open source per costruire, distribuire e gestire la documentazione di prodotto.