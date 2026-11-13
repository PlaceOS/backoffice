import { Dialog } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceTrigger, PlaceZone } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { TriggerStateService } from '../../app/triggers/trigger-state.service';

const mocks = vi.hoisted(() => ({
    updateTrigger: vi.fn(),
    showZone: vi.fn(),
    updateZone: vi.fn(),
    removeSystemTrigger: vi.fn(),
    confirm: vi.fn(),
    replaceItem: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    updateTrigger: mocks.updateTrigger,
    showZone: mocks.showZone,
    updateZone: mocks.updateZone,
    removeSystemTrigger: mocks.removeSystemTrigger,
}));
vi.mock('../../app/common/item.service', () => ({
    ActiveItemService: class {},
}));
vi.mock('../../app/common/locale.service', () => ({
    i18n: (key: string) => key,
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('../../app/overlays/confirm-modal.component', () => ({
    openConfirmModal: mocks.confirm,
}));
vi.mock('../../app/ui/forms/trigger-action-modal.component', () => ({
    TriggerActionModalComponent: class {},
}));
vi.mock('../../app/ui/forms/trigger-condition-modal.component', () => ({
    TriggerConditionModalComponent: class {},
}));

describe('trigger actions and instances', () => {
    const trigger = new PlaceTrigger({
        id: 'template-1',
        actions: {
            functions: [
                { mod: 'Display_1', method: 'power_on' },
                { mod: 'Display_1', method: 'power_off' },
                { mod: 'Mixer_1', method: 'mute' },
            ],
            mailers: [
                { emails: ['ops@example.com'], content: 'Alert' },
                { emails: ['facilities@example.com'], content: 'Alert' },
            ],
        },
    });
    const [power_on, power_off, mute] = trigger.actions.functions;
    const [ops, facilities] = trigger.actions.mailers;
    const saved = new PlaceTrigger({ id: 'template-1' });
    let service: TriggerStateService;

    beforeEach(() => {
        vi.resetAllMocks();
        mocks.confirm.mockResolvedValue({
            reason: 'done',
            close: vi.fn(),
            loading: vi.fn(),
        });
        mocks.updateTrigger.mockResolvedValue(saved);
        mocks.updateZone.mockResolvedValue(new PlaceZone());
        mocks.removeSystemTrigger.mockResolvedValue(undefined);
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                TriggerStateService,
                {
                    provide: ActiveItemService,
                    useValue: {
                        item: signal(null),
                        active_item: trigger,
                        replaceItem: mocks.replaceItem,
                    },
                },
                { provide: Dialog, useValue: {} },
            ],
        });
        service = TestBed.inject(TriggerStateService);
    });

    it('saves the new function order and keeps the mailers', async () => {
        await service.reorderAction('function', 0, 2);
        expect(mocks.updateTrigger).toHaveBeenCalledExactlyOnceWith(
            'template-1',
            expect.objectContaining({
                actions: {
                    functions: [power_off, mute, power_on],
                    mailers: [ops, facilities],
                },
            }),
        );
        expect(mocks.replaceItem).toHaveBeenCalledExactlyOnceWith(saved);
    });

    it('removes only the selected mailer', async () => {
        await service.removeAction({ ...facilities });
        expect(mocks.updateTrigger).toHaveBeenCalledExactlyOnceWith(
            'template-1',
            expect.objectContaining({
                actions: {
                    functions: [power_on, power_off, mute],
                    mailers: [ops],
                },
            }),
        );
        expect(mocks.replaceItem).toHaveBeenCalledExactlyOnceWith(saved);
    });

    it('removes a zone instance from the zone trigger list and keeps other triggers', async () => {
        mocks.showZone.mockResolvedValue(
            new PlaceZone({
                id: 'zone-1',
                triggers: ['other-trigger', 'template-1'],
            }),
        );
        await service.removeTriggerFromParent(
            new PlaceTrigger({ id: 'instance-1', zone_id: 'zone-1' }),
        );
        expect(mocks.updateZone).toHaveBeenCalledExactlyOnceWith(
            'zone-1',
            expect.objectContaining({ triggers: ['other-trigger'] }),
        );
        expect(mocks.removeSystemTrigger).not.toHaveBeenCalled();
    });

    it('removes a system instance by its instance ID', async () => {
        await service.removeTriggerFromParent(
            new PlaceTrigger({ id: 'instance-1', control_system_id: 'sys-1' }),
        );
        expect(mocks.removeSystemTrigger).toHaveBeenCalledExactlyOnceWith(
            'sys-1',
            'instance-1',
        );
        expect(mocks.showZone).not.toHaveBeenCalled();
        expect(mocks.updateZone).not.toHaveBeenCalled();
    });
});
