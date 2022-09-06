import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addDriver,
    listRepositoryCommits,
    listRepositoryDrivers,
    PlaceDriver,
    PlaceRepository,
    PlaceRepositoryType,
    pullRepositoryChanges,
    showRepository,
} from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    share,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

import { ActiveItemService } from '../common/item.service';
import { notifyError } from '../common/notifications';
import {
    CreateEditModalData,
    ItemCreateUpdateModalComponent,
} from '../overlays/item-modal/item-modal.component';

@Injectable({
    providedIn: 'root',
})
export class RepositoriesStateService {
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();
    /** Active module */
    public readonly item = this._state.item;
    /** List of available drivers for repository */
    public readonly driver_list = this._state.active_item$.pipe(
        switchMap((item: PlaceRepository) => {
            if (
                !(item instanceof PlaceRepository) ||
                item.repo_type === PlaceRepositoryType.Interface
            )
                return of(null);
            this._loading.next(true);
            return listRepositoryDrivers(item.id, { limit: 2000 });
        }),
        catchError((_) => []),
        map((_) => {
            this._loading.next(false);
            return _;
        })
    );
    /** Get latest commit for the active repository */
    public readonly commit = this._state.active_item$.pipe(
        filter((i) => i instanceof PlaceRepository),
        switchMap((item) =>
            listRepositoryCommits(item.id, { count: 1 } as any)
        ),
        catchError((_) => []),
        map((details) => details[0]?.commit || 'HEAD')
    );

    public get active_item(): PlaceRepository {
        return this._state.active_item as any;
    }

    constructor(
        private _state: ActiveItemService,
        private _dialog: MatDialog
    ) {}

    public async pullLatestCommit() {
        const commit: any = await pullRepositoryChanges(this.active_item.id)
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error pulling latest commit. Error: ${JSON.stringify(
                        err.response || err.message || 'Pull timed out'
                    )}`
                );
            });
        if (!commit) return;
        const repo = await showRepository(this.active_item.id).toPromise();
        this._state.replaceItem(repo);
    }

    public async newDriver(driver: string) {
        this._dialog.open<ItemCreateUpdateModalComponent, CreateEditModalData>(
            ItemCreateUpdateModalComponent,
            {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: new PlaceDriver({
                        name: '',
                        module_name: '',
                        repository_id: this.active_item.id,
                        file_name: driver,
                    }),
                    name: 'Driver',
                    save: (item) => addDriver(item),
                },
            }
        );
    }
}
