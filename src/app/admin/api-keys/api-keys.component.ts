import { Clipboard } from '@angular/cdk/clipboard';

import {
    Component,
    ElementRef,
    OnInit,
    effect,
    inject,
    viewChild,
} from '@angular/core';
import { i18n } from '../../common/locale.service';
import { notifySuccess } from '../../common/notifications';
import { IconComponent } from '../../ui/icon.component';
import { DateFromPipe } from '../../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { APIKeyService } from './api-keys.service';

import { ProgressBarComponent } from '../../ui/controls/progress-bar.component';
import { TooltipDirective } from '../../ui/controls/tooltip.directive';
import { AdminDomainSelectComponent } from '../admin-domain-select.component';
@Component({
    selector: 'admin-api-keys',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <h2 #heading tabindex="-1" class="text-2xl outline-none">
                    {{ 'ADMIN.APP_KEYS_HEADER' | translate }}
                </h2>
                <div class="flex items-center space-x-2">
                    <admin-domain-select key="api-keys" field_class="h-12" />
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        [disabled]="domain() === null"
                        (click)="newKey()"
                        [appTooltip]="'ADMIN.APP_KEYS_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        [disabled]="domain() === null || loading() === true"
                        (click)="quickCreateKey()"
                        [appTooltip]="'ADMIN.APP_KEYS_QUICK_CREATE' | translate"
                    >
                        <icon>more_time</icon>
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
                                {{ last_key()?.name || 'Unnamed API Key' }}
                            </div>
                        </div>
                        <button
                            ripple
                            class="mono rounded px-4 py-3 wrap-break-word opacity-60 select-all"
                            (click)="copyKey()"
                        >
                            {{ last_key()?.x_api_key }}
                        </button>
                    </div>
                </div>
            }
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="loading() !== true"
                />
                @if (load_error()) {
                    <div
                        role="alert"
                        class="flex flex-col items-center space-y-4 p-8 text-center"
                    >
                        <icon class="text-error text-4xl">error</icon>
                        <p>
                            {{
                                'ADMIN.APP_KEYS_LOAD_ERROR'
                                    | translate: { error: load_error() }
                            }}
                        </p>
                        <button
                            #retry
                            btn
                            ripple
                            [attr.aria-disabled]="loading() || null"
                            [attr.aria-busy]="loading() || null"
                            (click)="reload()"
                        >
                            {{ 'COMMON.RETRY' | translate }}
                        </button>
                    </div>
                } @else {
                    <simple-table
                        class="block min-w-7xl text-sm"
                        [data]="key_list"
                        [columns]="[
                            {
                                key: 'name',
                                name: 'COMMON.FIELD_NAME' | translate,
                            },
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
                                    'ADMIN.APP_KEYS_FIELD_PERMISSIONS'
                                    | translate,
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
                                key: 'expires_at',
                                name:
                                    'ADMIN.APP_KEYS_FIELD_EXPIRES_AT'
                                    | translate,
                                content: expires_template,
                                size: '9rem',
                            },
                            {
                                key: 'actions',
                                name: 'COMMON.ACTIONS' | translate,
                                hide_name: true,
                                content: actions_template,
                                size: '6rem',
                                sortable: false,
                            },
                        ]"
                        [sortable]="true"
                        [empty_message]="
                            'ADMIN.APP_KEYS_LIST_EMPTY' | translate
                        "
                    />
                }
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
        <ng-template #expires_template let-data="data">
            <div class="p-4">
                @if (data) {
                    <span [class.text-error]="isExpired(data)">
                        {{
                            isExpired(data)
                                ? 'Expired'
                                : (+data * 1000 | dateFrom)
                        }}
                    </span>
                } @else {
                    <span class="opacity-30">{{
                        'ADMIN.APP_KEYS_TTL_NONE' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    ripple
                    [appTooltip]="'COMMON.EDIT' | translate"
                    (click)="editKey(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    ripple
                    [appTooltip]="'ADMIN.APP_KEYS_REMOVE' | translate"
                    (click)="deleteKey(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        ProgressBarComponent,
        TooltipDirective,
        AdminDomainSelectComponent,
        TranslatePipe,
        IconComponent,
        DateFromPipe,
        SimpleTableComponent,
    ],
})
export class AdminAPIKeysComponent implements OnInit {
    private _service = inject(APIKeyService);
    private _clipboard = inject(Clipboard);

    public readonly domain = this._service.active_domain;
    public readonly key_list = this._service.available_keys;
    public readonly last_key = this._service.last_key;

    public readonly loading = this._service.loading;
    public readonly load_error = this._service.load_error;

    public readonly newKey = () => this._service.newKey();
    public readonly quickCreateKey = () => this._service.quickCreateKey();
    public readonly editKey = (k) => this._service.editKey(k);
    public readonly deleteKey = (k) => this._service.removeKey(k);
    private readonly _heading =
        viewChild.required<ElementRef<HTMLElement>>('heading');
    private readonly _retry = viewChild<ElementRef<HTMLElement>>('retry');

    /** Load the list again. Retry stays while it loads, so it keeps focus */
    public reload() {
        if (!this.loading()) this._service.reloadKeys();
    }

    constructor() {
        // A retry that loads the list removes Retry, so move its focus to
        // the heading. This runs before the view removes Retry.
        effect(() => {
            const retry = this._retry()?.nativeElement;
            if (this.loading() || this.load_error() || !retry) return;
            if (document.activeElement === retry) {
                this._heading().nativeElement.focus();
            }
        });
    }

    public async ngOnInit() {
        await this._service.selectDefaultDomain();
    }

    /** Whether the given `expires_at` epoch (seconds) is in the past */
    public isExpired(expires_at: number): boolean {
        return !!expires_at && +expires_at * 1000 < Date.now();
    }

    public async copyKey() {
        const key = this.last_key();
        if (!key?.x_api_key) return;
        this._clipboard.copy(key.x_api_key);
        notifySuccess(i18n('ADMIN.APP_KEYS_COPIED'));
    }
}
