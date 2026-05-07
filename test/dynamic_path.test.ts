import { getDynamicLangRoute } from 'src/util/dynamic_path';
import { test, expect, describe } from 'vitest';

describe('Static Path', () => {
  test('should return the correct dynamic language route', () => {
    const path = getDynamicLangRoute({
      router: {
        es: {
          aboutUs: '/es/sobre-nosotros'
        },
        en: {
          aboutUs: '/about-us'
        },
        fr: {
          aboutUs: '/fr/a-propos'
        }
      },
      defaultLang: 'en',
      mappings: { about_us: 'aboutUs', contact: 'contact' }
    });

    const expected = [
      { params: { lang: 'es', about_us: 'sobre-nosotros' } },
      { params: { lang: 'en', about_us: 'about-us' } },
      { params: { lang: 'fr', about_us: 'a-propos' } }
    ];

    expect(path).toEqual(expected);
  });

  test('should return an empty array if no routes are defined', () => {
    const path = getDynamicLangRoute({
      router: {},
      defaultLang: 'en',
      mappings: { about_us: 'aboutUs', contact: 'contact' }
    });

    expect(path).toEqual([]);
  });

  test('should return an empty array if mappings are empty', () => {
    const path = getDynamicLangRoute({
      router: {
        es: {
          aboutUs: '/es/sobre-nosotros'
        },
        en: {
          aboutUs: '/about-us'
        },
        fr: {
          aboutUs: '/fr/a-propos'
        }
      },
      defaultLang: 'en',
      mappings: {}
    });

    expect(path).toEqual([]);
  });

  test('should return an empty array if default language is not defined', () => {
    const path = getDynamicLangRoute({
      router: {
        es: {
          aboutUs: '/es/sobre-nosotros'
        },
        en: {
          aboutUs: '/about-us'
        },
        fr: {
          aboutUs: '/fr/a-propos'
        }
      },
      defaultLang: 'de',
      mappings: { about_us: 'aboutUs', contact: 'contact' }
    });

    expect(path).toEqual([]);
  });

  test('should exclude default language if excludeDefaultLang is true', () => {
    const path = getDynamicLangRoute({
      router: {
        es: {
          aboutUs: '/es/sobre-nosotros'
        },
        en: {
          aboutUs: '/about-us'
        },
        fr: {
          aboutUs: '/fr/a-propos'
        }
      },
      defaultLang: 'en',
      excludeDefaultLang: true,
      mappings: { about_us: 'aboutUs', contact: 'contact' }
    });

    const expected = [{ params: { lang: 'es', about_us: 'sobre-nosotros' } }, { params: { lang: 'fr', about_us: 'a-propos' } }];

    expect(path).toEqual(expected);
  });

  test('should return an empty array if default language is excluded and no other languages are defined', () => {
    const path = getDynamicLangRoute({
      router: {
        en: {
          aboutUs: '/about-us'
        }
      },
      defaultLang: 'en',
      excludeDefaultLang: true,
      mappings: { about_us: 'aboutUs', contact: 'contact' }
    });

    expect(path).toEqual([]);
  });

  test('should return an empty array if default language is excluded and no routes are defined for other languages', () => {
    const path = getDynamicLangRoute({
      router: {
        en: {
          aboutUs: '/about-us'
        },
        es: {}
      },
      defaultLang: 'en',
      excludeDefaultLang: true,
      mappings: { about_us: 'aboutUs', contact: 'contact' }
    });

    expect(path).toEqual([]);
  });

  test('should return more than one parameter if mappings have multiple entries', () => {
    const path = getDynamicLangRoute({
      router: {
        es: {
          aboutUs: '/es/sobre-nosotros/empresa'
        },
        en: {
          aboutUs: '/about-us/company'
        }
      },
      defaultLang: 'en',
      mappings: { about_us: 'aboutUs', company: 'company' }
    });

    const expected = [{ params: { lang: 'es', about_us: 'sobre-nosotros', company: 'empresa' } }, { params: { lang: 'en', about_us: 'about-us', company: 'company' } }];
    expect(path).toEqual(expected);
  });

  test('should return only the parameters that are defined in mappings', () => {
    const path = getDynamicLangRoute({
      router: {
        es: {
          aboutUs: '/es/sobre-nosotros/empresa'
        },
        en: {
          aboutUs: '/about-us/company'
        }
      },
      defaultLang: 'en',
      mappings: { about_us: 'aboutUs' }
    });

    const expected = [{ params: { lang: 'es', about_us: 'sobre-nosotros' } }, { params: { lang: 'en', about_us: 'about-us' } }];
    expect(path).toEqual(expected);
  });
});