---
title: "Los mejores paquetes de visualización de datos en R: Una guía para 2023"
description: "Una guía exhaustiva que destaca los mejores paquetes de visualización de datos en R para el año 2023, mostrando sus características, aplicaciones y habilidades únicas."
tags: ["R", "RStudio", "dataviz"]
authors: ["CiteDrive"]
date: "2023-08-15"
---

## [ggplot2](https://ggplot2.tidyverse.org/)

**ggplot2** ofrece el conjunto más completo y versátil de herramientas de visualización, basadas en la **'Gramática de Gráficos'** y es parte del robusto ecosistema **tidyverse**. Esta gramática descompone los gráficos en componentes como conjunto de datos, escalas, capas, etc. De manera declarativa, el usuario combina estos componentes para describir y producir cualquier gráfico deseado.

Este enfoque se ha vuelto tan popular que ha reemplazado efectivamente los gráficos originales de R, añadiendo muchas extensiones, algunas de las cuales se discuten aquí.

> **_Este artículo es presentado por CiteDrive:_** ¿Escribes informes en **Quarto** o **R Markdown**? Entonces deberías considerar CiteDrive, una herramienta de gestión de literatura y colaboración basada en BibTeX que te ayuda a mantener sincronizadas tus citas, bibliografías y referencias con RStudio. [Pruébalo gratis](http://citedrive.com/).

## [ggcorrplot](https://github.com/kassambara/ggcorrplot)
Visualiza matrices de correlación con ggplot2. Proporciona soluciones para reordenar la matriz de correlación y para mostrar niveles de significancia en la matriz.

## [ggExtra](https://github.com/daattali/ggExtra)
Este paquete añade geomas y funciones adicionales a ggplot2 para visualizar y analizar gráficos en profundidad. Por ejemplo, puede generar histogramas/diagramas de caja/diagramas de densidad marginales, útiles para visualizar la distribución de las variables x e y en un diagrama de dispersión.

## [esquisse](https://dreamrs.github.io/esquisse/)
El paquete esquisse ofrece una interfaz de arrastrar y soltar para explorar y visualizar datos. Genera código ggplot2 basado en la entrada del usuario y se integra como un complemento en RStudio.

## [patchwork](https://patchwork.data-imaginist.com/)
El paquete patchwork facilita enormemente la combinación de varios objetos ggplot en un solo gráfico. Ofrece un método intuitivo y flexible para crear composiciones de gráficos.

## [ggridges](https://wilkelab.org/ggridges/)
Con ggridges puedes crear gráficos de crestas en ggplot2, que son una forma efectiva de visualizar cambios en distribuciones a través de diferentes grupos o condiciones.

## [ggforce](https://ggforce.data-imaginist.com/)
Una extensión de ggplot2 que añade geomas adicionales, estadísticas y otras componentes a ggplot.

## [dygraphs](https://rstudio.github.io/dygraphs/)
Interfaz de R para la biblioteca JavaScript Dygraphs para gráficos de series temporales. Ofrece capacidades avanzadas para visualizar series temporales e incluye soporte integrado para exploración interactiva.

## [sunburstR](https://d3js.org/)
SunburstR crea gráficos 'Sunburst' con un diseño radial para representar datos jerárquicos, que es efectivo para mostrar la estructura de datos de árbol en múltiples niveles.

## [treemap](https://cran.r-project.org/web/packages/treemap/index.html)
El paquete treemap proporciona una forma sencilla y flexible de crear treemaps para visualizar estructuras de datos jerárquicas.

## [ggrepel](https://ggrepel.slowkow.com/)
Ggrepel ofrece geomas para ggplot2 que repelen las etiquetas de texto superpuestas entre sí y de los datos.

## [sf](https://r-spatial.github.io/sf/)
El paquete sf es un enfoque moderno para trabajar con datos espaciales en R. Facilita la manipulación y visualización de objetos Simple Features (un método estándar para codificar datos vectoriales).

## [Leaflet](https://rstudio.github.io/leaflet/)
**New York Times** y **Washington Post** usan Leaflet de Volodymyr Agafonkin, una de las bibliotecas JavaScript de código abierto más populares para mapas interactivos. Leaflet para R facilita la integración de mapas Leaflet en R.

## [simplevis](https://statisticsnz.github.io/simplevis/)
Ya hemos presentado dos herramientas útiles: ggplot2 y Leaflet. Simplevis tiene como objetivo simplificar la visualización con menos esfuerzo mental, proporcionando un paquete con funciones que encapsulan estos dos paquetes.

## [GGANIMATE](https://gganimate.com/articles/gganimate.html)
Gganimate es una extensión de ggplot que permite crear gráficos con hermosas animaciones en R.

**EJEMPLO DE GGANIMATE**
El principio de la gramática se amplía con una serie de componentes adicionales que un científico de datos puede agregar al objeto ggplot para representar cómo debe cambiar con el tiempo.

## [ggvis](https://ggvis.rstudio.com/)
Siguiendo la filosofía de **ggplot2** (y la Gramática de Gráficos), **ggvis** permite a los usuarios crear gráficos interactivos que se pueden visualizar en RStudio o en un navegador con la infraestructura de Shiny.

## [RGL](https://dmurdoch.github.io/rgl/)
RGL permite la creación de gráficos 3D interactivos en R, usando **OpenGL** o **WebGL** como backend.

## [rayrender](https://www.rayrender.net/)
Este paquete de código abierto para R, inspirado en los tres libros de Peter Shirley sobre Ray Tracing, te permite hacer lo mismo al crear escenas 3D en R.

## [highcharter](https://jkunst.com/highcharter/)
Este paquete de R contiene una serie de funciones que encapsulan la librería JavaScript homónima. **BBC**, **Sony** y **Twitter** ya utilizan Highcharts (JavaScript) como herramienta gráfica flexible y personalizable.

## [Plotly](https://plotly.com/r/)
Plotly se centra en gráficos interactivos de calidad publicable. Hay ejemplos para crear gráficos de línea, puntos, áreas, etc.

## [Lattice](http://lattice.r-forge.r-project.org/)
Lattice es un sistema de visualización de datos potente y elegante, inspirado en gráficos Trellis, con un enfoque en datos multidimensionales. Aunque es suficiente para la mayoría de las necesidades gráficas, es lo suficientemente flexible como para manejar la mayoría de los requerimientos no estándar.

