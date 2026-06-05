import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    moduleSettings,
    PlaceModule,
    querySystems,
    showDriver,
    showEdge,
    showSystem,
    startModule,
    stopModule,
} from '@placeos/ts-client';
import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { ViewResponseModalComponent } from '../overlays/view-response-modal.component';

@Injectable({
    providedIn: 'root',
})
export class ModuleStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(MatDialog);

    private _loading = signal(false);

    public readonly loading = this._loading.asReadonly();
    /** Active module */
    public readonly item = computed(
        () => this._state.item() as unknown as PlaceModule,
    );

    private readonly _associated_settings = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!(item instanceof PlaceModule)) return [];
            return moduleSettings(item.id).catch(() => []);
        },
    });
    /** Signal for associated settings of the active item */
    public readonly associated_settings = computed(
        () => this._associated_settings.value() || [],
    );

    private readonly _driver = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!(item instanceof PlaceModule)) return null;
            return showDriver(item.driver_id).catch(() => null);
        },
    });
    /** Driver associated with the active module */
    public readonly driver = computed(() => this._driver.value() || null);

    private readonly _system = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!(item instanceof PlaceModule) || !item.system_id) return null;
            return showSystem(item.system_id).catch(() => null);
        },
    });
    /** System associated with the active module */
    public readonly system = computed(() => this._system.value() || null);

    private readonly _edge = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!(item instanceof PlaceModule) || !item.edge_id) return null;
            return showEdge(item.edge_id).catch(() => null);
        },
    });

    public readonly edge = computed(() => this._edge.value() || null);

    private readonly _system_list = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!(item instanceof PlaceModule)) return [];
            this._loading.set(true);
            try {
                const response = await querySystems({
                    module_id: item.id,
                }).catch(() => ({ data: [] }));
                return response.data;
            } finally {
                this._loading.set(false);
            }
        },
    });
    /** Systems associated with the active module */
    public readonly system_list = computed(
        () => this._system_list.value() || [],
    );

    public get active_item(): PlaceModule {
        return this._state.active_item as PlaceModule;
    }

    public async toggleModuleState() {
        const method = this.active_item.running ? stopModule : startModule;
        const error = await method(this.active_item.id)
            .then(() => null)
            .catch((err) => err);
        if (error) {
            if (typeof error === 'string' && error.length < 64) {
                notifyError(error);
            } else {
                notifyError(
                    `Failed to ${
                        this.active_item.running ? 'stop' : 'start'
                    } device '${this.active_item.id}'.\nView Error?`,
                    'View',
                    () => this.viewDetails(error),
                );
            }
            return;
        }
        notifySuccess(
            `Module successfully ${
                this.active_item.running ? 'stopped' : 'started'
            }`,
        );
        (this.active_item as PlaceModule & { running: boolean }).running =
            !this.active_item.running;
    }

    /** View Results of the execute */
    private viewDetails(content: unknown) {
        this._dialog.open<ViewResponseModalComponent>(
            ViewResponseModalComponent,
            {
                data: { content },
            },
        );
    }
}
