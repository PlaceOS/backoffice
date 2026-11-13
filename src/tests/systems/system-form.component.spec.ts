import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceSystem, PlaceZone } from '@placeos/ts-client';
import { EMPTY } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import { SystemFormComponent } from '../../app/systems/system-form.component';

const mocks = vi.hoisted(() => ({
    addSystem: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    ...mocks,
}));
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
        mocks.addSystem.mockResolvedValue(new PlaceSystem({ id: 'sys-1' }));
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
                    useValue: { item: new PlaceSystem({ zones: ['zone-1'] }) },
                },
            ],
        });
        const fixture = TestBed.createComponent(SystemFormComponent);
        const component = fixture.componentInstance;
        await fixture.whenStable();

        component.formModel.update((model) => ({
            ...model,
            name: 'Meeting room',
            zone: new PlaceZone({ id: 'zone-2' }),
        }));
        await fixture.whenStable();
        await component.submit();

        expect(mocks.addSystem).toHaveBeenCalledOnce();
        const [payload] = mocks.addSystem.mock.calls[0];
        expect(payload.zones).toEqual(['zone-2']);
        expect(payload).not.toHaveProperty('zone');
    });
});
