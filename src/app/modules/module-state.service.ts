import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    moduleSettings,
    PlaceModule,
    querySystems,
    showDriver,
    showSystem,
    startModule,
    stopModule,
} from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, map, shareReplay, switchMap } from 'rxjs/operators';
import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { ViewResponseModalComponent } from '../overlays/view-response-modal/view-response-modal.component';

@Injectable({
    providedIn: 'root',
})
export class ModuleStateService {
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();
    /** Active module */
    public readonly item = this._state.item;
    /** Observable for associated settings of the active item */
    public readonly associated_settings = this._state.all_item.pipe(
        debounceTime(300),
        switchMap((item: PlaceModule) => {
            if (!item || !(item instanceof PlaceModule)) return [];
            return moduleSettings(item.id);
        })
    );
    /** Driver associated with the active module */
    public readonly driver = this._state.item.pipe(
        switchMap((item: PlaceModule) => showDriver(item.driver_id)),
        shareReplay()
    );
    /** System assoicated with the active module */
    public readonly system = this._state.item.pipe(
        switchMap((item: PlaceModule) => (item.system_id ? showSystem(item.system_id) : of(null))),
        shareReplay()
    );
    /** System assoicated with the active module */
    public readonly system_list = this._state.item.pipe(
        switchMap((item: PlaceModule) => {
            this._loading.next(true);
            return querySystems({ module_id: item.id });
        }),
        map((details) => {
            this._loading.next(false);
            return details.data;
        }),
        catchError(() => {
            this._loading.next(false);
            return [];
        }),
        shareReplay()
    );

    public get active_item(): PlaceModule {
        return this._state.active_item as any;
    }

    constructor(private _state: ActiveItemService, private _dialog: MatDialog) {}

    public async toggleModuleState() {
        const method = this.active_item.running ? stopModule : startModule;
        const error = await method(this.active_item.id)
            .toPromise()
            .catch((err) => err);
        if (error) {
            if (typeof error === 'string' && error.length < 64) {
                notifyError(error);
            } else {
                notifyError(
                    `Failed to ${this.active_item.running ? 'stop' : 'start'} device '${
                        this.active_item.id
                    }'.\nView Error?`,
                    'View',
                    () => this.viewDetails(error)
                );
            }
            return;
        }
        notifySuccess(`Module successfully ${this.active_item.running ? 'stopped' : 'started'}`);
        (this.active_item as any).running = !this.active_item.running;
    }

    /** View Results of the execute */
    private viewDetails(content: any) {
        this._dialog.open<ViewResponseModalComponent>(ViewResponseModalComponent, {
            data: { content },
        });
    }
}
