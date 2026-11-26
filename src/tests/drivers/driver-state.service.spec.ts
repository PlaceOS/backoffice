import { Dialog } from '@angular/cdk/dialog';
import {
    ApplicationRef,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { Driver, drivers, Module, modules, Settings } from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { newItem } from '../../app/common/placeos';
import { clearSupportModuleCache } from '../../app/common/support-access';
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
vi.mock('../../app/common/support-access', () => ({
    clearSupportModuleCache: vi.fn(),
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
                    activeOf: (type: string) =>
                        type === 'drivers' ? driver : null,
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

describe('driver modules', () => {
    const active = signal<Driver | null>(null);
    let navigation: Subject<NavigationEnd>;
    let service: DriverStateService;

    beforeEach(() => {
        vi.resetAllMocks();
        active.set(null);
        navigation = new Subject();
        vi.mocked(drivers.query).mockResolvedValue(
            mockReply([]) as Awaited<ReturnType<typeof drivers.query>>,
        );
        vi.mocked(drivers.readme).mockResolvedValue(mockReply(''));
        vi.mocked(modules.query).mockResolvedValue(
            mockPage({
                data: [newItem(Module, { id: 'mod-1' })],
                total: 10000,
            }),
        );
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                DriverStateService,
                { provide: Dialog, useValue: { open: mocks.open } },
                {
                    provide: ActiveItemService,
                    useValue: {
                        activeOf: (type: string) =>
                            type === 'drivers' ? active() : null,
                    },
                },
                {
                    provide: Router,
                    useValue: {
                        url: '/drivers/driver-1/about',
                        events: navigation,
                    },
                },
            ],
        });
        service = TestBed.inject(DriverStateService);
    });

    /** Show the tab at `url` and wait for the loads to finish */
    const navigate = async (url: string) => {
        navigation.next(new NavigationEnd(1, url, url));
        await TestBed.inject(ApplicationRef).whenStable();
    };

    it('reads only the total until the modules tab opens', async () => {
        active.set(newItem(Driver, { id: 'driver-1' }));
        await navigate('/drivers/driver-1/about');

        expect(vi.mocked(modules.query).mock.calls[0][0]).toEqual({
            driver_id: 'driver-1',
            limit: 1,
        });
        expect(service.modules_total()).toBe(10000);
        expect(service.modules()).toEqual([]);
    });

    it('loads every module page once the modules tab opens', async () => {
        vi.mocked(modules.query).mockResolvedValue(
            mockPage({
                data: [newItem(Module, { id: 'mod-1' })],
                total: 2,
                next: () => ({
                    data: [newItem(Module, { id: 'mod-2' })],
                    total: 2,
                }),
            }),
        );
        active.set(newItem(Driver, { id: 'driver-1' }));
        await navigate('/drivers/driver-1/about');
        // The About tab reads only the count
        expect(vi.mocked(modules.query).mock.calls.map(([q]) => q)).toEqual([
            { driver_id: 'driver-1', limit: 1 },
        ]);
        expect(service.modules()).toEqual([]);

        await navigate('/drivers/driver-1/modules');

        expect(service.modules().map(({ id }) => id)).toEqual([
            'mod-1',
            'mod-2',
        ]);
        expect(service.modules_total()).toBe(2);
    });

    it('stops the module load of a driver when another driver is selected', async () => {
        type ModulePage = Awaited<ReturnType<typeof modules.query>>;
        let release: (page: ModulePage) => void;
        const page = mockPage<Module[]>({ data: [], total: 0 });
        // The load of driver-1 stays pending until the test releases it
        vi.mocked(modules.query).mockImplementation((input) =>
            input.driver_id === 'driver-1'
                ? new Promise<ModulePage>((resolve) => (release = resolve))
                : Promise.resolve(page),
        );
        active.set(newItem(Driver, { id: 'driver-1' }));
        const url = '/drivers/driver-1/modules';
        navigation.next(new NavigationEnd(1, url, url));
        await vi.waitFor(() =>
            expect(modules.query).toHaveBeenCalledWith(
                { driver_id: 'driver-1', limit: 500 },
                expect.anything(),
            ),
        );
        const { signal: first } = vi.mocked(modules.query).mock.calls.at(-1)[1];
        expect(first.aborted).toBe(false);

        active.set(newItem(Driver, { id: 'driver-2' }));
        TestBed.tick();

        expect(first.aborted).toBe(true);
        release(page);
        await navigate('/drivers/driver-2/modules');
    });

    it('shows no module count when the count fails', async () => {
        vi.mocked(modules.query).mockRejectedValue(new Error('Offline'));
        active.set(newItem(Driver, { id: 'driver-1' }));
        await navigate('/drivers/driver-1/about');

        // The tab shows "?" for an unknown count, not 0
        expect(service.modules_total()).toBeUndefined();
    });

    it('does not load the modules again when a save gives a new driver object', async () => {
        active.set(newItem(Driver, { id: 'driver-1' }));
        await navigate('/drivers/driver-1/modules');
        const calls = vi.mocked(modules.query).mock.calls.length;

        active.set(newItem(Driver, { id: 'driver-1', name: 'Saved' }));
        await navigate('/drivers/driver-1/modules');

        expect(modules.query).toHaveBeenCalledTimes(calls);
    });

    it('clears the support group module list after it removes a module', async () => {
        mocks.confirm.mockResolvedValue({ reason: 'done', close: vi.fn() });
        vi.mocked(modules.destroy).mockResolvedValue(mockReply(undefined));
        active.set(newItem(Driver, { id: 'driver-1' }));

        await service.removeModule(newItem(Module, { id: 'mod-1' }));

        expect(clearSupportModuleCache).toHaveBeenCalledTimes(1);
    });
});
