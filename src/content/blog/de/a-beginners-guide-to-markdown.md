---
title: "Ein Anfängerleitfaden für Markdown"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Datanautes Team"]
description: "Entdecken Sie Markdown: die benutzerfreundliche Auszeichnungssprache, die von Autoren & Entwicklern verwendet wird. Verbessern Sie die Lesbarkeit von Webinhalten auf Plattformen wie GitHub. Tauchen Sie in unseren Leitfaden ein!"
---

Markdown ist eine einfache Sprache, die darauf ausgelegt ist, das Schreiben von Inhalten zu erleichtern. Es wird überall verwendet, von GitHub bis zu Notiz-Apps. Egal, ob Sie ein Autor, Entwickler oder einfach nur jemand sind, der das Schreiben im Web vereinfachen möchte, dieser Leitfaden ist für Sie!

## Was ist Markdown?

Markdown ist eine leichtgewichtige Auszeichnungssprache, die 2004 von John Gruber entwickelt wurde, um formatierten Text in einfachen Texteditoren lesbar zu halten. Es ist besonders beliebt für Blogs, Instant Messaging, Foren, Collaboration-Tools, Dokumentation und README-Dateien. Im Laufe der Zeit führten Variationen in seiner Interpretation zur Schaffung von CommonMark im Jahr 2014, einer klareren Spezifikation mit einem Testpaket, um eine konsistente Implementierung zu gewährleisten.

## Grundlegende Syntax

Hier eine schnelle Übersicht über die gängigsten Elemente, die Sie benötigen:

### 1. Überschriften

Überschriften werden mit dem `#`-Symbol gefolgt von einem Leerzeichen erstellt:

```md
# Das ist eine H1 
## Das ist eine H2 
### Das ist eine H3
```

### 2. Betonungen

Für _Kursiv_ verwenden Sie `*Sternchen*` oder `_Unterstriche_`.

Für **Fett** verwenden Sie `**doppelte Sternchen**` oder `__doppelte Unterstriche__`.

### 3. Listen

#### Ungeordnete Listen

Verwenden Sie Sternchen, Pluszeichen oder Minuszeichen gefolgt von einem Leerzeichen:

```md
* Punkt 1 
* Punkt 2   
    * Unter-Punkt 2.1   
    * Unter-Punkt 2.2
```

#### Geordnete Listen

Verwenden Sie einfach Zahlen gefolgt von Punkten:

```md
1. Erster Punkt 
2. Zweiter Punkt 
3. Dritter Punkt
```

### 4. Links

