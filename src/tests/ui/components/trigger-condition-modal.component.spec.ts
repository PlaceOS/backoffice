import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceTrigger, updateTrigger } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { TriggerConditionModalComponent } from '../../../app/ui/forms/trigger-condition-modal.component';

vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<object>('@placeos/ts-client/dist/index.es.js')),
    updateTrigger: vi.fn((_: string, trigger: PlaceTrigger) =>
        Promise.resolve(trigger),
    ),
}));

vi.mock('../../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('TriggerConditionModalComponent', () => {
    it('saves an edited time condition in seconds without CRON fields', async () => {
        const comparison = { left: true, operator: 'equal', right: true };
        const cron = { type: 'cron', cron: '0 9 * * *', timezone: 'UTC' };
        const at_time = { type: 'at', time: 1_700_000_000 };
        const trigger = {
            id: 'trigger-1',
            conditions: {
                comparisons: [comparison],
                time_dependents: [cron, at_time],
            },
        } as unknown as PlaceTrigger;
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

        expect(updateTrigger).toHaveBeenCalledWith(
            'trigger-1',
            expect.objectContaining({
                conditions: {
                    comparisons: [comparison],
                    time_dependents: [
                        cron,
                        { type: 'at', time: 1_800_000_000 },
                    ],
                },
            }),
        );
    });
});
