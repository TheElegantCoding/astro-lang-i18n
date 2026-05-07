import { test, expect } from 'vitest';

import {
  getI18n,
  getCurrentLanguage,
  getLanguageFromUrl,
  removeLanguageFromUrl
} from '../src/util/i18n';

test.describe('i18n', () => {
  test('should return the correct translation for a given key', () => {
    const translations = {
      en: {
        greeting: 'Hello'
      },
      es: {
        greeting: 'Hola'
      }
    };

    const i18n = getI18n('en', translations);
    const i18nEs = getI18n('es', translations);

    expect(i18n.greeting).toBe('Hello');
    expect(i18nEs.greeting).toBe('Hola');
  });

  test('should return the default language translation if language is missing', () => {
    const translations = {
      en: {
        greeting: 'Hello'
      }
    };

    const i18n = getI18n('es', translations);

    expect(i18n.greeting).toBe('Hello');
  });

  test('should return the correct current language', () => {
    const supportedLanguages = ['en', 'es'];
    const defaultLanguage = 'en';

    expect(getCurrentLanguage('es', defaultLanguage, supportedLanguages)).toBe('es');
    expect(getCurrentLanguage('fr', defaultLanguage, supportedLanguages)).toBe('en');
  });

  test('should return the default language if the provided language is not supported', () => {
    const supportedLanguages = ['en', 'es'];
    const defaultLanguage = 'en';

    expect(getCurrentLanguage('fr', defaultLanguage, supportedLanguages)).toBe('en');
  });

  test('should return the correct language from URL', () => {
    const supportedLanguages = ['en', 'es'];
    const defaultLanguage = 'en';

    const url = new URL('https://example.com/es/some-page');
    expect(getLanguageFromUrl(url, defaultLanguage, supportedLanguages)).toBe('es');

    const urlDefault = new URL('https://example.com/fr/some-page');
    expect(getLanguageFromUrl(urlDefault, defaultLanguage, supportedLanguages)).toBe('en');

    const urlDefault2 = new URL('https://example.com/some-page');
    expect(getLanguageFromUrl(urlDefault2, defaultLanguage, supportedLanguages)).toBe('en');

    const urlDefault3 = new URL('https://example.com//some-page');
    expect(getLanguageFromUrl(urlDefault3, defaultLanguage, supportedLanguages)).toBe('en');

    const urlDefault4 = new URL('https://example.com/estable');
    expect(getLanguageFromUrl(urlDefault4, defaultLanguage, supportedLanguages)).toBe('en');
  });

  test('should remove language from URL', () => {
    const url = 'en/some-page';
    const language = 'en';
    expect(removeLanguageFromUrl(url, language)).toBe('some-page');

    const urlWithoutLanguage = 'some-page';
    expect(removeLanguageFromUrl(urlWithoutLanguage, language)).toBe('some-page');

    const urlWithExtraSlashes = '/en/some-page/';
    expect(removeLanguageFromUrl(urlWithExtraSlashes, language)).toBe('some-page');
  });
});