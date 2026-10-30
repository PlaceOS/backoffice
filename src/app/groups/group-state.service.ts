import { computed, inject, resource, Service, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addGroupUser,
    addGroupZone,
    PlaceGroup,
    PlaceGroupUser,
    PlaceGroupZone,
    PlaceUser,
    PlaceZone,
    queryGroupUsers,
    queryGroupZones,
    queryUsers,
    queryZones,
    removeGroupUser,
    removeGroupZone,
    updateGroupUser,
    updateGroupZone,
} from '@placeos/ts-client';
import { describeError } from '../common/errors';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError } from '../common/notifications';
import { openedTabs } from '../common/opened-tabs';
import { groupMembership } from './group-membership';

@Service()
export class GroupStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(MatDialog);
    private _changed = signal(0);

    public readonly item = computed(
        () => this._state.item() as unknown as PlaceGroup,
    );
    public readonly loading = computed(
        () =>
            this.user_members.saving() ||
            this.zone_members.saving() ||
            this._users.isLoading() ||
            this._zones.isLoading(),
    );

    private readonly _group_id = computed(() => {
        const item = this.item();
        return item instanceof PlaceGroup ? item.id : undefined;
    });
    // Member lists only load once their tab is opened. Until then a single
    // row query gives the tab count.
    private readonly _opened_tabs = openedTabs(this._group_id);
    private readonly _load_users = computed(() =>
        this._opened_tabs().has('users'),
    );
    private readonly _load_zones = computed(() =>
        this._opened_tabs().has('zones'),
    );

    private readonly _users = resource({
        params: () => ({
            item: this.item(),
            changed: this._changed(),
            full: this._load_users(),
        }),
        loader: async ({ params }) => {
            const { item, full } = params;
            const empty = { data: [] as PlaceGroupUser[], total: 0 };
            if (!(item instanceof PlaceGroup)) return empty;
            const response = await queryGroupUsers({
                group_id: item.id,
                limit: full ? 1000 : 1,
            }).catch((error) => {
                notifyError(
                    i18n('GROUPS.USERS_LOAD_ERROR', {
                        error: describeError(error),
                    }),
                );
                return empty;
            });
            if (!full) return { ...empty, total: response.total };
            return {
                total: response.total,
                data: [...response.data].sort((a, b) =>
                    (a.user?.name || a.user_id).localeCompare(
                        b.user?.name || b.user_id,
                    ),
                ),
            };
        },
    });

    public readonly users = computed(() => this._users.value()?.data || []);

    private readonly _zones = resource({
        params: () => ({
            item: this.item(),
            changed: this._changed(),
            full: this._load_zones(),
        }),
        loader: async ({ params }) => {
            const { item, full } = params;
            const empty = { data: [] as PlaceGroupZone[], total: 0 };
            if (!(item instanceof PlaceGroup)) return empty;
            const response = await queryGroupZones({
                group_id: item.id,
                limit: full ? 1000 : 1,
            }).catch((error) => {
                notifyError(
                    i18n('GROUPS.ZONES_LOAD_ERROR', {
                        error: describeError(error),
                    }),
                );
                return empty;
            });
            if (!full) return { ...empty, total: response.total };
            return {
                total: response.total,
                data: [...response.data].sort((a, b) =>
                    (a.zone?.name || a.zone_id).localeCompare(
                        b.zone?.name || b.zone_id,
                    ),
                ),
            };
        },
    });

    public readonly zones = computed(() => this._zones.value()?.data || []);

    public readonly counts = computed<{ users?: number; zones?: number }>(
        () => ({
            users: this._users.value()?.total || 0,
            zones: this._zones.value()?.total || 0,
        }),
    );

    public get active_item() {
        return this._state.active_item as unknown as PlaceGroup;
    }

    /** User memberships of the active group */
    public readonly user_members = groupMembership<PlaceGroupUser, PlaceUser>(
        this._dialog,
        {
            one: 'GROUPS.USER',
            many: 'GROUPS.USERS',
            search: 'GROUPS.USER_SEARCH',
            column: 'GROUPS.FIELD_USER',
            member_key: 'user',
            route: 'users',
            no_permissions: 'COMMON.NONE',
            rows: () => this.users(),
            authority_id: () => this.active_item?.authority_id,
            query: (q, authority_id) =>
                queryUsers({ q, limit: 20, authority_id }).then(
                    (response) => response.data,
                ),
            member_id: (row) => row.user_id,
            member_name: (row) => row.user?.name || row.user_id,
            member_detail: (row) => row.user?.email,
            item_authority: (user) => user.authority_id,
            bulk_permissions: () => this.active_item?.default_permissions,
            add: (user_id, permissions) =>
                addGroupUser({
                    group_id: this.active_item.id,
                    user_id,
                    ...(permissions === undefined ? {} : { permissions }),
                }),
            remove: (row) => removeGroupUser(row.user_id, row.group_id),
            update: (row, { permissions }) =>
                updateGroupUser(row.user_id, row.group_id, { permissions }),
            changed: () => this.changed(),
        },
    );

    /** Zone memberships of the active group */
    public readonly zone_members = groupMembership<PlaceGroupZone, PlaceZone>(
        this._dialog,
        {
            one: 'GROUPS.ZONE',
            many: 'GROUPS.ZONES',
            search: 'GROUPS.ZONE_SEARCH',
            column: 'GROUPS.FIELD_ZONE',
            member_key: 'zone',
            route: 'zones',
            no_permissions: 'COMMON.DEFAULT',
            show_deny: true,
            rows: () => this.zones(),
            authority_id: () => this.active_item?.authority_id,
            query: (q, authority_id) =>
                queryZones({ q, limit: 20, authority_id } as Record<
                    string,
                    unknown
                >).then((response) => response.data),
            member_id: (row) => row.zone_id,
            member_name: (row) => row.zone?.name || row.zone_id,
            member_detail: (row) => row.zone_id,
            item_authority: (zone) =>
                (zone as PlaceZone & { authority_id?: string }).authority_id,
            add: (zone_id) =>
                addGroupZone({ group_id: this.active_item.id, zone_id }),
            remove: (row) => removeGroupZone(row.group_id, row.zone_id),
            update: (row, { permissions, deny }) =>
                updateGroupZone(row.group_id, row.zone_id, {
                    permissions,
                    deny,
                }),
            changed: () => this.changed(),
        },
    );

    private changed() {
        this._changed.set(new Date().valueOf());
    }
}
