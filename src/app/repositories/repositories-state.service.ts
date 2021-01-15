import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addDriver,
    listRepositoryCommits,
    listRepositoryDrivers,
    PlaceDriver,
    PlaceRepository,
    pullRepositoryChanges,
} from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { catchError, filter, map, share, shareReplay, switchMap } from 'rxjs/operators';

import { ActiveItemService } from '../common/item.service';
import { notifyError } from '../common/notifications';
import { CreateEditModalData, ItemCreateUpdateModalComponent } from '../overlays/item-modal/item-modal.component';

@Injectable({
    providedIn: 'root',
})
export class RepositoriesStateService {
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();
    /** Active module */
    public readonly item = this._state.item;

    public readonly commit = this._state.all_item.pipe(
        filter((i) => i instanceof PlaceRepository),
        switchMap((item) => listRepositoryCommits(item.id, { count: 1 } as any)),
        map((details) => details[0]?.commit || 'HEAD')
    );
    /** List of available drivers for repository */
    public readonly driver_list = this._state.item.pipe(
        switchMap((item: PlaceRepository) => {
            this._loading.next(true);
            return listRepositoryDrivers(item.id, { limit: 2000 });
        }),
        catchError((_) => []),
        map((_) => {
            this._loading.next(false);
            return _;
        })
    );

    public get active_item(): PlaceRepository {
        return this._state.active_item as any;
    }

    constructor(private _state: ActiveItemService, private _dialog: MatDialog) {}

    public async pullLatestCommit() {
        const commit: any = await pullRepositoryChanges(this.active_item.id)
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error pulling latest commit. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
            });
        if (!commit) return;
        this._state.replaceItem(
            new PlaceRepository({ ...this.active_item, commit_hash: commit.commit_hash })
        );
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
