import { DNA } from 'react-loader-spinner';
import './style.css';
const FullscreenLoader = () => {
	return (
		<div className='fullscreen-loader'>
			<DNA height='80' width='80' ariaLabel='dna-loading' />
		</div>
	);
};

export default FullscreenLoader;
