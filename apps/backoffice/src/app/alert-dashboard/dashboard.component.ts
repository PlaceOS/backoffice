import { Component } from '@angular/core';
import { showSystem } from '@placeos/ts-client';
import { startOfMinute } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { randomInt, unique } from '../common/general';
import { MqttDashboardStateService } from './dashboard-state.service';

type MqttQueryResponse = [string[], Record<string, any>][];

const SYSTEMS = {};

@Component({
    selector: 'mqtt-dashboard',
    template: `
        <div class="[#424242] flex h-full w-full flex-col bg-base-100">
            <div
                class="flex w-full items-center justify-between bg-secondary px-4 py-2 text-base-100"
            >
                <h2 class="text-2xl">PlaceOS Alerts</h2>
                <div class="flex items-center space-x-2">
                    <clock></clock>
                    <div
                        class="flex flex-col items-center justify-center text-right"
                    >
                        <div class="">{{ time | date: 'shortTime' }}</div>
                        <div>{{ time | date: 'EEE, MMM d' }}</div>
                    </div>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 space-y-4 overflow-auto p-4">
                @for (sys of systems | async; track sys.id) {
                    <div
                        class="divide-base-100/50 border-base-100/50 divide-y border"
                    >
                        <div class="bg-[#212121] p-2 text-base-100">
                            <h2 class="text-xl">
                                {{ sys.display_name || sys.name }} ({{
                                    sys.id
                                }})
                            </h2>
                        </div>
                        @for (ev of sys.events; track ev.id) {
                            <div
                                [class.bg-error]="!ev.value"
                                [class.bg-teal-800]="ev.value"
                                class="flex items-center px-2 text-base-100"
                            >
                                <div class="w-1/6">{{ ev.mod }}</div>
                                <div class="flex-1">{{ ev.driver_id }}</div>
                                <div class="w-1/6">{{ ev.ip }}</div>
                                <div class="w-1/6">
                                    {{
                                        ev.value ? 'Connected' : 'Disconnected'
                                    }}
                                </div>
                                <div class="w-1/6">
                                    {{ ev.timestamp * 1000 | dateFrom }}
                                </div>
                                <button btn icon>
                                    <app-icon class="text-xl">done</app-icon>
                                </button>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host > div {
                z-index: 9999;
            }
        `,
    ],
    standalone: false,
})
export class MqttDashboardComponent {
    public readonly systems = new BehaviorSubject([]);

    public get time() {
        return startOfMinute(Date.now());
    }

    constructor(private _state: MqttDashboardStateService) {
        this._state.connected
            .pipe(first((_) => _))
            .subscribe(() =>
                this._state
                    .query('placeos/+/state/+/+/+/+/+/+/+/connected')
                    .subscribe((d) => this._processQuery(d)),
            );
    }

    private async _processQuery(data: MqttQueryResponse) {
        const details = data.map(([_, d]) => ({
            ...d,
            id: `event-${randomInt(9999_9999_9999)}`,
            sys_id: _[6],
            driver_id: _[7],
            mod: `${_[8]}_${_[9]}`,
        }));
        const system_ids = unique(details.map((_) => _.sys_id));
        const systems = [];
        for (const id of system_ids) {
            const sys = SYSTEMS[id] || (await showSystem(id).toPromise());
            systems.push({
                id,
                ...sys,
                events: details.filter((d) => d.sys_id === id),
            });
            SYSTEMS[id] = sys;
        }
        this.systems.next(systems);
    }
}
