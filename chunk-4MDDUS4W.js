import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// node_modules/@placeos/ts-client/dist/compat/enums.js
var AuthType = { Certificate: 0, NoAuth: 1, UserPassword: 2 };
var EncryptionLevel = { None: 0, Support: 1, Admin: 2, NeverDisplay: 3 };
var PlaceDriverRole = { SSH: 0, Device: 1, Service: 2, Websocket: 3, Logic: 99 };
var PlaceRepositoryType = { Driver: "driver", Interface: "interface" };
var TriggerConditionOperator = {
  EQ: "equal",
  NEQ: "not_equal",
  GT: "greater_than",
  GTE: "greater_than_or_equal",
  LT: "less_than",
  LTE: "less_than_or_equal",
  AND: "and",
  OR: "or",
  XOR: "exclusive_or"
};
var TriggerTimeConditionType = { AT: "at", CRON: "cron" };

// node_modules/@placeos/ts-client/dist/core/assert.js
function assert(condition, message) {
  if (!condition)
    throw new Error(`Assertion failed: ${message}`);
}
function unreachable(value) {
  throw new Error(`Unreachable: ${JSON.stringify(value)}`);
}

// node_modules/@placeos/ts-client/dist/core/log.js
function scopedLog(scope, options) {
  const sink = options.sink;
  const write = (level, args) => {
    if (sink === null)
      return;
    try {
      sink({ scope, level, args });
    } catch {
    }
  };
  return {
    error: (...data) => write("error", data),
    warn: (...data) => write("warn", data),
    info: (...data) => write("info", data),
    debug: (...data) => write("debug", data),
    print: (...data) => write("print", data),
    group: (...label) => write("group", label),
    groupEnd: () => write("group_end", [])
  };
}

// node_modules/@placeos/ts-client/dist/compat/log.js
var SCOPE_NAMES = {
  http: "HTTP",
  auth: "Auth",
  realtime: "WS",
  mock: "HTTP(M)"
};
var COLORS = ["color: #0288D1", "color: #009688", "color: default"];
var METHODS = {
  error: "error",
  warn: "warn",
  info: "info",
  debug: "debug",
  print: "log",
  group: "group",
  group_end: "groupEnd"
};
function createConsoleLog(options = {}) {
  const colors = options.colors ?? true;
  return (entry) => {
    if (!Boolean(Reflect.get(globalThis, "debug")))
      return;
    const method = METHODS[entry.level];
    if (method === "groupEnd") {
      console.groupEnd();
      return;
    }
    const scope = SCOPE_NAMES[entry.scope];
    const [first, ...rest] = entry.args;
    const message = typeof first === "string" ? first : null;
    const literal2 = message !== null && !message.includes("%");
    const text = message === null ? "" : literal2 ? ` ${message}` : " %s";
    const format = colors ? `%c[PlaceOS]%c[${scope}]%c${text}` : `[PlaceOS][${scope}]${text}`;
    const substituted = message !== null && !literal2 ? [message] : [];
    const values = message === null ? entry.args : rest;
    console[method](format, ...colors ? COLORS : [], ...substituted, ...values);
  };
}
var consoleLog = createConsoleLog({ colors: true });

// node_modules/@placeos/ts-client/dist/compat/http-mock.js
var MOCK_ENDPOINTS_MAX = 1e4;
var DELAY_MS_DEFAULT = 300;
var DELAY_VARIANCE_MS_DEFAULT = 100;
var DELAY_MS_MIN = 200;
var handlers = /* @__PURE__ */ new Map();
var log = scopedLog("mock", { sink: consoleLog });
var notFound = (method, url) => {
  log.warn(`404 ${method} ${url}`);
  return Promise.reject(Object.assign(new Error(`Mock endpoint not found: ${method} ${url}`), { status: 404 }));
};
function registerMockEndpoint(options) {
  const key = handlerKey(options.method, options.path);
  assert(handlers.has(key) || handlers.size < MOCK_ENDPOINTS_MAX, "fewer mock endpoints");
  const path_parts = pathParts(options.path);
  const path_structure = path_parts.map((part) => part.startsWith(":") ? part.slice(1) : "");
  const handler = __spreadProps(__spreadValues({}, options), { path_parts, path_structure });
  handlers.set(key, handler);
  log.debug(`+ ${options.method} ${options.path}`);
}
function setMockNotFoundHandler(handler) {
  notFound = handler;
}
var mockFetch = async (url, init) => {
  const method = verb(init.method);
  const handler = findHandler(method, url);
  if (handler === null) {
    const fallback = notFound(method, url);
    if (fallback === null)
      return fetch(url, init);
    return fallback.then(() => errorResponse(404, "not found"), (error) => thrownResponse(error));
  }
  const request2 = makeRequest(url, handler, method, init.body);
  log.debug(`MATCHED ${method} ${handler.path}`, { url });
  let body;
  let headers;
  try {
    body = await (handler.callback === void 0 ? handler.metadata : handler.callback(request2));
    const raw = typeof handler.headers === "function" ? handler.headers(request2) : handler.headers;
    headers = lowerKeys(raw ?? {});
  } catch (error) {
    return thrownResponse(error);
  }
  await delay(handler, init.signal ?? null);
  if (body === void 0)
    return new Response(null, { status: 204, headers });
  const content_type = headers["content-type"] ?? "application/json";
  const text = typeof body === "string" && !content_type.includes("json") ? body : JSON.stringify(body);
  return new Response(text, {
    status: 200,
    headers: __spreadValues({ "content-type": content_type }, headers)
  });
};
function handlerKey(method, path) {
  return `${method}|${path}`;
}
function pathParts(url) {
  const path = url.replace(/^https?:\/\/[^/]*/, "").split("?")[0] ?? "";
  return path.replace(/^\//, "").split("/");
}
function verb(method) {
  const upper = (method ?? "GET").toUpperCase();
  assert(upper === "GET" || upper === "POST" || upper === "PUT" || upper === "PATCH" || upper === "DELETE", `the mock supports the method ${upper}`);
  return upper;
}
function findHandler(method, url) {
  const parts = pathParts(url);
  for (const handler of handlers.values()) {
    if (handler.method !== method || handler.path_parts.length !== parts.length)
      continue;
    const matches = handler.path_structure.every((parameter, index) => parameter !== "" || handler.path_parts[index] === parts[index]);
    if (matches)
      return handler;
  }
  return null;
}
function makeRequest(url, handler, method, body) {
  const parts = pathParts(url);
  const route_params = {};
  for (const [index, name] of handler.path_structure.entries()) {
    if (name !== "")
      route_params[name] = decodeURIComponent(parts[index] ?? "");
  }
  const query_params = {};
  const query = url.split("?")[1] ?? "";
  for (const [key, value] of new URLSearchParams(query)) {
    if (value !== "")
      query_params[key] = value;
  }
  return {
    url,
    path: handler.path,
    method,
    metadata: handler.metadata,
    route_params,
    query_params,
    body: typeof body === "string" ? parseJson(body) : void 0
  };
}
function parseJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
function lowerKeys(headers) {
  const lower = {};
  for (const [key, value] of Object.entries(headers))
    lower[key.toLowerCase()] = value;
  return lower;
}
function thrownResponse(error) {
  const status = typeof error === "object" && error !== null ? Reflect.get(error, "status") : void 0;
  if (typeof status !== "number" || status < 400 || status > 599)
    throw error;
  return errorResponse(status, error instanceof Error ? error.message : String(status));
}
function errorResponse(status, message) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "content-type": "application/json" }
  });
}
function delay(handler, signal) {
  const variance = handler.delay_variance ?? DELAY_VARIANCE_MS_DEFAULT;
  const base = handler.delay ?? DELAY_MS_DEFAULT;
  const ms = Math.max(DELAY_MS_MIN, Math.floor(Math.random() * variance - variance / 2) + base);
  return new Promise((resolve, reject) => {
    const aborted = () => {
      clearTimeout(timer);
      reject(new DOMException("The request was aborted.", "AbortError"));
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", aborted);
      resolve();
    }, ms);
    if (signal?.aborted === true)
      aborted();
    else
      signal?.addEventListener("abort", aborted, { once: true });
  });
}

