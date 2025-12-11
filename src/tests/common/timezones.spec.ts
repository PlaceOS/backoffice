import { describe, it, expect } from 'vitest';
import { TIMEZONES, TIMEZONES_IANA } from '../../app/common/timezones';

describe('timezones.ts', () => {
    describe('TIMEZONES', () => {
        it('should be a non-empty array', () => {
            expect(Array.isArray(TIMEZONES)).toBe(true);
            expect(TIMEZONES.length).toBeGreaterThan(0);
        });

        it('should have over 80 timezone entries', () => {
            expect(TIMEZONES.length).toBeGreaterThan(80);
        });

        it('should have required properties on each timezone', () => {
            for (const tz of TIMEZONES) {
                expect(tz).toHaveProperty('value');
                expect(tz).toHaveProperty('abbr');
                expect(tz).toHaveProperty('offset');
                expect(tz).toHaveProperty('isdst');
                expect(tz).toHaveProperty('text');
                expect(tz).toHaveProperty('utc');
            }
        });

        it('should have string value property', () => {
            for (const tz of TIMEZONES) {
                expect(typeof tz.value).toBe('string');
                expect(tz.value.length).toBeGreaterThan(0);
            }
        });

        it('should have string abbr property', () => {
            for (const tz of TIMEZONES) {
                expect(typeof tz.abbr).toBe('string');
            }
        });

        it('should have numeric offset property', () => {
            for (const tz of TIMEZONES) {
                expect(typeof tz.offset).toBe('number');
            }
        });

        it('should have boolean isdst property', () => {
            for (const tz of TIMEZONES) {
                expect(typeof tz.isdst).toBe('boolean');
            }
        });

        it('should have string text property with UTC offset', () => {
            for (const tz of TIMEZONES) {
                expect(typeof tz.text).toBe('string');
                expect(tz.text).toContain('UTC');
            }
        });

        it('should have array utc property', () => {
            for (const tz of TIMEZONES) {
                expect(Array.isArray(tz.utc)).toBe(true);
            }
        });

        it('should have offsets in valid range (-12 to +14)', () => {
            for (const tz of TIMEZONES) {
                expect(tz.offset).toBeGreaterThanOrEqual(-12);
                expect(tz.offset).toBeLessThanOrEqual(14);
            }
        });

        it('should include common timezones', () => {
            const values = TIMEZONES.map((tz) => tz.value);
            expect(values).toContain('UTC');
            expect(values).toContain('Pacific Standard Time');
            expect(values).toContain('Eastern Standard Time');
            expect(values).toContain('GMT Standard Time');
        });

        it('should include Australia timezones', () => {
            const values = TIMEZONES.map((tz) => tz.value);
            expect(values).toContain('AUS Eastern Standard Time');
            expect(values).toContain('W. Australia Standard Time');
        });

        it('should include Asia timezones', () => {
            const values = TIMEZONES.map((tz) => tz.value);
            expect(values).toContain('China Standard Time');
            expect(values).toContain('Japan Standard Time');
            expect(values).toContain('India Standard Time');
        });

        it('should include Europe timezones', () => {
            const values = TIMEZONES.map((tz) => tz.value);
            expect(values).toContain('W. Europe Standard Time');
            expect(values).toContain('Central Europe Standard Time');
        });

        it('should have fractional offsets for special zones', () => {
            const india = TIMEZONES.find(
                (tz) => tz.value === 'India Standard Time',
            );
            expect(india?.offset).toBe(5.5);

            const nepal = TIMEZONES.find(
                (tz) => tz.value === 'Nepal Standard Time',
            );
            expect(nepal?.offset).toBe(5.75);
        });
    });

    describe('TIMEZONES_IANA', () => {
        it('should be a non-empty array', () => {
            expect(Array.isArray(TIMEZONES_IANA)).toBe(true);
            expect(TIMEZONES_IANA.length).toBeGreaterThan(0);
        });

        it('should have more than 200 IANA timezone identifiers', () => {
            expect(TIMEZONES_IANA.length).toBeGreaterThan(200);
        });

        it('should contain only strings', () => {
            for (const tz of TIMEZONES_IANA) {
                expect(typeof tz).toBe('string');
            }
        });

        it('should be sorted alphabetically', () => {
            const sorted = [...TIMEZONES_IANA].sort();
            expect(TIMEZONES_IANA).toEqual(sorted);
        });

        it('should contain unique values', () => {
            const unique_set = new Set(TIMEZONES_IANA);
            expect(unique_set.size).toBe(TIMEZONES_IANA.length);
        });

        it('should include common IANA identifiers', () => {
            expect(TIMEZONES_IANA).toContain('America/New_York');
            expect(TIMEZONES_IANA).toContain('America/Los_Angeles');
            expect(TIMEZONES_IANA).toContain('Europe/London');
            expect(TIMEZONES_IANA).toContain('Asia/Tokyo');
            expect(TIMEZONES_IANA).toContain('Australia/Sydney');
        });

        it('should include UTC/Etc identifiers', () => {
            const etc_zones = TIMEZONES_IANA.filter((tz) =>
                tz.startsWith('Etc/'),
            );
            expect(etc_zones.length).toBeGreaterThan(0);
        });

        it('should include Pacific identifiers', () => {
            const pacific_zones = TIMEZONES_IANA.filter((tz) =>
                tz.startsWith('Pacific/'),
            );
            expect(pacific_zones.length).toBeGreaterThan(0);
        });

        it('should include Indian Ocean identifiers', () => {
            const indian_zones = TIMEZONES_IANA.filter((tz) =>
                tz.startsWith('Indian/'),
            );
            expect(indian_zones.length).toBeGreaterThan(0);
        });

        it('should include Antarctica identifiers', () => {
            const antarctica_zones = TIMEZONES_IANA.filter((tz) =>
                tz.startsWith('Antarctica/'),
            );
            expect(antarctica_zones.length).toBeGreaterThan(0);
        });

        it('should not contain empty strings', () => {
            for (const tz of TIMEZONES_IANA) {
                expect(tz.length).toBeGreaterThan(0);
            }
        });

        it('should have valid IANA format (region/city or Etc/...)', () => {
            for (const tz of TIMEZONES_IANA) {
                // Most should contain / (region/city format)
                // Some like PST8PDT, EST5EDT are exceptions
                const is_standard_format =
                    tz.includes('/') || /^[A-Z]{3,4}\d?[A-Z]{0,3}$/.test(tz);
                expect(is_standard_format).toBe(true);
            }
        });
    });

    describe('data consistency', () => {
        it('should have TIMEZONES_IANA derived from TIMEZONES utc arrays', () => {
            // Count all utc entries in TIMEZONES
            let total_utc = 0;
            for (const tz of TIMEZONES) {
                total_utc += tz.utc.length;
            }

            // TIMEZONES_IANA should have unique values, so could be less
            expect(TIMEZONES_IANA.length).toBeLessThanOrEqual(total_utc);
        });

        it('should have all IANA identifiers in source TIMEZONES', () => {
            const all_utc = new Set<string>();
            for (const tz of TIMEZONES) {
                for (const utc of tz.utc) {
                    all_utc.add(utc);
                }
            }

            for (const iana of TIMEZONES_IANA) {
                expect(all_utc.has(iana)).toBe(true);
            }
        });
    });
});
