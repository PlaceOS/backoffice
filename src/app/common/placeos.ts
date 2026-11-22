import { signal } from '@angular/core';
import {
    assert,
    configure,
    createAuthSession,
    createRealtime,
    parseResponse,
    Settings,
    type AuthSession,
    type Credential,
    type DomainAuthority,
    type JsonValue,
    type LogFunction,
    type Realtime,
    type Schema,
} from '@placeos/ts-client';
import {
    consoleLog,
    mockFetch,
    mockRealtimeEnvironment,
} from '@placeos/ts-client/compat';

import type { AppComponentExtensions, HashMap } from './types';

const LOADING_MESSAGE = signal('Loading...');

export function getLoadingMessage() {
    return LOADING_MESSAGE;
}

export function setLoadingMessage(message: string) {
    LOADING_MESSAGE.set(message);
}

export interface PlaceSettings {
    /** Protocol used by the application server */
    protocol: 'http:' | 'https:';
    /** Domain that the API server lies  */
    domain: string;
    /** Port number of the API server */
    port: number;
    /** Route on domain application rests */
    route: string;
    /** Whether to use the settings domain for auth */
    use_domain: boolean;
    /** Whether login is handled locally by the application */
    local_login: boolean;
    /** Whether application should mock out API requests */
    mock: boolean;
    ignore_api_key?: boolean;
}

/** Backoffice settings in the `config.backoffice` of the domain authority */
export interface BackofficeConfig {
    extend?: HashMap<AppComponentExtensions>;
    alerts_url?: string;
    metrics_url?: string;
    sentry_dsn?: string;
}

/** Authority that mock mode uses, the same as 6.x */
const MOCK_AUTHORITY: DomainAuthority = {
    id: 'mock-authority',
    name: 'localhost:4200',
    description: '',
    domain: 'localhost:4200',
    login_url: '/login?continue={{url}}',
    logout_url: '/logout',
    session: true,
    production: false,
    config: {},
    version: '2.0.0',
    metrics: null,
    sentry_dsn: null,
    email_domains: null,
};

/** Login session. `null` in mock mode and before `setupPlace` */
let _session: AuthSession | null = null;
/** Realtime client of `systems/control`. Set by `setupPlace` */
let _realtime: Realtime | null = null;
let _mock = false;
const _authority = signal<DomainAuthority | null>(null);
const _online = signal(false);

/** Whether the user has a credential and the authority is loaded */
export const online = _online.asReadonly();

/** Authority of the current domain. `null` until it loads */
export function authority(): DomainAuthority | null {
    return _authority();
}

/** The `config.backoffice` settings of the current domain */
export function backofficeConfig(): BackofficeConfig {
    const value = _authority()?.config?.['backoffice'];
    // The domain admin writes this JSON in the domain form. Its shape is not in the API schema.
    return value && typeof value === 'object' && !Array.isArray(value)
        ? (value as BackofficeConfig)
        : {};
}

/** Whether the application uses the mock endpoints */
export function isMock() {
    return _mock;
}

/**
 * The credential, renewed first if it expired. 6.x renewed the token before
 * it expired, and v7 renews it on the next request, so code that sends a
 * token without a request, such as in a cookie, must wait for it.
 */
export async function validCredential(): Promise<Credential | null> {
    if (_mock) return { kind: 'bearer', token: 'mock-token' };
    const result = await _session?.authorize();
    return result?.ok === true ? result.value : null;
}

/**
 * Set the credential in a cookie for requests on `path` that cannot send a
 * header, such as an image or a download. The cookie lasts one minute.
 * Resolves `false` when there is no valid credential, so the request must
 * not be sent.
 */
export async function setAuthCookie(path: string): Promise<boolean> {
    const credential = await validCredential();
    if (!credential || credential.kind === 'none') return false;
    const value =
        credential.kind === 'api_key'
            ? `api-key=${encodeURIComponent(credential.key)}`
            : `bearer_token=${encodeURIComponent(credential.token)}`;
    const secure = location.protocol === 'https:' ? 'secure;' : '';
    document.cookie = `${value};max-age=60;path=${path};samesite=strict;${secure}`;
    return true;
}

/** Remove the access token, so the next request gets a new one */
export function invalidateToken() {
    _session?.invalidateToken();
}

/** End the session and go to the logout page */
export function logout() {
    return _session?.logout();
}

/**
 * Realtime client for module bindings, calls and logs. A client that gave
 * up after its reconnect attempts starts again here. 6.x reloaded the page.
 */
export function realtime(): Realtime {
    assert(_realtime !== null, 'setupPlace() ran before realtime()');
    restartFailedRealtime();
    return _realtime;
}

function restartFailedRealtime() {
    if (_realtime?.status().kind === 'failed') _realtime.start();
}

// The network is back, so try again also when no binding or call asks for it
globalThis.addEventListener?.('online', restartFailedRealtime);

/**
 * The 6.x style debug log, when `window.debug` is set. It leaves out the
 * text that the server sent, such as the JSON or plain-text body of a failed
 * response or the description of a refused token, which can have personal
 * data. The kind and the status of an error stay.
 */
