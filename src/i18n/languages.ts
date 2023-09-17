export const languages = {
	en: 'English',
	de: 'Deutsch',
	cs: 'Čeština',
	es: 'Español',
	pt: 'Português',
	fr: 'Français',
	sv: 'Svenska',
	tr: 'Türkçe',
    'zh-cn': '中文（中国',
	da: 'Dansk',
	it: 'Italiano',
	ja: '日本語',
	ko: '한국어',
	no: 'Norsk',
	ru: 'Русский'
} as const;

const date = new Date().getFullYear()

export const ui = {
	en: {
	  'footer.copyright': `Copyright © ${date} datanautes. All rights reserved.`,
	  'layout.blog.back-to-blog': 'Back to Blog',
	  'blogPost.fallback': 'As this blog post is not available in English, it will be displayed in English.',
	  'tag.posts.tagged': 'Posts tagged',
	  'blog.noPosts': 'No blog posts found'
	},
	de: {
	  'footer.copyright': `Urheberrecht © ${date} datanautes. Alle Rechte vorbehalten.`,
	  'layout.blog.back-to-blog': 'Zurück zum Blog',
	  'blogPost.fallback': 'Da dieser Blogbeitrag nicht auf Deutsch verfügbar ist, wird er auf Englisch angezeigt.',
	  'tag.posts.tagged': 'Beiträge markiert',
	  'blog.noPosts': 'Keine Blogbeiträge gefunden',
	},
	cs: {
	  'footer.copyright': `Autorské právo © ${date} datanautes. Všechna práva vyhrazena.`,
	  'layout.blog.back-to-blog': 'Zpět na blog',
	  'blogPost.fallback': 'Protože tento blogový příspěvek není dostupný v češtině, bude zobrazen v angličtině.',
	  'tag.posts.tagged': 'Označené příspěvky',
	  'blog.noPosts': 'Nebyly nalezeny žádné blogové příspěvky',
	},
	es: {
	  'footer.copyright': `Derechos de autor © ${date} datanautes. Todos los derechos reservados.`,
	  'layout.blog.back-to-blog': 'Volver al blog',
	  'blogPost.fallback': 'Ya que esta entrada del blog no está disponible en español, se mostrará en inglés.',
	  'tag.posts.tagged': 'Entradas etiquetadas',
	  'blog.noPosts': 'No se encontraron entradas de blog',
	},
	pt: {
	  'footer.copyright': `Direitos autorais © ${date} datanautes. Todos os direitos reservados.`,
	  'layout.blog.back-to-blog': 'Voltar ao blog',
	  'blogPost.fallback': 'Como este post do blog não está disponível em português, será exibido em inglês.',
	  'tag.posts.tagged': 'Postagens marcadas',
	  'blog.noPosts': 'Nenhuma postagem de blog encontrada',
	},
	fr: {
	  'footer.copyright': `Droits d’auteur © ${date} datanautes. Tous droits réservés.`,
	  'layout.blog.back-to-blog': 'Retour au blog',
	  'blogPost.fallback': 'Comme ce billet de blog n’est pas disponible en français, il sera affiché en anglais.',
	  'tag.posts.tagged': 'Articles étiquetés',
	  'blog.noPosts': 'Aucun article de blog trouvé',
	},
	sv: {
	  'footer.copyright': `Upphovsrätt © ${date} datanautes. Alla rättigheter reserverade.`,
	  'layout.blog.back-to-blog': 'Tillbaka till bloggen',
	  'blogPost.fallback': 'Eftersom detta blogginlägg inte är tillgängligt på svenska, kommer det att visas på engelska.',
	  'tag.posts.tagged': 'Märkta inlägg',
	  'blog.noPosts': 'Inga blogginlägg hittades',
	},
	tr: {
	  'footer.copyright': `Telif Hakkı © ${date} datanautes. Tüm hakları saklıdır.`,
	  'layout.blog.back-to-blog': 'Bloğa Dön',
	  'blogPost.fallback': 'Bu blog yazısı Türkçe olarak mevcut olmadığı için İngilizce olarak gösterilecektir.',
	  'tag.posts.tagged': 'Etiketlenmiş gönderiler',
	  'blog.noPosts': 'Blog gönderisi bulunamadı',
	},
	'zh-cn': {
	  'footer.copyright': `版权 © ${date} datanautes. 保留所有权利。`,
	  'layout.blog.back-to-blog': '返回博客',
	  'blogPost.fallback': '由于此博客文章不提供中文版，将以英文显示。',
	  'tag.posts.tagged': '标记的帖子',
	  'blog.noPosts': '未找到博客帖子',
	},
	da: {
	  'footer.copyright': `Ophavsret © ${date} datanautes. Alle rettigheder forbeholdes.`,
	  'layout.blog.back-to-blog': 'Tilbage til bloggen',
	  'blogPost.fallback': 'Da denne blogpost ikke er tilgængelig på dansk, vil den blive vist på engelsk.',
	  'tag.posts.tagged': 'Mærkede indlæg',
	  'blog.noPosts': 'Ingen blogindlæg fundet',
	},
	it: {
	  'footer.copyright': `Diritti d’autore © ${date} datanautes. Tutti i diritti riservati.`,
	  'layout.blog.back-to-blog': 'Torna al blog',
	  'blogPost.fallback': 'Poiché questo post del blog non è disponibile in italiano, verrà visualizzato in inglese.',
	  'tag.posts.tagged': 'Post taggati',
	  'blog.noPosts': 'Nessun post del blog trovato',
	},
	ja: {
	  'footer.copyright': `著作権 © ${date} datanautes. すべての権利を保有。`,
	  'layout.blog.back-to-blog': 'ブログに戻る',
	  'blogPost.fallback': 'このブログ投稿は日本語で利用できないため、英語で表示されます。',
	  'tag.posts.tagged': 'タグ付きの投稿',
	  'blog.noPosts': 'ブログ投稿が見つかりません',
	},
	ko: {
	  'footer.copyright': `저작권 © ${date} datanautes. 모든 권리 보유.`,
	  'layout.blog.back-to-blog': '블로그로 돌아가기',
	  'blogPost.fallback': '이 블로그 글이 한국어로 제공되지 않기 때문에 영어로 표시됩니다.',
	  'tag.posts.tagged': '태그가 달린 게시물',
	  'blog.noPosts': '블로그 게시물을 찾을 수 없습니다',
	},
	no: {
	  'footer.copyright': `Opphavsrett © ${date} datanautes. Alle rettigheter reservert.`,
	  'layout.blog.back-to-blog': 'Tilbake til bloggen',
	  'blogPost.fallback': 'Siden dette blogginnlegget ikke er tilgjengelig på norsk, vil det vises på engelsk.',
	  'tag.posts.tagged': 'Merkede innlegg',
	  'blog.noPosts': 'Ingen blogginnlegg funnet',
	},
	ru: {
	  'footer.copyright': `Авторские права © ${date} datanautes. Все права защищены.`,
	  'layout.blog.back-to-blog': 'Назад к блогу',
	  'blogPost.fallback': 'Поскольку этот блоговый пост не доступен на русском, он будет отображаться на английском.',
	  'tag.posts.tagged': 'Отмеченные записи',
	  'blog.noPosts': 'Блоговые записи не найдены',
	},
  } as const;
  

export const defaultLang = 'en';