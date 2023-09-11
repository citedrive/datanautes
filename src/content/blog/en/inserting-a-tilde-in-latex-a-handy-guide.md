---
title: "Inserting a Tilde (~) in LaTeX: A Handy Guide"
description: "Explore the versatile ways to insert a tilde (~) character in your LaTeX documents. Whether for mathematical notation, accentuation, or text formatting, this guide provides step-by-step instructions to use tildes effectively in LaTeX."
tags: ["LaTeX"]
authors: ["Datanautes"]
date: "2023-09-11"
isLocalized: true
---


We will look at how to insert a versatile tilde character (~) and how to incorporate it into your LaTeX document (without any breaks) in several ways: 

## The problem: Non-breaking Space

As you likely noticed, in LaTeX, using a single tilde (~) character serves as a non-breaking space. This means it will appear as a space in the output and prevent line breaks between words.

```latex
Hello~World
```

**Output:** 

```sh
Hello World
```

## Text Mode

To make the tilde appear in your text, you can use the following commands:

1. `\textasciitilde` - This command will produce a tilde character (~) in text mode.

```latex
\textasciitilde
```

2. `\~{}` - This is an alternate command to produce a tilde character (~) in text mode.

```latex
\~{}
```

## Math Mode

In math mode, the tilde can be used as a symbol for similarity or as an operator. Use the following command to insert a tilde in math mode:

```latex
$\sim$
```

## Over a Letter

You can also use the tilde as a diacritic mark over a letter, as demonstrated below:

```latex
\~{n}
```

This will produce a "ñ" character.

## Utilizing Packages

You can use packages like `textcomp` for more options and versatility. Here's how you can insert a tilde using this package:

```latex
\usepackage{textcomp} 
\texttildelow
```

