---
title: "Les meilleurs packages de visualisation de données en R : Un guide pour 2023"
description: "Un guide complet mettant en évidence les meilleurs packages de visualisation de données en R pour l'année 2023, présentant leurs caractéristiques, applications et capacités uniques."
tags: ["R", "RStudio", "dataviz"]
authors: ["CiteDrive"]
date: "2023-08-15"
isLocalized: true
---

## [ggplot2](https://ggplot2.tidyverse.org/)

**ggplot2** offre l'ensemble d'outils de visualisation le plus complet et le plus polyvalent, basé sur la **'Grammaire des Graphiques'** et fait partie de l'écosystème robuste **tidyverse**. Cette grammaire décompose les graphiques en composants tels que les ensembles de données, les échelles, les couches, etc. De manière déclarative, l'utilisateur combine ces composants pour décrire et produire n'importe quel graphique souhaité.

Cette approche est devenue si populaire qu'elle a effectivement remplacé les graphiques originaux de R, en y ajoutant de nombreuses extensions, dont certaines sont discutées ici.

> **_Cet article est présenté par CiteDrive :_** Vous rédigez des rapports en **Quarto** ou **R Markdown** ? Alors vous devriez envisager CiteDrive, un outil de gestion de littérature et de collaboration basé sur BibTeX qui vous aide à garder vos citations, bibliographies et références synchronisées avec RStudio. [Essayez-le gratuitement](http://citedrive.com/).

## [ggcorrplot](https://github.com/kassambara/ggcorrplot)
Visualise les matrices de corrélation avec ggplot2. Propose des solutions pour réorganiser la matrice de corrélation et pour montrer les niveaux de significativité dans la matrice.

## [ggExtra](https://github.com/daattali/ggExtra)
Ce package ajoute des géomes et des fonctions supplémentaires à ggplot2 pour visualiser et analyser des graphiques en profondeur. Par exemple, il peut générer des histogrammes/diagrammes en boîte/diagrammes de densité marginaux, utiles pour visualiser la distribution des variables x et y dans un diagramme de dispersion.

## [esquisse](https://dreamrs.github.io/esquisse/)
Le package esquisse offre une interface glisser-déposer pour explorer et visualiser des données. Il génère du code ggplot2 basé sur l'entrée de l'utilisateur et s'intègre comme un addin dans RStudio.

## [patchwork](https://patchwork.data-imaginist.com/)
Le package patchwork facilite grandement la combinaison de plusieurs objets ggplot en un seul graphique. Il offre une méthode intuitive et flexible pour créer des compositions de graphiques.

## [ggridges](https://wilkelab.org/ggridges/)
Avec ggridges, vous pouvez créer des graphiques à crêtes dans ggplot2, qui sont une façon efficace de visualiser les changements dans les distributions à travers différents groupes ou conditions.

## [ggforce](https://ggforce.data-imaginist.com/)
Une extension de ggplot2 qui ajoute des géomes supplémentaires, des statistiques et d'autres composants à ggplot.

## [dygraphs](https://rstudio.github.io/dygraphs/)
Interface R pour la bibliothèque JavaScript Dygraphs pour les graphiques de séries temporelles. Offre des capacités avancées pour visualiser des séries temporelles et inclut un support intégré pour l'exploration interactive.

## [sunburstR](https://d3js.org/)
SunburstR crée des graphiques 'Sunburst' avec une disposition radiale pour représenter des données hiérarchiques, ce qui est efficace pour montrer la structure des données arborescentes à plusieurs niveaux.

## [treemap](https://cran.r-project.org/web/packages/treemap/index.html)
Le package treemap fournit un moyen simple et flexible de créer des treemaps pour visualiser des structures de données hiérarchiques.

## [ggrepel](https://ggrepel.slowkow.com/)
Ggrepel propose des géomes pour ggplot2 qui repoussent les étiquettes de texte superposées les unes aux autres et par rapport aux données.

## [sf](https://r-spatial.github.io/sf/)
Le package sf est une approche moderne pour travailler avec des données spatiales dans R. Il facilite la manipulation et la visualisation d'objets Simple Features (une méthode standard pour encoder des données vectorielles).

## [Leaflet](https://rstudio.github.io/leaflet/)
**New York Times** et **Washington Post** utilisent Leaflet de Volodymyr Agafonkin, l'une des bibliothèques JavaScript open source les plus populaires pour les cartes interactives. Leaflet pour R facilite l'intégration de cartes Leaflet dans R.

## [simplevis](https://statisticsnz.github.io/simplevis/)
Nous avons déjà présenté deux outils utiles : ggplot2 et Leaflet. Simplevis vise à simplifier la visualisation avec moins d'effort mental, en fournissant un package avec des fonctions qui encapsulent ces deux packages.

## [GGANIMATE](https://gganimate.com/articles/gganimate.html)
Gganimate est une extension de ggplot qui permet de créer des graphiques avec de belles animations dans R.

**EXEMPLE DE GGANIMATE**
Le principe de la grammaire est étendu avec une série de composants supplémentaires qu'un data scientist peut ajouter à l'objet ggplot pour représenter comment il doit changer au fil du temps.

## [ggvis](https://ggvis.rstudio.com/)
Suivant la philosophie de **ggplot2** (et la Grammaire des Graphiques), **ggvis** permet aux utilisateurs de créer des graphiques interactifs pouvant être visualisés dans RStudio ou dans un navigateur avec l'infrastructure de Shiny.

## [RGL](https://dmurdoch.github.io/rgl/)
RGL permet la création de graphiques 3D interactifs dans R, en utilisant **OpenGL** ou **WebGL** comme backend.

## [rayrender](https://www.rayrender.net/)
Ce package open source pour R, inspiré des trois livres de Peter Shirley sur le Ray Tracing, vous permet de faire de même en créant des scènes 3D dans R.

## [highcharter](https://jkunst.com/highcharter/)
Ce package R contient une série de fonctions qui encapsulent la bibliothèque JavaScript homonyme. **BBC**, **Sony** et **Twitter** utilisent déjà Highcharts (la version JavaScript).

## [plotly](https://plotly-r.com/)
**Plotly** est un outil graphique pour créer une variété de graphiques interactifs dans plusieurs langages de programmation. Plotly pour R est basé sur le paquetage **plotly.js**, qui à son tour est basé sur d3.js.

## [lattice](http://lattice.r-forge.r-project.org/)
Lattice est un système de visualisation de données puissant et élégant, inspiré des graphiques Trellis, avec une focalisation sur les données multidimensionnelles. Bien qu'il soit suffisant pour la plupart des besoins graphiques, il est suffisamment flexible pour gérer la plupart des exigences non standard.

