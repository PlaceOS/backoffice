import { Component, OnInit } from '@angular/core';
import { authority } from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { SettingsService } from '../common/settings.service';

@Component({
    selector: 'app-metrics',
    template: `
        <div
            class="h-full w-full flex flex-col bg-base-100"
            [class.fullscreen]="fullscreen"
        >
            <div
                class="flex items-center w-full bg-base-200 text-base-content py-2 px-4 border-b border-neutral"
            >
                <div class="text-2xl flex-1 font-medium" i18n="@@metricsHeader">
                    Metrics
                </div>
                <div class="flex items-center space-x-2">
                    <clock></clock>
                    <div class="display">
                        <div class="time">{{ time | date: 'shortTime' }}</div>
                        <div class="day">{{ time | date: 'mediumDate' }}</div>
                    </div>
                </div>
            </div>
            <div class="flex-1 w-full h-[60vh] relative">
                <iframe
                    class="absolute inset-0 w-full h-full"
                    [src]="metrics_url | safe: 'resource'"
                ></iframe>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
            .fullscreen {
                position: fixed !important;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100vw;
                z-index: 9999;
            }
        `,
    ],
})
export class MetricsComponent extends AsyncHandler implements OnInit {
    /** Whether to only render the metrics view */
    public fullscreen: boolean;

    public time: Date;

    /** URL for the metrics interface */
    public get metrics_url(): string {
        const api_authority = authority();
        return api_authority
            ? api_authority.metrics || api_authority.config.metrics
            : '';
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
        this.time = new Date();
    }
}