// node_modules/@placeos/ts-client/dist/core/pagination.js
var LINK_HEADER_LENGTH_MAX = 8192;
function pageInfo(headers) {
  return {
    total: parseCount(headers.get("x-total-count")),
    next_offset: parseNextOffset(headers.get("link"))
  };
}
function parseCount(text) {
  if (text === null)
    return null;
  const count = Number(text);
  if (Number.isSafeInteger(count) && count >= 0)
    return count;
  return null;
}
function parseNextOffset(header) {
  if (header === null)
    return null;
  if (header.length > LINK_HEADER_LENGTH_MAX)
    return null;
  for (const match of header.matchAll(/<([^>]*)>\s*;\s*rel="?next"?\s*(?:,|$)/g)) {
    const target = match[1] ?? "";
    if (!URL.canParse(target, "http://base.invalid"))
      return null;
    const offset = new URL(target, "http://base.invalid").searchParams.get("offset");
    return parseCount(offset);
  }
  return null;
}

// node_modules/@placeos/ts-client/dist/compat/result.js
var CallFailed = class extends Error {
  error;
  status;
  constructor(error) {
    super(describe(error));
    this.name = "CallFailed";
    this.error = error;
    this.status = error.kind === "http" || error.kind === "response_invalid" ? error.status : null;
  }
};
function orThrow(result) {
  if (!result.ok)
    throw new CallFailed(result.error);
  return result.value.data;
}
function orThrowPage(result) {
  if (!result.ok)
    throw new CallFailed(result.error);
  const reply = result.value;
  const page = pageInfo(reply.headers);
  const next = reply.next === void 0 || page.next_offset === null ? null : () => reply.next?.()?.then(orThrowPage) ?? null;
  return { data: reply.data, total: page.total ?? 0, next_offset: page.next_offset, next };
}
function describe(error) {
  switch (error.kind) {
    case "http":
      return `HTTP ${error.status}${error.message === null ? "" : `: ${error.message}`}`;
    case "response_invalid":
      return `the response is not valid at ${error.path}: expected ${error.expected}`;
    case "timeout":
      return `no response in ${error.timeout_ms} ms`;
    case "network":
      return `network error: ${error.message}`;
    case "response_too_large":
      return `the response is larger than ${error.bytes_max} bytes`;
    case "auth_missing":
      return "no token or credential";
    case "aborted":
      return "aborted";
  }
}

