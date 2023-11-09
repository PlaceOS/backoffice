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

import { PlaceClusterUsageStamp } from './cluster-node.component';
import { interval } from 'rxjs';

@Component({
    selector: 'engine-cluster-details',
    template: `
        <div class="flex flex-wrap overflow-auto max-h-full">
            <ng-container
                *ngIf="cluster_list && cluster_list.length; else empty_state"
            >
                <ng-container *ngIf="!active_cluster; else process_state">
                    <ng-container *ngFor="let cluster of cluster_list">
                        <mat-card class="m-2 text-center">
                            <mat-card-header>
                                <mat-card-title clas="capitalize"
                                    >{{
                                        cluster.hostname || 'Undefined Cluster'
                                    }}
                                </mat-card-title>
                            </mat-card-header>
                            <mat-card-content>
                                <engine-cluster-item
                                    [cluster]="cluster"
                                    [cpu_history]="
                                        cpu_history[cluster.id] || []
                                    "
                                ></engine-cluster-item>
                            </mat-card-content>
                            <mat-card-actions>
                                <button
                                    btn
                                    matRipple
                                    (click)="active_cluster = cluster"
                                    i18n="@@viewClusterProcesses"
                                    class="mx-2"
                                >
                                    View Processes
                                </button>
                            </mat-card-actions>
                        </mat-card>
                    </ng-container>
                </ng-container>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div
                class="absolute inset-0 flex flex-col items-center p-8 space-y-2"
            >
                <app-icon class="text-3xl">close</app-icon>
                <div class="text" i18n="@@clusterListEmpty">
                    No Cluster details to show
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
    /** Map of clusters to CPU usage history */
    public cpu_history: HashMap<HashMap<PlaceClusterUsageStamp[]>> = {};
    /** Active cluster to show details for */
    public active_cluster: PlaceCluster;
    /** Whether cluster details are being loaded */
    public loading: boolean;

    public readonly clusters$ = interval(2000).pipe(
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
                if (!this.cpu_history[cluster.id]) {
                    this.cpu_history[cluster.id] = {};
                }
                const nodes = [cluster, ...cluster.edge_nodes] as any;
                for (const node of nodes) {
                    if (!this.cpu_history[cluster.id][node.hostname]) {
                        this.cpu_history[cluster.id][node.hostname] = [];
                    }
                    this.cpu_history[cluster.id][node.hostname].push({
                        id: date,
                        value: node.core_cpu,
                    });
                    if (
                        this.cpu_history[cluster.id][node.hostname].length > 120
                    ) {
                        this.cpu_history[cluster.id][node.hostname].shift();
                    }
                }
            });
        }),
        tap(() => (this.loading = false))
    );

    public ngOnInit(): void {
        this.subscription('load_cluster', this.clusters$.subscribe());
    }
}