Ein [Inline-Link](https://www.beispiel.com/) hat folgende Syntax:

```md
[Angezeigter Text](URL "Optional Title")
```

### 5. Bilder

Bilder ähneln Links, haben jedoch ein vorangestelltes Ausrufezeichen:

```md
![Alternativer Text](URL "Optional Title")
```

### 6. Blockzitate

Verwenden Sie das `>`-Zeichen vor Ihrem Text:

```md
> Dies ist ein Blockzitat.
```

### 7. Codeblöcke

Für `Code` innerhalb des Textes, umschließen Sie Ihren Code mit Backticks:

```md
`Code hier`
```

Für mehrzeilige Codeblöcke verwenden Sie dreifache Backticks:

```md
\```
Zeile 1 des Codes
Zeile 2 des Codes
Zeile 3 des Codes
\```
```

### 8. Horizontale Linien

Erstellen Sie eine horizontale Linie mit drei Bindestrichen, Sternchen oder Unterstrichen:

```md
---
```

## Weitere nützliche Elemente

1. **Tabellen**:

```md
| Überschrift1 | Überschrift2 |
|-------------|-------------|
| Zelle1      | Zelle2      |
| Zelle3      | Zelle4      |
```

| Überschrift1 | Überschrift2 |
|-------------|-------------|
| Zelle1      | Zelle2      |
| Zelle3      | Zelle4      |

2. **Aufgabenlisten**:

```md
- [x] Erledigte Aufgabe
- [ ] Nicht erledigte Aufgabe
```

- [x] Erledigte Aufgabe
- [ ] Nicht erledigte Aufgabe

3. **Ankerlinks**: `[Linktext](#ankername)`

```md
# Diese Überschrift ist ein Anker
[Link zum obigen Anker](#diese-überschrift-ist-ein-anker)
```

# Diese Überschrift ist ein Anker
[Link zum obigen Anker](#diese-überschrift-ist-ein-anker)

## Arbeiten mit Zitaten

Markdown hat keine eingebaute Syntax für Zitate, aber viele Tools wie Pandoc unterstützen Erweiterungen dafür.

### Grundlegende Zitiersyntax (von Pandoc verwendet)

```md
Laut Smith [-@Smith2023] ist Markdown erstaunlich einfach.

Dies wurde auch von Doe [@Doe2022] in seiner neuesten Veröffentlichung beobachtet.
```

- **Markierungen**: Dies können Seitenzahlen, Kapitel, Bilder oder andere Abschnitte sein.

```md
[@Smith2023, S. 23-25]
```

```md
[@Doe2022, Kap. 2]
```

Hinweis: Beachten Sie die Verwendung von `-` vor `@Smith2023`. So wird der Name des Autors nicht wiederholt, wenn Sie das Zitat in Klammern setzen möchten. Ohne `-` würde es als narrative Zitierung betrachtet.

### Erstellen Sie eine Bibliografiedatei:

Zum Erstellen und Verwalten Ihrer Bibliografie empfehlen wir **[CiteDrive](https://www.citedrive.com/)**. CiteDrive ist ein Cloud-basierter, kollaborativer Referenzmanager, der nativ für BibTeX entwickelt wurde, speziell für Overleaf, LaTeX und R Markdown-Benutzer. Es erleichtert das Erstellen und Exportieren von Zitaten im `.bib`-Format.

Hier ein Beispiel für einen BibTeX-Eintrag, den Sie in Ihrer `.bib`-Datei haben könnten:

```bibtex
@article{Smith2023,
	title        = {Studientitel},
	author       = {Smith, John},
	year         = 2023,
	journal      = {Journalname},
	volume       = 5,
	pages        = {10--20}
}
```

#### Verwendung von Pandoc mit CSL-Stil:

Pandoc kann Ihre Markdown-Datei mit Zitaten in ein korrekt formatiertes Dokument mit CSL-Stil umwandeln. Hier ist der grundlegende Befehl:

```bash
pandoc ihreDatei.md --citeproc --bibliography=ihreBibDatei.bib --csl=ihreCSLStil.csl -o output.docx
```

Wobei:

- `ihreDatei.md` ist Ihre Markdown-Datei.
- `--citeproc` aktiviert den Zitierprozessor.
- `ihreBibDatei.bib` ist Ihre Bibliografiedatei.
- `ihreCSLStil.csl` ist Ihr gewählter Zitierstil (z. B. APA, MLA usw.). Es gibt viele CSL-Stile online verfügbar.
- `output.docx` ist die gewünschte Ausgabedatei (in diesem Fall ein Word-Dokument).

Denken Sie daran, dass Sie sowohl Pandoc als auch die entsprechenden CSL-Dateien benötigen, damit dies funktioniert. Das endgültige Ergebnis hängt von dem von Ihnen gewählten CSL-Stil ab.

## Anwendungen und Plattformen, die Markdown verwenden

- **GitHub** - Für Dokumentation und Kommentare in Repositories.
- **Obsidian** - Eine Wissensbasis, die mit einer lokalen Mappe von einfachen Text-Markdown-Dateien arbeitet.
- **R Markdown** - Integriert die grundlegende Markdown-Syntax mit eingebetteten R-Codeblöcken für dynamische Datenanalysen und Berichterstattung.
- **Discord** - Verwendet eine modifizierte Version von Markdown zur Textformatierung im Chat.
- **Reddit** - Ermöglicht den Nutzern, ihre Beiträge und Kommentare mit einer Version von Markdown zu formatieren.
- **Jekyll** - Ein statischer Website-Generator, der Markdown für die Erstellung von Inhalten unterstützt.
- **Notion** - Ein Notiz- und Organisationswerkzeug, das Markdown unterstützt.
- **VSCode** - Ein Code-Editor, der Markdown für die Dokumentation unterstützt und einen integrierten Browser hat.

