import { Dialog } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceModule } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { ModuleStateService } from '../../app/modules/module-state.service';

const mocks = vi.hoisted(() => ({
    startModule: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    ...mocks,
}));
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
        const module_a = new PlaceModule({ id: 'mod-a' });
        const module_b = new PlaceModule({ id: 'mod-b' });
        const state = { item: signal(null), active_item: module_a };
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                ModuleStateService,
                { provide: ActiveItemService, useValue: state },
                { provide: Dialog, useValue: {} },
            ],
        });
        let resolve_power: () => void;
        mocks.startModule.mockReturnValue(
            new Promise<void>((resolve) => (resolve_power = resolve)),
        );

        const request = TestBed.inject(ModuleStateService).toggleModuleState();
        state.active_item = module_b;
        resolve_power();
        await request;

        expect(mocks.startModule).toHaveBeenCalledWith('mod-a');
        expect(module_a.running).toBe(true);
        expect(module_b.running).toBe(false);
    });
});
