/** @vitest-environment-options { "url": "https://placeos.example/backoffice/" } */
import { Injector } from '@angular/core';
import { authority } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@placeos/ts-client', () => ({
    authority: vi.fn(),
    isMock: vi.fn(() => false),
}));

const handle_error = vi.fn();
const sentry_init = vi.fn();
vi.mock('@sentry/angular', () => ({
    init: sentry_init,
    browserTracingIntegration: vi.fn(),
    replayIntegration: vi.fn(),
    TraceService: class {},
    setUser: vi.fn(),
    setTag: vi.fn(),
    createErrorHandler: () => ({ handleError: handle_error }),
}));

const injector = { get: vi.fn() } as unknown as Injector;

function setAuthorityDsn(sentry_dsn: unknown) {
    vi.mocked(authority).mockReturnValue({
        domain: 'placeos.example',
        config: { backoffice: { sentry_dsn } },
    } as unknown as ReturnType<typeof authority>);
}

/** Load a new copy of the module, so each test starts with an empty queue */
async function loadSentry() {
    vi.resetModules();
    return import('../../app/common/sentry');
}

describe('sentry', () => {
    beforeEach(() => vi.clearAllMocks());

    it('uses the default DSN when the authority does not set one', async () => {
        const { sentryDsn } = await loadSentry();
        setAuthorityDsn(undefined);
        expect(sentryDsn()).toContain('ingest.sentry.io');
        setAuthorityDsn('https://key@example.ingest.sentry.io/1');
        expect(sentryDsn()).toBe('https://key@example.ingest.sentry.io/1');
        setAuthorityDsn('');
        expect(sentryDsn()).toBe('');
        setAuthorityDsn(false);
        expect(sentryDsn()).toBe('');
    });

    it('sends errors reported before start up once Sentry starts', async () => {
        const { initSentry, reportError } = await loadSentry();
        setAuthorityDsn(undefined);
        const error = new Error('early');
        reportError(error);
        expect(handle_error).not.toHaveBeenCalled();
        await initSentry(injector, 'user-1');
        expect(sentry_init).toHaveBeenCalledOnce();
        expect(handle_error).toHaveBeenCalledWith(error);
        reportError('late');
        expect(handle_error).toHaveBeenCalledWith('late');
    });

    it('does not load Sentry when the authority turns it off', async () => {
        const { initSentry, reportError } = await loadSentry();
        setAuthorityDsn('');
        reportError(new Error('early'));
        await initSentry(injector, 'user-1');
        reportError(new Error('late'));
        expect(sentry_init).not.toHaveBeenCalled();
        expect(handle_error).not.toHaveBeenCalled();
    });
});
