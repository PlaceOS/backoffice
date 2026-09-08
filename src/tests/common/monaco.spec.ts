import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('Monaco loading', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.useFakeTimers();
        delete window.require;
        delete window.monaco;
    });

    afterEach(() => {
        vi.useRealTimers();
        delete window.require;
        document
            .querySelectorAll('script')
            .forEach((script) => script.remove());
    });

    it('shares a download and resolves only when the editor is ready', async () => {
        const { loadMonaco } = await import('../../app/common/monaco');
        const first = loadMonaco();
        expect(loadMonaco()).toBe(first);
        expect(document.querySelectorAll('script')).toHaveLength(1);
        let ready: () => void = () => {
            throw new Error('Loader was not called');
        };
        window.require = Object.assign(
            vi.fn((_modules, loaded) => {
                ready = loaded;
            }),
            { config: vi.fn() },
        );
        document.querySelector('script').dispatchEvent(new Event('load'));
        const completed = vi.fn();
        void first.then(completed);
        await Promise.resolve();
        expect(completed).not.toHaveBeenCalled();
        ready();
        await first;
        expect(completed).toHaveBeenCalledOnce();
        expect(window.require.config).toHaveBeenCalledWith({
            paths: {
                vs: new URL('assets/monaco/min/vs', document.baseURI).href,
            },
        });
    });

    it('allows retry after a network failure', async () => {
        const { loadMonaco } = await import('../../app/common/monaco');
        const first = loadMonaco();
        const failure = expect(first).rejects.toThrow(
            'Could not load the editor',
        );
        document.querySelector('script').dispatchEvent(new Event('error'));
        await failure;
        const second = loadMonaco();
        expect(second).not.toBe(first);
        window.require = Object.assign(
            vi.fn((_modules, loaded) => loaded()),
            { config: vi.fn() },
        );
        document.querySelector('script').dispatchEvent(new Event('load'));
        await second;
    });

    it('stops waiting when the editor does not respond', async () => {
        const { loadMonaco } = await import('../../app/common/monaco');
        const failure = expect(loadMonaco()).rejects.toThrow(
            'Editor load timed out',
        );
        await vi.advanceTimersByTimeAsync(30_000);
        await failure;
    });
});
