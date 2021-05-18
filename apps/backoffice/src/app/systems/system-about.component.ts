import { Component } from '@angular/core';
import { PlaceSystem } from '@placeos/ts-client';
import { SystemStateService } from './system-state.service';


@Component({
    selector: 'system-about',
    template: `
        <section class="flex items-center space-x-2 mb-4">
            <button
                mat-button
                class="flex-1 sm:flex-none"
                (click)="start()"
                i18n="@@systemStartAction"
            >
                Start System
            </button>
            <button
                mat-button
                class="flex-1 sm:flex-none"
                (click)="stop()"
                i18n="@@systemStopAction"
            >
                Stop System
            </button>
        </section>
        <section class="details">
            <div class="flex items-center space-x-2" *ngIf="item?.support_url">
                <label i18n="@@systemUrlLabel">Support URL:</label>
                <div class="value">
                    <a class="underline" [href]="item?.support_url" target="_blank">{{
                        item?.support_url
                    }}</a>
                </div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.bookable">
                <label i18n="@@systemBookableLabel">Bookable Room:</label>
                <div class="value">{{ item?.bookable ? 'Yes' : 'No' }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.bookable && item?.email">
                <label i18n="@@emailLabel">Email:&nbsp;</label>
                <a
                    *ngIf="item?.email"
                    class="underline select-all"
                    [href]="'mailto:' + item?.email"
                    target="_blank"
                    >{{ item?.email }}</a
                >
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.capacity">
                <label i18n="@@capacityLabel">Capacity:</label>
                <div class="value">{{ item?.capacity }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.installed_ui_devices">
                <label i18n="@@systemPanelCountLabel">Installed Touch Panels:</label>
                <div class="value">{{ item?.installed_ui_devices }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.created_at">
                <label i18n="@@systemCreatedAtLabel">Created:</label>
                <div class="value">{{ item?.created_at * 1000 | dateFrom }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.updated_at">
                <label i18n="@systemUpdatedAtLabel">Updated:</label>
                <div class="value">{{ item?.updated_at * 1000 | dateFrom }}</div>
            </div>
        </section>
        <hr class="my-4" />
        <header class="font-medium text-lg" i18n="@@settingsLabel">Settings</header>
        <section *ngIf="item?.settings && other_settings; else load_state">
            <a-settings-form
                [id]="item?.id"
                [merge]="true"
                [settings]="item?.settings"
                [merge_settings]="(other_settings | async) || []"
            ></a-settings-form>
        </section>
        <ng-template #load_state>
            <div class="flex flex-col p-8 items-center justify-center">
                <mat-spinner class="mb-4" [diameter]="32"></mat-spinner>
                <p i18n="@@systemLoadingLabel">Loading system settings...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
                height: 100%;
                width: 100%;
            }

            button {
                min-width: 8rem;
            }
        `,
    ],
})
export class SystemAboutComponent {
    /** List of settings for associated modules, drivers and zones */
    public readonly other_settings = this._service.associated_settings;

    public readonly start = () => this._service.startSystem();
    public readonly stop = () => this._service.stopSystem();

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    constructor(private _service: SystemStateService) {}
}
