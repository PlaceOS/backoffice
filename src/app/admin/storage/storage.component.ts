import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceDomain, queryDomains } from '@placeos/ts-client';
import { i18n } from '../../common/locale.service';
import { openConfirmModal } from '../../overlays/confirm-modal.component';
import { IconComponent } from '../../ui/icon.component';
import { DateFromPipe } from '../../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { StorageProviderModalComponent } from './storage-provider-modal.component';
import { PlaceStorage, queryStorage, removeStorage } from './storage.fn';

@Component({
    selector: 'app-storage',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.STORAGE_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field class="h-12" appearance="outline">
                        <mat-select
                            name="type"
                            [(ngModel)]="domain"
                            (ngModelChange)="loadStorage()"
                            [placeholder]="'ADMIN.ALL_DOMAINS' | translate"
                        >
                            <mat-option [value]="{}">{{
                                'ADMIN.ALL_DOMAINS' | translate
                            }}</mat-option>
                            @for (domain of domain_list(); track domain.id) {
                                <mat-option [value]="domain">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <button btn matRipple class="w-40" (click)="edit()">
                        {{ 'ADMIN.STORAGE_ADD' | translate }}
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-176 text-sm"
                    [data]="storage_list()"
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
                            key: 'is_default',
                            name: 'ADMIN.STORAGE_FIELD_DEFAULT' | translate,
                            content: bool_template,
                            size: '5.5rem',
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
                                      item: domain() ? 'selected' : 'any',
                                  }
                    "
                ></simple-table>
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>
                    {{ row.domain?.name || row.authority_id }}
                </div>
                @if (!row.domain?.name && !row.authority_id) {
                    <span class="opacity-30">Any Domain</span>
                }
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
        <ng-template #bool_template let-data="data">
            <div class="flex h-full w-full items-center justify-center">
                <div
                    class="flex h-8 w-8 items-center justify-center rounded-sm"
                    [class.bg-success]="data"
                    [class.text-success-content]="data"
                    [class.bg-error]="!data"
                    [class.text-error-content]="!data"
                >
                    <icon class="text-2xl">{{ data ? 'check' : 'close' }}</icon>
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.STORAGE_EDIT' | translate"
                    (click)="edit(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.STORAGE_REMOVE' | translate"
                    (click)="remove(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
        MatTooltipModule,
        SimpleTableComponent,
        MatProgressBarModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        DateFromPipe,
    ],
})
export class StorageComponent implements OnInit {
    private _dialog = inject(MatDialog);

    public readonly loading = signal('');
    public readonly store_list = signal<PlaceStorage[]>([]);
    public readonly domain_list = signal<PlaceDomain[]>([]);
    public readonly domain = signal<PlaceDomain>(null);

    public readonly storage_list = computed(() => {
        const stores = this.store_list();
        return stores.map((store) => ({
            ...store,
            domain: this.domain_list().find((d) => d.id === store.authority_id),
        }));
    });

    public async ngOnInit() {
        this.loading.set('Loading domains...');
        const domain_list = await queryDomains().then((r) => r.data);
        this.domain_list.set(domain_list);
        this.loadStorage();
        this.loading.set('');
    }

    public edit(item?: PlaceStorage) {
        const ref = this._dialog.open(StorageProviderModalComponent, {
            data: { item, domain: this.domain()?.id },
        });
        ref.afterClosed().subscribe(() => this.loadStorage());
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
        await removeStorage(item.id);
        resp.close();
        this.loadStorage();
    }

    public async loadStorage() {
        this.loading.set('Loading storage...');
        const { data } = await queryStorage({
            auth_id: this.domain()?.id,
        }).catch(() => ({ data: [] }));
        this.store_list.set(data);
        this.loading.set('');
    }
}
