import { sequence } from 'astro:middleware';
import { defaultLanguage, supportedLanguages } from 'src/configuration/language';
import { i18nSetup } from 'src/util/i18n_middleware';

const i18n = i18nSetup({ defaultLanguage, supportedLanguages });

const onRequest = sequence(i18n);

export { onRequest };