const defaultLanguage = 'en';

const supportedLanguages = [
  'en',
  'es',
  'fr'
];

type SupportedLanguagesType = 'en' | 'es' | 'fr';

export type { SupportedLanguagesType };
export { defaultLanguage, supportedLanguages };