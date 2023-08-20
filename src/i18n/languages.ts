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
	  'layout.blog.back-to-blog': 'Back to Blog'
	},
	de: {
	  'footer.copyright': `Urheberrecht © ${date} datanautes. Alle Rechte vorbehalten.`,
	  'layout.blog.back-to-blog': 'Zurück zum Blog'
	},
	cs: {
	  'footer.copyright': `Autorské právo © ${date} datanautes. Všechna práva vyhrazena.`,
	  'layout.blog.back-to-blog': 'Zpět na blog'
	},
	es: {
	  'footer.copyright': `Derechos de autor © ${date} datanautes. Todos los derechos reservados.`,
	  'layout.blog.back-to-blog': 'Volver al blog'
	},
	pt: {
	  'footer.copyright': `Direitos autorais © ${date} datanautes. Todos os direitos reservados.`,
	  'layout.blog.back-to-blog': 'Voltar ao blog'
	},
	fr: {
	  'footer.copyright': `Droits d’auteur © ${date} datanautes. Tous droits réservés.`,
	  'layout.blog.back-to-blog': 'Retour au blog'
	},
	sv: {
	  'footer.copyright': `Upphovsrätt © ${date} datanautes. Alla rättigheter reserverade.`,
	  'layout.blog.back-to-blog': 'Tillbaka till bloggen'
	},
	tr: {
	  'footer.copyright': `Telif Hakkı © ${date} datanautes. Tüm hakları saklıdır.`,
	  'layout.blog.back-to-blog': 'Bloğa Dön'
	},
	'zh-cn': {
	  'footer.copyright': `版权 © ${date} datanautes. 保留所有权利。`,
	  'layout.blog.back-to-blog': '返回博客'
	},
	da: {
	  'footer.copyright': `Ophavsret © ${date} datanautes. Alle rettigheder forbeholdes.`,
	  'layout.blog.back-to-blog': 'Tilbage til bloggen'
	},
	it: {
	  'footer.copyright': `Diritti d’autore © ${date} datanautes. Tutti i diritti riservati.`,
	  'layout.blog.back-to-blog': 'Torna al blog'
	},
	ja: {
	  'footer.copyright': `著作権 © ${date} datanautes. すべての権利を保有。`,
	  'layout.blog.back-to-blog': 'ブログに戻る'
	},
	ko: {
	  'footer.copyright': `저작권 © ${date} datanautes. 모든 권리 보유.`,
	  'layout.blog.back-to-blog': '블로그로 돌아가기'
	},
	no: {
	  'footer.copyright': `Opphavsrett © ${date} datanautes. Alle rettigheter reservert.`,
	  'layout.blog.back-to-blog': 'Tilbake til bloggen'
	},
	ru: {
	  'footer.copyright': `Авторские права © ${date} datanautes. Все права защищены.`,
	  'layout.blog.back-to-blog': 'Назад к блогу'
	},
  } as const;
  

export const defaultLang = 'en';