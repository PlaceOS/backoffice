import { Clipboard } from '@angular/cdk/clipboard';

import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n } from '../../common/locale.service';
import { notifyInfo } from '../../common/notifications';
import { IconComponent } from '../../ui/icon.component';
import { DateFromPipe } from '../../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { APIKeyService } from './api-keys.service';

@Component({
    selector: 'admin-api-keys',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.APP_KEYS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field appearance="outline" class="h-12">
                        <mat-select
                            name="type"
                            [ngModel]="domain()"
                            (ngModelChange)="setDomain($event)"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (domain of domain_list(); track domain.id) {
                                <mat-option [value]="domain">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="w-32"
                        [disabled]="domain() === null"
                        (click)="newKey()"
                    >
                        {{ 'ADMIN.APP_KEYS_ADD' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="w-36"
                        [disabled]="domain() === null || loading() === true"
                        (click)="quickCreateKey()"
                    >
                        {{ 'ADMIN.APP_KEYS_QUICK_CREATE' | translate }}
                    </button>
                </div>
            </div>
            @if (last_key()) {
                <div
                    class="mx-4 mb-4 flex w-[calc(100%-2rem)] items-start space-x-2"
                >
                    <div
                        class="border-base-300 flex w-full flex-col rounded-sm border shadow-sm"
                    >
                        <div
                            class="border-base-300 bg-base-200 flex w-full items-center space-x-2 rounded-sm border-b"
                        >
                            <h3 class="px-4 py-2 text-lg font-medium">
                                {{ 'ADMIN.APP_KEYS_LAST_DETAILS' | translate }}
                            </h3>
                            <div
                                class="mono bg-base-100 rounded-sm px-2 py-1 text-xs opacity-60"
                            >
                                {{ last_key()?.name || 'Unanamed API Key' }}
                            </div>
                        </div>
                        <button
                            matRipple
                            class="mono rounded px-4 py-3 wrap-break-word opacity-60 select-all"
                            (click)="copyKey()"
                        >
                            {{ last_key()?.x_api_key }}
                        </button>
                    </div>
                </div>
            }
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="loading() !== true"
                />
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="key_list"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'description',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                            content: description_template,
                        },
                        {
                            key: 'scopes',
                            name: 'ADMIN.APP_KEYS_FIELD_SCOPES' | translate,
                            content: scopes_template,
                        },
                        {
                            key: 'permissions',
                            name:
                                'ADMIN.APP_KEYS_FIELD_PERMISSIONS' | translate,
                            content: access_template,
                            size: '6rem',
                        },
                        {
                            key: 'created_at',
                            name: 'COMMON.CREATED_AT' | translate,
                            content: data_from_template,
                            size: '8rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '6rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.APP_KEYS_LIST_EMPTY' | translate"
                />
                <div class="h-12 w-full"></div>
            </div>
        </div>
        <ng-template #scopes_template let-data="data">
            <div class="flex flex-wrap px-4 py-2">
                @for (scope of data; track scope) {
                    <code class="m-1 text-xs">
                        {{ scope }}
                    </code>
                }
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="p-4 text-xs">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">{{
                        'COMMON.DESCRIPTION_EMPTY' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #access_template let-data="data">
            <div class="p-4 font-mono text-xs uppercase">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">{{
                        'ADMIN.APP_KEYS_PERMISSIONS_EMPTY' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #data_from_template let-data="data">
            <div class="p-4">
                {{ +data * 1000 | dateFrom }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'COMMON.EDIT' | translate"
                    (click)="editKey(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.APP_KEYS_REMOVE' | translate"
                    (click)="deleteKey(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        DateFromPipe,
        SimpleTableComponent,
        MatProgressBarModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class AdminAPIKeysComponent implements OnInit {
    private _service = inject(APIKeyService);
    private _clipboard = inject(Clipboard);

    public readonly domain = this._service.active_domain;
    public readonly domain_list = this._service.available_domains;
    public readonly key_list = this._service.available_keys;
    public readonly last_key = this._service.last_key;

    public readonly loading = this._service.loading;

    public readonly setDomain = (d) => this._service.setDomain(d);
    public readonly newKey = () => this._service.newKey();
    public readonly quickCreateKey = () => this._service.quickCreateKey();
    public readonly editKey = (k) => this._service.editKey(k);
    public readonly deleteKey = (k) => this._service.removeKey(k);

    public async ngOnInit() {
        await this._service.selectDefaultDomain();
    }

    public async copyKey() {
        const key = this.last_key();
        if (!key?.x_api_key) return;
        this._clipboard.copy(key.x_api_key);
        notifyInfo(i18n('ADMIN.APP_KEYS_COPIED'));
    }
}
