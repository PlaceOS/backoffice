import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { take } from 'rxjs/operators';
import { APIKeyService } from './api-keys.service';
import { notifyInfo } from '../../common/notifications';
import { authority } from '@placeos/ts-client';

@Component({
    selector: 'admin-api-keys',
    template: `
        <div class="flex items-start space-x-2 my-4">
            <div class="flex flex-col space-y-1">
                <label for="type">Domain: </label>
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
            </div>
            <button
                btn
                class="mt-8 min-w-[8rem]"
                [disabled]="!(domain | async)"
                (click)="newKey()"
            >
                Add API Key
            </button>
            <div
                *ngIf="last_key | async"
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
        <div
            role="table"
            class="min-w-[60rem]"
            *ngIf="(key_list | async)?.length; else load_state"
        >
            <div table-head>
                <div class="w-48 p-2">Name</div>
                <div class="flex-1 p-2">Description</div>
                <div class="w-32 p-2 truncate">Scopes</div>
                <div class="w-28 p-2">Permissions</div>
                <div class="w-32 p-2">Created</div>
                <div class="w-16 p-2"></div>
            </div>
            <div table-body>
                <div table-row *ngFor="let item of key_list | async">
                    <div class="w-48 p-2 truncate text-sm" [title]="item.name">
                        {{ item.name }}
                    </div>
                    <div class="flex-1 p-2 text-xs">{{ item.description }}</div>
                    <div class="w-32 p-2 truncate flex items-center flex-wrap">
                        <code *ngFor="let scope of item.scopes" class="m-1">
                            {{ scope }}
                        </code>
                    </div>
                    <div class="w-28 p-2">{{ item.permissions || 'None' }}</div>
                    <div class="w-32 p-2">
                        {{ item.created_at * 1000 | dateFrom }}
                    </div>
                    <div class="w-16 p-2 flex items-center">
                        <button btn icon (click)="deleteKey(item)">
                            <app-icon className="backoffice-trash"></app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ng-template #load_state>
            <div class="info-block">
                <app-icon class="text-3xl">close</app-icon>
                <p>No API keys configured for this domain</p>
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
