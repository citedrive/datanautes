---
title: "En Begynders Guide til Markdown"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Datanautes Team"]
description: "Udforsk Markdown: det brugervenlige markup-sprog brugt af forfattere & udviklere. Forbedre webindholdets læsbarhed på platforme som GitHub. Dyk ned i vores guide!"
---

Markdown er et enkelt sprog designet til at strømline indholdsskrivning. Det bruges overalt, fra GitHub til note-apps. Uanset om du er forfatter, udvikler, eller bare nogen, der ønsker at forenkle din web-skrivning, er denne guide til dig!

## Hvad er Markdown?

Markdown er et letvægts markup-sprog, skabt af John Gruber i 2004, for at gøre formateret tekst letlæselig i plain-text redigeringsprogrammer. Det er især populært til blogging, instant messaging, fora, samarbejdsværktøjer, dokumentation og readme-filer. Over tid førte variationer i dens fortolkning til oprettelsen af CommonMark i 2014, en klarere specifikation med en testpakke for at sikre ensartet implementering.

## Grundlæggende Syntax

Her er en hurtig gennemgang af de mest almindelige elementer, du vil have brug for:

### 1. Overskrifter

Overskrifter oprettes ved at bruge `#`-symbolet efterfulgt af et mellemrum:

```md
# Dette er en H1 
## Dette er en H2 
### Dette er en H3
```

### 2. Fremhævelse

For _kursiv_ brug `*asterisker*` eller `_understregninger_`.

For **fed** brug `**dobbelt asterisker**` eller `__dobbelt understregninger__`.

### 3. Lister

#### Uordnede lister

Brug asterisker, plus eller minus efterfulgt af et mellemrum:

```md
* Emne 1 
* Emne 2   
    * Underemne 2.1   
    * Underemne 2.2
```

#### Ordnet lister

Brug simpelthen tal efterfulgt af punktummer:

```md
1. Første emne 
2. Andet emne 
3. Tredje emne
```

### 4. Links

Du kan oprette et [inline link](https://www.eksempel.com/) med følgende syntaks:

```md
[Vist tekst](URL "Valgfri titel")
```

### 5. Billeder

Billeder er lig med links, men med et forudgående udråbstegn:

```md
![Alternativ tekst](URL "Valgfri titel")
```

### 6. Blokcitater

For blokcitater skal du bruge `>`-tegnet før din tekst:

```md
> Dette er et blokcitat.
```

### 7. Kodestykker

For inline `kode`, ombryd din kode med accenter:

```md
`kode her` 
```

For flerlinjede kodestykker, brug triple accenter:
```md
\```
Linje 1 af kode
Linje 2 af kode
Linje 3 af kode
\```
```

### 8. Horisontal linje

Du kan oprette en horisontal linje med tre bindestreger, asterisker eller understregninger:

```md
---
```

## Andre nyttige elementer

1. **Tabeller**:

```md
| Overskrift1 | Overskrift2 | 
|------------|------------| 
| celle1     | celle2     | 
| celle3     | celle4     |
```

| Overskrift1 | Overskrift2 | 
|------------|------------| 
| celle1     | celle2     | 
| celle3     | celle4     |

2. **Opgavelister**:

```md
- [x] Fuldført opgave 
- [ ] Ikke fuldført opgave
```

- [x] Fuldført opgave 
- [ ] Ikke fuldført opgave

3. **Forankringslink**: `[Link tekst](#ankernavn)`

```md
# Denne overskrift er et anker 
[Link til anker ovenfor](#denne-overskrift-er-et-anker)
```

# Denne overskrift er et anker 
[Link til anker ovenfor](#denne-overskrift-er-et-anker)

## At arbejde med citater

Markdown har ikke en indbygget syntaks til citater, men mange værktøjer, som Pandoc, understøtter udvidelser for det.

### Grundlæggende citationssyntaks (brugt af Pandoc)

```md
Ifølge Smith [-@Smith2023], er Markdown forbløffende enkelt. 

Det er også blevet observeret af Doe [@Doe2022] i hans seneste publikation.
```

- **Markører**: Det kan være sidetal, kapitler, billeder eller enhver anden type sektion.

```md
[@Smith2023, s. 23-25]
```

```md
[@Doe2022, kap. 2]
```

Bemærk: Bemærk brugen af `-` før `@Smith2023`. På denne måde gentages forfatterens navn ikke, når du vil have citationen i parentes. Uden `-` ville det betragtes som en narrativ citation.

### Opret en bibliografifil:

For at oprette og administrere din bibliografi anbefaler vi at bruge **[CiteDrive](https://www.citedrive.com/)**. CiteDrive er en cloud-baseret, samarbejdende referencemanager, der er indfødt til BibTeX, designet specielt til Overleaf, LaTeX, og R Markdown brugere. Den forenkler processen med at oprette og eksportere citater i `.bib` format.

Her er et eksempel på en BibTeX-post, du kan have i din `.bib` fil:

```bibtex
@article{Smith2023,
	title        = {Studietitel},
	author       = {Smith, John},
	year         = 2023,
	journal      = {Journalnavn},
	volume       = 5,
	pages        = {10--20}
}
```

#### Brug Pandoc med CSL-stil:

Pandoc kan konvertere din markdown-fil med citater til et korrekt formateret dokument ved hjælp af CSL-stil. Her er den grundlæggende kommando:

```bash
pandoc dinfil.md --citeproc --bibliography=dinBibFil.bib --csl=dinCSLstil.csl -o output.docx
```

Hvor:

- `dinfil.md` er din markdown-fil.
- `--citeproc` aktiverer citatprocessoren.
- `dinBibFil.bib` er din bibliograffil.
- `dinCSLstil.csl` er din valgte citationstil (som APA, MLA osv.). Der er mange CSL-stile tilgængelige online.
- `output.docx` er den ønskede output-fil (i dette tilfælde et Word-dokument).

Husk, at du for at dette skal fungere, vil have brug for både Pandoc og de relevante CSL-filer. Det endelige output vil afhænge af den CSL-stil, du vælger.

## Applikationer og platforme, der bruger Markdown

- **GitHub** - Til dokumentation og kommentarer i repositories.
- **Obsidian** - Videnbase, der arbejder på en lokal mappe med plain text markdown-filer.
- **R Markdown** - Integrerer grundlæggende markdown-syntaks med indbyggede R kodeblokke for dynamisk dataanalyse og rapportering.
- **Discord** - Bruger en modificeret version af Markdown til tekstformatering i chat.
- **Reddit** - Gør det muligt for brugere at formatere deres indlæg og kommentarer med en version af Markdown.
- **Jekyll** - En statisk webstedsgenerator, der understøtter Markdown til indholdsoprettelse.
- **Notion** - Et noterings- og organisationsværktøj, der understøtter Markdown.
- **VSCode** - En kodeeditor, der understøtter Markdown til dokumentation og har en indbygget browser.
