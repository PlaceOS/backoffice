import { Location } from '@angular/common';
import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { PlaceResource, updateMetadata } from '@placeos/ts-client';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import {
    ExtensionOutletComponent,
    FrameMessage,
} from '../../app/ui/extension-outlet.component';

const EXTENSION_URL = 'https://ext.example/view?id=sys-1';

// The real service loads most of the app
vi.mock('../../app/common/item.service', () => ({
    ActiveItemService: class {},
}));

vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

vi.mock('@placeos/ts-client', () => ({
    apiKey: vi.fn(() => ''),
    token: vi.fn(() => ''),
    authority: vi.fn(() => ({
        config: {
            backoffice: {
                extend: {
                    systems: {
                        Booking: {
                            url: 'https://ext.example/view?id={{id}}',
                            conditions: [],
                        },
                    },
                },
            },
        },
    })),
    onlineState: vi.fn(() => ({
        value: true,
        subscribe: (next: (value: boolean) => void) => {
            next(true);
            return () => undefined;
        },
    })),
    showMetadata: vi.fn(() => Promise.resolve({ details: { theme: 'dark' } })),
    updateMetadata: vi.fn(() => Promise.resolve({})),
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
    ) => {
        fixture.componentInstance.onMessage({
            source,
            origin: new URL(EXTENSION_URL).origin,
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

    it('replies with an error when a request fails', async () => {
        vi.mocked(updateMetadata).mockRejectedValueOnce(new Error('403'));
        const failed = await send({ action: 'metadata', name: 'settings' });
        expect(failed).toMatchObject({ id: '1', status: 'error' });

        const no_name = await send({ id: '2', action: 'metadata' });
        expect(no_name).toMatchObject({ id: '2', status: 'error' });
    });

    it('ignores messages from other windows and unknown actions', async () => {
        await send({ action: 'update', content: {} }, window);
        await send({ action: 'result' });
        expect(replies).toEqual([]);
        expect(save).not.toHaveBeenCalled();
    });
});
