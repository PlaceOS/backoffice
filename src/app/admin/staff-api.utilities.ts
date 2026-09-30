import { addDays, format, getUnixTime } from 'date-fns';
import type { BannerDetails } from '../ui/global-banner.component';
import type { PlaceTenant } from './staff-api.component';

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
