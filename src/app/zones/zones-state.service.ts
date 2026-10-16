import { computed, inject, resource, Service, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addGroupZone,
    authority,
    listMetadata,
    listZoneTriggers,
    PlaceGroup,
    PlaceGroupZone,
    PlaceSystem,
    PlaceTrigger,
    PlaceZone,
    queryGroups,
    queryGroupZones,
    queryTriggers,
    removeGroupZone,
    updateGroupZone,
    updateZone,
} from '@placeos/ts-client';
import { describeError, readError } from '../common/errors';
import { escapeHtml, unique } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { openedTabs } from '../common/opened-tabs';
import { waitForEvent } from '../common/signals';
import {
    collectPages,
    isSubsystemUser,
    querySupportSystems as querySystems,
    querySupportZones as queryZones,
} from '../common/support-access';
import { DialogEvent, Identity } from '../common/types';
import { GroupBulkAddModalComponent } from '../groups/group-bulk-add-modal.component';
import { GroupPermissionsModalComponent } from '../groups/group-permissions-modal.component';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import {
    SelectItemModalComponent,
    SelectItemModalData,
} from '../overlays/select-item-modal.component';

@Service()
export class ZonesStateService {
    private _service = inject(ActiveItemService);
    private _dialog = inject(MatDialog);

    /** Set while a bulk add runs */
    private _saving = signal(false);
    private _change = signal(0);

    public readonly loading = computed(
        () =>
            this._saving() ||
            this._systems.isLoading() ||
            this._triggers.isLoading() ||
            this._metadata_count.isLoading() ||
            this._children.isLoading() ||
            this._groups.isLoading(),
    );

    public readonly item = computed(
        () => this._service.item() as unknown as PlaceZone,
    );

