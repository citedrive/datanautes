---
title:  "Průvodce pro začátečníky k Markdown"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Datanautes Team"]
description: "Prozkoumejte Markdown: uživatelsky přívětivý jazyk pro psaní & vývojáře. Zvyšte čitelnost webového obsahu na platformách jako je GitHub. Ponořte se do našeho průvodce!"
isLocalized: true
---

Markdown je jednoduchý jazyk navržený pro zjednodušení psaní obsahu. Používá se všude, od GitHubu po aplikace pro poznámky. Ať už jste spisovatel, vývojář nebo někdo, kdo chce zjednodušit své webové psaní, tento průvodce je pro vás!

## Co je Markdown?

Markdown je lehký jazyk pro formátování textu, vytvořený Johnem Gruberem v roce 2004, aby byl formátovaný text snadno čitelný v textových editorech. Je obzvláště populární pro blogování, instant messaging, fóra, kolaborativní nástroje, dokumentaci a soubory readme. Časem vedly variace v jeho interpretaci k vytvoření CommonMark v roce 2014, jasnější specifikace s testovacím balíčkem pro zajímání konzistentní implementace.

## Základní syntaxe

Rychlý přehled nejběžnějších prvků, které budete potřebovat:

### 1. Nadpisy

Nadpisy se vytvářejí pomocí symbolu `#` následovaného mezerou:

```md
# Toto je H1 
## Toto je H2 
### Toto je H3
```

### 2. Důraz

Pro _kurzívu_ použijte `*hvězdičky*` nebo `_podtržítka_`.

Pro **tučné** použijte `**dvojité hvězdičky**` nebo `__dvojité podtržítka__`.

### 3. Seznamy

#### Neřazené seznamy

Použijte hvězdičky, plus nebo minus následované mezerou:

```md
* Položka 1 
* Položka 2   
    * Podpoložka 2.1   
    * Podpoložka 2.2
```

#### Řazené seznamy

Jednoduše použijte čísla následovaná tečkami:

```md
1. První položka 
2. Druhá položka 
3. Třetí položka
```

### 4. Odkazy

Můžete vytvořit [vnitřní odkaz](https://www.example.com/) s následující syntaxí:

```md
[Zobrazovaný text](URL "Volitelný titulek")
```

### 5. Obrázky

Obrázky jsou podobné odkazům, ale s předchozím vykřičníkem:

```md
![Alternativní text](URL "Volitelný titulek")
```

### 6. Citáty

Pro citace použijte znak `>` před vaším textem:

```md
> Toto je citace.
```

### 7. Bloky kódu

Pro řádkový `kód` obalte svůj kód zpětnými apostrofy:

```md
`sem vložte kód` 
```

Pro víceřádkové bloky kódu použijte trojité zpětné apostrofy:

```md
\```
Řádek 1 kódu
Řádek 2 kódu
Řádek 3 kódu
\```
```

### 8. Horizontální čára

Horizontální čáru můžete vytvořit třemi pomlčkami, hvězdičkami nebo podtržítky:

```md
---
```

## Další užitečné prvky

1. **Tabulky**:

```md
| Hlavička1 | Hlavička2 | 
|----------|----------| 
| buňka1  | buňka2  | 
| buňka3  | buňka4  |
```

2. **Seznamy úkolů**:

```md
- [x] Dokončený úkol 
- [ ] Nedokončený úkol
```

3. **Přeškrtnutí**:

Použijte `~~` k přeškrtnutí textu:

```md
~~přeškrtnutý text~~
```

## Citace v Markdown:

Ve svém souboru Markdown můžete přidat citace pomocí symbolu `@` následovaného klíčem citace. Například:

```md
Podle nedávných studií [@Smith2023] je efekt...
```

Můžete také použít více citací:

```md
Někteří vědci argumentují tímto bodem [@Smith2023; @Doe2022].
```

### V závorce vs. Vyprávěcí citace:

**V závorce** citace umístí autora a rok do závorek:

```md
Tento jev byl pozorován v několika kontextech (např. [@Smith2023]).
```

**Vyprávěcí** citace začleňují autora přímo do věty:

```md
Podle @Smith2023 jev...
```

#### 2. Přidání čísel stránek, kapitol, prefixů a sufixů:

K citacím můžete přidávat prefixy, ukazatele a sufixy:

- **Prefix a Sufix**: Užitečné pro přidání kontextu před nebo po citaci.

```md
Jak správně poukázali [-@Smith2023, s. 23; viz také @Doe2022, kap. 2].
```
    
- **Ukazatele**: Mohou to být čísla stránek, kapitoly, obrázky nebo jakýkoli jiný druh sekce.

```md
[@Smith2023, s. 23-25]
```

```md
[@Doe2022, kap. 2]
```

Poznámka: Všimněte si použití `-` před `@Smith2023`. Tímto způsobem se jméno autora neopakuje, když chcete citaci v závorce. Bez `-` by bylo považováno za vyprávěcí citaci.

### Vytvoření souboru s bibliografií:

Pro vytváření a správu bibliografie doporučujeme používat **[CiteDrive](https://www.citedrive.com/)**. CiteDrive je cloudový, kolaborativní správce referencí nativní pro BibTeX, navržený speciálně pro uživatele Overleaf, LaTeX a R Markdown. Zjednodušuje proces vytváření a exportu citací ve formátu `.bib`.

Zde je ukázkový záznam BibTeX, který byste mohli mít ve svém souboru `.bib`:

```bibtex
@article{Smith2023,
	title        = {Název studie},
	author       = {Smith, John},
	year         = 2023,
	journal      = {Název časopisu},
	volume       = 5,
	pages        = {10--20}
}
```

#### Použijte Pandoc s CSL stylem:

Pandoc může konvertovat váš soubor Markdown s citacemi do správně formátovaného dokumentu pomocí CSL stylu. Zde je základní příkaz:

```bash
pandoc vášsoubor.md --citeproc --bibliography=vašeBibSoubor.bib --csl=vášCSLstyl.csl -o výstup.docx
```

Kde:

- `vášsoubor.md` je váš soubor markdown.
- `--citeproc` umožňuje procesor citací.
- `vašeBibSoubor.bib` je váš bibliografický soubor.
- `vášCSLstyl.csl` je váš vybraný citační styl (jako APA, MLA atd.). Online je k dispozici mnoho CSL stylů.
- `výstup.docx` je požadovaný výstupní soubor (v tomto případě dokument Word).

Nezapomeňte, že pro to, aby to fungovalo, budete potřebovat jak Pandoc, tak odpovídající soubory CSL. Konečný výstup bude záviset na CSL stylu, který si vyberete.

## Aplikace a platformy používající Markdown

- **GitHub** - Pro dokumentaci a komentáře v repozitářích.
- **Obsidian** - Báze znalostí pracující na lokální složce souborů v plain text Markdown.
- **R Markdown** - Integruje základní syntaxi markdown s vestavěnými bloky kódu R pro dynamickou analýzu dat a zpracování.
- **Discord** - Používá modifikovanou verzi Markdown pro formátování textu v chatu.
- **Reddit** - Umožňuje uživatelům formátovat jejich příspěvky a komentáře verzí Markdown.
- **Jekyll** - Generátor statických webů, který podporuje Markdown pro tvorbu obsahu.
- **Notion** - Nástroj pro poznámky a organizaci s podporou Markdown.
- **VSCode** - Editor kódu podporující Markdown pro dokumentaci a má vestavěný prohlížeč.
