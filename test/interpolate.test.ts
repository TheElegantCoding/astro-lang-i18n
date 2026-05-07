import { interpolate } from 'src/util/interpolate';
import { test, expect } from 'vitest';

test.describe('interpolate', () => {
  test('should replace placeholders with corresponding values', () => {
    const text = 'Hello, {{name}}! You have {{count}} new messages.';
    const parameters = { name: 'Alice', count: 5 };
    const result = interpolate(text, parameters);
    expect(result).toBe('Hello, Alice! You have 5 new messages.');
  });

  test('should leave placeholders unchanged if no corresponding value is found', () => {
    const text = 'Hello, {{name}}! You have {{count}} new messages.';
    const parameters = { name: 'Bob' };
    const result = interpolate(text, parameters);
    expect(result).toBe('Hello, Bob! You have {{count}} new messages.');
  });

  test('should handle multiple occurrences of the same placeholder', () => {
    const text = '{{greeting}}, {{name}}! {{greeting}} again!';
    const parameters = { greeting: 'Hi', name: 'Charlie' };
    const result = interpolate(text, parameters);
    expect(result).toBe('Hi, Charlie! Hi again!');
  });

  test('should handle numeric values', () => {
    const text = 'You have {{count}} new messages.';
    const parameters = { count: 10 };
    const result = interpolate(text, parameters);
    expect(result).toBe('You have 10 new messages.');
  });

  test('should return the original text if there are no placeholders', () => {
    const text = 'Hello, world!';
    const parameters = { name: 'Alice' };
    const result = interpolate(text, parameters);
    expect(result).toBe('Hello, world!');
  });
});