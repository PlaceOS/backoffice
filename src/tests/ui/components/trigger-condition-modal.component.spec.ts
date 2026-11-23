import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Trigger, triggers } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { describe, expect, it, vi } from 'vitest';
import { newItem } from '../../../app/common/placeos';
import { TriggerConditionModalComponent } from '../../../app/ui/forms/trigger-condition-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

vi.mock('../../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('TriggerConditionModalComponent', () => {
    it('saves an edited time condition in seconds without CRON fields', async () => {
        const trigger = newItem(Trigger, {
            id: 'trigger-1',
            conditions: {
                comparisons: [{ left: true, operator: 'equal', right: true }],
                time_dependents: [
                    { type: 'cron', cron: '0 9 * * *', timezone: 'UTC' },
                    { type: 'at', time: 1_700_000_000 },
                ],
            },
        });
        vi.mocked(triggers.update).mockResolvedValue(mockReply(trigger));
        // The modal gets the conditions as the server sent them
        const [comparison] = trigger.conditions.comparisons;
        const [cron, at_time] = trigger.conditions.time_dependents;
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: DialogRef, useValue: { close: vi.fn() } },
                {
                    provide: DIALOG_DATA,
                    useValue: { trigger, condition: at_time },
                },
            ],
        });
        const modal = TestBed.runInInjectionContext(
            () => new TriggerConditionModalComponent(),
        );
        modal.formModel.update((model) => ({
            ...model,
            time: 1_800_000_000_400,
            cron: '* * * * *',
            timezone: 'Australia/Sydney',
        }));

        await modal.save();

        expect(triggers.update).toHaveBeenCalledWith({
            id: 'trigger-1',
            body: expect.objectContaining({
                conditions: {
                    comparisons: [comparison],
                    time_dependents: [
                        cron,
                        { type: 'at', time: 1_800_000_000 },
                    ],
                },
            }),
        });
    });
});
