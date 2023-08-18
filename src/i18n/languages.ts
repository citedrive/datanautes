export const languages = {
	en: 'English',
	de: 'Deutsch',
	cs: 'Čeština',
	es: 'Español',
	pt: 'Português',
	fr: 'Français',
	sv: 'Svenska',
	tr: 'Türkçe',
    'zh-CH': '中文（中国',
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
	},
	de: {
		'footer.copyright': `Urheberrecht © ${date} datanautes. Alle Rechte vorbehalten.`,
	},
	cs: {
		'footer.copyright': `Autorské právo © ${date} datanautes. Všechna práva vyhrazena.`,
	},
	es: {
		'footer.copyright': `Derechos de autor © ${date} datanautes. Todos los derechos reservados.`,
	},
	pt: {
		'footer.copyright': `Direitos autorais © ${date} datanautes. Todos os direitos reservados.`,
	},
	fr: {
		'footer.copyright': `Droits d’auteur © ${date} datanautes. Tous droits réservés.`,
	},
	sv: {
		'footer.copyright': `Upphovsrätt © ${date} datanautes. Alla rättigheter reserverade.`,
	},
	tr: {
		'footer.copyright': `Telif Hakkı © ${date} datanautes. Tüm hakları saklıdır.`,
	},
	'zh-CH': {
		'footer.copyright': `版权 © ${date} datanautes. 保留所有权利。`,
	},
	da: {
		'footer.copyright': `Ophavsret © ${date} datanautes. Alle rettigheder forbeholdes.`,
	},
	it: {
		'footer.copyright': `Diritti d’autore © ${date} datanautes. Tutti i diritti riservati.`,
	},
	ja: {
		'footer.copyright': `著作権 © ${date} datanautes. すべての権利を保有。`,
	},
	ko: {
		'footer.copyright': `저작권 © ${date} datanautes. 모든 권리 보유.`,
	},
	no: {
		'footer.copyright': `Opphavsrett © ${date} datanautes. Alle rettigheter reservert.`,
	},
	ru: {
		'footer.copyright': `Авторские права © ${date} datanautes. Все права защищены.`,
	},
} as const;

export const defaultLang = 'en';