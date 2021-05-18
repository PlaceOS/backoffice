import { Component } from '@angular/core';
import { PlaceSystem, PlaceZone, queryZones } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

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
                [ngModel]="null"
                (ngModelChange)="new_zone = $event"
            ></item-search-field>
            <button mat-button [disabled]="!new_zone" (click)="joinZone(new_zone)">Join zone</button>
        </section>
        <section>
            <ng-container *ngIf="!(loading | async).zones; else load_state">
                <div role="table" class="overflow-x-auto" *ngIf="(zones | async)?.length">
                    <div table-head>
                        <div class="w-12 p-2"></div>
                        <div class="w-48 p-2" i18n="@@nameLabel">Name</div>
                        <div desc class="flex-1 p-2" i18n="@@descriptionLabel">Description</div>
                        <div class="w-16 p-2"></div>
                    </div>
                    <div
                        body
                        cdkDropList
                        (cdkDropListDropped)="drop($event)"
                        class="overflow-y-auto"
                    >
                        <div table-row cdkDrag *ngFor="let zone of zones | async; let i = index">
                            <div
                                class="w-full h-10 border-2 border-dashed border-gray-600 bg-gray-300 bg-opacity-25"
                                *cdkDragPlaceholder
                            ></div>
                            <div class="w-12 flex justify-center h-full p-2" style="cursor: grab">
                                <app-icon
                                    className="backoffice-select-arrows"
                                    cdkDragHandle
                                ></app-icon>
                            </div>
                            <div class="w-48 p-2">
                                <a [routerLink]="['/zones', zone.id]">{{ zone.name }}</a>
                            </div>
                            <div desc class="flex-1 truncate">{{ zone.description }}</div>
                            <div class="w-16 p-2 items-center justify-center">
                                <button mat-icon-button *ngIf="(zones | async).length > 1" (click)="removeZone(zone)">
                                    <app-icon className="backoffice-trash"></app-icon>
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
                padding: 1rem;
            }

            [desc] {
                min-width: 8rem;
            }
        `,
    ],
})
export class SystemZonesComponent  {
    /** Whether zones for active item are loading */
    public readonly loading = this._service.loading;
    /** List of zones assoicated with the active item */
    public readonly zones = this._service.zones;
    /** ID of a zone that the user wishes to add to the system */
    public new_zone: PlaceZone;
    /** Query function for systems */
    public readonly query_fn = (_) => queryZones({ q: _ }).pipe(map((resp) => resp.data));

    public readonly exclude_fn = (zone: PlaceZone) => this.item.zones.indexOf(zone.id) >= 0;

    public readonly removeZone = (z) => this._service.removeZone(z);
    public readonly joinZone = (z) => this._service.addZone(z);

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    constructor(private _service: SystemStateService) { }

    public drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
            this._service.reorderZones(event.previousIndex, event.currentIndex);
        }
    }
}
