import { TestBed } from '@angular/core/testing';
import { root, Zone, zones } from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { of } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
const { fromV1Mock } = await vi.hoisted(
    () => import('@placeos/ts-client/compat'),
);

import { Dialog } from '@angular/cdk/dialog';
import { PlaceDatabaseDetailsComponent } from '../../app/admin/database-details.component';
import { downloadFile, parseCSV } from '../../app/common/general';
import {
    notifyError,
    notifyInfo,
    notifySuccess,
} from '../../app/common/notifications';
import { newItem } from '../../app/common/placeos';
import { openConfirmModal } from '../../app/overlays/confirm-modal.component';

// Keep the schemas, which `toBody` reads
vi.mock('@placeos/ts-client', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    zones: {
        create: vi.fn(fromV1Mock(undefined, ['body'])),
        query: vi.fn(fromV1Mock(undefined, ['...'], 'page')),
        show: vi.fn(fromV1Mock(undefined, ['id', '...'])),
    },
    root: {
        sourceResync: vi.fn(fromV1Mock(undefined, ['clear'])),
        sourceResyncStatus: vi.fn(fromV1Mock(undefined, [])),
    },
}));
vi.mock('../../app/common/general', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    downloadFile: vi.fn(),
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifyInfo: vi.fn(),
    notifySuccess: vi.fn(),
    notifyWarn: vi.fn(),
}));
vi.mock('../../app/overlays/confirm-modal.component', () => ({
    openConfirmModal: vi.fn(),
}));

const status = (state: string, extra: Record<string, unknown> = {}) =>
    ({
        state,
        clear: false,
        cleared: 0,
        metadata: 0,
        ...extra,
    }) as any;

describe('Database details: MQTT re-sync', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers();
        vi.mocked(root.sourceResyncStatus).mockResolvedValue(
            mockReply(status('idle')),
        );
    });

    afterEach(() => {
        TestBed.resetTestingModule();
        vi.useRealTimers();
    });

    async function createComponent() {
        await TestBed.configureTestingModule({
            imports: [PlaceDatabaseDetailsComponent],
            providers: [{ provide: Dialog, useValue: { open: vi.fn() } }],
        }).compileComponents();
        const fixture = TestBed.createComponent(PlaceDatabaseDetailsComponent);
        fixture.detectChanges();
        await vi.advanceTimersByTimeAsync(0);
        fixture.detectChanges();
        return fixture;
    }

    const buttons = (fixture: any) => ({
        resync: fixture.nativeElement.querySelector(
            '[mqtt-resync-button]',
        ) as HTMLButtonElement,
        clear: fixture.nativeElement.querySelector(
            '[mqtt-clear-button]',
        ) as HTMLButtonElement,
    });

    it('re-syncs without asking, and follows it until it finishes', async () => {
        const fixture = await createComponent();
        vi.mocked(root.sourceResync).mockResolvedValue(
            mockReply(status('resyncing')),
        );
        vi.mocked(root.sourceResyncStatus).mockResolvedValue(
            mockReply(status('resyncing')),
        );

        buttons(fixture).resync.click();
        await vi.advanceTimersByTimeAsync(0);
        fixture.detectChanges();

        expect(openConfirmModal).not.toHaveBeenCalled();
        expect(root.sourceResync).toHaveBeenCalledWith({ clear: false });
        expect(buttons(fixture).resync.disabled).toBe(true);
        expect(buttons(fixture).clear.disabled).toBe(true);

        vi.mocked(root.sourceResyncStatus).mockResolvedValue(
            mockReply(
                status('complete', { finished_at: '2026-10-15T00:00:00Z' }),
            ),
        );
        await vi.advanceTimersByTimeAsync(2000);
        fixture.detectChanges();

        expect(notifySuccess).toHaveBeenCalledWith('MQTT re-sync complete.');
        expect(buttons(fixture).resync.disabled).toBe(false);
        expect(
            fixture.nativeElement.querySelector('[mqtt-status]').textContent,
        ).toContain('Last re-sync finished');
    });

    it('asks before clearing, and does nothing if dismissed', async () => {
        const fixture = await createComponent();
        vi.mocked(openConfirmModal).mockResolvedValue({
            reason: undefined,
            loading: vi.fn(),
            close: vi.fn(),
        });

        buttons(fixture).clear.click();
        await vi.advanceTimersByTimeAsync(0);

        expect(openConfirmModal).toHaveBeenCalled();
        expect(root.sourceResync).not.toHaveBeenCalled();
    });

    it('clears and re-syncs once confirmed, and reports a failure', async () => {
        const fixture = await createComponent();
        vi.mocked(openConfirmModal).mockResolvedValue({
            reason: 'done',
            loading: vi.fn(),
            close: vi.fn(),
        });
        vi.mocked(root.sourceResync).mockResolvedValue(
            mockReply(status('clearing', { clear: true })),
        );
        vi.mocked(root.sourceResyncStatus).mockResolvedValue(
            mockReply(status('failed', { clear: true, error: 'broker down' })),
        );

        buttons(fixture).clear.click();
        await vi.advanceTimersByTimeAsync(0);
        expect(root.sourceResync).toHaveBeenCalledWith({ clear: true });

        await vi.advanceTimersByTimeAsync(2000);
        expect(notifyError).toHaveBeenCalledWith(
            'MQTT re-sync failed. Error: broker down',
        );
    });

    it('says when one is already running', async () => {
        const fixture = await createComponent();
        vi.mocked(root.sourceResync).mockRejectedValue({ status: 409 });

        buttons(fixture).resync.click();
        await vi.advanceTimersByTimeAsync(0);

        expect(notifyInfo).toHaveBeenCalledWith(
            'An MQTT re-sync is already running.',
        );
    });

    it('follows a re-sync that was already running when opened', async () => {
        vi.mocked(root.sourceResyncStatus).mockResolvedValue(
            mockReply(status('clearing')),
        );
        const fixture = await createComponent();
        expect(buttons(fixture).clear.disabled).toBe(true);

        vi.mocked(root.sourceResyncStatus).mockResolvedValue(
            mockReply(
                status('complete', { finished_at: '2026-10-15T00:00:00Z' }),
            ),
        );
        await vi.advanceTimersByTimeAsync(2000);
        expect(notifySuccess).toHaveBeenCalled();
    });

    it('hides the status when it cannot be read', async () => {
        vi.mocked(root.sourceResyncStatus).mockRejectedValue({ status: 403 });
        const fixture = await createComponent();
        expect(fixture.nativeElement.querySelector('[mqtt-status]')).toBeNull();
        expect(buttons(fixture).resync.disabled).toBe(false);
    });
});

