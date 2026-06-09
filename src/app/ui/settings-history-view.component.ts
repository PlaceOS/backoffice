import { Component, computed, inject, resource, signal } from '@angular/core';
import {
    PlaceSettings,
    querySettings,
    settingsHistory,
} from '@placeos/ts-client';

import { DatePipe } from '@angular/common';
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
                    class="h-13 w-1/2 max-w-lg flex-1"
                >
                    <mat-select
                        [ngModel]="old_setting()"
                        (ngModelChange)="old_setting.set($event)"
                        [disabled]="!active_setting() || !history()?.length"
                        [placeholder]="'COMMON.SELECT_OLD_SETTING' | translate"
                    >
                        <mat-select-trigger>
                            @let value = old_setting();
                            <div
                                class="flex items-center justify-between gap-4"
                            >
                                <div>{{ types[value?.encryption_level] }}</div>
                                <div
                                    class="pr-2 text-right font-mono text-[0.625rem] leading-tight"
                                >
                                    {{
                                        value?.updated_at * 1000
                                            | date: 'MMM d, y'
                                    }}<br />{{
                                        value?.updated_at * 1000
                                            | date: 'h:mm a'
                                    }}
                                </div>
                            </div>
                        </mat-select-trigger>
                        @for (option of history(); track option) {
                            <mat-option [value]="option">
                                <div
                                    class="flex w-full items-center justify-between gap-4"
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
                    class="h-13 w-1/2 max-w-lg flex-1"
                >
                    <mat-select
                        [ngModel]="active_setting()"
                        (ngModelChange)="active_setting.set($event)"
                        [placeholder]="'COMMON.SELECT_NEW_SETTING' | translate"
                    >
                        <mat-select-trigger>
                            @let a_value = active_setting();
                            <div
                                class="flex items-center justify-between space-x-4"
                            >
                                <div>
                                    {{ types[a_value?.encryption_level] }}
                                </div>
                                <div
                                    class="pr-2 text-right font-mono text-[0.625rem] leading-tight"
                                >
                                    {{
                                        a_value?.updated_at * 1000
                                            | date: 'MMM d, y'
                                    }}<br />{{
                                        a_value?.updated_at * 1000
                                            | date: 'h:mm a'
                                    }}
                                </div>
                            </div>
                        </mat-select-trigger>
                        @for (option of settings(); track option) {
                            <mat-option [value]="option">
                                <div
                                    class="flex w-full items-center justify-between gap-4"
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
            @if (active_setting() && old_setting()) {
                <div class="w-full p-4">
                    <diff-viewer
                        [modified]="active_setting()?.settings_string"
                        [original]="old_setting()?.settings_string"
                    />
                </div>
            } @else {
                @if (history()?.length) {
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
        DatePipe,
        TranslatePipe,
        DiffViewerComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class SettingsHistoryViewComponent {
    private _service = inject(ActiveItemService);

    public readonly active_setting = signal<PlaceSettings | null>(null);
    public readonly old_setting = signal<PlaceSettings | null>(null);
    public readonly types = ['UNENCRYPTED', 'SUPPORT', 'ADMIN', 'ENCRYPTED'];

    private readonly _settings = resource({
        params: () => this._service.item()?.id,
        loader: async ({ params: id }) =>
            id ? (await querySettings({ parent_id: id })).data : [],
    });
    public readonly settings = computed(() => this._settings.value() || []);

    private readonly _history = resource({
        params: () => this.active_setting()?.id,
        loader: async ({ params: id }) => (id ? settingsHistory(id) : []),
    });
    public readonly history = computed(
        () => this._history.value() || ([] as PlaceSettings[]),
    );
}
