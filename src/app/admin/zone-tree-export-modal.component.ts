import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { PlaceZone, queryZones } from '@placeos/ts-client';

import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { IconComponent } from '../ui/icon.component';

@Component({
    selector: 'app-zone-tree-export-modal',
    template: `
        <div class="bg-base-200 flex items-center justify-between px-4 py-2">
            <h3 class="text-xl font-medium">Export Zone Tree</h3>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </div>
        <main
            class="grid h-[calc(100vh-7rem)] w-screen grid-cols-1 gap-4 overflow-hidden p-4 lg:grid-cols-2"
        >
            <section class="flex min-h-0 flex-col space-y-4">
                <p class="text-sm opacity-70">
                    Select one or more parent zones. Export includes each
                    selected zone followed by all children recursively.
                </p>
                <item-search-field
                    class="zone-parent-search block min-h-0 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [(ngModel)]="selected_zone"
                    [display_list]="true"
                />
            </section>
            <section class="flex min-h-0 flex-col space-y-2">
                <h4 class="text-sm font-medium">Selected Parents</h4>
                @if (selected().length) {
                    <div class="min-h-0 flex-1 space-y-2 overflow-auto pr-1">
                        @for (zone of selected(); track zone.id) {
                            <div
                                class="bg-base-200 flex items-center justify-between rounded-sm px-3 py-2"
                            >
                                <div class="min-w-0">
                                    <div class="truncate font-medium">
                                        {{ zone.display_name || zone.name }}
                                    </div>
                                    <div class="truncate text-xs opacity-60">
                                        {{ zone.id }}
                                    </div>
                                    <div class="text-xs opacity-60">
                                        {{ zone.children_count || 0 }} children
                                    </div>
                                </div>
                                <button
                                    icon
                                    matRipple
                                    (click)="removeSelected(zone)"
                                >
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                } @else {
                    <div
                        class="flex min-h-0 flex-1 flex-col items-center justify-center rounded-sm border border-dashed p-8 text-center opacity-40"
                    >
                        <p>No parent zones selected.</p>
                    </div>
                }
            </section>
        </main>
        <footer class="border-base-200 flex justify-end border-t px-4 py-2">
            <button
                btn
                matRipple
                (click)="export()"
                [disabled]="!selected().length"
            >
                Export Selected
            </button>
        </footer>
    `,
    imports: [
        FormsModule,
        IconComponent,
        ItemSearchFieldComponent,
        MatDialogModule,
        MatRippleModule,
    ],
    styles: [
        `
            :host ::ng-deep .zone-parent-search .item-search-field {
                height: 100%;
                min-height: 0;
            }

            :host ::ng-deep .zone-parent-search .item-search-field > div {
                height: 100% !important;
                max-height: none;
            }
        `,
    ],
})
export class ZoneTreeExportModalComponent {
    private readonly _dialog_ref =
        inject<MatDialogRef<ZoneTreeExportModalComponent, PlaceZone[]>>(
            MatDialogRef,
        );
    private readonly _data = inject<{ selected: PlaceZone[] }>(MAT_DIALOG_DATA);

    public readonly selected = signal<PlaceZone[]>(this._data.selected || []);

    public set selected_zone(zone: PlaceZone | null) {
        if (!zone) return;
        if (!this.selected().some((_) => _.id === zone.id)) {
            this.selected.update((list) => [...list, zone]);
        }
    }

    public get selected_zone() {
        return null;
    }

    public readonly query_fn = (query: string): Promise<PlaceZone[]> =>
        queryZones({
            q: query,
            include_children_count: true,
            limit: 100,
        }).then((resp) =>
            resp.data.map((zone) => {
                (zone as PlaceZone & { extra?: string }).extra =
                    `${zone.children_count || 0} children`;
                return zone;
            }),
        );

    public readonly exclude_fn = (zone: PlaceZone) =>
        this.selected().some((_) => _.id === zone.id);

    public removeSelected(zone: PlaceZone) {
        this.selected.update((list) => list.filter((_) => _.id !== zone.id));
    }

    public export() {
        this._dialog_ref.close(this.selected());
    }
}
