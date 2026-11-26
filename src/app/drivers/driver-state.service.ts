import { Dialog } from '@angular/cdk/dialog';
import { computed, inject, resource, Service, signal } from '@angular/core';
import { drivers, type Module, modules } from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { describeError, httpError } from '../common/errors';
import { ActiveItemService } from '../common/item.service';
import { reportLoadError } from '../common/load-error';
import {
    notifyError,
    notifyInfo,
    notifySuccess,
} from '../common/notifications';
import { openedTabs } from '../common/opened-tabs';
import { clearSupportModuleCache } from '../common/support-access';
import { collectPages, Identity } from '../common/types';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { ViewResponseModalComponent } from '../overlays/view-response-modal.component';
import { DriverUpdateListModalComponent } from './driver-update-list-modal.component';

@Service()
export class DriverStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(Dialog);

    private _poll = signal(0);
    private _modules_change = signal(0);

    /** Active driver. `ActiveItemService` adds its settings of each encryption level */
    public readonly item = computed(() => this._state.activeOf('drivers'));

    public readonly loading = computed(
        () => this._modules.isLoading() || this._docs.isLoading(),
    );

    private readonly _updates_available = resource({
        params: () => this._poll(),
        loader: async ({ abortSignal }) => {
            const response = await drivers
                .query(
                    { update_available: true, limit: 1 },
                    { signal: abortSignal },
                )
                .then(orThrowPage)
                .catch(() => ({ total: 0 }));
            return response.total > 0;
        },
    });

    public readonly updates_available = computed(
        () => this._updates_available.value() || false,
    );

    private readonly _driver_id = computed(() => this.item()?.id || undefined);
    // The module list can be long. It only loads once the Modules tab is
    // opened. Until then a single row query gives the tab count.
    private readonly _opened_tabs = openedTabs(this._driver_id);
    private readonly _load_modules = computed(() =>
        this._opened_tabs().has('modules'),
    );

    private readonly _modules = resource({
        // The id, not the item: a save gives a new item object, which must
        // not load every module page again
        params: () => ({
            driver_id: this._driver_id(),
            changed: this._modules_change(),
            full: this._load_modules(),
        }),
        loader: async ({ params: { driver_id, full }, abortSignal }) => {
            const empty = { data: [] as Module[], total: 0 };
            if (!driver_id) return empty;
            // The signal goes to each next page, so a newer load stops this one
            const query = modules
                .query(
                    { driver_id, limit: full ? 500 : 1 },
                    { signal: abortSignal },
                )
                .then(orThrowPage);
            if (!full) {
                // No count on a failure, so the tab shows "?" and not 0
                return query
                    .then(({ total }) => ({ ...empty, total }))
                    .catch(() => ({ data: [] as Module[], total: undefined }));
            }
            // Load every page so the list matches the tab count
            const data = await collectPages(query).catch((e: unknown) =>
                abortSignal.aborted
                    ? ([] as Module[])
                    : reportLoadError([] as Module[])(e),
            );
            return { data, total: data.length };
        },
    });

    public readonly modules = computed(() => this._modules.value()?.data || []);
    /** Total modules of the driver, or `undefined` while loading */
    public readonly modules_total = computed(() =>
        this._modules.isLoading() ? undefined : this._modules.value()?.total,
    );

    private readonly _docs = resource({
        params: () => this.item(),
        loader: async ({ params: item, abortSignal }) => {
            if (!item) return '';
            return drivers
                .readme({ id: item.id }, { signal: abortSignal })
                .then(orThrow)
                .catch(() => '');
        },
    });

    public readonly docs = computed(() => this._docs.value() || '');
    public readonly docs_loading = computed(() => this._docs.isLoading());

    public get active_item() {
        return this._state.activeOf('drivers');
    }

    public showUpdateList() {
        this._dialog.open(DriverUpdateListModalComponent, {});
    }

    public async updateDriver() {
        const item = this.active_item;
        if (!item.update_available) return notifyInfo('No update available.');
        const details = await openConfirmModal(
            {
                title: `Update Driver`,
                content: `<p>Are you sure you want update this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>`,
                icon: { type: 'icon', content: 'update' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return details.close();
        details.loading('Updating driver...');
        const updated = await drivers
            .update({
                id: item.id,
                // Only the commit: other fields of this copy can be older than the server
                body: { commit: item.update_info.commit },
            })
            .then(orThrow)
            .catch(() => null);
        if (!updated) {
            notifyError('Failed to update driver.');
        } else {
            this._state.replaceItem(updated as unknown as Identity);
            this._poll.update((poll) => poll + 1);
        }
        details.close();
    }

    public async recompileDriver() {
        const item = this.active_item;
        const details = await openConfirmModal(
            {
                title: `Recompile Driver`,
                content: `<p>Are you sure you want recompile this driver?</p>`,
                icon: { type: 'icon', content: 'build' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return details.close();
        details.loading('Recompiling driver... This may take a while.');
        const success = await drivers
            .recompile({ id: item.id })
            .then(orThrow)
            .then(() => true)
            .catch((e: unknown) => {
                // The API sends the compiler output as plain text
                const content = httpError(e)?.text || describeError(e);
                notifyError('Failed to recompile driver.', 'View Error', () =>
                    this._dialog.open<
                        unknown,
                        unknown,
                        ViewResponseModalComponent
                    >(ViewResponseModalComponent, { data: { content } }),
                );
                return false;
            });
        details.close();
        if (!success) return;
        notifySuccess('Successfully recompiled the driver.');
    }

    public async reloadDriver() {
        const item = this.active_item;
        const details = await openConfirmModal(
            {
                title: `Reload Driver`,
                content: `<p>Are you sure you want reload this driver?</p>`,
                icon: { type: 'icon', content: 'refresh' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return details.close();
        details.loading('Reload driver... This may take a while.');
        const success = await drivers
            .reload({ id: item.id })
            .then(orThrow)
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

    public async removeModule(device: Module) {
        const details = await openConfirmModal(
            {
                title: 'Remove module?',
                content: `Remove ${device.custom_name || device.name || device.id}?<br>`,
                extra: [
                    'error',
                    'Note that all associated data be deleted immediately.',
                ],
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        const removed = await modules
            .destroy({ id: device.id })
            .then(orThrow)
            .then(() => true)
            .catch((err) => {
                notifyError(
                    `Error removing module ${device.id}. Error: ${describeError(err)}`,
                );
                return false;
            });
        details.close();
        if (!removed) return;
        // The support group module list keeps modules for a while. Drop it.
        clearSupportModuleCache();
        this._modules_change.update((change) => change + 1);
        notifySuccess(`Successfully removed module.`);
    }
}
