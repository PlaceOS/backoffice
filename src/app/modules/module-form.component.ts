import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    Signal,
    computed,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import {
    EncryptionLevel,
    PlaceDriverRole,
    PlaceModule,
    PlaceSettings,
    addModule,
    addSettings,
    cleanObject,
    queryDrivers,
    queryEdges,
    querySystems,
    updateModule,
} from '@placeos/ts-client';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { map } from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { getInvalidFields } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateModuleFormFields } from './modules.utilities';

@Component({
    selector: 'module-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form module class="flex flex-col" [formGroup]="form">
                    @if (form.controls.driver && !form.controls.id.value) {
                        <div class="field">
                            <label
                                for="driver"
                                [class.error]="
                                    form.controls.driver.invalid &&
                                    form.controls.driver.touched
                                "
                            >
                                {{ 'DRIVERS.SINGULAR' | translate
                                }}<span>*</span>
                            </label>
                            <item-search-field
                                name="driver"
                                [query_fn]="driver_query_fn"
                                formControlName="driver"
                            ></item-search-field>
                            @if (
                                form.controls.driver.invalid &&
                                form.controls.driver.touched
                            ) {
                                <div class="error">
                                    {{ 'MODULES.DRIVER_REQUIRED' | translate }}
                                </div>
                            }
                        </div>
                    }
                    @if (!form.controls.driver || form.controls.driver.value) {
                        @if (form.controls.system && role() === 'logic') {
                            <div class="field">
                                <label
                                    for="system"
                                    [class.error]="
                                        form.controls.system.invalid &&
                                        form.controls.system.touched
                                    "
                                >
                                    {{ 'MODULES.CONTROL_SYSTEM' | translate }}
                                    @if (role() === 'logic') {
                                        <span>*</span>
                                    }
                                </label>
                                @if (!is_readonly) {
                                    <item-search-field
                                        name="system"
                                        [query_fn]="system_query_fn"
                                        formControlName="system"
                                    ></item-search-field>
                                    @if (
                                        form.controls.system.invalid &&
                                        form.controls.system.touched
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
                                        {{ form.controls.system.value?.name }}
                                        <span>{{
                                            form.controls.system.value?.id
                                        }}</span>
                                    </div>
                                }
                            </div>
                        }
                        @if (
                            form.controls.uri &&
                            (role() === 'service' || role() === 'websocket')
                        ) {
                            <div class="field">
                                <label
                                    for="uri"
                                    [class.error]="
                                        form.controls.uri.invalid &&
                                        form.controls.uri.touched
                                    "
                                >
                                    {{ 'MODULES.URI' | translate
                                    }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="uri"
                                        [placeholder]="
                                            'MODULES.URI' | translate
                                        "
                                        formControlName="uri"
                                    />
                                    <mat-error>{{
                                        'MODULES.URI_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        <div class="fieldset">
                            @if (
                                form.controls.ip &&
                                !(
                                    role() === 'service' ||
                                    role() === 'websocket'
                                )
                            ) {
                                <div class="field">
                                    <label
                                        for="ip"
                                        [class.error]="
                                            form.controls.ip.invalid &&
                                            form.controls.ip.touched
                                        "
                                    >
                                        {{ 'MODULES.FIELD_IP' | translate }}
                                        @if (
                                            role() === 'ssh' ||
                                            role() === 'device'
                                        ) {
                                            <span> * </span>
                                        }
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            name="ip"
                                            placeholder="IP Address"
                                            formControlName="ip"
                                        />
                                        @if (form.controls.ip.invalid) {
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
                                form.controls.port &&
                                !(
                                    role() === 'service' ||
                                    role() === 'websocket'
                                )
                            ) {
                                <div class="field">
                                    <label
                                        for="port-number"
                                        [class.error]="
                                            form.controls.port.invalid &&
                                            form.controls.port.touched
                                        "
                                    >
                                        {{ 'MODULES.PORT_NUMBER' | translate }}
                                        @if (
                                            role() === 'ssh' ||
                                            role() === 'device'
                                        ) {
                                            <span> * </span>
                                        }
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            name="port-number"
                                            type="number"
                                            [placeholder]="
                                                'MODULES.PORT_NUMBER'
                                                    | translate
                                            "
                                            formControlName="port"
                                        />
                                        @if (form.controls.port.invalid) {
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
                                form.controls.tls &&
                                !(
                                    role() === 'service' ||
                                    role() === 'websocket'
                                )
                            ) {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [name]="'COMMON.TLS' | translate"
                                    formControlName="tls"
                                ></settings-toggle>
                            }
                            @if (
                                form.controls.udp &&
                                !(
                                    role() === 'service' ||
                                    role() === 'websocket'
                                )
                            ) {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [name]="'COMMON.UDP' | translate"
                                    formControlName="udp"
                                ></settings-toggle>
                            }
                            @if (
                                form.controls.makebreak && role() !== 'logic'
                            ) {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [name]="'MODULES.MAKEBREAK' | translate"
                                    formControlName="makebreak"
                                ></settings-toggle>
                            }
                            @if (
                                form.controls.ignore_connected &&
                                role() !== 'logic'
                            ) {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [name]="
                                        'MODULES.IGNORE_CONNECTED' | translate
                                    "
                                    formControlName="ignore_connected"
                                ></settings-toggle>
                            }
                        </div>
                        @if (form.controls.alert_level) {
                            <div class="field">
                                <label for="alert-level">
                                    {{ 'COMMON.ALERT_LEVEL' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select
                                        name="alert-level"
                                        formControlName="alert_level"
                                    >
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
                        @if (form.controls.notes) {
                            <div class="field">
                                <label for="notes">{{
                                    'COMMON.NOTES' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <textarea
                                        matInput
                                        name="notes"
                                        [placeholder]="
                                            'COMMON.NOTES' | translate
                                        "
                                        formControlName="notes"
                                    ></textarea>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.custom_name) {
                            <div class="field">
                                <label for="custom-name">
                                    {{ 'MODULES.CUSTOM_NAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="custom-name"
                                        [placeholder]="
                                            'MODULES.CUSTOM_NAME' | translate
                                        "
                                        formControlName="custom_name"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.edge && !form.controls.id.value) {
                            <div class="field">
                                <label for="driver">
                                    {{ 'COMMON.EDGE' | translate }}
                                </label>
                                <item-search-field
                                    [placeholder]="
                                        'COMMON.EDGE_SEARCH' | translate
                                    "
                                    [query_fn]="edge_query_fn"
                                    formControlName="edge"
                                ></item-search-field>
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
        ReactiveFormsModule,
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

    public form: UntypedFormGroup = generateModuleFormFields(this._data.item);
    public loading: string;
    public heading = i18n(
        `${this._name}.${this._data.item.id ? 'EDIT' : 'NEW'}`,
    );
    public is_readonly = !!this._data.readonly;
    private _driver: Signal<{ role?: PlaceDriverRole } | null> = this.form
        .controls.driver
        ? toSignal(this.form.controls.driver.valueChanges, {
              initialValue: this.form.controls.driver.value || null,
          })
        : signal(null);
    private _module_role: Signal<PlaceDriverRole | null> = toSignal(
        this.form.controls.role.valueChanges,
        {
            initialValue: this.form.controls.role.value || null,
        },
    );

    public readonly alert_levels = [
        { id: 'low', name: 'COMMON.ALERT_LOW' },
        { id: 'medium', name: 'COMMON.ALERT_MEDIUM' },
        { id: 'high', name: 'COMMON.ALERT_HIGH' },
        { id: 'critical', name: 'COMMON.ALERT_CRITICAL' },
    ];

    public readonly driver_query_fn = (_: string) =>
        queryDrivers({ q: _ } as Record<string, unknown>).pipe(
            map((resp) => resp.data),
        );

    public readonly system_query_fn = (_: string) =>
        querySystems({ q: _ }).pipe(map((resp) => resp.data));

    public readonly edge_query_fn = (_: string) =>
        queryEdges({ q: _ }).pipe(map((resp) => resp.data));

    /** Role of the selected driver */
    public role: Signal<string> = computed(() => {
        const role = this._driver()?.role || this._module_role();
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
    }

    public submit(): void {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        const item = this._data.item;
        this.loading = i18n(`${this._name}.SAVING`);
        this._dialog_ref.disableClose = true;
        const item_json = item.toJSON ? item.toJSON() : item;
        const form_item = (
            item.id
                ? cleanObject({ ...item_json, ...this.form.value }, [undefined])
                : { ...item_json, ...this.form.value }
        ) as Identity;
        (form_item.id
            ? updateModule(
                  form_item.id as string,
                  form_item as unknown as PlaceModule,
              )
            : addModule(form_item as unknown as PlaceModule)
        ).subscribe(
            (_item) => {
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                if (!this.form.value.id && this.form.controls.settings) {
                    this.newSettings(
                        _item as unknown as Identity,
                        this.form.controls.settings.value,
                    ).then(() => this._dialog_ref.close());
                } else {
                    this._dialog_ref.close();
                }
            },
            async (err) => {
                this.loading = null;
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n(`${this._name}.SAVE_ERROR`, {
                        error: JSON.stringify(
                            (await err.text?.()) || err.message || err,
                        ),
                    }),
                );
            },
        );
    }

    private async newSettings(item: Identity, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id as string,
            settings_string,
            encryption_level: EncryptionLevel.Support,
        });
        await addSettings(new_settings)
            .toPromise()
            .catch((err) => {
                this.loading = null;
                notifyError(
                    `Error saving settings for ${
                        item.name || item.id
                    }. Error: ${JSON.stringify(
                        err.response || err.message || err,
                    )}`,
                );
            });
    }
}
