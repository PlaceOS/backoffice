import { inject, Injectable } from '@angular/core';
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
    queryGroupZones,
    queryGroups,
    querySystems,
    queryTriggers,
    queryZones,
    removeGroupZone,
    updateGroupZone,
    updateZone,
} from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    lastValueFrom,
    Observable,
    of,
} from 'rxjs';
import {
    catchError,
    debounceTime,
    first,
    map,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs/operators';
import { unique } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { GroupBulkAddModalComponent } from '../groups/group-bulk-add-modal.component';
import { GroupPermissionsModalComponent } from '../groups/group-permissions-modal.component';
import { Identity } from '../common/types';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import {
    SelectItemModalComponent,
    SelectItemModalData,
} from '../overlays/select-item-modal.component';

@Injectable({
    providedIn: 'root',
})
export class ZonesStateService {
    private _service = inject(ActiveItemService);
    private _dialog = inject(MatDialog);

    private _loading = new BehaviorSubject<boolean>(false);
    private _change = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();

    public readonly item = this._service.active_item$;

    public readonly counts = combineLatest([
        this._service.active_item$,
        this._change,
    ]).pipe(
        debounceTime(300),
        switchMap(async (d) => {
            const [item] = d;
            if (!(item instanceof PlaceZone)) return {};
            this._loading.next(true);
            const details = await Promise.all([
                lastValueFrom(
                    querySystems({ zone_id: item.id, limit: 1 }).pipe(
                        map((d) => d.total),
                    ),
                ).catch(() => 0),
                lastValueFrom(
                    listZoneTriggers(item.id).pipe(map((d) => d.total)),
                ).catch(() => 0),
                lastValueFrom(
                    listMetadata(item.id).pipe(map((d) => d.length)),
                ).catch(() => 0),
                lastValueFrom(
                    queryZones({ parent_id: item.id, limit: 1 }).pipe(
                        map((d) => d.total),
                    ),
                ).catch(() => 0),
                lastValueFrom(
                    queryGroupZones({ zone_id: item.id, limit: 1 }).pipe(
                        map((d) => d.total),
                    ),
                ).catch(() => 0),
            ]);
            const [systems, triggers, metadata, children, groups] = details;
            this._loading.next(false);
            return {
                systems,
                triggers,
                metadata,
                children,
                groups,
            };
        }),
    );

    public readonly systems: Observable<PlaceSystem[]> = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceZone)) return of({ data: [] });
            return querySystems({ zone_id: item.id }).pipe(
                catchError(() => of({ data: [] })),
                startWith({ data: [] }),
            );
        }),
        map((list) => list.data),
        shareReplay(1),
    );

    public readonly triggers = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceZone)) return of({ data: [] });
            return listZoneTriggers(item.id).pipe(
                catchError(() => of({ data: [] })),
                startWith({ data: [] }),
            );
        }),
        map((list) => list.data),
        shareReplay(1),
    );

    public readonly metadata: Observable<PlaceMetadata[]> = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceZone)) return of([]);
            return listMetadata(item.id).pipe(
                catchError(() => of([])),
                startWith([]),
            );
        }),
        shareReplay(1),
    );

    public readonly children = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceZone)) return of({ data: [] });
            return queryZones({ parent_id: item.id }).pipe(
                catchError(() => of({ data: [] })),
                startWith({ data: [] }),
            );
        }),
        map((list) => list.data),
        shareReplay(1),
    );

    public readonly groups: Observable<PlaceGroupZone[]> = combineLatest([
        this._change,
        this.item,
    ]).pipe(
        switchMap(([, item]) => {
            if (!(item instanceof PlaceZone)) return of({ data: [] });
            this._loading.next(true);
            return queryGroupZones({ zone_id: item.id, limit: 1000 }).pipe(
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
        setTimeout(() => this._change.next(!this._change.getValue()), 1000);
    }

    public async selectTrigger() {
        const ref = this._dialog.open<
            SelectItemModalComponent,
            SelectItemModalData
        >(SelectItemModalComponent, {
            data: {
                service_name: 'Triggers',
                query_fn: (_) =>
                    queryTriggers({ q: _ }).pipe(map((resp) => resp.data)),
            },
        });
        const details = await Promise.race([
            lastValueFrom(
                ref.componentInstance.event.pipe(
                    first((_) => _.reason === 'action'),
                ),
            ),
            lastValueFrom(ref.afterClosed()),
        ]);
        if (!details || !details.reason) return ref.close();
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
        }).toPromise() as Promise<PlaceZone | undefined>;
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
        if (!details || !details.reason) return;
        const zone = await lastValueFrom(
            updateZone(this.active_item.id, {
                ...this.active_item,
                triggers: this.active_item.triggers.filter(
                    (t) => t !== trigger.id,
                ),
            }),
        ).catch((err) => {
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
        await lastValueFrom(
            addGroupZone({ group_id: group.id, zone_id: this.active_item.id }),
        ).catch((error) => {
            notifyError(i18n('ZONES.GROUP_ADD_ERROR', { error }));
            throw error;
        });
        notifySuccess(i18n('ZONES.GROUP_ADD_SUCCESS'));
        this.changed();
    }

    public async bulkAddGroups(existing_groups: PlaceGroupZone[] = []) {
        const groups = await lastValueFrom(
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
                            } as Record<string, unknown>).pipe(
                                map((response) => response.data),
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
        this._loading.next(true);
        const results = await Promise.allSettled(
            groups.map((group) =>
                lastValueFrom(
                    addGroupZone({
                        group_id: group.id,
                        zone_id: this.active_item.id,
                    }),
                ),
            ),
        );
        this._loading.next(false);
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
        await lastValueFrom(removeGroupZone(item.group_id, item.zone_id)).catch(
            (error) => {
                details.close();
                notifyError(i18n('ZONES.GROUP_REMOVE_ERROR', { error }));
                throw error;
            },
        );
        details.close();
        notifySuccess(i18n('ZONES.GROUP_REMOVE_SUCCESS'));
        this.changed();
    }

    public async updateGroup(item: PlaceGroupZone) {
        await lastValueFrom(
            updateGroupZone(item.group_id, item.zone_id, {
                permissions: +item.permissions || 0,
                deny: !!item.deny,
            }),
        ).catch((error) => {
            notifyError(i18n('ZONES.GROUP_SAVE_ERROR', { error }));
            throw error;
        });
        notifySuccess(i18n('ZONES.GROUP_SAVE_SUCCESS'));
        this.changed();
    }

    public async editGroupPermissions(item: PlaceGroupZone) {
        const result = await lastValueFrom(
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
        this._change.next(!this._change.getValue());
    }
}
