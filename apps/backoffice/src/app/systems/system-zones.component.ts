import { Component } from '@angular/core';
import { PlaceSystem, PlaceZone, queryZones } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { SystemStateService } from './system-state.service';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'system-zones',
    template: `
        <div class="flex flex-col h-full w-full">
            <section class="flex items-center space-x-2 mb-2">
                <item-search-field
                    name="zone"
                    class="flex-1 h-12"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="addPendingZone($event)"
                ></item-search-field>
            </section>
            <section class="flex items-center space-x-2 mb-2">
                <button
                    btn
                    matRipple
                    [disabled]="!this.has_changes"
                    class="flex-1 inverse"
                    (click)="clearChanges()"
                >
                    Clear Changes
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1 inverse"
                    [disabled]="!this.has_changes"
                    (mousedown)="show_original = true"
                    (touchstart)="show_original = true"
                    (window:mouseup)="show_original = false"
                    (window:touchend)="show_original = false"
                >
                    View Orginal
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [disabled]="!this.has_changes"
                    (click)="saveChanges()"
                >
                    Save Changes
                </button>
            </section>
            <section class="w-full flex-1 h-1/2 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!(loading | async).zones"
                ></mat-progress-bar>
                <simple-table
                    class="min-w-[32rem] block text-sm"
                    [data]="show_original ? original_zones : zones"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'Name',
                            content: name_template,
                            size: '14rem'
                        },
                        {
                            key: 'description',
                            name: 'Description',
                            description_template
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '3.5rem',
                            content: actions_template,
                            show: (zones | async)?.length > 1
                        }
                    ]"
                    [color]="show_original ? {} : (changed_colours | async)"
                    [can_reorder]="true"
                    (ondrop)="reorder($event)"
                ></simple-table>
                <div class="w-full h-12"></div>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate underline"
                            [routerLink]="['/zones', row.id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="text-[0.625rem] opacity-30 font-mono">
                            {{ row.id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #description_template let-row="row">
                    <div class="p-4 text-xs">
                        {{ row.description }}
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="flex items-center space-x-2 p-2 mx-auto">
                        <button icon matRipple (click)="removeZone(row)">
                            <app-icon class="text-error">delete</app-icon>
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
})
export class SystemZonesComponent {
    public order_changed = false;

    public show_original = false;

    public original_zones = this._service.zones;

    public changed: Record<string, boolean> = {};
    /** ID of a zone that the user wishes to add to the system */
    public readonly pending_zones = new BehaviorSubject<PlaceZone[]>([]);
    /** ID of a zone that the user wishes to add to the system */
    public readonly zone_order = new BehaviorSubject<string[]>([]);
    /** Whether zones for active item are loading */
    public readonly loading = this._service.loading;
    /** List of zones assoicated with the active item */
    public readonly zones = combineLatest([
        this._service.zones,
        this.pending_zones,
        this.zone_order,
    ]).pipe(
        map(([zones, pending, order]) =>
            [...zones, ...pending.map((_) => ({ ..._, pending: true }))].sort(
                (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
            )
        )
    );

    public readonly changed_colours = combineLatest([
        this.zones,
        this.pending_zones,
    ]).pipe(
        map(([zones, pending]) => {
            const has_changed = zones.map(
                (i) => this.changed[i.id] || pending.find((_) => _.id === i.id)
            );
            const colours = {};
            has_changed.forEach((i, index) =>
                i ? (colours[index] = 'var(--wal)') : ''
            );
            console.log('Changed:', colours, this.changed);
            return colours;
        })
    );

    public get has_changes() {
        return this.pending_zones.getValue().length > 0 || this.order_changed;
    }

    /** Query function for systems */
    public readonly query_fn = (_) =>
        queryZones({ q: _ }).pipe(map((resp) => resp.data));

    public readonly exclude_fn = (zone: PlaceZone) =>
        this.item.zones.indexOf(zone.id) >= 0;

    public readonly removeZone = (z) =>
        z.pending
            ? this.pending_zones.next(
                  this.pending_zones.getValue().filter((_) => _.id !== z.id)
              )
            : this._service.removeZone(z);

    public readonly addPendingZone = (z) =>
        this.pending_zones.next([...this.pending_zones.getValue(), z]);

    public readonly savePendingZones = async () => {
        if (!this.pending_zones.getValue().length) return;
        await this._service.addZones(this.pending_zones.getValue());
        this.pending_zones.next([]);
    };

    public readonly saveZoneOrder = async () => {
        const zones = await this._service.zones.pipe(take(1)).toPromise();
        let zone_order = this.zone_order.getValue();
        if (zones.every(({ id }, idx) => zone_order[idx] === id)) return;
        await this._service.reorderZones(zone_order);
        this.order_changed = false;
        this.changed = {};
        this.zone_order.next([]);
    };

    public async saveChanges() {
        await this.savePendingZones();
        await this.saveZoneOrder();
    }

    public clearChanges() {
        this.order_changed = false;
        this.changed = {};
        this.zone_order.next([]);
        this.pending_zones.next([]);
    }

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    constructor(private _service: SystemStateService) {}

    public async reorder([previous, current]: [number, number]) {
        const zones = await this.zones.pipe(take(1)).toPromise();
        moveItemInArray(zones, previous, current);
        this.changed[zones[previous].id] = true;
        this.zone_order.next(zones.map(({ id }) => id));
        this.order_changed = true;
    }
}
