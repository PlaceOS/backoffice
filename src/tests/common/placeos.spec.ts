import { Zone, type AuthStatus, type Credential } from '@placeos/ts-client';
import { mockFetch } from '@placeos/ts-client/compat';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
    configure: vi.fn(),
    createAuthSession: vi.fn(),
    createRealtime: vi.fn((): unknown => ({ stop: vi.fn() })),
}));
vi.mock('@placeos/ts-client', async (importOriginal) => ({
    ...(await importOriginal<typeof import('@placeos/ts-client')>()),
    ...mocks,
}));
const console_log = vi.hoisted(() => vi.fn());
vi.mock('@placeos/ts-client/compat', async (importOriginal) => ({
    ...(await importOriginal<typeof import('@placeos/ts-client/compat')>()),
    consoleLog: console_log,
}));

import {
    authority,
    getLoadingMessage,
    isMock,
    newItem,
    online,
    PlaceSettings,
    realtime,
    setAuthCookie,
    setLoadingMessage,
    setupPlace,
    toBody,
    validCredential,
} from '../../app/common/placeos';

const SETTINGS: PlaceSettings = {
    protocol: 'https:',
    domain: 'api.example.com',
    port: 8443,
    route: '/backoffice',
    use_domain: true,
    local_login: false,
    mock: false,
};

const AUTHORITY = { id: 'authority-1', name: 'Example' };

/** A session double. `status` calls the listeners of the session */
function fakeSession(
    result: unknown = { ok: true },
    credential: Credential | null = null,
    renewed: Credential | null = credential,
) {
    const listeners: ((status: AuthStatus) => void)[] = [];
    return {
        client_id: 'client-1',
        client_auth: { kind: 'none' as const },
        start: vi.fn(async () => result),
        stop: vi.fn(),
        subscribe: (listener: (status: AuthStatus) => void) => {
            listeners.push(listener);
            return () => undefined;
        },
        authority: () => AUTHORITY,
        credential: () => credential,
        authorize: vi.fn(async () => ({ ok: true, value: renewed })),
        status: (status: AuthStatus) => listeners.forEach((_) => _(status)),
    };
}

beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
});

describe('loading message', () => {
    it('starts as Loading... and changes with setLoadingMessage', () => {
        expect(getLoadingMessage()()).toBe('Loading...');
        setLoadingMessage('Connecting...');
        expect(getLoadingMessage()()).toBe('Connecting...');
    });
});

