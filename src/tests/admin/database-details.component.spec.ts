import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { sourceResync, sourceResyncStatus } from '@placeos/ts-client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { PlaceDatabaseDetailsComponent } from '../../app/admin/database-details.component';
import {
    notifyError,
    notifySuccess,
    notifyWarn,
} from '../../app/common/notifications';
import { openConfirmModal } from '../../app/overlays/confirm-modal.component';

vi.mock('@placeos/ts-client', () => ({
    addZone: vi.fn(),
    queryZones: vi.fn(),
    showZone: vi.fn(),
    sourceResync: vi.fn(),
    sourceResyncStatus: vi.fn(),
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
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
        vi.mocked(sourceResyncStatus).mockResolvedValue(status('idle'));
    });

    afterEach(() => {
        TestBed.resetTestingModule();
        vi.useRealTimers();
    });

    async function createComponent() {
        await TestBed.configureTestingModule({
            imports: [PlaceDatabaseDetailsComponent],
            providers: [{ provide: MatDialog, useValue: { open: vi.fn() } }],
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
        vi.mocked(sourceResync).mockResolvedValue(status('resyncing'));
        vi.mocked(sourceResyncStatus).mockResolvedValue(status('resyncing'));

        buttons(fixture).resync.click();
        await vi.advanceTimersByTimeAsync(0);
        fixture.detectChanges();

        expect(openConfirmModal).not.toHaveBeenCalled();
        expect(sourceResync).toHaveBeenCalledWith(false);
        expect(buttons(fixture).resync.disabled).toBe(true);
        expect(buttons(fixture).clear.disabled).toBe(true);

        vi.mocked(sourceResyncStatus).mockResolvedValue(
            status('complete', { finished_at: '2026-10-15T00:00:00Z' }),
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
        expect(sourceResync).not.toHaveBeenCalled();
    });

    it('clears and re-syncs once confirmed, and reports a failure', async () => {
        const fixture = await createComponent();
        vi.mocked(openConfirmModal).mockResolvedValue({
            reason: 'done',
            loading: vi.fn(),
            close: vi.fn(),
        });
        vi.mocked(sourceResync).mockResolvedValue(
            status('clearing', { clear: true }),
        );
        vi.mocked(sourceResyncStatus).mockResolvedValue(
            status('failed', { clear: true, error: 'broker down' }),
        );

        buttons(fixture).clear.click();
        await vi.advanceTimersByTimeAsync(0);
        expect(sourceResync).toHaveBeenCalledWith(true);

        await vi.advanceTimersByTimeAsync(2000);
        expect(notifyError).toHaveBeenCalledWith(
            'MQTT re-sync failed. Error: broker down',
        );
    });

    it('says when one is already running', async () => {
        const fixture = await createComponent();
        vi.mocked(sourceResync).mockRejectedValue({ status: 409 });

        buttons(fixture).resync.click();
        await vi.advanceTimersByTimeAsync(0);

        expect(notifyWarn).toHaveBeenCalledWith(
            'An MQTT re-sync is already running.',
        );
    });

    it('follows a re-sync that was already running when opened', async () => {
        vi.mocked(sourceResyncStatus).mockResolvedValue(status('clearing'));
        const fixture = await createComponent();
        expect(buttons(fixture).clear.disabled).toBe(true);

        vi.mocked(sourceResyncStatus).mockResolvedValue(
            status('complete', { finished_at: '2026-10-15T00:00:00Z' }),
        );
        await vi.advanceTimersByTimeAsync(2000);
        expect(notifySuccess).toHaveBeenCalled();
    });

    it('hides the status when it cannot be read', async () => {
        vi.mocked(sourceResyncStatus).mockRejectedValue({ status: 403 });
        const fixture = await createComponent();
        expect(fixture.nativeElement.querySelector('[mqtt-status]')).toBeNull();
        expect(buttons(fixture).resync.disabled).toBe(false);
    });
});
