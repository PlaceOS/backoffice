import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { humanReadableByteCount } from '@placeos/ts-client';

import { Chart } from 'chart.js';
import { format } from 'date-fns';

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
        <h4>{{node?.hostname}}</h4>
        <div class="mb-2">
            <canvas class="w-full rounded h-40 bg-gray-100" #chart></canvas>
        </div>
        <div class="memory-utilisation">
            <div class="flex items-center space-x-2 p-2">
                <label i18n="@@cluserMemoryUsed">Memory Used</label>
                <div class="value">
                    {{ used_memory }} / {{ total_memory }} ({{ memory_percentage.toFixed(2) }}%)
                </div>
            </div>
            <div class="flex items-center space-x-2 bg-black bg-opacity-5 rounded p-2">
                <label i18n="@@clusterCpuUsage">CPU Usage</label>
                <div class="value">{{ node?.total_cpu }}%</div>
            </div>
        </div>
    `,
    styles: []
})
export class AdminClusterNodeComponent implements OnChanges, OnInit {
    /** Node to display on the view */
    @Input() public node: PlaceClusterNode;
    /** Historical data for node */
    @Input() public history: PlaceClusterUsageStamp[]
    /** Store for the chart data object */
    private _chart: Chart;

    public get used_memory() {
        return humanReadableByteCount((this.node?.memory_usage || 0) * 1024);
    }

    public get total_memory() {
        return humanReadableByteCount((this.node?.memory_total || 0) * 1024);
    }

    public get memory_percentage() {
        return ((this.node?.memory_usage || 0) / (this.node?.memory_total || 1)) * 100;
    }

    @ViewChild('chart', { static: true }) public _chart_el: ElementRef<HTMLCanvasElement>;

    public ngOnInit() {
        this.generateCharts();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.history && this.history) {
            this.generateCharts();
        }
    }

    public generateCharts(): void {
        if (!this._chart_el?.nativeElement) return;
        const context = this._chart_el.nativeElement.getContext('2d');
        const options = {
            legend: {
                display: false,
            },
            elements: {
                line: {
                    tension: 0,
                },
            },
            scales: {
                y: {
                    scaleLabel: {
                        display: true,
                        labelString: 'CPU Usage(%)',
                    },
                    display: true,
                    ticks: {
                        suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                        suggestedMax: 100,
                        beginAtZero: true, // minimum value will be 0.
                    },
                },
            },
        };
        const list = this.history || [];
        const data = list
            .filter((_, index) => index > list.length - 60 && Math.floor(_.id / 1000) % 2 === 0)
            .map((event) => ({
                x: format(event.id, 'HH:mm:ss'),
                y: event.value,
            }));
        this._chart = new Chart(context, {
            type: 'line',
            // showXLabels: 6,
            data: {
                labels: data.map((point) => point.x),
                datasets: [
                    {
                        data: data.map((point) => point.y),
                        backgroundColor: ['#00695c'],
                        borderColor: ['#00695c'],
                    },
                ],
            },
            options,
        });
    }
}
