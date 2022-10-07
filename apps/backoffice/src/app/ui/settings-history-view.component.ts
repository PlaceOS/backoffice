import { Component } from '@angular/core';
import {
    PlaceSettings,
    querySettings,
    settingsHistory,
} from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'settings-history-view',
    template: `
        <div class="flex items-center justify-between">
            <mat-form-field appearance="outline" class="flex-1 h-[3.25rem]">
                <mat-select
                    ngModel
                    (ngModelChange)="old_setting.next($event)"
                    [disabled]="
                        !(active_setting | async) || !(history$ | async)?.length
                    "
                    placeholder="Select old settings"
                >
                    <mat-option
                        *ngFor="let option of history$ | async"
                        [value]="option"
                    >
                        {{ option | formatSettings }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <div class="flex-1 w-px"></div>
            <mat-form-field appearance="outline" class="flex-1 h-[3.25rem]">
                <mat-select
                    ngModel
                    (ngModelChange)="active_setting.next($event)"
                    placeholder="Select current settings"
                >
                    <mat-option
                        *ngFor="let option of settings$ | async"
                        [value]="option"
                    >
                        {{ option | formatSettings }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        <div
            class="w-full p-4"
            *ngIf="
                (active_setting | async) && (old_setting | async);
                else empty_state
            "
        >
            <diff-viewer
                [modified]="(active_setting | async)?.settings_string"
                [original]="(old_setting | async)?.settings_string"
            ></diff-viewer>
        </div>
        <ng-template #empty_state>
            <div
                class="w-full p-16 opacity-40 text-center"
                *ngIf="(history$ | async).length; else no_history_state"
            >
                Select an current setting and old setting to compare them.
            </div>
        </ng-template>
        <ng-template #no_history_state>
            <div class="w-full p-16 opacity-40 text-center">
                Selected setting is the first version
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class SettingsHistoryViewComponent {
    public readonly active_setting = new BehaviorSubject<PlaceSettings>(null);
    public readonly old_setting = new BehaviorSubject<PlaceSettings>(null);

    public readonly settings$ = this._service.item.pipe(
        switchMap((i) => !i ? of({ data:[] }) : querySettings({ parent_id: i.id })),
        map(_ => _.data),
        shareReplay(1)
    );
    public readonly history$ = this.active_setting.pipe(
        switchMap((_) => (!_ ? of([]) : settingsHistory(_.id)))
    );

    constructor(private _service: ActiveItemService) {}
}
