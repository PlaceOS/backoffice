import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { del, get } from '@placeos/ts-client';
import { escapeHtml } from '../common/general';
import { reportLoadError } from '../common/load-error';
import { HashMap } from '../common/types';
import { confirmAndRun } from '../overlays/confirm-modal.component';
import { IconComponent } from '../ui/icon.component';
import { LoadingLabelDirective } from '../ui/loading-label.directive';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { AdminDataService } from './admin-data.service';
import { AdminDomainSelectComponent } from './admin-domain-select.component';
import { BookingLimitsModalComponent } from './booking-limits-modal.component';
import {
    formatMinutes,
    isSecretExpired,
    isSecretExpiring,
} from './staff-api.utilities';
import { StaffTenantModalComponent } from './staff-tenant-modal.component';

export interface PlaceTenant {
    id: string;
    name: string;
    domain: string;
    email_domain: string;
    platform: string;
    delegated?: boolean;
    service_account?: string;
    booking_limits: Record<string, number>;
    booking_range?: Record<string, number>;
    /** Booking type => maximum length of a booking in minutes */
    booking_period?: Record<string, number>;
    credentials?: HashMap<string>;
    secret_expiry?: number;
    early_checkin?: number;
}

@Component({
    selector: 'staff-api',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.TENANTS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <admin-domain-select
                        key="staff-api"
                        (changed)="loadTenants()"
                    />
                    <button
                        icon
                        default
                        matRipple
                        class="text-xl"
                        (click)="editTenant()"
                        [matTooltip]="'ADMIN.TENANTS_ADD' | translate"
                        [attr.aria-label]="'ADMIN.TENANTS_ADD' | translate"
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
                    class="block min-w-3xl text-sm"
                    [data]="tenants()"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'platform',
                            name: 'ADMIN.TENANTS_PLATFORM' | translate,
                        },
                        {
                            key: 'booking_period',
                            name:
                                'ADMIN.TENANTS_BOOKING_PERIOD_COLUMN'
                                | translate,
                            content: period_template,
                            sortable: false,
                        },
                        {
                            key: 'secret_expiry',
                            name: 'ADMIN.TENANTS_SECRET_EXPIRY' | translate,
                            content: expires_template,
                            size: '10rem',
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            sortable: false,
                            size: '8.75rem',
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.TENANTS_EMPTY' | translate"
                />
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
        <ng-template #period_template let-data="data">
            <div class="flex flex-col px-2 py-1" booking-period>
                @for (period of bookingPeriods(data); track period.type) {
                    <div>
                        <span class="opacity-60">{{ period.type }}:</span>
                        {{ period.length }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="
                        'ADMIN.TENANTS_EDIT_BOOKING_LIMITS' | translate
                    "
                    [attr.aria-label]="
                        'ADMIN.TENANTS_EDIT_BOOKING_LIMITS' | translate
                    "
                    (click)="editLimits(row)"
                >
                    <icon>app_registration</icon>
                </button>
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.TENANTS_EDIT' | translate"
                    [attr.aria-label]="'ADMIN.TENANTS_EDIT' | translate"
                    (click)="editTenant(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.TENANTS_REMOVE' | translate"
                    [attr.aria-label]="'ADMIN.TENANTS_REMOVE' | translate"
                    (click)="removeTenant(row)"
                >
                    <icon>delete</icon>
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
    imports: [
        AdminDomainSelectComponent,
        LoadingLabelDirective,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
        MatTooltipModule,
        SimpleTableComponent,
        MatProgressBarModule,
        DatePipe,
    ],
})
export class PlaceStaffAPIComponent implements OnInit {
    private _dialog = inject(MatDialog);
    private _admin_data = inject(AdminDataService);

    /** Loading state */
    public readonly loading = signal('');
    /** List of available domains */
    /** Currently active domain */
    public readonly domain = this._admin_data.selectedDomain('staff-api');
    public readonly tenants = signal<PlaceTenant[]>([]);

    public readonly expiring = (tenant: PlaceTenant) =>
        isSecretExpiring(tenant);
    public readonly expired = (tenant: PlaceTenant) => isSecretExpired(tenant);

    public bookingPeriods(periods?: Record<string, number>) {
        return Object.entries(periods || {}).map(([type, minutes]) => ({
            type,
            length: formatMinutes(minutes),
        }));
    }

    public async ngOnInit() {
        this.loading.set('Loading domains...');
        const domain = await this._admin_data.selectDefaultDomain('staff-api');
        if (!domain) {
            this.loading.set('');
            return;
        }
        await this.loadTenants();
        this.loading.set('');
    }

    public editTenant(tenant?: PlaceTenant) {
        const ref = this._dialog.open(StaffTenantModalComponent, {
            data: { tenant, domain: this.domain() },
        });
        ref.afterClosed().subscribe((__) => this.loadTenants());
    }

    public editLimits(tenant: PlaceTenant) {
        const ref = this._dialog.open(BookingLimitsModalComponent, {
            data: { tenant, domain: this.domain() },
        });
        ref.afterClosed().subscribe((__) => this.loadTenants());
    }

    public async removeTenant(tenant: PlaceTenant) {
        const removed = await confirmAndRun(
            this._dialog,
            {
                title: 'Remove tenant?',
                content: `Remove <strong>${escapeHtml(tenant.name)}</strong> from this domain?<br>
                <p style="text-align: left; width: 100%;">This will remove all related:</p><br>
                <ul style="list-style: disc;text-align: left;padding-left: 2rem">
                <li>bookings (such as desk bookings)</li>
                <li>event metadata (such as catering)</li>
                <li>guest information</li>
                <li>survey data</li>
                </ul>`,
                icon: { type: 'icon', content: 'delete' },
                confirm_text: 'Delete',
            },
            {
                loading: 'Removing tenant from domain...',
                action: () => del(`/api/staff/v1/tenants/${tenant.id}`),
                error: (reason) =>
                    `Error removing tenant ${tenant.name}. Error: ${reason}`,
                success: 'Successfully removed tenant from domain.',
            },
        );
        if (removed) await this.loadTenants();
    }

    private async loadTenants() {
        if (!this.domain()) {
            this.tenants.set([]);
            return;
        }
        this.loading.set('Loading tenants for domain...');
        const tenants = await get('/api/staff/v1/tenants').catch(
            reportLoadError([]),
        );
        this.tenants.set(
            (tenants || []).filter((t) => t.domain === this.domain()?.domain),
        );
        this.loading.set('');
    }
}
