import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

import { PlaceCluster, queryClusters } from '@placeos/ts-client';
import { BaseClass } from 'src/app/common/base.class';
import { HashMap } from 'src/app/common/types';

import * as dayjs from 'dayjs';

@Component({
    selector: 'engine-cluster-details',
    templateUrl: './cluster-details.component.html',
    styleUrls: ['./cluster-details.component.scss'],
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
            .pipe(map((resp) => resp.data), catchError(_ => []))
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
