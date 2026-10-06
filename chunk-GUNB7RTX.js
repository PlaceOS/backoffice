import {
  getUnixTime
} from "./chunk-GV5KQIK5.js";
import {
  addDays
} from "./chunk-XI4ZLZAC.js";
import {
  format
} from "./chunk-NRO2XDNU.js";

// src/app/admin/staff-api.utilities.ts
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
  if (!expiring.length)
    return null;
  const details = expiring.map((tenant) => `"${tenant.name}" (${format(tenant.secret_expiry * 1e3, "MMM do 'at' h:mma")})`);
  return {
    id: `tenant_secret_expiry-${expiring.map((_) => `${_.id}:${_.secret_expiry}`).join(",")}`,
    type: expiring.some((_) => isSecretExpired(_, now)) ? "error" : "warn",
    content: `Staff API tenant secrets expire soon or have expired: ${details.join(", ")}.`
  };
}

export {
  isSecretExpired,
  isSecretExpiring,
  tenantExpiryBanner
};
//# sourceMappingURL=chunk-GUNB7RTX.js.map
