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

describe('ModuleStateService', () => {
    it('changes the power state of the module the request started for', async () => {
        const module_a = newItem(Module, { id: 'mod-a', running: false });
        const module_b = newItem(Module, { id: 'mod-b', running: false });
        const state = { active: module_a, activeOf: () => state.active };
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
        state.active = module_b;
        resolve_power();
        await request;

        expect(modules.start).toHaveBeenCalledWith({ id: 'mod-a' });
        expect(module_a.running).toBe(true);
        expect(module_b.running).toBe(false);
    });
});
