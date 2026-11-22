import { Dialog } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Module, modules } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { newItem } from '../../app/common/placeos';
import { ModuleStateService } from '../../app/modules/module-state.service';

vi.mock('@placeos/ts-client', { spy: true });
vi.mock('../../app/common/item.service', () => ({
    ActiveItemService: class {},
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('../../app/common/support-access', () => ({
    querySupportSystems: vi.fn(),
}));
vi.mock('../../app/overlays/view-response-modal.component', () => ({
    ViewResponseModalComponent: class {},
}));

/** Start the power request of `module_a`, then make `active_after` active */
async function startModule(active_after: (module_a: Module) => Module | null) {
    const module_a = newItem(Module, { id: 'mod-a', running: false });
    const state = {
        active: module_a as Module | null,
        activeOf: () => state.active,
        replaceItem: vi.fn(),
    };
    TestBed.configureTestingModule({
        providers: [
            provideZonelessChangeDetection(),
            ModuleStateService,
            { provide: ActiveItemService, useValue: state },
            { provide: Dialog, useValue: {} },
        ],
    });
    let resolve_power: () => void;
    vi.mocked(modules.start).mockReturnValue(
        new Promise(
            (resolve) => (resolve_power = () => resolve(mockReply(''))),
        ),
    );

    const request = TestBed.inject(ModuleStateService).toggleModuleState();
    state.active = active_after(module_a);
    resolve_power();
    await request;
    expect(modules.start).toHaveBeenCalledWith({ id: 'mod-a' });
    return { module_a, state };
}

describe('ModuleStateService', () => {
    it('shows the new power state as a new copy of the current module', async () => {
        const { module_a, state } = await startModule((module_a) => ({
            ...module_a,
            custom_name: 'Renamed',
        }));

        expect(state.replaceItem).toHaveBeenCalledWith(
            expect.objectContaining({
                id: 'mod-a',
                custom_name: 'Renamed',
                running: true,
            }),
        );
        expect(module_a.running).toBe(false);
    });

    it.each([
        ['another module', () => newItem(Module, { id: 'mod-b' })],
        ['another section', () => null],
    ])(
        'does not change the active item when %s is active at the reply',
        async (_, active_after) => {
            const { state } = await startModule(active_after);
            expect(state.replaceItem).not.toHaveBeenCalled();
        },
    );
});
