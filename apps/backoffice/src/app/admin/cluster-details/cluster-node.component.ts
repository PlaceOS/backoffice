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

import { differenceInSeconds } from 'date-fns';
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
    value: number;
}

@Component({
    selector: 'admin-cluster-node',
    template: `
        <h4>{{ node?.hostname }}</h4>
        <div class="mb-2 h-40 w-64">
            <div basic-line-graph [points]="points"></div>
        </div>
        <div class="memory-utilisation">
            <div
                class="flex items-center justify-between space-x-2 p-2 text-left"
            >
                <label i18n="@@cluserMemoryUsed" class="w-28">
                    Memory Used
                </label>
                <div class="value flex-1 text-right flex space-x-2">
                    <code>{{ used_memory }} / {{ total_memory }}</code>
                    <code> {{ memory_percentage.toFixed(2) }}% </code>
                </div>
            </div>
            <div
                class="flex items-center justify-between space-x-2 bg-base-200 rounded p-2 text-left"
            >
                <label i18n="@@clusterCpuUsage" class="w-28">CPU Usage</label>
                <code> {{ node?.total_cpu }}% </code>
            </div>
        </div>
    `,
    styles: [],
})
export class AdminClusterNodeComponent implements OnChanges, OnInit {
    /** Node to display on the view */
    @Input() public node: PlaceClusterNode;
    /** Historical data for node */
    @Input() public history: PlaceClusterUsageStamp[];
    /** Store for the chart data object */
    // private _chart: Chart;
    /**  */
    public points: Point[] = [];

    public get used_memory() {
        return humanReadableByteCount((this.node?.memory_usage || 0) * 1024);
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
        const list = [...this.history] || [];
        while (list.length < 12) {
            list.unshift({} as any);
        }
        const data = list
            .slice(Math.max(0, list.length - 12))
            .map((event, idx) => ({
                x: idx,
                y: event.value || 0,
            }));
        this.points = [...data];
    }
}
