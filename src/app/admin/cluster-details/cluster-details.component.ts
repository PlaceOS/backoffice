import { Component, signal } from '@angular/core';

import { PlaceCluster, queryClusters } from '@placeos/ts-client';
import { AsyncHandler } from '../../common/async-handler.class';
import { HashMap } from '../../common/types';

import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { AdminClusterNodeComponent } from './cluster-node.component';

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
                                matRipple
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
        MatRippleModule,
        AdminClusterNodeComponent,
        RouterModule,
    ],
})
export class PlaceClusterDetailsComponent extends AsyncHandler {
    /** List of available clusters on this instance of engine */
    public cluster_list = signal<PlaceCluster[]>([]);
    public cluster_nodes = signal({});
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
        if (this.loading()) return;
        this.loading.set(true);
        const response = await queryClusters({ include_status: false }).catch(
            () => ({ data: [] as PlaceCluster[] }),
        );
        const list = response.data || [];
        this.cluster_list.set(list);
        const date = Date.now();
        const node_map = this.cluster_nodes();
        this.cluster_list().forEach((cluster) => {
            if (!this.usage_history[cluster.id])
                this.usage_history[cluster.id] = {};
            const nodes = [cluster, ...cluster.edge_nodes] as Array<
                PlaceCluster & { hostname?: string }
            >;
            node_map[cluster.id] = nodes;
            for (const node of nodes) {
                if (!this.usage_history[cluster.id][node.hostname as string]) {
                    this.usage_history[cluster.id][node.hostname as string] =
                        [];
                }
                const block =
                    this.usage_history[cluster.id][node.hostname as string];
                block.unshift({
                    id: date,
                    cpu: node.total_cpu,
                    memory: node.memory_percentage,
                });
                if (block.length > 120) block.pop();
                this.usage_history[cluster.id][node.hostname as string] = [
                    ...block,
                ];
            }
        });
        this.cluster_nodes.set(node_map);
        this.loading.set(false);
    }
}
