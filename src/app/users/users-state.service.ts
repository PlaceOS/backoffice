import { Dialog } from '@angular/cdk/dialog';
import { computed, inject, resource, Service, signal } from '@angular/core';
import {
    type Group,
    groups,
    groups_users,
    type GroupUser,
    users,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { describeError } from '../common/errors';
import { escapeHtml } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { openedTabs } from '../common/opened-tabs';
import { loadMetadataBlocks } from '../common/placeos';
import { groupMembership } from '../groups/group-membership';
import { openConfirmModal } from '../overlays/confirm-modal.component';

@Service()
export class UsersStateService {
    private _service = inject(ActiveItemService);
    private _dialog = inject(Dialog);

    private _change = signal(0);

    public readonly loading = computed(
        () =>
            this.group_members.saving() ||
            this._metadata_count.isLoading() ||
            this._groups.isLoading(),
    );

    public readonly item = computed(() => this._service.activeOf('users'));

    // The metadata tab uses this load again, so the blocks load one time
    private readonly _metadata_count = resource({
        params: () => ({
            item: this.item(),
            change: this._change(),
        }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!item) return 0;
            return loadMetadataBlocks(item.id)
                .then((blocks) => blocks.length)
                .catch(() => 0);
        },
    });

    public readonly counts = computed<{ metadata?: number; groups?: number }>(
        () => ({
            metadata: this._metadata_count.value() || 0,
            groups: this._groups.value()?.total || 0,
        }),
    );

    private readonly _user_id = computed(() => this.item()?.id || undefined);
    // The group list only loads once its tab is opened. Until then a single
    // row query gives the tab count.
    private readonly _opened_tabs = openedTabs(this._user_id);
    private readonly _load_groups = computed(() =>
        this._opened_tabs().has('groups'),
    );

    private readonly _groups = resource({
        params: () => ({
            item: this.item(),
            change: this._change(),
            full: this._load_groups(),
        }),
        loader: async ({ params }) => {
            const { item, full } = params;
            const empty = { data: [] as GroupUser[], total: 0 };
            if (!item) return empty;
            const response = await groups_users
                .query({ user_id: item.id, limit: full ? 1000 : 1 })
                .then(orThrowPage)
                .catch((error) => {
                    notifyError(
                        i18n('USERS.GROUPS_LOAD_ERROR', {
                            error: describeError(error),
                        }),
                    );
                    return empty;
                });
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
        return this._service.activeOf('users');
    }

    /** Group memberships of the active user */
    public readonly group_members = groupMembership<GroupUser, Group>(
        this._dialog,
        {
            one: 'USERS.GROUP',
            many: 'USERS.GROUPS',
            search: 'GROUPS.SEARCH',
            column: 'GROUPS.SINGULAR',
            member_key: 'group',
            route: 'groups',
            no_permissions: 'COMMON.DEFAULT',
            rows: () => this.groups(),
            authority_id: () => this.active_item?.authority_id,
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
                groups_users
                    .create({
                        body: { user_id: this.active_item.id, group_id },
                    })
                    .then(orThrow),
            remove: (row) =>
                groups_users
                    .destroy({ user_id: row.user_id, group_id: row.group_id })
                    .then(orThrow),
            update: (row, { permissions }) =>
                groups_users
                    .update({
                        user_id: row.user_id,
                        group_id: row.group_id,
                        body: { permissions },
                    })
                    .then(orThrow),
            changed: () => this.changed(),
        },
    );

    /** Restore the selected user after confirmation. */
    public async revive() {
        const item = this.active_item;
        if (!item?.id || !item.deleted || !this._service.canMutate(4)) return;
        const details = await openConfirmModal(
            {
                title: i18n('USERS.REVIVE'),
                content: i18n('USERS.REVIVE_MSG', {
                    name: escapeHtml(item.name),
                }),
                confirm_text: i18n('USERS.REVIVE'),
                icon: { type: 'icon', content: 'restore_from_trash' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('USERS.REVIVE_LOADING'));
        try {
            await users.revive({ id: item.id }).then(orThrow);
            if (this.active_item === item) {
                this._service.replaceItem({ ...item, deleted: false });
            }
            this.changed();
            notifySuccess(i18n('USERS.REVIVE_SUCCESS'));
        } catch (error) {
            notifyError(
                i18n('USERS.REVIVE_ERROR', { error: describeError(error) }),
            );
        } finally {
            details.close();
        }
    }

    private changed() {
        this._change.set(Date.now());
    }
}
