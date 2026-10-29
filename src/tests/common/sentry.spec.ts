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

    it('ignores Monaco cancellation errors', async () => {
        const { initSentry, SentryReportingErrorHandler } = await loadSentry();
        setAuthorityDsn(undefined);
        await initSentry(injector, 'user-1');
        const console_error = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        const handler = new SentryReportingErrorHandler();
        const canceled = new Error('Canceled');
        canceled.name = 'Canceled';
        handler.handleError(canceled);
        expect(handle_error).not.toHaveBeenCalled();
        expect(console_error).not.toHaveBeenCalled();
        const error = new Error('Canceled');
        handler.handleError(error);
        expect(handle_error).toHaveBeenCalledWith(error);
        console_error.mockRestore();
    });

    it('ignores chunk load errors the router already handled', async () => {
        const { initSentry, SentryReportingErrorHandler } = await loadSentry();
        const { reloadApplicationOnChunkLoadError } = await import(
            '../../app/common/application'
        );
        setAuthorityDsn(undefined);
        await initSentry(injector, 'user-1');
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        const handler = new SentryReportingErrorHandler();
        const handled = new TypeError('Importing a module script failed.');
        reloadApplicationOnChunkLoadError(handled, vi.fn());
        handler.handleError(handled);
        expect(handle_error).not.toHaveBeenCalled();
        const unhandled = new TypeError('Importing a module script failed.');
        handler.handleError(unhandled);
        expect(handle_error).toHaveBeenCalledWith(unhandled);
        vi.mocked(console.error).mockRestore();
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
