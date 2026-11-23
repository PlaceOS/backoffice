import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    Playlist,
    playlist as playlist_v7,
    TriggerInstance,
} from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { EMPTY } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { SystemTriggerFormComponent } from '../../app/systems/system-trigger-form.component';

vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/cloud-uploads', () =>
    vi.importActual('@placeos/cloud-uploads/dist/index.es.js'),
);

const playlist = (id: string, name: string) => newItem(Playlist, { id, name });

describe('system trigger playlists', () => {
    let fixture: ComponentFixture<SystemTriggerFormComponent>;

    beforeEach(async () => {
        vi.resetAllMocks();
        vi.mocked(playlist_v7.query).mockResolvedValue(mockPage({ data: [] }));
        vi.mocked(playlist_v7.show).mockImplementation(async ({ id }) =>
            id === 'playlist-missing'
                ? {
                      ok: false,
                      error: {
                          kind: 'http',
                          status: 404,
                          message: null,
                          body: null,
                          text: null,
                      },
                  }
                : mockReply(playlist(id, 'Lobby loop')),
        );
        TestBed.configureTestingModule({
            imports: [SystemTriggerFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                {
                    provide: DialogRef,
                    useValue: {
                        close: vi.fn(),
                        backdropClick: EMPTY,
                        keydownEvents: EMPTY,
                    },
                },
                {
                    provide: DIALOG_DATA,
                    useValue: {
                        item: newItem(TriggerInstance, {
                            id: 'trig-1',
                            name: 'Fire alarm',
                            playlists: ['playlist-1', 'playlist-missing'],
                        }),
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
