import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceTrigger, updateTrigger } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { notifyError } from '../../../app/common/notifications';
import { TriggerActionModalComponent } from '../../../app/ui/forms/trigger-action-modal.component';

vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<object>('@placeos/ts-client/dist/index.es.js')),
    updateTrigger: vi.fn(),
}));

vi.mock('../../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('TriggerActionModalComponent', () => {
    it('does not save an edited mailer that was removed elsewhere', async () => {
        const trigger = {
            id: 'trigger-1',
            actions: {
                functions: [],
                mailers: [{ emails: ['other@example.com'], content: 'Other' }],
            },
        } as unknown as PlaceTrigger;
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: DialogRef, useValue: { close: vi.fn() } },
                {
                    provide: DIALOG_DATA,
                    useValue: {
                        trigger,
                        action: { emails: ['old@example.com'], content: 'Old' },
                    },
                },
            ],
        });
        const modal = TestBed.runInInjectionContext(
            () => new TriggerActionModalComponent(),
        );
        modal.formModel.update((model) => ({ ...model, content: 'New' }));

        await modal.save();

        expect(updateTrigger).not.toHaveBeenCalled();
        expect(notifyError).toHaveBeenCalledWith(
            expect.stringContaining('changed or removed elsewhere'),
        );
    });
});
