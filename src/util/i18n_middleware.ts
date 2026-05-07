/* eslint-disable max-statements */
import { defineMiddleware } from 'astro:middleware';
import { getCurrentLanguage } from 'src/util/i18n';

import type { APIContext, MiddlewareNext } from 'astro';

type I18nRoutes = Record<string, Record<string, string>>;

type i18nSetupParams = {
  defaultLanguage: string;
  supportedLanguages: string[];
};

type i18nMiddlewareParams = {
  context: APIContext;
  next: MiddlewareNext;
  defaultLanguage: string;
  redirectToDefault?: boolean;
  supportedLanguages: string[];
};

const getI18nRoutes = () => {
  const modules = import.meta.glob('/src/**/router/*.ts', { eager: true });
  const allRoutes: Record<string, Record<string, string>> = {};

  Object.values(modules).forEach((data) => {
    const moduleData = data as Record<string, unknown>;
    Object.keys(moduleData).forEach((exportName) => {
      if (exportName === 'default' && !moduleData[exportName]) { return; }

      const routerData = moduleData[exportName];

      if (routerData && typeof routerData === 'object') {
        const localizedRoutes = routerData as Record<string, Record<string, string>>;

        Object.keys(localizedRoutes).forEach((lang) => {
          const existingRoutes = allRoutes[lang] ?? {};
          const newRoutes = localizedRoutes[lang];

          allRoutes[lang] = {
            ...existingRoutes,
            ...newRoutes
          };
        });
      }
    });
  });

  return allRoutes as I18nRoutes;
};

const findRouteKey = (path: string, routes: Record<string, string>) => {
  const normalizedPath = path.replace(/\/$/, '') || '/';
  const entry = Object.entries(routes).find(([_key, routePath]) => { return (routePath.replace(/\/$/, '') || '/') === normalizedPath; });
  return entry ? entry[0] : null;
};

const getRedirectUrl = (
  currentPath: string,
  currentLang: string,
  targetLang: string,
  routes: I18nRoutes
): null | string => {
  if (currentLang === targetLang) { return null; }

  const currentLanguageRoutes = routes[currentLang] ?? {};
  const routeKey = findRouteKey(currentPath, currentLanguageRoutes);

  if (routeKey) {
    const translatedPath = routes[targetLang]?.[routeKey];
    return translatedPath && translatedPath !== currentPath ? translatedPath : null;
  }

  return null;
};

const i18nMiddleware = async ({
  context,
  next,
  defaultLanguage,
  redirectToDefault = false,
  supportedLanguages
}: i18nMiddlewareParams) => {
  const {
    url,
    cookies,
    request,
    redirect,
    locals
  } = context;

  const urlLang = url.pathname.split('/')[1] ?? '';
  const currentLanguage = getCurrentLanguage(urlLang, defaultLanguage, supportedLanguages);

  locals.language = currentLanguage;

  if (!import.meta.env.SSR || !redirectToDefault) { return next(); }

  const langCookie = cookies.get('language')?.value;
  const acceptLang = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0];
  const preferredLang = langCookie ?? (supportedLanguages.includes(acceptLang ?? '') ? acceptLang : defaultLanguage);
  const routes = getI18nRoutes();

  if (!langCookie) {
    cookies.set('language', preferredLang as string, {
      path: '/',
      httpOnly: false,
      maxAge: 31536000,
      sameSite: 'lax'
    });

    const destination = getRedirectUrl(
      url.pathname,
      currentLanguage,
      preferredLang as string,
      routes
    );
    if (destination) { return redirect(destination); }
  } else if (currentLanguage && langCookie !== currentLanguage) {
    cookies.set('language', currentLanguage, {
      path: '/',
      httpOnly: false,
      maxAge: 31536000,
      sameSite: 'lax'
    });
  }

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