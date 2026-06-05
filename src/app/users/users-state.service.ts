import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addGroupUser,
    listMetadata,
    PlaceGroup,
    PlaceGroupUser,
    PlaceUser,
    queryGroups,
    queryGroupUsers,
    removeGroupUser,
    updateGroupUser,
} from '@placeos/ts-client';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { waitForEvent } from '../common/signals';
import { GroupBulkAddModalComponent } from '../groups/group-bulk-add-modal.component';
import { GroupPermissionsModalComponent } from '../groups/group-permissions-modal.component';
import { openConfirmModal } from '../overlays/confirm-modal.component';

@Injectable({
    providedIn: 'root',
})
export class UsersStateService {
    private _service = inject(ActiveItemService);
    private _dialog = inject(MatDialog);

    private _loading = signal(false);
    private _change = signal(0);

    public readonly loading = this._loading.asReadonly();

    public readonly item = this._service.item;

    private readonly _counts = resource({
        params: () => ({
            item: this._service.active_item$(),
            change: this._change(),
        }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceUser)) return {};
            this._loading.set(true);
            const details = await Promise.all([
                listMetadata(item.id)
                    .then((d) => d.length)
                    .catch((_err) => 0),
                queryGroupUsers({ user_id: item.id, limit: 1 })
                    .then((response) => response.total)
                    .catch(() => 0),
            ]);
            const [metadata, groups] = details;
            this._loading.set(false);
            return {
                metadata,
                groups,
            };
        },
    });

    public readonly counts = computed<{ metadata?: number; groups?: number }>(
        () => this._counts.value() || { metadata: 0, groups: 0 },
    );

    private readonly _metadata = resource({
        params: () => ({
            item: this.item(),
            change: this._change(),
        }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceUser)) return [];
            return listMetadata(item.id).catch((_err) => []);
        },
    });

    public readonly metadata = computed(() => this._metadata.value() || []);

    private readonly _groups = resource({
        params: () => ({ item: this.item(), change: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceUser)) return [] as PlaceGroupUser[];
            this._loading.set(true);
            try {
                const response = await queryGroupUsers({
                    user_id: item.id,
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

    public get active_item(): PlaceUser {
        return this._service.active_item as unknown as PlaceUser;
    }

    public async addGroup(group: PlaceGroup) {
        if (!group?.id) return;
        await addGroupUser({
            user_id: this.active_item.id,
            group_id: group.id,
        }).catch((error) => {
            notifyError(i18n('USERS.GROUP_ADD_ERROR', { error }));
            throw error;
        });
        notifySuccess(i18n('USERS.GROUP_ADD_SUCCESS'));
        this.changed();
    }

    public async bulkAddGroups(existing_groups: PlaceGroupUser[] = []) {
        const groups = await waitForEvent(
            this._dialog
                .open(GroupBulkAddModalComponent<PlaceGroup>, {
                    data: {
                        title: 'USERS.GROUPS_BULK',
                        placeholder: 'GROUPS.SEARCH',
                        empty_message: 'USERS.GROUPS_BULK_EMPTY',
                        query_fn: (query: string) =>
                            queryGroups({
                                q: query,
                                limit: 20,
                                authority_id: this.active_item?.authority_id,
                            } as Record<string, unknown>).then(
                                (response) => response.data,
                            ),
                        exclude: (group: PlaceGroup) => {
                            const authority_id = this.active_item?.authority_id;
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
                addGroupUser({
                    user_id: this.active_item.id,
                    group_id: group.id,
                }),
            ),
        );
        this._loading.set(false);
        const failed = results.filter((_) => _.status === 'rejected').length;
        if (failed) {
            notifyError(i18n('USERS.GROUPS_BULK_ERROR', { count: failed }));
        }
        const added = results.length - failed;
        if (added) {
            notifySuccess(i18n('USERS.GROUPS_BULK_SUCCESS', { count: added }));
        }
        this.changed();
    }

    public async removeGroup(item: PlaceGroupUser) {
        const details = await openConfirmModal(
            {
                title: i18n('USERS.GROUP_REMOVE'),
                content: i18n('USERS.GROUP_REMOVE_MSG', {
                    name: item.group?.name || item.group_id,
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('USERS.GROUP_REMOVE_LOADING'));
        await removeGroupUser(item.user_id, item.group_id).catch((error) => {
            details.close();
            notifyError(i18n('USERS.GROUP_REMOVE_ERROR', { error }));
            throw error;
        });
        details.close();
        notifySuccess(i18n('USERS.GROUP_REMOVE_SUCCESS'));
        this.changed();
    }

    public async updateGroup(item: PlaceGroupUser) {
        await updateGroupUser(item.user_id, item.group_id, {
            permissions: +item.permissions || 0,
        }).catch((error) => {
            notifyError(i18n('USERS.GROUP_SAVE_ERROR', { error }));
            throw error;
        });
        notifySuccess(i18n('USERS.GROUP_SAVE_SUCCESS'));
        this.changed();
    }

    public async editGroupPermissions(item: PlaceGroupUser) {
        const result = await waitForEvent(
            this._dialog
                .open(GroupPermissionsModalComponent, {
                    data: {
                        title: 'USERS.GROUP_PERMISSIONS',
                        permissions: item.permissions,
                    },
                })
                .afterClosed(),
        );
        if (!result) return;
        await this.updateGroup({ ...item, permissions: result.permissions });
    }

    private changed() {
        this._change.set(Date.now());
    }

    constructor() {
        setTimeout(() => this.changed(), 1000);
    }
}
