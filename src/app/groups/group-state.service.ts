import { Dialog } from '@angular/cdk/dialog';
import { computed, inject, resource, Service, signal } from '@angular/core';
import {
    groups_users,
    groups_zones,
    type GroupUser,
    type GroupZone,
    User,
    users,
    type Zone,
    zones,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { describeError } from '../common/errors';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError } from '../common/notifications';
import { openedTabs } from '../common/opened-tabs';
import { newItem } from '../common/placeos';
import { groupMembership } from './group-membership';

@Service()
export class GroupStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(Dialog);
    private _changed = signal(0);

    public readonly item = computed(() => this._state.activeOf('groups'));
    public readonly loading = computed(
        () =>
            this.user_members.saving() ||
            this.zone_members.saving() ||
            this._users.isLoading() ||
            this._zones.isLoading(),
    );

    private readonly _group_id = computed(() => this.item()?.id || undefined);
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
            const empty = { data: [] as GroupUser[], total: 0 };
            if (!item) return empty;
            const response = await groups_users
                .query({ group_id: item.id, limit: full ? 1000 : 1 })
                .then(orThrowPage)
                .catch((error) => {
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
            const empty = { data: [] as GroupZone[], total: 0 };
            if (!item) return empty;
            const response = await groups_zones
                .query({ group_id: item.id, limit: full ? 1000 : 1 })
                .then(orThrowPage)
                .catch((error) => {
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
        return this._state.activeOf('groups');
    }

    /** User memberships of the active group */
    public readonly user_members = groupMembership<GroupUser, User>(
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
                users
                    .query({ q, limit: 20, authority_id })
                    .then(orThrowPage)
                    .then((response) =>
                        response.data.map((user) => newItem(User, user)),
                    ),
            member_id: (row) => row.user_id,
            member_name: (row) => row.user?.name || row.user_id,
            member_detail: (row) => row.user?.email,
            item_authority: (user) => user.authority_id,
            bulk_permissions: () => this.active_item?.default_permissions,
            add: (user_id, permissions) =>
                groups_users
                    .create({
                        body: {
                            group_id: this.active_item.id,
                            user_id,
                            ...(permissions === undefined
                                ? {}
                                : { permissions }),
                        },
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

    /** Zone memberships of the active group */
    public readonly zone_members = groupMembership<GroupZone, Zone>(
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
            // Zones have no domain, so the search is not filtered by it
            query: (q) =>
                zones
                    .query({ q, limit: 20 })
                    .then(orThrowPage)
                    .then((response) => [...response.data]),
            member_id: (row) => row.zone_id,
            member_name: (row) => row.zone?.name || row.zone_id,
            member_detail: (row) => row.zone_id,
            item_authority: () => undefined,
            add: (zone_id) =>
                groups_zones
                    .create({
                        body: { group_id: this.active_item.id, zone_id },
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
        this._changed.set(new Date().valueOf());
    }
}
