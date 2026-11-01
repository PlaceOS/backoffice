import { computed, inject, resource, Service, signal } from '@angular/core';
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
    reviveUser,
    updateGroupUser,
} from '@placeos/ts-client';
import { describeError } from '../common/errors';
import { escapeHtml } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { openedTabs } from '../common/opened-tabs';
import { groupMembership } from '../groups/group-membership';
import { openConfirmModal } from '../overlays/confirm-modal.component';

@Service()
export class UsersStateService {
    private _service = inject(ActiveItemService);
    private _dialog = inject(MatDialog);

    private _change = signal(0);

    public readonly loading = computed(
        () =>
            this.group_members.saving() ||
            this._metadata_count.isLoading() ||
            this._groups.isLoading(),
    );

    public readonly item = this._service.item;

    // The metadata tab loads its own list, so only the count is needed here
    private readonly _metadata_count = resource({
        params: () => ({
            item: this._service.active_item$(),
            change: this._change(),
        }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceUser)) return 0;
            return listMetadata(item.id)
                .then((d) => d.length)
                .catch((_err) => 0);
        },
    });

    public readonly counts = computed<{ metadata?: number; groups?: number }>(
        () => ({
            metadata: this._metadata_count.value() || 0,
            groups: this._groups.value()?.total || 0,
        }),
    );

    private readonly _user_id = computed(() => {
        const item = this.item();
        return item instanceof PlaceUser ? item.id : undefined;
    });
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
            const empty = { data: [] as PlaceGroupUser[], total: 0 };
            if (!(item instanceof PlaceUser)) return empty;
            const response = await queryGroupUsers({
                user_id: item.id,
                limit: full ? 1000 : 1,
            }).catch((error) => {
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

    public get active_item(): PlaceUser {
        return this._service.active_item as unknown as PlaceUser;
    }

    /** Group memberships of the active user */
    public readonly group_members = groupMembership<PlaceGroupUser, PlaceGroup>(
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
            query: (q, authority_id) =>
                queryGroups({ q, limit: 20, authority_id } as Record<
                    string,
                    unknown
                >).then((response) => response.data),
            member_id: (row) => row.group_id,
            member_name: (row) => row.group?.name || row.group_id,
            member_detail: (row) => row.group_id,
            item_authority: (group) => group.authority_id,
            add: (group_id) =>
                addGroupUser({ user_id: this.active_item.id, group_id }),
            remove: (row) => removeGroupUser(row.user_id, row.group_id),
            update: (row, { permissions }) =>
                updateGroupUser(row.user_id, row.group_id, { permissions }),
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
            await reviveUser(item.id);
            if (this._service.active_item === item) {
                this._service.replaceItem(
                    new PlaceUser({ ...item, deleted: false }),
                );
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
