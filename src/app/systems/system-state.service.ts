import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    listSystemTriggers,
    PlaceSystem,
    showMetadata,
    startSystem,
    stopSystem,
    systemSettings,
} from '@placeos/ts-client';
import { filter, first, map, shareReplay, switchMap } from 'rxjs/operators';

import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from '../overlays/confirm-modal/confirm-modal.component';

@Injectable({
    providedIn: 'root',
})
export class SystemStateService {
    /** Observable of the counts of the active item */
    public counts = this._state.item.pipe(
        filter((item) => !!item && item instanceof PlaceSystem),
        switchMap(async (item: PlaceSystem) => {
            const details = await Promise.all([
                listSystemTriggers(item.id)
                    .pipe(map((d) => d.total))
                    .toPromise(),
                showMetadata(item.id).toPromise(),
            ]);
            const [triggers, metadata] = details;
            return {
                devices: item.modules.length,
                zones: item.zones.length,
                triggers,
                metadata: metadata.length,
            };
        }),
        shareReplay()
    );
    /** Observable for associated settings of the active item */
    public readonly associated_settings = this._state.item.pipe(
        filter((item) => !!item && item instanceof PlaceSystem),
        switchMap((item) => systemSettings(item.id)),
        shareReplay()
    );
    /** Observable of the active item */
    public readonly item = this._state.item;
    /** Observable of the active item */
    public get active_item() {
        return this._state.active_item;
    }

    constructor(private _state: ActiveItemService, private _dialog: MatDialog) {}

    /**
     * Open confirmation modal for stopping the active system
     */
    public async startSystem() {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Start system?',
                    content: `Are you sure you want to start this system?<br>All stopped modules within the system will boot up.`,
                    icon: { type: 'icon', class: 'backoffice-controller-play' },
                },
            }
        );
        const details = await Promise.race([
            ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details && details.reason) {
            ref.componentInstance.loading = 'Starting system...';
            const resp = await startSystem(this.active_item.id)
                .toPromise()
                .catch((err) => {
                    notifyError(
                        `Failed to start system: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    );
                    return err;
                });
            if (!resp) notifySuccess(`Successfully started system`);
            ref.close();
        }
    }

    /**
     * Open confirmation modal for stopping the active system
     */
    public async stopSystem() {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Stop system?',
                    content: `Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
                    icon: { type: 'icon', class: 'backoffice-controller-stop' },
                },
            }
        );
        const details = await Promise.race([
            ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details && details.reason) {
            ref.componentInstance.loading = 'Stopping system...';
            const resp = await stopSystem(this.active_item.id)
                .toPromise()
                .catch((err) => {
                    notifyError(
                        `Failed to stop system: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    );
                    return err;
                });
            if (!resp) notifySuccess(`Successfully stopped system`);
            ref.close();
        }
    }
}
