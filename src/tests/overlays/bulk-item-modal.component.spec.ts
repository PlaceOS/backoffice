import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { System, User, Zone } from '@placeos/ts-client';
import { CallFailed } from '@placeos/ts-client/compat';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LocaleService } from '../../app/common/locale.service';
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

describe('bulk item field types', () => {
    /** The modal for `schema`, with the save that it calls for each row */
    function modal(schema: typeof Zone | typeof System) {
        const save = vi.fn(async (_: Record<string, unknown>) => ({}));
        TestBed.configureTestingModule({
            imports: [BulkItemModalComponent],
            providers: [
                provideZonelessChangeDetection(),
                {
                    provide: DialogRef,
                    useValue: { close: vi.fn(), updateSize: vi.fn() },
                },
                {
                    provide: DIALOG_DATA,
                    useValue: { schema, name: 'Items', save },
                },
            ],
        });
        const component = TestBed.createComponent(
            BulkItemModalComponent,
        ).componentInstance;
        return { component, save };
    }

    it('saves text cells as the number and list fields of the schema', async () => {
        const { component, save } = modal(Zone);

        await component.save({
            name: 'L1',
            capacity: '12',
            tags: 'North Wing, Level 2',
            triggers: '[]',
            code: '007',
        });

        expect(save).toHaveBeenCalledWith({
            name: 'L1',
            capacity: 12,
            tags: ['North Wing', 'Level 2'],
            triggers: [],
            code: '007',
        });
    });

    it('keeps a system modules cell as text for the system save', async () => {
        const { component, save } = modal(System);

        await component.save({ name: 'Room', modules: 'mod-1 driver-logic' });

        // The system save splits it into module and driver ids
        expect(save).toHaveBeenCalledWith({
            name: 'Room',
            modules: 'mod-1 driver-logic',
        });
    });
});

describe('bulk item creation', () => {
    afterEach(() => vi.unstubAllGlobals());

    /** The rendered status list of `list`, which calls `save` for each row */
    async function statusList(
        save: (_: Record<string, unknown>) => Promise<unknown>,
        list: Record<string, unknown>[],
    ) {
        // The virtual scroll list needs ResizeObserver, which jsdom lacks
        vi.stubGlobal(
            'ResizeObserver',
            class {
                public observe() {
                    // Not needed in these tests
                }
                public disconnect() {
                    // Not needed in these tests
                }
            },
        );
        TestBed.configureTestingModule({
            imports: [StatusListComponent],
            providers: [provideZonelessChangeDetection()],
        });
        // The text shows in English once the translations load
        await TestBed.inject(LocaleService).ready;
        const fixture = TestBed.createComponent(StatusListComponent);
        const component = fixture.componentInstance;
        const done = new Promise((resolve) =>
            component.done.subscribe(resolve),
        );
        fixture.componentRef.setInput('save', save);
        fixture.componentRef.setInput('list', list);
        return { fixture, component, done };
    }

    it('shows a created row with warnings as created, with the reason', async () => {
        const save = vi.fn(async () => ({
            id: 'sys-1',
            name: 'Room',
            save_warning: 'Start failed',
        }));

        const { fixture, component, done } = await statusList(save, [
            { name: 'Room' },
        ]);

        // The system is kept as saved, so it is not created again
        expect(await done).toEqual([expect.objectContaining({ id: 'sys-1' })]);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        // The summary counts the warning and does not show all as clean
        expect(element.textContent).toContain(
            '1 created, 1 with warnings, 0 failed',
        );
        expect(component.status()[0]()).toEqual({
            state: 'warning',
            message: 'COMMON.BULK_SAVE_WARNING',
        });
    });

    it('finishes after a failed save and emits the saved items in list order', async () => {
        const save = vi.fn(async (item: Record<string, unknown>) => {
            if (item.name === 'B') {
                throw new CallFailed({
                    kind: 'http',
                    status: 422,
                    message: null,
                    body: { message: 'Name taken' },
                    text: null,
                });
            }
            // The first save finishes last
            if (item.name === 'A') await new Promise((r) => setTimeout(r, 5));
            return {
                ...item,
                id: `id-${item.name}`,
            } as unknown as PlaceResource;
        });
        const console_error = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        const { component, done } = await statusList(save, [
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
            { state: 'done' },
            {
                state: 'error',
                message: 'Error: 422 request failed: Name taken',
            },
            { state: 'done' },
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
