import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { PlaceCluster } from '@placeos/ts-client';

import Chart from 'chart.js/dist/Chart.bundle.js'
import * as dayjs from 'dayjs';

@Component({
    selector: 'engine-cluster-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class PlaceClusterItemComponent implements OnInit {
    /** Cluster to display details for */
    @Input() public cluster: PlaceCluster;
    /** List of historical data for cluster's CPU usage */
    @Input() public cpu_history: { id: number; value: number }[];

    public cpu_chart: any;

    @ViewChild('chart', { static: true }) public chart_el: ElementRef<HTMLCanvasElement>;

    constructor() {}

    public ngOnInit() {
        this.generateCharts();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.cpu_history) {
            this.generateCharts;
        }
    }

    public generateCharts(): void {
        const context = this.chart_el.nativeElement.getContext('2d');
        const options = {
            legend: {
                display: false
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'CPU Usage(%)'
                        },
                        display: true,
                        ticks: {
                            suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                            suggestedMax: 100,
                            stepSize: 25,
                            // OR //
                            beginAtZero: true // minimum value will be 0.
                        }
                    }
                ]
            }
        };
        const list = this.cpu_history || [];
        const data = list
            .filter((_, index) => index > list.length - 60 && Math.floor(_.id / 1000) % 2 === 0)
            .map(event => ({
                x: dayjs(event.id).format('HH:mm:ss'),
                y: event.value
            }));
        this.cpu_chart = new Chart(context, {
            type: 'line',
            showXLabels: 6,
            data: {
                labels: data.map(point => point.x),
                datasets: [
                    {
                        data: data.map(point => point.y),
                        backgroundColor: ['#00695c'],
                        borderColor: ['#00695c']
                    }
                ]
            },
            options
        });
    }
}
