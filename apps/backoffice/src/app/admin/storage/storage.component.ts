import { Component } from '@angular/core';
import { PlaceDomain, queryDomains } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { catchError, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { PlaceStorage, queryStorage, removeStorage } from './storage.fn';
import { MatDialog } from '@angular/material/dialog';
import { StorageProviderModalComponent } from './storage-provider-modal.component';
import { openConfirmModal } from '../../common/general';

@Component({
    selector: 'app-storage',
    template: `
        <div class="flex items-center justify-between space-x-2 my-4">
            <div class="flex flex-col space-y-2">
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
            </div>
            <button btn matRipple (click)="edit()">Add Storage Provider</button>
        </div>
        <ng-container *ngIf="!loading; else load_state">
            <div
                class="w-full min-w-[40rem]"
                *ngIf="(storage_list | async)?.length; else empty_state"
            >
                <div table-head>
                    <div class="flex-1 p-2">Domain</div>
                    <div class="w-32 p-2">Store Type</div>
                    <div class="w-28 p-2 h-10">Region</div>
                    <div class="w-28 p-2 h-10">Updated</div>
                    <div class="w-24 p-2 h-10"></div>
                </div>
                <div table-body>
                    <div table-row *ngFor="let item of storage_list | async">
                        <div class="flex-1 p-2 truncate">
                            <a
                                class="underline"
                                [routerLink]="[
                                    '/domains',
                                    item.authority_id || '_',
                                    'about'
                                ]"
                            >
                                {{
                                    item.domain?.name ||
                                        item.authority_id ||
                                        '[DEFAULT]'
                                }}
                            </a>
                        </div>
                        <div class="w-32 p-2 truncate text-xs">
                            <code>{{ item.storage_type }}</code>
                        </div>
                        <div class="w-28 p-2 h-12 text-xs">
                            <code>{{ item.region }}</code>
                        </div>
                        <div class="w-28 p-2 h-12">
                            {{ item.updated_at * 1000 | dateFrom }}
                        </div>
                        <div class="w-24 px-2 flex items-center justify-end ">
                            <button
                                btn
                                icon
                                class="h-10 w-10"
                                (click)="edit(item)"
                            >
                                <app-icon
                                    className="backoffice-edit"
                                ></app-icon>
                            </button>
                            <button
                                btn
                                icon
                                class="h-10 w-10"
                                (click)="remove(item)"
                            >
                                <app-icon
                                    className="backoffice-trash"
                                ></app-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ng-container>
        <ng-template #empty_state>
            <div
                class="flex flex-col items-center justify-center opacity-30 p-8"
            >
                <p>
                    No storage providers for
                    {{ domain.getValue() ? 'selected' : 'any' }} domain
                </p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div class="w-full flex flex-col items-center justify-center">
                <mat-spinner class="mb-4" [diameter]="48"></mat-spinner>
                <p>{{ loading }}</p>
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
