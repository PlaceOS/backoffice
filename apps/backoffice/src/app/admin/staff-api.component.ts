import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    authority,
    del,
    get,
    PlaceDomain,
    queryDomains,
} from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';
import { openConfirmModal } from '../common/general';
import { notifyError, notifySuccess } from '../common/notifications';
import { HashMap } from '../common/types';
import { BookingLimitsModalComponent } from './booking-limits-modal.component';
import { StaffTenantModalComponent } from './staff-tenant-modal.component';
import { addDays, getUnixTime, startOfDay } from 'date-fns';

export interface PlaceTenant {
    id: string;
    name: string;
    domain: string;
    email_domain: string;
    platform: string;
    delegated?: boolean;
    service_account?: string;
    booking_limits: Record<string, number>;
    credentials?: HashMap<string>;
    secret_expiry?: number;
    early_checkin?: number;
}

@Component({
    selector: 'staff-api',
    template: `
        <div class="flex flex-col h-full w-full">
            <div class="flex items-center justify-between space-x-2 my-4">
                <div class="text-2xl">
                    {{ 'ADMIN.TENANTS_HEADER' | translate }}
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
                            [placeholder]="
                                'ADMIN.TENANTS_SELECT_DOMAIN' | translate
                            "
                        >
                            <mat-option
                                *ngFor="let domain of domain_list"
                                [value]="domain"
                            >
                                {{ domain.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="h-12 w-32"
                        (click)="editTenant()"
                    >
                        {{ 'ADMIN.TENANTS_ADD' | translate }}
                    </button>
                </div>
            </div>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading"
                ></mat-progress-bar>
                <simple-table
                    class="min-w-[48rem] block text-sm"
                    [data]="tenants"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'platform',
                            name: 'ADMIN.TENANTS_PLATFORM' | translate
                        },
                        {
                            key: 'secret_expiry',
                            name: 'ADMIN.TENANTS_SECRET_EXPIRY' | translate,
                            content: expires_template,
                            size: '10rem'
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            sortable: false,
                            size: '8.75rem'
                        }
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.TENANTS_EMPTY' | translate"
                ></simple-table>
            </div>
        </div>
        <ng-template #expires_template let-data="data" let-row="row">
            <div class="px-2">
                <div
                    class="rounded-2xl px-3 py-1 text-xs"
                    [class.bg-base-200]="!data"
                    [class.text-neutral]="!data"
                    [class.bg-success]="data && !expiring(row)"
                    [class.text-success-content]="data && !expiring(row)"
                    [class.bg-warning]="data && expiring(row) && !expired(row)"
                    [class.text-warning-content]="
                        data && expiring(row) && !expired(row)
                    "
                    [class.bg-error]="data && expired(row)"
                    [class.text-error-content]="data && expired(row)"
                >
                    {{
                        !data
                            ? 'Never'
                            : (data * 1000 | date: 'mediumDate') +
                              ' &ndash; ' +
                              (data * 1000 | date: 'shortTime')
                    }}
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="
                        'ADMIN.TENANTS_EDIT_BOOKING_LIMITS' | translate
                    "
                    (click)="editLimits(row)"
                >
                    <app-icon>app_registration</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.TENANTS_EDIT' | translate"
                    (click)="editTenant(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'ADMIN.TENANTS_REMOVE' | translate"
                    (click)="removeTenant(row)"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                position: relative;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class PlaceStaffAPIComponent implements OnInit {
    /** Loading state */
    public loading: string = '';
    /** List of available domains */
    public domain_list: PlaceDomain[];
    /** Currently active domain */
    public readonly domain = new BehaviorSubject<PlaceDomain>(null);

    public readonly tenants = this.domain.pipe(
        switchMap(() => {
            this.loading = 'Loading tenants for domain...';
            return get('/api/staff/v1/tenants');
        }),
        catchError((_) => []),
        map((tenants) => {
            this.loading = '';
            return tenants.filter(
                (t) => t.domain === this.domain.getValue()?.domain
            );
        }),
        shareReplay()
    );

    public expiring(tenant: PlaceTenant): boolean {
        const expiry = tenant.secret_expiry;
        const after_time = getUnixTime(startOfDay(addDays(Date.now(), -30)));
        return expiry && expiry >= after_time;
    }

    public expired(tenant: PlaceTenant): boolean {
        const expiry = tenant.secret_expiry;
        const after_time = getUnixTime(Date.now());
        return expiry && expiry >= after_time;
    }

    constructor(private _dialog: MatDialog) {}

    public async ngOnInit() {
        this.loading = 'Loading domains...';
        this.domain_list = await queryDomains()
            .pipe(map((r) => r.data))
            .toPromise();
        const domain = authority();
        if (!this.domain_list?.length) return;
        const match = this.domain_list.find((d) => d.id === domain.id);
        if (match) this.domain.next(match);
        this.loading = '';
    }

    public editTenant(tenant?: PlaceTenant) {
        const ref = this._dialog.open(StaffTenantModalComponent, {
            data: { tenant, domain: this.domain.getValue() },
        });
        ref.afterClosed().subscribe((_) =>
            this.domain.next(this.domain.getValue())
        );
    }

    public editLimits(tenant: PlaceTenant) {
        const ref = this._dialog.open(BookingLimitsModalComponent, {
            data: { tenant, domain: this.domain.getValue() },
        });
        ref.afterClosed().subscribe((_) =>
            this.domain.next(this.domain.getValue())
        );
    }

    public async removeTenant(tenant: PlaceTenant) {
        const details = await openConfirmModal(
            {
                title: 'Remove tenant?',
                content: `Remove <strong>${tenant.name}</strong> from this domain?<br>
                <p style="text-align: left; width: 100%;">This will remove all related:</p><br>
                <ul style="list-style: disc;text-align: left;padding-left: 2rem">
                <li>bookings (such as desk bookings)</li>
                <li>event metadata (such as catering)</li>
                <li>guest information</li>
                <li>survey data</li>
                </ul>`,
                icon: { type: 'icon', content: 'delete' },
                action: 'Delete',
            },
            this._dialog
        );
        if (!details || !details.reason) return;
        details.loading('Removing tenant from domain...');
        const system = await del(`/api/staff/v1/tenants/${tenant.id}`)
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error removing module ${tenant.id} from domain. Error: ${
                        err.statusText || err.message || err
                    }`
                );
                return true;
            });
        details.close();
        if (system) return;
        notifySuccess(`Successfully removed tenant from domain.`);
        this.domain.next(this.domain.getValue());
    }
}
