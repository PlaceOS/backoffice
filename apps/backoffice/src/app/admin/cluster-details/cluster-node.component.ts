import {
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { humanReadableByteCount } from '@placeos/ts-client';

import { Point } from '../../common/types';

interface PlaceClusterRunCounts {
    modules: number;
    drivers: number;
}

export interface PlaceClusterNode {
    hostname: string;
    cpu_count: number;
    core_cpu: number;
    total_cpu: number;
    memory_total: number;
    memory_usage: number;
    core_memory: number;
    run_count?: PlaceClusterRunCounts;
}

export interface PlaceClusterUsageStamp {
    id: number;
    cpu: number;
    memory: number;
}

@Component({
    selector: 'admin-cluster-node',
    template: `
        <h4 *ngIf="show_name">{{ node?.hostname }}</h4>
        <div class="mb-2 h-36 w-full rounded border border-base-300 p-2">
            <div basic-line-graph [lines]="lines" class="h-full w-full"></div>
        </div>
        <div class="memory-utilisation">
            <div class="flex space-x-2">
                <div
                    class="flex flex-1 flex-col items-center justify-center space-y-1 rounded border border-base-300 p-1"
                >
                    <div>{{ 'ADMIN.CLUSTERS_CPU_USAGE' | translate }}</div>
                    <div class="mono text-4xl font-medium">
                        {{ node?.total_cpu.toFixed(0) }}%
                    </div>
                    <div class="mono w-36 text-center text-xs">
                        {{
                            'ADMIN.CLUSTERS_CPU_CORES'
                                | translate: { count: node?.cpu_count || 0 }
                        }}
                    </div>
                </div>
                <div
                    class="flex flex-1 flex-col items-center justify-center space-y-1 rounded border border-base-300 p-1"
                >
                    <div>{{ 'ADMIN.CLUSTERS_MEMORY_USAGE' | translate }}</div>
                    <div class="mono text-4xl font-medium">
                        {{ memory_percentage.toFixed(0) }}%
                    </div>
                    <div class="mono w-36 text-center text-xs">
                        {{ used_memory }}/{{ total_memory }}
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [],
})
export class AdminClusterNodeComponent implements OnChanges, OnInit {
    @Input() public show_name = true;
    /** Node to display on the view */
    @Input() public node: PlaceClusterNode;
    /** Historical data for node */
    @Input() public history: PlaceClusterUsageStamp[];
    /** Store for the chart data object */
    // private _chart: Chart;
    /**  */
    public lines: Point[][] = [];

    public get used_memory() {
        return humanReadableByteCount((this.node?.memory_usage || 0) * 1024)
            .replace('GB', '')
            .replace('MB', '')
            .trim();
    }

    public get total_memory() {
        return humanReadableByteCount((this.node?.memory_total || 0) * 1024);
    }

    public get memory_percentage() {
        return (
            ((this.node?.memory_usage || 0) / (this.node?.memory_total || 1)) *
            100
        );
    }

    @ViewChild('chart', { static: true })
    public _chart_el: ElementRef<HTMLCanvasElement>;

    public ngOnInit() {
        this.generateCharts();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.history && this.history) {
            this.generateCharts();
        }
    }

    public generateCharts(): void {
        this.lines = [
            this.history.map(({ cpu }, idx) => ({ x: idx, y: cpu })),
            this.history.map(({ memory }, idx) => ({ x: idx, y: memory })),
        ];
    }
}
