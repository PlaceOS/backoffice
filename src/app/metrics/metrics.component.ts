import { Component, OnInit } from '@angular/core';
import { authority } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { SettingsService } from '../common/settings.service';

import * as dayjs from 'dayjs';

@Component({
    selector: 'app-metrics',
    templateUrl: './metrics.template.html',
    styleUrls: ['./metrics.styles.scss'],
})
export class MetricsComponent extends BaseClass implements OnInit {
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

    /** URL for the metrics interface */
    public get metrics_url(): string {
        const api_authority = authority();
        return api_authority ? api_authority.metrics || api_authority.config.metrics : '';
    }

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit() {
        this.updateTime();
        this.interval('time', () => this.updateTime(), 1000);
        this._settings.title = 'Metrics';
    }

    public updateTime() {
        const now = dayjs();
        this.time = now.format('hh:mm A');
        this.date = now.format('ddd, MMM D');
        this.hour_angle = (((now.hour() % 12) + now.minute() / 60) / 12) * 360;
        this.minute_angle = ((now.minute() + now.second() / 60) / 60) * 360;
        this.second_angle = (now.second() / 60) * 360;
    }
}
