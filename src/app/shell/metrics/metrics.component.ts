
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';

import * as moment from 'moment';
import * as Chart from 'chart.js';

@Component({
    selector: 'app-metrics',
    templateUrl: './metrics.template.html',
    styleUrls: ['./metrics.styles.scss']
})
export class MetricsComponent extends BaseComponent implements OnInit {
    public model: any = {};

    @ViewChild('connected_graph') public connected: ElementRef;
    @ViewChild('offline_graph') public offline: ElementRef;
    @ViewChild('triggers_graph') public triggers: ElementRef;

    constructor(private service: AppService, private route: ActivatedRoute) {
        super();
        Chart.defaults.global.defaultFontColor = 'white';
        Chart.defaults.global.legend.display = false;
        Chart.defaults.global.title.fontSize = 16;
        Chart.defaults.global.elements.line.tension = 0;
        Chart.defaults.global.elements.line.borderColor = '#26A69A';
        Chart.defaults.global.elements.point.backgroundColor = '#26A69A';
        Chart.defaults.global.responsive = true;
    }

    public ngOnInit() {
        this.interval('time', () => this.updateTime(), 1000);
        this.interval('histograms', () => this.updateTime(), 5 * 60 * 1000);
        this.subs.obs.route = this.route.paramMap.subscribe((params) => {
            if (params.has('period')) {
                this.model.period = params.get('period');
                this.loadHistograms();
            }
        });
        this.updateTime();
        this.init();
    }

    public init() {
        if (!this.service.ready()) {
            return this.timeout('init', () => this.init());
        }
        if (!this.model.period) { this.model.period = 'day'; }
        this.loadOfflineDevices();
        this.loadHistograms();
    }

    public updateTime() {
        const now = moment();
        this.model.time = now.format('hh:mm A');
        this.model.date = now.format('ddd, MMM D');
        this.model.hour_angle = now.hour() % 12 / 12 * 360;
        this.model.minute_angle = now.minute() / 60 * 360;
        this.model.second_angle = now.second() / 60 * 360;
    }

    public loadOfflineDevices() {
        const now = moment();
        this.service.Modules.query({ as_of: now.unix(), connected: false, running: true }).then((list) => {
            this.model.offline_devices = list;
            this.model.system_map = {};
            this.model.systems = [];
            for (const item of list) {
                this.service.Systems.query({ module_id: item.id }).then((systems) => {
                    for (const system of systems) {
                        if (!this.model.system_map[system.id]) { this.model.system_map[system.id] = []; }
                        this.model.system_map[system.id].push(item);
                        let found = false;
                        for (const sys of this.model.systems) {
                            if (sys.id === system.id) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) { this.model.systems.push(system); }
                    }
                }, () => null);
            }
        }, () => null);
    }

    public loadHistograms() {
        const now = moment();
        const labels = [now.toDate(), now.add(1, 'd').toDate(), now.add(1, 'd').toDate(), now.add(1, 'd').toDate(), now.add(1, 'd').toDate(), now.add(1, 'd').toDate()];
        if (this.connected && this.connected.nativeElement) {
            const data = [];
            for (let i = 0; i < 6; i++) { data.push(Math.floor(Math.random() * 20)); }
            this.updateChart('connected', 'Connected Devices', labels, data);
        }
        if (this.offline && this.offline.nativeElement) {
            const data = [];
            for (let i = 0; i < 6; i++) { data.push(Math.floor(Math.random() * 20)); }
            this.updateChart('offline', 'Offline Devices', labels, data);
        }
        if (this.triggers && this.triggers.nativeElement) {
            const data = [];
            for (let i = 0; i < 6; i++) { data.push(Math.floor(Math.random() * 100)); }
            this.updateChart('triggers', 'Active Triggers', labels, data);
        }
    }

    public updateChart(name, title, labels, data) {
        const context = this[name].nativeElement.getContext('2d');
        const now = moment();
        this.model.triggers_chart = new Chart(context, {
            type: 'line',
            data: {
                labels,
                datasets: [{ data }]
            },
            options: {
                fill: false,
                title: { display: true, text: title },
                scales: {
                    xAxes: [{ type: 'time', display: true }],
                    yAxes: [{  ticks: { beginAtZero: true }, display: true }]
                }
            }
        });
    }
}
