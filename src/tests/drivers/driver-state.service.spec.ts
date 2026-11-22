import { Dialog } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Driver, drivers, Settings } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { newItem } from '../../app/common/placeos';
import { DriverStateService } from '../../app/drivers/driver-state.service';

const mocks = vi.hoisted(() => ({ confirm: vi.fn() }));
vi.mock('@placeos/ts-client', { spy: true });
vi.mock('../../app/common/item.service', () => ({
    ActiveItemService: class {},
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifyInfo: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('../../app/overlays/confirm-modal.component', () => ({
    openConfirmModal: mocks.confirm,
}));

describe('driver update', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        mocks.confirm.mockResolvedValue({
            reason: 'done',
            close: vi.fn(),
            loading: vi.fn(),
        });
        vi.mocked(drivers.query).mockResolvedValue(
            mockReply([]) as Awaited<ReturnType<typeof drivers.query>>,
        );
    });

    it('sends only the new commit', async () => {
        const driver = {
            ...newItem(Driver, {
                id: 'driver-1',
                name: 'Display',
                update_available: true,
                update_info: { commit: 'abc123' },
            }),
            settings: [newItem(Settings, { encryption_level: 0 })],
        };
        vi.mocked(drivers.update).mockResolvedValue(mockReply(driver));
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                DriverStateService,
                { provide: Dialog, useValue: {} },
                {
                    provide: ActiveItemService,
                    useValue: {
                        active_item: driver,
                        item: signal(driver),
                        replaceItem: vi.fn(),
                    },
                },
            ],
        });

        await TestBed.inject(DriverStateService).updateDriver();

        // Only the commit: the copy of the driver can be older than the server
        expect(vi.mocked(drivers.update).mock.calls[0][0].body).toEqual({
            commit: 'abc123',
        });
    });
});
