import { inject, Injectable } from '@angular/core';
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
import { BehaviorSubject, combineLatest, lastValueFrom, Observable, of } from 'rxjs';
import { catchError, filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { GroupBulkAddModalComponent } from './group-bulk-add-modal.component';
import { GroupPermissionsModalComponent } from './group-permissions-modal.component';

@Injectable({
    providedIn: 'root',
})
export class GroupStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(MatDialog);
    private _changed = new BehaviorSubject<number>(0);
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly item: Observable<PlaceGroup> = this._state
        .item as unknown as Observable<PlaceGroup>;
    public readonly loading = this._loading.asObservable();

    public readonly users: Observable<PlaceGroupUser[]> = combineLatest([
        this._changed,
        this.item,
    ]).pipe(
        filter(([, item]) => item instanceof PlaceGroup),
        switchMap(([, item]) => {
            this._loading.next(true);
            return queryGroupUsers({ group_id: item.id, limit: 1000 }).pipe(
                catchError(() => of({ data: [] })),
            );
        }),
        map((response) => {
            this._loading.next(false);
            return response.data.sort((a, b) =>
                (a.user?.name || a.user_id).localeCompare(
                    b.user?.name || b.user_id,
                ),
            );
        }),
        shareReplay(1),
    );

    public readonly zones: Observable<PlaceGroupZone[]> = combineLatest([
        this._changed,
        this.item,
    ]).pipe(
        filter(([, item]) => item instanceof PlaceGroup),
        switchMap(([, item]) => {
            this._loading.next(true);
            return queryGroupZones({ group_id: item.id, limit: 1000 }).pipe(
                catchError(() => of({ data: [] })),
            );
        }),
        map((response) => {
            this._loading.next(false);
            return response.data.sort((a, b) =>
                (a.zone?.name || a.zone_id).localeCompare(
                    b.zone?.name || b.zone_id,
                ),
            );
        }),
        shareReplay(1),
    );

    public readonly counts = combineLatest([this._changed, this.item]).pipe(
        filter(([, item]) => item instanceof PlaceGroup),
        switchMap(async ([, item]) => {
            const [users, zones] = await Promise.all([
                lastValueFrom(
                    queryGroupUsers({ group_id: item.id, limit: 1 }).pipe(
                        map((response) => response.total),
                    ),
                ).catch(() => 0),
                lastValueFrom(
                    queryGroupZones({ group_id: item.id, limit: 1 }).pipe(
                        map((response) => response.total),
                    ),
                ).catch(() => 0),
            ]);
            return { users, zones };
        }),
        shareReplay(1),
    );

    public get active_item() {
        return this._state.active_item as unknown as PlaceGroup;
    }

    public async addUser(user: PlaceUser) {
        if (!user?.id) return;
        await lastValueFrom(
            addGroupUser({ group_id: this.active_item.id, user_id: user.id }),
        ).catch((error) => {
            notifyError(i18n('GROUPS.USER_ADD_ERROR', { error }));
            throw error;
        });
        notifySuccess(i18n('GROUPS.USER_ADD_SUCCESS'));
        this.changed();
    }

    public async bulkAddUsers(existing_users: PlaceGroupUser[] = []) {
        const users = await lastValueFrom(
            this._dialog
                .open(GroupBulkAddModalComponent<PlaceUser>, {
                    data: {
                        title: 'GROUPS.USERS_BULK',
                        placeholder: 'GROUPS.USER_SEARCH',
                        empty_message: 'GROUPS.USERS_BULK_EMPTY',
                        query_fn: (query: string) =>
                            queryUsers({
                                q: query,
                                limit: 20,
                                authority_id: this.active_item?.authority_id,
                            }).pipe(map((response) => response.data)),
                        exclude: (user: PlaceUser) => {
                            const authority_id = this.active_item?.authority_id;
                            return (
                                !!existing_users.find(
                                    (_) => _.user_id === user.id,
                                ) ||
                                (!!authority_id &&
                                    user.authority_id !== authority_id)
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
        if (!users?.length) return;
        this._loading.next(true);
        const results = await Promise.allSettled(
            users.map((user) =>
                lastValueFrom(
                    addGroupUser({
                        group_id: this.active_item.id,
                        user_id: user.id,
                    }),
                ),
            ),
        );
        this._loading.next(false);
        const failed = results.filter((_) => _.status === 'rejected').length;
        if (failed) {
            notifyError(i18n('GROUPS.USERS_BULK_ERROR', { count: failed }));
        }
        const added = results.length - failed;
        if (added) {
            notifySuccess(i18n('GROUPS.USERS_BULK_SUCCESS', { count: added }));
        }
        this.changed();
    }

    public async bulkAddZones(existing_zones: PlaceGroupZone[] = []) {
        const zones = await lastValueFrom(
            this._dialog
                .open(GroupBulkAddModalComponent<PlaceZone>, {
                    data: {
                        title: 'GROUPS.ZONES_BULK',
                        placeholder: 'GROUPS.ZONE_SEARCH',
                        empty_message: 'GROUPS.ZONES_BULK_EMPTY',
                        query_fn: (query: string) =>
                            queryZones({
                                q: query,
                                limit: 20,
                                authority_id: this.active_item?.authority_id,
                            } as Record<string, unknown>).pipe(
                                map((response) => response.data),
                            ),
                        exclude: (zone: PlaceZone) => {
                            const authority_id = this.active_item?.authority_id;
                            const zone_authority_id = (
                                zone as PlaceZone & { authority_id?: string }
                            ).authority_id;
                            return (
                                !!existing_zones.find(
                                    (_) => _.zone_id === zone.id,
                                ) ||
                                (!!authority_id &&
                                    !!zone_authority_id &&
                                    zone_authority_id !== authority_id)
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
        if (!zones?.length) return;
        this._loading.next(true);
        const results = await Promise.allSettled(
            zones.map((zone) =>
                lastValueFrom(
                    addGroupZone({
                        group_id: this.active_item.id,
                        zone_id: zone.id,
                    }),
                ),
            ),
        );
        this._loading.next(false);
        const failed = results.filter((_) => _.status === 'rejected').length;
        if (failed) {
            notifyError(i18n('GROUPS.ZONES_BULK_ERROR', { count: failed }));
        }
        const added = results.length - failed;
        if (added) {
            notifySuccess(i18n('GROUPS.ZONES_BULK_SUCCESS', { count: added }));
        }
        this.changed();
    }

    public async removeUser(item: PlaceGroupUser) {
        const details = await openConfirmModal(
            {
                title: i18n('GROUPS.USER_REMOVE'),
                content: i18n('GROUPS.USER_REMOVE_MSG', {
                    name: item.user?.name || item.user_id,
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('GROUPS.USER_REMOVE_LOADING'));
        await lastValueFrom(removeGroupUser(item.user_id, item.group_id)).catch(
            (error) => {
                details.close();
                notifyError(i18n('GROUPS.USER_REMOVE_ERROR', { error }));
                throw error;
            },
        );
        details.close();
        notifySuccess(i18n('GROUPS.USER_REMOVE_SUCCESS'));
        this.changed();
    }

    public async updateUser(item: PlaceGroupUser) {
        await lastValueFrom(
            updateGroupUser(item.user_id, item.group_id, {
                permissions: +item.permissions || 0,
            }),
        ).catch((error) => {
            notifyError(i18n('GROUPS.USER_SAVE_ERROR', { error }));
            throw error;
        });
        notifySuccess(i18n('GROUPS.USER_SAVE_SUCCESS'));
        this.changed();
    }

    public async editUserPermissions(item: PlaceGroupUser) {
        const result = await lastValueFrom(
            this._dialog
                .open(GroupPermissionsModalComponent, {
                    data: {
                        title: 'GROUPS.USER_PERMISSIONS',
                        permissions: item.permissions,
                    },
                })
                .afterClosed(),
        );
        if (!result) return;
        await this.updateUser({ ...item, permissions: result.permissions });
    }

    public async addZone(zone: PlaceZone) {
        if (!zone?.id) return;
        await lastValueFrom(
            addGroupZone({ group_id: this.active_item.id, zone_id: zone.id }),
        ).catch((error) => {
            notifyError(i18n('GROUPS.ZONE_ADD_ERROR', { error }));
            throw error;
        });
        notifySuccess(i18n('GROUPS.ZONE_ADD_SUCCESS'));
        this.changed();
    }

    public async removeZone(item: PlaceGroupZone) {
        const details = await openConfirmModal(
            {
                title: i18n('GROUPS.ZONE_REMOVE'),
                content: i18n('GROUPS.ZONE_REMOVE_MSG', {
                    name: item.zone?.name || item.zone_id,
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('GROUPS.ZONE_REMOVE_LOADING'));
        await lastValueFrom(removeGroupZone(item.group_id, item.zone_id)).catch(
            (error) => {
                details.close();
                notifyError(i18n('GROUPS.ZONE_REMOVE_ERROR', { error }));
                throw error;
            },
        );
        details.close();
        notifySuccess(i18n('GROUPS.ZONE_REMOVE_SUCCESS'));
        this.changed();
    }

    public async updateZone(item: PlaceGroupZone) {
        await lastValueFrom(
            updateGroupZone(item.group_id, item.zone_id, {
                permissions: +item.permissions || 0,
                deny: !!item.deny,
            }),
        ).catch((error) => {
            notifyError(i18n('GROUPS.ZONE_SAVE_ERROR', { error }));
            throw error;
        });
        notifySuccess(i18n('GROUPS.ZONE_SAVE_SUCCESS'));
        this.changed();
    }

    public async editZonePermissions(item: PlaceGroupZone) {
        const result = await lastValueFrom(
            this._dialog
                .open(GroupPermissionsModalComponent, {
                    data: {
                        title: 'GROUPS.ZONE_PERMISSIONS',
                        permissions: item.permissions,
                        deny: item.deny,
                        show_deny: true,
                    },
                })
                .afterClosed(),
        );
        if (!result) return;
        await this.updateZone({
            ...item,
            permissions: result.permissions,
            deny: result.deny,
        });
    }

    private changed() {
        this._changed.next(new Date().valueOf());
    }
}
