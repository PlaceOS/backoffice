import { Component, inject, signal } from '@angular/core';
import {
    addZone,
    apiEndpoint,
    PlaceZone,
    post,
    queryZones,
    showZone,
} from '@placeos/ts-client';

import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { csvToJson, downloadFile, jsonToCsv } from '../common/general';
import {
    notifyError,
    notifySuccess,
    notifyWarn,
} from '../common/notifications';
import { TranslatePipe } from '../ui/translate.pipe';
import { ZoneTreeExportModalComponent } from './zone-tree-export-modal.component';

type ZoneTreeExportItem = Record<string, unknown> & {
    id: string;
    parent_id?: string;
};

const ZONE_TREE_CSV_FIELDS = [
    'id',
    'parent_id',
    'name',
    'display_name',
    'description',
    'tags',
    'location',
    'code',
    'type',
    'capacity',
    'map_id',
    'images',
    'timezone',
    'playlists',
    'triggers',
];

function zoneToExportItem(zone: PlaceZone): ZoneTreeExportItem {
    const data = zone.toJSON ? zone.toJSON() : { ...zone };
    data.parent_id = zone.parent_id || '';
    delete data.created_at;
    delete data.updated_at;
    delete data.version;
    delete data.children_count;
    delete data.count;
    delete data.settings;
    delete data.trigger_list;
    return data as ZoneTreeExportItem;
}

function zoneToImportItem(
    zone: ZoneTreeExportItem,
    parent_id: string,
): Partial<PlaceZone> {
    const data: Record<string, unknown> = { ...zone, parent_id };
    delete data.id;
    delete data.created_at;
    delete data.updated_at;
    delete data.version;
    delete data.children_count;
    delete data.count;
    delete data.settings;
    delete data.trigger_list;
    return data as Partial<PlaceZone>;
}

function reindex(backfill = true) {
    const url = `${apiEndpoint()}/reindex${backfill ? '?backfill=true' : ''}`;
    return post(url, null);
}

function backfill() {
    const url = `${apiEndpoint()}/backfill`;
    return post(url, null);
}

async function queryAllZones(query_params: Record<string, unknown> = {}) {
    let response = await queryZones({ ...query_params, limit: 500 });
    const zones = [...response.data];
    while (response.next) {
        response = await response.next();
        zones.push(...response.data);
    }
    return zones;
}

@Component({
    selector: 'app-database-details',
    template: `
        <div class="mb-4 flex items-center justify-between space-x-2 px-4">
            <div class="text-2xl">PlaceOS Database</div>
        </div>
        <div class="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2">
            <div
                class="border-base-200 flex flex-col space-y-2 rounded-sm border p-2"
            >
                <p class="mx-auto max-w-64 p-2 text-center">
                    {{ 'ADMIN.DATABASE_REINDEX_MSG' | translate }}
                </p>
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="reindexing()"
                    (click)="reindex()"
                >
                    @if (!reindexing()) {
                        {{ 'ADMIN.DATABASE_REINDEX' | translate }}
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    }
                </button>
            </div>
            <div
                class="border-base-200 flex flex-col space-y-2 rounded-sm border p-2"
            >
                <p class="mx-auto max-w-64 p-2 text-center">
                    {{ 'ADMIN.DATABASE_BACKFILL_MSG' | translate }}
                </p>
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="backfilling()"
                    (click)="backfill()"
                >
                    @if (!backfilling()) {
                        {{ 'ADMIN.DATABASE_BACKFILL' | translate }}
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    }
                </button>
            </div>
            <div
                class="border-base-200 flex flex-col space-y-2 rounded-sm border p-2"
            >
                <p class="mx-auto max-w-72 p-2 text-center">
                    Export zone tree structure as CSV. Select parents to export
                    them followed by all children recursively.
                </p>
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="exporting_zones() || importing_zones()"
                    (click)="exportZoneTree()"
                >
                    @if (!exporting_zones()) {
                        Export Zone Tree
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    }
                </button>
            </div>
            <div
                class="border-base-200 flex flex-col space-y-2 rounded-sm border p-2"
            >
                <p class="mx-auto max-w-80 p-2 text-center">
                    Import zone tree structure from CSV. Old zone IDs are mapped
                    to new IDs and child parent IDs are substituted
                    automatically.
                </p>
                <input
                    #zoneImportFile
                    class="hidden"
                    type="file"
                    accept="text/csv,text/tab-separated-values,.csv,.tsv"
                    (change)="importZoneTreeFile($event)"
                />
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="exporting_zones() || importing_zones()"
                    (click)="zoneImportFile.click()"
                >
                    @if (!importing_zones()) {
                        Import Zone Tree
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    }
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                padding-top: 1em;
                display: flex;
                flex-wrap: wrap;
            }

            button {
                min-width: 10em;
                margin: 0.25em;
            }

            mat-card {
                margin: 0.5em;
                text-align: center;
            }
        `,
    ],
    imports: [
        MatProgressSpinnerModule,
        TranslatePipe,
        MatRippleModule,
        MatDialogModule,
    ],
})
export class PlaceDatabaseDetailsComponent {
    private readonly _dialog = inject(MatDialog);

