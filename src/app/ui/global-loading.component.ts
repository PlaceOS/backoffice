import { Component, inject, OnInit, signal } from '@angular/core';
import { authority, isOnline, token } from '@placeos/ts-client';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AsyncHandler } from '../common/async-handler.class';
import { firstTruthyValueFrom } from '../common/general';
import { getLoadingMessage } from '../common/placeos';
import { SettingsService } from '../common/settings.service';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'global-loading',
    template: `
        @if (loading()) {
            <div
                loader
                class="bg-base-300 pointer-events-auto fixed inset-0 z-9998 flex items-center justify-center"
            >
                <div
                    class="border-base-300 bg-base-100 absolute bottom-5 left-1/2 w-[24rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-lg border p-2 text-center text-xs shadow"
                >
                    <p class="text-center font-mono">{{ message() }}</p>
                </div>
                <div
                    class="border-base-300 absolute bottom-2 left-1/2 w-[24rem] -translate-x-1/2 overflow-hidden rounded-full border shadow"
                >
                    <mat-progress-bar
                        mode="indeterminate"
                        class="scale-150 rounded"
                    ></mat-progress-bar>
                </div>
            </div>
        }
    `,
    styles: [
        `
            :host {
                pointer-events: none;
            }

            [loader] {
                background-image: linear-gradient(
                    to right,
                    #c62828 0%,
                    #ef5350 100%
                );
            }
        `,
    ],
    imports: [MatProgressBarModule, TranslatePipe],
})
export class GlobalLoadingComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);

    public loading = signal(true);
    public readonly online = signal(true);
    public readonly message = getLoadingMessage();

    public async ngOnInit() {
        this.loading.set(true);
        await firstTruthyValueFrom(this._settings.initialised);
        this.online.set(isOnline());
        this.interval(
            'has_token',
            () => {
                this.online.set(isOnline());
                if (!authority() || !token()) return;
                this.loading.set(false);
                this.online.set(isOnline());
                this.clearInterval('has_token');
            },
            1000,
        );
    }
}
