import { Dialog } from '@angular/cdk/dialog';
import { computed, inject, resource, Service, signal } from '@angular/core';
import {
    drivers,
    edges,
    type Module,
    modules,
    type Settings,
    type System,
    systems,
} from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';
import { ActiveItemService } from '../common/item.service';
import { reportLoadError } from '../common/load-error';
import { notifyError, notifySuccess } from '../common/notifications';
import { querySupportSystems as querySystems } from '../common/support-access';
import { ViewResponseModalComponent } from '../overlays/view-response-modal.component';
import { shortModuleError } from './modules.utilities';

@Service()
export class ModuleStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(Dialog);

    private _loading = signal(false);

    public readonly loading = this._loading.asReadonly();
    /** Active module */
    public readonly item = computed(() => this._state.activeOf('modules'));
    /** Settings of each encryption level of the active module */
    public readonly settings = computed(
        // `ActiveItemService` adds the settings to the item
        () => (this.item() as Module & { settings?: Settings[] })?.settings,
    );

    private readonly _associated_settings = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!item) return [];
            return modules
                .settings({ id: item.id })
                .then(orThrow)
                .catch(() => []);
        },
    });
    /** Signal for associated settings of the active item */
    public readonly associated_settings = computed(
        () => this._associated_settings.value() || [],
    );

    private readonly _driver = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!item) return null;
            return drivers
                .show({ id: item.driver_id })
                .then(orThrow)
                .catch(() => null);
        },
    });
    /** Driver associated with the active module */
    public readonly driver = computed(() => this._driver.value() || null);

    private readonly _system = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!item?.control_system_id) return null;
            return systems
                .show({ sys_id: item.control_system_id })
                .then(orThrow)
                .catch(() => null);
        },
    });
    /** System associated with the active module */
    public readonly system = computed(() => this._system.value() || null);

    private readonly _edge = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!item?.edge_id) return null;
            return edges
                .show({ id: item.edge_id })
                .then(orThrow)
                .catch(() => null);
        },
    });

    public readonly edge = computed(() => this._edge.value() || null);

    private readonly _system_list = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!item) return { data: [] as readonly System[], total: 0 };
            this._loading.set(true);
            try {
                const response = await querySystems({
                    module_id: item.id,
                }).catch(
                    reportLoadError({
                        data: [] as readonly System[],
                        total: 0,
                    }),
                );
                return { data: response.data, total: response.total };
            } finally {
                this._loading.set(false);
            }
        },
    });
    /** Systems associated with the active module */
    public readonly system_list = computed(
        () => this._system_list.value()?.data || [],
    );
    /** Total systems of the active module, or `undefined` while loading */
    public readonly system_total = computed(() =>
        this._system_list.isLoading()
            ? undefined
            : this._system_list.value()?.total,
    );

    public get active_item(): Module {
        return this._state.active_item as Module;
    }

    public async toggleModuleState() {
        // Capture before the await as the active module may change
        const item = this.active_item as Module & { running: boolean };
        const running = item.running;
        const method = running ? modules.stop : modules.start;
        const error = await method({ id: item.id })
            .then(orThrow)
            .then(() => null)
            .catch((err) => err);
        if (error) {
            const message = shortModuleError(error);
            if (message) {
                notifyError(message);
            } else {
                notifyError(
                    `Failed to ${running ? 'stop' : 'start'} device '${
                        item.id
                    }'.\nView Error?`,
                    'View',
                    () => this.viewDetails(error),
                );
            }
            return;
        }
        notifySuccess(`Module successfully ${running ? 'stopped' : 'started'}`);
        item.running = !running;
    }

    /** View Results of the execute */
    private viewDetails(content: unknown) {
        this._dialog.open<unknown, unknown, ViewResponseModalComponent>(
            ViewResponseModalComponent,
            {
                data: { content },
            },
        );
    }
}
