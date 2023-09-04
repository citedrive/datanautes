---
title: "Nybörjarguide till Markdown"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Datanautes Team"]
description: "Utforska Markdown: ett skrivvänligt markup-språk använt av skribenter och utvecklare. Förbättra läsbarheten av ditt online-innehåll på plattformar som GitHub. Dyk in i vår guide!"
isLocalized: true
---

Markdown är ett enkelt språk skapat för att förenkla skrivandet av innehåll. Det används överallt, från GitHub till anteckningsappar. Om du är en skribent, utvecklare, eller bara någon som vill förenkla sitt skrivande online, är den här guiden för dig!

## Vad är Markdown?

Markdown är ett lättvikts markup-språk skapat av John Gruber 2004 för att göra formaterad text lättläst i enkel textredigering. Det är särskilt populärt för bloggar, snabbmeddelanden, forum, kollaborativa verktyg, dokumentation och readme-filer. Med tiden ledde olika tolkningar till uppkomsten av CommonMark 2014, en klarare specifikation med ett testsystem för att säkerställa konsekvent implementering.

## Grundläggande syntax

Här är en snabb översikt av de vanligaste elementen du kommer att behöva:

### 1. Rubriker

Skapa rubriker med `#` följt av ett mellanslag:

```md
# Detta är H1 
## Detta är H2 
### Detta är H3
```

### 2. Beteckningar

För _kursiv_ använd `*stjärnor*` eller `_understreck_`.

För **fet** text, använd `**dubbla stjärnor**` eller `__dubbla understreck__`.

### 3. Listor

#### Oordnade listor

Använd stjärnor, plus eller minus följt av ett mellanslag:

```md
* Punkt 1 
* Punkt 2   
    * Underpunkt 2.1   
    * Underpunkt 2.2
```

#### Ordnade listor

Använd bara nummer följt av en punkt:

```md
1. Första punkten 
2. Andra punkten 
3. Tredje punkten
```

### 4. Länkar

Du kan skapa en [inbäddad länk](https://www.example.com/) med följande syntax:

```md
[Visningstext](URL "Valfri titel")
```

### 5. Bilder

Bilder liknar länkar men med ett utropstecken framför:

```md
![Alternativ text](URL "Valfri titel")
```

### 6. Citat

För citat, använd tecknet `>` före din text:

```md
> Detta är ett citat.
```

### 7. Kodblock

För `kod` inline, omslut din kod med omvända citattecken:

```md
`kod här` 
```

För kodblock över flera rader, använd tre omvända citattecken:

```md
\```
Rad 1 av kod
Rad 2 av kod
Rad 3 av kod
\```
```

### 8. Horisontell linje

Du kan skapa en horisontell linje med hjälp av tre streck, stjärnor eller understreck:

```md
---
```

## Andra användbara element

1. **Tabeller**:

```md
| Rubrik1 | Rubrik2 | 
|---------|---------| 
| cell1   | cell2   | 
| cell3   | cell4   |
```

2. **Uppgiftslistor**:

```md
- [x] Utförd uppgift 
- [ ] Oavklarad uppgift
```

3. **Genomstruken**:

Använd `~~` för genomstruken text:

```md
~~genomstruken~~
```

## Att citera i Markdown:

I din Markdown-fil kan du lägga till citat med `@` följt av citatnyckeln. Till exempel:

```md
Enligt nyliga studier [@Smith2023], är effekten...
```

Du kan också använda flera citat:

```md
Vissa forskare stöder denna åsikt [@Smith2023; @Doe2022].
```

### Indirekta och direkta citat:

**Indirekta** (eller i-text) placerar författare och år inom parentes:

```md
Som nämnts av [@Smith2023], ...
```

**Direkta** citat inkluderar också sidnummer:

```md
[@Smith2023, ss. 33-35] påstår att ...
```

---

Låt oss avsluta med en snabb introduktion till hur man lägger till videor i din Markdown-fil.

## Infoga video:

För att infoga en video från en plattform som YouTube kommer du vanligtvis att behöva använda inbäddningskoden som tillhandahålls av den plattformen.

```md
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

Byt ut "VIDEO_ID" med det specifika videoidentifikationsnumret du vill infoga. Observera att det exakta sättet att infoga en video kan variera beroende på din plattform och webbplatsvärd.

---

Hoppas den här guiden var hjälpsam! Om du har några frågor eller kommentarer, tveka inte att kontakta oss. Lycka till med ditt skrivande i Markdown!