    private readonly _zone_id = computed(() => {
        const item = this.item();
        return item instanceof PlaceZone ? item.id : undefined;
    });
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
        loader: async ({ params }) => {
            const { item, full } = params;
            const empty = { data: [] as PlaceSystem[], total: 0 };
            if (!(item instanceof PlaceZone)) return empty;
            if (!full) {
                return querySystems({ zone_id: item.id, limit: 1 })
                    .then(({ total }) => ({ ...empty, total }))
                    .catch(() => empty);
            }
            // Load every page so the list matches the tab count
            const data = await collectPages(
                querySystems({ zone_id: item.id, limit: 500 }),
            ).catch(() => [] as PlaceSystem[]);
            return { data, total: data.length };
        },
    });

    public readonly systems = computed(() => this._systems.value()?.data || []);

    private readonly _triggers = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            const empty = { data: [] as PlaceTrigger[], total: 0 };
            if (!(item instanceof PlaceZone) || isSubsystemUser()) return empty;
            return listZoneTriggers(item.id).catch(() => empty);
        },
    });

    public readonly triggers = computed(
        () => this._triggers.value()?.data || [],
    );

    /** The metadata tab loads its own list, so only the count is needed */
    private readonly _metadata_count = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceZone)) return 0;
            return listMetadata(item.id)
                .then((list) => list.length)
                .catch(() => 0);
        },
    });

    private readonly _children = resource({
        params: () => ({
            item: this.item(),
            changed: this._change(),
            full: this._load_children(),
        }),
        loader: async ({ params }) => {
            const { item, full } = params;
            const empty = { data: [] as PlaceZone[], total: 0 };
            if (!(item instanceof PlaceZone)) return empty;
            if (!full) {
                return queryZones({ parent_id: item.id, limit: 1 })
                    .then(({ total }) => ({ ...empty, total }))
                    .catch(() => empty);
            }
            // Load every page so the list matches the tab count
            const data = await collectPages(
                queryZones({ parent_id: item.id, limit: 500 }),
            ).catch(() => [] as PlaceZone[]);
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
        loader: async ({ params }) => {
            const { item, full } = params;
            const empty = { data: [] as PlaceGroupZone[], total: 0 };
            if (!(item instanceof PlaceZone)) return empty;
            const response = await queryGroupZones({
                zone_id: item.id,
                limit: full ? 1000 : 1,
            }).catch(() => empty);
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

    public get active_item(): PlaceZone {
        return this._service.active_item as unknown as PlaceZone;
    }

    private get authority_id() {
        return (
            (this.active_item as PlaceZone & { authority_id?: string })
                ?.authority_id ||
            authority()?.id ||
            undefined
        );
    }

    public async selectTrigger() {
        const ref = this._dialog.open<
            SelectItemModalComponent,
            SelectItemModalData
        >(SelectItemModalComponent, {
            data: {
                service_name: 'Triggers',
                query_fn: (_) =>
                    queryTriggers({ q: _ }).then((resp) => resp.data),
            },
        });
        const details = await Promise.race([
            waitForEvent(
                ref.componentInstance.event,
                (_: DialogEvent) => _.reason === 'action',
            ),
            waitForEvent(ref.afterClosed()),
        ]);
        if (details?.reason !== 'action') return ref.close();
        try {
            const zone = await this.addTrigger(
                ref.componentInstance.item as PlaceTrigger,
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

    public async addTrigger(
        trigger: PlaceTrigger,
    ): Promise<PlaceZone | undefined> {
        const triggers_list = unique([
            ...this.active_item.triggers,
            trigger.id,
        ]) as string[];
        return updateZone(this.active_item.id, {
            ...this.active_item,
            triggers: triggers_list,
        });
    }

    public async removeTrigger(trigger: PlaceTrigger) {
        const details = await openConfirmModal(
            {
                title: `Remove trigger`,
                content: `<p>Are you sure you want remove trigger "${escapeHtml(trigger.name)}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        let zone: PlaceZone;
        try {
            zone = await updateZone(this.active_item.id, {
                ...this.active_item,
                triggers: this.active_item.triggers.filter(
                    (t) => t !== trigger.id,
                ),
            });
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

    public async addGroup(group: PlaceGroup) {
        if (!group?.id) return;
        try {
            await addGroupZone({
                group_id: group.id,
                zone_id: this.active_item.id,
            });
        } catch (error) {
            return notifyError(
                i18n('ZONES.GROUP_ADD_ERROR', { error: describeError(error) }),
            );
        }
        notifySuccess(i18n('ZONES.GROUP_ADD_SUCCESS'));
        this.changed();
    }

    public async bulkAddGroups(existing_groups: PlaceGroupZone[] = []) {
        const groups = await waitForEvent(
            this._dialog
                .open(GroupBulkAddModalComponent<PlaceGroup>, {
                    data: {
                        title: 'ZONES.GROUPS_BULK',
                        placeholder: 'GROUPS.SEARCH',
                        empty_message: 'ZONES.GROUPS_BULK_EMPTY',
                        query_fn: (query: string) =>
                            queryGroups({
                                q: query,
                                limit: 20,
                                authority_id: this.authority_id,
                            } as Record<string, unknown>).then(
                                (response) => response.data,
                            ),
                        exclude: (group: PlaceGroup) => {
                            const authority_id = this.authority_id;
                            return (
                                !!existing_groups.find(
                                    (_) => _.group_id === group.id,
                                ) ||
                                (!!authority_id &&
                                    group.authority_id !== authority_id)
                            );
                        },
                    },
                    height: 'auto',
                    width: 'auto',
                    maxHeight: 'calc(100vh - 2em)',
                    maxWidth: 'calc(100vw - 2em)',
                })
                .afterClosed(),
        );
        if (!groups?.length) return;
        this._saving.set(true);
        const results = await Promise.allSettled(
            groups.map((group) =>
                addGroupZone({
                    group_id: group.id,
                    zone_id: this.active_item.id,
                }),
            ),
        );
        this._saving.set(false);
        const failed = results.filter((_) => _.status === 'rejected').length;
        if (failed) {
            notifyError(i18n('ZONES.GROUPS_BULK_ERROR', { count: failed }));
        }
        const added = results.length - failed;
        if (added) {
            notifySuccess(i18n('ZONES.GROUPS_BULK_SUCCESS', { count: added }));
        }
        this.changed();
    }

    public async removeGroup(item: PlaceGroupZone) {
        const details = await openConfirmModal(
            {
                title: i18n('ZONES.GROUP_REMOVE'),
                content: i18n('ZONES.GROUP_REMOVE_MSG', {
                    name: escapeHtml(item.group?.name || item.group_id),
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('ZONES.GROUP_REMOVE_LOADING'));
        try {
            await removeGroupZone(item.group_id, item.zone_id);
        } catch (error) {
            details.close();
            return notifyError(
                i18n('ZONES.GROUP_REMOVE_ERROR', {
                    error: describeError(error),
                }),
            );
        }
        details.close();
        notifySuccess(i18n('ZONES.GROUP_REMOVE_SUCCESS'));
        this.changed();
    }

    public async updateGroup(item: PlaceGroupZone) {
        try {
            await updateGroupZone(item.group_id, item.zone_id, {
                permissions: +item.permissions || 0,
                deny: !!item.deny,
            });
        } catch (error) {
            return notifyError(
                i18n('ZONES.GROUP_SAVE_ERROR', { error: describeError(error) }),
            );
        }
        notifySuccess(i18n('ZONES.GROUP_SAVE_SUCCESS'));
        this.changed();
    }

    public async editGroupPermissions(item: PlaceGroupZone) {
        const result = await waitForEvent(
            this._dialog
                .open(GroupPermissionsModalComponent, {
                    data: {
                        title: 'ZONES.GROUP_PERMISSIONS',
                        permissions: item.permissions,
                        deny: item.deny,
                        show_deny: true,
                    },
                })
                .afterClosed(),
        );
        if (!result) return;
        await this.updateGroup({
            ...item,
            permissions: result.permissions,
            deny: result.deny,
        });
    }

    private changed() {
        this._change.set(Date.now());
    }
}
