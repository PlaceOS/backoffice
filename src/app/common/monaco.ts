/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />

interface MonacoRequire {
    (
        modules: string[],
        loaded: () => void,
        failed: (error: Error) => void,
    ): void;
    config(options: { paths: { vs: string } }): void;
    reset?(): void;
}

declare global {
    interface Window {
        require?: MonacoRequire;
        monaco?: typeof monaco;
    }
}

let loading: Promise<void> | undefined;

/** Share one editor download across fields and allow retry after a failed load. */
export function loadMonaco(): Promise<void> {
    if (loading) return loading;
    if (window.monaco?.editor) return Promise.resolve();
    return (loading ??= new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        let finished = false;
        const timer = setTimeout(
            () => finish(new Error('Editor load timed out')),
            30_000,
        );
        const finish = (error?: Error) => {
            if (finished) return;
            finished = true;
            clearTimeout(timer);
            if (script) {
                script.onload = null;
                script.onerror = null;
                if (error) script.remove();
            }
            if (error) reject(error);
            else resolve();
        };
        const loadEditor = () => {
            const loader = window.require;
            if (!loader)
                return finish(new Error('Editor loader is unavailable'));
            loader.config({
                paths: {
                    vs: new URL('assets/monaco/min/vs', document.baseURI).href,
                },
            });
            loader(['vs/editor/editor.main'], () => finish(), finish);
        };
        if (window.require) return loadEditor();
        script.src = new URL(
            'assets/monaco/min/vs/loader.js',
            document.baseURI,
        ).href;
        script.onload = loadEditor;
        script.onerror = () => {
            script.remove();
            finish(new Error('Could not load the editor'));
        };
        document.head.appendChild(script);
    }).catch((error: unknown) => {
        // The AMD loader caches failed modules; clear them before another attempt.
        window.require?.reset?.();
        loading = undefined;
        throw error;
    }));
}
