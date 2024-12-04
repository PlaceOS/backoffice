import { Component, OnInit } from '@angular/core';
import {
    map,
    catchError,
    switchMap,
    tap,
    filter,
    startWith,
} from 'rxjs/operators';

import { PlaceCluster, queryClusters } from '@placeos/ts-client';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { HashMap } from 'apps/backoffice/src/app/common/types';

import {
    PlaceClusterNode,
    PlaceClusterUsageStamp,
} from './cluster-node.component';
import { interval } from 'rxjs';

@Component({
    selector: 'engine-cluster-details',
    template: `
        <div class="flex items-center justify-between space-x-2 my-4 px-2">
            <div class="text-2xl">{{ 'ADMIN.CLUSTERS' | translate }}</div>
        </div>
        <div class="flex flex-wrap overflow-auto max-h-full">
            <ng-container
                *ngIf="cluster_list && cluster_list.length; else empty_state"
            >
                <ng-container *ngIf="!active_cluster; else process_state">
                    @for(cluster of cluster_list; track cluster.id) {
                    <div
                        class="m-2 rounded-lg bg-base-100 border border-base-200 shadow p-2 space-y-2"
                    >
                        <h3
                            class="mono text-lg font-medium uppercase p-2 bg-base-200 rounded mb-2"
                        >
                            {{ cluster.hostname || '&lt;BLANK&gt;' }}
                        </h3>
                        @for(node of cluster_nodes[cluster.id]; track
                        node.hostname) {
                        <admin-cluster-node
                            [show_name]="cluster_nodes.length > 1"
                            [node]="node"
                            [history]="
                                (usage_history[cluster.id] || {})[
                                    node.hostname
                                ] || []
                            "
                        ></admin-cluster-node>
                        }
                        <button
                            btn
                            matRipple
                            class="w-full"
                            (click)="active_cluster = cluster"
                        >
                            {{ 'ADMIN.CLUSTERS_VIEW_PROCESSES' | translate }}
                        </button>
                    </div>
                    }
                </ng-container>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-8 opacity-30"
            >
                <app-icon class="text-8xl">hub</app-icon>
                <div class="text">
                    {{ 'ADMIN.CLUSTERS_LIST_EMPTY' | translate }}
                </div>
            </div>
        </ng-template>
        <ng-template #process_state>
            <engine-cluster-task-list
                [cluster]="active_cluster"
                (close)="active_cluster = null"
            ></engine-cluster-task-list>
        </ng-template>
    `,
    styles: [``],
})
export class PlaceClusterDetailsComponent
    extends AsyncHandler
    implements OnInit
{
    /** List of available clusters on this instance of engine */
    public cluster_list: PlaceCluster[] = [];
    public cluster_nodes: Record<string, PlaceClusterNode[]> = {};
    /** Map of clusters to CPU usage history */
    public usage_history: HashMap<HashMap<any[]>> = {};
    /** Active cluster to show details for */
    public active_cluster: PlaceCluster;
    /** Whether cluster details are being loaded */
    public loading: boolean;

    public readonly clusters$ = interval(1000).pipe(
        startWith(0),
        filter(() => !this.active_cluster && !this.loading),
        switchMap(() => {
            this.loading = true;
            return queryClusters({ include_status: true } as any).pipe(
                catchError((_) => ({ data: [] } as any))
            );
        }),
        map((resp: { data: any[] }) => resp.data),
        map((list) => {
            this.cluster_list = list || [];
            const date = Date.now();
            this.cluster_list.forEach((cluster) => {
                if (!this.usage_history[cluster.id])
                    this.usage_history[cluster.id] = {};
                const nodes = [cluster, ...cluster.edge_nodes] as any;
                this.cluster_nodes[cluster.id] = nodes;
                for (const node of nodes) {
                    if (!this.usage_history[cluster.id][node.hostname]) {
                        this.usage_history[cluster.id][node.hostname] = [];
                    }
                    const block = this.usage_history[cluster.id][node.hostname];
                    block.unshift({
                        id: date,
                        cpu: node.total_cpu,
                        memory: node.memory_percentage,
                    });
                    if (block.length > 120) block.pop();
                    this.usage_history[cluster.id][node.hostname] = [...block];
                }
            });
        }),
        tap(() => (this.loading = false))
    );

    public ngOnInit(): void {
        this.subscription('load_cluster', this.clusters$.subscribe());
    }
}
