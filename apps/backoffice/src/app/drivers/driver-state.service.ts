import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    isDriverCompiled,
    PlaceDriver,
    PlaceModule,
    queryDrivers,
    queryModules,
    recompileDriver,
    removeSystemModule,
    updateDriver,
} from '@placeos/ts-client';
import { BehaviorSubject, of, throwError } from 'rxjs';
import {
    catchError,
    delay,
    filter,
    map,
    retryWhen,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { openConfirmModal } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { HashMap } from '../common/types';
import { ViewResponseModalComponent } from '../overlays/view-response-modal/view-response-modal.component';
import { DriverUpdateListModalComponent } from './driver-update-list-modal.component';

@Injectable({
    providedIn: 'root',
})
export class DriverStateService {
    private _loading = new BehaviorSubject<boolean>(false);
    private _last_error = new BehaviorSubject<HashMap>(null);
    private _poll = new BehaviorSubject(0);

    public readonly item = this._state.item;

    public readonly loading = this._loading.asObservable();

    public readonly last_error = this._last_error.asObservable();

    public readonly updates_available = this._poll.pipe(
        switchMap(() =>
            queryDrivers({ update_available: true, limit: 1 }).pipe(
                catchError(() => of({ data: [], total: 0 }))
            )
        ),
        map((d) => d.total > 1),
        shareReplay(1)
    );

    public readonly is_compiled = this.item.pipe(
        filter((d) => !!d && d instanceof PlaceDriver),
        switchMap((driver) => isDriverCompiled(driver.id)),
        catchError(async (_: Response) => {
            const err = await _?.json();
            this._last_error.next(err?.compilation_output || _);
            if (!err?.compilation_output) throw _;
        }),
        retryWhen(delay(5000)),
        tap((_) => (_ ? this._last_error.next(null) : '')),
        shareReplay(1)
    );

    public readonly modules = this.item.pipe(
        switchMap(async (item) => {
            if (!item) return { data: [] };
            this._loading.next(true);
            const details = await queryModules({
                driver_id: item.id,
            }).toPromise();
            this._loading.next(false);
            return details;
        }),
        map((d) => d.data),
        shareReplay()
    );

    public get active_item() {
        return this._state.active_item;
    }

    constructor(private _state: ActiveItemService, private _dialog: MatDialog) {
        this.item.subscribe(() => this._last_error.next(null));
    }

    public showUpdateList() {
        this._dialog.open(DriverUpdateListModalComponent, {});
    }

    public viewError() {
        const error = this._last_error.getValue();
        if (!error) return;
        this._dialog.open<ViewResponseModalComponent>(
            ViewResponseModalComponent,
            {
                data: { title: 'Driver Compilation Error', content: error },
            }
        );
    }

    public async updateDriver() {
        const item = this._state.active_item as PlaceDriver;
        if (!item.update_available) return notifyError('No update available.');
        const details = await openConfirmModal(
            {
                title: `Update Driver`,
                content: `<p>Are you sure you want update this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>`,
                icon: { type: 'icon', content: 'update' },
            },
            this._dialog
        );
        if (!details || !details.reason) return details.close();
        details.loading('Updating driver...');
        let success = await updateDriver(item.id, {
            ...item,
            commit: item.update_info.commit,
        })
            .toPromise()
            .catch((_) => null);
        if (!success) {
            details.close();
            return notifyError('Failed to recompiled driver.');
        }
        details.loading('Recompiling driver...');
        success = await recompileDriver(item.id)
            .toPromise()
            .catch((_) => null);
        details.close();
        if (!success) return notifyError('Failed to recompiled driver.');
        notifySuccess('Successfully updated and recompiled driver.');
    }

    public async recompileDriver() {
        const details = await openConfirmModal(
            {
                title: `Recompile Driver`,
                content: `<p>Are you sure you want recompile this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>`,
                icon: { type: 'icon', class: 'backoffice-cycle' },
            },
            this._dialog
        );
        if (!details || !details.reason) return details.close();
        details.loading('Recompiling driver...');
        const success = await recompileDriver(this._state.active_item.id)
            .toPromise()
            .catch((_) => null);
        details.close();
        if (!success) return notifyError('Failed to recompiled driver.');
        notifySuccess('Successfully recompiled driver.');
    }

    public async removeModule(device: PlaceModule) {
        const details = await openConfirmModal(
            {
                title: 'Remove module?',
                content: `Remove ${device.driver_id}?<br>`,
                extra: [
                    'error',
                    'Note that all associated data be deleted immediatedly.',
                ],
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
            this._dialog
        );
        if (!details || !details.reason) return;
        const system = await removeSystemModule(this.active_item.id, device.id)
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error removing module ${device.id}. Error: ${
                        err.statusText || err.message || err
                    }`
                );
            });
        details.close();
        if (!system) return;
        this._state.replaceItem(system);
        notifySuccess(`Successfully removed module.`);
    }
}
