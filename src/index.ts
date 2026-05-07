import { i18nSetup } from 'src/util/i18n_middleware';

import {
  getI18n,
  getCurrentLanguage,
  getLanguageFromUrl
} from './util/i18n';
import { interpolate } from './util/interpolate';

import type { i18nSetupParams } from './util/i18n_middleware';

export type { i18nSetupParams };
export {
  getI18n,
  i18nSetup,
  interpolate,
  getCurrentLanguage,
  getLanguageFromUrl
};