describe('setupPlace', () => {
    it('logs in on the domain of the settings and configures the client with the session', async () => {
        const session = fakeSession();
        mocks.createAuthSession.mockReturnValue(session);
        await setupPlace(SETTINGS);
        expect(mocks.createAuthSession).toHaveBeenCalledWith(
            expect.objectContaining({
                base_url: 'https://api.example.com:8443',
                redirect_uri: `${location.origin}/backoffice/oauth-resp.html`,
                grant: { kind: 'code' },
                use_frame: true,
                handle_login: true,
            }),
        );
        expect(mocks.configure).toHaveBeenCalledWith(
            expect.objectContaining({
                base_url: 'https://api.example.com:8443',
                auth: session.client_auth,
                headers: { 'X-App-Id': 'client-1' },
            }),
        );
        expect(mocks.createRealtime).toHaveBeenCalledWith(
            expect.objectContaining({ auth: session.client_auth }),
        );
        expect(authority()).toBe(AUTHORITY);
        expect(isMock()).toBe(false);
    });

    it('uses the page origin, and drops the route on a local dev server', async () => {
        mocks.createAuthSession.mockReturnValue(fakeSession());
        await setupPlace({
            ...SETTINGS,
            domain: '',
            use_domain: false,
            local_login: true,
        });
        expect(mocks.createAuthSession).toHaveBeenCalledWith(
            expect.objectContaining({
                base_url: '',
                redirect_uri: `${location.origin}/oauth-resp.html`,
                handle_login: false,
            }),
        );
    });

    it('is online only while the session is signed in', async () => {
        const session = fakeSession();
        mocks.createAuthSession.mockReturnValue(session);
        await setupPlace(SETTINGS);
        session.status({ kind: 'signed_in', credential: 'bearer' });
        expect(online()).toBe(true);
        session.status({ kind: 'signed_out', error: null });
        expect(online()).toBe(false);
    });

    it('fails when the login fails, but not when the page goes to the login page', async () => {
        mocks.createAuthSession.mockReturnValue(
            fakeSession({ ok: false, error: { kind: 'redirecting' } }),
        );
        await expect(setupPlace(SETTINGS)).resolves.toBeUndefined();
        mocks.createAuthSession.mockReturnValue(
            fakeSession({ ok: false, error: { kind: 'login_required' } }),
        );
        await expect(setupPlace(SETTINGS)).rejects.toThrow('login_required');
    });

    it('sets the auth cookie from the credential that authorize() gives', async () => {
        mocks.createAuthSession.mockReturnValue(
            fakeSession(
                undefined,
                { kind: 'bearer', token: 'stale' },
                { kind: 'bearer', token: 'renewed' },
            ),
        );
        await setupPlace(SETTINGS);
        expect(await setAuthCookie('/')).toBe(true);
        expect(document.cookie).toContain('bearer_token=renewed');
        mocks.createAuthSession.mockReturnValue(
            fakeSession(undefined, { kind: 'api_key', key: 'key-1' }),
        );
        await setupPlace(SETTINGS);
        await setAuthCookie('/');
        expect(document.cookie).toContain('api-key=key-1');
    });

    it('logs a failed call with its status, without the text of the server', async () => {
        mocks.createAuthSession.mockReturnValue(fakeSession());
        await setupPlace(SETTINGS);
        const { log } = mocks.configure.mock.calls[0][0];
        log({
            scope: 'http',
            level: 'warn',
            args: [
                'users.show: http 422',
                {
                    name: 'users.show',
                    message: 'refused for person@example.com',
                    error: {
                        kind: 'http',
                        status: 422,
                        message: 'person@example.com taken',
                        body: { email: 'person@example.com' },
                    },
                },
            ],
        });
        const [entry] = console_log.mock.calls[0];
        expect(entry.args[1]).toEqual({
            name: 'users.show',
            error: { kind: 'http', status: 422 },
        });
        expect(JSON.stringify(entry)).not.toContain('person@example.com');
    });

    it('starts a failed realtime client again on use and when the browser is online', async () => {
        const client = {
            stop: vi.fn(),
            start: vi.fn(),
            status: vi.fn(() => ({ kind: 'failed' })),
        };
        mocks.createRealtime.mockReturnValue(client);
        mocks.createAuthSession.mockReturnValue(fakeSession());
        await setupPlace(SETTINGS);
        realtime();
        expect(client.start).toHaveBeenCalledOnce();
        window.dispatchEvent(new Event('online'));
        expect(client.start).toHaveBeenCalledTimes(2);
        client.status.mockReturnValue({ kind: 'open' });
        realtime();
        expect(client.start).toHaveBeenCalledTimes(2);
    });

    it('uses the mock endpoints in mock mode, without a login', async () => {
        await setupPlace({ ...SETTINGS, mock: true });
        expect(mocks.createAuthSession).not.toHaveBeenCalled();
        expect(mocks.configure).toHaveBeenCalledWith(
            expect.objectContaining({
                auth: { kind: 'none' },
                fetch: mockFetch,
                missing_fields: 'zero',
            }),
        );
        expect(isMock()).toBe(true);
        expect(online()).toBe(true);
        expect(authority()?.id).toBe('mock-authority');
        expect(await validCredential()).toEqual({
            kind: 'bearer',
            token: 'mock-token',
        });
        expect(localStorage.getItem('BACKOFFICE.mock')).toBe('true');
    });
});

describe('newItem', () => {
    it('gives missing required fields their empty value, and other fields null', () => {
        const zone = newItem(Zone, { id: 'zone-1', name: 'Level 1' });
        expect(zone).toMatchObject({ id: 'zone-1', name: 'Level 1' });
        expect(zone.update_systems).toBe(false);
        expect(zone.tags).toBeNull();
    });

    it('throws for data of the wrong type', () => {
        expect(() => newItem(Zone, { name: 1 })).toThrow('$.name');
    });
});

describe('toBody', () => {
    it('keeps only the fields of the schema', () => {
        const zone = { id: 'zone-1', name: 'Level 1', settings: [] };
        expect(toBody(Zone, zone)).toEqual({ id: 'zone-1', name: 'Level 1' });
    });
});
