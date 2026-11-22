import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import { SignagePlugin } from '@placeos/ts-client';
import { EMPTY } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
    SignagePluginModalComponent,
    SignagePluginModalData,
} from '../../app/admin/signage-plugins/signage-plugin-modal.component';
import { HotkeysService } from '../../app/common/hotkeys.service';
import { newItem } from '../../app/common/placeos';

vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('SignagePluginModalComponent', () => {
    beforeEach(async () => {
        vi.useFakeTimers();
        await TestBed.configureTestingModule({
            imports: [SignagePluginModalComponent],
            providers: [
                {
                    provide: DIALOG_DATA,
                    useValue: {
                        item: newItem(SignagePlugin, {
                            id: 'plugin-1',
                            uri: '../plugins/news-ticker.html',
                            playback_type: 'static',
                        }),
                        save: vi.fn(),
                    },
                },
                {
                    provide: DialogRef,
                    useValue: {
                        close: vi.fn(),
                        disableClose: false,
                        backdropClick: EMPTY,
                        keydownEvents: EMPTY,
                    },
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

    it.each([
        {
            name: 'removes obsolete defaults without editing a field',
            schema: {
                type: 'object',
                properties: {
                    title: { type: 'string' },
                    enabled: { type: 'boolean' },
                    delay: { type: 'number' },
                    subtitle: { type: 'string' },
                    added: { type: 'string' },
                },
                additionalProperties: false,
            },
            expected: { title: 'News', enabled: false, delay: 0, subtitle: '' },
        },
        {
            name: 'clears defaults when all parameters are removed',
            schema: { type: 'object', properties: {} },
            expected: {},
        },
        {
            name: 'saves an empty source schema instead of the saved schema',
            schema: {},
            expected: {},
        },
        {
            name: 'preserves defaults when the source schema fails to load',
            schema: null,
            expected: {
                title: 'News',
                enabled: false,
                delay: 0,
                subtitle: '',
                obsolete: 'old value',
            },
        },
    ])('$name', async ({ schema, expected }) => {
        const data = TestBed.inject<SignagePluginModalData>(DIALOG_DATA);
        const defaults = {
            title: 'News',
            enabled: false,
            delay: 0,
            subtitle: '',
            obsolete: 'old value',
        };
        const params = {
            type: 'object',
            properties: { obsolete: { type: 'string' } },
        };
        data.item = { ...data.item, name: 'News ticker', defaults, params };
        const save = vi.spyOn(data, 'save').mockResolvedValue(data.item);
        const fixture = TestBed.createComponent(SignagePluginModalComponent);
        const component = fixture.componentInstance;

        if (schema) {
            component.onSchemaLoaded(schema);
        } else {
            component.onPluginError({ code: 'load', message: 'Load failed' });
        }
        await component.submit();

        expect(save).toHaveBeenCalledExactlyOnceWith(
            expect.objectContaining({
                defaults: expected,
                params: schema ?? params,
            }),
        );
        expect(defaults.obsolete).toBe('old value');
        expect(TestBed.inject(DialogRef).close).toHaveBeenCalled();
        fixture.destroy();
    });

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
