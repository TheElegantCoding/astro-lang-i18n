const getI18n = <T>(language: string, languageModule: Record<string, T>): T => {
  return languageModule[language] as T || languageModule[Object.keys(languageModule)[0] as string] as T;
};

const getCurrentLanguage = (language: string, defaultLanguage: string, supportedLanguages: string[]): string => {
  return supportedLanguages.includes(language) ? language : defaultLanguage;
};

const getLanguageFromUrl = (url: URL, defaultLanguage: string, languages: string[]) => {
  const urlLang = url.pathname.split('/')[1] ?? defaultLanguage;
  return getCurrentLanguage(urlLang, defaultLanguage, languages);
};

const removeLanguageFromUrl = (url: string, language: string): string => {
  const cleanUrl = url.trim();
  const segments = cleanUrl.split('/').filter(Boolean);

  if (segments.length > 0 && segments[0] === language) {
    segments.shift();
  }

  return segments.join('/');
};

export {
  getI18n,
  getCurrentLanguage,
  getLanguageFromUrl,
  removeLanguageFromUrl
};
