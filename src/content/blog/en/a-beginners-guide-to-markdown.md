---
title:  "A Beginner's Guide to Markdown"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Datanautes Team"]
description: "Explore Markdown: the user-friendly markup language used by writers & developers. Boost web content readability on platforms like GitHub. Dive into our guide!"
---

Markdown is a simple language designed to streamline content writing. It's used everywhere, from GitHub to note-taking apps. Whether you're a writer, developer, or just someone who wants to simplify your web writing, this guide is for you!

## What is Markdown?

Markdown is a lightweight markup language, created by John Gruber in 2004, to make formatted text easily readable in plain-text editors. It's especially popular for blogging, instant messaging, forums, collaborative tools, documentation, and readme files. Over time, variations in its interpretation led to the creation of CommonMark in 2014, a clearer specification with a test suite to ensure consistent implementation.

## Basic Syntax

Here's a quick rundown of the most common elements you'll need:

### 1. Headers

Headers are created by using the `#` symbol, followed by a space:



```md
# This is an H1 
## This is an H2 
### This is an H3
```

### 2. Emphasis

For _italic_ use `*asterisks*` or `_underscores_`.

For **bold** use `**double asterisks**` or `__double underscores__`.

### 3. Lists

#### Unordered Lists

Use asterisks, plus, or minus followed by a space:

```md
* Item 1 
* Item 2   
    * Subitem 2.1   
    * Subitem 2.2
```


#### Ordered Lists

Simply use numbers followed by periods:

```md
1. First item 
2. Second item 
3. Third item
``````

### 4. Links

You can create an [inline link](https://www.example.com/) with the following syntax:

```md
[Displayed Text](URL "Optional Title")
```

### 5. Images

Images are similar to links but with a preceding exclamation mark:

```md
![Alternative Text](URL "Optional Title")
```

### 6. Blockquotes

For blockquotes, use the `>` character before your text:

```md
> This is a blockquote.
```

### 7. Code Blocks

For inline `code`, wrap your code with backticks:

```md
`code goes here` 
```

For multi-line code blocks, use triple backticks:
```md
\```
Line 1 of Code 
Line 2 of Code 
Line 3 of Code 
 3 of Code 
\``` 
```

### 8. Horizontal Line

You can create a horizontal line with three dashes, asterisks, or underscores:

```md
---
```

## Other Useful Elements

1. **Tables**:

```md
| Header1 | Header2 | 
|---------|---------| 
| cell1   | cell2   | 
| cell3   | cell4   |
```

| Header1 | Header2 | 
|---------|---------| 
| cell1   | cell2   | 
| cell3   | cell4   |

2. **Task Lists**:

```md
- [x] Completed task 
- [ ] Incomplete task
```

- [x] Completed task 
- [ ] Incomplete task

3. **Strikethrough**:

Use `~~` to strikethrough text:

```md
~~strikethrough~~
```

## Write Citations in Markdown:

In your Markdown file, you can add citations using the `@` symbol followed by the citation key. For example:

```md
According to recent studies [@Smith2023], the effect is...
```

You can also use multiple citations:

```md
Some scholars argue this point [@Smith2023; @Doe2022].
```

### Parenthetical vs. Narrative Citations:

**Parenthetical** (or in-text) citations place the author and year within parentheses:

```md
This phenomenon has been observed in several contexts (e.g., [@Smith2023]).
```

**Narrative** citations incorporate the author directly into the sentence:

```md
According to @Smith2023, the phenomenon...
```

#### 2. Adding Page Numbers, Chapters, Prefixes, and Suffixes:

You can provide more specific locations or qualifiers to your citations by adding prefixes, locators, and suffixes:

- **Prefix and Suffix**: Useful for adding context before or after a citation.

```md
As rightly pointed out [-@Smith2023, p. 23; see also @Doe2022, ch. 2].
```
    
- **Locators**: These can be page numbers, chapters, figures, or any other kind of section.

```md
[@Smith2023, p. 23-25]
```

```md
[@Doe2022, ch. 2]
```


Note the use of `-` before `@Smith2023`. This prevents the author's name from being repeated when you want a parenthetical citation. Without the `-`, it would be treated as a narrative citation.

### Create a Bibliography File:

For creating and managing your bibliography, we recommend using **[CiteDrive](https://www.citedrive.com/)**. CiteDrive is a cloud-first, collaborative, BibTeX-native reference manager designed specifically for Overleaf, LaTeX, and R Markdown users. It simplifies the process of curating and exporting citations in the `.bib` format.

Here's a sample BibTeX entry you might have in your `.bib` file:

```bibtex
@article{Smith2023,
	title        = {Title of the Study},
	author       = {Smith, John},
	year         = 2023,
	journal      = {Journal Name},
	volume       = 5,
	pages        = {10--20}
}

```

#### Use Pandoc with a CSL Style:

Pandoc can convert your Markdown file with citations into a properly formatted document using a CSL style. Here's a basic example command:

```bash
pandoc yourfile.md --citeproc
 --bibliography=yourbibfile.bib 
 --csl=yourcslstyle.csl -o output.docx
```

Where:

- `yourfile.md` is your markdown file.
- `--citeproc` enables the citation processor.
- `yourbibfile.bib` is your bibliography file.
- `yourcslstyle.csl` is your chosen citation style (like APA, MLA, etc.). There are many CSL styles available online.
- `output.docx` is the desired output file (in this case, a Word document).

Remember, you'll need both Pandoc and the appropriate CSL files for this to work. The final output will depend on the CSL style you choose.

## Applications and Platforms Using Markdown

- **GitHub** - For documentation and comments within repositories.
- **Obsidian** - A knowledge base that works on top of a local folder of plain text Markdown files.
- **R Markdown** - Integrates the core syntax of markdown with embedded R code chunks for dynamic data analysis and reporting.
- **Discord** - Uses a modified version of Markdown for text formatting in chats.
- **Reddit** - Allows users to format their posts and comments with a version of Markdown.
- **Jekyll** - A static site generator that supports Markdown for content creation.
- **Notion** - A note-taking and organization tool with Markdown support.
- **VSCode** - A code editor that supports Markdown for documentation and has a built-in previewer.
