import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceGroupZone, PlaceZone, queryZones } from '@placeos/ts-client';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { groupPermissionLabels } from './group-permissions';
import { GroupStateService } from './group-state.service';

@Component({
    selector: 'group-zones',
    template: `
        <div class="flex h-full min-w-0 flex-col">
            <section class="flex items-center gap-2 p-4">
                <item-search-field
                    [placeholder]="'GROUPS.ZONE_SEARCH' | translate"
                    class="h-12 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="addZone($event)"
                ></item-search-field>
                <button
                    btn
                    matRipple
                    class="h-12"
                    [matTooltip]="'GROUPS.ZONES_BULK' | translate"
                    (click)="bulkAddZones()"
                >
                    <icon class="mr-2">playlist_add</icon>
                    {{ 'GROUPS.ZONES_BULK' | translate }}
                </button>
            </section>
            <section class="h-1/2 min-h-0 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="loading() !== true"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[64rem] text-sm"
                    [data]="zones"
                    [columns]="[
                        {
                            key: 'zone',
                            name: 'GROUPS.FIELD_ZONE' | translate,
                            content: zone_template,
                        },
                        {
                            key: 'permissions',
                            name: 'GROUPS.FIELD_PERMISSIONS' | translate,
                            content: permissions_template,
                            size: '24rem',
                        },
                        {
                            key: 'deny',
                            name: 'GROUPS.FIELD_DENY' | translate,
                            content: deny_template,
                            size: '6rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '7rem',
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'GROUPS.ZONES_EMPTY' | translate"
                ></simple-table>
            </section>
        </div>
        <ng-template #zone_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <a
                    class="text-sm underline"
                    [routerLink]="['/zones', row.zone_id, 'about']"
                >
                    {{ row.zone?.name || row.zone_id }}
                </a>
                <div class="text-xs opacity-30">{{ row.zone_id }}</div>
            </div>
        </ng-template>
        <ng-template #permissions_template let-row="row">
            <div class="flex flex-wrap gap-1 px-4 py-2">
                @for (label of permissionLabels(row.permissions); track label) {
                    <span class="bg-base-200 rounded px-2 py-1 text-xs">
                        {{ label | translate }}
                    </span>
                }
                @if (!permissionLabels(row.permissions).length) {
                    <span class="opacity-30">{{
                        'COMMON.DEFAULT' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #deny_template let-row="row">
            <div class="px-4 py-2">
                <span
                    class="inline-flex rounded px-2 py-1 text-xs font-medium"
                    [class.bg-error]="row.deny"
                    [class.text-error-content]="row.deny"
                    [class.bg-success]="!row.deny"
                    [class.text-success-content]="!row.deny"
                >
                    {{
                        (row.deny ? 'COMMON.TRUE' : 'COMMON.FALSE') | translate
                    }}
                </span>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'GROUPS.ZONE_PERMISSIONS' | translate"
                    (click)="editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'GROUPS.ZONE_REMOVE' | translate"
                    (click)="removeZone(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        FormsModule,
        IconComponent,
        ItemSearchFieldComponent,
        MatProgressBarModule,
        MatRippleModule,
        MatTooltipModule,
        RouterModule,
        SimpleTableComponent,
        TranslatePipe,
    ],
})
export class GroupZonesComponent {
    private _service = inject(GroupStateService);

    public readonly zones = this._service.zones;
    public readonly loading = this._service.loading;
    public readonly permissionLabels = groupPermissionLabels;
    public readonly addZone = (zone: PlaceZone) => this._service.addZone(zone);
    public readonly bulkAddZones = () =>
        this._service.bulkAddZones(this._current_zones);
    public readonly removeZone = (row: PlaceGroupZone) =>
        this._service.removeZone(row);
    public readonly editPermissions = (row: PlaceGroupZone) =>
        this._service.editZonePermissions(row);
    public readonly query_fn = (_: string) =>
        queryZones({
            q: _,
            authority_id: this._service.active_item?.authority_id,
        } as Record<string, unknown>).then((resp) => resp.data);
    public readonly exclude_fn = (zone: PlaceZone, __: string) => {
        const authority_id = this._service.active_item?.authority_id;
        const zone_authority_id = (
            zone as PlaceZone & { authority_id?: string }
        ).authority_id;
        return (
            !!this._service.active_item &&
            (!!this._current_zones.find((_) => _.zone_id === zone.id) ||
                (!!authority_id &&
                    !!zone_authority_id &&
                    zone_authority_id !== authority_id))
        );
    };

    private _current_zones: PlaceGroupZone[] = [];

    constructor() {
        effect(() => (this._current_zones = this.zones()));
    }
}
