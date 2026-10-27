import {
  getUnixTime
} from "./chunk-GV5KQIK5.js";
import {
  addDays
} from "./chunk-XI4ZLZAC.js";
import {
  format
} from "./chunk-NRO2XDNU.js";
import {
  i18n
} from "./chunk-V4STGI54.js";

// src/app/admin/staff-api.utilities.ts
var MAX_TENANT_LIMIT = 4294967295;
var MINUTES_PER_HOUR = 60;
var MINUTES_PER_DAY = 24 * MINUTES_PER_HOUR;
function splitMinutes(total) {
  const value = Math.max(0, Math.floor(+total || 0));
  return {
    days: Math.floor(value / MINUTES_PER_DAY),
    hours: Math.floor(value % MINUTES_PER_DAY / MINUTES_PER_HOUR),
    minutes: value % MINUTES_PER_HOUR
  };
}
function joinDuration({ days, hours, minutes }) {
  return (+days || 0) * MINUTES_PER_DAY + (+hours || 0) * MINUTES_PER_HOUR + (+minutes || 0);
}
function formatMinutes(total) {
  const { days, hours, minutes } = splitMinutes(total);
  const parts = [
    ["ADMIN.TENANTS_DURATION_DAYS", days],
    ["ADMIN.TENANTS_DURATION_HOURS", hours],
    ["ADMIN.TENANTS_DURATION_MINUTES", minutes]
  ];
  const units = parts.filter(([, count]) => count > 0);
  return (units.length ? units : parts.slice(2)).map(([key, count]) => i18n(key, { count }, count)).join(" ");
}
var SECRET_EXPIRY_WARNING_DAYS = 30;
function isSecretExpired(tenant, now = Date.now()) {
  const expiry = tenant.secret_expiry;
  return !!expiry && expiry < getUnixTime(now);
}
function isSecretExpiring(tenant, now = Date.now()) {
  const expiry = tenant.secret_expiry;
  const warn_after = getUnixTime(addDays(now, SECRET_EXPIRY_WARNING_DAYS));
  return !!expiry && expiry < warn_after;
}
function tenantExpiryBanner(tenants, now = Date.now()) {
  const expiring = (tenants || []).filter((_) => isSecretExpiring(_, now));
  if (!expiring.length) return null;
  const details = expiring.map(
    (tenant) => `"${tenant.name}" (${format(
      tenant.secret_expiry * 1e3,
      "MMM do 'at' h:mma"
    )})`
  );
  return {
    id: `tenant_secret_expiry-${expiring.map((_) => `${_.id}:${_.secret_expiry}`).join(",")}`,
    type: expiring.some((_) => isSecretExpired(_, now)) ? "error" : "warn",
    content: `Staff API tenant secrets expire soon or have expired: ${details.join(
      ", "
    )}.`
  };
}

export {
  MAX_TENANT_LIMIT,
  splitMinutes,
  joinDuration,
  formatMinutes,
  SECRET_EXPIRY_WARNING_DAYS,
  isSecretExpired,
  isSecretExpiring,
  tenantExpiryBanner
};
//# debugId=9e59a73e-5007-55a2-a368-79937cc2a77d
//# sourceMappingURL=chunk-4T5YXDIO.js.map