const debugLog: LogFunction = (entry) => {
    // `consoleLog` checks this too. Check it first, so that nothing is copied
    // for each request and binding update while debug is off
    if (!Reflect.get(globalThis, 'debug')) return;
    consoleLog({ ...entry, args: entry.args.map(withoutServerText) });
};

function withoutServerText(arg: unknown): unknown {
    if (!arg || typeof arg !== 'object' || Array.isArray(arg)) return arg;
    const {
        body: _body,
        message: _message,
        description: _description,
        text: _text,
        ...rest
    } = arg as Record<string, unknown>;
    return 'error' in rest
        ? { ...rest, error: withoutServerText(rest['error']) }
        : rest;
}

/**
 * Make a full item of `schema` from partial data, as the 6.x class
 * constructors did. A missing required field gets its empty value, such as
 * `''` or `[]`. A missing optional field is `null`, where 6.x often gave an
 * empty value. Fields that the schema does not have are removed.
 */
export function newItem<O, I>(schema: Schema<O, I>, data: unknown = {}): O {
    const result = parseResponse(schema, data, { missing_fields: 'zero' });
    // `=== false` narrows the result without `strictNullChecks`
    if (result.ok === false) {
        const { path, expected } = result.error;
        throw new Error(
            `Item data is invalid at ${path}: expected ${expected}`,
        );
    }
    return result.value;
}

/**
 * The settings of encryption levels 0 to 3 (none, support, admin and never
 * display), one for each level. A missing level gets an empty entry.
 */
export function settingsLevels(list: readonly Settings[]): Settings[] {
    return [0, 1, 2, 3].map(
        (level) =>
            list.find((_) => _.encryption_level === level) ??
            newItem(Settings, {
                encryption_level: level,
                settings_string: '',
                keys: [],
            }),
    );
}

/**
 * Keep the top-level fields of `data` that `schema` has, for a request body.
 * A 7.x request fails on a field that the body schema does not have, such
 * as the `settings` that the app adds to an item. 6.x sent them, and the
 * server ignored them. Top-level fields that are `null` or `undefined` are
 * left out, on create and on update, as the 6.x `toJSON` did, so a new item
 * does not replace the defaults of the server with `null`. Nested values
 * stay as they are.
 */
export function toBody<O, I>(schema: Schema<O, I>, data: object): I {
    const node = schema.node;
    assert(node.kind === 'object', 'the schema of a body is an object');
    const body: Record<string, unknown> = {};
    for (const key of node.keys) {
        if (Object.hasOwn(data, key) && data[key] != null) {
            body[key] = data[key];
        }
    }
    // The call checks the body against the body schema of its operation
    return body as I;
}

/**
 * A JSON copy of `data`, for an operation with a JSON body, such as
 * `users.update`. It leaves out `undefined` values, which a 7.x JSON body
 * does not accept.
 */
export function toJsonBody(data: object): JsonValue {
    return JSON.parse(JSON.stringify(data));
}

/** Make the client and realtime of mock mode, with the mock endpoints */
function setupMock() {
    configure({
        base_url: '',
        auth: { kind: 'none' },
        fetch: mockFetch,
        missing_fields: 'zero',
        log: debugLog,
    });
    _realtime = createRealtime({
        base_url: '',
        auth: { kind: 'none' },
        environment: mockRealtimeEnvironment(),
        log: debugLog,
    });
    _authority.set(MOCK_AUTHORITY);
    _online.set(true);
}

/**
 * Initialise the PlaceOS API library. Resolves when the session has a
 * credential, or when the page goes to the login page.
 */
export async function setupPlace(settings: PlaceSettings): Promise<void> {
    const protocol = settings.protocol || location.protocol;
    const host = settings.domain || location.hostname;
    const port = settings.port || location.port;
    const base_url = settings.use_domain
        ? `${protocol}//${host}${port ? ':' + port : ''}`
        : '';
    // A local dev server serves the app at the root, on any port
    const route =
        host.includes('localhost') &&
        !location.pathname.startsWith(settings.route)
            ? ''
            : settings.route || '';
    _mock =
        settings.mock ||
        location.href.includes('mock=true') ||
        localStorage.getItem('BACKOFFICE.mock') === 'true';
    localStorage.setItem(
        'BACKOFFICE.mock',
        `${_mock && !location.href.includes('mock=false')}`,
    );
    if (_mock) return setupMock();
    _session?.stop();
    const session = createAuthSession({
        base_url,
        redirect_uri: `${location.origin}${route}/oauth-resp.html`,
        scope: 'public',
        grant: { kind: 'code' },
        use_frame: true,
        handle_login: !settings.local_login,
        ignore_api_key: settings.ignore_api_key,
        log: debugLog,
    });
    _session = session;
    session.subscribe((status) => {
        _authority.set(session.authority());
        _online.set(status.kind === 'signed_in');
    });
    const auth = session.client_auth;
    configure({
        base_url,
        auth,
        headers: { 'X-App-Id': session.client_id },
        log: debugLog,
    });
    _realtime?.stop();
    _realtime = createRealtime({ base_url, auth, log: debugLog });
    const result = await session.start();
    _authority.set(session.authority());
    if (result.ok === false && result.error.kind !== 'redirecting') {
        throw new Error(`Login failed: ${result.error.kind}`);
    }
}
