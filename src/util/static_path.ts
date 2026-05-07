const getStaticLanguage = (supportedLanguages: string[], parameter = 'lang') => {
  const language: { params: Record<string, string> }[] = [];

  supportedLanguages.forEach((lang) => {
    return language.push({ params: { [parameter]: lang } });
  });

  return language;
};

export { getStaticLanguage };