import { defineMiddleware } from 'astro:middleware';

import { getCurrentLanguage } from './i18n';

import type { APIContext, MiddlewareNext } from 'astro';

type i18nSetupParams = {
  defaultLanguage: string;
  supportedLanguages: string[];
};

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
  const {
    url,
    locals
  } = context;

  const urlLang = url.pathname.split('/')[1] ?? '';
  const currentLanguage = getCurrentLanguage(urlLang, defaultLanguage, supportedLanguages);

  locals.language = currentLanguage;

  return next();
};

const i18nSetup = ({ defaultLanguage, supportedLanguages }: i18nSetupParams) => {
  return defineMiddleware(async (context, next) => {
    return i18nMiddleware({
      context,
      next,
      defaultLanguage,
      supportedLanguages
    });
  });
};

export type { i18nSetupParams };
export { i18nSetup, i18nMiddleware };