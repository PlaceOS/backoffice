import { Component, inject } from '@angular/core';
import {
    PlaceSettings,
    querySettings,
    settingsHistory,
} from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ActiveItemService } from '../common/item.service';
import { DiffViewerComponent } from './diff-viewer.component';
import { SettingsFormatPipe } from './pipes/settings-format.pipe';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'settings-history-view',
    template: `
        <div class="flex items-center justify-between">
            <mat-form-field appearance="outline" class="h-[3.25rem] flex-1">
                <mat-select
                    ngModel
                    (ngModelChange)="old_setting.next($event)"
                    [disabled]="
                        !(active_setting | async) || !(history$ | async)?.length
                    "
                    [placeholder]="'COMMON.SELECT_OLD_SETTING' | translate"
                >
                    @for (option of history$ | async; track option) {
                        <mat-option [value]="option">
                            {{ option | formatSettings }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <div class="w-px flex-1"></div>
            <mat-form-field appearance="outline" class="h-[3.25rem] flex-1">
                <mat-select
                    ngModel
                    (ngModelChange)="active_setting.next($event)"
                    [placeholder]="'COMMON.SELECT_NEW_SETTING' | translate"
                >
                    @for (option of settings$ | async; track option) {
                        <mat-option [value]="option">
                            {{ option | formatSettings }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
        </div>
        @if ((active_setting | async) && (old_setting | async)) {
            <div class="w-full p-4">
                <diff-viewer
                    [modified]="(active_setting | async)?.settings_string"
                    [original]="(old_setting | async)?.settings_string"
                ></diff-viewer>
            </div>
        } @else {
            @if ((history$ | async).length) {
                <div class="w-full p-16 text-center opacity-30">
                    {{ 'COMMON.SETTINGS_COMPARE_SELECT_MSG' | translate }}
                </div>
            } @else {
                <div class="w-full p-16 text-center opacity-30">
                    {{ 'COMMON.SELECTED_FIRST_VERSION' | translate }}
                </div>
            }
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        DiffViewerComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        SettingsFormatPipe,
    ],
})
export class SettingsHistoryViewComponent {
    private _service = inject(ActiveItemService);

    public readonly active_setting = new BehaviorSubject<PlaceSettings>(null);
    public readonly old_setting = new BehaviorSubject<PlaceSettings>(null);

    public readonly settings$ = this._service.item.pipe(
        switchMap((i) =>
            !i ? of({ data: [] }) : querySettings({ parent_id: i.id }),
        ),
        map((_) => _.data),
        shareReplay(1),
    );
    public readonly history$ = this.active_setting.pipe(
        switchMap((_) => (!_ ? of([]) : settingsHistory(_.id))),
    );
}
