import { describe, expect, it } from 'vitest';
import { TIMEZONES_IANA } from '../../app/common/timezones';

describe('TIMEZONES_IANA', () => {
    it('should list common IANA timezones', () => {
        expect(TIMEZONES_IANA).toContain('Australia/Sydney');
        expect(TIMEZONES_IANA).toContain('America/New_York');
        expect(TIMEZONES_IANA).toContain('Europe/London');
    });
});
