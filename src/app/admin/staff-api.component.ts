import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { del, get, PlaceDomain } from '@placeos/ts-client';
import { addDays, getUnixTime, startOfDay } from 'date-fns';
import { notifyError, notifySuccess } from '../common/notifications';
import { HashMap } from '../common/types';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { AdminDataService } from './admin-data.service';
import { BookingLimitsModalComponent } from './booking-limits-modal.component';
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
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [ngModel]="domain()"
                            (ngModelChange)="setDomain($event)"
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
                        class="h-12 w-32"
                        (click)="editTenant()"
                    >
                        {{ 'ADMIN.TENANTS_ADD' | translate }}
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
                    class="block min-w-3xl text-sm"
                    [data]="tenants()"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'platform',
                            name: 'ADMIN.TENANTS_PLATFORM' | translate,
                        },
                        {
                            key: 'secret_expiry',
                            name: 'ADMIN.TENANTS_SECRET_EXPIRY' | translate,
                            content: expires_template,
                            size: '10rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            sortable: false,
                            size: '8.75rem',
                        },
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
                    default
                    matRipple
                    [matTooltip]="
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
    ],
})
export class PlaceStaffAPIComponent implements OnInit {
    private _dialog = inject(MatDialog);
    private _admin_data = inject(AdminDataService);

    /** Loading state */
    public readonly loading = signal('');
    /** List of available domains */
    public readonly domain_list = this._admin_data.domain_list;
    /** Currently active domain */
    public readonly domain = this._admin_data.selectedDomain('staff-api');
    public readonly tenants = signal<PlaceTenant[]>([]);

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

    public async setDomain(domain: PlaceDomain) {
        this._admin_data.setDomain('staff-api', domain);
        await this.loadTenants();
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
                confirm_text: 'Delete',
            },
            this._dialog,
        );
        if (!details || !details.reason) return;
        details.loading('Removing tenant from domain...');
        const system = await del(`/api/staff/v1/tenants/${tenant.id}`).catch(
            (err) => {
                notifyError(
                    `Error removing module ${tenant.id} from domain. Error: ${
                        err.statusText || err.message || err
                    }`,
                );
                return true;
            },
        );
        details.close();
        if (system) return;
        notifySuccess(`Successfully removed tenant from domain.`);
        await this.loadTenants();
    }

    private async loadTenants() {
        if (!this.domain()) {
            this.tenants.set([]);
            return;
        }
        this.loading.set('Loading tenants for domain...');
        const tenants = await get('/api/staff/v1/tenants').catch(() => []);
        this.tenants.set(
            (tenants || []).filter((t) => t.domain === this.domain()?.domain),
        );
        this.loading.set('');
    }
}
