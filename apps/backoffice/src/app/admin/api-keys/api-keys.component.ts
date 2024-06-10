import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { take } from 'rxjs/operators';
import { APIKeyService } from './api-keys.service';
import { notifyInfo } from '../../common/notifications';
import { authority } from '@placeos/ts-client';

@Component({
    selector: 'admin-api-keys',
    template: `
        <div class="flex flex-col h-full w-full">
            <div class="flex items-center justify-between space-x-2 my-4">
                <div class="text-2xl">PlaceOS API Keys</div>
                <div class="flex items-center space-x-2">
                    <mat-form-field appearance="outline" class="h-12">
                        <mat-select
                            name="type"
                            [ngModel]="domain | async"
                            (ngModelChange)="setDomain($event)"
                            placeholder="Select Domain..."
                        >
                            <mat-option
                                *ngFor="let domain of domain_list | async"
                                [value]="domain"
                            >
                                {{ domain.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="w-32"
                        [disabled]="!(domain | async)"
                        (click)="newKey()"
                    >
                        Add API Key
                    </button>
                </div>
            </div>
            <div
                class="flex items-start space-x-2 my-4"
                *ngIf="last_key | async"
            >
                <div
                    class="rounded shadow border border-base-200 min-w-[24rem]"
                >
                    <div class="border-b px-2 pb-1 bg-base-200 !w-full">
                        <label class="p-0 m-0">
                            Last API Key Details ({{
                                (last_key | async)?.name || 'Unanamed API Key'
                            }})
                        </label>
                    </div>
                    <div class="p-2">
                        <div
                            class="select-all text-xs opacity-60 mono break-words cursor-pointer"
                            (click)="copyKey()"
                        >
                            {{ (last_key | async)?.x_api_key }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="min-w-[64rem] block text-sm"
                    [data]="key_list"
                    [columns]="[
                        { key: 'name', name: 'Name' },
                        {
                            key: 'description',
                            name: 'Description',
                            content: description_template
                        },
                        {
                            key: 'scopes',
                            name: 'Scopes',
                            content: scopes_template
                        },
                        {
                            key: 'permissions',
                            name: 'Access',
                            content: access_template,
                            size: '6rem'
                        },
                        {
                            key: 'created_at',
                            name: 'Created',
                            content: data_from_template,
                            size: '8rem'
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '3.5rem',
                            sortable: false
                        }
                    ]"
                    [sortable]="true"
                    empty_message="No API keys configured for this domain"
                ></simple-table>
                <div class="w-full h-12"></div>
            </div>
        </div>
        <ng-template #scopes_template let-data="data">
            <div class="px-4 py-2 flex flex-wrap">
                <code *ngFor="let scope of data" class="m-1 text-xs">
                    {{ scope }}
                </code>
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="p-4 text-xs">
                {{ data }}
                <span class="opacity-30" *ngIf="!data">No description</span>
            </div>
        </ng-template>
        <ng-template #access_template let-data="data">
            <div class="p-4 font-mono text-xs uppercase">
                {{ data }}
                <span class="opacity-30" *ngIf="!data">No permissions</span>
            </div>
        </ng-template>
        <ng-template #data_from_template let-data="data">
            <div class="p-4">
                {{ +data * 1000 | dateFrom }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2 mx-auto">
                <button icon matRipple (click)="deleteKey(row)">
                    <app-icon class="text-error">delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class AdminAPIKeysComponent {
    public readonly domain = this._service.active_domain;
    public readonly domain_list = this._service.available_domains;
    public readonly key_list = this._service.available_keys;
    public readonly last_key = this._service.last_key;

    public readonly loading = this._service.loading;

    public readonly setDomain = (d) => this._service.setDomain(d);
    public readonly newKey = () => this._service.newKey();
    public readonly deleteKey = (k) => this._service.removeKey(k);

    constructor(
        private _service: APIKeyService,
        private _clipboard: Clipboard
    ) {}

    public async ngOnInit() {
        const domain = authority();
        const domain_list = await this.domain_list.pipe(take(1)).toPromise();
        if (!domain_list?.length) return;
        const match = domain_list.find((d) => d.id === domain.id);
        if (match) this.setDomain(match);
    }

    public async copyKey() {
        const key = await this.last_key.pipe(take(1)).toPromise();
        if (!key?.x_api_key) return;
        this._clipboard.copy(key.x_api_key);
        notifyInfo('Copied API key to clipboard.');
    }
}
