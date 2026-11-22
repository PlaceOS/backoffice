import { CallFailed } from '@placeos/ts-client/compat';
import { describe, expect, it } from 'vitest';
import { describeError, readError } from '../../app/common/errors';

/** A failed v7 call with the given body */
function httpFailure(
    status: number,
    { message = null, body = null, text = null } = {} as {
        message?: string | null;
        body?: { message?: string; error?: string } | null;
        text?: string | null;
    },
) {
    return new CallFailed({ kind: 'http', status, message, body, text });
}

describe('describeError', () => {
    it('gives the status of a failed call', () => {
        expect(describeError(httpFailure(403))).toBe('403 request failed');
    });

    it('uses an Error message when there is one', () => {
        expect(describeError(new Error('gateway'))).toBe('gateway');
    });

    it('falls back to a status shape without a message', () => {
        expect(describeError({ status: 502, statusText: 'Bad Gateway' })).toBe(
            '502 Bad Gateway',
        );
    });

    it('never renders an empty reason or "{}"', () => {
        expect(describeError(undefined)).toBe('Unknown error');
        expect(describeError({})).toBe('Unknown error');
    });
});

describe('readError', () => {
    it('adds the error field of a JSON body', async () => {
        const error = httpFailure(401, {
            message: 'invalid token',
            body: { error: 'invalid token' },
        });
        expect(await readError(error)).toBe(
            '401 request failed: invalid token',
        );
    });

    it('adds the message field of a JSON body without an error field', async () => {
        const error = httpFailure(422, { body: { message: 'name taken' } });
        expect(await readError(error)).toBe('422 request failed: name taken');
    });

    it('adds a plain-text body', async () => {
        const error = httpFailure(503, { text: 'core is starting' });
        expect(await readError(error)).toBe(
            '503 request failed: core is starting',
        );
    });

    it('shows only the status for an empty or HTML body', async () => {
        expect(await readError(httpFailure(500))).toBe('500 request failed');
        const html = httpFailure(502, { text: '<html>oops</html>' });
        expect(await readError(html)).toBe('502 request failed');
    });

    it('limits the length of a long body', async () => {
        const error = httpFailure(500, { text: 'x'.repeat(1000) });
        expect(await readError(error)).toHaveLength(
            '500 request failed: '.length + 300,
        );
    });
});
