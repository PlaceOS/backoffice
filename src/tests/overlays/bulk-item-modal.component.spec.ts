import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceResource, PlaceUser } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { BulkItemModalComponent } from '../../app/overlays/bulk-item-modal/bulk-item-modal.component';
import { StatusListComponent } from '../../app/overlays/bulk-item-modal/status-list.component';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);
vi.mock('../../app/common/notifications', () => ({
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
                        constr: PlaceUser,
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
            if (item.name === 'B') throw new Error('Name taken');
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
        const fixture = TestBed.createComponent(StatusListComponent);
        const component = fixture.componentInstance;
        const done = new Promise((resolve) =>
            component.done.subscribe(resolve),
        );
        fixture.componentRef.setInput('save', save);
        fixture.componentRef.setInput('list', [
            { id: 'old-a', name: 'A' },
            { id: 'old-b', name: 'B' },
            { id: 'old-c', name: 'C' },
        ]);

        expect(await done).toEqual([
            { id: 'id-A', name: 'A' },
            { id: 'id-C', name: 'C' },
        ]);
        expect(save.mock.calls.map(([item]) => item.id)).toEqual(['', '', '']);
        expect(component.is_done()).toBe(true);
        expect(component.completed_count()).toBe(2);
        expect(component.error_count()).toBe(1);
        expect(component.status().map((status) => status())).toEqual([
            'done',
            'Error: Name taken',
            'done',
        ]);
    });
});
