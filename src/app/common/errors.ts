import { CallFailed } from '@placeos/ts-client/compat';

/** Longest body text to show in a notification */
const MAX_BODY_LENGTH = 300;

/**
 * Readable text for a caught error. Use it wherever an error is shown to the
 * user. For an HTTP error it gives the status only, as 6.x did. Use
 * `readError` when the message from the API in the body is wanted.
 *
 * `orThrow` throws a `CallFailed`. A `fetch` can still give a raw
 * `Response`, so read its status too.
 */
export function describeError(error: unknown): string {
    if (!error) return 'Unknown error';
    if (typeof error === 'string') return error;
    if (typeof error !== 'object') return String(error);
    if (error instanceof CallFailed && error.error.kind === 'http') {
        return `${error.error.status} request failed`;
    }
    if (typeof Response !== 'undefined' && error instanceof Response) {
        return `${error.status} ${error.statusText || 'request failed'}`.trim();
    }
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
 * error, so the message from the API reaches the user. For a `Response` that
 * is not read yet, it reads a clone, so other handlers can still read it.
 */
export async function readError(error: unknown): Promise<string> {
    const summary = describeError(error);
    const body = await errorBody(error);
    const detail = bodyMessage(body);
    return detail ? `${summary}: ${detail}` : summary;
}

/** The body of an HTTP error as text, or `''` */
async function errorBody(error: unknown): Promise<string> {
    if (error instanceof CallFailed && error.error.kind === 'http') {
        const { body, text } = error.error;
        if (typeof body === 'string') return body;
        // `text` is a body that is not JSON
        return body == null ? (text ?? '') : JSON.stringify(body);
    }
    if (
        typeof Response === 'undefined' ||
        !(error instanceof Response) ||
        error.bodyUsed
    ) {
        return '';
    }
    return error
        .clone()
        .text()
        .catch(() => '');
}

/** Pulls the useful message out of an error body, JSON or plain text */
function bodyMessage(body: string): string {
    const text = body.trim();
    if (!text) return '';
    try {
        const json = JSON.parse(text) as {
            message?: unknown;
            error?: unknown;
        };
        const message = json?.message || json?.error;
        if (typeof message === 'string' && message) {
            return message.slice(0, MAX_BODY_LENGTH);
        }
    } catch {
        // Not JSON, so show the text as is
    }
    // An HTML error page is noise in a notification
    if (text.startsWith('<')) return '';
    return text.slice(0, MAX_BODY_LENGTH);
}
