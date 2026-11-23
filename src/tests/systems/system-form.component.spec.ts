import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { System, systems, Zone } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { EMPTY } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { SystemFormComponent } from '../../app/systems/system-form.component';

vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/cloud-uploads', () =>
    vi.importActual('@placeos/cloud-uploads/dist/index.es.js'),
);
vi.mock('../../app/common/support-access', () => ({
    querySupportZones: async () => ({ data: [] }),
}));
vi.mock('../../app/common/notifications', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('SystemFormComponent', () => {
    it('saves the selected zone as the zone list without the zone field', async () => {
        vi.mocked(systems.create).mockResolvedValue(
            mockReply(newItem(System, { id: 'sys-1' })),
        );
        TestBed.configureTestingModule({
            imports: [SystemFormComponent],
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
                    useValue: { item: newItem(System, { zones: ['zone-1'] }) },
                },
            ],
        });
        const fixture = TestBed.createComponent(SystemFormComponent);
        const component = fixture.componentInstance;
        await fixture.whenStable();

        component.formModel.update((model) => ({
            ...model,
            name: 'Meeting room',
            zone: newItem(Zone, { id: 'zone-2' }),
        }));
        await fixture.whenStable();
        await component.submit();

        expect(systems.create).toHaveBeenCalledOnce();
        const payload = vi.mocked(systems.create).mock.calls[0][0].body;
        expect(payload.zones).toEqual(['zone-2']);
        expect(payload).not.toHaveProperty('zone');
    });
});
