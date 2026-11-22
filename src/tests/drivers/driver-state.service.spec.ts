import { Dialog } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Driver, drivers, Settings } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { newItem } from '../../app/common/placeos';
import { DriverStateService } from '../../app/drivers/driver-state.service';

const mocks = vi.hoisted(() => ({ confirm: vi.fn(), open: vi.fn() }));
vi.mock('@placeos/ts-client', { spy: true });
vi.mock('../../app/common/item.service', () => ({
    ActiveItemService: class {},
}));
vi.mock('../../app/common/notifications', () => ({
    // Open the error view at once, as a click on the toast action does
    notifyError: vi.fn(
        (_message: string, _action?: string, open?: () => void) => open?.(),
    ),
    notifyInfo: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('../../app/overlays/confirm-modal.component', () => ({
    openConfirmModal: mocks.confirm,
}));

/** The service, with `driver` as the active item */
function service(driver: Driver) {
    TestBed.configureTestingModule({
        providers: [
            provideZonelessChangeDetection(),
            DriverStateService,
            { provide: Dialog, useValue: { open: mocks.open } },
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
    return TestBed.inject(DriverStateService);
}

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

        await service(driver).updateDriver();

        // Only the commit: the copy of the driver can be older than the server
        expect(vi.mocked(drivers.update).mock.calls[0][0].body).toEqual({
            commit: 'abc123',
        });
    });
});

describe('driver recompile', () => {
    it('shows the compiler output that the API sends as plain text', async () => {
        mocks.confirm.mockResolvedValue({
            reason: 'done',
            close: vi.fn(),
            loading: vi.fn(),
        });
        vi.mocked(drivers.recompile).mockResolvedValue({
            ok: false,
            error: {
                kind: 'http',
                status: 500,
                message: null,
                body: null,
                text: 'error: undefined method `power`',
            },
        });

        await service(newItem(Driver, { id: 'driver-1' })).recompileDriver();

        expect(mocks.open.mock.calls[0][1]).toEqual({
            data: { content: 'error: undefined method `power`' },
        });
    });
});
