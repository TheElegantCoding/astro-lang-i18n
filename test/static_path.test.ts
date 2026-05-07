import { getStaticLanguage } from 'src/util/static_path';
import { test, expect, describe } from 'vitest';

describe('Static Path', () => {
  test('should return the correct static language paths', () => {
    const paths = getStaticLanguage([
      'en',
      'es',
      'fr'
    ]);

    const expected = [
      { params: { lang: 'en' } },
      { params: { lang: 'es' } },
      { params: { lang: 'fr' } }
    ];

    expect(paths).toEqual(expected);
  });

  test('should return an empty array if no supported languages are defined', () => {
    const paths = getStaticLanguage([]);

    expect(paths).toEqual([]);
  });

  test('should use a custom parameter name if provided', () => {
    const paths = getStaticLanguage(['en', 'es'], 'language');

    const expected = [{ params: { language: 'en' } }, { params: { language: 'es' } }];

    expect(paths).toEqual(expected);
  });
});