// node_modules/@placeos/ts-client/dist/core/schema.js
var SCHEMA_DEPTH_MAX = 64;
var JSON_DEPTH_MAX = 256;
var JSON_NODES_MAX = 1e6;
var INTEGER_RANGES = {
  Int32: { min: -(2 ** 31), max: 2 ** 31 - 1 },
  UInt32: { min: 0, max: 2 ** 32 - 1 },
  Int64: { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER }
};
function string() {
  return { node: { kind: "string" } };
}
function literal(values) {
  assert(values.length > 0, "a literal schema has at least one value");
  return { node: { kind: "literal", values: new Set(values) } };
}
function integer(format = "Int64") {
  const range = INTEGER_RANGES[format];
  return { node: { kind: "integer", min: range.min, max: range.max } };
}
function number() {
  return { node: { kind: "number" } };
}
function boolean() {
  return { node: { kind: "boolean" } };
}
function json() {
  return { node: { kind: "json" } };
}
function nullable(inner) {
  return { node: { kind: "nullable", inner: inner.node } };
}
function array(items) {
  return { node: { kind: "array", items: items.node } };
}
function tuple(items) {
  assert(items.length > 0, "a tuple has at least one item");
  return { node: { kind: "tuple", items: items.map((item) => item.node) } };
}
function record(values) {
  return { node: { kind: "record", values: values.node } };
}
function object(fields, required = []) {
  return { node: objectNode(fields, new Set(required), /* @__PURE__ */ new Set()) };
}
function parameters(fields, required = []) {
  const required_keys = new Set(required);
  return { node: objectNode(fields, required_keys, required_keys) };
}
function objectNode(fields, required_in_response, required_in_request) {
  const list = [];
  for (const [key, schema] of Object.entries(fields)) {
    assert(key !== "__proto__", "a field is not named __proto__");
    list.push({
      key,
      node: schema.node,
      required_in_response: required_in_response.has(key),
      required_in_request: required_in_request.has(key)
    });
  }
  for (const key of [...required_in_response, ...required_in_request]) {
    assert(Object.hasOwn(fields, key), `the required key "${key}" is a field`);
  }
  return { kind: "object", fields: list, keys: new Set(Object.keys(fields)) };
}
function union(variants) {
  assert(variants.length > 1, "a union has two variants or more");
  return { node: { kind: "union", variants: variants.map((variant) => variant.node) } };
}
function parseResponse(schema, value, options = {}) {
  const failure2 = { expected: "", segments: [] };
  const direction = options.missing_fields === "zero" ? "response_zero" : "response";
  const parsed = walk(schema.node, value, direction, failure2, 0);
  if (parsed === FAIL)
    return { ok: false, error: describeFailure(failure2) };
  return { ok: true, value: parsed };
}
function checkRequest(schema, value) {
  const failure2 = { expected: "", segments: [] };
  const checked = walk(schema.node, value, "request", failure2, 0);
  if (checked === FAIL)
    return { ok: false, error: describeFailure(failure2) };
  return { ok: true, value: checked };
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
var FAIL = /* @__PURE__ */ Symbol("schema-fail");
function walk(node, value, direction, failure2, depth) {
  assert(depth < SCHEMA_DEPTH_MAX, "the schema depth is less than SCHEMA_DEPTH_MAX");
  switch (node.kind) {
    case "string":
      if (typeof value === "string")
        return value;
      return fail(failure2, "string");
    case "literal":
      if (typeof value === "string" || typeof value === "number") {
        if (node.values.has(value))
          return value;
      }
      return fail(failure2, `one of ${[...node.values].map(String).join(", ")}`);
    case "integer":
      if (typeof value === "number" && Number.isSafeInteger(value)) {
        if (value >= node.min && value <= node.max)
          return value;
      }
      return fail(failure2, `integer from ${node.min} to ${node.max}`);
    case "number":
      if (typeof value === "number" && Number.isFinite(value))
        return value;
      return fail(failure2, "finite number");
    case "boolean":
      if (typeof value === "boolean")
        return value;
      return fail(failure2, "boolean");
    case "json":
      if (!isJsonValue(value))
        return fail(failure2, "JSON value");
      return value;
    case "nullable":
      if (value === null)
        return null;
      return walk(node.inner, value, direction, failure2, depth + 1);
    case "array": {
      if (!Array.isArray(value))
        return fail(failure2, "array");
      const items = value;
      const output = [];
      for (let index = 0; index < items.length; index += 1) {
        const item = walk(node.items, items[index], direction, failure2, depth + 1);
        if (item === FAIL) {
          failure2.segments.push(`[${index}]`);
          return FAIL;
        }
        output.push(item);
      }
      return output;
    }
    case "tuple": {
      if (!Array.isArray(value))
        return fail(failure2, "array");
      const items = value;
      if (items.length !== node.items.length) {
        return fail(failure2, `array of length ${node.items.length}`);
      }
      const output = [];
      for (let index = 0; index < node.items.length; index += 1) {
        const item_node = node.items[index];
        assert(item_node !== void 0, "the index is in the tuple");
        const item = walk(item_node, items[index], direction, failure2, depth + 1);
        if (item === FAIL) {
          failure2.segments.push(`[${index}]`);
          return FAIL;
        }
        output.push(item);
      }
      return output;
    }
    case "record": {
      if (!isRecord(value))
        return fail(failure2, "object");
      const entries = [];
      for (const key of Object.keys(value)) {
        const entry_value = value[key];
        if (entry_value === void 0) {
          assert(direction === "request", "JSON has no undefined values");
          continue;
        }
        const entry = walk(node.values, entry_value, direction, failure2, depth + 1);
        if (entry === FAIL) {
          failure2.segments.push(`.${key}`);
          return FAIL;
        }
        entries.push([key, entry]);
      }
      return Object.fromEntries(entries);
    }
    case "object": {
      if (!isRecord(value))
        return fail(failure2, "object");
      const output = {};
      for (const field of node.fields) {
        const field_value = Object.hasOwn(value, field.key) ? value[field.key] : void 0;
        if (field_value === void 0) {
          const required = direction === "request" ? field.required_in_request : field.required_in_response;
          if (required && direction === "response_zero") {
            output[field.key] = zeroValue(field.node, depth + 1);
            continue;
          }
          if (required) {
            failure2.segments.push(`.${field.key}`);
            return fail(failure2, "a value for the required field");
          }
          if (direction !== "request")
            output[field.key] = null;
          continue;
        }
        const parsed = walk(field.node, field_value, direction, failure2, depth + 1);
        if (parsed === FAIL) {
          failure2.segments.push(`.${field.key}`);
          return FAIL;
        }
        output[field.key] = parsed;
      }
      if (direction === "request") {
        for (const key of Object.keys(value)) {
          if (node.keys.has(key))
            continue;
          if (value[key] === void 0)
            continue;
          failure2.segments.push(`.${key}`);
          return fail(failure2, "no field with this name");
        }
      }
      return output;
    }
    case "union": {
      if (direction !== "response_zero") {
        for (const variant of node.variants) {
          const parsed = walk(variant, value, direction, failure2, depth + 1);
          if (parsed !== FAIL)
            return parsed;
          failure2.segments.length = 0;
        }
        return fail(failure2, "a match for one variant of the union");
      }
      let best = FAIL;
      let best_score = -1;
      for (const variant of node.variants) {
        const parsed = walk(variant, value, direction, failure2, depth + 1);
        failure2.segments.length = 0;
        if (parsed === FAIL)
          continue;
        const strict = walk(variant, value, "response", failure2, depth + 1) !== FAIL;
        failure2.segments.length = 0;
        const score = knownKeys(variant, value) * 2 + (strict ? 1 : 0);
        if (score > best_score) {
          best = parsed;
          best_score = score;
        }
      }
      if (best !== FAIL)
        return best;
      return fail(failure2, "a match for one variant of the union");
    }
    default:
      return unreachable(node);
  }
}
function knownKeys(node, value) {
  if (node.kind !== "object" || !isRecord(value))
    return 0;
  return Object.keys(value).filter((key) => node.keys.has(key)).length;
}
function zeroValue(node, depth) {
  assert(depth < SCHEMA_DEPTH_MAX, "the schema depth is less than SCHEMA_DEPTH_MAX");
  switch (node.kind) {
    case "string":
      return "";
    case "literal":
      return [...node.values][0] ?? null;
    case "integer":
      return Math.min(Math.max(0, node.min), node.max);
    case "number":
      return 0;
    case "boolean":
      return false;
    case "json":
    case "nullable":
      return null;
    case "array":
      return [];
    case "tuple":
      return node.items.map((item) => zeroValue(item, depth + 1));
    case "record":
      return {};
    case "object": {
      const output = {};
      for (const field of node.fields) {
        output[field.key] = field.required_in_response ? zeroValue(field.node, depth + 1) : null;
      }
      return output;
    }
    case "union": {
      const [first] = node.variants;
      return first === void 0 ? null : zeroValue(first, depth + 1);
    }
  }
}
function isJsonValue(value) {
  const stack = [{ value, depth: 0 }];
  for (let visited = 0; visited < JSON_NODES_MAX; visited += 1) {
    const top = stack.pop();
    if (top === void 0)
      return true;
    const current = top.value;
    if (current === null || typeof current === "string" || typeof current === "boolean") {
      continue;
    }
    if (typeof current === "number") {
      if (Number.isFinite(current))
        continue;
      return false;
    }
    if (top.depth >= JSON_DEPTH_MAX)
      return false;
    if (Array.isArray(current)) {
      const items = current;
      if (visited + stack.length + items.length >= JSON_NODES_MAX)
        return false;
      for (const item of items)
        stack.push({ value: item, depth: top.depth + 1 });
      continue;
    }
    if (!isRecord(current))
      return false;
    const prototype = Object.getPrototypeOf(current);
    if (prototype !== Object.prototype && prototype !== null)
      return false;
    const keys = Object.keys(current);
    if (visited + stack.length + keys.length >= JSON_NODES_MAX)
      return false;
    for (const key of keys)
      stack.push({ value: current[key], depth: top.depth + 1 });
  }
  return false;
}
function fail(failure2, expected) {
  failure2.expected = expected;
  return FAIL;
}
function describeFailure(failure2) {
  return { path: `$${failure2.segments.reverse().join("")}`, expected: failure2.expected };
}

// node_modules/@placeos/ts-client/dist/core/client.js
var TIMEOUT_MS_DEFAULT = 3e4;
var RESPONSE_BYTES_MAX_DEFAULT = 64 * 1024 * 1024;
var RESPONSE_READS_MAX = 1 << 20;
var AUTH_ATTEMPTS_MAX = 2;
function createClient(config) {
  assert(!config.base_url.endsWith("/"), "the base_url has no trailing slash");
  const timeout_ms = config.timeout_ms ?? TIMEOUT_MS_DEFAULT;
  assertPositiveInteger(timeout_ms, "timeout_ms");
  const response_bytes_max = config.response_bytes_max ?? RESPONSE_BYTES_MAX_DEFAULT;
  assertPositiveInteger(response_bytes_max, "response_bytes_max");
  if (config.auth.kind === "api_key") {
    assert(config.auth.key.length > 0, "the API key is not empty");
  }
  const fetchFunction = config.fetch ?? ((url, init) => globalThis.fetch(url, init));
  return Object.freeze({
    base_url: config.base_url,
    auth: config.auth,
    headers: Object.freeze(__spreadValues({}, config.headers)),
    timeout_ms,
    response_bytes_max,
    fetch: fetchFunction,
    missing_fields: config.missing_fields ?? "error",
    mock: config.mock ?? null,
    log: config.log ?? null
  });
}
var configured_client = null;
function configure(config) {
  configured_client = createClient(config);
  return configured_client;
}
function operation(definition) {
  assert(definition.path.startsWith("/"), "the path starts with a slash");
  assert(/^(staff\.)?\w+\.\w+$/.test(definition.name), "the name is <namespace>.<function>");
  assert(definition.params.node.kind === "object", "the params schema is an object");
  const template_keys = [...definition.path.matchAll(/\{([^{}]+)\}/g)].map((match) => match[1]);
  assert(template_keys.join() === definition.path_keys.join(), `the path keys of ${definition.path} are in path_keys`);
  return definition;
}
async function call(operation2, input, options = {}) {
  const client = options.client ?? configured_client;
  assert(client !== null, "configure() ran before this call, or the options have a client");
  const result = await request(client, operation2, input, options);
  return result;
}
async function request(client, operation2, input, options) {
  const started_ms = Date.now();
  const sent = await send(client, operation2, input, options);
  logOutcome(client, operation2, sent, Date.now() - started_ms);
  if (!sent.ok || !paged(operation2))
    return sent;
  const reply = sent.value;
  const next = (next_options = {}) => nextPage(client, operation2, input, reply.headers, __spreadValues(__spreadValues({}, options), next_options));
  return { ok: true, value: __spreadProps(__spreadValues({}, reply), { next }) };
}
function logOutcome(client, operation2, result, duration_ms) {
  if (client.log === null)
    return;
  const log2 = scopedLog("http", { sink: client.log });
  const call_data = { name: operation2.name, method: operation2.method, duration_ms };
  if (result.ok) {
    const status2 = result.value.status;
    log2.debug(`${operation2.name}: ${status2} in ${duration_ms} ms`, __spreadProps(__spreadValues({}, call_data), { status: status2 }));
    return;
  }
  const error = result.error;
  const status = error.kind === "http" ? ` ${error.status}` : "";
  const message = `${operation2.name}: ${error.kind}${status} in ${duration_ms} ms`;
  if (error.kind === "aborted")
    log2.debug(message, __spreadProps(__spreadValues({}, call_data), { error }));
  else if (error.kind === "http")
    log2.warn(message, __spreadProps(__spreadValues({}, call_data), { error }));
  else
    log2.error(message, __spreadProps(__spreadValues({}, call_data), { error }));
}
function paged(operation2) {
  const node = operation2.params.node;
  return node.kind === "object" && node.keys.has("offset");
}
function nextPage(client, operation2, input, headers, options) {
  assert(isRecord(input), "the input is an object");
  const next_offset = pageInfo(headers).next_offset;
  if (next_offset === null)
    return null;
  const offset = typeof input["offset"] === "number" ? input["offset"] : 0;
  if (next_offset <= offset)
    return null;
  return request(options.client ?? client, operation2, __spreadProps(__spreadValues({}, input), { offset: next_offset }), options);
}
async function send(client, operation2, input, options) {
  assert(isRecord(input), "the input is an object");
  const _a = input, { body } = _a, params = __objRest(_a, ["body"]);
  const params_checked = checkRequest(operation2.params, params);
  assertValid(params_checked, `the parameters of ${operation2.method} ${operation2.path}`);
  assert(isRecord(params_checked.value), "the checked parameters are an object");
  const url = buildUrl(client.base_url, operation2, params_checked.value);
  let body_text = null;
  if (operation2.body === null) {
    assert(body === void 0, `${operation2.method} ${operation2.path} has no body`);
  } else {
    const body_checked = checkRequest(operation2.body, body);
    assertValid(body_checked, `the body of ${operation2.method} ${operation2.path}`);
    body_text = JSON.stringify(body_checked.value);
  }
  const timeout_ms = options.timeout_ms ?? client.timeout_ms;
  assertPositiveInteger(timeout_ms, "timeout_ms");
  const deadline_ms = Date.now() + timeout_ms;
  const signal = options.signal;
  const mock = client.mock;
  if (mock !== null) {
    const answered = await waitWithin(() => Promise.resolve(mock({ name: operation2.name, input })), deadline_ms, signal);
    if (!answered.ok)
      return limitError(answered.error, timeout_ms);
    if (answered.value !== null) {
      scopedLog("http", { sink: client.log }).debug(`${operation2.name}: answered by the mock`);
      return mockResult(operation2, answered.value, client.response_bytes_max);
    }
  }
  let response = null;
  for (let attempt = 0; attempt < AUTH_ATTEMPTS_MAX; attempt += 1) {
    const auth = client.auth;
    const credential = await waitWithin(() => resolveCredential(auth), deadline_ms, signal);
    if (!credential.ok)
      return limitError(credential.error, timeout_ms);
    if (credential.value === null)
      return { ok: false, error: { kind: "auth_missing" } };
    const headers = new Headers(client.headers);
    headers.set("Accept", "application/json");
    if (body_text !== null)
      headers.set("Content-Type", "application/json");
    setCredentialHeader(headers, credential.value);
    const redirect = headers.has("X-API-Key") ? "error" : "follow";
    const init = { method: operation2.method, headers, body: body_text, redirect };
    const remaining_ms = deadline_ms - Date.now();
    if (remaining_ms <= 0)
      return { ok: false, error: { kind: "timeout", timeout_ms } };
    const limits = __spreadValues({
      timeout_ms: remaining_ms,
      bytes_max: client.response_bytes_max
    }, signal === void 0 ? {} : { signal });
    const fetched = await fetchBody(client.fetch, url, init, limits);
    if (!fetched.ok)
      return limitError(fetched.error, timeout_ms);
    response = fetched.value;
    const status = response.status;
    if (client.auth.kind !== "credential")
      break;
    if (status !== 401 && status !== 511)
      break;
    if (attempt + 1 >= AUTH_ATTEMPTS_MAX)
      break;
    const credential_auth = client.auth;
    const used = credential.value;
    const log2 = scopedLog("http", { sink: client.log });
    log2.info(`${operation2.name}: ${status}, renewing the credential`);
    const renewed = await waitWithin(() => renewCredential(credential_auth, status, used), deadline_ms, signal);
    if (!renewed.ok)
      return limitError(renewed.error, timeout_ms);
    if (!renewed.value)
      break;
  }
  assert(response !== null, "the request was sent");
  if (!response.ok)
    return { ok: false, error: httpError(response.status, response.bytes) };
  const reply = { status: response.status, headers: response.headers };
  if (isRaw(operation2.response)) {
    return { ok: true, value: __spreadProps(__spreadValues({}, reply), { data: rawData(operation2.response, response.bytes) }) };
  }
  const parsed = successJson(reply.status, response.bytes);
  if (!parsed.ok) {
    return {
      ok: false,
      error: { kind: "response_invalid", status: reply.status, path: "$", expected: "JSON" }
    };
  }
  const data = parseResponse(operation2.response, parsed.value, {
    missing_fields: client.missing_fields
  });
  if (!data.ok) {
    return {
      ok: false,
      error: __spreadValues({ kind: "response_invalid", status: reply.status }, data.error)
    };
  }
  return { ok: true, value: __spreadProps(__spreadValues({}, reply), { data: data.value }) };
}
function httpError(status, bytes) {
  const parsed = decodeJson(bytes);
  const body = parsed.ok ? parseResponse(json(), parsed.value) : null;
  const error_body = body !== null && body.ok ? body.value : null;
  const message = isRecord(error_body) && typeof error_body["error"] === "string" ? error_body["error"] : null;
  const text = parsed.ok || bytes.length === 0 ? null : new TextDecoder().decode(bytes);
  return { kind: "http", status, message, body: error_body, text };
}
function mockResult(operation2, answer, bytes_max) {
  const reply = { status: answer.status, headers: answer.headers };
  const raw = isRaw(operation2.response);
  const bytes = answer.data instanceof Uint8Array ? answer.data : new TextEncoder().encode(
    // A mock of an operation without a schema gives the body as text, or nothing.
    raw && (typeof answer.data === "string" || answer.data === void 0) ? answer.data ?? "" : JSON.stringify(answer.data) ?? "null"
  );
  if (bytes.length > bytes_max) {
    return { ok: false, error: { kind: "response_too_large", bytes_max } };
  }
  if (answer.status < 200 || answer.status > 299) {
    return { ok: false, error: httpError(answer.status, bytes) };
  }
  if (isRaw(operation2.response)) {
    return { ok: true, value: __spreadProps(__spreadValues({}, reply), { data: rawData(operation2.response, bytes) }) };
  }
  const parsed = successJson(reply.status, bytes);
  if (!parsed.ok) {
    return {
      ok: false,
      error: { kind: "response_invalid", status: reply.status, path: "$", expected: "JSON" }
    };
  }
  const data = parseResponse(operation2.response, parsed.value, { missing_fields: "zero" });
  if (!data.ok) {
    return {
      ok: false,
      error: __spreadValues({ kind: "response_invalid", status: reply.status }, data.error)
    };
  }
  return { ok: true, value: __spreadProps(__spreadValues({}, reply), { data: data.value }) };
}
function buildUrl(base_url, operation2, params) {
  let path = operation2.path;
  for (const key of operation2.path_keys) {
    const text = queryScalar(params[key]);
    assert(text.length > 0, `the path parameter "${key}" is not empty`);
    assert(text !== "." && text !== "..", `the path parameter "${key}" is not . or ..`);
    path = path.replace(`{${key}}`, () => encodeURIComponent(text));
  }
  const node = operation2.params.node;
  assert(node.kind === "object", "the params schema is an object");
  const query = new URLSearchParams();
  for (const field of node.fields) {
    if (operation2.path_keys.includes(field.key))
      continue;
    const value = params[field.key];
    if (value === void 0 || value === null)
      continue;
    const name = operation2.wire_names?.[field.key] ?? field.key;
    if (Array.isArray(value)) {
      const items = value;
      query.append(name, items.map(queryScalar).join(","));
    } else {
      query.append(name, queryScalar(value));
    }
  }
  const query_text = query.toString();
  if (query_text.length === 0)
    return `${base_url}${path}`;
  return `${base_url}${path}?${query_text}`;
}
function queryScalar(value) {
  if (typeof value === "string")
    return value;
  assert(typeof value === "number" || typeof value === "boolean", "a parameter is a string, a number or a boolean");
  return String(value);
}
async function fetchBody(fetchFunction, url, init, limits) {
  assertPositiveInteger(limits.timeout_ms, "timeout_ms");
  assertPositiveInteger(limits.bytes_max, "bytes_max");
  if (isAborted(limits.signal))
    return { ok: false, error: { kind: "aborted" } };
  const timeout_signal = AbortSignal.timeout(limits.timeout_ms);
  const signal = limits.signal === void 0 ? timeout_signal : AbortSignal.any([limits.signal, timeout_signal]);
  let response;
  let bytes;
  try {
    response = await fetchFunction(url, __spreadProps(__spreadValues({}, init), { signal }));
    bytes = await readBody(response, limits.bytes_max);
  } catch (error) {
    if (isAborted(limits.signal))
      return { ok: false, error: { kind: "aborted" } };
    if (timeout_signal.aborted) {
      return { ok: false, error: { kind: "timeout", timeout_ms: limits.timeout_ms } };
    }
    const message = error instanceof Error ? error.message : String(error);
    return { ok: false, error: { kind: "network", message } };
  }
  if (!bytes.ok) {
    return { ok: false, error: { kind: "response_too_large", bytes_max: limits.bytes_max } };
  }
  return {
    ok: true,
    value: {
      status: response.status,
      ok: response.ok,
      headers: response.headers,
      bytes: bytes.value
    }
  };
}
async function waitWithin(work, deadline_ms, signal) {
  if (isAborted(signal))
    return { ok: false, error: "aborted" };
  const remaining_ms = deadline_ms - Date.now();
  if (remaining_ms <= 0)
    return { ok: false, error: "timeout" };
  const promise = work();
  let timer;
  let onAbort;
  const stopped = new Promise((resolve) => {
    timer = setTimeout(() => resolve({ ok: false, error: "timeout" }), remaining_ms);
    onAbort = () => resolve({ ok: false, error: "aborted" });
    signal?.addEventListener("abort", onAbort, { once: true });
    if (isAborted(signal))
      resolve({ ok: false, error: "aborted" });
  });
  const settled = promise.then((value) => ({
    ok: true,
    value
  }));
  try {
    return await Promise.race([settled, stopped]);
  } finally {
    clearTimeout(timer);
    if (onAbort !== void 0)
      signal?.removeEventListener("abort", onAbort);
  }
}
function limitError(error, timeout_ms) {
  if (error === "aborted")
    return { ok: false, error: { kind: "aborted" } };
  if (error === "timeout")
    return { ok: false, error: { kind: "timeout", timeout_ms } };
  if (error.kind === "timeout")
    return { ok: false, error: { kind: "timeout", timeout_ms } };
  return { ok: false, error };
}
function isAborted(signal) {
  return signal?.aborted === true;
}
async function resolveCredential(auth) {
  try {
    return await credentialOf(auth);
  } catch {
    return null;
  }
}
async function renewCredential(auth, status, credential) {
  try {
    return await auth.rejected(status, credential);
  } catch {
    return false;
  }
}
async function credentialOf(auth) {
  switch (auth.kind) {
    case "none":
      return { kind: "none" };
    case "bearer": {
      const token = await auth.token();
      return token === null ? null : { kind: "bearer", token };
    }
    case "api_key":
      return { kind: "api_key", key: auth.key };
    case "credential":
      return auth.credential();
    default:
      return unreachable(auth);
  }
}
function setCredentialHeader(headers, credential) {
  switch (credential.kind) {
    case "none":
      return;
    case "bearer":
      headers.set("Authorization", `Bearer ${credential.token}`);
      return;
    case "api_key":
      headers.set("X-API-Key", credential.key);
      return;
    default:
      unreachable(credential);
  }
}
async function readBody(response, bytes_max) {
  const length_text = response.headers.get("content-length");
  if (length_text !== null) {
    const length = Number(length_text);
    if (Number.isSafeInteger(length) && length > bytes_max) {
      await response.body?.cancel();
      return { ok: false, error: "too_large" };
    }
  }
  if (response.body === null)
    return { ok: true, value: new Uint8Array(0) };
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  for (let read = 0; read < RESPONSE_READS_MAX; read += 1) {
    const chunk = await reader.read();
    if (chunk.done) {
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const part of chunks) {
        bytes.set(part, offset);
        offset += part.byteLength;
      }
      assert(offset === size, "the chunks fill the body");
      return { ok: true, value: bytes };
    }
    size += chunk.value.byteLength;
    if (size > bytes_max) {
      await reader.cancel();
      return { ok: false, error: "too_large" };
    }
    chunks.push(chunk.value);
  }
  await reader.cancel();
  return { ok: false, error: "too_large" };
}
function isRaw(response) {
  return response === "text" || response === "bytes";
}
function rawData(response, bytes) {
  return response === "bytes" ? bytes : new TextDecoder().decode(bytes);
}
function successJson(status, bytes) {
  return status === 204 ? { ok: true, value: null } : decodeJson(bytes);
}
function decodeJson(bytes) {
  try {
    return { ok: true, value: JSON.parse(new TextDecoder().decode(bytes)) };
  } catch {
    return { ok: false, error: "json_invalid" };
  }
}
function assertValid(result, subject) {
  if (result.ok)
    return;
  assert(false, `${subject} match the schema. At ${result.error.path}: ${result.error.expected}`);
}
function assertPositiveInteger(value, name) {
  assert(Number.isSafeInteger(value), `${name} is an integer`);
  assert(value > 0, `${name} is more than zero`);
}

