---
title: "Una guía para principiantes sobre Markdown"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Equipo Datanautes"]
description: "Descubre Markdown: el lenguaje de marcado amigable utilizado por escritores y desarrolladores. Mejora la legibilidad de los contenidos web en plataformas como GitHub. ¡Sumérgete en nuestra guía!"
isLocalized: true
---

Markdown es un lenguaje simple diseñado para facilitar la redacción de contenidos. Es utilizado en todas partes, desde GitHub hasta aplicaciones de notas. Ya seas un escritor, desarrollador o simplemente alguien que desea simplificar la escritura en la web, ¡esta guía es para ti!

## ¿Qué es Markdown?

Markdown es un lenguaje de marcado ligero desarrollado en 2004 por John Gruber para mantener el texto formateado legible en editores de texto sencillos. Es especialmente popular en blogs, mensajería instantánea, foros, herramientas de colaboración, documentación y archivos README. Con el tiempo, las variaciones en su interpretación llevaron a la creación de CommonMark en 2014, una especificación más clara con un paquete de pruebas para asegurar una implementación consistente.

## Sintaxis básica

Aquí hay una rápida revisión de los elementos más comunes que necesitarás:

### 1. Encabezados

Los encabezados se crean con el símbolo `#` seguido de un espacio:

```md
# Esto es un H1 
## Esto es un H2 
### Esto es un H3
```

### 2. Enfasis

Para _cursiva_ usa `*asteriscos*` o `_guiones bajos_`.

Para **negrita** usa `**doble asteriscos**` o `__doble guiones bajos__`.

### 3. Listas

#### Listas no ordenadas

Usa asteriscos, símbolos de suma o guiones seguidos de un espacio:

```md
* Elemento 1 
* Elemento 2   
    * Subelemento 2.1   
    * Subelemento 2.2
```

#### Listas ordenadas

Simplemente usa números seguidos de puntos:

```md
1. Primer elemento 
2. Segundo elemento 
3. Tercer elemento
```

### 4. Enlaces

Un [enlace en línea](https://www.ejemplo.com/) tiene la siguiente sintaxis:

```md
[Texto mostrado](URL "Título opcional")
```

### 5. Imágenes

Las imágenes son similares a los enlaces, pero llevan un signo de exclamación adelante:

```md
![Texto alternativo](URL "Título opcional")
```

### 6. Citas

Usa el signo `>` delante de tu texto:

```md
> Esta es una cita.
```

### 7. Bloques de código

Para `código` dentro del texto, rodea tu código con comillas invertidas:

```md
`código aquí`
```

Para bloques de código de varias líneas, usa tres comillas invertidas:

```md
\```
Línea 1 del código
Línea 2 del código
Línea 3 del código
\```
```

### 8. Líneas horizontales

Crea una línea horizontal usando tres guiones, asteriscos o guiones bajos:

```md
---
```

## Otros elementos útiles

1. **Tablas**:

```md
| Encabezado1 | Encabezado2 |
|-------------|-------------|
| Celda1      | Celda2      |
| Celda3      | Celda4      |
```

| Encabezado1 | Encabezado2 |
|-------------|-------------|
| Celda1      | Celda2      |
| Celda3      | Celda4      |

2. **Listas de tareas**:

```md
- [x] Tarea realizada
- [ ] Tarea no realizada
```

- [x] Tarea realizada
- [ ] Tarea no realizada

3. **Enlaces ancla**: `[Texto del enlace](#nombreDelAncla)`

```md
# Este encabezado es un ancla
[Enlace al ancla anterior](#este-encabezado-es-un-ancla)
```

# Este encabezado es un ancla
[Enlace al ancla anterior](#este-encabezado-es-un-ancla)

## Trabajar con citas

Markdown no tiene una sintaxis integrada para citas, pero muchas herramientas como Pandoc admiten extensiones para ello.

### Sintaxis básica de citas (utilizada por Pandoc)

```md
Según Smith [-@Smith2023], Markdown es asombrosamente sencillo.

Doe [@Doe2022] también observó esto en su última publicación.
```

- **Marcadores**: Estos pueden ser números de página, capítulos, imágenes u otras secciones.

```md
[@Smith2023, pp. 23-25]
```

```md
[@Doe2022, Cap. 2]
```

Nota: Observa el uso de `-` antes de `@Smith2023`. Esto evita que el nombre del autor se repita si quieres poner la cita entre paréntesis. Sin el `-`, se consideraría una cita narrativa.

### Crear un archivo de bibliografía:

Para crear y gestionar tu bibliografía, recomendamos **[CiteDrive](https://www.citedrive.com/)**. CiteDrive es un gestor de referencias basado en la nube y colaborativo, diseñado nativamente para BibTeX, especialmente para usuarios de Overleaf, LaTeX y R Markdown. Facilita la creación y exportación de citas en formato `.bib`.

Aquí tienes un ejemplo de una entrada BibTeX que podrías tener en tu archivo `.bib`:

```bibtex
@article{Smith2023,
	title        = {Título del estudio},
	author       = {Smith, John},
	journal      = {Revista de Estudios sobre Markdown},
	volume       = {10},
	number       = {3},
	pages        = {123-130},
	year         = {2023},
	month        = {Junio},
	publisher    = {Editorial Académica de Markdown},
	url          = {https://www.ejemplo.com/smith2023},
	doi          = {10.12345/md.2023.45678},
	abstract     = {Este estudio explora las características intrínsecas de Markdown y su impacto en la escritura digital.}
}
```

## Ventajas de Markdown

Markdown se ha popularizado debido a su simplicidad y legibilidad. Aquí te presentamos algunas ventajas:

1. **Fácil de aprender**: La sintaxis de Markdown es intuitiva y fácil de recordar.
2. **Portabilidad**: Los archivos de Markdown son solo texto, por lo que se pueden abrir en cualquier editor de texto.
3. **Integración con herramientas modernas**: Muchas plataformas y herramientas de desarrollo, como GitHub, admiten Markdown de forma nativa.
4. **Fácil conversión a otros formatos**: Con herramientas como Pandoc, puedes convertir archivos de Markdown a PDF, Word, HTML y otros formatos con facilidad.