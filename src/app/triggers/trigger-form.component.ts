import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    EncryptionLevel,
    PlaceSettings,
    PlaceTrigger,
    addSettings,
    addTrigger,
    cleanObject,
    updateTrigger,
} from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { getInvalidFields } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { CounterComponent } from '../ui/counter.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateTriggerFormFields } from './triggers.utilities';

@Component({
    selector: 'trigger-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form
                    trigger
                    class="flex w-xl max-w-[calc(100vw-4rem)] flex-col"
                    [formGroup]="form"
                >
                    @if (form.controls.name) {
                        <div class="field">
                            <label
                                for="trigger-name"
                                [class.error]="
                                    form.controls.name.invalid &&
                                    form.controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="trigger-name"
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    formControlName="name"
                                    required
                                />
                                <mat-error>Trigger name is required</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.description) {
                        <div class="field">
                            <label for="description">{{
                                'COMMON.FIELD_DESCRIPTION' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    name="description"
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    formControlName="description"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.enable_webhook) {
                        <div class="field mb-4 w-[calc(50%-0.75rem)]">
                            <settings-toggle
                                [name]="'TRIGGERS.ENABLE_WEBHOOK' | translate"
                                formControlName="enable_webhook"
                            ></settings-toggle>
                        </div>
                    }
                    <div class="flex items-center space-x-4">
                        @if (
                            form.controls.enable_webhook.value &&
                            form.controls.debounce_period
                        ) {
                            <div class="field">
                                <label
                                    for="debounce-period"
                                    [class.error]="
                                        form.controls.name.invalid &&
                                        form.controls.name.touched
                                    "
                                >
                                    {{ 'TRIGGERS.DEBOUNCE_PERIOD' | translate }}
                                </label>
                                <a-counter
                                    formControlName="debounce_period"
                                    [min]="0"
                                    [step]="100"
                                    [max]="24 * 60 * 60"
                                    [render_fn]="render_debounce"
                                ></a-counter>
                            </div>
                        }
                        @if (
                            form.controls.enable_webhook.value &&
                            form.controls.supported_methods
                        ) {
                            <div class="field">
                                <label for="methods">
                                    {{
                                        'TRIGGERS.SUPPORTED_METHODS' | translate
                                    }}
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript"
                                >
                                    <mat-select
                                        name="methods"
                                        multiple
                                        formControlName="supported_methods"
                                    >
                                        <mat-option value="GET">GET</mat-option>
                                        <mat-option value="POST"
                                            >POST</mat-option
                                        >
                                        <mat-option value="PUT">PUT</mat-option>
                                        <mat-option value="PATCH"
                                            >PATCH</mat-option
                                        >
                                        <mat-option value="DELETE"
                                            >DELETE</mat-option
                                        >
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        CounterComponent,
        SettingsToggleComponent,
        MatInputModule,
        TranslatePipe,
        FullscreenModalShellComponent,
    ],
})
export class TriggerFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<TriggerFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceTrigger; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private _hotkey = inject(HotkeysService);
    private readonly _name = 'TRIGGERS';

    @Output() public event = new EventEmitter<DialogEvent>();

    public form: UntypedFormGroup;
    public loading: string;
    public heading: string;

    public readonly render_debounce = (v: number) => `${v} ms`;

    public ngOnInit(): void {
        const item = this._data.item;
        const edit = !!item.id;
        this.heading = i18n(`${this._name}.${edit ? 'EDIT' : 'NEW'}`);
        this.form = generateTriggerFormFields(item);
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
        const form_item: PlaceTrigger = item.id
            ? cleanObject({ ...item_json, ...this.form.value }, [undefined])
            : { ...item_json, ...this.form.value };
        (form_item.id
            ? updateTrigger(form_item.id, form_item)
            : addTrigger(form_item)
        ).subscribe(
            (_item) => {
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                if (!this.form.value.id && this.form.controls.settings) {
                    this.newSettings(
                        _item as any,
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
