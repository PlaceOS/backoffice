
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';
import { ContextMenuComponent } from '../../shared/components/context-menu/context-menu.component';

import * as moment from 'moment';
import * as Chart from 'chart.js';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'app-metrics',
    templateUrl: './metrics.template.html',
    styleUrls: ['./metrics.styles.scss']
})
export class MetricsComponent extends BaseComponent implements OnInit {
    public model: any = {};
    public context_menu = ContextMenuComponent;

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
        this.model.options = ['Last Hour', 'Last Day', 'Last Week', 'Last Month'];
        this.interval('time', () => this.updateTime(), 1000);
        this.interval('histograms', () => this.loadHistograms(), 5 * 60 * 1000);
        this.subs.obs.route = this.route.paramMap.subscribe((params) => {
            if (params.has('period')) {
                this.model.period = params.get('period');
                this.loadHistograms();
            }
            for (const opt of this.model.options) {
                const index = opt.toLowerCase().indexOf(this.model.period.toLowerCase());
                if (index >= 0) {
                    this.model.index = this.model.options.indexOf(opt);
                    break;
                }
            }
            if (!this.model.index || this.model.index < 0) { this.model.index = 1; }
        });
        this.updateTime();
        this.init();
    }

    public init() {
        if (!this.service.ready()) {
            return this.timeout('init', () => this.init());
        }
        this.updateContextList();
        if (!this.model.period) { this.model.period = 'day'; }
        for (const opt of this.model.options) {
            const index = opt.toLowerCase().indexOf(this.model.period.toLowerCase());
            if (index >= 0) {
                this.model.index = this.model.options.indexOf(opt);
                break;
            }
        }
        if (!this.model.index || this.model.index < 0) { this.model.index = 1; }
        console.log('Index:', this.model.index);
        this.loadOfflineDevices();
        this.loadHistograms();
    }

    public goto(item, route?) {
        if (item.id) {
            this.service.navigate([(route || 'systems').toLowerCase(), item.id]);
        } else if (item.link) {
            window.open(item.link, '_blank');
        }
    }

    public updateTime() {
        const now = moment();
        this.model.time = now.format('hh:mm A');
        this.model.date = now.format('ddd, MMM D');
        this.model.hour_angle = (now.hour() % 12 + now.minute() / 60) / 12 * 360;
        this.model.minute_angle = (now.minute() + now.second() / 60) / 60 * 360;
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
        this.service.Stats.connections({ period: this.model.period || 'day' }).then((details) => {
            console.log('Details:', details);
            const start = moment(details.start).add(-details.interval, 's');
            const labels = [];
            const data = [];
            for (const point of details.histogram) {
                labels.push(start.add(details.interval, 's').toDate());
                data.push(point.max);
            }
            console.log('Connected Labels:', labels);
            console.log('Connected Data:', data);
            this.updateChart('connected', 'Connected Devices', labels, data);
        });
        this.service.Stats.offline({ period: this.model.period || 'day' }).then((details) => {
            console.log('Details:', details);
            const start = moment(details.start).add(-details.interval, 's');
            const labels = [];
            const data = [];
            for (const point of details.histogram) {
                labels.push(start.add(details.interval, 's').toDate());
                data.push(point.max);
            }
            this.updateChart('offline', 'Offline Devices', labels, data);
        });
        this.service.Stats.triggers({ period: this.model.period || 'day' }).then((details) => {
            console.log('Details:', details);
            const start = moment(details.start).add(-details.interval, 's');
            const labels = [];
            const data = [];
            for (const point of details.histogram) {
                labels.push(start.add(details.interval, 's').toDate());
                data.push(point.max);
            }
            this.updateChart('triggers', 'Active Triggers', labels, data);
        });
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

    public changePeriod(index) {
        this.model.period = this.model.options[index].split(' ')[1].toLowerCase();
        this.model.index = index;
        this.loadHistograms();
    }

    public event(e) {
        console.log('Event:', e);
        if (e.data) {
            if (e.data.id === 'open') {
                window.open(`#/dashboard/${this.model.period || 'day'}?trust=true`, '_blank');
            } else if (e.data.id === 'copy') {
                Utils.copyToClipboard(`#/dashboard/${this.model.period || 'day'}?trust=true`);
                this.service.info('Copied Fullscreen URL to clipboard');
            } else if (e.data.id === 'hour') {
                this.changePeriod(0);
            } else if (e.data.id === 'day') {
                this.changePeriod(1);
            } else if (e.data.id === 'week') {
                this.changePeriod(2);
            } else if (e.data.id === 'month') {
                this.changePeriod(3);
            }
        }
    }

    public updateContextList() {
        this.model.context_list = [
            { id: 'open', name: 'Open Fullscreen URL', icon: { class: 'material-icons', value: 'open_in_new' } },
            { id: 'copy', name: 'Copy Fullscreen URL', icon: { class: 'material-icons', value: 'http' } },
            { id: 'hidden', name: 'Hidden Issues', icon: { class: 'material-icons', value: 'visibility' } }
        ];
        const mobile = Utils.isMobileDevice();
        if (mobile || true) {
            this.model.context_list = this.model.context_list.concat([
                { id: 'hour', name: 'Set period to hour', icon: { class: 'material-icons', value: 'timeline' } },
                { id: 'day', name: 'Set period to day', icon: { class: 'material-icons', value: 'access_time' } },
                { id: 'week', name: 'Set period to week', icon: { class: 'material-icons', value: 'event' } },
                { id: 'month', name: 'Set period to month', icon: { class: 'material-icons', value: 'date_range' } }
            ]);
        }
    }
}
