import { Component } from "@angular/core";
import { startOfMinute } from "date-fns";
import { first } from "rxjs/operators";
import { MqttDashboardStateService } from "./dashboard-state.service";

@Component({
    selector: 'mqtt-dashboard',
    template: `
        <div class="h-full w-full bg-white dark:bg-[#424242] flex flex-col">
            <div class="w-full px-4 py-2 bg-secondary flex items-center justify-between text-white">
                <h2 class="text-2xl">PlaceOS Alerts</h2>
                <div class="flex items-center space-x-2">
                    <clock></clock>
                    <div class="text-right flex flex-col items-center justify-center">
                        <div class="">{{ time | date:'shortTime' }}</div>
                        <div>{{ time | date:'EEE, MMM d' }}</div>
                    </div>
                </div>
            </div>
            <div class="w-full h-1/2 flex-1 overflow-auto p-4 space-y-4">
                <div class="divide-y divide-white/50 border border-white/50">
                    <div class="bg-[#212121] text-white p-2">
                        <h2 class="text-xl">2.30.10 - Activity Space (sys-QjKOiqWK8c)</h2>
                    </div>
                    <div class="bg-red-600 p-2"></div>
                    <div class="bg-teal-800 p-2"></div>
                </div>
                <div class="divide-y divide-white/50 border border-white/50">
                    <div class="bg-[#212121] text-white p-2">
                        <h2 class="text-xl">2.30.11 - Activity Space (sys-QjKOiqWK8c)</h2>
                    </div>
                    <div class="bg-red-600 px-2 flex items-center text-white">
                        <div class="w-1/6">Display</div>
                        <div class="flex-1">Panasonic</div>
                        <div class="w-1/6">10.121.212.10</div>
                        <div class="w-1/6">Disconnected</div>
                        <div class="w-1/6">A year ago</div>
                        <button mat-icon-button>
                            <app-icon class="text-xl">done</app-icon>
                        </button>
                    </div>
                    <div class="bg-teal-800 px-2 flex items-center text-white">
                        <div class="w-1/6">Interface</div>
                        <div class="flex-1">2 Devices, none connected</div>
                        <div class="w-1/6">Important</div>
                        <div class="w-1/6">A year ago</div>
                        <button mat-icon-button>
                            <app-icon class="text-xl">done</app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        :host > div {
            z-index: 9999;
        }
    `]
})
export class MqttDashboardComponent {

    public get time() {
        return startOfMinute(Date.now());
    }

    constructor(private _state: MqttDashboardStateService) {
        this._state.connected.pipe(first(_ => _)).subscribe(() => {
            this._state.query('placeos/+/state/+/+/+/+/+/+/+/connected', 'false').subscribe((d) => {
                console.log('Data:', d);
            })
        });
    };
}
