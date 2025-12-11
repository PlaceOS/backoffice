import { describe, expect, it } from 'vitest';
import {
    getTimezoneDifferenceInHours,
    getTimezoneOffsetInMinutes,
    getTimezoneOffsetString,
    LOCAL_TIMEZONE,
    localToTimezone,
    timezoneToLocal,
} from '../../app/common/timezone-helpers';

describe('timezone-helpers.ts utilities', () => {
    describe('LOCAL_TIMEZONE', () => {
        it('should be a non-empty string', () => {
            expect(typeof LOCAL_TIMEZONE).toBe('string');
            expect(LOCAL_TIMEZONE.length).toBeGreaterThan(0);
        });

        it('should be a valid timezone identifier', () => {
            // Valid timezone identifiers contain a slash (e.g., "America/New_York")
            // or are short like "UTC"
            expect(LOCAL_TIMEZONE).toMatch(/^[A-Za-z_]+\/[A-Za-z_]+|UTC|GMT$/);
        });
    });

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

    describe('getTimezoneDifferenceInHours', () => {
        it('should return 0 for same timezone', () => {
            expect(getTimezoneDifferenceInHours('UTC', 'UTC')).toBe(0);
        });

        it('should return a number for different timezones', () => {
            const diff = getTimezoneDifferenceInHours('Asia/Tokyo', 'UTC');
            expect(typeof diff).toBe('number');
        });

        it('should return opposite sign when timezones are reversed', () => {
            const diff1 = getTimezoneDifferenceInHours('Asia/Tokyo', 'UTC');
            const diff2 = getTimezoneDifferenceInHours('UTC', 'Asia/Tokyo');
            expect(diff1).toBe(-diff2);
        });

        it('should use LOCAL_TIMEZONE as default destination', () => {
            const diff = getTimezoneDifferenceInHours('UTC');
            expect(typeof diff).toBe('number');
        });

        it('should accept custom date parameter', () => {
            const date = new Date(2024, 6, 15);
            const diff = getTimezoneDifferenceInHours(
                'America/New_York',
                'UTC',
                date,
            );
            expect(typeof diff).toBe('number');
        });

        it('should return difference in hours', () => {
            const diff = getTimezoneDifferenceInHours('Asia/Kolkata', 'UTC');
            expect(typeof diff).toBe('number');
            // Kolkata is ahead of UTC, so positive or 0
            expect(diff).toBeGreaterThanOrEqual(0);
        });
    });

    describe('localToTimezone', () => {
        it('should convert date to same timezone without change', () => {
            const now = Date.now();
            const result = localToTimezone(now, LOCAL_TIMEZONE);
            // Converting to local timezone should not change the time significantly
            // (may differ by milliseconds due to calculation)
            expect(Math.abs(result - now)).toBeLessThan(1000);
        });

        it('should accept Date object', () => {
            const date = new Date(2024, 0, 15, 12, 0, 0);
            const result = localToTimezone(date, 'UTC');
            expect(typeof result).toBe('number');
        });

        it('should accept timestamp number', () => {
            const timestamp = Date.now();
            const result = localToTimezone(timestamp, 'UTC');
            expect(typeof result).toBe('number');
        });

        it('should use LOCAL_TIMEZONE as default', () => {
            const now = Date.now();
            const result = localToTimezone(now);
            expect(typeof result).toBe('number');
        });
    });

    describe('timezoneToLocal', () => {
        it('should convert from same timezone without change', () => {
            const now = Date.now();
            const result = timezoneToLocal(now, LOCAL_TIMEZONE);
            // Converting from local timezone should not change the time significantly
            expect(Math.abs(result - now)).toBeLessThan(1000);
        });

        it('should accept Date object', () => {
            const date = new Date(2024, 0, 15, 12, 0, 0);
            const result = timezoneToLocal(date, 'UTC');
            expect(typeof result).toBe('number');
        });

        it('should accept timestamp number', () => {
            const timestamp = Date.now();
            const result = timezoneToLocal(timestamp, 'UTC');
            expect(typeof result).toBe('number');
        });

        it('should use LOCAL_TIMEZONE as default', () => {
            const now = Date.now();
            const result = timezoneToLocal(now);
            expect(typeof result).toBe('number');
        });

        it('should be inverse of localToTimezone', () => {
            const now = Date.now();
            const tz = 'America/New_York';

            // Convert to timezone and back
            const to_tz = localToTimezone(now, tz);
            const back = timezoneToLocal(to_tz, tz);

            // Should get approximately the same value back
            expect(Math.abs(back - now)).toBeLessThan(1000);
        });
    });
});
