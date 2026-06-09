import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ExtensionModalComponent } from '../../app/admin/extension-modal/extension-modal.component';
import { HotkeysService } from '../../app/common/hotkeys.service';

vi.mock('@placeos/ts-client', () => ({
    authority: vi.fn(() => null),
    showMetadata: vi.fn(() => Promise.resolve({ details: {} })),
}));

describe('ExtensionModalComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExtensionModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        item: {
                            type: 'systems',
                            name: 'Status Dashboard',
                            url: 'https://example.com/{{id}}',
                            conditions: [
                                ['id', 'truthy', ''],
                                ['', '', ''],
                            ],
                        },
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
            .overrideComponent(ExtensionModalComponent, {
                set: { template: '' },
            })
            .compileComponents();
    });

    it('emits the form value when saving', async () => {
        const fixture = TestBed.createComponent(ExtensionModalComponent);
        const component = fixture.componentInstance;
        const event_spy = vi.fn();
        component.event.subscribe(event_spy);

        component.ngOnInit();
        await component.submit();

        expect(event_spy).toHaveBeenCalledWith({
            reason: 'done',
            metadata: {
                type: 'systems',
                name: 'Status Dashboard',
                url: 'https://example.com/{{id}}',
                conditions: [['id', 'truthy', '']],
            },
        });
    });
});
