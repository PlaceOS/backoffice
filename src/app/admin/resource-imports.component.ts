import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import {
    addSystem,
    authority,
    PlaceDomain,
    query,
    queryDomains,
    querySystemsWithEmails,
} from '@placeos/ts-client';
import { lastValueFrom, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { i18n } from '../common/locale.service';
import { notifySuccess, notifyWarn } from '../common/notifications';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';

export interface ExternalResource {
    id: string;
    booking_type: string;
    capacity: number;
    display_name: string;
    email: string;
    is_accessible: boolean;
    nickname: string;
    phone: string;
    tags: string[];
    imported?: boolean;
    system_id?: string;
}

@Component({
    selector: 'resource-imports',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.RESOURCE_IMPORTS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [(ngModel)]="domain"
                            (ngModelChange)="loadResourceList()"
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
                        class="w-40"
                        [disabled]="!domain() || !resource_list()?.length"
                        (click)="importMissingResources()"
                    >
                        {{ 'ADMIN.RESOURCE_IMPORTS_ALL' | translate }}
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="mb-4 block min-w-3xl text-sm"
                    [data]="resource_list()"
                    [columns]="[
                        {
                            key: 'display_name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'email',
                            name: 'COMMON.FIELD_EMAIL' | translate,
                            content: email_template,
                        },
                        {
                            key: 'imported',
                            name: 'ADMIN.RESOURCE_IMPORTS_IMPORTED' | translate,
                            content: bool_template,
                            size: '5.5rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            sortable: false,
                            size: '6.25rem',
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.RESOURCE_IMPORTS_EMPTY' | translate"
                ></simple-table>
                <ng-template #email_template let-data="data">
                    <div class="mono p-4 text-xs">{{ data }}</div>
                </ng-template>
                <ng-template #bool_template let-data="data">
                    <div
                        [class.bg-error]="!data"
                        [class.bg-success]="data"
                        class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                    >
                        <icon>{{ data ? 'done' : 'close' }}</icon>
                    </div>
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex items-center justify-between space-x-2 px-4 py-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <div class="w-full truncate">
                                {{ row.display_name }}
                            </div>
                            @if (row.nickname !== row.display_name) {
                                <div class="text-xs opacity-30">
                                    {{ row.nickname }}
                                </div>
                            }
                        </div>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            matRipple
                            (click)="importResource(row)"
                            [disabled]="row.imported"
                            [matTooltip]="
                                'ADMIN.RESOURCE_IMPORTS_IMPORT' | translate
                            "
                        >
                            <icon>publish</icon>
                        </button>
                        <a
                            icon
                            default
                            matRipple
                            [matTooltip]="
                                'ADMIN.RESOURCE_IMPORTS_VIEW' | translate
                            "
                            [attr.disabled]="row.system_id === ''"
                            [routerLink]="['/systems', row.system_id, 'about']"
                        >
                            <icon>visibility</icon>
                        </a>
                    </div>
                </ng-template>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        IconComponent,
        RouterModule,
        MatRippleModule,
        TranslatePipe,
        MatTooltipModule,
        SimpleTableComponent,
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        MatProgressBarModule,
    ],
})
export class ResourceImportsComponent implements OnInit {
    private _dialog = inject(MatDialog);

    public readonly loading = signal(false);
    public readonly domain = signal<PlaceDomain>(null);
    public readonly domain_list = signal<PlaceDomain[]>([]);
    public readonly resource_list = signal<ExternalResource[]>([]);

    public async ngOnInit() {
        const domain = authority();
        const domain_list = await lastValueFrom(
            queryDomains({ limit: 100 }).pipe(map((_) => _.data)),
        );
        if (!domain_list?.length) return;
        this.domain_list.set(domain_list);
        const match = domain_list.find((d) => d.id === domain.id);
        if (match) this.domain.set(match);
        this.loadResourceList();
    }

    public async importMissingResources() {
        const domain = this.domain();
        if (!domain) return;
        const list = this.resource_list();
        const missing = list.filter((_) => !_.imported);
        if (!missing.length) {
            return notifyWarn(i18n('ADMIN.RESOURCE_IMPORTS_ALL_WARNING'));
        }
        const resp = await openConfirmModal(
            {
                title: i18n('ADMIN.RESOURCE_IMPORTS_ALL_TITLE'),
                content: `
                <p class="mb-4">${i18n('ADMIN.RESOURCE_IMPORTS_ALL_MSG', {
                    count: missing.length,
                })}</p>
                <ul class="list-disc ml-4 text-left px-8 text-sm">${missing
                    .map((_) => `<li>${_.display_name}</li>`)
                    .join('')}</ul>
                `,
                icon: { type: 'icon', content: 'publish' },
                confirm_text: 'Import',
            },
            this._dialog,
        );

        if (resp?.reason !== 'done') return;
        resp.loading(i18n('ADMIN.RESOURCE_IMPORTS_ALL_LOADING'));
        await Promise.all(missing.map((_) => this.importResource(_, false)));
        resp.close();
        notifySuccess(
            i18n('ADMIN.RESOURCE_IMPORTS_ALL_SUCCESS', {
                count: missing.length,
            }),
        );
    }

    public async importResource(resource: ExternalResource, notify = true) {
        const domain = this.domain();
        if (!domain) return;
        const system = await lastValueFrom(
            addSystem({
                name: `[${domain.name}] ${resource.display_name}`,
                email: resource.email,
                display_name: resource.display_name,
                capacity: resource.capacity,
            }),
        );
        if (!system) return;
        resource.system_id = system.id;
        resource.imported = true;
        if (!notify) return;
        notifySuccess(
            i18n('ADMIN.RESOURCE_IMPORTS_SUCCESS', {
                name: resource.display_name,
            }),
        );
    }

    public async loadResourceList() {
        this.resource_list.set([]);
        if (!this.domain()) return;
        this.loading.set(true);
        const result = await lastValueFrom(
            query<{ data: ExternalResource[] }>({
                path: 'place',
                endpoint: '/api/staff/v1',
                query_params: {
                    limit: 1000,
                    authority_id: this.domain().id,
                },
            }).pipe(catchError((__) => of({ data: [] }))),
        );
        const list = result.data.map((_) => ({
            id: _.id || '',
            booking_type: _.bookingType,
            capacity: _.capacity,
            display_name: _.displayName || '',
            email: _.emailAddress || '',
            is_accessible: _.isWheelChairAccessible ?? false,
            nickname: _.nickname || '',
            phone: _.phone || '',
            tags: _.tags || [],
            imported: false,
            system_id: '',
        }));
        const { data } = await lastValueFrom(
            querySystemsWithEmails({
                in: list.map((_) => _.email).join(','),
            }),
        );
        for (const resource of list) {
            const system = data.find(
                (_) => _.email.toLowerCase() === resource.email.toLowerCase(),
            );
            if (system) {
                resource.imported = true;
                resource.system_id = system.id;
            }
        }
        this.resource_list.set(list);
        this.loading.set(false);
    }
}
