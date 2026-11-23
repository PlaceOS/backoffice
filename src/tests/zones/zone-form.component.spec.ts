import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Zone } from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { EMPTY } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { ZoneFormComponent } from '../../app/zones/zone-form.component';

const mocks = vi.hoisted(() => ({
    addZone: vi.fn(),
    updateZone: vi.fn(),
    queryZones: vi.fn(),
    showZone: vi.fn(),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    return {
        ...actual,
        zones: {
            ...actual.zones,
            create: mocks.addZone,
            update: mocks.updateZone,
            query: mocks.queryZones,
            show: mocks.showZone,
        },
    };
});
vi.mock('@placeos/cloud-uploads', () =>
    vi.importActual('@placeos/cloud-uploads/dist/index.es.js'),
);
vi.mock('../../app/common/notifications', () => ({
    notifyError: mocks.notifyError,
    notifySuccess: mocks.notifySuccess,
}));

describe('saving zones', () => {
    let fixture: ComponentFixture<ZoneFormComponent>;
    const dialog = {
        close: vi.fn(),
        disableClose: false,
        backdropClick: EMPTY,
        keydownEvents: EMPTY,
    };

    beforeEach(async () => {
        vi.resetAllMocks();
        dialog.disableClose = false;
        mocks.queryZones.mockResolvedValue(mockPage({ data: [] }));
        mocks.updateZone.mockResolvedValue(
            mockReply(newItem(Zone, { id: 'zone-1', name: 'Floor 1' })),
        );
        TestBed.configureTestingModule({
            imports: [ZoneFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                { provide: DialogRef, useValue: dialog },
                {
                    provide: DIALOG_DATA,
                    useValue: {
                        item: newItem(Zone, { id: 'zone-1', name: 'Floor 1' }),
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
            .controlValue.set(
                newItem(Zone, { id: 'building-1', name: 'Building' }),
            );
        await fixture.whenStable();
        await fixture.componentInstance.submit();
        expect(mocks.updateZone).toHaveBeenCalledExactlyOnceWith({
            id: 'zone-1',
            body: expect.objectContaining({
                name: 'Floor 1',
                parent_id: 'building-1',
            }),
        });
        expect(mocks.updateZone.mock.calls[0][0].body).not.toHaveProperty(
            'parent_zone',
        );
        expect(dialog.close).toHaveBeenCalledOnce();
    });

    it('saves an empty parent ID when the user removes the parent', async () => {
        fixture.componentInstance.form
            .parent_zone()
            .controlValue.set(newItem(Zone, { id: 'building-1' }));
        await fixture.whenStable();
        fixture.componentInstance.form.parent_zone().controlValue.set(null);
        await fixture.whenStable();
        await fixture.componentInstance.submit();
        expect(mocks.updateZone).toHaveBeenCalledWith({
            id: 'zone-1',
            body: expect.objectContaining({ parent_id: '' }),
        });
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
        // The modal shell keeps guarding Escape and backdrop clicks
        expect(dialog.disableClose).toBe(true);
        expect(dialog.close).not.toHaveBeenCalled();
        expect(mocks.notifyError).toHaveBeenCalled();
        expect(mocks.notifySuccess).not.toHaveBeenCalled();
        await fixture.componentInstance.submit();
        expect(mocks.updateZone).toHaveBeenCalledTimes(2);
        expect(dialog.close).toHaveBeenCalledOnce();
    });
});

describe('saving zones with a stored parent', () => {
    const dialog = {
        close: vi.fn(),
        disableClose: false,
        backdropClick: EMPTY,
        keydownEvents: EMPTY,
    };

    async function createForm() {
        TestBed.configureTestingModule({
            imports: [ZoneFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                { provide: DialogRef, useValue: dialog },
                {
                    provide: DIALOG_DATA,
                    useValue: {
                        item: newItem(Zone, {
                            id: 'zone-1',
                            name: 'Floor 1',
                            parent_id: 'building-1',
                        }),
                    },
                },
            ],
        });
        const fixture = TestBed.createComponent(ZoneFormComponent);
        await fixture.whenStable();
        return fixture;
    }

    beforeEach(() => {
        vi.resetAllMocks();
        mocks.queryZones.mockResolvedValue(mockPage({ data: [] }));
        mocks.updateZone.mockResolvedValue(
            mockReply(newItem(Zone, { id: 'zone-1' })),
        );
    });

    it('keeps the parent when saving before the parent loads', async () => {
        mocks.showZone.mockReturnValue(new Promise(() => undefined));
        const fixture = await createForm();
        await fixture.componentInstance.submit();
        expect(mocks.updateZone).toHaveBeenCalledWith({
            id: 'zone-1',
            body: expect.objectContaining({ parent_id: 'building-1' }),
        });
    });

    it('keeps a parent the user picks while the stored parent loads', async () => {
        let resolveParent: (reply: ReturnType<typeof mockReply<Zone>>) => void;
        mocks.showZone.mockReturnValue(
            new Promise((resolve) => (resolveParent = resolve)),
        );
        const fixture = await createForm();
        fixture.componentInstance.form
            .parent_zone()
            .controlValue.set(newItem(Zone, { id: 'building-2' }));
        await fixture.whenStable();
        resolveParent(mockReply(newItem(Zone, { id: 'building-1' })));
        await fixture.whenStable();
        expect(fixture.componentInstance.formModel().parent_zone?.id).toBe(
            'building-2',
        );
        await fixture.componentInstance.submit();
        expect(mocks.updateZone).toHaveBeenCalledWith({
            id: 'zone-1',
            body: expect.objectContaining({ parent_id: 'building-2' }),
        });
    });

    it('keeps the parent when the parent fails to load', async () => {
        mocks.showZone.mockRejectedValue(new Error('Forbidden'));
        const fixture = await createForm();
        await fixture.componentInstance.submit();
        expect(mocks.updateZone).toHaveBeenCalledWith({
            id: 'zone-1',
            body: expect.objectContaining({ parent_id: 'building-1' }),
        });
    });
});
