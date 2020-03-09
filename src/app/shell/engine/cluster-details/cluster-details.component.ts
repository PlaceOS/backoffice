import { Component, OnInit } from '@angular/core';

import { EngineCluster } from '@placeos/ts-client';
import { ApplicationService } from 'src/app/services/app.service';
import { first } from 'rxjs/operators';
import { BaseDirective } from 'src/app/shared/globals/base.directive';

@Component({
    selector: 'engine-cluster-details',
    templateUrl: './cluster-details.component.html',
    styleUrls: ['./cluster-details.component.scss']
})
export class EngineClusterDetailsComponent extends BaseDirective implements OnInit {

    /** List of available clusters on this instance of engine */
    public cluster_list: EngineCluster[] = [];
    /** Active cluster to show details for */
    public active_cluster: EngineCluster;
    /** Whether cluster details are being loaded */
    public loading: boolean;

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this._service.initialised.pipe(first(_ => _)).subscribe(() => {
            this.loadClusters();
            this.interval('load_cluster', () => this.loadClusters(), 1000);
        })
    }

    private loadClusters(): void {
        if (this.active_cluster) { return; }
        this.loading = true;
        this._service.Clusters.query({ include_status: true } as any).then((list) => {
            this.cluster_list = list || [];
            this.loading = false;
        });
    }
}
