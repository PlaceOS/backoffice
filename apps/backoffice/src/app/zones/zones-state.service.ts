import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    listZoneTriggers,
    PlaceMetadata,
    PlaceTrigger,
    PlaceZone,
    querySystems,
    queryTriggers,
    queryZones,
    listMetadata,
    updateZone,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, debounceTime, first, map, shareReplay, switchMap } from 'rxjs/operators';
import { openConfirmModal, unique } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import {
    SelectItemModalComponent,
    SelectItemModalData,
} from '../overlays/select-item-modal/select-item-modal.component';

@Injectable({
    providedIn: 'root',
})
export class ZonesStateService {
    private _loading = new BehaviorSubject<boolean>(false);
    private _change = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();

    public readonly item = this._service.item;

    public readonly counts = combineLatest([this._service.all_item, this._change]).pipe(
        debounceTime(300),
        switchMap(async (d) => {
            const [item] = d;
            if (!(item instanceof PlaceZone)) return {};
            this._loading.next(true);
            const details = await Promise.all([
                querySystems({ zone_id: item.id, limit: 1 })
                    .pipe(map((d) => d.total))
                    .toPromise()
                    .catch((_) => 0),
                listZoneTriggers(item.id)
                    .pipe(map((d) => d.total))
                    .toPromise()
                    .catch((_) => 0),
                listMetadata(item.id)
                    .pipe(map((d) => d.length))
                    .toPromise()
                    .catch((_) => 0),
                queryZones({ parent: item.id, limit: 1 })
                    .pipe(map((d) => d.total))
                    .toPromise()
                    .catch((_) => 0),
            ]);
            const [systems, triggers, metadata, children] = details;
            this._loading.next(false);
            return {
                systems,
                triggers,
                metadata,
                children,
            };
        })
    );

    public readonly systems = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceZone)) return [];
            return querySystems({ zone_id: item.id });
        }),
        map((list) => list.data),
        catchError((_) => []),
        shareReplay()
    );

    public readonly triggers = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceZone)) return [];
            return listZoneTriggers(item.id);
        }),
        map((list) => list.data),
        catchError((_) => []),
        shareReplay()
    );

    public readonly metadata: Observable<PlaceMetadata[]> = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceZone)) return of([]);
            return listMetadata(item.id);
        }),
        catchError((_) => []),
        shareReplay(1)
    );

    public readonly children = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceZone)) return [];
            return queryZones({ parent: item.id });
        }),
        map((list) => list.data),
        catchError((_) => []),
        shareReplay()
    );

    public get active_item(): PlaceZone {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService, private _dialog: MatDialog) {
        setTimeout(() => this._change.next(!this._change.getValue()), 1000);
    }

    public async selectTrigger() {
        const ref = this._dialog.open<SelectItemModalComponent, SelectItemModalData>(
            SelectItemModalComponent,
            {
                data: {
                    service_name: 'Triggers',
                    query_fn: (_) => queryTriggers({ q: _ }).pipe(map((resp) => resp.data)),
                },
            }
        );
        const details = await Promise.race([
            ref.componentInstance.event.pipe(first((_) => _.reason === 'action')).toPromise(),
            ref.afterClosed().toPromise(),
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
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
            this._dialog
        );
        if (!details || !details.reason) return;
        const zone = await updateZone(this.active_item.id, {
            ...this.active_item,
            triggers: this.active_item.triggers.filter((t) => t !== trigger.id),
        })
            .toPromise()
            .catch((err) => {
                details.close();
                notifyError(
                    `Error removing trigger ${trigger.id} from zone. Error: ${
                        err.statusText || err.message || err
                    }`
                );
                throw err;
            });
        details.close();
        notifySuccess(`Successfully removed trigger from zone.`);
        if (zone) this._service.replaceItem(zone);
    }
}
