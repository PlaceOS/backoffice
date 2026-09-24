import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlaceTrigger, SignagePlaylist } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SystemTriggerFormComponent } from '../../app/systems/system-trigger-form.component';

const mocks = vi.hoisted(() => ({
    querySignagePlaylists: vi.fn(),
    showSignagePlaylist: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    querySignagePlaylists: mocks.querySignagePlaylists,
    showSignagePlaylist: mocks.showSignagePlaylist,
}));
vi.mock('@placeos/cloud-uploads', () =>
    vi.importActual('@placeos/cloud-uploads/dist/index.es.js'),
);

const playlist = (id: string, name: string) =>
    new SignagePlaylist({ id, name });

describe('system trigger playlists', () => {
    let fixture: ComponentFixture<SystemTriggerFormComponent>;

    beforeEach(async () => {
        vi.resetAllMocks();
        mocks.querySignagePlaylists.mockResolvedValue({ data: [] });
        mocks.showSignagePlaylist.mockImplementation(async (id: string) => {
            if (id === 'playlist-missing') throw new Error('Not found');
            return playlist(id, 'Lobby loop');
        });
        TestBed.configureTestingModule({
            imports: [SystemTriggerFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                { provide: MatDialogRef, useValue: { close: vi.fn() } },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        item: new PlaceTrigger({
                            id: 'trig-1',
                            name: 'Fire alarm',
                            playlists: ['playlist-1', 'playlist-missing'],
                        } as Partial<PlaceTrigger>),
                    },
                },
            ],
        });
        fixture = TestBed.createComponent(SystemTriggerFormComponent);
        await fixture.whenStable();
    });

    const rows = () =>
        Array.from(
            (fixture.nativeElement as HTMLElement).querySelectorAll(
                '[playlist]',
            ),
        ).map((el) => el.textContent.replace(/\s+/g, ' ').trim());

    it('shows playlist names and falls back to the ID', async () => {
        await fixture.whenStable();
        expect(rows()).toEqual([
            'Lobby loop playlist-1 close',
            'playlist-missing playlist-missing close',
        ]);
    });

    it('adds selected playlists once and removes them', async () => {
        const component = fixture.componentInstance;
        const events: unknown[] = [];
        component.event.subscribe((e) => events.push(e.metadata));

        component.addPlaylist(playlist('playlist-2', 'Evacuation'));
        component.addPlaylist(playlist('playlist-2', 'Evacuation'));
        component.removePlaylist('playlist-missing');
        await fixture.whenStable();

        expect(rows()).toEqual([
            'Lobby loop playlist-1 close',
            'Evacuation playlist-2 close',
        ]);
        expect(component.exclude_fn(playlist('playlist-2', ''))).toBe(true);
        await component.submit();
        expect(events).toEqual([
            expect.objectContaining({
                playlists: ['playlist-1', 'playlist-2'],
            }),
        ]);
    });
});
