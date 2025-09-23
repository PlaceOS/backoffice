import { Component, OnInit, inject } from '@angular/core';
import { authority } from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { timer } from 'rxjs';
import { i18n } from '../common/locale.service';
import { SettingsService } from '../common/settings.service';
import { SafePipe } from '../ui/pipes/safe.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { ClockComponent } from './clock.component';

@Component({
    selector: 'app-metrics',
    template: `
        <div
            class="flex h-full w-full flex-col bg-base-100"
            [class.fullscreen]="fullscreen"
        >
            <div
                class="flex w-full items-center border-b border-neutral bg-base-200 px-4 py-2 text-base-content"
            >
                <div class="flex-1 text-2xl font-medium">
                    {{ 'COMMON.METRICS' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <clock></clock>
                    <div class="display">
                        <div class="time">{{ time | date: 'shortTime' }}</div>
                        <div class="day">{{ time | date: 'mediumDate' }}</div>
                    </div>
                </div>
            </div>
            <div class="relative h-[60vh] w-full flex-1">
                <iframe
                    class="absolute inset-0 h-full w-full"
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
    imports: [SafePipe, CommonModule, TranslatePipe, ClockComponent],
})
export class MetricsComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);

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

    public async ngOnInit() {
        this.updateTime();
        this.interval('time', () => this.updateTime(), 1000);
        await timer(1000).toPromise();
        this._settings.title = i18n('COMMON.METRICS');
    }

    public updateTime() {
        this.time = new Date();
    }
}
