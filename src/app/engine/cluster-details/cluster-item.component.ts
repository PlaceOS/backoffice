import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PlaceCluster } from '@placeos/ts-client';
import { HashMap } from 'src/app/common/types';
import { PlaceClusterNode, PlaceClusterUsageStamp } from './cluster-node.component';

@Component({
    selector: 'engine-cluster-item',
    template: `
        <ng-container *ngFor="let node of cluster_nodes">
            <admin-cluster-node
                [node]="node"
                [history]="cpu_history[node.hostname] || []"
            ></admin-cluster-node>
        </ng-container>
    `,
    styles: [``],
})
export class PlaceClusterItemComponent implements OnChanges {
    /** Cluster to display details for */
    @Input() public cluster: PlaceCluster;
    /** List of historical data for cluster's CPU usage */
    @Input() public cpu_history: HashMap<PlaceClusterUsageStamp[]> = {};
    /** List of nodes contained by the cluster */
    public cluster_nodes: PlaceClusterNode[];

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.cluster && this.cluster) {
            this.cluster_nodes = [this.cluster, ...this.cluster.edge_nodes];
            this.cpu_history = this.cpu_history || {};
        }
    }
}
