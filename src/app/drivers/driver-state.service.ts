import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    driverReadme,
    PlaceDriver,
    PlaceModule,
    queryDrivers,
    queryModules,
    recompileDriver,
    reloadDriver,
    removeSystemModule,
    updateDriver,
} from '@placeos/ts-client';
import { BehaviorSubject, lastValueFrom, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { HashMap, Identity } from '../common/types';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { ViewResponseModalComponent } from '../overlays/view-response-modal.component';
import { DriverUpdateListModalComponent } from './driver-update-list-modal.component';

@Injectable({
    providedIn: 'root',
})
export class DriverStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(MatDialog);

    private _loading = new BehaviorSubject<boolean>(false);
    private _last_error = new BehaviorSubject<HashMap>(null);
    private _poll = new BehaviorSubject(0);

    public readonly item = this._state.active_item$;

    public readonly loading = this._loading.asObservable();

    public readonly updates_available = this._poll.pipe(
        switchMap(() =>
            queryDrivers({ update_available: true, limit: 1 }).pipe(
                catchError(() => of({ data: [], total: 0 })),
            ),
        ),
        map((d) => d.total > 1),
        shareReplay(1),
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
        shareReplay(1),
    );

    public readonly docs: Observable<string> = this.item.pipe(
        debounceTime(100),
        switchMap(async (item: PlaceDriver) => {
            if (!item) return '';
            this._loading.next(true);
            const docs = await lastValueFrom(driverReadme(item.id)).catch(
                () => '',
            );
            this._loading.next(false);
            return docs;
        }),
        map((d) => d || ''),
        shareReplay(1),
    );

    public get active_item() {
        return this._state.active_item;
    }

    constructor() {
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
            },
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
            this._dialog,
        );
        if (!details || !details.reason) return details.close();
        details.loading('Updating driver...');
        const success = await updateDriver(item.id, {
            ...item,
            commit: item.update_info.commit,
        })
            .toPromise()
            .catch(() => null);
        if (!success) {
            notifyError('Failed to update driver.');
        }
        details.close();
    }

    public async recompileDriver() {
        const item = this._state.active_item as PlaceDriver;
        const details = await openConfirmModal(
            {
                title: `Recompile Driver`,
                content: `<p>Are you sure you want recompile this driver?</p>`,
                icon: { type: 'icon', content: 'build' },
            },
            this._dialog,
        );
        if (!details || !details.reason) return details.close();
        details.loading('Recompiling driver... This may take a while.');
        await recompileDriver(item.id)
            .toPromise()
            .catch(async (e) => {
                console.log('Error:', e);
                const content = e instanceof Response ? await e.text() : e;
                notifyError('Failed to recompile driver.', 'View Error', () =>
                    this._dialog.open<ViewResponseModalComponent>(
                        ViewResponseModalComponent,
                        { data: { content } },
                    ),
                );
            });
        notifySuccess('Successfully recompiled the driver.');
        details.close();
    }

    public async reloadDriver() {
        const item = this._state.active_item as PlaceDriver;
        const details = await openConfirmModal(
            {
                title: `Reload Driver`,
                content: `<p>Are you sure you want reload this driver?</p>`,
                icon: { type: 'icon', content: 'refresh' },
            },
            this._dialog,
        );
        if (!details || !details.reason) return details.close();
        details.loading('Reload driver... This may take a while.');
        const success = await reloadDriver(item.id)
            .toPromise()
            .catch(() => false);
        if (success === false) {
            notifyError(
                'Failed to reload driver. Driver may not be compiled. Try recompiling first.',
            );
        } else {
            notifySuccess('Successfully reloaded driver.');
        }
        details.close();
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
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (!details || !details.reason) return;
        const system = await removeSystemModule(this.active_item.id, device.id)
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error removing module ${device.id}. Error: ${
                        err.statusText || err.message || err
                    }`,
                );
            });
        details.close();
        if (!system) return;
        this._state.replaceItem(system as unknown as Identity);
        notifySuccess(`Successfully removed module.`);
    }
}
