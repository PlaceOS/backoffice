import { Dialog } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { cluster } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { of } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import { PlaceClusterTaskListComponent } from '../../app/admin/cluster-details/cluster-task-list.component';
import {
    clusterFromStatus,
    processFromStatus,
} from '../../app/admin/cluster-details/cluster.utilities';
vi.mock('@placeos/ts-client', { spy: true });

describe('PlaceClusterTaskListComponent', () => {
    it('clears the cluster when no node has its id', async () => {
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
        const node = (id: string) => ({
            id,
            uri: '',
            load: null,
            status: null,
        });
        component.cluster.set(clusterFromStatus(node('cluster-1')));
        component.process_list.set([
            processFromStatus('cluster-1', {
                driver: 'driver_1',
                local: { modules: [], status: null },
                edge: {},
            }),
        ]);
        vi.mocked(cluster.nodes).mockResolvedValue(
            mockReply([node('cluster-10')]),
        );

        await component.loadCluster('cluster-1');

        expect(component.cluster()).toBeNull();
        expect(component.process_list()).toEqual([]);
        expect(cluster.show).not.toHaveBeenCalled();
    });
});
