import { describe, it, expect } from 'vitest';
import { formatDate, cn, delay, safeJsonParse } from '../utils';

describe('utils', () => {
  describe('formatDate', () => {
    it('should format a date correctly', () => {
      const date = new Date('2025-01-15T00:00:00Z');
      const formatted = formatDate(date);
      expect(formatted).toMatch(/January 1[45], 2025/); // Account for timezone differences
    });
  });

  describe('cn', () => {
    it('should combine class names', () => {
      expect(cn('foo', 'bar')).toBe('foo bar');
    });

    it('should filter out falsy values', () => {
      expect(cn('foo', null, undefined, false, 'bar')).toBe('foo bar');
    });

    it('should handle empty input', () => {
      expect(cn()).toBe('');
    });
  });

  describe('delay', () => {
    it('should delay execution', async () => {
      const start = Date.now();
      await delay(100);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeGreaterThanOrEqual(90); // Allow some margin
    });
  });

  describe('safeJsonParse', () => {
    it('should parse valid JSON', () => {
      const result = safeJsonParse('{"foo":"bar"}', {});
      expect(result).toEqual({ foo: 'bar' });
    });

    it('should return fallback for invalid JSON', () => {
      const fallback = { default: true };
      const result = safeJsonParse('invalid json', fallback);
      expect(result).toBe(fallback);
    });

    it('should handle empty strings', () => {
      const fallback = { default: true };
      const result = safeJsonParse('', fallback);
      expect(result).toBe(fallback);
    });
  });
});
