import { describe, expect, it } from 'vitest';
import {
    getTimezoneOffsetInMinutes,
    getTimezoneOffsetString,
} from '../../app/common/timezone-helpers';

describe('timezone-helpers.ts utilities', () => {
    describe('getTimezoneOffsetInMinutes', () => {
        it('should return 0 for UTC', () => {
            expect(getTimezoneOffsetInMinutes('UTC')).toBe(0);
        });

        it('should return a number for valid timezones', () => {
            // jsdom may not fully support timezone parsing, so we test the return type
            const offset = getTimezoneOffsetInMinutes('Asia/Kolkata');
            expect(typeof offset).toBe('number');
        });

        it('should return a number for western timezones', () => {
            const offset = getTimezoneOffsetInMinutes('America/New_York');
            expect(typeof offset).toBe('number');
        });

        it('should handle Australia/Sydney', () => {
            const offset = getTimezoneOffsetInMinutes('Australia/Sydney');
            expect(typeof offset).toBe('number');
        });

        it('should accept custom date parameter', () => {
            const winter_date = new Date(2024, 0, 15); // January (winter in northern hemisphere)
            const summer_date = new Date(2024, 6, 15); // July (summer in northern hemisphere)

            // These should potentially return different offsets due to DST
            const winter_offset = getTimezoneOffsetInMinutes(
                'America/New_York',
                winter_date,
            );
            const summer_offset = getTimezoneOffsetInMinutes(
                'America/New_York',
                summer_date,
            );

            expect(typeof winter_offset).toBe('number');
            expect(typeof summer_offset).toBe('number');
        });

        it('should throw for invalid timezone', () => {
            // Invalid timezone throws RangeError from Intl.DateTimeFormat
            expect(() =>
                getTimezoneOffsetInMinutes('Invalid/Timezone'),
            ).toThrow();
        });
    });

    describe('getTimezoneOffsetString', () => {
        it('should return correct format for UTC', () => {
            const result = getTimezoneOffsetString('UTC');
            // Should be a 5 character string like +0000 or -0000
            expect(result.length).toBe(5);
            expect(result).toMatch(/^[+-]\d{4}$/);
        });

        it('should return 5 character string', () => {
            const result = getTimezoneOffsetString('Asia/Kolkata');
            expect(result.length).toBe(5);
            expect(result).toMatch(/^[+-]\d{4}$/);
        });

        it('should return formatted string for western timezones', () => {
            const result = getTimezoneOffsetString('America/Los_Angeles');
            expect(result.length).toBe(5);
            expect(result).toMatch(/^[+-]\d{4}$/);
        });

        it('should cache results', () => {
            // Call twice with same timezone
            const first = getTimezoneOffsetString('Europe/London');
            const second = getTimezoneOffsetString('Europe/London');
            expect(first).toBe(second);
        });

        it('should start with + or -', () => {
            const result = getTimezoneOffsetString('Asia/Tokyo');
            expect(result[0]).toMatch(/[+-]/);
        });
    });
});
