import { Location } from '@angular/common';
import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { metadata } from '@placeos/ts-client';
import { of } from 'rxjs';
import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    type MockInstance,
    vi,
} from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { PlaceResource } from '../../app/common/types';
import {
    ExtensionOutletComponent,
    FrameMessage,
} from '../../app/ui/extension-outlet.component';
const { fromV1Mock, mockReply } = await vi.hoisted(
    () => import('@placeos/ts-client/compat'),
);

const EXTENSION_URL = 'https://ext.example/view?id=sys-1';

// The real service loads most of the app
vi.mock('../../app/common/item.service', () => ({
    ActiveItemService: class {},
}));

vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

vi.mock('../../app/common/placeos', async () => {
    const { signal } = await import('@angular/core');
    return {
        online: signal(true),
        setAuthCookie: vi.fn(async () => true),
        backofficeConfig: vi.fn(() => ({
            extend: {
                systems: {
                    Booking: {
                        url: 'https://ext.example/view?id={{id}}',
                        conditions: [],
                    },
                },
            },
        })),
    };
});

vi.mock('@placeos/ts-client', () => ({
    metadata: {
        show: vi.fn(
            fromV1Mock(
                // The API can send the details as JSON text
                () => Promise.resolve({ details: '{"theme":"dark"}' }),
                ['id', 'name'],
                'data',
                'name',
            ),
        ),
        update: vi.fn(fromV1Mock(() => Promise.resolve({}), ['id', 'body'])),
    },
}));

describe('ExtensionOutletComponent', () => {
    let fixture: ComponentFixture<ExtensionOutletComponent>;
    let frame_window: Window;
    let replies: FrameMessage[];
    const item = signal({ id: 'sys-1', name: 'Room 1' } as PlaceResource);
    const save = vi.fn((_: PlaceResource) => Promise.resolve(_));
    const replaceItem = vi.fn((_: PlaceResource) => item.set(_));

    /** Send a request from the extension frame and wait for the reply */
    const send = async (
        message: Partial<FrameMessage>,
        source = frame_window,
        origin = new URL(EXTENSION_URL).origin,
    ) => {
        fixture.componentInstance.onMessage({
            source,
            origin,
            data: JSON.stringify({ id: '1', type: 'backoffice', ...message }),
        } as MessageEvent);
        // Let the mocked API promises settle
        await new Promise((resolve) => setTimeout(resolve));
        return replies.at(-1);
    };

    beforeEach(async () => {
        save.mockClear();
        replaceItem.mockClear();
        item.set({ id: 'sys-1', name: 'Room 1' } as PlaceResource);
        await TestBed.configureTestingModule({
            imports: [ExtensionOutletComponent],
            providers: [
                { provide: Location, useValue: { back: vi.fn() } },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        queryParamMap: of(
                            convertToParamMap({ embed: EXTENSION_URL }),
                        ),
                    },
                },
                {
                    provide: ActiveItemService,
                    useValue: {
                        item,
                        type: 'systems',
                        actions: { save },
                        replaceItem,
                        get active_item() {
                            return item();
                        },
                    },
                },
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(ExtensionOutletComponent);
        await fixture.whenStable();
        await new Promise((resolve) => setTimeout(resolve, 400));
        await fixture.whenStable();
        const frame: HTMLIFrameElement =
            fixture.nativeElement.querySelector('iframe');
        frame_window = frame.contentWindow;
        replies = [];
        vi.spyOn(frame_window, 'postMessage').mockImplementation(
            (data: string) => replies.push(JSON.parse(data)),
        );
    });

    it('loads the configured extension URL', () => {
        expect(fixture.componentInstance.url()).toBe(EXTENSION_URL);
    });

    it('merges each update into the last saved item', async () => {
        await send({ action: 'update', content: { name: 'Room 2' } });
        const reply = await send({
            action: 'update',
            content: { description: 'Level 1' },
        });

        expect(save).toHaveBeenLastCalledWith({
            id: 'sys-1',
            name: 'Room 2',
            description: 'Level 1',
        });
        expect(replaceItem).toHaveBeenCalledTimes(2);
        expect(reply).toMatchObject({ action: 'result', status: 'success' });
    });

    it('saves the active item when the frame sends another id', async () => {
        await send({ action: 'update', content: { id: 'sys-2', name: 'X' } });

        expect(save).toHaveBeenLastCalledWith({ id: 'sys-1', name: 'X' });
    });

    describe('resource', () => {
        const upload = (origin: string, path = 'upload-1/url') =>
            `${origin}/api/engine/v2/uploads/${path}`;
        let fetch_spy: MockInstance<typeof fetch>;

        beforeEach(() => {
            fetch_spy = vi
                .spyOn(window, 'fetch')
                // The Blob of the page, which FileReader takes
                .mockResolvedValue({
                    ok: true,
                    blob: async () => new Blob(['image']),
                } as Response);
        });
        afterEach(() => fetch_spy.mockRestore());

        /** Ask for `src` when the active item holds it */
        const load = (src: string) => {
            item.set({
                id: 'sys-1',
                name: 'Room 1',
                images: [src],
            } as PlaceResource);
            return send({ action: 'resource', name: src });
        };

        it('does not load an upload that the item holds only as a key', async () => {
            const src = upload(location.origin);
            item.set({
                id: 'sys-1',
                name: 'Room 1',
                settings: { [src]: true },
            } as PlaceResource);

            const reply = await send({ action: 'resource', name: src });

            expect(fetch_spy).not.toHaveBeenCalled();
            expect(reply).toMatchObject({ status: 'success', content: src });
        });

        it('loads an upload of the item as a data URL', async () => {
            await load(upload(location.origin));

            // The file is read after the first reply wait
            await vi.waitFor(() =>
                expect(`${replies.at(-1)?.content}`).toMatch(/^data:/),
            );
            expect(fetch_spy).toHaveBeenCalledTimes(1);
        });

        it.each([
            ['another origin', upload('https://other.example')],
            ['another API', upload(location.origin, '../users/current')],
            ['another upload route', upload(location.origin, 'upload-1')],
            ['a query', `${upload(location.origin)}?a=1`],
        ])('gives back a URL on %s without loading it', async (_, src) => {
            const reply = await load(src);

            expect(fetch_spy).not.toHaveBeenCalled();
            expect(reply).toMatchObject({ status: 'success', content: src });
        });
    });

    it('replies with the loaded metadata', async () => {
        const reply = await send({ action: 'load', name: 'settings' });
        expect(reply).toEqual({
            id: '1',
            type: 'backoffice',
            action: 'result',
            status: 'success',
            content: { theme: 'dark' },
        });
    });

    it('replies with empty details for a block that does not exist', async () => {
        vi.mocked(metadata.show).mockResolvedValueOnce(mockReply({}));
        const reply = await send({ action: 'load', name: 'missing' });
        expect(reply).toMatchObject({ status: 'success', content: {} });
    });

    it('replies with an error when a request fails', async () => {
        vi.mocked(metadata.update).mockRejectedValueOnce(new Error('403'));
        const failed = await send({ action: 'metadata', name: 'settings' });
        expect(failed).toMatchObject({ id: '1', status: 'error' });

        const no_name = await send({ id: '2', action: 'metadata' });
        expect(no_name).toMatchObject({ id: '2', status: 'error' });
    });

    it('ignores messages from other windows, other origins and unknown actions', async () => {
        await send({ action: 'update', content: {} }, window);
        await send(
            { action: 'update', content: {} },
            frame_window,
            'https://evil.example',
        );
        await send({ action: 'result' });
        expect(replies).toEqual([]);
        expect(save).not.toHaveBeenCalled();
    });
});
