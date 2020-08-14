import { Component, OnInit } from '@angular/core';

import { PlaceCluster, queryClusters } from '@placeos/ts-client';
import { ApplicationService } from 'src/app/services/app.service';
import { first, map } from 'rxjs/operators';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { HashMap } from 'src/app/shared/utilities/types.utilities';

import * as dayjs from 'dayjs';

@Component({
    selector: 'engine-cluster-details',
    templateUrl: './cluster-details.component.html',
    styleUrls: ['./cluster-details.component.scss'],
})
export class PlaceClusterDetailsComponent extends BaseDirective implements OnInit {
    /** List of available clusters on this instance of engine */
    public cluster_list: PlaceCluster[] = [];
    /** Map of clusters to CPU usage history */
    public cpu_history: HashMap<{ id: number; value: number }[]> = {};
    /** Active cluster to show details for */
    public active_cluster: PlaceCluster;
    /** Whether cluster details are being loaded */
    public loading: boolean;

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this._service.initialised.pipe(first((_) => _)).subscribe(() => {
            this.loadClusters();
            this.interval('load_cluster', () => this.loadClusters(), 1000);
        });
    }

    private loadClusters(): void {
        if (this.active_cluster) {
            return;
        }
        this.loading = true;
        queryClusters({ include_status: true } as any)
            .pipe(map((resp) => resp.data))
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
