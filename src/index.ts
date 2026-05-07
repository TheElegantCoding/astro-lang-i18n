import { i18nSetup } from 'src/util/i18n_middleware';

import { getDynamicLangRoute } from './util/dynamic_path';
import {
  getI18n,
  getCurrentLanguage,
  getLanguageFromUrl,
  removeLanguageFromUrl
} from './util/i18n';
import { interpolate } from './util/interpolate';
import { getStaticLanguage } from './util/static_path';

import type { i18nSetupParams } from './util/i18n_middleware';

export type { i18nSetupParams };
export {
  getI18n,
  i18nSetup,
  interpolate,
  getStaticLanguage,
  getCurrentLanguage,
  getLanguageFromUrl,
  getDynamicLangRoute,
  removeLanguageFromUrl
};