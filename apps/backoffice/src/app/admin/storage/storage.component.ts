import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceDomain, queryDomains } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { openConfirmModal } from '../../common/general';
import { i18n } from '../../common/locale.service';
import { StorageProviderModalComponent } from './storage-provider-modal.component';
import { PlaceStorage, queryStorage, removeStorage } from './storage.fn';

@Component({
    selector: 'app-storage',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2">
                <div class="text-2xl">
                    {{ 'ADMIN.STORAGE_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field class="h-12" appearance="outline">
                        <mat-select
                            name="type"
                            [ngModel]="domain | async"
                            (ngModelChange)="domain.next($event)"
                            [placeholder]="'ADMIN.ALL_DOMAINS' | translate"
                        >
                            <mat-option [value]="{}">{{
                                'ADMIN.ALL_DOMAINS' | translate
                            }}</mat-option>
                            <mat-option
                                *ngFor="let domain of domain_list | async"
                                [value]="domain"
                            >
                                {{ domain.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button btn matRipple class="w-40" (click)="edit()">
                        {{ 'ADMIN.STORAGE_ADD' | translate }}
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[40rem] text-sm"
                    [data]="storage_list"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'DOMAINS.SINGULAR' | translate,
                            content: name_template,
                        },
                        {
                            key: 'storage_type',
                            name: 'ADMIN.STORAGE_FIELD_TYPE' | translate,
                            content: code_template,
                            size: '6rem',
                        },
                        {
                            key: 'region',
                            name: 'ADMIN.STORAGE_FIELD_REGION' | translate,
                            content: code_template,
                        },
                        {
                            key: 'updated_at',
                            name: 'COMMON.UPDATED_AT' | translate,
                            content: date_from_template,
                            size: '10rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '6.5rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        'ADMIN.STORAGE_LIST_EMPTY'
                            | translate
                                : {
                                      item: domain.getValue()
                                          ? 'selected'
                                          : 'any',
                                  }
                    "
                ></simple-table>
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>
                    {{ row.domain?.name || row.authority_id || '[DEFAULT]' }}
                </div>
                <div class="text-xs opacity-30">{{ row.authority_id }}</div>
            </div>
        </ng-template>
        <ng-template #code_template let-data="data">
            <div class="p-4">
                <code>{{ data }}</code>
            </div>
        </ng-template>
        <ng-template #date_from_template let-data="data">
            <div class="p-4">
                {{ +data * 1000 | dateFrom }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.STORAGE_EDIT' | translate"
                    (click)="edit(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.STORAGE_REMOVE' | translate"
                    (click)="remove(row)"
                >
                    <app-icon class="text-error">delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class StorageComponent {
    /** Loading state */
    public loading: string = '';
    /** List of available domains */
    public domain_list = queryDomains().pipe(
        map((_) => _.data),
        catchError((_) => []),
        shareReplay(1),
    );
    /** Currently active domain */
    public readonly domain = new BehaviorSubject<PlaceDomain>(null);

    public readonly storage_data = this.domain.pipe(
        debounceTime(300),
        switchMap((_) => {
            this.loading = i18n('ADMIN.STORAGE_LOADING');
            return queryStorage({ auth_id: _?.id });
        }),
        map(({ data }) => data),
        catchError((_) => []),
        tap((_) => (this.loading = '')),
        shareReplay(1),
    );

    public readonly storage_list = combineLatest([
        this.domain_list,
        this.storage_data,
    ]).pipe(
        map(([domains, storage]) => {
            if (!domains || !storage) return [];
            return storage.map((_) => ({
                ..._,
                domain: domains.find((d) => d.id === _.authority_id),
            }));
        }),
    );

    constructor(private _dialog: MatDialog) {}

    public edit(item?: PlaceStorage) {
        const ref = this._dialog.open(StorageProviderModalComponent, {
            data: { item, domain: this.domain.getValue()?.id },
        });
        ref.afterClosed().subscribe(() =>
            this.domain.next(this.domain.getValue()),
        );
    }

    public async remove(item: PlaceStorage) {
        const resp = await openConfirmModal(
            {
                title: i18n('ADMIN.STORAGE_REMOVE_TITLE'),
                content: i18n('ADMIN.STORAGE_REMOVE_MSG', {
                    type: item.storage_type,
                    name: item.bucket_name,
                }),
                icon: { content: 'delete_forever' },
            },
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        resp.loading(i18n('ADMIN.STORAGE_REMOVE_LOADING'));
        await removeStorage(item.id).toPromise();
        this.domain.next(this.domain.getValue());
        resp.close();
    }
}
