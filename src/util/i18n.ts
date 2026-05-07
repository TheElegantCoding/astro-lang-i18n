const getI18n = <T>(language: string, languageModule: Record<string, T>): T => {
  return languageModule[language] as T;
};

const getCurrentLanguage = (language: string, defaultLanguage: string, supportedLanguages: string[]): string => {
  return supportedLanguages.includes(language) ? language : defaultLanguage;
};

const getStaticLanguage = (supportedLanguages: string[]) => {
  const language: { params: { lang: string } }[] = [];

  supportedLanguages.forEach((key) => { language.push({ params: { lang: key } }); });

  return language;
};

const getLanguageFromUrl = (url: URL, defaultLanguage: string, languages: string[]) => {
  const urlLang = url.pathname.split('/')[1] ?? defaultLanguage;
  return getCurrentLanguage(urlLang, defaultLanguage, languages);
};

const replaceLanguageInUrl = (url: string, oldLanguage: string, newLanguage: string): string => {
  const urlObject = new URL(url);
  const pathSegments = urlObject.pathname.split('/').filter(Boolean);

  if (pathSegments.length > 0 && pathSegments[0] === oldLanguage) {
    pathSegments[0] = newLanguage;
    urlObject.pathname = `/${pathSegments.join('/')}`;
  }

  return urlObject.toString();
};

const removeLanguageFromUrl = (url: string, language: string): string => {
  const cleanUrl = url.trim();
  const segments = cleanUrl.split('/').filter(Boolean);

  if (segments.length > 0 && segments[0] === language) {
    segments.shift();
  }

  return segments.join('/');
};

const changeLanguage = (language: string) => {
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split('/').filter(Boolean);

  if (pathSegments.length > 0) {
    pathSegments[0] = language;
    const newPath = `/${pathSegments.join('/')}`;
    window.location.pathname = newPath;
  } else {
    window.location.pathname = `/${language}`;
  }
};

export {
  getI18n,
  changeLanguage,
  getStaticLanguage,
  getCurrentLanguage,
  getLanguageFromUrl,
  replaceLanguageInUrl,
  removeLanguageFromUrl
};