describe('Database details: zone tree', () => {
    beforeEach(() => vi.clearAllMocks());

    afterEach(() => TestBed.resetTestingModule());

    /** Creates the component with an export modal that picks `selected` */
    async function createComponent(selected: Zone[] = []) {
        await TestBed.configureTestingModule({
            imports: [PlaceDatabaseDetailsComponent],
            providers: [
                {
                    provide: Dialog,
                    useValue: { open: () => ({ closed: of(selected) }) },
                },
            ],
        })
            .overrideComponent(PlaceDatabaseDetailsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(PlaceDatabaseDetailsComponent)
            .componentInstance;
    }

    it('gives imported children the new id of a parent listed after them', async () => {
        const component = await createComponent();
        vi.mocked(openConfirmModal).mockResolvedValue({
            reason: 'done',
            loading: vi.fn(),
            close: vi.fn(),
        });
        vi.mocked(zones.create).mockImplementation(async ({ body }) =>
            mockReply(newItem(Zone, { id: `new-${body.name}` })),
        );
        const csv = [
            'id,parent_id,name',
            'old-child,old-parent,Child',
            'old-parent,,Parent',
        ].join('\n');
        // jsdom files have no text()
        const file = { name: 'zones.csv', text: () => Promise.resolve(csv) };
        const event = {
            target: { files: [file], value: '' },
        } as unknown as Event;

        await component.importZoneTreeFile(event);

        expect(zones.create).toHaveBeenCalledTimes(2);
        expect(zones.create).toHaveBeenCalledWith({
            body: expect.objectContaining({
                name: 'Child',
                parent_id: 'new-Parent',
            }),
        });
    });

    it('exports each zone once when roots overlap and parents loop', async () => {
        const zone_a = { id: 'zone-a', name: 'A' } as Zone;
        const zone_b = { id: 'zone-b', parent_id: 'zone-a' } as Zone;
        const zone_c = { id: 'zone-c', parent_id: 'zone-b' } as Zone;
        const children: Record<string, Zone[]> = {
            'zone-a,zone-b': [zone_b, zone_c],
            'zone-c': [zone_a],
        };
        vi.mocked(zones.query).mockImplementation(async ({ parent_id }) =>
            mockPage({ data: children[parent_id.join(',')] || [] }),
        );
        const component = await createComponent([zone_a, zone_b]);

        component.exportZoneTree();
        await vi.waitFor(() => expect(downloadFile).toHaveBeenCalled());

        const csv = vi.mocked(downloadFile).mock.calls[0][1];
        expect(parseCSV(csv).map(({ id }) => id)).toEqual([
            'zone-a',
            'zone-b',
            'zone-c',
        ]);
    });
});
