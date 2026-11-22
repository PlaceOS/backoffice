import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { User } from '@placeos/ts-client';
import { CallFailed } from '@placeos/ts-client/compat';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { notify } from '../../app/common/notifications';
import { PlaceResource } from '../../app/common/types';
import { BulkItemModalComponent } from '../../app/overlays/bulk-item-modal/bulk-item-modal.component';
import { StatusListComponent } from '../../app/overlays/bulk-item-modal/status-list.component';

vi.mock('../../app/common/notifications', () => ({
    notify: vi.fn(),
    notifyError: vi.fn(),
    notifyWarn: vi.fn(),
}));

beforeEach(() => vi.clearAllMocks());

describe('bulk item review', () => {
    it('keeps the review step when a user row has no domain', async () => {
        const dialog = {
            close: vi.fn(),
            updateSize: vi.fn(),
            disableClose: false,
        };
        TestBed.configureTestingModule({
            imports: [BulkItemModalComponent],
            providers: [
                provideZonelessChangeDetection(),
                { provide: DialogRef, useValue: dialog },
                {
                    provide: DIALOG_DATA,
                    useValue: {
                        schema: User,
                        name: 'Users',
                        save: vi.fn(),
                    },
                },
            ],
        });
        const fixture = TestBed.createComponent(BulkItemModalComponent);
        const component = fixture.componentInstance;
        component.handleList([{ email: 'ops@example.com' }], true);
        await fixture.whenStable();

        component.showStatus();

        expect(component.validation_errors()).toEqual([
            'Row 1: Missing required field "authority_id"',
        ]);
        expect(component.flow_step()).toBe('list');
        expect(dialog.disableClose).toBe(false);
    });
});

describe('bulk item creation', () => {
    it('finishes after a failed save and emits the saved items in list order', async () => {
        const save = vi.fn(async (item: Record<string, unknown>) => {
            if (item.name === 'B') {
                throw new CallFailed({
                    kind: 'http',
                    status: 422,
                    message: null,
                    body: { message: 'Name taken' },
                });
            }
            // The first save finishes last
            if (item.name === 'A') await new Promise((r) => setTimeout(r, 5));
            return {
                ...item,
                id: `id-${item.name}`,
            } as unknown as PlaceResource;
        });
        // The virtual scroll list needs ResizeObserver, which jsdom lacks
        TestBed.configureTestingModule({
            imports: [StatusListComponent],
            providers: [provideZonelessChangeDetection()],
        }).overrideComponent(StatusListComponent, {
            set: { template: '', imports: [] },
        });
        const console_error = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        const fixture = TestBed.createComponent(StatusListComponent);
        const component = fixture.componentInstance;
        const done = new Promise((resolve) =>
            component.done.subscribe(resolve),
        );
        fixture.componentRef.setInput('save', save);
        fixture.componentRef.setInput('list', [
            { id: 'old-a', name: 'A' },
            { id: 'old-b', name: 'B' },
            // A blank cell, such as an empty capacity, gets the server default
            { id: 'old-c', name: 'C', capacity: '' },
        ]);

        expect(await done).toEqual([
            { id: 'id-A', name: 'A' },
            { id: 'id-C', name: 'C' },
        ]);
        // Each row saves as a new item, so no ID goes to the save
        expect(save.mock.calls.every(([item]) => !('id' in item))).toBe(true);
        expect(save.mock.calls[2][0]).toEqual({ name: 'C' });
        expect(component.is_done()).toBe(true);
        expect(component.completed_count()).toBe(2);
        expect(component.error_count()).toBe(1);
        expect(component.status().map((status) => status())).toEqual([
            'done',
            'Error: 422 request failed: Name taken',
            'done',
        ]);
        // The message of the server goes to the toast, not to the console
        expect(notify).toHaveBeenCalledWith(
            'error',
            'Error: 422 request failed: Name taken',
        );
        expect(JSON.stringify(console_error.mock.calls)).not.toContain(
            'Name taken',
        );
        console_error.mockRestore();
    });
});
