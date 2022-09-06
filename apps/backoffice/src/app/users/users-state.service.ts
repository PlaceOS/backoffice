import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceMetadata, PlaceUser, PlaceZone, listMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, debounceTime, map, shareReplay, switchMap } from 'rxjs/operators';
import { ActiveItemService } from '../common/item.service';

@Injectable({
    providedIn: 'root',
})
export class UsersStateService {
    private _loading = new BehaviorSubject<boolean>(false);
    private _change = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();

    public readonly item = this._service.item;

    public readonly counts = combineLatest([this._service.active_item$, this._change]).pipe(
        debounceTime(300),
        switchMap(async (d) => {
            const [item] = d;
            if (!(item instanceof PlaceZone)) return {};
            this._loading.next(true);
            const details = await Promise.all([
                listMetadata(item.id)
                    .pipe(map((d) => d.length))
                    .toPromise()
                    .catch((_) => 0),
            ]);
            const [metadata] = details;
            this._loading.next(false);
            return {
                metadata,
            };
        })
    );

    public readonly metadata: Observable<PlaceMetadata[]> = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceUser)) return of([]);
            return listMetadata(item.id);
        }),
        catchError((_) => []),
        shareReplay(1)
    );

    public get active_item(): PlaceZone {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService, private _dialog: MatDialog) {
        setTimeout(() => this._change.next(!this._change.getValue()), 1000);
    }
}
