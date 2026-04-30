import { defineMiddleware } from 'astro:middleware';
import { defaultLanguage, supportedLanguages } from 'src/configuration/language';
import { i18nMiddleware } from 'src/util/i18n_middleware';

const onRequest = defineMiddleware(async (context, next) => {
  return i18nMiddleware({
    context,
    next,
    defaultLanguage,
    supportedLanguages
  });
});

export { onRequest };