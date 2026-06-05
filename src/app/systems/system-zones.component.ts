import { Component, computed, inject, signal } from '@angular/core';
import { PlaceSystem, PlaceZone, queryZones } from '@placeos/ts-client';

import { moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { SystemStateService } from './system-state.service';

@Component({
    selector: 'system-zones',
    template: `
        <div class="flex h-full w-full flex-col p-4">
            <section class="mb-2 flex items-center space-x-2">
                <item-search-field
                    [placeholder]="'SYSTEMS.ZONE_SEARCH' | translate"
                    class="h-12 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="addPendingZone($event)"
                ></item-search-field>
            </section>
            <section class="mb-2 flex items-center space-x-2">
                <button
                    btn
                    matRipple
                    [disabled]="!has_changes()"
                    class="inverse flex-1"
                    (click)="clearChanges()"
                >
                    {{ 'COMMON.CLEAR' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="inverse flex-1"
                    [disabled]="!has_changes()"
                    (mousedown)="show_original = true"
                    (touchstart)="show_original = true"
                    (window:mouseup)="show_original = false"
                    (window:touchend)="show_original = false"
                >
                    {{ 'SYSTEMS.VIEW_ORIGINAL' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [disabled]="!has_changes()"
                    (click)="saveChanges()"
                >
                    {{ 'COMMON.SAVE_CHANGES' | translate }}
                </button>
            </section>
            @if (zone_issues()) {
                <div
                    class="mono bg-warning text-warning-content mb-2 rounded-sm p-2 text-center text-xs"
                >
                    {{ zone_issues() }}
                </div>
            }
            <section class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading().zones"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-lg text-sm"
                    [data]="show_original ? original_zones() : zones()"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'SYSTEMS.ZONE_FIELD_NAME' | translate,
                            content: name_template,
                            size: '14rem',
                        },
                        {
                            key: 'description',
                            name: 'SYSTEMS.ZONE_FIELD_DESCRIPTION' | translate,
                            content: description_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '3.5rem',
                            content: actions_template,
                            show: zones().length > 1,
                        },
                    ]"
                    [color]="show_original ? {} : changed_colours()"
                    [can_reorder]="true"
                    (ondrop)="reorder($event)"
                    empty_message="No zones for selected system"
                ></simple-table>
                <div class="h-12 w-full"></div>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex w-full flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate text-left underline"
                            [routerLink]="['/zones', row.id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #description_template let-data="data">
                    <div
                        class="w-full overflow-hidden px-4 py-2 text-left text-xs select-text"
                    >
                        {{ data }}
                        @if (!data) {
                            <span class="opacity-30">
                                {{
                                    'SYSTEMS.ZONE_DESCRIPTION_EMPTY' | translate
                                }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            matRipple
                            [matTooltip]="'SYSTEMS.ZONE_REMOVE' | translate"
                            (click)="removeZone(row)"
                        >
                            <icon class="text-error">delete</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            [desc] {
                min-width: 8rem;
            }
        `,
    ],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
        SimpleTableComponent,
        MatProgressBarModule,
        ItemSearchFieldComponent,
        FormsModule,
        RouterModule,
    ],
})
export class SystemZonesComponent {
    private _service = inject(SystemStateService);

    public order_changed = false;

    public show_original = false;

    public readonly original_zones = this._service.zones;

    public readonly item_signal = this._service.item;

    public changed: Record<string, boolean> = {};
    /** ID of a zone that the user wishes to add to the system */
    public readonly pending_zones = signal<PlaceZone[]>([]);
    /** ID of a zone that the user wishes to add to the system */
    public readonly zone_order = signal<string[]>([]);
    /** Whether zones for active item are loading */
    public readonly loading = this._service.loading;
    /** List of zones assoicated with the active item */
    public readonly zones = computed(() =>
        [
            ...this.original_zones(),
            ...this.pending_zones().map((_) => ({ ..._, pending: true })),
        ].sort(
            (a, b) =>
                this.zone_order().indexOf(a.id) -
                this.zone_order().indexOf(b.id),
        ),
    );

    public readonly changed_colours = computed(() => {
        const pending = this.pending_zones();
        const colours = {};
        this.zones().forEach((item, index) => {
            if (
                this.changed[item.id] ||
                pending.find((_) => _.id === item.id)
            ) {
                colours[index] = 'var(--wal)';
            }
        });
        return colours;
    });

    public readonly zone_issues = computed(() => {
        const item = this.item_signal();
        const zones = this.original_zones();
        if (!item?.email && !item?.map_id) return '';
        const has_org = zones.find((_) => _.tags.includes('org'));
        const has_building = zones.find((_) => _.tags.includes('building'));
        const has_level = zones.find((_) => _.tags.includes('level'));
        if (has_org && has_building && has_level) return '';
        const missing = [];
        if (!has_org) missing.push('org');
        if (!has_building) missing.push('building');
        if (!has_level) missing.push('level');
        return `Zones with tags required for a room system are missing. [${missing.join(
            ', ',
        )}]`;
    });

    public readonly has_changes = computed(
        () => this.pending_zones().length > 0 || this.order_changed,
    );

    /** Query function for systems */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).then((resp) => resp.data);

    public readonly exclude_fn = (zone: PlaceZone, __: string) =>
        this.item.zones.indexOf(zone.id) >= 0;

    public readonly removeZone = (z) =>
        z.pending
            ? this.pending_zones.set(
                  this.pending_zones().filter((_) => _.id !== z.id),
              )
            : this._service.removeZone(z);

    public readonly addPendingZone = (z) =>
        this.pending_zones.update((pending) => [...pending, z]);

    public readonly savePendingZones = async () => {
        if (!this.pending_zones().length) return;
        await this._service.addZones(this.pending_zones());
        this.pending_zones.set([]);
    };

    public readonly saveZoneOrder = async () => {
        const zones = this.original_zones();
        const zone_order = this.zone_order();
        if (zones.every(({ id }, idx) => zone_order[idx] === id)) return;
        await this._service.reorderZones(zone_order);
        this.order_changed = false;
        this.changed = {};
        this.zone_order.set([]);
    };

    public async saveChanges() {
        await this.savePendingZones();
        await this.saveZoneOrder();
    }

    public clearChanges() {
        this.order_changed = false;
        this.changed = {};
        this.zone_order.set([]);
        this.pending_zones.set([]);
    }

    public get item(): PlaceSystem {
        return this._service.active_item as PlaceSystem;
    }

    public async reorder([previous, current]: [number, number]) {
        const zones = [...this.zones()];
        moveItemInArray(zones, previous, current);
        this.changed[zones[previous].id] = true;
        this.zone_order.set(zones.map(({ id }) => id));
        this.order_changed = true;
    }
}
