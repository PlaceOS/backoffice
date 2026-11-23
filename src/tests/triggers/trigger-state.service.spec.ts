import { Dialog } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    system_triggers,
    Trigger,
    TriggerInstance,
    triggers,
    Zone,
    zones,
} from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { newItem } from '../../app/common/placeos';
import { TriggerStateService } from '../../app/triggers/trigger-state.service';

const mocks = vi.hoisted(() => ({
    confirm: vi.fn(),
    replaceItem: vi.fn(),
}));
vi.mock('@placeos/ts-client', { spy: true });
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
    const trigger = newItem(Trigger, {
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
    const saved = newItem(Trigger, { id: 'template-1' });
    let service: TriggerStateService;

    beforeEach(() => {
        vi.resetAllMocks();
        mocks.confirm.mockResolvedValue({
            reason: 'done',
            close: vi.fn(),
            loading: vi.fn(),
        });
        vi.mocked(triggers.update).mockResolvedValue(mockReply(saved));
        vi.mocked(zones.update).mockResolvedValue(mockReply(newItem(Zone)));
        vi.mocked(system_triggers.destroy).mockResolvedValue(mockReply(''));
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                TriggerStateService,
                {
                    provide: ActiveItemService,
                    useValue: {
                        activeOf: (type: string) =>
                            type === 'triggers' ? trigger : null,
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
        expect(triggers.update).toHaveBeenCalledExactlyOnceWith({
            id: 'template-1',
            body: expect.objectContaining({
                actions: {
                    functions: [power_off, mute, power_on],
                    mailers: [ops, facilities],
                },
            }),
        });
        expect(mocks.replaceItem).toHaveBeenCalledExactlyOnceWith(saved);
    });

    it('removes only the selected mailer', async () => {
        await service.removeAction({ ...facilities });
        expect(triggers.update).toHaveBeenCalledExactlyOnceWith({
            id: 'template-1',
            body: expect.objectContaining({
                actions: {
                    functions: [power_on, power_off, mute],
                    mailers: [ops],
                },
            }),
        });
        expect(mocks.replaceItem).toHaveBeenCalledExactlyOnceWith(saved);
    });

    it('removes a zone instance from the zone trigger list and keeps other triggers', async () => {
        vi.mocked(zones.show).mockResolvedValue(
            mockReply(
                newItem(Zone, {
                    id: 'zone-1',
                    triggers: ['other-trigger', 'template-1'],
                }),
            ),
        );
        await service.removeTriggerFromParent(
            newItem(TriggerInstance, { id: 'instance-1', zone_id: 'zone-1' }),
        );
        expect(zones.update).toHaveBeenCalledExactlyOnceWith({
            id: 'zone-1',
            body: { triggers: ['other-trigger'] },
        });
        expect(system_triggers.destroy).not.toHaveBeenCalled();
    });

    it('removes a system instance by its instance ID', async () => {
        await service.removeTriggerFromParent(
            newItem(TriggerInstance, {
                id: 'instance-1',
                control_system_id: 'sys-1',
            }),
        );
        expect(system_triggers.destroy).toHaveBeenCalledExactlyOnceWith({
            sys_id: 'sys-1',
            trig_id: 'instance-1',
        });
        expect(zones.show).not.toHaveBeenCalled();
        expect(zones.update).not.toHaveBeenCalled();
    });
});
