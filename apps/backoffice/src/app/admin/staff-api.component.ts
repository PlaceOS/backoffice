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
}

@Component({
    selector: 'staff-api',
    template: `
        <div class="flex items-center space-x-2 my-4">
            <label for="type">Domain: </label>
            <mat-form-field class="h-12" appearance="outline">
                <mat-select
                    name="type"
                    [ngModel]="domain | async"
                    (ngModelChange)="domain.next($event)"
                    placeholder="Select Domain..."
                >
                    <mat-option
                        *ngFor="let domain of domain_list"
                        [value]="domain"
                    >
                        {{ domain.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <button btn (click)="editTenant()">Add Tenant</button>
        </div>
        <ng-container *ngIf="!loading; else load_state">
            <div
                class="w-full"
                *ngIf="(tenants | async)?.length; else empty_state"
            >
                <div table-head>
                    <div class="w-1/2 p-2">Name</div>
                    <div class="flex-1 p-2">Platform</div>
                    <div class="w-24 p-2 h-10"></div>
                    <div class="w-24 p-2 h-10"></div>
                </div>
                <div table-body>
                    <div table-row *ngFor="let item of tenants | async">
                        <div class="w-1/2 p-2 truncate">{{ item.name }}</div>
                        <div class="flex-1 p-2 truncate">
                            {{ item.platform }}
                        </div>
                        <div class="w-24 p-2 truncate">
                            <button
                                btn
                                class="clear underline"
                                (click)="editLimits(item)"
                            >
                                Edit Limits
                            </button>
                        </div>
                        <div class="w-24 px-2 flex items-center justify-end ">
                            <button
                                btn
                                icon
                                class="h-10 w-10"
                                (click)="editTenant(item)"
                            >
                                <app-icon
                                    className="backoffice-edit"
                                ></app-icon>
                            </button>
                            <button
                                btn
                                icon
                                class="h-10 w-10"
                                (click)="removeTenant(item)"
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
            <div class="flex flex-col items-center justify-center">
                <p>No tenants for selected domain</p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div class="w-full flex flex-col items-center justify-center">
                <mat-spinner class="mb-4" [diameter]="48"></mat-spinner>
                <p>{{ loading }}</p>
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
                (t) => t.domain === this.domain.getValue().domain
            );
        }),
        shareReplay()
    );

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
                icon: { type: 'icon', class: 'backoffice-trash' },
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
