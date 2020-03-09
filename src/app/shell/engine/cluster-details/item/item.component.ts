import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { EngineCluster } from '@placeos/ts-client';

import * as Chart from 'chart.js';

@Component({
    selector: 'engine-cluster-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class EngineClusterItemComponent implements OnInit {
    /** Cluster to display details for */
    @Input() public cluster: EngineCluster;

    @Input() public cpu_history: number[];

    public cpu_chart: any;

    @ViewChild('chart', { static: true }) public chart_el: ElementRef<HTMLCanvasElement>;

    constructor() {}

    public ngOnInit() {
        this.generateCharts();
    }

    public generateCharts(): void {
        const context = this.chart_el.nativeElement.getContext('2d');
        const options = {

        };
        this.cpu_chart = new Chart(context, {
            type: 'line',
            data: {},
            options
        })
    }
}
