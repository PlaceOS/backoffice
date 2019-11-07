
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDirective } from '../../shared/globals/base.directive';
import { ApplicationService } from '../../services/app.service';
import { ContextMenuComponent } from '../../shared/components/context-menu/context-menu.component';
import { isMobileDevice, copyToClipboard } from 'src/app/shared/utilities/general.utilities';

import * as dayjs from 'dayjs';
import * as Chart from 'chart.js';
import { EngineModule, EngineSystem } from '@acaprojects/ts-composer';
import { ApplicationLink } from 'src/app/shared/utilities/settings.interfaces';

@Component({
    selector: 'app-metrics',
    templateUrl: './metrics.template.html',
    styleUrls: ['./metrics.styles.scss']
})
export class MetricsComponent extends BaseDirective implements OnInit {
    /** Context menu component */
    public context_menu = ContextMenuComponent;
    /** List of period options */
    public options: string[];
    /** Active period */
    public period: string;
    /** Index of the active period */
    public index: number;
    /** Whether to only render the metrics view */
    public fullscreen: boolean;
    /** Current time of the day */
    public time: string;
    /** Display string for the current day */
    public date: string;
    /** Angle to display the hour hand of the clock at */
    public hour_angle: number;
    /** Angle to display the minute hand of the clock at */
    public minute_angle: number;
    /** Angle to display the seconds hand of the clock at */
    public second_angle: number;
    /** List of modules that are currently offline */
    public offline_devices: EngineModule[];

    public systems: EngineSystem[];

    public system_map: { [id: string]: any } = {};
    /** Data and options for the trigger chart */
    public triggers_chart: any;
    /** List of action available in the context menu */
    public context_list: ApplicationLink[];

    @ViewChild('connected_graph', { static: true }) public connected: ElementRef;
    @ViewChild('offline_graph', { static: true }) public offline: ElementRef;
    @ViewChild('triggers_graph', { static: true }) public triggers: ElementRef;

    constructor(private service: ApplicationService, private route: ActivatedRoute, private router: Router) {
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
        this.options = ['Last Hour', 'Last Day', 'Last Week', 'Last Month'];
        this.interval('time', () => this.updateTime(), 1000);
        this.interval('histograms', () => this.loadHistograms(), 5 * 60 * 1000);
        this.subscription('route', this.route.paramMap.subscribe((params) => {
            if (params.has('period')) {
                this.period = params.get('period');
                this.loadHistograms();
            }
            for (const opt of this.options) {
                const index = opt.toLowerCase().indexOf(this.period.toLowerCase());
                if (index >= 0) {
                    this.index = this.options.indexOf(opt);
                    break;
                }
            }
            if (!this.index || this.index < 0) { this.index = 1; }
        }));
        this.updateTime();
        this.init();
    }

    public init() {
        if (!this.service.is_ready) {
            return this.timeout('init', () => this.init());
        }
        this.updateContextList();
        if (!this.period) { this.period = 'day'; }
        for (const opt of this.options) {
            const index = opt.toLowerCase().indexOf(this.period.toLowerCase());
            if (index >= 0) {
                this.index = this.options.indexOf(opt);
                break;
            }
        }
        this.fullscreen = this.router.url.indexOf('dashboard') >= 0;
        if (!this.index || this.index < 0) { this.index = 1; }
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
        const now = dayjs();
        this.time = now.format('hh:mm A');
        this.date = now.format('ddd, MMM D');
        this.hour_angle = (now.hour() % 12 + now.minute() / 60) / 12 * 360;
        this.minute_angle = (now.minute() + now.second() / 60) / 60 * 360;
        this.second_angle = now.second() / 60 * 360;
        console.log('Update time:', this.hour_angle, this.minute_angle, this.second_angle);
    }

    public loadOfflineDevices() {
        const now = dayjs();
        this.service.Modules.query({ as_of: now.unix(), connected: false, running: true }).then((list) => {
            this.offline_devices = list;
            this.system_map = {};
            this.systems = [];
            for (const item of list) {
                this.service.Systems.query({ module_id: item.id }).then((systems) => {
                    for (const system of systems) {
                        if (!this.system_map[system.id]) { this.system_map[system.id] = []; }
                        this.system_map[system.id].push(item);
                        let found = false;
                        for (const sys of this.systems) {
                            if (sys.id === system.id) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) { this.systems.push(system); }
                    }
                }, () => null);
            }
        }, () => null);
    }

    public loadHistograms() {
        this.service.Stats.connections({ period: this.period || 'day' }).then((details) => {
            const start = dayjs(details.start).add(-details.interval, 's');
            const labels = [];
            const data = [];
            for (const point of details.histogram) {
                labels.push(start.add(details.interval, 's').toDate());
                data.push(point.max);
            }
            this.updateChart('connected', 'Connected Devices', labels, data);
        });
        this.service.Stats.offline({ period: this.period || 'day' }).then((details) => {
            const start = dayjs(details.start).add(-details.interval, 's');
            const labels = [];
            const data = [];
            for (const point of details.histogram) {
                labels.push(start.add(details.interval, 's').toDate());
                data.push(point.max);
            }
            this.updateChart('offline', 'Offline Devices', labels, data);
        });
        this.service.Stats.triggers({ period: this.period || 'day' }).then((details) => {
            const start = dayjs(details.start).add(-details.interval, 's');
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
        const now = dayjs();
        this.triggers_chart = new Chart(context, {
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
        this.period = this.options[index].split(' ')[1].toLowerCase();
        this.index = index;
        this.loadHistograms();
    }

    public event(e) {
        if (e.data) {
            if (e.data.id === 'open') {
                window.open(`#/metrics/dashboard/${this.period || 'day'}?trust=true`, '_blank');
            } else if (e.data.id === 'copy') {
                copyToClipboard(`#/metrics/dashboard/${this.period || 'day'}?trust=true`);
                this.service.notifyInfo('Copied Fullscreen URL to clipboard');
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
        this.context_list = [
            { route: 'open', name: 'Open Fullscreen URL', icon: { type: 'icon', class: 'material-icons', content: 'open_in_new' } },
            { route: 'copy', name: 'Copy Fullscreen URL', icon: { type: 'icon', class: 'material-icons', content: 'http' } },
            { route: 'hidden', name: 'Hidden Issues', icon: { type: 'icon', class: 'material-icons', content: 'visibility' } }
        ];
        const mobile = isMobileDevice();
        if (mobile || true) {
            this.context_list = this.context_list.concat([
                { route: 'hour', name: 'Set period to hour', icon: { type: 'icon', class: 'material-icons', content: 'timeline' } },
                { route: 'day', name: 'Set period to day', icon: { type: 'icon', class: 'material-icons', content: 'access_time' } },
                { route: 'week', name: 'Set period to week', icon: { type: 'icon', class: 'material-icons', content: 'event' } },
                { route: 'month', name: 'Set period to month', icon: { type: 'icon', class: 'material-icons', content: 'date_range' } }
            ]);
        }
    }
}
