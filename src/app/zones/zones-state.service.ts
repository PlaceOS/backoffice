import { Dialog } from '@angular/cdk/dialog';
import { computed, inject, resource, Service, signal } from '@angular/core';
import {
    type Group,
    groups,
    groups_zones,
    type GroupZone,
    type System,
    type Trigger,
    triggers,
    Zone,
    zones,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { describeError, readError } from '../common/errors';
import { escapeHtml, unique } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { reportLoadError } from '../common/load-error';
import { notifyError, notifySuccess } from '../common/notifications';
import { openedTabs } from '../common/opened-tabs';
import { authority, loadMetadataBlocks } from '../common/placeos';
import { waitForDialog } from '../common/signals';
import {
    isSubsystemUser,
    querySupportSystems as querySystems,
    querySupportZones as queryZones,
} from '../common/support-access';
import { collectPages, Identity } from '../common/types';
import { groupMembership } from '../groups/group-membership';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import {
    SelectItemModalComponent,
    SelectItemModalData,
} from '../overlays/select-item-modal.component';

@Service()
export class ZonesStateService {
    private _service = inject(ActiveItemService);
    private _dialog = inject(Dialog);

    private _change = signal(0);

    public readonly loading = computed(
        () =>
            this.group_members.saving() ||
            this._systems.isLoading() ||
            this._triggers.isLoading() ||
            this._metadata_count.isLoading() ||
            this._children.isLoading() ||
            this._groups.isLoading(),
    );

    /** Active zone. `ActiveItemService` adds its settings of each encryption level */
    public readonly item = computed(() => this._service.activeOf('zones'));

    private readonly _zone_id = computed(() => this.item()?.id || undefined);
    // Lists that can be long only load once their tab is opened. Until then
    // a single row query gives the tab count.
    private readonly _opened_tabs = openedTabs(this._zone_id);
    private readonly _load_systems = computed(() =>
        this._opened_tabs().has('systems'),
    );
    private readonly _load_children = computed(() =>
        this._opened_tabs().has('children'),
    );
    private readonly _load_groups = computed(() =>
        this._opened_tabs().has('groups'),
    );

    public readonly counts = computed<{
        systems?: number;
        triggers?: number;
        metadata?: number;
        children?: number;
        groups?: number;
    }>(() => ({
        systems: this._systems.value()?.total || 0,
        triggers: this._triggers.value()?.total || 0,
        metadata: this._metadata_count.value() || 0,
        children: this._children.value()?.total || 0,
        groups: this._groups.value()?.total || 0,
    }));

    private readonly _systems = resource({
        params: () => ({
            item: this.item(),
            changed: this._change(),
            full: this._load_systems(),
        }),
        loader: async ({ params, abortSignal }) => {
            const { item, full } = params;
            const empty = { data: [] as System[], total: 0 };
            if (!item) return empty;
            if (!full) {
                return querySystems(
                    { zone_id: [item.id], limit: 1 },
                    { signal: abortSignal },
                )
                    .then(({ total }) => ({ ...empty, total }))
                    .catch(() => empty);
            }
            // Load every page so the list matches the tab count
            const data = await collectPages(
                querySystems(
                    { zone_id: [item.id], limit: 500 },
                    { signal: abortSignal },
                ),
            ).catch(reportLoadError([] as System[]));
            return { data, total: data.length };
        },
    });

    public readonly systems = computed(() => this._systems.value()?.data || []);

    private readonly _triggers = resource({
        params: () => ({
            item: this.item(),
            changed: this._change(),
        }),
        loader: async ({ params, abortSignal }) => {
            const { item } = params;
            const empty = { data: [] as Trigger[], total: 0 };
            if (!item || isSubsystemUser()) return empty;
            const data = await zones
                .triggerInstances({ id: item.id }, { signal: abortSignal })
                .then(orThrow)
                .catch(reportLoadError([] as Trigger[]));
            return { data, total: data.length };
        },
    });

    public readonly triggers = computed(
        () => this._triggers.value()?.data || [],
    );

    /** Count of metadata blocks. The metadata tab uses this load again */
    private readonly _metadata_count = resource({
        params: () => ({
            item: this.item(),
            changed: this._change(),
        }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!item) return 0;
            return loadMetadataBlocks(item.id)
                .then((blocks) => blocks.length)
                .catch(() => 0);
        },
    });

    private readonly _children = resource({
        params: () => ({
            item: this.item(),
            changed: this._change(),
            full: this._load_children(),
        }),
        loader: async ({ params, abortSignal }) => {
            const { item, full } = params;
            const empty = { data: [] as Zone[], total: 0 };
            if (!item) return empty;
            if (!full) {
                return queryZones(
                    { parent_id: [item.id], limit: 1 },
                    { signal: abortSignal },
                )
                    .then(({ total }) => ({ ...empty, total }))
                    .catch(() => empty);
            }
            // Load every page so the list matches the tab count
            const data = await collectPages(
                queryZones(
                    { parent_id: [item.id], limit: 500 },
                    { signal: abortSignal },
                ),
            ).catch(reportLoadError([] as Zone[]));
            return { data, total: data.length };
        },
    });

    public readonly children = computed(
        () => this._children.value()?.data || [],
    );

    private readonly _groups = resource({
        params: () => ({
            item: this.item(),
            changed: this._change(),
            full: this._load_groups(),
        }),
        loader: async ({ params, abortSignal }) => {
            const { item, full } = params;
            const empty = { data: [] as GroupZone[], total: 0 };
            if (!item) return empty;
            const response = await groups_zones
                .query(
                    { zone_id: item.id, limit: full ? 1000 : 1 },
                    { signal: abortSignal },
                )
                .then(orThrowPage)
                .catch(reportLoadError(empty));
            if (!full) return { ...empty, total: response.total };
            return {
                total: response.total,
                data: [...response.data].sort((a, b) =>
                    (a.group?.name || a.group_id).localeCompare(
                        b.group?.name || b.group_id,
                    ),
                ),
            };
        },
    });

    public readonly groups = computed(() => this._groups.value()?.data || []);

    public get active_item() {
        return this._service.activeOf('zones');
    }

    /** Zones have no domain, so groups of the current domain can be added */
    private get authority_id() {
        return authority()?.id || undefined;
    }

    public async selectTrigger() {
        const ref = this._dialog.open<
            unknown,
            SelectItemModalData,
            SelectItemModalComponent
        >(SelectItemModalComponent, {
            data: {
                service_name: 'Triggers',
                query_fn: (_, signal) =>
                    triggers
                        .query({ q: _ }, { signal })
                        .then(orThrowPage)
                        .then((resp) => resp.data),
            },
        });
        const details = await waitForDialog(ref, 'action');
        if (details?.reason !== 'action') return ref.close();
        try {
            const zone = await this.addTrigger(
                ref.componentInstance.item as Trigger,
            );
            if (zone) this._service.replaceItem(zone as unknown as Identity);
        } catch (err) {
            notifyError(
                `Error adding trigger to zone. Error: ${describeError(err)}`,
            );
        } finally {
            ref.close();
        }
    }

    public async addTrigger(trigger: Trigger): Promise<Zone | undefined> {
        const triggers_list = unique([
            ...this.active_item.triggers,
            trigger.id,
        ]) as string[];
        // Send only the trigger list, so that other changes to the zone stay
        return zones
            .update({
                id: this.active_item.id,
                body: { triggers: triggers_list },
            })
            .then(orThrow);
    }

    public async removeTrigger(trigger: Trigger) {
        const details = await openConfirmModal(
            {
                title: `Remove trigger`,
                content: `<p>Are you sure you want remove trigger "${escapeHtml(trigger.name)}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        let zone: Zone;
        try {
            zone = await zones
                .update({
                    id: this.active_item.id,
                    body: {
                        triggers: this.active_item.triggers.filter(
                            (t) => t !== trigger.id,
                        ),
                    },
                })
                .then(orThrow);
        } catch (err) {
            return notifyError(
                `Error removing trigger ${trigger.id} from zone. Error: ${await readError(
                    err,
                )}`,
            );
        } finally {
            details.close();
        }
        notifySuccess(`Successfully removed trigger from zone.`);
        if (zone) this._service.replaceItem(zone as unknown as Identity);
    }

    /** Group memberships of the active zone */
    public readonly group_members = groupMembership<GroupZone, Group>(
        this._dialog,
        {
            one: 'ZONES.GROUP',
            many: 'ZONES.GROUPS',
            search: 'GROUPS.SEARCH',
            column: 'GROUPS.SINGULAR',
            member_key: 'group',
            route: 'groups',
            no_permissions: 'COMMON.DEFAULT',
            show_deny: true,
            rows: () => this.groups(),
            authority_id: () => this.authority_id,
            // The API lists the groups of the current domain only
            query: (q) =>
                groups
                    .query({ q, limit: 20 })
                    .then(orThrowPage)
                    .then((response) => [...response.data]),
            member_id: (row) => row.group_id,
            member_name: (row) => row.group?.name || row.group_id,
            member_detail: (row) => row.group_id,
            item_authority: (group) => group.authority_id,
            add: (group_id) =>
                groups_zones
                    .create({
                        body: { group_id, zone_id: this.active_item.id },
                    })
                    .then(orThrow),
            remove: (row) =>
                groups_zones
                    .destroy({ group_id: row.group_id, zone_id: row.zone_id })
                    .then(orThrow),
            update: (row, { permissions, deny }) =>
                groups_zones
                    .update({
                        group_id: row.group_id,
                        zone_id: row.zone_id,
                        body: {
                            permissions,
                            deny,
                        },
                    })
                    .then(orThrow),
            changed: () => this.changed(),
        },
    );

    private changed() {
        this._change.set(Date.now());
    }
}
