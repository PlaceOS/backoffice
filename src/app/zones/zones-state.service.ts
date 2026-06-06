import { computed, inject, resource, Service, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addGroupZone,
    authority,
    listMetadata,
    listZoneTriggers,
    PlaceGroup,
    PlaceGroupZone,
    PlaceMetadata,
    PlaceSystem,
    PlaceTrigger,
    PlaceZone,
    queryGroups,
    queryGroupZones,
    querySystems,
    queryTriggers,
    queryZones,
    removeGroupZone,
    updateGroupZone,
    updateZone,
} from '@placeos/ts-client';
import { unique } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { waitForEvent } from '../common/signals';
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

    private _loading = signal(false);
    private _change = signal(0);

    public readonly loading = this._loading.asReadonly();

    public readonly item = computed(
        () => this._service.item() as unknown as PlaceZone,
    );

    private readonly _counts = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceZone)) return {};
            this._loading.set(true);
            try {
                const details = await Promise.all([
                    querySystems({ zone_id: item.id, limit: 1 })
                        .then((d) => d.total)
                        .catch(() => 0),
                    listZoneTriggers(item.id)
                        .then((d) => d.total)
                        .catch(() => 0),
                    listMetadata(item.id)
                        .then((d) => d.length)
                        .catch(() => 0),
                    queryZones({ parent_id: item.id, limit: 1 })
                        .then((d) => d.total)
                        .catch(() => 0),
                    queryGroupZones({ zone_id: item.id, limit: 1 })
                        .then((d) => d.total)
                        .catch(() => 0),
                ]);
                const [systems, triggers, metadata, children, groups] = details;
                return {
                    systems,
                    triggers,
                    metadata,
                    children,
                    groups,
                };
            } finally {
                this._loading.set(false);
            }
        },
    });

    public readonly counts = computed<{
        systems?: number;
        triggers?: number;
        metadata?: number;
        children?: number;
        groups?: number;
    }>(
        () =>
            this._counts.value() || {
                systems: 0,
                triggers: 0,
                metadata: 0,
                children: 0,
                groups: 0,
            },
    );

    private readonly _systems = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceZone)) return [] as PlaceSystem[];
            const response = await querySystems({ zone_id: item.id }).catch(
                () => ({ data: [] }),
            );
            return response.data;
        },
    });

    public readonly systems = computed(() => this._systems.value() || []);

    private readonly _triggers = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceZone)) return [] as PlaceTrigger[];
            const response = await listZoneTriggers(item.id).catch(() => ({
                data: [],
            }));
            return response.data;
        },
    });

    public readonly triggers = computed(() => this._triggers.value() || []);

    private readonly _metadata = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceZone)) return [] as PlaceMetadata[];
            return listMetadata(item.id).catch(() => []);
        },
    });

    public readonly metadata = computed(() => this._metadata.value() || []);

    private readonly _children = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceZone)) return [] as PlaceZone[];
            const response = await queryZones({ parent_id: item.id }).catch(
                () => ({ data: [] }),
            );
            return response.data;
        },
    });

    public readonly children = computed(() => this._children.value() || []);

    private readonly _groups = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceZone)) return [] as PlaceGroupZone[];
            this._loading.set(true);
            try {
                const response = await queryGroupZones({
                    zone_id: item.id,
                    limit: 1000,
                }).catch(() => ({ data: [] }));
                return response.data.sort((a, b) =>
                    (a.group?.name || a.group_id).localeCompare(
                        b.group?.name || b.group_id,
                    ),
                );
            } finally {
                this._loading.set(false);
            }
        },
    });

    public readonly groups = computed(() => this._groups.value() || []);

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

    constructor() {
        setTimeout(() => this.changed(), 1000);
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
        if (!details?.reason) return ref.close();
        const zone = await this.addTrigger(
            ref.componentInstance.item as PlaceTrigger,
        );
        ref.close();
        if (zone) this._service.replaceItem(zone as unknown as Identity);
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
                content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (!details?.reason) return;
        const zone = await updateZone(this.active_item.id, {
            ...this.active_item,
            triggers: this.active_item.triggers.filter((t) => t !== trigger.id),
        }).catch((err) => {
            details.close();
            notifyError(
                `Error removing trigger ${trigger.id} from zone. Error: ${
                    err.statusText || err.message || err
                }`,
            );
            throw err;
        });
        details.close();
        notifySuccess(`Successfully removed trigger from zone.`);
        if (zone) this._service.replaceItem(zone as unknown as Identity);
    }

    public async addGroup(group: PlaceGroup) {
        if (!group?.id) return;
        await addGroupZone({
            group_id: group.id,
            zone_id: this.active_item.id,
        }).catch((error) => {
            notifyError(i18n('ZONES.GROUP_ADD_ERROR', { error }));
            throw error;
        });
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
        this._loading.set(true);
        const results = await Promise.allSettled(
            groups.map((group) =>
                addGroupZone({
                    group_id: group.id,
                    zone_id: this.active_item.id,
                }),
            ),
        );
        this._loading.set(false);
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
                    name: item.group?.name || item.group_id,
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('ZONES.GROUP_REMOVE_LOADING'));
        await removeGroupZone(item.group_id, item.zone_id).catch((error) => {
            details.close();
            notifyError(i18n('ZONES.GROUP_REMOVE_ERROR', { error }));
            throw error;
        });
        details.close();
        notifySuccess(i18n('ZONES.GROUP_REMOVE_SUCCESS'));
        this.changed();
    }

    public async updateGroup(item: PlaceGroupZone) {
        await updateGroupZone(item.group_id, item.zone_id, {
            permissions: +item.permissions || 0,
            deny: !!item.deny,
        }).catch((error) => {
            notifyError(i18n('ZONES.GROUP_SAVE_ERROR', { error }));
            throw error;
        });
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
