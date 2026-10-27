import { ErrorHandler, Injectable, Injector, isDevMode } from '@angular/core';
import { authority, isMock } from '@placeos/ts-client';

import { VERSION } from '../../env/version';
import { log } from './general';

/** DSN for deployments that do not set `config.backoffice.sentry_dsn` */
const DEFAULT_SENTRY_DSN =
    'https://7941b5b93d7c4712803604891cdfec23@o437082.ingest.sentry.io/5399124';
/** Most errors kept while Sentry loads */
const MAX_QUEUED_ERRORS = 20;

/** Release name. CI uploads source maps with this name. */
export const SENTRY_RELEASE = `backoffice@${VERSION.hash}`;

type ErrorReporter = (error: unknown) => void;

let _reporter: ErrorReporter | null = null;
let _queue: unknown[] | null = [];

/**
 * Send an error to Sentry. Before Sentry loads, keep the error in a queue.
 * After Sentry is turned off, drop it.
 */
export function reportError(error: unknown) {
    if (_reporter) return _reporter(error);
    if (_queue && _queue.length < MAX_QUEUED_ERRORS) _queue.push(error);
}

/**
 * Angular error handler. Logs errors to the console as the default handler
 * does, and sends them to Sentry.
 */
@Injectable()
export class SentryReportingErrorHandler implements ErrorHandler {
    public handleError(error: unknown) {
        console.error(error);
        reportError(error);
    }
}

/**
 * DSN for this deployment. The authority can set `config.backoffice.sentry_dsn`
 * to a different DSN, or to `''` or `false` to turn Sentry off.
 */
export function sentryDsn(): string {
    const value = authority()?.config?.backoffice?.sentry_dsn;
    if (value === undefined || value === null) return DEFAULT_SENTRY_DSN;
    return typeof value === 'string' ? value : '';
}

/**
 * Load and start Sentry. Call once after the authority and user load.
 * Does nothing on localhost, in mock mode or when the DSN is empty.
 */
export async function initSentry(injector: Injector, user_id: string) {
    const dsn = sentryDsn();
    if (!dsn || isMock() || location.hostname === 'localhost') {
        _queue = null;
        return;
    }
    const Sentry = await import('@sentry/angular');
    Sentry.init({
        dsn,
        release: SENTRY_RELEASE,
        environment: isDevMode() ? 'development' : 'production',
        integrations: (defaults) => [
            // Angular's global error listeners already send window errors
            // to the error handler. This prevents duplicate events.
            ...defaults.filter(({ name }) => name !== 'GlobalHandlers'),
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration(),
        ],
        tracesSampleRate: isDevMode() ? 1 : 0.1,
        replaysSessionSampleRate: 0,
        replaysOnErrorSampleRate: 1,
    });
    // Starts the router spans for the tracing integration
    injector.get(Sentry.TraceService);
    Sentry.setUser({ id: user_id });
    Sentry.setTag('domain', authority()?.domain || location.hostname);
    const handler = Sentry.createErrorHandler({ logErrors: false });
    _reporter = (error) => handler.handleError(error);
    const queued = _queue || [];
    _queue = null;
    queued.forEach(_reporter);
    log('Sentry', `Reporting errors for ${SENTRY_RELEASE}`);
}
