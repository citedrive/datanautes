---
title:  "Guide du débutant sur Markdown"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Datanautes Team"]
description: "Découvrez Markdown : le langage de balisage convivial utilisé par les écrivains & développeurs. Améliorez la lisibilité du contenu web sur des plateformes comme GitHub. Plongez dans notre guide!"
isLocalized: true
---

Markdown est un langage simple conçu pour simplifier la rédaction de contenu. Il est utilisé partout, de GitHub aux applications de prise de notes. Que vous soyez écrivain, développeur, ou simplement quelqu'un qui souhaite simplifier votre écriture web, ce guide est pour vous !

## Qu'est-ce que Markdown ?

Markdown est un langage de balisage léger, créé par John Gruber en 2004, pour rendre le texte formaté facilement lisible dans les éditeurs de texte brut. Il est particulièrement populaire pour le blogging, la messagerie instantanée, les forums, les outils collaboratifs, la documentation et les fichiers readme. Avec le temps, des variations dans son interprétation ont conduit à la création de CommonMark en 2014, une spécification plus claire avec une suite de tests pour garantir une mise en œuvre cohérente.

## Syntaxe de base

Voici un aperçu rapide des éléments les plus courants que vous utiliserez :

### 1. En-têtes

Les en-têtes sont créés en utilisant le symbole `#`, suivi d'un espace :

```md
# Ceci est un H1 
## Ceci est un H2 
### Ceci est un H3
```

### 2. Mise en évidence

Pour l'_italique_, utilisez `*astérisques*` ou `_tirets bas_`.

Pour le **gras**, utilisez `**double astérisques**` ou `__double tirets bas__`.

### 3. Listes

#### Listes non ordonnées

Utilisez des astérisques, des plus, ou des moins suivis d'un espace :

```md
* Élément 1 
* Élément 2   
    * Sous-élément 2.1   
    * Sous-élément 2.2
```

#### Listes ordonnées

Utilisez simplement des chiffres suivis de points :

```md
1. Premier élément 
2. Deuxième élément 
3. Troisième élément
```

### 4. Liens

Vous pouvez créer un [lien en ligne](https://www.example.com/) avec la syntaxe suivante :

```md
[Texte affiché](URL "Titre facultatif")
```

### 5. Images

Les images sont similaires aux liens mais avec un point d'exclamation précédent :

```md
![Texte alternatif](URL "Titre facultatif")
```

### 6. Citations

Pour les citations, utilisez le caractère `>` avant votre texte :

```md
> Ceci est une citation.
```

### 7. Blocs de code

Pour un code `en ligne`, entourez votre code avec des accents graves :

```md
`le code va ici` 
```

Pour des blocs de code sur plusieurs lignes, utilisez trois accents graves :
```md


```md
\```
Ligne 1 du code
Ligne 2 du code
Ligne 3 du code
\```
```

### 8. Ligne horizontale

Vous pouvez créer une ligne horizontale avec trois traits d'union, astérisques ou tirets bas :

```md
---
```

## Autres éléments utiles

1. **Tableaux** :

```md
| En-tête1 | En-tête2 | 
|---------|---------| 
| cellule1   | cellule2   | 
| cellule3   | cellule4   |
```

2. **Listes de tâches** :

```md
- [x] Tâche terminée 
- [ ] Tâche non terminée
```

3. **Barré** :

Utilisez `~~` pour barrer le texte :

```md
~~barré~~
```

## Rédiger des citations en Markdown

Dans votre fichier Markdown, vous pouvez ajouter des citations en utilisant le symbole `@` suivi de la clé de citation. Par exemple :

```md
Selon des études récentes [@Smith2023], l'effet est...
```

Vous pouvez également utiliser plusieurs citations :

```md
Certains chercheurs soutiennent ce point [@Smith2023; @Doe2022].
```

### Citations parenthétiques vs. Citations narratives :

Les citations **parenthétiques** (ou intégrées au texte) placent l'auteur et l'année entre parenthèses :

```md
Ce phénomène a été observé dans plusieurs contextes (par exemple, [@Smith2023]).
```

Les citations **narratives** intègrent l'auteur directement dans la phrase :

```md
Selon @Smith2023, le phénomène...
```

### Créer un fichier de bibliographie :

Pour créer et gérer votre bibliographie, nous recommandons d'utiliser **[CiteDrive](https://www.citedrive.com/)**. CiteDrive est un gestionnaire de références natif BibTeX basé sur le cloud, conçu spécifiquement pour les utilisateurs d'Overleaf, LaTeX et R Markdown. Il simplifie le processus de conservation et d'exportation des citations au format `.bib`.

Voici une entrée BibTeX que vous pourriez avoir dans votre fichier `.bib` :

```bibtex
@article{Smith2023,
	title        = {Titre de l'étude},
	author       = {Smith, Jean},
	year         = 2023,
	journal      = {Nom du journal},
	volume       = 5,
	pages        = {10--20}
}
```

## Applications et plateformes utilisant Markdown

- **GitHub** - Pour la documentation et les commentaires dans les dépôts.
- **Obsidian** - Une base de connaissances qui fonctionne à partir d'un dossier local de fichiers Markdown en texte brut.
- **R Markdown** - intègre la syntaxe de base de Markdown avec des morceaux de code R intégrés pour l'analyse dynamique des données et la création de rapports.
- **Discord** - Utilise une version modifiée de Markdown pour la mise en forme du texte dans les chats.
- **Reddit** - Permet aux utilisateurs de formater leurs messages et leurs commentaires à l'aide d'une version de Markdown.
- **Jekyll** - Un générateur de sites statiques qui prend en charge Markdown pour la création de contenu.
- **Notion** - Un outil de prise de notes et d'organisation qui prend en charge Markdown.
- **VSCode** - Un éditeur de code qui prend en charge Markdown pour la documentation et dispose d'un aperçu intégré.