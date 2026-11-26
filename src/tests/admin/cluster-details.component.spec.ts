import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { cluster } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PlaceClusterDetailsComponent } from '../../app/admin/cluster-details/cluster-details.component';
import { LocaleService } from '../../app/common/locale.service';
vi.mock('@placeos/ts-client', { spy: true });

describe('PlaceClusterDetailsComponent', () => {
    afterEach(() => vi.useRealTimers());

    it('keeps the last cluster details when a refresh fails', async () => {
        vi.useFakeTimers();
        vi.mocked(cluster.nodes).mockResolvedValueOnce(
            mockReply([{ id: 'cluster-1', uri: '', load: null, status: null }]),
        );
        await TestBed.configureTestingModule({
            imports: [PlaceClusterDetailsComponent],
            providers: [provideRouter([])],
        })
            .overrideComponent(PlaceClusterDetailsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const component = TestBed.createComponent(
            PlaceClusterDetailsComponent,
        ).componentInstance;
        await vi.advanceTimersByTimeAsync(0);
        expect(component.cluster_list().map(({ id }) => id)).toEqual([
            'cluster-1',
        ]);

        vi.mocked(cluster.nodes).mockResolvedValueOnce({
            ok: false,
            error: { kind: 'network', message: 'Offline' },
        });
        await vi.advanceTimersByTimeAsync(2 * 1000);

        expect(component.cluster_list().map(({ id }) => id)).toEqual([
            'cluster-1',
        ]);
        expect(component.refresh_error()).toContain('Offline');
    });

    it('shows a failed first load in an alert at full contrast', async () => {
        vi.useFakeTimers();
        vi.mocked(cluster.nodes).mockResolvedValueOnce({
            ok: false,
            error: { kind: 'network', message: 'Offline' },
        });
        TestBed.configureTestingModule({
            imports: [PlaceClusterDetailsComponent],
            providers: [provideRouter([])],
        });
        // The text shows in English once the translations load
        await TestBed.inject(LocaleService).ready;
        const fixture = TestBed.createComponent(PlaceClusterDetailsComponent);
        await vi.advanceTimersByTimeAsync(0);
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement;

        const alert = element.querySelector('[role="alert"]');
        expect(alert?.textContent).toContain('Failed to load cluster details.');
        expect(alert?.textContent).toContain('Offline');
        expect(alert?.closest('.opacity-30')).toBeNull();
        fixture.destroy();
    });
});