// node_modules/@placeos/ts-client/dist/realtime/environment.js
function browserRealtimeEnvironment() {
  assert(typeof window !== "undefined", "browserRealtimeEnvironment runs in a browser");
  return {
    createSocket,
    currentUrl: () => window.location.href,
    token_transport: isNestedFrame() || isMobileSafari() ? "query" : "cookie",
    setCookie: (cookie) => {
      document.cookie = cookie;
    },
    now: () => Date.now(),
    setTimer: (milliseconds, callback) => {
      const timer = setTimeout(callback, milliseconds);
      return () => clearTimeout(timer);
    }
  };
}
function createSocket(url, handlers2) {
  const socket = new WebSocket(url);
  socket.addEventListener("open", () => handlers2.open());
  socket.addEventListener("message", (event) => handlers2.message(event.data));
  socket.addEventListener("close", () => handlers2.close());
  return {
    send: (text) => socket.send(text),
    close: () => socket.close()
  };
}
function isNestedFrame() {
  return window.parent !== window;
}
function isMobileSafari() {
  if (/iPad|iPhone|iPod/.test(navigator.userAgent))
    return true;
  return navigator.userAgent.includes("Mac") && "ontouchend" in document;
}

// node_modules/@placeos/ts-client/dist/realtime/realtime.js
var CONTROL_PATH = "/api/engine/v2/systems/control";
var REQUEST_TIMEOUT_MS = 1e4;
var KEEP_ALIVE_MS = 15e3;
var STALE_MS = 4 * KEEP_ALIVE_MS;
var CONNECT_TIMEOUT_MS = 3e4;
var RECONNECT_DELAY_STEP_MS = 300;
var RECONNECT_DELAY_MAX_MS = 5e3;
var RECONNECT_ATTEMPTS_MAX = 40;
var RENEW_AFTER_FAILURES = 3;
var PENDING_MAX = 1024;
var BINDINGS_MAX = 4096;
var BINDING_REQUESTS_MAX = 4 * BINDINGS_MAX;
var BINDING_LISTENERS_MAX = 64;
var STATUS_LISTENERS_MAX = 64;
var INBOX_MAX = 4096;
var COOKIE_MAX_AGE_SECONDS = 120;
var INDEX_MAX = 2 ** 31 - 1;
var ERROR_CODE_NAMES = [
  "parse_error",
  "bad_request",
  "access_denied",
  "request_failed",
  "unknown_command",
  "system_not_found",
  "module_not_found",
  "unexpected_failure"
];
var Meta = object({ sys: string(), mod: string(), index: integer("Int32"), name: string() }, [
  "sys",
  "mod",
  "index",
  "name"
]);
var ServerMessage = object({
  id: integer(),
  type: literal(["success", "notify", "error", "debug"]),
  msg: nullable(string()),
  /** The value of a notification, or the return value of a function. */
  value: json(),
  error_code: nullable(integer("Int32")),
  meta: nullable(Meta),
  level: nullable(string()),
  /** An HTTP style status of an error, such as 404. */
  code: nullable(integer("Int32"))
}, ["id", "type"]);
function createRealtime(config) {
  assert(!config.base_url.endsWith("/"), "the base_url has no trailing slash");
  const environment = config.environment ?? browserRealtimeEnvironment();
  const log2 = scopedLog("realtime", { sink: config.log ?? null });
  let status = { kind: "idle" };
  let socket = null;
  let generation = 0;
  let connect_attempt = 0;
  let calls_pending = 0;
  let attempt = 0;
  let failures_before_open = 0;
  let renew_before_connect = false;
  let last_credential = null;
  let last_message_at_ms = 0;
  let cancelConnectTimer = null;
  let cancelKeepAlive = null;
  let cancelReconnect = null;
  let drain_scheduled = false;
  let status_notify_scheduled = false;
  let next_id = 1;
  const pending = /* @__PURE__ */ new Map();
  const queue = [];
  const bindings = /* @__PURE__ */ new Map();
  const debuggers = /* @__PURE__ */ new Map();
  const inbox = [];
  const status_listeners = /* @__PURE__ */ new Set();
  return {
    start,
    stop,
    status: () => status,
    subscribe,
    exec,
    bind,
    value,
    debug
  };
  function start() {
    const kind = status.kind;
    if (kind === "open" || kind === "connecting" || kind === "waiting")
      return;
    attempt = 0;
    failures_before_open = 0;
    void connect();
  }
  function stop() {
    log2.info("stopped");
    connect_attempt += 1;
    setStatus({ kind: "stopped" });
    cancelTimers();
    cancelReconnect?.();
    cancelReconnect = null;
    closeSocket();
    inbox.length = 0;
    for (const id of [...pending.keys()])
      settle(id, { ok: false, error: { kind: "stopped" } });
    queue.length = 0;
  }
  function exec(target, args = [], options = {}) {
    const timeout_ms = options.timeout_ms ?? REQUEST_TIMEOUT_MS;
    assert(Number.isSafeInteger(timeout_ms) && timeout_ms > 0, "timeout_ms is a positive integer");
    return request2("exec", normalize(target), args, timeout_ms);
  }
  function bind(target, listener) {
    const normalized = normalize(target);
    const key = variableKey(normalized);
    let binding = bindings.get(key);
    if (binding === void 0) {
      assert(bindings.size < BINDINGS_MAX, "the client has less than BINDINGS_MAX bindings");
      binding = { target: normalized, holders: /* @__PURE__ */ new Set(), state: { kind: "unknown" } };
      bindings.set(key, binding);
    }
    assert(binding.holders.size < BINDING_LISTENERS_MAX, "a binding has less than BINDING_LISTENERS_MAX listeners");
    const holder = { listener };
    binding.holders.add(holder);
    if (binding.holders.size === 1)
      sendBind(binding);
    const current = binding.state;
    if (current.kind !== "unknown")
      listener(current);
    let released = false;
    const owner = binding;
    return () => {
      if (released)
        return;
      released = true;
      owner.holders.delete(holder);
      if (owner.holders.size > 0)
        return;
      bindings.delete(key);
      if (isLive()) {
        void request2("unbind", owner.target, null, REQUEST_TIMEOUT_MS);
      }
    };
  }
  function value(target) {
    return bindings.get(variableKey(normalize(target)))?.state ?? { kind: "unknown" };
  }
  function debug(target, listener) {
    assert(target.sys.length > 0, "the system ID is not empty");
    assert(target.module_id.length > 0, "the module ID is not empty");
    const key = debugKey(target.sys, target.module_id);
    let entry = debuggers.get(key);
    if (entry === void 0) {
      assert(debuggers.size < BINDINGS_MAX, "the client has less than BINDINGS_MAX debuggers");
      entry = { target, holders: /* @__PURE__ */ new Set() };
      debuggers.set(key, entry);
    }
    assert(entry.holders.size < BINDING_LISTENERS_MAX, "a debugger has room for a listener");
    const holder = { listener };
    entry.holders.add(holder);
    if (entry.holders.size === 1)
      sendDebug(entry, "debug");
    let released = false;
    const owner = entry;
    return () => {
      if (released)
        return;
      released = true;
      owner.holders.delete(holder);
      if (owner.holders.size > 0)
        return;
      debuggers.delete(key);
      if (isLive())
        sendDebug(owner, "ignore");
    };
  }
  function request2(command, target, args, timeout_ms) {
    if (status.kind === "stopped")
      return Promise.resolve(failure({ kind: "stopped" }));
    if (status.kind === "failed")
      return Promise.resolve(failure({ kind: "unavailable" }));
    const call2 = command === "exec";
    const limit = call2 ? PENDING_MAX : BINDING_REQUESTS_MAX;
    const count = call2 ? calls_pending : pending.size - calls_pending;
    if (count >= limit) {
      return Promise.resolve(failure({ kind: "too_many_requests", pending_max: limit }));
    }
    const id = next_id;
    next_id += 1;
    assert(Number.isSafeInteger(id), "the request ID is a safe integer");
    const text = JSON.stringify(__spreadValues(__spreadValues({
      id,
      cmd: command,
      sys: target.sys,
      mod: target.mod,
      index: target.index,
      name: target.name
    }, args === null ? {} : { args }), target.iface ? { iface: true } : {}));
    return new Promise((resolve) => {
      const cancelTimer = environment.setTimer(timeout_ms, () => settle(id, failure({ kind: "timeout", timeout_ms })));
      const entry = { text, call: call2, sent: false, resolve, cancelTimer };
      pending.set(id, entry);
      if (call2)
        calls_pending += 1;
      if (socket !== null && status.kind === "open") {
        socket.send(text);
        entry.sent = true;
      } else {
        queue.push(id);
        if (status.kind === "idle")
          start();
      }
    });
  }
  function settle(id, result) {
    const entry = pending.get(id);
    if (entry === void 0)
      return;
    pending.delete(id);
    if (entry.call)
      calls_pending -= 1;
    assert(calls_pending >= 0, "the count of calls is not negative");
    if (!entry.sent) {
      const queued = queue.indexOf(id);
      if (queued >= 0)
        queue.splice(queued, 1);
    }
    entry.cancelTimer();
    entry.resolve(result);
  }
  function isLive() {
    return status.kind === "open" && socket !== null;
  }
  function sendBind(binding) {
    if (!isLive()) {
      if (status.kind === "idle")
        start();
      return;
    }
    const key = variableKey(binding.target);
    void request2("bind", binding.target, null, REQUEST_TIMEOUT_MS).then((result) => {
      if (result.ok)
        return;
      if (bindings.get(key) !== binding)
        return;
      setBindingState(binding, { kind: "error", error: result.error });
    });
  }
  function sendDebug(entry, command) {
    if (!isLive()) {
      if (status.kind === "idle")
        start();
      return;
    }
    const target = { sys: entry.target.sys, mod: entry.target.module_id, index: 1, name: "" };
    void request2(command, __spreadProps(__spreadValues({}, target), { iface: false }), null, REQUEST_TIMEOUT_MS);
  }
  async function connect() {
    connect_attempt += 1;
    const this_attempt = connect_attempt;
    attempt += 1;
    setStatus({ kind: "connecting", attempt });
    log2.debug("connecting", { attempt });
    if (renew_before_connect && config.auth.kind === "credential" && last_credential !== null) {
      log2.info("asking the auth for a new credential, after failures to connect");
      renew_before_connect = false;
      await renewCredential(config.auth, 401, last_credential);
      if (this_attempt !== connect_attempt)
        return;
    }
    const credential = await resolveCredential(config.auth);
    if (this_attempt !== connect_attempt)
      return;
    if (status.kind !== "connecting")
      return;
    if (credential === null) {
      log2.warn("no credential to connect with");
      scheduleReconnect();
      return;
    }
    last_credential = credential;
    const url = socketUrl(credential);
    generation += 1;
    const socket_generation = generation;
    const current = () => socket_generation === generation;
    socket = environment.createSocket(url, {
      open: () => {
        if (current())
          onOpen();
      },
      message: (data) => {
        if (current())
          onMessage(data);
      },
      close: () => {
        if (current())
          onDisconnect();
      }
    });
    cancelConnectTimer = environment.setTimer(CONNECT_TIMEOUT_MS, () => {
      cancelConnectTimer = null;
      if (!current() || status.kind !== "connecting")
        return;
      log2.warn("the socket did not open in time", { timeout_ms: CONNECT_TIMEOUT_MS });
      dropSocket();
    });
  }
  function onOpen() {
    cancelConnectTimer?.();
    cancelConnectTimer = null;
    attempt = 0;
    failures_before_open = 0;
    last_message_at_ms = environment.now();
    setStatus({ kind: "open", since_ms: last_message_at_ms });
    const opened = socket;
    assert(opened !== null, "an open socket exists");
    opened.send("ping");
    log2.info("connected", { bindings: bindings.size, debuggers: debuggers.size });
    for (const binding of bindings.values())
      sendBind(binding);
    for (const entry of debuggers.values())
      sendDebug(entry, "debug");
    for (const id of queue.splice(0, queue.length)) {
      const entry = pending.get(id);
      if (entry === void 0 || entry.sent)
        continue;
      opened.send(entry.text);
      entry.sent = true;
    }
    scheduleKeepAlive();
  }
  function onMessage(data) {
    last_message_at_ms = environment.now();
    if (inbox.length >= INBOX_MAX) {
      log2.warn("the inbox is full: connecting again", { inbox_max: INBOX_MAX });
      dropSocket();
      return;
    }
    inbox.push(data);
    if (drain_scheduled)
      return;
    drain_scheduled = true;
    environment.setTimer(0, drain);
  }
  function drain() {
    drain_scheduled = false;
    const messages = inbox.splice(0, inbox.length);
    const changed = /* @__PURE__ */ new Map();
    const logs = [];
    const received_at_ms = environment.now();
    for (const data of messages) {
      if (typeof data !== "string")
        continue;
      if (data === "pong")
        continue;
      const message = parseServerMessage(data);
      if (message === null)
        continue;
      switch (message.type) {
        case "success":
          settle(message.id, { ok: true, value: message.value });
          break;
        case "error": {
          const error = serverError(message);
          log2.warn("the server refused a request", { id: message.id, error });
          settle(message.id, failure(error));
          break;
        }
        case "notify":
          if (message.meta !== null) {
            const { sys, mod, index, name } = message.meta;
            log2.debug(`${sys} ${mod}_${index} ${name} changed`, {
              sys,
              mod,
              index,
              name,
              value: message.value
            });
            changed.set(variableKey(message.meta), message.value);
          }
          break;
        case "debug": {
          if (message.meta === null)
            break;
          const entry = debuggers.get(debugKey(message.meta.sys, message.meta.mod));
          if (entry === void 0)
            break;
          const text = message.msg ?? "";
          const { sys, mod } = message.meta;
          log2.debug(`log of ${mod}`, { sys, mod, level: message.level, message: text });
          logs.push([entry, { level: message.level, message: text, received_at_ms }]);
          break;
        }
        default:
          unreachable(message.type);
      }
    }
    for (const [key, changed_value] of changed) {
      const binding = bindings.get(key);
      if (binding !== void 0) {
        setBindingState(binding, { kind: "value", value: changed_value });
      }
    }
    for (const [entry, log3] of logs) {
      for (const holder of [...entry.holders])
        holder.listener(log3);
    }
  }
  function onDisconnect() {
    socket = null;
    if (inbox.length > 0)
      drain();
    log2.warn("the socket closed", { was_open: status.kind === "open" });
    cancelTimers();
    if (status.kind !== "open")
      failures_before_open += 1;
    for (const [id, entry] of [...pending]) {
      if (entry.sent)
        settle(id, failure({ kind: "disconnected" }));
    }
    if (status.kind === "stopped")
      return;
    scheduleReconnect();
  }
  function scheduleReconnect() {
    if (attempt >= RECONNECT_ATTEMPTS_MAX) {
      log2.error("stopped after the maximum number of attempts", { attempts: attempt });
      setStatus({ kind: "failed" });
      for (const id of [...pending.keys()])
        settle(id, failure({ kind: "unavailable" }));
      queue.length = 0;
      return;
    }
    if (failures_before_open >= RENEW_AFTER_FAILURES) {
      failures_before_open = 0;
      renew_before_connect = true;
    }
    const delay_ms = Math.min(RECONNECT_DELAY_MAX_MS, Math.max(1, attempt) * RECONNECT_DELAY_STEP_MS);
    setStatus({ kind: "waiting", attempt, delay_ms });
    log2.info("connecting again after a wait", { attempt, delay_ms });
    cancelReconnect = environment.setTimer(delay_ms, () => {
      cancelReconnect = null;
      void connect();
    });
  }
  function scheduleKeepAlive() {
    cancelKeepAlive = environment.setTimer(KEEP_ALIVE_MS, () => {
      cancelKeepAlive = null;
      if (status.kind !== "open" || socket === null)
        return;
      if (environment.now() - last_message_at_ms > STALE_MS) {
        log2.warn("no message from the server: connecting again", { stale_ms: STALE_MS });
        dropSocket();
        return;
      }
      socket.send("ping");
      scheduleKeepAlive();
    });
  }
  function dropSocket() {
    closeSocket();
    onDisconnect();
  }
  function closeSocket() {
    generation += 1;
    socket?.close();
    socket = null;
  }
  function cancelTimers() {
    cancelConnectTimer?.();
    cancelConnectTimer = null;
    cancelKeepAlive?.();
    cancelKeepAlive = null;
  }
  function socketUrl(credential) {
    const origin = config.base_url.length > 0 ? config.base_url : new URL(environment.currentUrl()).origin;
    const url = new URL(CONTROL_PATH, origin);
    const secure = url.protocol === "https:";
    url.protocol = secure ? "wss:" : "ws:";
    if (config.fixed_device === true)
      url.searchParams.set("fixed_device", "true");
    let token = null;
    switch (credential.kind) {
      case "none":
        break;
      case "bearer":
        token = ["bearer_token", credential.token];
        break;
      case "api_key":
        token = ["api-key", credential.key];
        break;
      default:
        unreachable(credential);
    }
    if (token !== null) {
      const [name, token_value] = token;
      const page_host = new URL(environment.currentUrl()).hostname;
      if (environment.token_transport === "query" || url.hostname !== page_host) {
        log2.debug("the token goes in the query of the socket");
        url.searchParams.set(name, token_value);
      } else {
        assert(/^[^;\s]+$/.test(token_value), "the token has no semicolons or spaces");
        const secure_flag = secure ? "; secure" : "";
        log2.debug("the token goes in a cookie of the socket path");
        environment.setCookie(`${name}=${token_value}; max-age=${COOKIE_MAX_AGE_SECONDS}; path=${CONTROL_PATH}; samesite=strict${secure_flag}`);
      }
    }
    return url.toString();
  }
  function setBindingState(binding, state) {
    binding.state = state;
    for (const holder of [...binding.holders])
      holder.listener(state);
  }
  function setStatus(next) {
    status = next;
    if (status_notify_scheduled)
      return;
    status_notify_scheduled = true;
    environment.setTimer(0, () => {
      status_notify_scheduled = false;
      const current = status;
      for (const listener of [...status_listeners])
        listener(current);
    });
  }
  function subscribe(listener) {
    assert(status_listeners.size < STATUS_LISTENERS_MAX, "the client has room for a listener");
    status_listeners.add(listener);
    return () => {
      status_listeners.delete(listener);
    };
  }
}
function normalize(target) {
  const index = target.index ?? 1;
  assert(target.sys.length > 0, "the system ID is not empty");
  assert(target.mod.length > 0, "the module name is not empty");
  assert(target.name.length > 0, "the name is not empty");
  assert(Number.isSafeInteger(index), "the module index is an integer");
  assert(index >= 1 && index <= INDEX_MAX, "the module index is from 1 to 2^31 - 1");
  return {
    sys: target.sys,
    mod: target.mod,
    index,
    name: target.name,
    iface: target.iface === true
  };
}
function variableKey(target) {
  return JSON.stringify([target.sys, target.mod, target.index, target.name]);
}
function debugKey(sys, module_id) {
  return JSON.stringify([sys, module_id]);
}
function parseServerMessage(text) {
  let decoded;
  try {
    decoded = JSON.parse(text);
  } catch {
    return null;
  }
  const parsed = parseResponse(ServerMessage, decoded);
  return parsed.ok ? parsed.value : null;
}
function serverError(message) {
  const name = message.error_code === null ? void 0 : ERROR_CODE_NAMES[message.error_code];
  return { kind: "server", code: name ?? "unknown", status: message.code, message: message.msg };
}
function failure(error) {
  return { ok: false, error };
}

