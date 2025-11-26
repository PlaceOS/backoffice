import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    listMetadata,
    listZoneTriggers,
    PlaceMetadata,
    PlaceSystem,
    PlaceTrigger,
    PlaceZone,
    querySystems,
    queryTriggers,
    queryZones,
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
import { notifyError, notifySuccess } from '../common/notifications';
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
                ).catch((_) => 0),
                lastValueFrom(
                    listZoneTriggers(item.id).pipe(map((d) => d.total)),
                ).catch((_) => 0),
                lastValueFrom(
                    listMetadata(item.id).pipe(map((d) => d.length)),
                ).catch((_) => 0),
                lastValueFrom(
                    queryZones({ parent_id: item.id, limit: 1 }).pipe(
                        map((d) => d.total),
                    ),
                ).catch((_) => 0),
            ]);
            const [systems, triggers, metadata, children] = details;
            this._loading.next(false);
            return {
                systems,
                triggers,
                metadata,
                children,
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
            if (!(item instanceof PlaceZone)) return [];
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
            if (!(item instanceof PlaceZone)) return [];
            return queryZones({ parent_id: item.id }).pipe(
                catchError(() => of({ data: [] })),
                startWith({ data: [] }),
            );
        }),
        map((list) => list.data),
        shareReplay(1),
    );

    public get active_item(): PlaceZone {
        return this._service.active_item as any;
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
        const zone = await this.addTrigger(ref.componentInstance.item);
        ref.close();
        if (zone) this._service.replaceItem(zone);
    }

    public async addTrigger(trigger: PlaceTrigger) {
        return updateZone(this.active_item.id, {
            ...this.active_item,
            triggers: unique([...this.active_item.triggers, trigger.id]),
        }).toPromise();
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
        if (zone) this._service.replaceItem(zone);
    }
}
