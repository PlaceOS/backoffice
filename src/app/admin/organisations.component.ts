import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    PlaceOrganisation,
    PlacePartner,
    queryOrganisations,
    queryPartners,
    removeOrganisation,
    removePartner,
} from '@placeos/ts-client';

import { AsyncHandler } from '../common/async-handler.class';
import { describeError } from '../common/errors';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import {
    current_organisation,
    current_partner,
    isClusterReach,
    reach,
    tenancyEnforced,
} from '../common/organisation-access';
import { collectPages } from '../common/support-access';
import { FormModalComponent } from '../common/types';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { OrganisationClaimModalComponent } from './organisation-claim-modal.component';
import { OrganisationFormComponent } from './organisation-form.component';
import { PartnerFormComponent } from './partner-form.component';

@Component({
    selector: 'app-organisations',
    template: `
        <div class="flex h-full w-full flex-col overflow-auto">
            <div
                class="bg-base-200 mx-4 mt-4 flex items-center gap-3 rounded-sm p-3 text-sm"
            >
                <icon class="text-xl">corporate_fare</icon>
                <span class="opacity-60"
                    >{{ 'ORGANISATIONS.REACH' | translate }}:</span
                >
                <span>{{ reach_label() }}</span>
                <span
                    class="ml-auto rounded px-2 py-1 text-xs"
                    [class.bg-success]="enforcing()"
                    [class.bg-warning]="!enforcing()"
                >
                    {{
                        (enforcing()
                            ? 'ORGANISATIONS.ENFORCING'
                            : 'ORGANISATIONS.LOG_ONLY'
                        ) | translate
                    }}
                </span>
            </div>
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ORGANISATIONS.HEADER' | translate }}
                </div>
                @if (can_manage()) {
                    <button
                        icon
                        default
                        matRipple
                        class="text-xl"
                        (click)="newOrganisation()"
                        [matTooltip]="'ORGANISATIONS.ADD' | translate"
                        [attr.aria-label]="'ORGANISATIONS.ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                }
            </div>
            <div class="w-full px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                />
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="organisations()"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'partner_id',
                            name: 'ORGANISATIONS.FIELD_PARTNER' | translate,
                            content: partner_template,
                        },
                        {
                            key: 'payer',
                            name: 'ORGANISATIONS.FIELD_PAYER' | translate,
                            size: '8rem',
                        },
                        {
                            key: 'partner_staff',
                            name:
                                'ORGANISATIONS.FIELD_PARTNER_STAFF' | translate,
                            content: staff_template,
                            size: '8rem',
                        },
                        {
                            key: 'id',
                            name: ' ',
                            content: organisation_actions_template,
                            size: '10rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="'ORGANISATIONS.EMPTY' | translate"
                />
            </div>
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ORGANISATIONS.PARTNERS_HEADER' | translate }}
                </div>
                @if (can_manage()) {
                    <button
                        icon
                        default
                        matRipple
                        class="text-xl"
                        (click)="newPartner()"
                        [matTooltip]="'ORGANISATIONS.PARTNER_ADD' | translate"
                        [attr.aria-label]="
                            'ORGANISATIONS.PARTNER_ADD' | translate
                        "
                    >
                        <icon>add</icon>
                    </button>
                }
            </div>
            <div class="w-full px-4 pb-4">
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="partners()"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'description',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                        },
                        {
                            key: 'management',
                            name: 'ORGANISATIONS.FIELD_MANAGEMENT' | translate,
                            content: management_template,
                            size: '8rem',
                        },
                        {
                            key: 'id',
                            name: ' ',
                            content: partner_actions_template,
                            size: '8rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="'ORGANISATIONS.PARTNERS_EMPTY' | translate"
                />
            </div>
        </div>
        <ng-template #partner_template let-data="data">
            <div class="p-4">
                {{
                    partnerName(data) ||
                        ('ORGANISATIONS.SELF_MANAGED' | translate)
                }}
            </div>
        </ng-template>
        <ng-template #staff_template let-data="data">
            <div class="flex items-center justify-center p-2">
                @if (data) {
                    <icon class="text-xl">check</icon>
                }
            </div>
        </ng-template>
        <ng-template #management_template let-data="data">
            <div class="flex items-center justify-center p-2">
                @if (data) {
                    <icon class="text-xl">verified</icon>
                }
            </div>
        </ng-template>
        <ng-template #organisation_actions_template let-row="row">
            @if (can_manage()) {
                <div class="flex items-center space-x-2 p-2">
                    <button
                        icon
                        default
                        matRipple
                        [matTooltip]="'ORGANISATIONS.CLAIM' | translate"
                        (click)="claimZones(row)"
                    >
                        <icon>move_to_inbox</icon>
                    </button>
                    <button
                        icon
                        default
                        matRipple
                        [matTooltip]="'ORGANISATIONS.EDIT' | translate"
                        (click)="editOrganisation(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        default
                        error
                        matRipple
                        [matTooltip]="'ORGANISATIONS.REMOVE' | translate"
                        (click)="deleteOrganisation(row)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            }
        </ng-template>
        <ng-template #partner_actions_template let-row="row">
            @if (can_manage()) {
                <div class="flex items-center space-x-2 p-2">
                    <button
                        icon
                        default
                        matRipple
                        [matTooltip]="'ORGANISATIONS.PARTNER_EDIT' | translate"
                        (click)="editPartner(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        default
                        error
                        matRipple
                        [matTooltip]="
                            'ORGANISATIONS.PARTNER_REMOVE' | translate
                        "
                        (click)="deletePartner(row)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            }
        </ng-template>
    `,
    imports: [
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        SimpleTableComponent,
        MatProgressBarModule,
    ],
})
export class AdminOrganisationsComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog = inject(MatDialog);

    public readonly loading = signal(false);
    public readonly organisations = signal<PlaceOrganisation[]>([]);
    public readonly partners = signal<PlacePartner[]>([]);
    public readonly can_manage = isClusterReach;
    public readonly enforcing = tenancyEnforced;
    public readonly reach_label = computed(() => {
        const level = reach()?.reach;
        if (!level || level === 'cluster') {
            return i18n('ORGANISATIONS.REACH_CLUSTER');
        }
        if (level === 'partner') {
            return i18n('ORGANISATIONS.REACH_PARTNER', {
                name: current_partner()?.name || '',
            });
        }
        return i18n('ORGANISATIONS.REACH_ORGANISATION', {
            name: current_organisation()?.name || '',
        });
    });

    public ngOnInit() {
        this.load();
    }

    public partnerName(id: string) {
        return this.partners().find((partner) => partner.id === id)?.name || '';
    }

    public async load() {
        this.loading.set(true);
        const [organisations, partners] = await Promise.all([
            collectPages(queryOrganisations({ limit: 200 })).catch(
                () => [] as PlaceOrganisation[],
            ),
            collectPages(queryPartners({ limit: 200 })).catch(
                () => [] as PlacePartner[],
            ),
        ]);
        this.organisations.set(
            organisations.sort((a, b) => a.name.localeCompare(b.name)),
        );
        this.partners.set(
            partners.sort((a, b) => a.name.localeCompare(b.name)),
        );
        this.loading.set(false);
    }

    public newOrganisation(): void {
        this.openOrganisationForm(new PlaceOrganisation());
    }

    public editOrganisation(item: PlaceOrganisation): void {
        this.openOrganisationForm(item);
    }

    private openOrganisationForm(item: PlaceOrganisation) {
        const ref = this._dialog.open(OrganisationFormComponent, {
            data: { item, partners: this.partners() },
        });
        this.subscription(
            'modal_events',
            (
                ref.componentInstance as unknown as FormModalComponent
            ).event.subscribe((event) => {
                if (event.reason !== 'done') return;
                this.load();
            }),
        );
    }

    public async deleteOrganisation(item: PlaceOrganisation) {
        const details = await openConfirmModal(
            {
                title: i18n('ORGANISATIONS.REMOVE'),
                content: i18n('ORGANISATIONS.REMOVE_MSG', { name: item.name }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('COMMON.LOADING'));
        try {
            await removeOrganisation(item.id);
            notifySuccess(i18n('ORGANISATIONS.REMOVE_SUCCESS'));
            this.load();
        } catch (err) {
            notifyError(
                i18n('ORGANISATIONS.REMOVE_ERROR', {
                    error: await describeError(err),
                }),
            );
        }
        details.close();
    }

    public claimZones(item: PlaceOrganisation) {
        this._dialog
            .open(OrganisationClaimModalComponent, {
                data: { organisation: item },
            })
            .afterClosed()
            .subscribe((result) => {
                if (result) this.load();
            });
    }

    public newPartner(): void {
        this.openPartnerForm(new PlacePartner());
    }

    public editPartner(item: PlacePartner): void {
        this.openPartnerForm(item);
    }

    private openPartnerForm(item: PlacePartner) {
        const ref = this._dialog.open(PartnerFormComponent, { data: { item } });
        this.subscription(
            'modal_events',
            (
                ref.componentInstance as unknown as FormModalComponent
            ).event.subscribe((event) => {
                if (event.reason !== 'done') return;
                this.load();
            }),
        );
    }

    public async deletePartner(item: PlacePartner) {
        const details = await openConfirmModal(
            {
                title: i18n('ORGANISATIONS.PARTNER_REMOVE'),
                content: i18n('ORGANISATIONS.PARTNER_REMOVE_MSG', {
                    name: item.name,
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('COMMON.LOADING'));
        try {
            await removePartner(item.id);
            notifySuccess(i18n('ORGANISATIONS.PARTNER_REMOVE_SUCCESS'));
            this.load();
        } catch (err) {
            notifyError(
                i18n('ORGANISATIONS.PARTNER_REMOVE_ERROR', {
                    error: await describeError(err),
                }),
            );
        }
        details.close();
    }
}
