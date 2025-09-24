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
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'settings-history-view',
    template: `
        <div class="p-4">
            <div class="flex items-center justify-between space-x-4">
                <mat-form-field
                    appearance="outline"
                    class="h-[3.25rem] w-1/2 max-w-[32rem] flex-1"
                >
                    <mat-select
                        ngModel
                        (ngModelChange)="old_setting.next($event)"
                        [disabled]="
                            !(active_setting | async) ||
                            !(history$ | async)?.length
                        "
                        [placeholder]="'COMMON.SELECT_OLD_SETTING' | translate"
                    >
                        <mat-select-trigger>
                            @let value = old_setting.getValue() || {};
                            <div
                                class="flex items-center justify-between space-x-4"
                            >
                                <div>{{ types[value.encryption_level] }}</div>
                                <div
                                    class="pr-2 text-right font-mono text-[0.625rem] leading-tight"
                                >
                                    {{
                                        value.updated_at * 1000
                                            | date: 'MMM d, y'
                                    }}<br />{{
                                        value.updated_at * 1000 | date: 'h:mm a'
                                    }}
                                </div>
                            </div>
                        </mat-select-trigger>
                        @for (option of history$ | async; track option) {
                            <mat-option [value]="option">
                                <div
                                    class="flex items-center justify-between space-x-4"
                                >
                                    <div>
                                        {{ types[option.encryption_level] }}
                                    </div>
                                    <div class="text-right font-mono text-xs">
                                        {{
                                            option.updated_at * 1000
                                                | date: 'MMM d, y'
                                        }}<br />{{
                                            option.updated_at * 1000
                                                | date: 'h:mm a'
                                        }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="h-[3.25rem] w-1/2 max-w-[32rem] flex-1"
                >
                    <mat-select
                        ngModel
                        (ngModelChange)="active_setting.next($event)"
                        [placeholder]="'COMMON.SELECT_NEW_SETTING' | translate"
                    >
                        <mat-select-trigger>
                            @let a_value = active_setting.getValue() || {};
                            <div
                                class="flex items-center justify-between space-x-4"
                            >
                                <div>{{ types[a_value.encryption_level] }}</div>
                                <div
                                    class="pr-2 text-right font-mono text-[0.625rem] leading-tight"
                                >
                                    {{
                                        a_value.updated_at * 1000
                                            | date: 'MMM d, y'
                                    }}<br />{{
                                        a_value.updated_at * 1000
                                            | date: 'h:mm a'
                                    }}
                                </div>
                            </div>
                        </mat-select-trigger>
                        @for (option of settings$ | async; track option) {
                            <mat-option [value]="option">
                                <div
                                    class="flex items-center justify-between space-x-4"
                                >
                                    <div>
                                        {{ types[option.encryption_level] }}
                                    </div>
                                    <div class="text-right font-mono text-xs">
                                        {{
                                            option.updated_at * 1000
                                                | date: 'MMM d, y'
                                        }}<br />{{
                                            option.updated_at * 1000
                                                | date: 'h:mm a'
                                        }}
                                    </div>
                                </div>
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
                @if ((history$ | async)?.length) {
                    <div class="w-full p-16 text-center opacity-30">
                        {{ 'COMMON.SETTINGS_COMPARE_SELECT_MSG' | translate }}
                    </div>
                } @else {
                    <div class="w-full p-16 text-center opacity-30">
                        {{ 'COMMON.SELECTED_FIRST_VERSION' | translate }}
                    </div>
                }
            }
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        DiffViewerComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class SettingsHistoryViewComponent {
    private _service = inject(ActiveItemService);

    public readonly active_setting = new BehaviorSubject<PlaceSettings>(null);
    public readonly old_setting = new BehaviorSubject<PlaceSettings>(null);
    public readonly types = ['UNENCRYPTED', 'SUPPORT', 'ADMIN', 'ENCRYPTED'];

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
