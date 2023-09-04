---
title: "Introduksjon til Markdown"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Datanautes Team"]
description: "Lær Markdown, et brukervennlig markup-språk for å forbedre lesbarheten av webinnhold på plattformer som GitHub. Denne guiden vil vise deg hvordan!"
isLocalized: true
---

Markdown er et enkelt språk for innholdsproduksjon. Fra GitHub til notatapplikasjoner, det brukes overalt. Denne guiden er laget for alle som ønsker å gjøre skriving, utvikling, og nettinnhold enklere.

## Hva er Markdown?

Markdown er et lettvekts markup-språk som ble utviklet av John Gruber i 2004, designet for å være enkelt å skrive og lese i tekstredigerere. Det er mye brukt for blogginnlegg, direktemeldinger, forum, samarbeidsverktøy, dokumentasjon, README-filer, og mer. Men over tid har det oppstått flere variasjoner av Markdown, noe som førte til opprettelsen av CommonMark-spesifikasjonen i 2014.

## Grunnleggende syntaks

En kort oversikt over de mest brukte syntaksene:

### 1. Overskrifter

Overskrifter lages med `#`-symbolet:

```md
# H1 Overskrift
## H2 Overskrift
### H3 Overskrift
```

### 2. Utheving

*Italic* lages med `*` eller `_`, 

**Fet** lages med `**` eller `__`.

### 3. Lister

#### Uordnet liste:

```md
* Punkt 1
* Punkt 2
    * Underpunkt 1
    * Underpunkt 2
```

#### Ordnet liste:

```md
1. Første punkt
2. Andre punkt
3. Tredje punkt
```

### 4. Lenker

```md
[Lenketekst](https://www.example.com/)
```

### 5. Bilder

```md
![Alternativ tekst](bildeURL)
```

### 6. Sitater

```md
> Dette er et sitat.
```

### 7. Kode

```md
`inline kode`
kode over flere linjer
```

### 8. Horisontal linje

```md
---
```

## Noen andre elementer

1. **Tabeller**:

```md
| Header1 | Header2 |
|---------|---------|
| Celle1  | Celle2  |
| Celle3  | Celle4  |
```

2. **Oppgavelister**:

```md
- [x] Fullført
- [ ] Ikke fullført
```

3. **Gjennomstrekning**:

```md
~~Gjennomstreket~~
```

## Sitater

```md
Nyere forskning viser[@Smith2023]...
```

```md
Noen hevder[@Smith2023; @Doe2022]...
```

```md
En studie pekte på dette[@Smith2023].
```

```md
Smith(2023) kom til denne konklusjonen.
```

## Verktøy som støtter Markdown

- **VSCode**: En gratis, profesjonell kodeeditor som støtter Markdown med ulike utvidelser.
- **Hugo**: En statisk nettsidegenerator med innebygd Markdown-støtte.
- **Docusaurus**: En moderne web-dokumentasjonsplattform.

