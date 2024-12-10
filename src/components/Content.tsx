import { Trans, useTranslation } from 'react-i18next';

function Content() {
	const { t } = useTranslation();
	const example = 'haha';

	return (
		<>
			<h1>{t('language_name')}</h1>
			<div className='container'>
				<div>
					<h2>{t('interpolation_title')}</h2>
					<p>{t('interpolation')}</p>
					<p>{t('interpolation', { name: 'Bartosz' })}</p>

					<h2>{t('plurals_title')}</h2>
					<p>{t('plurals', { count: 0 })}</p>
					<p>{t('plurals', { count: 1 })}</p>
					<p>{t('plurals', { count: 3 })}</p>
					<p>{t('plurals', { count: 5 })}</p>
					<p>{t('place', { count: 1, ordinal: true })}</p>
					<p>{t('place', { count: 2, ordinal: true })}</p>
					<p>{t('place', { count: 3, ordinal: true })}</p>
					<p>{t('place', { count: 4, ordinal: true })}</p>
					<p>{t('plurals_interval', { postProcess: 'interval', count: 1 })}</p>
					<p>{t('plurals_interval', { postProcess: 'interval', count: 4 })}</p>
					<p>
						{t('plurals_interval', { postProcess: 'interval', count: 100 })}
					</p>

					<h2>{t('styling_title')}</h2>
					<Trans i18nKey='styling' values={{ style: example }}>
						I have a <strong>{example}</strong>
					</Trans>
				</div>

				<div>
					<h2>{t('sex_title')}</h2>
					<p>{t('sex')}</p>
					<p>{t('sex', { context: 'male' })}</p>
					<p>{t('sex', { context: 'female' })}</p>
					<p>{t('friends', { context: 'female', count: 1 })}</p>
					<p>{t('friends', { context: 'female', count: 4 })}</p>
					<h2>{t('numbers_title')}</h2>
					<p>{t('number_format', { val: 1000 })}</p>
					<p>{t('number_format', { val: 1000.1, minimumFractionDigits: 2 })}</p>
					<p>
						{t('number_format', {
							val: 1000.1,
							formatParams: { val: { minimumFractionDigits: 3 } },
						})}
					</p>
					<h2>{t('dates_title')}</h2>
					<p>{t('intlDateTime', { val: Date.now() })}</p>
					<p>{t('intlRelativeTime', { val: 3 })}</p>
					<p>{t('intlRelativeTimeWithOptions', { val: -3 })}</p>
					<p>
						{t('intlRelativeTimeWithOptionsExplicit', {
							val: 1,
							style: 'long',
						})}
					</p>
					<h2>{t('formatting_title')}</h2>
					<p>{t('intlList', { val: ['Vite', 'React', 'i18next'] })}</p>
				</div>
			</div>
		</>
	);
}

export default Content;
