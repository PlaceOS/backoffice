import { ErrorHandler, Injectable, Injector, isDevMode } from '@angular/core';
import { CallFailed } from '@placeos/ts-client/compat';

import { VERSION } from '../../env/version';
import { isHandledChunkLoadError } from './application';
import { log } from './general';
import { authority, backofficeConfig, isMock } from './placeos';

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
 * True for the error Monaco uses to cancel pending work. Monaco does not
 * handle some of these rejections, for example when an editor is disposed
 * while a word highlight is pending. They are not failures.
 * Same check as Monaco's `isCancellationError`.
 */
function isMonacoCancellation(error: unknown) {
    return (
        error instanceof Error &&
        error.name === 'Canceled' &&
        error.message === 'Canceled'
    );
}

/**
 * Angular error handler. Logs errors to the console as the default handler
 * does, and sends them to Sentry. Ignores Monaco cancellations and lazy route
 * chunk failures that the router error handler already handled.
 */
@Injectable()
export class SentryReportingErrorHandler implements ErrorHandler {
    public handleError(error: unknown) {
        if (isMonacoCancellation(error) || isHandledChunkLoadError(error)) {
            return;
        }
        const reported = withoutBody(error);
        console.error(reported);
        reportError(reported);
    }
}

/** A frame of a V8 stack (`    at fn (url:1:2)`) or a Firefox and Safari stack (`fn@url:1:2`) */
function isStackFrame(line: string) {
    return /^\s+at\s/.test(line) || /^[^\s@]*@\S+:\d+:\d+$/.test(line);
}

/**
 * A failed API call as an error with its kind and status only. The body of
 * the response can have personal data.
 */
function withoutBody(error: unknown) {
    if (!(error instanceof CallFailed)) return error;
    const status = error.status === null ? '' : ` ${error.status}`;
    const reported = new Error(`API call failed: ${error.error.kind}${status}`);
    // Keep the frames of the original error, so Sentry shows where it came
    // from. Cut the stack after the message first: the message can have
    // lines that look like frames, such as a stack trace of the server. A
    // stack without the message (Firefox, Safari) has only frames.
    const stack = error.stack ?? '';
    const at = error.message ? stack.indexOf(error.message) : -1;
    const rest = at < 0 ? stack : stack.slice(at + error.message.length);
    const frames = rest.split('\n').filter(isStackFrame);
    if (frames.length) {
        reported.stack = [reported.message, ...frames].join('\n');
    }
    return reported;
}

/**
 * DSN for this deployment. The authority can set `config.backoffice.sentry_dsn`
 * to a different DSN, or to `''` or `false` to turn Sentry off.
 */
export function sentryDsn(): string {
    const value: unknown = backofficeConfig().sentry_dsn;
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
        // Chrome raises this when resize notifications move to the next frame.
        // It does no harm. In dev mode Angular adds a prefix to the message,
        // so Sentry's default filter does not match it.
        ignoreErrors: [/ResizeObserver loop/],
        integrations: (defaults) => [
            // Angular's global error listeners already send window errors
            // to the error handler. This prevents duplicate events. Console
            // output is not recorded: error toasts log the message of the
            // server, which can have personal data.
            ...defaults.filter(
                ({ name }) => name !== 'GlobalHandlers' && name !== 'Console',
            ),
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
