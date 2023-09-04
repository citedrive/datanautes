---
title: "Markdown'a Giriş Rehberi"
date: "2023-08-27"
tags: ["Markdown"]
authors: ["Datanautes Team"]
description: "Yazarlar ve geliştiriciler için kullanıcı dostu bir işaretleme dilini, Markdown'ı keşfedin. GitHub gibi platformlarda içerik okunabilirliğinizi artırın. Rehberimize göz atın!"
isLocalized: true
---

Markdown, içerik yazımını kolaylaştırmak amacıyla oluşturulmuş basit bir dildir. GitHub'tan not alma uygulamalarına kadar her yerde kullanılır. Bir yazar, geliştirici ya da sadece çevrimiçi yazı yazmayı kolaylaştırmak isteyen biriyseniz, bu rehber tam size göre!

## Markdown Nedir?

Markdown, 2004'te John Gruber tarafından basit metin düzenleyicilerde formatlı metni okunabilir yapmak için oluşturulan hafif bir işaretleme dilidir. Bloglar, anlık mesajlar, forumlar, işbirlikçi araçlar, dökümantasyon ve readme dosyaları için özellikle popülerdir. Zamanla, farklı yorumların ortaya çıkmasıyla 2014'te CommonMark ortaya çıktı, bu da tutarlı uygulamayı garanti altına almak için test sistemiyle birlikte daha net bir spesifikasyonu temsil ediyor.

## Temel Sözdizimi

İşte ihtiyaç duyacağınız en yaygın öğelerin hızlı bir özeti:

### 1. Başlıklar

`#` karakterini bir boşlukla kullanarak başlık oluşturun:

```md
# Bu bir H1 başlığıdır
## Bu bir H2 başlığıdır
### Bu bir H3 başlığıdır
```

### 2. Vurgular

_İtalik_ için `*yıldız*` ya da `_alt çizgi_` kullanın.

**Kalın** metin için `**çift yıldız**` ya da `__çift alt çizgi__` kullanın.

### 3. Listeler

#### Sırasız Listeler

Yıldız, artı ya da eksi işaretini bir boşlukla kullanın:

```md
* Madde 1
* Madde 2
    * Alt madde 2.1
    * Alt madde 2.2
```

#### Sıralı Listeler

Sadece bir numara ve ardından bir nokta kullanın:

```md
1. İlk madde
2. İkinci madde
3. Üçüncü madde
```

### 4. Bağlantılar

Aşağıdaki sözdizimini kullanarak bir [bağlantı](https://www.example.com/) oluşturabilirsiniz:

```md
[Gösterim metni](URL "İsteğe bağlı başlık")
```

### 5. Görseller

Görseller, bağlantılara benzer, ama önünde bir ünlem işareti vardır:

```md
![Alternatif metin](URL "İsteğe bağlı başlık")
```

### 6. Alıntılar

Alıntı için metninizden önce `>` işaretini kullanın:

```md
> Bu bir alıntıdır.
```

### 7. Kod Blokları

Satır içi `kod` için metni ters tırnak içine alın:

```md
`burada kod`
```

Çok satırlı kod blokları için üç ters tırnak kullanın:

```md
\```
Kodun 1. satırı
Kodun 2. satırı
Kodun 3. satırı
\```
```

### 8. Yatay Çizgiler

Üç çizgi, yıldız ya da alt çizgi kullanarak bir yatay çizgi oluşturabilirsiniz:

```md
---
```

## Diğer Faydalı Öğeler

1. **Tablolar**:

```md
| Başlık1 | Başlık2 |
|---------|---------|
| hücre1  | hücre2  |
| hücre3  | hücre4  |
```

2. **Görev Listeleri**:

```md
- [x] Tamamlanan görev
- [ ] Tamamlanmamış görev
```

3. **Üzeri Çizili**:

Üzeri çizili metin için `~~` kullanın:

```md
~~üzeri çizili~~
```

## Markdown'da Alıntı Yapma:

Markdown dosyanıza `@` işaretiyle birlikte alıntı anahtarı ekleyerek alıntı ekleyebilirsiniz. Örneğin:

```md
Yakın tarihli araştırmalara göre [@Smith2023], etkinin...
```

Birden çok alıntı da kullanabilirsiniz:

```md
Bazı araştırmacılar bu görüşü destekliyor [@Smith2023; @Doe2022].
```

### Dolaylı ve Doğrudan Alıntılar:

**Dolaylı** (veya metin içi) alıntılar, yazarı ve yılı parantez içinde yerleştirir:

```md
[@Smith2023] tarafından belirtildiği gibi...
```

**Doğrudan** alıntılar aynı zamanda sayfa numarasını da içerir:

```md
[@Smith2023, ss. 33-35] şöyle belirtiyor...
```

