import { CallFailed } from '@placeos/ts-client/compat';

/** Longest body text to show in a notification */
const MAX_BODY_LENGTH = 300;

/** The HTTP error of a call that `orThrow` rejected, or `null` for another error */
export function httpError(error: unknown) {
    return error instanceof CallFailed && error.error.kind === 'http'
        ? error.error
        : null;
}

/**
 * Whether the error is from a request that an `AbortSignal` cancelled. A
 * cancelled request was replaced by a newer one, so do not show it to the user.
 */
export function isAborted(error: unknown) {
    return (
        (error instanceof CallFailed && error.error.kind === 'aborted') ||
        (error instanceof DOMException && error.name === 'AbortError')
    );
}

/**
 * Readable text for a caught error. Use it wherever an error is shown to the
 * user. For an HTTP error it gives the status only, as 6.x did. Use
 * `readError` when the message from the API in the body is wanted.
 */
export function describeError(error: unknown): string {
    if (!error) return 'Unknown error';
    if (typeof error === 'string') return error;
    if (typeof error !== 'object') return String(error);
    const http = httpError(error);
    if (http) return `${http.status} request failed`;
    const { message, status, statusText } = error as {
        message?: unknown;
        status?: unknown;
        statusText?: unknown;
    };
    if (typeof message === 'string' && message) return message;
    if (typeof status === 'number' && status) {
        return `${status} ${statusText || 'request failed'}`.trim();
    }
    return 'Unknown error';
}

/**
 * Like `describeError`, but also adds the message from the body of an HTTP
 * error, so the message from the API reaches the user.
 */
export async function readError(error: unknown): Promise<string> {
    const summary = describeError(error);
    const detail = bodyMessage(error);
    return detail ? `${summary}: ${detail}` : summary;
}

/**
 * The useful message in the body of an HTTP error, or `''`. It uses the
 * `error` field of a JSON body, then its `message` field, then a body that is
 * not JSON.
 */
function bodyMessage(error: unknown): string {
    const http = httpError(error);
    if (!http) return '';
    const { body } = http;
    const body_message =
        body && typeof body === 'object' && !Array.isArray(body)
            ? body['message']
            : null;
    const text = (
        http.message ||
        (typeof body_message === 'string' ? body_message : '') ||
        http.text ||
        ''
    ).trim();
    // An HTML error page is noise in a notification
    if (text.startsWith('<')) return '';
    return text.slice(0, MAX_BODY_LENGTH);
}
