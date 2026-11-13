import { DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceDriver } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { notifyError, notifySuccess } from '../../app/common/notifications';
import { DriverUpdateListModalComponent } from '../../app/drivers/driver-update-list-modal.component';

const mocks = vi.hoisted(() => ({
    queryDrivers: vi.fn(),
    updateDriver: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    ...mocks,
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

/** Driver with an update from `<id>-old` to `<id>-new` */
const driver = (id: string) =>
    new PlaceDriver({
        id,
        name: id,
        commit: `${id}-old`,
        update_info: {
            commit: `${id}-new`,
            message: '',
            author: '',
            date: '2026-01-01T00:00:00Z',
        },
    });

describe('DriverUpdateListModalComponent', () => {
    let fixture: ComponentFixture<DriverUpdateListModalComponent>;
    let dialog_ref: { close: () => void; disableClose: boolean };

    beforeEach(async () => {
        vi.resetAllMocks();
        mocks.queryDrivers.mockResolvedValue({
            data: ['drv-1', 'drv-2', 'drv-3'].map(driver),
            total: 3,
        });
        dialog_ref = { close: vi.fn(), disableClose: false };
        TestBed.configureTestingModule({
            imports: [DriverUpdateListModalComponent],
            providers: [
                provideZonelessChangeDetection(),
                { provide: DialogRef, useValue: dialog_ref },
            ],
        });
        fixture = TestBed.createComponent(DriverUpdateListModalComponent);
        await fixture.whenStable();
    });

    it('updates only the selected drivers to their advertised commit', async () => {
        mocks.updateDriver.mockResolvedValue({});
        const component = fixture.componentInstance;
        component.toggleDriver('drv-1', true);
        component.toggleDriver('drv-3', true);

        await component.updateDrivers();

        expect(
            mocks.updateDriver.mock.calls.map(([id, item]) => [
                id,
                item.commit,
            ]),
        ).toEqual([
            ['drv-1', 'drv-1-new'],
            ['drv-3', 'drv-3-new'],
        ]);
    });

    it('reports failed updates and keeps the dialog open', async () => {
        mocks.updateDriver.mockImplementation(async (id: string) => {
            if (id === 'drv-2') throw new Error('Build failed');
            return {};
        });
        const component = fixture.componentInstance;
        component.toggleAll(true);

        await component.updateDrivers();

        expect(notifyError).toHaveBeenCalledWith(
            expect.stringContaining('Failed to update 1 of 3 drivers'),
        );
        expect(notifySuccess).not.toHaveBeenCalled();
        expect(dialog_ref.disableClose).toBe(false);
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
