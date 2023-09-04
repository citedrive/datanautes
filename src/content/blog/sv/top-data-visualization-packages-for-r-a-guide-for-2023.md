---
title: "De bästa paketen för datavisualisering i R: Guide 2023"
description: "En omfattande guide som lyfter fram de bästa paketen för datavisualisering som finns tillgängliga för R år 2023, med demonstrationer av deras funktioner, exempel på användning och unika förmågor."
tags: ["R", "RStudio", "dataviz"]
authors: ["CiteDrive"]
date: "2023-08-15"
isLocalized: true
---

## [ggplot2](https://ggplot2.tidyverse.org/)

**ggplot2** erbjuder det mest funktionsrika och mångsidiga paketet för att skapa diagram baserat på ramverket **"grammatik för grafik"**, som är en del av det kraftfulla **tidyverse**-ekosystemet. Denna princip bryter ner diagram i komponenter såsom datamängder, skalor, lager och så vidare. Användaren kombinerar dessa komponenter i en deklarativ stil för att beskriva och skapa vilken typ av diagram som helst.

Denna metod har blivit så populär att den i praktiken har ersatt R:s ursprungliga diagram och har lagt till flera tillägg, varav några kommer att diskuteras här.

> **_Denna artikel är tillhandahållen av CiteDrive:_** Skriver du rapporter i **Quarto** eller **R Markdown**? Då bör du kolla in CiteDrive, ett projekt- och delningsverktyg för webblänkhantering baserat på BibTeX, som hjälper dig att hålla dina citat, bibliografier och referenser synkroniserade med RStudio. [Prova gratis](http://citedrive.com/).

## [ggcorrplot](https://github.com/kassambara/ggcorrplot)
Visualisering av korrelationsmatriser med hjälp av ggplot2. Den erbjuder en lösning för omordning av korrelationsmatriser och visar signifikansnivåer på korrelationsmatrisen.

## [ggExtra](https://github.com/daattali/ggExtra)
Detta paket lägger till extra geomer till ggplot2, samt funktioner för att visualisera och djupare utforska diagram. Till exempel kan det skapa hjälpdiagram i form av histogram/lådagram/densitetsplottar, vilka är användbara för att visualisera fördelningarna av x- och y-variabler i scatter plots.

## [esquisse](https://dreamrs.github.io/esquisse/)
Esquisse-paketet erbjuder ett "drag-and-drop"-gränssnitt för att utforska och visualisera data. Det genererar ggplot2-kod baserat på användarens inmatning och är integrerat i RStudio som ett tillägg.

## [patchwork](https://patchwork.data-imaginist.com/)
Patchwork-paketet förenklar avsevärt sammanslagningen av flera ggplot-objekt till en enda plot. Det erbjuder ett intuitivt och flexibelt sätt att skapa kompositioner av diagram.

## [ggridges](https://wilkelab.org/ggridges/)
Ggridges låter dig skapa ridge-plots i ggplot2, vilket kan vara ett effektivt sätt att visualisera förändringar i distributioner över flera grupper eller förhållanden.

## [ggforce](https://ggforce.data-imaginist.com/)
Ett tillägg till ggplot2 som lägger till extra geomer, statistik och andra komponenter till ggplot.

## [dygraphs](https://rstudio.github.io/dygraphs/)
Ett R-gränssnitt till JavaScript-biblioteket för plottning av Dygraphs. Det erbjuder rika möjligheter för att skapa tidsseriegrafik och har inbyggt stöd för interaktiv utforskning.

## [sunburstR](https://d3js.org/)
SunburstR skapar sunburst-diagram med hjälp av radial layout för att visa hierarkiska data, vilket är effektivt för att visa strukturen av flera nivåer av trädliknande dataset.

## [treemap](https://cran.r-project.org/web/packages/treemap/index.html)
Treemap-paketet erbjuder ett enkelt och flexibelt sätt att skapa träd-kartor för att visualisera hierarkiska datastrukturer.

## [ggrepel](https://ggrepel.slowkow.com/)
Ggrepel erbjuder geomer för ggplot2 för att undvika överlappande textetiketter från varandra och från datan.

## [sf](https://r-spatial.github.io/sf/)
Sf-paketet är ett modernt tillvägagångssätt för att arbeta med spatiala data i R. Det gör det möjligt att enkelt manipulera och visualisera Simple Features-objekt (en standardiserad metod för att koda vektorbaserade spatiala data).

## [Leaflet](https://rstudio.github.io/leaflet/)
**The New York Times** och **The Washington Post** använder båda Leaflet av Vladimir Agafonkin, ett av de mest populära öppna JavaScript-biblioteken för interaktiva kartor. Leaflet för R förenklar integrationen av Leaflet-kartor i R.

## [simplevis](https://statisticsnz.github.io/simplevis/)
Vi har redan introducerat två användbara verktyg: ggplot2 och leaflet. Syftet med simplevis är att förenkla visualisering genom att minska den kognitiva belastningen, genom att erbjuda ett paket av omslagsfunktioner för dessa två paket.

## [GGANIMATE](https://gganimate.com/articles/gganimate.html)
gganimate är ett tillägg till ggplot som gör det möjligt att skapa diagram med vackra animationer i R.

**EXEMPEL PÅ GGANIMATE**

Grammatikprincipen kompletteras med ett antal extra komponenter som en datavetare kan lägga till ggplot-objektet för att specificera hur det ska ändras över tid.

## [ggvis](https://ggvis.rstudio.com/)
I linje med **ggplot2**-filosofin (och grafikens grammatik) låter **ggvis** användarna skapa interaktiva diagram som kan testas i Rstudio eller i en webbläsare med hjälp av Shiny-infrastrukturen.

## [RGL](https://dmurdoch.github.io/rgl/)
RGL möjliggör skapandet av interaktiva 3D-diagram i R, med användning av **OpenGL** eller **WebGL** som bakomliggande teknologi.

## [rayrender](https://www.rayrender.net/)
Detta öppna R-paket, inspirerat av Peter Shirleys tre böcker om raytracing, gör det möjligt att göra samma sak när man skapar 3D-scener i R.

## [highcharter](https://jkunst.com/highcharter/)
Detta R-paket innehåller en uppsättning funktioner som fungerar som omslag för JavaScript-biblioteket med samma namn. **BBC**, **Sony** och **Twitter** använder redan Highcharts (JavaScript) som ett flexibelt och anpassningsbart diagrambibliotek.

## [Plotly](https://plotly.com/r/)
Fokus i Plotly ligger på att skapa publiceringskvalitativa interaktiva diagram. Det finns exempel på hur man skapar linjediagram, scatterplots, areadiagram och så vidare.

## [Lattice](http://lattice.r-forge.r-project.org/)
Lattice är ett kraftfullt och elegant högnivåsystem för datavisualisering, inspirerat av Trellis-grafik, med betoning på flerdimensionella data. Trots att det räcker för de flesta plottbehov, är Lattice tillräckligt anpassningsbart för att möta de flesta icke-standardiserade krav.
