import { Component } from '@angular/core';
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
import { PlaceStorage, queryStorage, removeStorage } from './storage.fn';
import { MatDialog } from '@angular/material/dialog';
import { StorageProviderModalComponent } from './storage-provider-modal.component';
import { openConfirmModal } from '../../common/general';

@Component({
    selector: 'app-storage',
    template: `
        <div class="flex flex-col h-full w-full">
            <div class="flex items-center justify-between space-x-2 my-4">
                <div class="text-2xl">PlaceOS Upload Storage</div>
                <div class="flex items-center space-x-2">
                    <mat-form-field class="h-12" appearance="outline">
                        <mat-select
                            name="type"
                            [ngModel]="domain | async"
                            (ngModelChange)="domain.next($event)"
                            placeholder="All Domains"
                        >
                            <mat-option [value]="{}">All Domains</mat-option>
                            <mat-option
                                *ngFor="let domain of domain_list | async"
                                [value]="domain"
                            >
                                {{ domain.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button btn matRipple class="w-40" (click)="edit()">
                        Add Provider
                    </button>
                </div>
            </div>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <simple-table
                    class="min-w-[40rem] block text-sm"
                    [data]="storage_list"
                    [columns]="[
                        { key: 'name', name: 'Domain', content: name_template },
                        {
                            key: 'storage_type',
                            name: 'Type',
                            content: code_template,
                            size: '6rem'
                        },
                        {
                            key: 'region',
                            name: 'Region',
                            content: code_template
                        },
                        {
                            key: 'updated_at',
                            name: 'Updated',
                            content: date_from_template,
                            size: '10rem'
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '6.5rem',
                            sortable: false,
                        }
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        'No storage providers for' +
                        (domain.getValue() ? 'selected' : 'any') +
                        'domain'
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
            <div class="flex items-center space-x-2 p-2 mx-auto">
                <button icon matRipple (click)="edit(row)">
                    <app-icon>edit</app-icon>
                </button>
                <button icon matRipple (click)="remove(row)">
                    <app-icon class="text-error">delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class StorageComponent {
    /** Loading state */
    public loading: string = '';
    /** List of available domains */
    public domain_list = queryDomains().pipe(
        map((_) => _.data),
        catchError((_) => []),
        shareReplay(1)
    );
    /** Currently active domain */
    public readonly domain = new BehaviorSubject<PlaceDomain>(null);

    public readonly storage_data = this.domain.pipe(
        debounceTime(300),
        switchMap((_) => {
            this.loading = 'Loading Storage Providers...';
            return queryStorage({ auth_id: _?.id });
        }),
        map(({ data }) => data),
        catchError((_) => []),
        tap((_) => (this.loading = '')),
        shareReplay(1)
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
        })
    );

    constructor(private _dialog: MatDialog) {}

    public edit(item?: PlaceStorage) {
        const ref = this._dialog.open(StorageProviderModalComponent, {
            data: { item, domain: this.domain.getValue()?.id },
        });
        ref.afterClosed().subscribe(() =>
            this.domain.next(this.domain.getValue())
        );
    }

    public async remove(item: PlaceStorage) {
        const resp = await openConfirmModal(
            {
                title: 'Remove Storage Provider',
                content: `Are you sure you want to remove the storage provider for ${item.storage_type} ${item.bucket_name}?`,
                icon: { content: 'delete_forever' },
            },
            this._dialog
        );
        if (resp.reason !== 'done') return;
        resp.loading('Removing Storage Provider');
        await removeStorage(item.id).toPromise();
        this.domain.next(this.domain.getValue());
        resp.close();
    }
}
