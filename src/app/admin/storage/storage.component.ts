import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { escapeHtml } from '../../common/general';
import { reportLoadError } from '../../common/load-error';
import { i18n } from '../../common/locale.service';
import { confirmAndRun } from '../../overlays/confirm-modal.component';
import { IconComponent } from '../../ui/icon.component';
import { LoadingLabelDirective } from '../../ui/loading-label.directive';
import { DateFromPipe } from '../../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { AdminDataService } from '../admin-data.service';
import { StorageProviderModalComponent } from './storage-provider-modal.component';
import { PlaceStorage, queryStorage, removeStorage } from './storage.fn';

import { AdminDomainSelectComponent } from '../admin-domain-select.component';
@Component({
    selector: 'app-storage',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.STORAGE_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <admin-domain-select
                        key="storage"
                        all
                        field_class="h-12"
                        (changed)="loadStorage()"
                    />
                    <button
                        icon
                        default
                        matRipple
                        class="text-xl"
                        (click)="edit()"
                        [matTooltip]="'ADMIN.STORAGE_ADD' | translate"
                        [attr.aria-label]="'ADMIN.STORAGE_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
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
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
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
                />
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
        AdminDomainSelectComponent,
        LoadingLabelDirective,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
        MatTooltipModule,
        SimpleTableComponent,
        MatProgressBarModule,
        DateFromPipe,
    ],
})
export class StorageComponent implements OnInit {
    private _dialog = inject(MatDialog);
    private _admin_data = inject(AdminDataService);

    public readonly loading = signal('');
    public readonly store_list = signal<PlaceStorage[]>([]);
    public readonly domain_list = this._admin_data.domain_list;
    public readonly domain = this._admin_data.selectedDomain('storage');

    public readonly storage_list = computed(() => {
        const stores = this.store_list();
        return stores.map((store) => ({
            ...store,
            domain: this.domain_list().find((d) => d.id === store.authority_id),
        }));
    });

    public async ngOnInit() {
        this.loading.set('Loading domains...');
        await this._admin_data.loadDomains();
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
        const removed = await confirmAndRun(
            this._dialog,
            {
                title: i18n('ADMIN.STORAGE_REMOVE_TITLE'),
                content: i18n('ADMIN.STORAGE_REMOVE_MSG', {
                    type: escapeHtml(item.storage_type),
                    name: escapeHtml(item.bucket_name),
                }),
                icon: { content: 'delete_forever' },
            },
            {
                loading: i18n('ADMIN.STORAGE_REMOVE_LOADING'),
                action: () => removeStorage(item.id),
                error: (reason) =>
                    `Failed to remove storage provider. Error: ${reason}`,
            },
        );
        if (removed) this.loadStorage();
    }

    public async loadStorage() {
        this.loading.set('Loading storage...');
        const { data } = await queryStorage({
            auth_id: this.domain()?.id,
        }).catch(reportLoadError({ data: [] }));
        this.store_list.set(data);
        this.loading.set('');
    }
}
