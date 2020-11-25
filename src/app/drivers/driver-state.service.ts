import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { isDriverCompiled, PlaceDriver, PlaceModule, queryModules, recompileDriver, removeSystemModule } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { delay, filter, map, retry, shareReplay, switchMap } from 'rxjs/operators';
import { openConfirmModal } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';

@Injectable({
    providedIn: 'root',
})
export class DriverStateService {
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly item = this._state.item;

    public readonly loading = this._loading.asObservable();

    public readonly is_compiled = this.item.pipe(
        filter((d) => !!d && d instanceof PlaceDriver),
        switchMap((driver) => isDriverCompiled(driver.id)),
        delay(1000),
        retry()
    );

    public readonly modules = this.item.pipe(
        switchMap(async (item) => {
            this._loading.next(true);
            const details = await queryModules({ driver_id: item.id }).toPromise();
            this._loading.next(false);
            return details;
        }),
        map((d) => d.data),
        shareReplay()
    );

    public get active_item() {
        return this._state.active_item;
    }

    constructor(private _state: ActiveItemService, private _dialog: MatDialog) {}

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
        const details = await openConfirmModal({
            title: 'Remove module?',
            content: `Remove ${device.driver_id}?<br>All associated data be deleted immediatedly.`,
            icon: { type: 'icon', class: 'backoffice-trash' },
        }, this._dialog);
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
