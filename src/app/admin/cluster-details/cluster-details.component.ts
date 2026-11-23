import { Component, signal } from '@angular/core';

import { cluster as cluster_v7 } from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';
import { AsyncHandler } from '../../common/async-handler.class';
import { HashMap } from '../../common/types';

import { RouterModule } from '@angular/router';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { AdminClusterNodeComponent } from './cluster-node.component';
import {
    clusterFromStatus,
    PlaceCluster,
    PlaceClusterLoad,
} from './cluster.utilities';

@Component({
    selector: 'engine-cluster-details',
    template: `
        <div class="my-4 flex items-center justify-between space-x-2 px-4">
            <div class="text-2xl">{{ 'ADMIN.CLUSTERS' | translate }}</div>
        </div>
        <div class="flex max-h-full flex-wrap overflow-auto">
            @if (cluster_list().length) {
                <div class="px-2">
                    @for (cluster of cluster_list(); track cluster.id) {
                        <div
                            class="border-base-200 bg-base-100 m-2 space-y-2 rounded-lg border p-2 shadow-sm"
                        >
                            <h3
                                class="mono bg-base-200 mb-2 rounded-sm p-2 text-lg font-medium uppercase"
                            >
                                {{ cluster.hostname || '&lt;BLANK&gt;' }}
                            </h3>
                            @for (
                                node of cluster_nodes()[cluster.id];
                                track node.hostname
                            ) {
                                <admin-cluster-node
                                    [show_name]="
                                        cluster_nodes()[cluster.id].length > 1
                                    "
                                    [node]="node"
                                    [history]="
                                        (usage_history[cluster.id] || {})[
                                            node.hostname
                                        ] || []
                                    "
                                />
                            }
                            <a
                                btn
                                ripple
                                class="mt-2 w-full"
                                [routerLink]="[
                                    '/admin',
                                    'clusters',
                                    cluster.id,
                                ]"
                            >
                                {{
                                    'ADMIN.CLUSTERS_VIEW_PROCESSES' | translate
                                }}
                            </a>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-8 opacity-30"
                >
                    <icon class="text-8xl">hub</icon>
                    <div class="text">
                        {{ 'ADMIN.CLUSTERS_LIST_EMPTY' | translate }}
                    </div>
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [
        IconComponent,
        TranslatePipe,
        AdminClusterNodeComponent,
        RouterModule,
    ],
})
export class PlaceClusterDetailsComponent extends AsyncHandler {
    /** List of available clusters on this instance of engine */
    public cluster_list = signal<PlaceCluster[]>([]);
    public cluster_nodes = signal<HashMap<Array<PlaceClusterLoad>>>({});
    /** Map of clusters to CPU usage history */
    public usage_history: HashMap<
        HashMap<Array<{ id: number; cpu: number; memory: number }>>
    > = {};
    /** Whether cluster details are being loaded */
    public readonly loading = signal(false);

    constructor() {
        super();
        this.updateClusters();
        this.interval('clusters', () => this.updateClusters(), 2 * 1000);
    }

    private async updateClusters() {
        // Skip a tick while hidden or while the last request is in flight
        if (this.loading() || document.hidden) return;
        this.loading.set(true);
        const list = await cluster_v7
            .nodes({ include_status: false })
            .then(orThrow)
            .then((nodes) => nodes.map(clusterFromStatus))
            .catch((): PlaceCluster[] => []);
        this.cluster_list.set(list);
        const date = Date.now();
        // A new object, so the signal notifies and removed clusters drop out
        const node_map: HashMap<Array<PlaceClusterLoad>> = {};
        this.cluster_list().forEach((cluster) => {
            if (!this.usage_history[cluster.id])
                this.usage_history[cluster.id] = {};
            const nodes: PlaceClusterLoad[] = [cluster, ...cluster.edge_nodes];
            node_map[cluster.id] = nodes;
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
        this.cluster_nodes.set(node_map);
        this.loading.set(false);
    }
}
