import { removeTrailingSlash } from 'src/util/url';
import { test, expect } from 'vitest';

test.describe('URL utilities', () => {
  test('removeTrailingSlash should remove trailing slash from URL', () => {
    expect(removeTrailingSlash('https://example.com/')).toBe('https://example.com');
    expect(removeTrailingSlash('https://example.com/path/')).toBe('https://example.com/path');
    expect(removeTrailingSlash('https://example.com')).toBe('https://example.com');
    expect(removeTrailingSlash('/example/')).toBe('/example');
  });
});