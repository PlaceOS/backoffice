import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogState,
} from '@angular/material/dialog';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DialogEvent } from '../../app/common/types';
import { DuplicateModalComponent } from '../../app/overlays/duplicate-modal.component';

class Item {
    id: string;
    name: string;
    constructor(data: Partial<Item> = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
    }
}

describe('DuplicateModalComponent', () => {
    afterEach(() => vi.useRealTimers());

    it('saves numbered copies without the source id and emits them', async () => {
        vi.useFakeTimers();
        const save = vi.fn(async (item: Item) => ({ ...item, id: 'new' }));
        TestBed.configureTestingModule({
            imports: [DuplicateModalComponent],
            providers: [
                provideZonelessChangeDetection(),
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        item: new Item({ id: 'sys-1', name: 'Room' }),
                        save,
                    },
                },
                {
                    provide: MatDialogRef,
                    useValue: {
                        getState: () => MatDialogState.OPEN,
                        close: vi.fn(),
                    },
                },
            ],
        });
        const component = TestBed.createComponent(
            DuplicateModalComponent,
        ).componentInstance;
        const events: DialogEvent[] = [];
        component.event.subscribe((event) => events.push(event));
        component.times = 2;

        await component.duplicate();

        const saved = save.mock.calls.map(([item]) => item);
        expect(saved.map((item) => [item.id, item.name])).toEqual([
            ['', 'Room (1)'],
            ['', 'Room (2)'],
        ]);
        expect(saved[0]).toBeInstanceOf(Item);
        expect(events).toEqual([
            {
                reason: 'done',
                metadata: [
                    { id: 'new', name: 'Room (1)' },
                    { id: 'new', name: 'Room (2)' },
                ],
            },
        ]);
    });
});
