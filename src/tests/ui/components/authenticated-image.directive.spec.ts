import {
    Component,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AuthenticatedImageDirective } from '../../../app/ui/authenticated-image.directive';

vi.mock('@placeos/ts-client', () => ({
    apiKey: () => '',
    authority: () => ({}),
    token: () => 'token',
}));

const OLD_SOURCE = '/api/engine/v2/uploads/old/url';
const NEW_SOURCE = '/api/engine/v2/uploads/new/url';

@Component({
    template: `<img auth alt="" [source]="source()" />`,
    imports: [AuthenticatedImageDirective],
})
class HostComponent {
    public readonly source = signal(OLD_SOURCE);
}

describe('AuthenticatedImageDirective', () => {
    afterEach(() => vi.unstubAllGlobals());

    it('keeps the newer source when an older request finishes last', async () => {
        const responses = new Map<string, (response: Response) => void>();
        vi.stubGlobal(
            'fetch',
            vi.fn(
                (url: string) =>
                    new Promise((resolve) => responses.set(url, resolve)),
            ),
        );
        // jsdom has no object URLs. The blob holds the source to show here.
        URL.createObjectURL = (blob: Blob & { source?: string }) =>
            `blob:${blob.source}`;
        const respond = async (url: string) => {
            responses.get(url)({
                ok: true,
                blob: () => Promise.resolve({ source: url }),
            } as unknown as Response);
            await new Promise((resolve) => setTimeout(resolve));
        };
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        const fixture = TestBed.createComponent(HostComponent);
        await fixture.whenStable();
        fixture.componentInstance.source.set(NEW_SOURCE);
        await fixture.whenStable();
        const image: HTMLImageElement =
            fixture.nativeElement.querySelector('img');

        await respond(NEW_SOURCE);
        expect(image.getAttribute('src')).toBe(`blob:${NEW_SOURCE}`);
        await respond(OLD_SOURCE);
        expect(image.getAttribute('src')).toBe(`blob:${NEW_SOURCE}`);
    });
});
