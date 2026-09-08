import {
  load
} from "./chunk-LZZWTBYD.js";
import {
  isValidUrl
} from "./chunk-BZKFKJMB.js";
import {
  email,
  required,
  validate
} from "./chunk-CW7GKMUR.js";

// src/app/systems/systems.utilities.ts
function validateYAML(control) {
  const value = control.value || "";
  let message = "";
  try {
    load(value, { strict: true });
  } catch (e) {
    message = e.message;
  }
  return message ? { yaml: message } : null;
}
function hasInvalidURLArray(value) {
  if (!value || !Array.isArray(value) || !value.length) {
    return false;
  }
  return value.some((url) => !isValidUrl(url));
}
function normaliseCameraSnapshotUrls(system) {
  const snapshot_urls = Array.isArray(system?.camera_snapshot_urls) ? system.camera_snapshot_urls.filter(Boolean) : [];
  const legacy_snapshot_url = system?.camera_snapshot_url;
  if (!legacy_snapshot_url)
    return snapshot_urls;
  if (!snapshot_urls.length)
    return [legacy_snapshot_url];
  const start_of_today = Math.floor(new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)).getTime() / 1e3);
  const should_merge_legacy_url = !system?.updated_at || system.updated_at < start_of_today;
  return should_merge_legacy_url ? Array.from(/* @__PURE__ */ new Set([...snapshot_urls, legacy_snapshot_url])) : snapshot_urls;
}
function generateSystemFormModel(system) {
  system ||= {};
  return {
    name: system.name || "",
    display_name: system.display_name || "",
    email: system.email || "",
    code: system.code || "",
    support_url: system.support_url || "",
    timetable_url: system.timetable_url || "",
    camera_url: system.camera_url || "",
    camera_snapshot_url: "",
    camera_snapshot_urls: normaliseCameraSnapshotUrls(system),
    room_booking_url: system.room_booking_url || "",
    installed_ui_devices: system.installed_ui_devices || 0,
    features: (typeof system.features === "string" ? system.features.split(" ") : system.features) || [],
    security_groups: [...system.security_groups || []],
    capacity: system.capacity || 0,
    bookable: system.bookable || false,
    signage: system.signage || false,
    public: system.public || false,
    description: system.description || "",
    images: [...system.images || []],
    map_id: system.map_id || "",
    timezone: system.timezone || "",
    // `null` (not `undefined`) so signal forms materialise the field;
    // otherwise `form.zone` is undefined and its picker never renders.
    zone: null,
    zones: [...system.zones || []]
  };
}
var applySystemFormSchema = (path) => {
  required(path.name);
  email(path.email);
  required(path.zones);
  required(path.zone, {
    when({ valueOf }) {
      return !valueOf(path.zones)?.length;
    }
  });
  for (const url_path of [
    path.support_url,
    path.timetable_url,
    path.camera_url,
    path.room_booking_url
  ]) {
    validate(url_path, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url", message: "Invalid URL" });
  }
  validate(path.camera_snapshot_urls, ({ value }) => hasInvalidURLArray(value()) ? { kind: "url", message: "Invalid URL" } : void 0);
};

export {
  validateYAML,
  generateSystemFormModel,
  applySystemFormSchema
};
//# sourceMappingURL=chunk-SCQZK7JK.js.map
