---
title: "Guia do Iniciante para Markdown"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Datanautes Team"]
description: "Explore o Markdown: a linguagem de marcação amigável usada por escritores e desenvolvedores. Melhore a legibilidade do conteúdo na web em plataformas como o GitHub. Mergulhe em nosso guia!"
---

O Markdown é uma linguagem simples projetada para simplificar a escrita de conteúdo. É usado em todos os lugares, desde o GitHub até aplicativos de anotações. Se você é um escritor, desenvolvedor ou apenas alguém que deseja simplificar sua escrita na web, este guia é para você!

## O que é Markdown?

Markdown é uma linguagem de marcação leve, criada por John Gruber em 2004, para tornar o texto formatado facilmente legível em editores de texto simples. É especialmente popular para blogs, mensagens instantâneas, fóruns, ferramentas colaborativas, documentação e arquivos readme. Com o tempo, variações em sua interpretação levaram à criação do CommonMark em 2014, uma especificação mais clara com um conjunto de testes para garantir uma implementação consistente.

## Sintaxe Básica

Aqui está uma rápida descrição dos elementos mais comuns que você precisará:

### 1. Cabeçalhos

Os cabeçalhos são criados usando o símbolo `#`, seguido por um espaço:

```md
# Isto é um H1 
## Isto é um H2 
### Isto é um H3
```

### 2. Ênfase

Para _itálico_ use `*asteriscos*` ou `_sublinhados_`.

Para **negrito** use `**dois asteriscos**` ou `__dois sublinhados__`.

### 3. Listas

#### Listas não ordenadas

Use asteriscos, mais, ou menos seguido de um espaço:

```md
* Item 1 
* Item 2   
    * Subitem 2.1   
    * Subitem 2.2
```

#### Listas ordenadas

Simplesmente use números seguidos por pontos:

```md
1. Primeiro item 
2. Segundo item 
3. Terceiro item
```

### 4. Links

Você pode criar um [link inline](https://www.example.com/) com a seguinte sintaxe:

```md
[Texto exibido](URL "Título opcional")
```

### 5. Imagens

As imagens são semelhantes aos links, mas com um ponto de exclamação à frente:

```md
![Texto Alternativo](URL "Título opcional")
```

### 6. Blockquotes

Para blockquotes, use o caractere `>` antes do seu texto:

```md
> Este é um blockquote.
```

### 7. Blocos de Código

Para `código` inline, envolva seu código com acentos graves:

```md
`código aqui` 
```

Para blocos de código de várias linhas, use três acentos graves:

```md
\```
Linha 1 do código
Linha 2 do código
Linha 3 do código
\```
```

### 8. Linha Horizontal

Você pode criar uma linha horizontal com três traços, asteriscos ou sublinhados:

```md
---
```

## Outros elementos úteis

1. **Tabelas**:

```md
| Cabeçalho1 | Cabeçalho2 | 
|-----------|-----------| 
| célula1   | célula2   | 
| célula3   | célula4   |
```

2. **Listas de tarefas**:

```md
- [x] Tarefa concluída 
- [ ] Tarefa não concluída
```

3. **Riscado**:

Use `~~` para riscar o texto:

```md
~~riscado~~
```

## Escreva citações em Markdown:

No seu arquivo Markdown, você pode adicionar citações usando o símbolo `@` seguido pela chave de citação. Por exemplo:

```md
De acordo com estudos recentes [@Smith2023], o efeito é...
```

Você também pode usar várias citações:

```md
Alguns estudiosos argumentam este ponto [@Smith2023; @Doe2022].
```

### Citações parentéticas vs. Citações narrativas:

**Parentéticas** (ou no texto) colocam o autor e o ano entre parênteses:

```md
Este fenômeno foi observado em vários contextos (por exemplo, [@Smith2023]).
```

**Narrativas** incorporam o autor diretamente na frase:

```md
De acordo com @Smith2023, o fenômeno...
```

#### 2. Adicionando números de página, capítulos, prefixos e sufixos:

Você pode fornecer locais mais específicos ou qualificadores para suas citações adicionando prefixos, localizadores e sufixos:

- **Prefixo e Sufixo**: Útil para adicionar contexto antes ou depois de uma citação.

```md
Como foi bem apontado [-@Smith2023, p. 23; veja também @Doe2022, ch. 2].
```

- **Localizadores**: Estes podem ser números de página, capítulos, figuras ou qualquer outro tipo de seção.

```md
[@Smith2023, p. 23-25]
```

```md
[@Doe2022, ch. 2]
```

Observe o uso de `-` antes de `@Smith2023`. Isso impede que o nome do autor seja repetido quando você deseja uma citação parentética. Sem o `-`, seria tratado como uma citação narrativa.

### Crie um arquivo de bibliografia:

Para criar e gerenciar sua bibliografia, recomendamos usar **[CiteDrive](https://www.citedrive.com/)**. CiteDrive é um gerenciador de referências nativo do BibTeX, colaborativo e baseado na nuvem, projetado especificamente para usuários Overleaf, LaTeX e R Markdown. Ele simplifica o processo de curar e gerenciar citações para seus documentos acadêmicos, teses ou qualquer outro tipo de publicação.

---

Vamos terminar com uma rápida introdução sobre como adicionar um vídeo ao seu arquivo Markdown.

## Incorporar vídeos:

Para incorporar um vídeo de uma plataforma como o YouTube, você geralmente precisará usar o código embed fornecido por essa plataforma.

```md
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

Substitua "VIDEO_ID" pelo identificador específico do vídeo que deseja incorporar. Tenha em mente que a maneira exata de incorporar um vídeo pode variar dependendo da plataforma e do host de seu site.

---

Espero que você tenha encontrado este guia útil! Se você tiver alguma pergunta ou comentário, sinta-se à vontade para entrar em contato conosco. Boa sorte na sua jornada de escrita com Markdown!
