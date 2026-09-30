/** Longest body text to show in a notification */
const MAX_BODY_LENGTH = 300;

/**
 * Readable text for a caught error. Use it wherever an error is shown to the
 * user.
 *
 * ts-client throws the raw `Response` for any non-OK status. Interpolating it
 * yields "[object Response]" and `JSON.stringify` yields "{}", so read the
 * status from it instead. Use `readError` when the body text is wanted too.
 */
export function describeError(error: unknown): string {
    if (!error) return 'Unknown error';
    if (typeof error === 'string') return error;
    if (typeof error !== 'object') return String(error);
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
 * Like `describeError`, but also reads the body of a `Response` that is not
 * read yet, so the message from the API reaches the user.
 *
 * Reads a clone, so other handlers can still read the original body.
 */
export async function readError(error: unknown): Promise<string> {
    const summary = describeError(error);
    if (
        typeof Response === 'undefined' ||
        !(error instanceof Response) ||
        error.bodyUsed
    ) {
        return summary;
    }
    const body = await error
        .clone()
        .text()
        .catch(() => '');
    const detail = bodyMessage(body);
    return detail ? `${summary}: ${detail}` : summary;
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
