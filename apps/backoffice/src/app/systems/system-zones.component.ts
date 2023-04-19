import { Component } from '@angular/core';
import { PlaceSystem, PlaceZone, queryZones } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { SystemStateService } from './system-state.service';

@Component({
    selector: 'system-zones',
    template: `
        <section class="flex items-center space-x-2 mb-4">
            <item-search-field
                name="zone"
                class="flex-1 h-12"
                [query_fn]="query_fn"
                [exclude]="exclude_fn"
                [clear_on_select]="true"
                [ngModel]="null"
                (ngModelChange)="addPendingZone($event)"
            ></item-search-field>
            <button
                mat-button
                [disabled]="!this.pending_zones.getValue().length"
                (click)="savePendingZones()"
            >
                Save Pending
            </button>
        </section>
        <section class="relative">
            <button
                mat-button
                *ngIf="order_changed"
                class="shadow z-50 mb-2"
                (click)="saveZoneOrder()"
            >
                Save Zone Order
            </button>
            <ng-container *ngIf="!(loading | async).zones; else load_state">
                <div
                    role="table"
                    class="overflow-x-auto"
                    *ngIf="(zones | async)?.length"
                >
                    <div table-head>
                        <div class="w-12 p-2"></div>
                        <div class="w-48 p-2" i18n="@@nameLabel">Name</div>
                        <div desc class="flex-1 p-2" i18n="@@descriptionLabel">
                            Description
                        </div>
                        <div class="w-16 p-2"></div>
                    </div>
                    <div
                        body
                        cdkDropList
                        (cdkDropListDropped)="drop($event)"
                        class="overflow-y-auto"
                    >
                        <div
                            table-row
                            cdkDrag
                            class="bg-opacity-40"
                            [class.bg-pending]="changed[zone.id]"
                            [matTooltip]="
                                changed[zone.id] ? 'Zone order changed' : ''
                            "
                            *ngFor="let zone of zones | async; let i = index"
                        >
                            <div
                                class="w-full h-10 border-2 border-dashed border-gray-600 bg-gray-300 bg-opacity-25"
                                *cdkDragPlaceholder
                            ></div>
                            <div
                                class="w-12 flex justify-center h-full p-2"
                                style="cursor: grab"
                                [class.pointer-events-none]="zone.pending"
                                [class.text-pending]="zone.pending"
                            >
                                <app-icon
                                    [className]="
                                        zone.pending
                                            ? 'backoffice-warning'
                                            : 'backoffice-select-arrows'
                                    "
                                    cdkDragHandle
                                ></app-icon>
                            </div>
                            <div class="w-48 p-2">
                                <a [routerLink]="['/zones', zone.id]">
                                    {{ zone.name }}
                                </a>
                            </div>
                            <div desc class="flex-1 truncate">
                                {{ zone.description }}
                            </div>
                            <div class="w-16 p-2 items-center justify-center">
                                <button
                                    mat-icon-button
                                    *ngIf="(zones | async).length > 1"
                                    (click)="removeZone(zone)"
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
        </section>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Loading zones...</p>
            </div>
        </ng-template>
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

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    constructor(private _service: SystemStateService) {}

    public async drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
            console.log('Index:', event.previousIndex, event.currentIndex);
            const zones = await this._service.zones.pipe(take(1)).toPromise();
            let zone_order = this.zone_order.getValue();
            if (zone_order.length !== zones.length) {
                zone_order = zones.map((_) => _.id);
            }
            console.log('Order:', zone_order);
            const item = zone_order.splice(event.previousIndex, 1);
            this.changed[item[0]] = true;
            zone_order.splice(event.currentIndex, 0, item[0]);
            this.zone_order.next(zone_order);
            this.order_changed = !zones.every(
                ({ id }, idx) => zone_order[idx] === id
            );
        }
    }
}
