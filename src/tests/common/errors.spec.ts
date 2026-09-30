import { describe, expect, it } from 'vitest';
import { describeError, readError } from '../../app/common/errors';

describe('describeError', () => {
    it('turns a ts-client Response rejection into its status', () => {
        const error = new Response('', {
            status: 403,
            statusText: 'Forbidden',
        });
        expect(describeError(error)).toBe('403 Forbidden');
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
    it('adds the message from a JSON body', async () => {
        const error = new Response('{"message":"name taken"}', {
            status: 422,
            statusText: 'Unprocessable Entity',
        });
        expect(await readError(error)).toBe(
            '422 Unprocessable Entity: name taken',
        );
    });

    it('adds a plain text body and leaves the original readable', async () => {
        const error = new Response('driver failed to compile', {
            status: 500,
            statusText: 'Internal Server Error',
        });
        expect(await readError(error)).toBe(
            '500 Internal Server Error: driver failed to compile',
        );
        expect(await error.text()).toBe('driver failed to compile');
    });

    it('skips an HTML body and a body that is already read', async () => {
        const html = new Response('<html>oops</html>', { status: 502 });
        expect(await readError(html)).toBe('502 request failed');
        const used = new Response('gone', { status: 404, statusText: 'Nope' });
        await used.text();
        expect(await readError(used)).toBe('404 Nope');
    });
});
