---
title: "Working with Non-numbered Sections in LaTeX"
description: "Learn how to create non-numbered sections and chapters in LaTeX and decide whether or not to include them in the Table of Contents. Dive deep into the commands and techniques for a better document structuring experience."
tags: ["LaTeX"]
authors: ["Datanautes"]
date: "2023-09-21"
isLocalized: true
---

If you've ever worked with LaTeX, you know the value of structuring your document with sections and subsections. But sometimes, you might not want these sections to be numbered. Here's how you can achieve that and even decide whether or not to include them in the Table of Contents.

## Non-numbered Chapters and Sections

In LaTeX, to create a non-numbered chapter or section, you use the `*` character. Specifically:

- For non-numbered chapters: `\chapter*{Your Chapter Name}`
- For non-numbered sections: `\section*{Your Section Name}`

However, by default, these non-numbered sections or chapters won't appear in your Table of Contents.

## Including Non-numbered Sections in the Table of Contents

If you want to include your non-numbered sections or chapters in the Table of Contents, you can use the `\addcontentsline` command. Here's how:

- For chapters: `\addcontentsline{toc}{chapter}{Your Chapter Name}`
- For sections: `\addcontentsline{toc}{section}{Your Section Name}`
- For subsections: `\addcontentsline{toc}{subsection}{Your Subsection Name}`

## Example

```latex
\documentclass{article}
\usepackage[utf8]{inputenc}

\begin{document}

\tableofcontents

\section*{Non-numbered Section}
\addcontentsline{toc}{section}{Non-numbered Section}
This is a non-numbered section.

\section{Numbered Section}
This is a numbered section.

\subsection{Numbered Subsection}
This is a numbered subsection.

\subsection*{Non-numbered Subsection}
\addcontentsline{toc}{subsection}{Non-numbered Subsection}
This is a non-numbered subsection.

\end{document}

```
### Result: 

![Result: Non-numbered Sections in LaTeX / Overleaf](@assets/images/working-with-non-numbered-sections-in-latex.png)

## Wrapping Up

LaTeX is an incredibly powerful tool for document preparation. By understanding commands like the ones above, you can gain greater control over your document's structure and presentation. Happy TeXing!