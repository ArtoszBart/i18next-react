import { useLanguageLoader } from '../contexts/LanguageLoaderProvider';
import {
	getCurrentLanguage,
	type Language,
	setTranslation,
} from '../utils/i18n';

export const languages: readonly { code: Language; label: string }[] = [
	{ code: 'en', label: 'English' },
	{ code: 'es', label: 'Español' },
	{ code: 'fr', label: 'Français' },
	{ code: 'pl', label: 'Polski' },
];

const LanguageSelector = () => {
	const { setIsLanguageLoading } = useLanguageLoader();
	const handleLanguageChange = async (e: any) => {
		setIsLanguageLoading(true);
		const chosenLanguage = e.target.value as Language;
		try {
			await setTranslation(chosenLanguage);
		} finally {
			setIsLanguageLoading(false);
		}
	};

	return (
		<>
			<select
				value={getCurrentLanguage()}
				className='custom-select'
				style={{ width: 200 }}
				onChange={handleLanguageChange}
			>
				{languages.map((lang) => (
					<option key={lang.code} value={lang.code}>
						{lang.label}
					</option>
				))}
			</select>
		</>
	);
};

export default LanguageSelector;
