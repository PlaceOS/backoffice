import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    type Driver,
    drivers,
    edges,
    Module,
    modules,
    Settings,
    settings,
    System,
    systems,
} from '@placeos/ts-client';
import {
    mockPage,
    mockReply,
    PlaceDriverRole,
} from '@placeos/ts-client/compat';
import { EMPTY } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { ModuleFormComponent } from '../../app/modules/module-form.component';

let resolve_system: (system: System) => void;

vi.mock('@placeos/ts-client', { spy: true });

/** Body of the first `modules.create` call */
const createdBody = () => vi.mocked(modules.create).mock.calls[0][0].body;

beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(modules.create).mockResolvedValue(
        mockReply(newItem(Module, { id: 'mod-1', name: 'New module' })),
    );
    vi.mocked(modules.update).mockResolvedValue(mockReply(newItem(Module)));
    vi.mocked(settings.create).mockResolvedValue(mockReply(newItem(Settings)));
    vi.mocked(drivers.query).mockResolvedValue(mockPage({ data: [] }));
    vi.mocked(systems.query).mockResolvedValue(mockPage({ data: [] }));
    vi.mocked(edges.query).mockResolvedValue(mockPage({ data: [] }));
    vi.mocked(systems.show).mockImplementation(
        () =>
            new Promise((resolve) => {
                resolve_system = (system) => resolve(mockReply(system));
            }),
    );
});

vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

describe('ModuleFormComponent', () => {
    let fixture: ComponentFixture<ModuleFormComponent>;

    // A logic module as `modules.show` returns it, without `control_system`
    const item = newItem(Module, {
        id: 'mod-1',
        name: 'A Module',
        role: 99,
        driver_id: 'driver-1',
        control_system_id: 'sys-1',
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ModuleFormComponent],
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
                { provide: DIALOG_DATA, useValue: { item } },
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(ModuleFormComponent);
    });

    const systemInput = () =>
        fixture.nativeElement.querySelector(
            'item-search-field input',
        ) as HTMLInputElement;

    it('should render immediately without waiting for the system to load', () => {
        fixture.detectChanges();
        expect(systemInput()).toBeTruthy();
    });

    it('should show the system name once loaded', async () => {
        fixture.detectChanges();
        await sleep(10);
        resolve_system(newItem(System, { id: 'sys-1', name: 'Test System' }));
        await sleep(400);
        fixture.detectChanges();
        expect(systemInput().value).toBe('Test System');
    });

    it('should hide connection fields for logic modules', () => {
        fixture.detectChanges();
        const text = fixture.nativeElement.textContent;
        expect(text).not.toContain('MODULES.FIELD_IP');
        expect(text).not.toContain('MODULES.PORT_NUMBER');
        expect(text).not.toContain('COMMON.TLS');
        expect(text).not.toContain('COMMON.UDP');
    });

    it('should keep control_system_id while the system is loading', async () => {
        fixture.detectChanges();
        await sleep(10);
        expect(fixture.componentInstance.formModel().control_system_id).toBe(
            'sys-1',
        );
    });
});

describe('creating a module', () => {
    let fixture: ComponentFixture<ModuleFormComponent>;

    // A new module from a system page, with the settings the item service adds
    const item = {
        ...newItem(Module, {
            role: 99,
            driver_id: 'driver-1',
            control_system_id: 'sys-1',
            control_system: { name: 'Test System', zone_data: [] },
        }),
        settings: [0, 1, 2, 3].map((encryption_level) =>
            newItem(Settings, { encryption_level }),
        ),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ModuleFormComponent],
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
                { provide: DIALOG_DATA, useValue: { item } },
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(ModuleFormComponent);
    });

    it('should not create settings from the module settings collection', async () => {
        await fixture.whenStable();
        await fixture.componentInstance.submit();

        expect(modules.create).toHaveBeenCalledOnce();
        expect(createdBody()).not.toHaveProperty('settings');
        expect(settings.create).not.toHaveBeenCalled();
    });

    it('should retain the control system when creating a logic module', async () => {
        await fixture.whenStable();
        await fixture.componentInstance.submit();

        expect(createdBody()).toMatchObject({ control_system_id: 'sys-1' });
    });

    it('should keep user edits after applying driver defaults', async () => {
        const instance = fixture.componentInstance;
        instance.formModel.update((value) => ({
            ...value,
            driver: {
                id: 'driver-device',
                name: 'Device driver',
                role: PlaceDriverRole.Device,
                default_uri: 'tcp://default',
                default_port: 4999,
            } as Driver,
        }));
        await fixture.whenStable();
        expect(instance.formModel()).toMatchObject({
            driver_id: 'driver-device',
            name: 'Device driver',
            uri: 'tcp://default',
            port: 4999,
        });

        instance.formModel.update((value) => ({
            ...value,
            name: 'Custom',
            uri: 'tcp://custom',
            port: 1234,
        }));
        await fixture.whenStable();
        expect(instance.formModel()).toMatchObject({
            name: 'Custom',
            uri: 'tcp://custom',
            port: 1234,
        });
    });

    it.each([
        PlaceDriverRole.Device,
        PlaceDriverRole.SSH,
        PlaceDriverRole.Service,
        PlaceDriverRole.Websocket,
    ])(
        'should omit the control system when creating a module with role %s',
        async (role) => {
            fixture.componentInstance.formModel.update((value) => ({
                ...value,
                driver: {
                    id: 'driver-non-logic',
                    name: 'Non-logic driver',
                    role,
                    default_uri: 'https://example.com',
                    default_port: 4999,
                } as Driver,
                ip: '10.0.0.2',
                port: 4999,
            }));
            await fixture.whenStable();

            await fixture.componentInstance.submit();

            expect(modules.create).toHaveBeenCalledOnce();
            expect(createdBody()).toMatchObject({ role });
            expect(createdBody()).not.toHaveProperty('control_system_id');
        },
    );
});
