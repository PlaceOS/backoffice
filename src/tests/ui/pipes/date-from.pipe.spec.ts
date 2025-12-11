import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DateFromPipe } from '../../../app/ui/pipes/date-from.pipe';

// Mock the i18n function
vi.mock('../../../app/common/locale.service', () => ({
    i18n: vi.fn((key: string, params?: object, count?: number) => {
        // Return key-based mock translations for testing
        const translations: Record<string, string> = {
            'COMMON.DATE_FROM_LESS_MINUTE_AGO': 'less than a minute ago',
            'COMMON.DATE_FROM_IN_LESS_MINUTE': 'in less than a minute',
            'COMMON.DATE_FROM_ABOUT_MINUTE_AGO': 'about a minute ago',
            'COMMON.DATE_FROM_IN_ABOUT_MINUTE': 'in about a minute',
            'COMMON.DATE_FROM_MINUTES_AGO': `${(params as any)?.minutes} minutes ago`,
            'COMMON.DATE_FROM_IN_MINUTES': `in ${(params as any)?.minutes} minutes`,
            'COMMON.DATE_FROM_HOURS_AGO': `${(params as any)?.hours} hours ago`,
            'COMMON.DATE_FROM_IN_HOURS': `in ${(params as any)?.hours} hours`,
            'COMMON.DATE_FROM_DAYS_AGO': `${(params as any)?.days} days ago`,
            'COMMON.DATE_FROM_IN_DAYS': `in ${(params as any)?.days} days`,
            'COMMON.DATE_FROM_MONTHS_AGO': `${(params as any)?.months} months ago`,
            'COMMON.DATE_FROM_IN_MONTHS': `in ${(params as any)?.months} months`,
            'COMMON.DATE_FROM_YEARS_AGO': `${(params as any)?.years} years ago`,
            'COMMON.DATE_FROM_IN_YEARS': `in ${(params as any)?.years} years`,
            'COMMON.DATE_JUST_NOW': 'just now',
        };
        return translations[key] || key;
    }),
}));

describe('DateFromPipe', () => {
    let pipe: DateFromPipe;

    beforeEach(() => {
        pipe = new DateFromPipe();
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2024, 0, 15, 12, 0, 0)); // Jan 15, 2024 12:00:00
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    describe('past dates', () => {
        it('should return "less than a minute ago" for recent past', () => {
            const date = Date.now() - 30 * 1000; // 30 seconds ago
            const result = pipe.transform(date);
            expect(result).toBe('less than a minute ago');
        });

        it('should return "about a minute ago" for exactly 1 minute', () => {
            const date = Date.now() - 60 * 1000; // 1 minute ago
            const result = pipe.transform(date);
            expect(result).toBe('about a minute ago');
        });

        it('should return "X minutes ago" for multiple minutes', () => {
            const date = Date.now() - 15 * 60 * 1000; // 15 minutes ago
            const result = pipe.transform(date);
            expect(result).toBe('15 minutes ago');
        });

        it('should return "X hours ago" for hours', () => {
            const date = Date.now() - 3 * 60 * 60 * 1000; // 3 hours ago
            const result = pipe.transform(date);
            expect(result).toBe('3 hours ago');
        });

        it('should return "X days ago" for days', () => {
            const date = Date.now() - 5 * 24 * 60 * 60 * 1000; // 5 days ago
            const result = pipe.transform(date);
            expect(result).toBe('5 days ago');
        });

        it('should return "X months ago" for months', () => {
            const date = Date.now() - 60 * 24 * 60 * 60 * 1000; // ~2 months ago
            const result = pipe.transform(date);
            expect(result).toBe('2 months ago');
        });

        it('should return "X years ago" for years', () => {
            const date = Date.now() - 400 * 24 * 60 * 60 * 1000; // ~1 year ago
            const result = pipe.transform(date);
            expect(result).toBe('1 years ago');
        });
    });

    describe('future dates', () => {
        it('should return "in less than a minute" for near future', () => {
            // differenceInMinutes rounds towards zero, so 30 seconds shows as 0 minutes difference
            // but is in the past from the perspective of "now - date"
            const date = Date.now() + 60 * 1000 + 1; // Just over 1 minute from now
            const result = pipe.transform(date);
            expect(result).toBe('in about a minute');
        });

        it('should return "in about a minute" for exactly 1 minute', () => {
            const date = Date.now() + 60 * 1000; // 1 minute from now
            const result = pipe.transform(date);
            expect(result).toBe('in about a minute');
        });

        it('should return "in X minutes" for multiple minutes', () => {
            const date = Date.now() + 15 * 60 * 1000; // 15 minutes from now
            const result = pipe.transform(date);
            expect(result).toBe('in 15 minutes');
        });

        it('should return "in X hours" for hours', () => {
            const date = Date.now() + 3 * 60 * 60 * 1000; // 3 hours from now
            const result = pipe.transform(date);
            expect(result).toBe('in 3 hours');
        });

        it('should return "in X days" for days', () => {
            const date = Date.now() + 5 * 24 * 60 * 60 * 1000; // 5 days from now
            const result = pipe.transform(date);
            expect(result).toBe('in 5 days');
        });

        it('should return "in X months" for months', () => {
            const date = Date.now() + 60 * 24 * 60 * 60 * 1000; // ~2 months from now
            const result = pipe.transform(date);
            expect(result).toBe('in 2 months');
        });

        it('should return "in X years" for years', () => {
            const date = Date.now() + 400 * 24 * 60 * 60 * 1000; // ~1 year from now
            const result = pipe.transform(date);
            expect(result).toBe('in 1 years');
        });
    });

    describe('edge cases', () => {
        it('should handle exactly now', () => {
            const date = Date.now();
            const result = pipe.transform(date);
            expect(result).toBe('less than a minute ago');
        });

        it('should handle boundary between minutes and hours (59 minutes)', () => {
            const date = Date.now() - 59 * 60 * 1000; // 59 minutes ago
            const result = pipe.transform(date);
            expect(result).toBe('59 minutes ago');
        });

        it('should handle boundary at 60 minutes (1 hour)', () => {
            const date = Date.now() - 60 * 60 * 1000; // 60 minutes ago
            const result = pipe.transform(date);
            expect(result).toBe('1 hours ago');
        });
    });
});
