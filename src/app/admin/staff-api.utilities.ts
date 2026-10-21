import { addDays, format, getUnixTime } from 'date-fns';
import { i18n } from '../common/locale.service';
import type { BannerDetails } from '../ui/global-banner.component';
import type { PlaceTenant } from './staff-api.component';

/** Largest value staff-api stores for a booking range or period (UInt32) */
export const MAX_TENANT_LIMIT = 4294967295;

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 24 * MINUTES_PER_HOUR;

export interface DurationParts {
    days: number;
    hours: number;
    minutes: number;
}

/** Split a number of minutes into days, hours and minutes */
export function splitMinutes(total: number): DurationParts {
    const value = Math.max(0, Math.floor(+total || 0));
    return {
        days: Math.floor(value / MINUTES_PER_DAY),
        hours: Math.floor((value % MINUTES_PER_DAY) / MINUTES_PER_HOUR),
        minutes: value % MINUTES_PER_HOUR,
    };
}

/** Total minutes for a duration split into days, hours and minutes */
export function joinDuration({ days, hours, minutes }: DurationParts): number {
    return (
        (+days || 0) * MINUTES_PER_DAY +
        (+hours || 0) * MINUTES_PER_HOUR +
        (+minutes || 0)
    );
}

/**
 * Display a number of minutes as days, hours and minutes, i.e. `1 day 4 hours`.
 * Units with no value are left out.
 */
export function formatMinutes(total: number): string {
    const { days, hours, minutes } = splitMinutes(total);
    const parts: [string, number][] = [
        ['ADMIN.TENANTS_DURATION_DAYS', days],
        ['ADMIN.TENANTS_DURATION_HOURS', hours],
        ['ADMIN.TENANTS_DURATION_MINUTES', minutes],
    ];
    const units = parts.filter(([, count]) => count > 0);
    return (units.length ? units : parts.slice(2))
        .map(([key, count]) => i18n(key, { count }, count))
        .join(' ');
}

/** Days before expiry that a tenant secret counts as expiring */
export const SECRET_EXPIRY_WARNING_DAYS = 30;

/** Whether the tenant's secret has passed its expiry time */
export function isSecretExpired(
    tenant: Pick<PlaceTenant, 'secret_expiry'>,
    now = Date.now(),
): boolean {
    const expiry = tenant.secret_expiry;
    return !!expiry && expiry < getUnixTime(now);
}

/** Whether the tenant's secret expires soon. Includes expired secrets. */
export function isSecretExpiring(
    tenant: Pick<PlaceTenant, 'secret_expiry'>,
    now = Date.now(),
): boolean {
    const expiry = tenant.secret_expiry;
    const warn_after = getUnixTime(addDays(now, SECRET_EXPIRY_WARNING_DAYS));
    return !!expiry && expiry < warn_after;
}

/**
 * Build one banner for all tenants with expiring secrets.
 * Returns `null` when no secrets expire soon.
 */
export function tenantExpiryBanner(
    tenants: PlaceTenant[],
    now = Date.now(),
): BannerDetails | null {
    const expiring = (tenants || []).filter((_) => isSecretExpiring(_, now));
    if (!expiring.length) return null;
    const details = expiring.map(
        (tenant) =>
            `"${tenant.name}" (${format(
                tenant.secret_expiry * 1000,
                "MMM do 'at' h:mma",
            )})`,
    );
    return {
        id: `tenant_secret_expiry-${expiring
            .map((_) => `${_.id}:${_.secret_expiry}`)
            .join(',')}`,
        type: expiring.some((_) => isSecretExpired(_, now)) ? 'error' : 'warn',
        content: `Staff API tenant secrets expire soon or have expired: ${details.join(
            ', ',
        )}.`,
    };
}
