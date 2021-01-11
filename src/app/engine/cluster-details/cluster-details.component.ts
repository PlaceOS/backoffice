import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

import { PlaceCluster, queryClusters } from '@placeos/ts-client';
import { BaseClass } from 'src/app/common/base.class';
import { HashMap } from 'src/app/common/types';

import * as dayjs from 'dayjs';

@Component({
    selector: 'engine-cluster-details',
    template: `
        <ng-container *ngIf="cluster_list && cluster_list.length; else empty_state">
            <ng-container *ngIf="!active_cluster; else process_state">
                <ng-container *ngFor="let cluster of cluster_list">
                    <mat-card class="m-2 text-center">
                        <mat-card-header>
                            <mat-card-title clas="capitalize"
                                >{{ cluster.hostname || 'Undefined Cluster' }}
                            </mat-card-title>
                        </mat-card-header>
                        <mat-card-content>
                            <engine-cluster-item
                                [cluster]="cluster"
                                [cpu_history]="cpu_history[cluster.id] || []"
                            ></engine-cluster-item>
                        </mat-card-content>
                        <mat-card-actions>
                            <button
                                mat-button
                                (click)="active_cluster = cluster"
                                i18n="@@viewClusterProcesses"
                            >
                                View Processes
                            </button>
                        </mat-card-actions>
                    </mat-card>
                </ng-container>
            </ng-container>
        </ng-container>
        <ng-template #empty_state>
            <div class="info-block center">
                <div class="icon">
                    <app-icon [icon]="{ class: 'backoffice-cross' }"></app-icon>
                </div>
                <div class="text" i18n="@@clusterListEmpty">No Cluster details to show</div>
            </div>
        </ng-template>
        <ng-template #process_state>
            <engine-cluster-task-list
                [cluster]="active_cluster"
                (close)="active_cluster = null"
            ></engine-cluster-task-list>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-wrap: wrap;
            }
        `,
    ],
})
export class PlaceClusterDetailsComponent extends BaseClass implements OnInit {
    /** List of available clusters on this instance of engine */
    public cluster_list: PlaceCluster[] = [];
    /** Map of clusters to CPU usage history */
    public cpu_history: HashMap<{ id: number; value: number }[]> = {};
    /** Active cluster to show details for */
    public active_cluster: PlaceCluster;
    /** Whether cluster details are being loaded */
    public loading: boolean;

    public ngOnInit(): void {
        this.loadClusters();
        this.interval('load_cluster', () => this.loadClusters(), 2000);
    }

    private loadClusters(): void {
        if (this.active_cluster) {
            return;
        }
        this.loading = true;
        queryClusters({ include_status: true } as any)
            .pipe(
                map((resp) => resp.data),
                catchError((_) => [])
            )
            .subscribe((list) => {
                this.cluster_list = list || [];
                const date = dayjs().valueOf();
                this.cluster_list.forEach((cluster) => {
                    if (!this.cpu_history[cluster.id]) {
                        this.cpu_history[cluster.id] = [];
                    }
                    this.cpu_history[cluster.id].push({
                        id: date,
                        value: cluster.core_cpu,
                    });
                    if (this.cpu_history[cluster.id].length > 120) {
                        this.cpu_history[cluster.id].shift();
                    }
                });
                this.loading = false;
            });
    }
}
