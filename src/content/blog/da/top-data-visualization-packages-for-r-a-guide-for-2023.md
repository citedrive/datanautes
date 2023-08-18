---
title: "De Bedste Data Visualiseringspakker i R: En Guide for 2023"
description: "En omfattende guide, der fremhæver de bedste data visualiseringspakker tilgængelige i R i 2023, og viser deres funktioner, anvendelsesmuligheder og unikke evner."
tags: ["R", "RStudio", "dataviz"]
authors: ["CiteDrive"]
date: "2023-08-15"
---

## [ggplot2](https://ggplot2.tidyverse.org/)

**ggplot2** tilbyder det mest omfattende og universelle sæt af plotteværktøjer baseret på **'The Grammar of Graphics'** som en del af det robuste **tidyverse** økosystem. Denne grammatik bryder plots ned i komponenter som datasæt, skalaer, niveauer osv. I en deklarativ form kombinerer brugeren disse komponenter for at beskrive og skabe ethvert plot.

Denne metode er blevet så populær, at den effektivt har erstattet R's originale plots og har tilføjet flere udvidelser, hvoraf nogle vil blive diskuteret her.

> **_Denne artikel er bragt til dig af CiteDrive:_** Skriver du rapporter i **Quarto** eller **R Markdown**? Så bør du overveje CiteDrive, et projekt- og samarbejdswebværktøj til referencehåndtering baseret på BibTeX, der hjælper dig med at holde dine citater, bibliografier og referencer synkroniseret med RStudio. [Prøv det gratis](http://citedrive.com/).

## [ggcorrplot](https://github.com/kassambara/ggcorrplot)
Visualisering af korrelationsmatrix med ggplot2. Den tilbyder løsninger for omarrangering af korrelationsmatricen og viser signifikansniveauer på korrelationsmatricen.

## [ggExtra](https://github.com/daattali/ggExtra)
Denne pakke tilføjer yderligere geomer og funktioner til ggplot2 for at visualisere og udforske plots i dybden. For eksempel kan det lave marginale histogrammer/boxplots/densitetsplots, der er nyttige for at visualisere x- og y-variable distributioner i et scatterplot.

## [esquisse](https://dreamrs.github.io/esquisse/)
Esquisse-pakken leverer et drag-and-drop brugerinterface til at udforske og visualisere data. Baseret på brugerinput genererer det ggplot2-kode og er integreret i RStudio som et tilføjelsesprogram.

## [patchwork](https://patchwork.data-imaginist.com/)
Patchwork-pakken gør det meget let at kombinere flere ggplot-objekter i et enkelt plot. Det giver en intuitiv og fleksibel metode til at lave plotkompositioner.

## [ggridges](https://wilkelab.org/ggridges/)
Ggridges giver dig mulighed for at lave ridge plots i ggplot2, hvilket er en effektiv måde at visualisere ændringer i distributioner over forskellige grupper eller forhold.

## [ggforce](https://ggforce.data-imaginist.com/)
En udvidelse til ggplot2, der tilføjer yderligere geomer, statistik og andre komponenter til ggplot.

## [dygraphs](https://rstudio.github.io/dygraphs/)
R interface til Dygraphs JavaScript-biblioteket for plotteteknikker. Det tilbyder omfattende muligheder for grafisk fremstilling af tidsserier og har indbygget support for interaktiv udforskning.

## [sunburstR](https://d3js.org/)
SunburstR skaber ‘sunburst’ plots ved hjælp af en radial layout til at vise hierarkiske data, hvilket er effektivt til at vise strukturen af flere niveauer af trædata.

## [treemap](https://cran.r-project.org/web/packages/treemap/index.html)
Treemap-pakken giver en nem og fleksibel måde at lave treemaps for at visualisere hierarkiske datastrukturer.

## [ggrepel](https://ggrepel.slowkow.com/)
Ggrepel leverer geomer til ggplot2, der frastøder overlappende tekstetiketter fra hinanden og fra dataene.

## [sf](https://r-spatial.github.io/sf/)
Sf-pakken er en moderne tilgang til at arbejde med rumlige data i R. Den gør det nemt at manipulere og visualisere Simple Features objekter (en standardiseret måde at encode vektor rumlige data).

## [Leaflet](https://rstudio.github.io/leaflet/)
**New York Times** og **Washington Post** bruger begge Leaflet af Volodymyr Agafonkin, en af de mest populære open source JavaScript-biblioteker til interaktive kort. Leaflet for R gør det nemt at integrere leaflet-kort i R.

## [simplevis](https://statisticsnz.github.io/simplevis/)
Vi har allerede introduceret to nyttige værktøjer: ggplot2 og leaflet. Simplevis' mål er at gøre visualisering lettere med mindre mental anstrengelse ved at levere et pakke med funktioner, der indkapsler disse to pakker.

## [GGANIMATE](https://gganimate.com/articles/gganimate.html)
Gganimate er en udvidelse af ggplot, der giver dig mulighed for at lave plots med smukke animationer i R.

**EKSEMPEL PÅ GGANIMATE**
Grammatikkens princip er suppleret med en række yderligere komponenter, som en datavidenskabsmand kan tilføje til ggplot-objektet for at repræsentere, hvordan det skal ændre sig over tid.

## [ggvis](https://ggvis.rstudio.com/)
I tråd med **ggplot2**-filosofien (og grammatikken for grafik) tillader **ggvis** brugere at skabe interaktive grafik, der kan blive forhåndsviset i RStudio eller i en browser ved hjælp af shiny infrastrukturen.

## [RGL](https://dmurdoch.github.io/rgl/)
RGL giver dig mulighed for at lave interaktiv 3D-grafik i R ved hjælp af **OpenGL** eller **WebGL** som backend.

## [rayrender](https://www.rayrender.net/)
Denne open source R-pakke, inspireret af Peter Shirleys tre bøger om ray tracing, giver dig mulighed for at gøre det samme, når du opretter 3D-scener i R.

## [highcharter](https://jkunst.com/highcharter/)
Denne R-pakke indeholder et sæt funktioner, der indkapsler JavaScript-biblioteket af samme navn. **BBC**, **Sony**, og **Twitter** bruger allerede Highcharts (JavaScript) som et fleksibelt og tilpasseligt grafværktøj.

## [Plotly](https://plotly.com/r/)
Plotlys fokus er på interaktive plots af publicerbar kvalitet. Der er eksempler på at lave linjediagrammer, punktdiagrammer, arealdiagrammer osv.

## [Lattice](http://lattice.r-forge.r-project.org/)
Lattice er et kraftfuldt og elegant højniveau datasynssystem inspireret af Trellis-grafikken, med fokus på multidimensionale data. Selvom det er tilstrækkeligt til de fleste grafiske behov, er det fleksibelt nok til at imødekomme de fleste ikke-standardiserede krav.
