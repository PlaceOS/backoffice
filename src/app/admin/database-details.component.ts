import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
    addZone,
    PlaceSourceResyncStatus,
    PlaceZone,
    queryZones,
    sourceResync,
    sourceResyncStatus,
} from '@placeos/ts-client';

import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncHandler } from '../common/async-handler.class';
import { mapLimit } from '../common/cascade-delete';
import { readError } from '../common/errors';
import { csvToJson, downloadFile, jsonToCsv } from '../common/general';
import {
    notifyError,
    notifySuccess,
    notifyWarn,
} from '../common/notifications';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { ZoneTreeExportModalComponent } from './zone-tree-export-modal.component';

/** How often a running MQTT re-sync is checked on */
const MQTT_STATUS_POLL_MS = 2000;
/** Ceiling on pages followed for one zone query */
const MAX_ZONE_PAGES = 100;
/** Parent ids sent in one zone query, to keep the URL short */
const PARENT_IDS_PER_QUERY = 50;
/** Zone requests sent at once during an export or import */
const ZONE_CONCURRENCY = 4;

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

async function queryAllZones(query_params: Record<string, unknown> = {}) {
    let response = await queryZones({ ...query_params, limit: 500 });
    const zones = [...response.data];
    for (let page = 1; response.next; page++) {
        // A partial export would look complete, so fail instead
        if (page >= MAX_ZONE_PAGES)
            throw new Error(`Zone list exceeds ${MAX_ZONE_PAGES} pages`);
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
                            <mat-spinner diameter="32" />
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
                            <mat-spinner diameter="32" />
                        </div>
                    }
                </button>
            </div>
            <div
                mqtt-resync
                class="border-base-200 flex flex-col space-y-2 rounded-sm border p-2 md:col-span-2"
            >
                <p class="mx-auto max-w-120 p-2 text-center">
                    Publish every module's state and every model's metadata to
                    the MQTT brokers again. Clearing first removes everything
                    PlaceOS has published, for when what the brokers hold has
                    drifted from the modules; clients see nothing until it is
                    published again.
                </p>
                <div class="flex flex-wrap justify-center">
                    <button
                        btn
                        matRipple
                        mqtt-resync-button
                        [disabled]="mqtt_running()"
                        (click)="resyncMqtt(false)"
                    >
                        Re-sync MQTT
                    </button>
                    <button
                        btn
                        matRipple
                        mqtt-clear-button
                        class="error"
                        [disabled]="mqtt_running()"
                        (click)="resyncMqtt(true)"
                    >
                        Clear &amp; Re-sync MQTT
                    </button>
                </div>
                @if (mqtt_status(); as status) {
                    <div
                        mqtt-status
                        class="flex items-center justify-center space-x-2 p-2 text-sm opacity-80"
                    >
                        @if (mqtt_running()) {
                            <mat-spinner diameter="20" />
                        }
                        <span>{{ mqtt_status_text() }}</span>
                    </div>
                }
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
    imports: [MatProgressSpinnerModule, MatRippleModule, MatDialogModule],
})
export class PlaceDatabaseDetailsComponent
    extends AsyncHandler
    implements OnInit
{
    private readonly _dialog = inject(MatDialog);

    /** Where the last MQTT re-sync got to, if this user may see it */
    public readonly mqtt_status = signal<PlaceSourceResyncStatus | null>(null);
    /** Whether a re-sync is being requested */
    private readonly _mqtt_starting = signal(false);
    /** Whether a re-sync is being requested or is running */
    public readonly mqtt_running = computed(
        () =>
            this._mqtt_starting() ||
            ['clearing', 'resyncing'].includes(this.mqtt_status()?.state),
    );
    public readonly mqtt_status_text = computed(() => {
        const status = this.mqtt_status();
        if (!status) return '';
        switch (status.state) {
            case 'clearing':
                return 'Clearing the MQTT brokers...';
            case 'resyncing':
                return 'Publishing to the MQTT brokers...';
            case 'complete':
                return `Last re-sync finished ${new Date(
                    status.finished_at,
                ).toLocaleString()}${
                    status.clear
                        ? `, after removing ${status.cleared} topics`
                        : ''
                }.`;
            case 'failed':
                return `Last re-sync failed: ${status.error || 'unknown error'}`;
            default:
                return 'No re-sync since the MQTT service started.';
        }
    });

    /** Whether zones are being exported */
    public readonly exporting_zones = signal(false);
    /** Whether zones are being imported */
    public readonly importing_zones = signal(false);

    public ngOnInit() {
        this._loadMqttStatus();
    }

    /** Re-publishes everything to the MQTT brokers, clearing them first if asked */
    public async resyncMqtt(clear: boolean) {
        if (clear) {
            const details = await openConfirmModal(
                {
                    title: 'Clear & Re-sync MQTT',
                    content:
                        'Remove everything PlaceOS has published from the MQTT brokers, then publish it all again. Dashboards and alerts show nothing until it is published again. Continue?',
                    icon: { type: 'icon', content: 'sync_problem' },
                    confirm_text: 'Clear & Re-sync',
                },
                this._dialog,
            );
            if (details.reason !== 'done') return;
            details.close();
        }
        this._mqtt_starting.set(true);
        try {
            this.mqtt_status.set(await sourceResync(clear));
            this._watchMqttStatus();
        } catch (err) {
            if ((err as Response)?.status === 409) {
                notifyWarn('An MQTT re-sync is already running.');
                this._loadMqttStatus();
            } else {
                notifyError(
                    `Error starting the MQTT re-sync. Error: ${await readError(err)}`,
                );
            }
        }
        this._mqtt_starting.set(false);
    }

    private async _loadMqttStatus() {
        try {
            this.mqtt_status.set(await sourceResyncStatus());
            if (this.mqtt_running()) this._watchMqttStatus();
        } catch {
            // not available to this user, or to this version of PlaceOS
            this.mqtt_status.set(null);
        }
    }

    /** Follows a running re-sync and says how it ended */
    private _watchMqttStatus() {
        let checking = false;
        this.interval(
            'mqtt_status',
            async () => {
                // Skip a tick while hidden or while the last check is in flight
                if (checking || document.hidden) return;
                checking = true;
                let status: PlaceSourceResyncStatus;
                try {
                    status = await sourceResyncStatus();
                } catch {
                    return;
                } finally {
                    checking = false;
                }
                this.mqtt_status.set(status);
                if (status.state === 'complete') {
                    this.clearInterval('mqtt_status');
                    notifySuccess('MQTT re-sync complete.');
                } else if (status.state === 'failed') {
                    this.clearInterval('mqtt_status');
                    notifyError(
                        `MQTT re-sync failed. Error: ${status.error || 'unknown error'}`,
                    );
                }
            },
            MQTT_STATUS_POLL_MS,
        );
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
                `Error importing zone tree. Error: ${await readError(err)}`,
            );
        }
        this.importing_zones.set(false);
    }

    private async exportSelectedZoneTrees(parents: PlaceZone[]) {
        this.exporting_zones.set(true);
        try {
            const zones = await this.zoneTreeExport(parents);
            downloadFile(
                `zone-tree-export-${new Date().toISOString()}.csv`,
                jsonToCsv(zones, ZONE_TREE_CSV_FIELDS),
            );
            notifySuccess(`Exported ${zones.length} zones.`);
        } catch (err) {
            notifyError(
                `Error exporting zone tree. Error: ${await readError(err)}`,
            );
        }
        this.exporting_zones.set(false);
    }

    /**
     * The selected zones and every zone beneath them, walked one tree level
     * at a time so parents always come before their children.
     */
    private async zoneTreeExport(parents: PlaceZone[]) {
        const zones: ZoneTreeExportItem[] = [];
        const visited = new Set<string>();
        let level = parents;
        // Each pass only keeps unvisited zones, so a cyclic parent_id ends it
        while (level.length) {
            const ids: string[] = [];
            for (const zone of level) {
                if (!zone?.id || visited.has(zone.id)) continue;
                visited.add(zone.id);
                ids.push(zone.id);
                zones.push(zoneToExportItem(zone));
            }
            const chunks: string[][] = [];
            for (let i = 0; i < ids.length; i += PARENT_IDS_PER_QUERY) {
                chunks.push(ids.slice(i, i + PARENT_IDS_PER_QUERY));
            }
            const children = await mapLimit(chunks, ZONE_CONCURRENCY, (chunk) =>
                queryAllZones({ parent_id: chunk.join(',') }),
            );
            level = children.flat();
        }
        return zones;
    }

    private async importZoneTree(zones: ZoneTreeExportItem[]) {
        if (!(zones instanceof Array) || !zones.length) {
            notifyWarn('Invalid zone tree CSV file.');
            return;
        }
        const pending = zones.filter((zone) => !!zone.id);
        const file_ids = new Set(pending.map((zone) => zone.id));
        const children = new Map<string, ZoneTreeExportItem[]>();
        for (const zone of pending) {
            if (!zone.parent_id || !file_ids.has(zone.parent_id)) continue;
            children.set(zone.parent_id, [
                ...(children.get(zone.parent_id) || []),
                zone,
            ]);
        }
        // Zones whose parent is not in the file go in at the top
        let level = pending.filter(
            (zone) => !zone.parent_id || !file_ids.has(zone.parent_id),
        );
        const id_map = new Map<string, string>();
        let created = 0;
        try {
            // Create a tree level at a time, as children need their parent's new id
            for (
                let depth = 0;
                level.length && depth < pending.length;
                depth++
            ) {
                await mapLimit(level, ZONE_CONCURRENCY, async (zone) => {
                    const parent_id = zone.parent_id
                        ? id_map.get(zone.parent_id) || ''
                        : '';
                    const created_zone = await addZone(
                        zoneToImportItem(zone, parent_id),
                    );
                    id_map.set(zone.id, created_zone.id);
                    created++;
                });
                level = level.flatMap((zone) => children.get(zone.id) || []);
            }
        } catch (err) {
            // Zones created before the error stay, so tell the user how far it got
            notifyError(
                `Error importing zone tree. Created ${created} of ${
                    zones.length
                } zones before the error. Error: ${await readError(err)}`,
            );
            return;
        }
        const skipped = pending.length - created;
        notifySuccess(
            `Imported ${created} zones.${
                skipped
                    ? ` Skipped ${skipped} zones with circular parent ids.`
                    : ''
            }`,
        );
    }
}
