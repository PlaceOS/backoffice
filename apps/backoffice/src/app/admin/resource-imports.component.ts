import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs/operators';
import { nextValueFrom, openConfirmModal } from '../common/general';
import { i18n } from '../common/locale.service';
import { notifySuccess, notifyWarn } from '../common/notifications';
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
                            [ngModel]="domain | async"
                            (ngModelChange)="domain.next($event)"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
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
                        class="w-40"
                        [disabled]="
                            !(domain | async) ||
                            !(resource_list | async)?.length
                        "
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
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="mb-4 block min-w-[48rem] text-sm"
                    [data]="resource_list"
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
                <ng-template #email_template let-data="data">
                    <div class="mono p-4 text-xs">{{ data }}</div>
                </ng-template>
                <ng-template #bool_template let-data="data">
                    <div
                        [class.bg-error]="!data"
                        [class.bg-success]="data"
                        class="mx-auto flex h-8 w-8 items-center justify-center rounded text-2xl text-white"
                    >
                        <app-icon>{{ data ? 'done' : 'close' }}</app-icon>
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
                            <div
                                class="text-xs opacity-30"
                                *ngIf="row.nickname !== row.display_name"
                            >
                                {{ row.nickname }}
                            </div>
                        </div>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="flex items-center space-x-2 p-2">
                        <button
                            icon
                            matRipple
                            (click)="importResource(row)"
                            [disabled]="row.imported"
                            [matTooltip]="
                                'ADMIN.RESOURCE_IMPORTS_IMPORT' | translate
                            "
                        >
                            <app-icon>publish</app-icon>
                        </button>
                        <a
                            icon
                            matRipple
                            [matTooltip]="
                                'ADMIN.RESOURCE_IMPORTS_VIEW' | translate
                            "
                            [attr.disabled]="row.system_id === ''"
                            [routerLink]="['/systems', row.system_id, 'about']"
                        >
                            <app-icon>visibility</app-icon>
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
export class ResourceImportsComponent {
    private _dialog = inject(MatDialog);

    public readonly loading = new BehaviorSubject<boolean>(false);
    public readonly domain = new BehaviorSubject<PlaceDomain>(null);

    public readonly domain_list = queryDomains({ limit: 100 }).pipe(
        map((r) => r.data),
        shareReplay(1),
    );

    public readonly resource_list: Observable<ExternalResource[]> =
        this.domain.pipe(
            filter((_) => !!_),
            switchMap((domain) =>
                query<any>({
                    path: 'place',
                    endpoint: '/api/staff/v1',
                    query_params: {
                        limit: 1000,
                        authority_id: domain.id,
                    },
                }).pipe(catchError((_) => of({ data: [] }))),
            ),
            switchMap(async (r) => {
                const list = r.data.map((_) => ({
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
                const { data } = await querySystemsWithEmails({
                    in: list.map((_) => _.email).join(','),
                }).toPromise();
                for (const resource of list) {
                    const system = data.find(
                        (_) =>
                            _.email.toLowerCase() ===
                            resource.email.toLowerCase(),
                    );
                    if (system) {
                        resource.imported = true;
                        resource.system_id = system.id;
                    }
                }
                return list;
            }),
            startWith([]),
            shareReplay(1),
        );

    public async ngOnInit() {
        const domain = authority();
        const domain_list = await nextValueFrom(this.domain_list);
        if (!domain_list?.length) return;
        const match = domain_list.find((d) => d.id === domain.id);
        if (match) this.domain.next(match);
        this.resource_list.subscribe((_) => console.log(_));
    }

    public async importMissingResources() {
        const domain = this.domain.getValue();
        if (!domain) return;
        const list = await nextValueFrom(this.resource_list);
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
                action: 'Import',
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

    public async importResource(
        resource: ExternalResource,
        notify: boolean = true,
    ) {
        const domain = this.domain.getValue();
        if (!domain) return;
        const system = await addSystem({
            name: `[${domain.name}] ${resource.display_name}`,
            email: resource.email,
            display_name: resource.display_name,
            capacity: resource.capacity,
        }).toPromise();
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
}