// node_modules/@placeos/ts-client/dist/compat/realtime-mock.js
var MOCK_SYSTEMS_MAX = 1e4;
var MOCK_VARIABLES_MAX = 1e3;
var MOCK_MESSAGES_MAX = 1e4;
var systems = /* @__PURE__ */ new Map();
function registerSystem(id, details) {
  assert(systems.has(id) || systems.size < MOCK_SYSTEMS_MAX, "fewer mock systems");
  const system = {};
  const modules = /* @__PURE__ */ new Map();
  for (const [name, list] of Object.entries(details)) {
    const states = list.map(mockModule);
    modules.set(name, states);
    system[name] = states.map((state) => state.module);
  }
  systems.set(id, { system, modules });
  return system;
}
function mockSystem(id) {
  return systems.get(id)?.system;
}
function mockModule(properties) {
  const module = {};
  const values = /* @__PURE__ */ new Map();
  const listeners = /* @__PURE__ */ new Map();
  const state = { module, values, listeners };
  const prototype = Object.getPrototypeOf(properties);
  const inherited = prototype === null || prototype === Object.prototype ? [] : Object.getOwnPropertyNames(prototype).filter((name) => name.startsWith("$"));
  for (const key of [...Object.keys(properties), ...inherited]) {
    const value = Reflect.get(properties, key);
    if (typeof value === "function") {
      module[key.startsWith("$") ? key : `$${key}`] = value;
      continue;
    }
    addVariable(state, key.replace(/^\$/, ""), value);
  }
  return state;
}
function addVariable(state, name, value) {
  assert(state.values.size < MOCK_VARIABLES_MAX, "fewer variables on a mock module");
  state.values.set(name, value);
  Object.defineProperty(state.module, name, {
    enumerable: true,
    get: () => state.values.get(name),
    set: (next) => {
      state.values.set(name, next);
      for (const listener of [...state.listeners.get(name) ?? []])
        listener(next);
    }
  });
}
function mockRealtimeEnvironment() {
  return {
    createSocket: createSocket2,
    currentUrl: () => typeof location === "undefined" ? "http://localhost/" : location.href,
    token_transport: "query",
    setCookie: () => {
    },
    now: () => Date.now(),
    setTimer: (milliseconds, callback) => {
      const timer = setTimeout(callback, milliseconds);
      return () => clearTimeout(timer);
    }
  };
}
function createSocket2(_url, handlers2) {
  let open = true;
  const bound = /* @__PURE__ */ new Map();
  const outbox = [];
  let timer = null;
  const flush = () => {
    timer = null;
    for (const work of outbox.splice(0, outbox.length))
      if (open)
        work();
  };
  const later = (work) => {
    assert(outbox.length < MOCK_MESSAGES_MAX, "fewer messages wait in the mock socket");
    outbox.push(work);
    timer ??= setTimeout(flush, 0);
  };
  const reply = (message) => later(() => handlers2.message(JSON.stringify(message)));
  later(() => handlers2.open());
  function handle(request2) {
    const meta = {
      sys: request2.sys,
      mod: request2.mod,
      index: request2.index,
      name: request2.name
    };
    const key = JSON.stringify(meta);
    const found = systems.get(request2.sys);
    const state = found?.modules.get(request2.mod)?.[request2.index - 1];
    if (state === void 0) {
      const code = found === void 0 ? "system_not_found" : "module_not_found";
      reply({
        id: request2.id,
        type: "error",
        error_code: ERROR_CODE_NAMES.indexOf(code),
        msg: `mock ${code.replace("_", " ")}: ${request2.sys} ${request2.mod}_${request2.index}`
      });
      return;
    }
    switch (request2.cmd) {
      case "bind": {
        if (!state.values.has(request2.name))
          addVariable(state, request2.name, null);
        const notify = (value) => reply({ id: request2.id, type: "notify", value: value ?? null, meta });
        bound.get(key)?.();
        const listeners = state.listeners.get(request2.name) ?? /* @__PURE__ */ new Set();
        listeners.add(notify);
        state.listeners.set(request2.name, listeners);
        bound.set(key, () => {
          listeners.delete(notify);
          if (listeners.size === 0)
            state.listeners.delete(request2.name);
        });
        reply({ id: request2.id, type: "success" });
        notify(state.values.get(request2.name));
        return;
      }
      case "unbind":
        bound.get(key)?.();
        bound.delete(key);
        reply({ id: request2.id, type: "success" });
        return;
      case "exec":
        void execute(state, request2).then((value) => reply({ id: request2.id, type: "success", value: value ?? null }), (error) => reply({
          id: request2.id,
          type: "error",
          error_code: ERROR_CODE_NAMES.indexOf("request_failed"),
          msg: error instanceof Error ? error.message : String(error)
        }));
        return;
      default:
        reply({ id: request2.id, type: "success" });
    }
  }
  return {
    send: (text) => {
      assert(open, "the mock socket is open");
      if (text === "ping") {
        later(() => handlers2.message("pong"));
        return;
      }
      const request2 = parseRequest(text);
      if (request2 !== null)
        handle(request2);
    },
    close: () => {
      if (!open)
        return;
      for (const release of bound.values())
        release();
      bound.clear();
      open = false;
      outbox.length = 0;
      if (timer !== null)
        clearTimeout(timer);
      timer = null;
      setTimeout(() => handlers2.close(), 0);
    }
  };
}
async function execute(state, request2) {
  const fn = state.module[`$${request2.name}`];
  if (typeof fn !== "function")
    return null;
  return Reflect.apply(fn, state.module, [...request2.args]);
}
function parseRequest(text) {
  let value;
  try {
    value = JSON.parse(text);
  } catch {
    return null;
  }
  if (typeof value !== "object" || value === null)
    return null;
  const field = (key) => Reflect.get(value, key);
  const id = field("id");
  const cmd = field("cmd");
  const sys = field("sys");
  const mod = field("mod");
  const index = field("index");
  const name = field("name");
  const args = field("args");
  if (typeof id !== "number" || typeof cmd !== "string" || typeof sys !== "string")
    return null;
  if (typeof mod !== "string" || typeof index !== "number" || typeof name !== "string")
    return null;
  return { id, cmd, sys, mod, index, name, args: Array.isArray(args) ? args : [] };
}

export {
  AuthType,
  EncryptionLevel,
  PlaceDriverRole,
  PlaceRepositoryType,
  TriggerConditionOperator,
  TriggerTimeConditionType,
  assert,
  unreachable,
  scopedLog,
  consoleLog,
  registerMockEndpoint,
  setMockNotFoundHandler,
  mockFetch,
  string,
  literal,
  integer,
  number,
  boolean,
  json,
  nullable,
  array,
  tuple,
  record,
  object,
  parameters,
  union,
  parseResponse,
  isRecord,
  configure,
  operation,
  call,
  fetchBody,
  decodeJson,
  createRealtime,
  registerSystem,
  mockSystem,
  mockRealtimeEnvironment,
  CallFailed,
  orThrow,
  orThrowPage
};
//# debugId=a0c33d18-9b57-50f1-b8c2-637a8decc090
//# sourceMappingURL=chunk-4MDDUS4W.js.map
