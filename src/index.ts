import {
  getI18n,
  changeLanguage,
  getStaticLanguage,
  getCurrentLanguage,
  getLanguageFromUrl,
  replaceLanguageInUrl
} from './util/i18n';
import { interpolate } from './util/interpolate';

export { default as Base } from './component/internationalization.astro';

export {
  getI18n,
  interpolate,
  changeLanguage,
  getStaticLanguage,
  getCurrentLanguage,
  getLanguageFromUrl,
  replaceLanguageInUrl
};