import {
  Settings,
  createAuthSession,
  metadata_exports
} from "./chunk-K7DUQFI6.js";
import {
  assert,
  configure,
  consoleLog,
  createRealtime,
  mockFetch,
  mockRealtimeEnvironment,
  orThrow,
  parseResponse
} from "./chunk-4MDDUS4W.js";
import {
  signal
} from "./chunk-6G3VFYSX.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/common/placeos.ts
var LOADING_MESSAGE = signal(
  "Loading...",
  ...ngDevMode ? [{ debugName: "LOADING_MESSAGE" }] : (
    /* istanbul ignore next */
    []
  )
);
function getLoadingMessage() {
  return LOADING_MESSAGE;
}
function setLoadingMessage(message) {
  LOADING_MESSAGE.set(message);
}
var MOCK_AUTHORITY = {
  id: "mock-authority",
  name: "localhost:4200",
  description: "",
  domain: "localhost:4200",
  login_url: "/login?continue={{url}}",
  logout_url: "/logout",
  session: true,
  production: false,
  config: {},
  version: "2.0.0",
  metrics: null,
  sentry_dsn: null,
  email_domains: null
};
var _session = null;
var _realtime = null;
var _mock = false;
var _authority = signal(
  null,
  ...ngDevMode ? [{ debugName: "_authority" }] : (
    /* istanbul ignore next */
    []
  )
);
var _online = signal(
  false,
  ...ngDevMode ? [{ debugName: "_online" }] : (
    /* istanbul ignore next */
    []
  )
);
var online = _online.asReadonly();
function authority() {
  return _authority();
}
function backofficeConfig() {
  const value = _authority()?.config?.["backoffice"];
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function isMock() {
  return _mock;
}
async function validCredential() {
  if (_mock)
    return { kind: "bearer", token: "mock-token" };
  const result = await _session?.authorize();
  return result?.ok === true ? result.value : null;
}
async function setAuthCookie(path) {
  const credential = await validCredential();
  if (!credential || credential.kind === "none")
    return false;
  const value = credential.kind === "api_key" ? `api-key=${encodeURIComponent(credential.key)}` : `bearer_token=${encodeURIComponent(credential.token)}`;
  const secure = location.protocol === "https:" ? "secure;" : "";
  document.cookie = `${value};max-age=60;path=${path};samesite=strict;${secure}`;
  return true;
}
function invalidateToken() {
  _session?.invalidateToken();
}
function logout() {
  return _session?.logout();
}
function realtime() {
  assert(_realtime !== null, "setupPlace() ran before realtime()");
  restartFailedRealtime();
  return _realtime;
}
function restartFailedRealtime() {
  if (_realtime?.status().kind === "failed")
    _realtime.start();
}
globalThis.addEventListener?.("online", restartFailedRealtime);
var debugLog = (entry) => {
  if (!Reflect.get(globalThis, "debug"))
    return;
  consoleLog(__spreadProps(__spreadValues({}, entry), { args: entry.args.map(withoutServerText) }));
};
function withoutServerText(arg) {
  if (!arg || typeof arg !== "object" || Array.isArray(arg))
    return arg;
  const _a = arg, { body: _body, message: _message, description: _description, text: _text } = _a, rest = __objRest(_a, ["body", "message", "description", "text"]);
  return "error" in rest ? __spreadProps(__spreadValues({}, rest), { error: withoutServerText(rest["error"]) }) : rest;
}
function newItem(schema, data = {}) {
  const result = parseResponse(schema, data, { missing_fields: "zero" });
  if (result.ok === false) {
    const { path, expected } = result.error;
    throw new Error(`Item data is invalid at ${path}: expected ${expected}`);
  }
  return result.value;
}
var VALUE_KINDS = /* @__PURE__ */ new Set([
  "string",
  "literal",
  "integer",
  "number",
  "boolean"
]);
function isValueList(node) {
  const list = node.kind === "nullable" ? node.inner : node;
  if (list.kind !== "array")
    return false;
  const items = list.items.kind === "nullable" ? list.items.inner : list.items;
  return VALUE_KINDS.has(items.kind);
}
function withEmptyLists(schema, item) {
  const node = schema.node;
  if (node.kind !== "object" || !item || typeof item !== "object") {
    return item;
  }
  const lists = {};
  for (const field of node.fields) {
    if (item[field.key] == null && isValueList(field.node)) {
      lists[field.key] = [];
    }
  }
  return Object.keys(lists).length ? __spreadValues(__spreadValues({}, item), lists) : item;
}
function settingsLevels(list) {
  return [0, 1, 2, 3].map((level) => {
    const found = list.find((_) => _.encryption_level === level);
    return found ? withEmptyLists(Settings, found) : newItem(Settings, {
      encryption_level: level,
      settings_string: "",
      keys: []
    });
  });
}
var metadata_loads = /* @__PURE__ */ new Map();
function loadMetadataBlocks(parent_id) {
  let request = metadata_loads.get(parent_id);
  if (!request) {
    request = metadata_exports.show({ id: parent_id }).then(orThrow).then((by_name) => Object.values(by_name).filter((block) => !!block).sort((a, b) => a.name.localeCompare(b.name)));
    metadata_loads.set(parent_id, request);
    const forget = () => metadata_loads.delete(parent_id);
    request.then(forget, forget);
  }
  return request.then((list) => list.map((block) => __spreadValues({}, block)));
}
function toBody(schema, data) {
  const node = schema.node;
  assert(node.kind === "object", "the schema of a body is an object");
  const body = {};
  for (const key of node.keys) {
    if (Object.hasOwn(data, key) && data[key] != null) {
      body[key] = data[key];
    }
  }
  return body;
}
function toJsonBody(data) {
  return JSON.parse(JSON.stringify(data));
}
function setupMock() {
  configure({
    base_url: "",
    auth: { kind: "none" },
    fetch: mockFetch,
    missing_fields: "zero",
    log: debugLog
  });
  _realtime = createRealtime({
    base_url: "",
    auth: { kind: "none" },
    environment: mockRealtimeEnvironment(),
    log: debugLog
  });
  _authority.set(MOCK_AUTHORITY);
  _online.set(true);
}
async function setupPlace(settings) {
  const protocol = settings.protocol || location.protocol;
  const host = settings.domain || location.hostname;
  const port = settings.port || location.port;
  const base_url = settings.use_domain ? `${protocol}//${host}${port ? ":" + port : ""}` : "";
  const route = host.includes("localhost") && !location.pathname.startsWith(settings.route) ? "" : settings.route || "";
  _mock = settings.mock || location.href.includes("mock=true") || localStorage.getItem("BACKOFFICE.mock") === "true";
  localStorage.setItem("BACKOFFICE.mock", `${_mock && !location.href.includes("mock=false")}`);
  if (_mock)
    return setupMock();
  _session?.stop();
  const session = createAuthSession({
    base_url,
    redirect_uri: `${location.origin}${route}/oauth-resp.html`,
    scope: "public",
    grant: { kind: "code" },
    use_frame: true,
    handle_login: !settings.local_login,
    ignore_api_key: settings.ignore_api_key,
    log: debugLog
  });
  _session = session;
  session.subscribe((status) => {
    _authority.set(session.authority());
    _online.set(status.kind === "signed_in");
  });
  const auth = session.client_auth;
  configure({
    base_url,
    auth,
    headers: { "X-App-Id": session.client_id },
    log: debugLog
  });
  _realtime?.stop();
  _realtime = createRealtime({ base_url, auth, log: debugLog });
  const result = await session.start();
  _authority.set(session.authority());
  if (result.ok === false && result.error.kind !== "redirecting") {
    throw new Error(`Login failed: ${result.error.kind}`);
  }
}

export {
  getLoadingMessage,
  setLoadingMessage,
  online,
  authority,
  backofficeConfig,
  isMock,
  validCredential,
  setAuthCookie,
  invalidateToken,
  logout,
  realtime,
  newItem,
  withEmptyLists,
  settingsLevels,
  loadMetadataBlocks,
  toBody,
  toJsonBody,
  setupPlace
};
//# debugId=cb819a9a-33ff-5818-ae50-92d5b60f84a3
//# sourceMappingURL=chunk-PXU3R4CZ.js.map
