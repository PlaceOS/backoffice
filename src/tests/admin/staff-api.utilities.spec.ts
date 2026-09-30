import { describe, expect, it } from 'vitest';
import type { PlaceTenant } from '../../app/admin/staff-api.component';
import {
    isSecretExpired,
    isSecretExpiring,
    tenantExpiryBanner,
} from '../../app/admin/staff-api.utilities';

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
});
