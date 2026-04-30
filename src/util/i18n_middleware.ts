import { getCurrentLanguage } from 'src/util/i18n';

import type { APIContext, MiddlewareNext } from 'astro';

type i18nMiddlewareParams = {
  context: APIContext;
  next: MiddlewareNext;
  defaultLanguage: string;
  supportedLanguages: string[];
};

const i18nMiddleware = async ({
  context,
  next,
  defaultLanguage,
  supportedLanguages
}: i18nMiddlewareParams) => {
  const urlLang = context.url.pathname.split('/')[1] ?? '';

  context.locals.language = getCurrentLanguage(urlLang, defaultLanguage, supportedLanguages);

  return next();
};

export { i18nMiddleware };