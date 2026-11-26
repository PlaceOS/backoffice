import {
    Component,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AuthenticatedImageDirective } from '../../../app/ui/authenticated-image.directive';

vi.mock('../../../app/common/placeos', () => ({
    authority: () => ({}),
    setAuthCookie: async () => true,
}));

const OLD_SOURCE = '/api/engine/v2/uploads/old/url';
const NEW_SOURCE = '/api/engine/v2/uploads/new/url';

@Component({
    template: `
        <img auth alt="" [source]="source()" />
        @if (second()) {
            <img auth alt="" [source]="source()" />
        }
    `,
    imports: [AuthenticatedImageDirective],
})
class HostComponent {
    public readonly source = signal(OLD_SOURCE);
    /** Whether a second image of the same source shows */
    public readonly second = signal(false);
}

/** A request that the test has not finished yet */
interface PendingFetch {
    url: string;
    signal: AbortSignal;
    resolve: (response: Response) => void;
}

describe('AuthenticatedImageDirective', () => {
    let pending: PendingFetch[];
    let next_url: number;
    // jsdom has no object URLs, so the tests set them. Keep the originals.
    const create_object_url = URL.createObjectURL;
    const revoke_object_url = URL.revokeObjectURL;

    beforeEach(() => {
        pending = [];
        next_url = 0;
        vi.stubGlobal(
            'fetch',
            vi.fn(
                (url: string, init: RequestInit) =>
                    new Promise<Response>((resolve) =>
                        pending.push({ url, signal: init.signal, resolve }),
                    ),
            ),
        );
        // Each URL is new, as the browser makes them
        URL.createObjectURL = (blob: Blob & { source?: string }) =>
            `blob:${blob.source}#${++next_url}`;
        URL.revokeObjectURL = vi.fn();
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        URL.createObjectURL = create_object_url;
        URL.revokeObjectURL = revoke_object_url;
    });

    /** Finish the requests of `url` */
    const respond = async (url: string) => {
        const made = next_url;
        const requests = pending.filter((request) => request.url === url);
        pending = pending.filter((request) => request.url !== url);
        for (const request of requests) {
            request.resolve({
                ok: true,
                blob: () => Promise.resolve({ source: url }),
            } as unknown as Response);
        }
        // The directive reads the blob, then sets the URL
        await vi.waitFor(() => expect(next_url).toBe(made + requests.length));
    };

    /** The `src` of each image */
    const sources = (element: HTMLElement) =>
        [...element.querySelectorAll('img')].map((image) =>
            image.getAttribute('src'),
        );

    it('keeps the newer source when an older request finishes last', async () => {
        const fixture = TestBed.createComponent(HostComponent);
        await fixture.whenStable();
        fixture.componentInstance.source.set(NEW_SOURCE);
        await fixture.whenStable();

        await respond(NEW_SOURCE);
        expect(sources(fixture.nativeElement)).toEqual([
            `blob:${NEW_SOURCE}#1`,
        ]);
        const old = pending.find((request) => request.url === OLD_SOURCE);
        expect(old.signal.aborted).toBe(true);
        const blob = vi.fn(() => Promise.resolve({ source: OLD_SOURCE }));
        old.resolve({ ok: true, blob } as unknown as Response);
        await vi.waitFor(() => expect(blob).toHaveBeenCalled());
        expect(sources(fixture.nativeElement)).toEqual([
            `blob:${NEW_SOURCE}#1`,
        ]);
    });

    it('frees its blob URL when the source changes and when it is removed', async () => {
        const fixture = TestBed.createComponent(HostComponent);
        await fixture.whenStable();
        await respond(OLD_SOURCE);

        fixture.componentInstance.source.set(NEW_SOURCE);
        await fixture.whenStable();
        expect(URL.revokeObjectURL).toHaveBeenCalledWith(
            `blob:${OLD_SOURCE}#1`,
        );

        await respond(NEW_SOURCE);
        fixture.destroy();
        expect(URL.revokeObjectURL).toHaveBeenLastCalledWith(
            `blob:${NEW_SOURCE}#2`,
        );
    });

    it('gives each image of a source its own blob URL, so removing one keeps the other', async () => {
        const fixture = TestBed.createComponent(HostComponent);
        fixture.componentInstance.second.set(true);
        await fixture.whenStable();
        await respond(OLD_SOURCE);
        const [first, second] = sources(fixture.nativeElement);
        expect(first).not.toBe(second);

        fixture.componentInstance.second.set(false);
        await fixture.whenStable();

        expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith(second);
        expect(sources(fixture.nativeElement)).toEqual([first]);
    });

    it('stops the download when an image is removed before it loads', async () => {
        const fixture = TestBed.createComponent(HostComponent);
        await fixture.whenStable();
        await vi.waitFor(() => expect(pending).toHaveLength(1));

        fixture.destroy();

        expect(pending[0].signal.aborted).toBe(true);
    });
});
