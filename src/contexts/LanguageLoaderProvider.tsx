import {
	createContext,
	Dispatch,
	PropsWithChildren,
	useContext,
	useState,
} from 'react';
import FullscreenLoader from '../components/FullscreenLoader';

interface ILanguageLoader {
	setIsLanguageLoading: Dispatch<boolean>;
}

const LanguageLoaderContext = createContext<ILanguageLoader>(
	{} as ILanguageLoader
);

const LanguageLoaderProvider = ({ children }: PropsWithChildren) => {
	const [isLanguageLoading, setIsLanguageLoading] = useState(false);

	return (
		<LanguageLoaderContext.Provider value={{ setIsLanguageLoading }}>
			{isLanguageLoading && <FullscreenLoader />}
			{children}
		</LanguageLoaderContext.Provider>
	);
};

export const useLanguageLoader = (): ILanguageLoader =>
	useContext(LanguageLoaderContext);

export default LanguageLoaderProvider;
