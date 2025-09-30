import { Component, OnInit, signal } from '@angular/core';
import {
    catchError,
    filter,
    map,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';

import { PlaceCluster, queryClusters } from '@placeos/ts-client';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { HashMap } from 'apps/backoffice/src/app/common/types';

import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { interval } from 'rxjs';
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
                            class="m-2 space-y-2 rounded-lg border border-base-200 bg-base-100 p-2 shadow"
                        >
                            <h3
                                class="mono mb-2 rounded bg-base-200 p-2 text-lg font-medium uppercase"
                            >
                                {{ cluster.hostname || '&lt;BLANK&gt;' }}
                            </h3>
                            @for (
                                node of cluster_nodes()[cluster.id];
                                track node.hostname
                            ) {
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
                            <a
                                btn
                                matRipple
                                class="w-full"
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
export class PlaceClusterDetailsComponent
    extends AsyncHandler
    implements OnInit
{
    /** List of available clusters on this instance of engine */
    public cluster_list = signal<PlaceCluster[]>([]);
    public cluster_nodes = signal({});
    /** Map of clusters to CPU usage history */
    public usage_history: HashMap<HashMap<any[]>> = {};
    /** Whether cluster details are being loaded */
    public readonly loading = signal(false);

    public readonly clusters$ = interval(2 * 1000).pipe(
        startWith(0),
        filter(() => !this.loading()),
        switchMap(() => {
            this.loading.set(true);
            return queryClusters({ include_status: false } as any).pipe(
                catchError((_) => ({ data: [] }) as any),
            );
        }),
        map((resp: { data: any[] }) => resp.data),
        map((list) => {
            this.cluster_list.set(list || []);
            const date = Date.now();
            const node_map = this.cluster_nodes();
            this.cluster_list().forEach((cluster) => {
                if (!this.usage_history[cluster.id])
                    this.usage_history[cluster.id] = {};
                const nodes = [cluster, ...cluster.edge_nodes] as any;
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
        }),
        tap(() => this.loading.set(false)),
    );

    public ngOnInit(): void {
        this.subscription('load_cluster', this.clusters$.subscribe());
    }
}
