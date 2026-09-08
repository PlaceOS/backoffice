import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlaceZone } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ZoneFormComponent } from '../../app/zones/zone-form.component';

const mocks = vi.hoisted(() => ({
    addZone: vi.fn(),
    updateZone: vi.fn(),
    queryZones: vi.fn(),
    showZone: vi.fn(),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    addZone: mocks.addZone,
    updateZone: mocks.updateZone,
    queryZones: mocks.queryZones,
    showZone: mocks.showZone,
}));
vi.mock('@placeos/cloud-uploads', () =>
    vi.importActual('@placeos/cloud-uploads/dist/index.es.js'),
);
vi.mock('../../app/common/notifications', () => ({
    notifyError: mocks.notifyError,
    notifySuccess: mocks.notifySuccess,
}));

describe('saving zones', () => {
    let fixture: ComponentFixture<ZoneFormComponent>;
    const dialog = { close: vi.fn(), disableClose: false };

    beforeEach(async () => {
        vi.resetAllMocks();
        dialog.disableClose = false;
        mocks.queryZones.mockResolvedValue({ data: [] });
        mocks.updateZone.mockResolvedValue(
            new PlaceZone({ id: 'zone-1', name: 'Floor 1' }),
        );
        TestBed.configureTestingModule({
            imports: [ZoneFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                { provide: MatDialogRef, useValue: dialog },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        item: new PlaceZone({ id: 'zone-1', name: 'Floor 1' }),
                    },
                },
            ],
        });
        fixture = TestBed.createComponent(ZoneFormComponent);
        await fixture.whenStable();
    });

    it('saves the selected parent ID without sending the picker object', async () => {
        fixture.componentInstance.form
            .parent_zone()
            .value.set(new PlaceZone({ id: 'building-1', name: 'Building' }));
        await fixture.whenStable();
        await fixture.componentInstance.submit();
        expect(mocks.updateZone).toHaveBeenCalledExactlyOnceWith(
            'zone-1',
            expect.objectContaining({
                name: 'Floor 1',
                parent_id: 'building-1',
            }),
        );
        expect(mocks.updateZone.mock.calls[0][1]).not.toHaveProperty(
            'parent_zone',
        );
        expect(dialog.close).toHaveBeenCalledOnce();
    });

    it('saves an empty parent ID when the user removes the parent', async () => {
        fixture.componentInstance.form
            .parent_zone()
            .value.set(new PlaceZone({ id: 'building-1' }));
        await fixture.whenStable();
        fixture.componentInstance.form.parent_zone().value.set(null);
        await fixture.whenStable();
        await fixture.componentInstance.submit();
        expect(mocks.updateZone).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({ parent_id: '' }),
        );
    });

    it('blocks saving when the required name is removed', async () => {
        fixture.componentInstance.form.name().value.set('');
        await fixture.whenStable();
        await fixture.componentInstance.submit();
        expect(mocks.updateZone).not.toHaveBeenCalled();
        expect(mocks.addZone).not.toHaveBeenCalled();
        expect(dialog.close).not.toHaveBeenCalled();
        expect(mocks.notifyError).toHaveBeenCalled();
    });

    it('keeps edits after a failed save and permits retry', async () => {
        mocks.updateZone.mockRejectedValueOnce(new Error('Offline'));
        fixture.componentInstance.form.name().value.set('Renamed floor');
        await fixture.whenStable();
        await fixture.componentInstance.submit();
        expect(fixture.componentInstance.formModel().name).toBe(
            'Renamed floor',
        );
        expect(fixture.componentInstance.loading()).toBeNull();
        expect(dialog.disableClose).toBe(false);
        expect(dialog.close).not.toHaveBeenCalled();
        expect(mocks.notifyError).toHaveBeenCalled();
        expect(mocks.notifySuccess).not.toHaveBeenCalled();
        await fixture.componentInstance.submit();
        expect(mocks.updateZone).toHaveBeenCalledTimes(2);
        expect(dialog.close).toHaveBeenCalledOnce();
    });
});
