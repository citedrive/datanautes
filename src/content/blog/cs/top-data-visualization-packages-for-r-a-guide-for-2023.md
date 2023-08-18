---
title: "Nejlepší balíčky pro vizualizaci dat v R: Průvodce pro rok 2023"
description: "Ucelený průvodce, který zdůrazňuje nejlepší balíčky pro vizualizaci dat dostupné v R v roce 2023, a ukazuje jejich funkce, případy použití a unikátní schopnosti."
tags: ["R", "RStudio", "dataviz"]
authors: ["CiteDrive"]
date: "2023-08-15"
---

## [ggplot2](https://ggplot2.tidyverse.org/)

**ggplot2** poskytuje nejbohatší a nejvíce univerzální balíček pro tvorbu grafů na základě **gramatiky grafiky** jako součást robustního ekosystému **tidyverse**. Tato gramatika rozkládá grafy na komponenty, jako jsou dataset, škály, úrovně atd. V deklarativní formě uživatel kombinuje tyto komponenty k popisu a vytvoření libovolného diagramu.

Tato metoda se stala tak populární, že efektivně nahradila původní diagramy R a přidala několik rozšíření, z nichž některá budou zde diskutována.

> **_Tento článek vám přináší CiteDrive:_** Píšete zprávy v **Quarto** nebo **R Markdownu**? Pak byste měli zvážit CiteDrive, projektový a spolupracovní webový nástroj pro správu referencí založený na BibTeXu, který vám pomůže udržet vaše citace, bibliografie a reference synchronizované s RStudio. [Vyzkoušejte zdarma](http://citedrive.com/).

## [ggcorrplot](https://github.com/kassambara/ggcorrplot)
Vizualizace korelační matice pomocí ggplot2. Nabízí řešení pro přeřazení korelační matice a zobrazuje hladinu významnosti na korelační matici.

## [ggExtra](https://github.com/daattali/ggExtra)
Tento balíček přidává k ggplot2 další geomy a funkce pro vizualizaci a podrobnější zkoumání grafů. Například může vytvářet marginální histogramy/boxploty/hustotní grafy, které jsou užitečné pro vizualizaci distribuce proměnných x a y ve scatterplotu.

## [esquisse](https://dreamrs.github.io/esquisse/)
Balíček esquisse poskytuje uživatelské rozhraní typu táhni a pusť pro prozkoumávání a vizualizaci dat. Na základě vstupu uživatele generuje kód ggplot2 a je integrován do RStudia jako doplněk.

## [patchwork](https://patchwork.data-imaginist.com/)
Balíček patchwork velmi usnadňuje kombinaci více ggplot objektů do jednoho grafu. Poskytuje intuitivní a flexibilní způsob, jak vytvořit kompozici grafů.

## [ggridges](https://wilkelab.org/ggridges/)
Ggridges vám umožní vytvářet v ggplot2 ridgeploty, což je efektivní způsob vizualizace změn v distribucích napříč různými skupinami nebo podmínkami.

## [ggforce](https://ggforce.data-imaginist.com/)
Rozšíření ggplot2, které přináší další geomy, statistiky a další komponenty do ggplotu.

## [dygraphs](https://rstudio.github.io/dygraphs/)
R rozhraní k knihovně Dygraphs JavaScript pro tvorbu grafů. Poskytuje bohaté možnosti pro grafické zobrazení časových řad a má vestavěnou podporu pro interaktivní průzkum.

## [sunburstR](https://d3js.org/)
SunburstR vytváří ‘sunburst’ grafy s využitím radiálního uspořádání k zobrazení hierarchických dat, což je efektivní pro ukázání struktury několika úrovní stromových datasetů.

## [treemap](https://cran.r-project.org/web/packages/treemap/index.html)
Balíček Treemap poskytuje snadný a flexibilní způsob, jak vytvořit treemapy pro vizualizaci hierarchických datových struktur.

## [ggrepel](https://ggrepel.slowkow.com/)
Ggrepel poskytuje geomy pro ggplot2, které odpuzují překrývající se textové popisky od sebe a od dat.

## [sf](https://r-spatial.github.io/sf/)
Balíček sf je moderním přístupem k práci s prostorovými daty v R. Umožňuje snadnou manipulaci a vizualizaci objektů jednoduchých prvků (standardizovaný způsob kódování prostorových vektorových dat).

## [Leaflet](https://rstudio.github.io/leaflet/)
**New York Times** a **Washington Post** oba používají Leaflet od Volodymyra Agafonkina, jednu z nejpopulárnějších otevřených JavaScriptových knihoven pro interaktivní mapy. Leaflet pro R umožňuje jednoduché začlenění leafletových map do R.

## [simplevis](https://statisticsnz.github.io/simplevis/)
Již jsme představili dva užitečné nástroje: ggplot2 a leaflet. Cílem simplevis je usnadnit vizualizaci s menší námahou mozku tím, že poskytuje balíček funkcí obalujících tyto dva balíčky.

## [GGANIMATE](https://gganimate.com/articles/gganimate.html)
gganimate je rozšíření ggplotu, které vám umožňuje vytvářet diagramy s krásnými animacemi v R.

**PŘÍKLAD GGANIMATE**
Princip gramatiky je doplněn řadou dalších komponent, které datový vědec může přidat k ggplot objektu, aby reprezentoval, jak by se měl časem měnit.

## [ggvis](https://ggvis.rstudio.com/)
V souladu s filozofií **ggplot2** (a gramatikou grafiky), **ggvis** umožňuje uživatelům vytvářet interaktivní grafiky, které mohou být testovány v RStudiu nebo v prohlížeči pomocí infrastruktury shiny.

## [RGL](https://dmurdoch.github.io/rgl/)
RGL vám umožní vytvářet interaktivní 3D grafiku v R s využitím **OpenGL** nebo **WebGL** jako backendu.

## [rayrender](https://www.rayrender.net/)
Tento open-source R balíček, inspirovaný třemi knihami Petera Shirleyho o sledování paprsku, vám umožní dělat to samé při vytváření 3D scén v R.

## [highcharter](https://jkunst.com/highcharter/)
Tento R balíček obsahuje sadu funkcí obalujících JavaScriptovou knihovnu stejného jména. **BBC**, **Sony** a **Twitter** již používají Highcharts (JavaScript) jako flexibilní a přizpůsobitelnou knihovnu pro grafy.

## [Plotly](https://plotly.com/r/)
Důraz Plotly je na interaktivních grafech publikovatelné kvality. Existují příklady pro vytváření čárových grafů, bodových diagramů, plošných grafů atd.

## [Lattice](http://lattice.r-forge.r-project.org/)
Lattice je silný a elegantní vysokoúrovňový systém pro vizualizaci dat inspirovaný Trellisovou grafikou, s důrazem na vícerozměrná data. Ačkoli je dostatečný pro většinu potřeb grafiky, je dostatečně flexibilní, aby vyhověl většině nestandardních požadavků.