    /** Whether backend is reindexing the database */
    public readonly reindexing = signal(false);
    /** Whether backend is reindexing the database */
    public readonly backfilling = signal(false);
    /** Whether zones are being exported */
    public readonly exporting_zones = signal(false);
    /** Whether zones are being imported */
    public readonly importing_zones = signal(false);

    public async reindex() {
        this.reindexing.set(true);
        await reindex().catch((err) => {
            notifyError(
                `Error reindexing database. Error: ${JSON.stringify(
                    err.response || err.message || err,
                )}`,
            );
        });
        this.reindexing.set(false);
    }

    public async backfill() {
        this.backfilling.set(true);
        await backfill().catch((err) => {
            notifyError(
                `Error backfilling database. Error: ${JSON.stringify(
                    err.response || err.message || err,
                )}`,
            );
        });
        this.backfilling.set(false);
    }

    public exportZoneTree() {
        const dialog_ref = this._dialog.open(ZoneTreeExportModalComponent, {
            data: { selected: [] },
            height: '100vh',
            maxHeight: '100vh',
            maxWidth: '100vw',
            panelClass: 'fullscreen-modal',
            width: '100vw',
        });
        dialog_ref.afterClosed().subscribe((zones?: PlaceZone[]) => {
            if (!zones?.length) return;
            this.exportSelectedZoneTrees(zones);
        });
    }

    public async importZoneTreeFile(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) return;
        this.importing_zones.set(true);
        try {
            const contents = await file.text();
            const separator = file.name.toLowerCase().endsWith('.tsv')
                ? '\t'
                : ',';
            const zones = csvToJson(
                contents,
                separator,
            ) as ZoneTreeExportItem[];
            await this.importZoneTree(zones);
        } catch (err) {
            notifyError(
                `Error importing zone tree. Error: ${JSON.stringify(
                    (err as { response?: unknown; message?: unknown })
                        .response ||
                        (err as { response?: unknown; message?: unknown })
                            .message ||
                        err,
                )}`,
            );
        }
        this.importing_zones.set(false);
    }

    private async exportSelectedZoneTrees(parents: PlaceZone[]) {
        this.exporting_zones.set(true);
        try {
            const zones: ZoneTreeExportItem[] = [];
            const visited = new Set<string>();
            for (const parent of parents) {
                await this.addZoneTreeToExport(parent.id, zones, visited);
            }
            downloadFile(
                `zone-tree-export-${new Date().toISOString()}.csv`,
                jsonToCsv(zones, ZONE_TREE_CSV_FIELDS),
            );
            notifySuccess(`Exported ${zones.length} zones.`);
        } catch (err) {
            notifyError(
                `Error exporting zone tree. Error: ${JSON.stringify(
                    (err as { response?: unknown; message?: unknown })
                        .response ||
                        (err as { response?: unknown; message?: unknown })
                            .message ||
                        err,
                )}`,
            );
        }
        this.exporting_zones.set(false);
    }

    private async addZoneTreeToExport(
        zone_id: string,
        zones: ZoneTreeExportItem[],
        visited: Set<string>,
    ) {
        if (visited.has(zone_id)) return;
        visited.add(zone_id);
        const zone = await showZone(zone_id);
        const children = await queryAllZones({ parent_id: zone_id });
        zones.push(zoneToExportItem(zone));
        for (const child of children) {
            await this.addZoneTreeToExport(child.id, zones, visited);
        }
    }

    private async importZoneTree(zones: ZoneTreeExportItem[]) {
        if (!(zones instanceof Array) || !zones.length) {
            notifyWarn('Invalid zone tree CSV file.');
            return;
        }
        const id_map = new Map<string, string>();
        for (const zone of zones) {
            if (!zone.id) continue;
            const parent_id = zone.parent_id
                ? id_map.get(zone.parent_id) || ''
                : '';
            const created_zone = await addZone(
                zoneToImportItem(zone, parent_id),
            );
            id_map.set(zone.id, created_zone.id);
        }
        notifySuccess(`Imported ${id_map.size} zones.`);
    }
}
