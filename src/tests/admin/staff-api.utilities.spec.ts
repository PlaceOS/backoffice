import { describe, expect, it, vi } from 'vitest';
import type { PlaceTenant } from '../../app/admin/staff-api.component';
import {
    formatMinutes,
    isSecretExpired,
    isSecretExpiring,
    joinDuration,
    splitMinutes,
    tenantExpiryBanner,
} from '../../app/admin/staff-api.utilities';

// `ADMIN.TENANTS_DURATION_HOURS` => `2 hours`, or `1 hour` when plural is 1
vi.mock('../../app/common/locale.service', () => ({
    i18n: (key: string, args: { count: number }, plural?: number) => {
        const unit = key.split('_').pop().toLowerCase();
        return `${args.count} ${plural === 1 ? unit.slice(0, -1) : unit}`;
    },
}));

const NOW = new Date('2026-06-01T00:00:00Z').valueOf();
const DAY = 24 * 60 * 60;
const now_s = NOW / 1000;

const tenant = (id: string, secret_expiry?: number) =>
    ({ id, name: `Tenant ${id}`, secret_expiry }) as PlaceTenant;

describe('staff-api.utilities', () => {
    it.each([
        ['no expiry', undefined, false, false],
        ['expired', now_s - DAY, true, true],
        ['expires in 10 days', now_s + 10 * DAY, false, true],
        ['expires in 60 days', now_s + 60 * DAY, false, false],
    ])('classifies a secret that has %s', (_, expiry, expired, expiring) => {
        expect(isSecretExpired(tenant('1', expiry), NOW)).toBe(expired);
        expect(isSecretExpiring(tenant('1', expiry), NOW)).toBe(expiring);
    });

    it('builds one banner for every expiring tenant', () => {
        const banner = tenantExpiryBanner(
            [
                tenant('a', now_s + 5 * DAY),
                tenant('b', now_s + 90 * DAY),
                tenant('c', now_s - DAY),
            ],
            NOW,
        );
        expect(banner?.type).toBe('error');
        expect(banner?.content).toContain('Tenant a');
        expect(banner?.content).toContain('Tenant c');
        expect(banner?.content).not.toContain('Tenant b');
    });

    it('returns no banner when no secrets expire soon', () => {
        expect(
            tenantExpiryBanner([tenant('a', now_s + 90 * DAY)], NOW),
        ).toBeNull();
    });

    it.each([
        [0, { days: 0, hours: 0, minutes: 0 }],
        [45, { days: 0, hours: 0, minutes: 45 }],
        [270, { days: 0, hours: 4, minutes: 30 }],
        [1440, { days: 1, hours: 0, minutes: 0 }],
        [3061, { days: 2, hours: 3, minutes: 1 }],
    ])('splits %i minutes into days, hours and minutes', (total, parts) => {
        expect(splitMinutes(total)).toEqual(parts);
        expect(joinDuration(parts)).toBe(total);
    });

    it.each([
        [0, '0 minutes'],
        [1, '1 minute'],
        [30, '30 minutes'],
        [60, '1 hour'],
        [240, '4 hours'],
        [270, '4 hours 30 minutes'],
        [1440, '1 day'],
        [1470, '1 day 30 minutes'],
        [2 * 1440 + 60, '2 days 1 hour'],
        [1440 + 61, '1 day 1 hour 1 minute'],
    ])('formats %i minutes as "%s"', (total, label) => {
        expect(formatMinutes(total)).toBe(label);
    });
});
