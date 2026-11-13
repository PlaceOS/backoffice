import { Dialog } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import {
    PlaceCluster,
    queryClusters,
    queryProcesses,
} from '@placeos/ts-client';
import { of } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import { PlaceClusterTaskListComponent } from '../../app/admin/cluster-details/cluster-task-list.component';

vi.mock('@placeos/ts-client', () => ({
    queryClusters: vi.fn(),
    queryProcesses: vi.fn(),
    showMetadata: vi.fn(() => Promise.resolve({})),
    terminateProcess: vi.fn(),
}));

describe('PlaceClusterTaskListComponent', () => {
    it('clears the cluster when the search has no exact id match', async () => {
        const param_map = convertToParamMap({});
        await TestBed.configureTestingModule({
            imports: [PlaceClusterTaskListComponent],
            providers: [
                { provide: Dialog, useValue: { open: vi.fn() } },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of(param_map),
                        snapshot: { paramMap: param_map },
                    },
                },
            ],
        })
            .overrideComponent(PlaceClusterTaskListComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const component = TestBed.createComponent(
            PlaceClusterTaskListComponent,
        ).componentInstance;
        component.cluster.set({ id: 'cluster-1' } as PlaceCluster);
        component.process_list.set([{ id: 'driver_1' }]);
        vi.mocked(queryClusters).mockResolvedValue({
            data: [{ id: 'cluster-10' } as PlaceCluster],
        } as Awaited<ReturnType<typeof queryClusters>>);

        await component.loadCluster('cluster-1');

        expect(component.cluster()).toBeNull();
        expect(component.process_list()).toEqual([]);
        expect(queryProcesses).not.toHaveBeenCalled();
    });
});
