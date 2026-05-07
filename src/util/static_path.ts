/* eslint-disable max-statements */
import { removeLanguageFromUrl } from 'src/util/i18n';

type GetDynamicLangRouteParameter = {
  defaultLang?: string;
  excludeDefaultLang?: boolean;
  router: Record<string, unknown>;
  mappings?: Record<string, unknown>;
};

const getDynamicLangRoute = ({
  router,
  mappings = {},
  excludeDefaultLang = false,
  defaultLang
}: GetDynamicLangRouteParameter) => {
  return Object.entries(router).map(([lang, pages]) => {
    if (excludeDefaultLang && lang === defaultLang) { return null; }

    const pagesForLang = pages as Record<string, string>;
    const parameters: Record<string, string> = { lang };

    const firstKey = Object.values(mappings)[0] as string;
    const fullPath = pagesForLang[firstKey] as string | undefined;

    if (!fullPath) { return null; }

    const segments = removeLanguageFromUrl(fullPath, lang).split('/').filter(Boolean);

    Object.keys(mappings).forEach((fileParameter, index) => {
      if (segments[index]) {
        parameters[fileParameter] = segments[index];
      }
    });

    return { params: parameters };
  }).filter((path) => { return path !== null; });
};

export type { GetDynamicLangRouteParameter };
export { getDynamicLangRoute };