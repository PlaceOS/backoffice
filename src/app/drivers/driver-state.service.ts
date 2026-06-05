import { computed, inject, Injectable, resource, signal } from '@angular/core';
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

    private _loading = signal(false);
    private _last_error = signal<HashMap>(null);
    private _poll = signal(0);

    public readonly item = computed(
        () => this._state.item() as unknown as PlaceDriver,
    );

    public readonly loading = this._loading.asReadonly();

    private readonly _updates_available = resource({
        params: () => this._poll(),
        loader: async () => {
            const response = await queryDrivers({
                update_available: true,
                limit: 1,
            }).catch(() => ({ total: 0 }));
            return response.total > 1;
        },
    });

    public readonly updates_available = computed(
        () => this._updates_available.value() || false,
    );

    private readonly _modules = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!(item instanceof PlaceDriver)) return [] as PlaceModule[];
            this._loading.set(true);
            try {
                const response = await queryModules({
                    driver_id: item.id,
                }).catch(() => ({ data: [] }));
                return response.data;
            } finally {
                this._loading.set(false);
            }
        },
    });

    public readonly modules = computed(() => this._modules.value() || []);

    private readonly _docs = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!(item instanceof PlaceDriver)) return '';
            this._loading.set(true);
            try {
                return driverReadme(item.id).catch(() => '');
            } finally {
                this._loading.set(false);
            }
        },
    });

    public readonly docs = computed(() => this._docs.value() || '');

    public get active_item() {
        return this._state.active_item;
    }

    public showUpdateList() {
        this._dialog.open(DriverUpdateListModalComponent, {});
    }

    public viewError() {
        const error = this._last_error();
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
        if (!details?.reason) return details.close();
        details.loading('Updating driver...');
        const success = await updateDriver(item.id, {
            ...item,
            commit: item.update_info.commit,
        }).catch(() => null);
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
        if (!details?.reason) return details.close();
        details.loading('Recompiling driver... This may take a while.');
        await recompileDriver(item.id).catch(async (e) => {
            console.log('Error:', e);
            const content = e instanceof Response ? await e.text() : e;
            this._last_error.set(content);
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
        if (!details?.reason) return details.close();
        details.loading('Reload driver... This may take a while.');
        const success = await reloadDriver(item.id).catch(() => false);
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
        if (!details?.reason) return;
        const system = await removeSystemModule(
            this.active_item.id,
            device.id,
        ).catch((err) => {
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
