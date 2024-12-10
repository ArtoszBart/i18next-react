const getBrowserLocale = (): string => {
	return navigator.language.split('-')[0];
};

const getLocalStorageLanguage = (): string | null => {
	try {
		return localStorage.getItem('language');
	} catch {
		return null;
	}
};

export const getBrowserLanguage = (): string => {
	return getLocalStorageLanguage() || getBrowserLocale();
};

export const setBrowserLanguage = (language: string): void => {
	localStorage.setItem('language', language);
};
