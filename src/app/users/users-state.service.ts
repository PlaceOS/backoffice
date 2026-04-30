import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addGroupUser,
    listMetadata,
    PlaceGroup,
    PlaceGroupUser,
    PlaceMetadata,
    PlaceUser,
    queryGroupUsers,
    queryGroups,
    removeGroupUser,
    updateGroupUser,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, lastValueFrom, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { GroupBulkAddModalComponent } from '../groups/group-bulk-add-modal.component';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { GroupPermissionsModalComponent } from '../groups/group-permissions-modal.component';

@Injectable({
    providedIn: 'root',
})
export class UsersStateService {
    private _service = inject(ActiveItemService);
    private _dialog = inject(MatDialog);

    private _loading = new BehaviorSubject<boolean>(false);
    private _change = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();

    public readonly item = this._service.item;

    public readonly counts: Observable<{ metadata?: number; groups?: number }> = combineLatest([
        this._service.active_item$,
        this._change,
    ]).pipe(
        debounceTime(300),
        switchMap(async (d) => {
            const [item] = d;
            if (!(item instanceof PlaceUser)) return {};
            this._loading.next(true);
            const details = await Promise.all([
                listMetadata(item.id)
                    .pipe(map((d) => d.length))
                    .toPromise()
                    .catch((_err) => 0),
                lastValueFrom(
                    queryGroupUsers({ user_id: item.id, limit: 1 }).pipe(
                        map((response) => response.total),
                    ),
                ).catch(() => 0),
            ]);
            const [metadata, groups] = details;
            this._loading.next(false);
            return {
                metadata,
                groups,
            };
        }),
    );

    public readonly metadata: Observable<PlaceMetadata[]> = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceUser)) return of([]);
            return listMetadata(item.id);
        }),
        catchError((_err) => []),
        shareReplay(1),
    );

    public readonly groups: Observable<PlaceGroupUser[]> = combineLatest([
        this._change,
        this.item,
    ]).pipe(
        filter(([, item]) => item instanceof PlaceUser),
        switchMap(([, item]) => {
            this._loading.next(true);
            return queryGroupUsers({ user_id: item.id, limit: 1000 }).pipe(
                catchError(() => of({ data: [] })),
            );
        }),
        map((response) => {
            this._loading.next(false);
            return response.data.sort((a, b) =>
                (a.group?.name || a.group_id).localeCompare(
                    b.group?.name || b.group_id,
                ),
            );
        }),
        shareReplay(1),
    );

    public get active_item(): PlaceUser {
        return this._service.active_item as unknown as PlaceUser;
    }

    public async addGroup(group: PlaceGroup) {
        if (!group?.id) return;
        await lastValueFrom(
            addGroupUser({ user_id: this.active_item.id, group_id: group.id }),
        ).catch((error) => {
            notifyError(i18n('USERS.GROUP_ADD_ERROR', { error }));
            throw error;
        });
        notifySuccess(i18n('USERS.GROUP_ADD_SUCCESS'));
        this.changed();
    }

    public async bulkAddGroups(existing_groups: PlaceGroupUser[] = []) {
        const groups = await lastValueFrom(
            this._dialog
                .open(GroupBulkAddModalComponent<PlaceGroup>, {
                    data: {
                        title: 'USERS.GROUPS_BULK',
                        placeholder: 'GROUPS.SEARCH',
                        empty_message: 'USERS.GROUPS_BULK_EMPTY',
                        query_fn: (query: string) =>
                            queryGroups({ q: query, limit: 20 }).pipe(
                                map((response) => response.data),
                            ),
                        exclude: (group: PlaceGroup) =>
                            !!existing_groups.find(
                                (_) => _.group_id === group.id,
                            ),
                    },
                    height: 'auto',
                    width: 'auto',
                    maxHeight: 'calc(100vh - 2em)',
                    maxWidth: 'calc(100vw - 2em)',
                })
                .afterClosed(),
        );
        if (!groups?.length) return;
        this._loading.next(true);
        const results = await Promise.allSettled(
            groups.map((group) =>
                lastValueFrom(
                    addGroupUser({
                        user_id: this.active_item.id,
                        group_id: group.id,
                    }),
                ),
            ),
        );
        this._loading.next(false);
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
        await lastValueFrom(removeGroupUser(item.user_id, item.group_id)).catch(
            (error) => {
                details.close();
                notifyError(i18n('USERS.GROUP_REMOVE_ERROR', { error }));
                throw error;
            },
        );
        details.close();
        notifySuccess(i18n('USERS.GROUP_REMOVE_SUCCESS'));
        this.changed();
    }

    public async updateGroup(item: PlaceGroupUser) {
        await lastValueFrom(
            updateGroupUser(item.user_id, item.group_id, {
                permissions: +item.permissions || 0,
            }),
        ).catch((error) => {
            notifyError(i18n('USERS.GROUP_SAVE_ERROR', { error }));
            throw error;
        });
        notifySuccess(i18n('USERS.GROUP_SAVE_SUCCESS'));
        this.changed();
    }

    public async editGroupPermissions(item: PlaceGroupUser) {
        const result = await lastValueFrom(
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
        this._change.next(!this._change.getValue());
    }

    constructor() {
        setTimeout(() => this._change.next(!this._change.getValue()), 1000);
    }
}
