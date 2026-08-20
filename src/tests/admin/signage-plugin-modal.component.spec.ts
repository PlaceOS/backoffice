import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SignagePlugin } from '@placeos/ts-client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SignagePluginModalComponent } from '../../app/admin/signage-plugins/signage-plugin-modal.component';
import { HotkeysService } from '../../app/common/hotkeys.service';

vi.mock('@placeos/ts-client', () => ({
    authority: vi.fn(() => null),
    SignagePlugin: class SignagePlugin {
        public readonly id: string;
        public readonly uri: string;
        public readonly playback_type: string;

        constructor(data: Record<string, unknown> = {}) {
            this.id = (data.id as string) || '';
            this.uri = (data.uri as string) || '';
            this.playback_type = (data.playback_type as string) || 'static';
        }
    },
}));

describe('SignagePluginModalComponent', () => {
    beforeEach(async () => {
        vi.useFakeTimers();
        await TestBed.configureTestingModule({
            imports: [SignagePluginModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        item: new SignagePlugin({
                            id: 'plugin-1',
                            uri: '../plugins/news-ticker.html',
                            playback_type: 'static',
                        }),
                        save: vi.fn(),
                    },
                },
                {
                    provide: MatDialogRef,
                    useValue: { close: vi.fn(), disableClose: false },
                },
                {
                    provide: HotkeysService,
                    useValue: {
                        listen: vi.fn(() => ({ unsubscribe: vi.fn() })),
                    },
                },
            ],
        })
            .overrideComponent(SignagePluginModalComponent, {
                set: { template: '' },
            })
            .compileComponents();
    });

    afterEach(() => vi.useRealTimers());

    it('does not reload an edited plugin when its metadata changes', async () => {
        const fixture = TestBed.createComponent(SignagePluginModalComponent);
        const component = fixture.componentInstance;
        TestBed.tick();

        await vi.advanceTimersByTimeAsync(800);
        TestBed.tick();
        const loaded_plugin = component.embed_plugin();

        component.onPluginLoaded({
            plugin: { name: 'news-ticker', version: '1.0.0' },
            capabilities: {
                requires_play_signal: true,
                can_finish: false,
                static_media: false,
            },
            config_schema: {},
        });
        TestBed.tick();
        await vi.advanceTimersByTimeAsync(800);
        TestBed.tick();

        expect(component.embed_plugin()).toBe(loaded_plugin);
        fixture.destroy();
    });
});
