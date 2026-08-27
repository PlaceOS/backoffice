import {
    Component,
    computed,
    effect,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { form, FormField, submit } from '@angular/forms/signals';
import {
    addModule,
    cleanObject,
    PlaceDriverRole,
    PlaceModule,
    queryDrivers,
    queryEdges,
    querySystems,
    showSystem,
    updateModule,
} from '@placeos/ts-client';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler } from '../common/async-handler.class';
import { getInvalidSignalFields } from '../common/forms';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import {
    applyModuleFormSchema,
    generateModuleFormModel,
} from './modules.utilities';

@Component({
    selector: 'module-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form module class="flex flex-col">
                    @if (form.driver && !formModel().id) {
                        <div class="field">
                            <label
                                for="driver"
                                [class.error]="
                                    form.driver().invalid() &&
                                    form.driver().touched()
                                "
                            >
                                {{ 'DRIVERS.SINGULAR' | translate
                                }}<span>*</span>
                            </label>
                            <item-search-field
                                [query_fn]="driver_query_fn"
                                [formField]="form.driver"
                            />
                            @if (
                                form.driver().invalid() &&
                                form.driver().touched()
                            ) {
                                <div class="error">
                                    {{ 'MODULES.DRIVER_REQUIRED' | translate }}
                                </div>
                            }
                        </div>
                    }
                    @if (formModel().id || formModel().driver) {
                        @if (form.system && role() === 'logic') {
                            <div class="field">
                                <label
                                    for="system"
                                    [class.error]="
                                        form.system().invalid() &&
                                        form.system().touched()
                                    "
                                >
                                    {{ 'MODULES.CONTROL_SYSTEM' | translate }}
                                    @if (role() === 'logic') {
                                        <span>*</span>
                                    }
                                </label>
                                @if (!is_readonly) {
                                    <item-search-field
                                        [query_fn]="system_query_fn"
                                        [formField]="form.system"
                                    />
                                    @if (
                                        form.system().invalid() &&
                                        form.system().touched()
                                    ) {
                                        <div class="error">
                                            {{
                                                'MODULES.SYSTEM_REQUIRED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                } @else {
                                    <div class="value">
                                        {{ formModel().system?.name }}
                                        <span>{{
                                            formModel().system?.id
                                        }}</span>
                                    </div>
                                }
                            </div>
                        }
                        @if (
                            form.uri &&
                            (role() === 'service' || role() === 'websocket')
                        ) {
                            <div class="field">
                                <label
                                    for="uri"
                                    [class.error]="
                                        form.uri().invalid() &&
                                        form.uri().touched()
                                    "
                                >
                                    {{ 'MODULES.URI' | translate
                                    }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'MODULES.URI' | translate
                                        "
                                        [formField]="form.uri"
                                    />
                                    <mat-error>{{
                                        'MODULES.URI_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        <div class="fieldset">
                            @if (
                                form.ip &&
                                (role() === 'ssh' || role() === 'device')
                            ) {
                                <div class="field">
                                    <label
                                        for="ip"
                                        [class.error]="
                                            form.ip().invalid() &&
                                            form.ip().touched()
                                        "
                                    >
                                        {{ 'MODULES.FIELD_IP' | translate }}
                                        <span> * </span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            placeholder="IP Address"
                                            [formField]="form.ip"
                                        />
                                        @if (form.ip().invalid()) {
                                            <mat-error>
                                                {{
                                                    'MODULES.IP_REQUIRED'
                                                        | translate
                                                }}
                                            </mat-error>
                                        }
                                    </mat-form-field>
                                </div>
                            }
                            @if (
                                form.port &&
                                (role() === 'ssh' || role() === 'device')
                            ) {
                                <div class="field">
                                    <label
                                        for="port-number"
                                        [class.error]="
                                            form.port().invalid() &&
                                            form.port().touched()
                                        "
                                    >
                                        {{ 'MODULES.PORT_NUMBER' | translate }}
                                        <span> * </span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            type="number"
                                            [placeholder]="
                                                'MODULES.PORT_NUMBER'
                                                    | translate
                                            "
                                            [formField]="form.port"
                                        />
                                        @if (form.port().invalid()) {
                                            <mat-error>
                                                {{
                                                    'MODULES.PORT_REQUIRED'
                                                        | translate
                                                }}
                                            </mat-error>
                                        }
                                    </mat-form-field>
                                </div>
                            }
                        </div>
                        <div class="-mx-2 mb-4 flex flex-wrap items-center">
                            @if (
                                form.tls &&
                                (role() === 'ssh' || role() === 'device')
                            ) {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [label]="'COMMON.TLS' | translate"
                                    [formField]="form.tls"
                                />
                            }
                            @if (
                                form.udp &&
                                (role() === 'ssh' || role() === 'device')
                            ) {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [label]="'COMMON.UDP' | translate"
                                    [formField]="form.udp"
                                />
                            }
                            @if (form.makebreak && role() !== 'logic') {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [label]="'MODULES.MAKEBREAK' | translate"
                                    [formField]="form.makebreak"
                                />
                            }
                            @if (form.ignore_connected && role() !== 'logic') {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [label]="
                                        'MODULES.IGNORE_CONNECTED' | translate
                                    "
                                    [formField]="form.ignore_connected"
                                />
                            }
                        </div>
                        @if (form.alert_level) {
                            <div class="field">
                                <label for="alert-level">
                                    {{ 'COMMON.ALERT_LEVEL' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select [formField]="form.alert_level">
                                        @for (
                                            level of alert_levels;
                                            track level.id
                                        ) {
                                            <mat-option [value]="level.id">
                                                {{ level.name | translate }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.notes) {
                            <div class="field">
                                <label for="notes">{{
                                    'COMMON.NOTES' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <textarea
                                        matInput
                                        [placeholder]="
                                            'COMMON.NOTES' | translate
                                        "
                                        [formField]="form.notes"
                                    ></textarea>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.custom_name) {
                            <div class="field">
                                <label for="custom-name">
                                    {{ 'MODULES.CUSTOM_NAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'MODULES.CUSTOM_NAME' | translate
                                        "
                                        [formField]="form.custom_name"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.edge && !formModel().id) {
                            <div class="field">
                                <label for="driver">
                                    {{ 'COMMON.EDGE' | translate }}
                                </label>
                                <item-search-field
                                    [placeholder]="
                                        'COMMON.EDGE_SEARCH' | translate
                                    "
                                    [query_fn]="edge_query_fn"
                                    [formField]="form.edge"
                                />
                            </div>
                        }
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        ItemSearchFieldComponent,
        TranslatePipe,
        FormField,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SettingsToggleComponent,
        FullscreenModalShellComponent,
    ],
})
export class ModuleFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<ModuleFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceModule; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private readonly _name = 'MODULES';
    private _hotkey = inject(HotkeysService);

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(
        generateModuleFormModel(this._data.item),
    );
    public readonly form = form(this.formModel, applyModuleFormSchema);
    public readonly loading = signal<string | null>(null);
    public heading = i18n(
        `${this._name}.${this._data.item.id ? 'EDIT' : 'NEW'}`,
    );
    public is_readonly = !!this._data.readonly;
    public readonly alert_levels = [
        { id: 'low', name: 'COMMON.ALERT_LOW' },
        { id: 'medium', name: 'COMMON.ALERT_MEDIUM' },
        { id: 'high', name: 'COMMON.ALERT_HIGH' },
        { id: 'critical', name: 'COMMON.ALERT_CRITICAL' },
    ];

    public readonly driver_query_fn = (_: string) =>
        queryDrivers({ q: _ } as Record<string, unknown>).then(
            (resp) => resp.data,
        );

    public readonly system_query_fn = (_: string) =>
        querySystems({ q: _ }).then((resp) => resp.data);

    public readonly edge_query_fn = (_: string) =>
        queryEdges({ q: _ }).then((resp) => resp.data);

    /** Role of the selected driver */
    public role = computed(() => {
        const role = this.formModel().driver?.role || this.formModel().role;
        switch (role) {
            case PlaceDriverRole.SSH:
                return 'ssh';
            case PlaceDriverRole.Device:
                return 'device';
            case PlaceDriverRole.Service:
                return 'service';
            case PlaceDriverRole.Websocket:
                return 'websocket';
        }
        return 'logic';
    });

    public ngOnInit(): void {
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
        const { system, control_system_id } = this.formModel();
        if (control_system_id && !system) {
            showSystem(control_system_id).then(
                (sys) => this.formModel.update((v) => ({ ...v, system: sys })),
                () => null,
            );
        }
    }

    constructor() {
        super();
        effect(() => {
            const custom_name = this.formModel().custom_name;
            const clean_name = custom_name?.replace(/ /g, '_') || '';
            if (custom_name !== clean_name) {
                this.formModel.update((value) => ({
                    ...value,
                    custom_name: clean_name,
                }));
            }
        });
        effect(() => {
            const model = this.formModel();
            // `system` is a UI-only object; `null` means "not loaded yet",
            // not "cleared" — so only sync the id from a real selection.
            if (model.system && model.system.id !== model.control_system_id) {
                this.formModel.update((value) => ({
                    ...value,
                    control_system_id: model.system.id,
                }));
            }
        });
        effect(() => {
            const edge = this.formModel().edge;
            if (edge && edge.id !== this.formModel().edge_id) {
                this.formModel.update((value) => ({
                    ...value,
                    edge_id: edge.id,
                }));
            }
        });
        effect(() => {
            const model = this.formModel();
            const driver = model.driver;
            if (!driver?.id) return;
            const role = driver.role || PlaceDriverRole.Logic;
            const udp =
                driver.role === PlaceDriverRole.Service ||
                driver.role === PlaceDriverRole.Websocket
                    ? false
                    : model.udp;
            const system =
                driver.role === PlaceDriverRole.Logic
                    ? model.system
                    : undefined;
            if (
                model.driver_id === driver.id &&
                model.name === (driver.name || driver.module_name) &&
                model.uri === (driver.default_uri || '') &&
                model.port === (driver.default_port || 1) &&
                model.alert_level === (driver.alert_level || 'medium') &&
                model.role === role &&
                model.udp === udp &&
                model.system === system
            ) {
                return;
            }
            this.formModel.update((value) => ({
                ...value,
                driver_id: driver.id,
                name: driver.name || driver.module_name,
                uri: driver.default_uri || '',
                port: driver.default_port || 1,
                alert_level: driver.alert_level || 'medium',
                role,
                udp,
                system,
            }));
        });
    }

    public async submit(): Promise<void> {
        await submit(this.form, async () => {
            const item = this._data.item;
            this.loading.set(i18n(`${this._name}.SAVING`));
            this._dialog_ref.disableClose = true;
            const item_json = item.toJSON ? item.toJSON() : item;
            const form_value = { ...this.formModel() };
            // UI-only fields; the backend uses the `*_id` values which are kept
            // in sync by effects. Strip them so we never POST `driver: null`.
            delete form_value.system;
            delete form_value.driver;
            delete form_value.edge;
            const form_item = (
                item.id
                    ? cleanObject({ ...item_json, ...form_value }, [undefined])
                    : { ...item_json, ...form_value }
            ) as Identity;
            try {
                const _item = await (form_item.id
                    ? updateModule(
                          form_item.id as string,
                          form_item as unknown as PlaceModule,
                      )
                    : addModule(form_item as unknown as PlaceModule));
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                this._dialog_ref.close();
            } catch (err) {
                this.loading.set(null);
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n(`${this._name}.SAVE_ERROR`, {
                        error: JSON.stringify(
                            (await (err as Response).text?.()) ||
                                (err as Error).message ||
                                err,
                        ),
                    }),
                );
            }
        });
        if (this.form().invalid()) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(this.form).join(', '),
                }),
            );
        }
    }
}
