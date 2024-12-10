import i18next from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import { initReactI18next } from 'react-i18next';
import { getBrowserLanguage, setBrowserLanguage } from './browser';

const supportedLngs = ['en', 'es', 'fr', 'pl'] as const;
export type Language = (typeof supportedLngs)[number];

const loadPath = '/locales/{{lng}}/{{ns}}.json';
const fallbackLng: Language = 'en';

const handleStorageChange = (e: StorageEvent) => {
	if (e.key === 'language' && e.newValue) {
		setTranslation(e.newValue as Language);
	}
};
window.addEventListener('storage', handleStorageChange);

export const setTranslation = async (language: Language): Promise<void> => {
	const resolvedLanguage = resolveLanguage(language);
	await i18next.changeLanguage(resolvedLanguage); // Set the selected language
	setBrowserLanguage(resolvedLanguage); // Save the selected language
};

const resolveLanguage = (language: string): Language =>
	(supportedLngs as readonly Language[]).includes(language as Language)
		? (language as Language)
		: fallbackLng;

export const getCurrentLanguage = () => i18next.language;

i18next
	.use(I18NextHttpBackend)
	.use(initReactI18next)
	.use(intervalPlural)
	.init({
		// resources,
		// ns: ['common', 'dashboard'],
		// defaultNS: 'common',
		// postProcess: ['uppercase'],
		lng: getBrowserLanguage() || fallbackLng, // Language used to translation
		fallbackLng, // Fallback language to prevent displaying keys
		supportedLngs,
		backend: { loadPath }, // Path to translation files
		interpolation: {
			escapeValue: false, // React already escapes by default
			defaultVariables: {
				name: 'default name',
			},
		},
	});

export default i18next;
