import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    Component,
    EventEmitter,
    Injector,
    OnInit,
    Output,
    Signal,
    effect,
    inject,
    signal,
} from '@angular/core';
import {
    FormControl,
    FormsModule,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {
    PlaceApplication,
    PlaceResource,
    addApplication,
    cleanObject,
    updateApplication,
} from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { toSignal } from '../common/signals';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Md5 } from 'ts-md5';
import { addChipItem, removeChipItem } from '../common/forms';
import { getInvalidFields } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateApplicationFormFields } from './applications.utilities';

@Component({
    selector: 'application-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form application class="flex flex-col" [formGroup]="form">
                    <div class="fieldset">
                        @if (form.controls.name) {
                            <div class="field">
                                <label
                                    for="application-name"
                                    [class.error]="
                                        form.controls.name.invalid &&
                                        form.controls.name.touched
                                    "
                                >
                                    {{ 'COMMON.FIELD_NAME' | translate
                                    }}<span>*</span>:
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="application-name"
                                        placeholder="Application Name"
                                        formControlName="name"
                                        required
                                    />
                                    <mat-error>{{
                                        'DOMAINS.APP_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.scopes) {
                            <div class="field">
                                <label for="scopes"
                                    >{{
                                        'DOMAINS.APP_SCOPES' | translate
                                    }}:</label
                                >
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="scopes"
                                        [placeholder]="
                                            'DOMAINS.APP_SCOPES' | translate
                                        "
                                        formControlName="scopes"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.controls.subsystems) {
                        <div class="field">
                            <label for="subsystems-input"
                                >{{
                                    'DOMAINS.APP_SUBSYSTEMS' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipList
                                    aria-label="Subsystem List"
                                >
                                    @for (
                                        item of subsystem_list();
                                        track item
                                    ) {
                                        <mat-chip-row
                                            (removed)="removeSubsystem(item)"
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'COMMON.ITEM_REMOVE'
                                                        | translate
                                                            : { item: item }
                                                "
                                            >
                                                <icon>cancel</icon>
                                            </button>
                                        </mat-chip-row>
                                    }
                                </mat-chip-grid>
                                <input
                                    id="subsystems-input"
                                    [placeholder]="
                                        'DOMAINS.APP_SUBSYSTEMS' | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="
                                        addSubsystem($event)
                                    "
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.redirect_uri) {
                        <div class="field">
                            <label for="redirect-uri"
                                >{{ 'DOMAINS.APP_REDIRECT_URL' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="redirect-uri"
                                    placeholder="Redirect URI e.g. http://localhost:4200/oauth-resp.html"
                                    formControlName="redirect_uri"
                                />
                                <mat-error>{{
                                    'DOMAINS.APP_REDIRECT_URL_REQUIRED'
                                        | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset mb-4">
                        <settings-toggle
                            class="flex-1"
                            [name]="'DOMAINS.APP_SKIP' | translate"
                            formControlName="skip_authorization"
                        ></settings-toggle>
                        <settings-toggle
                            class="flex-1"
                            [name]="'DOMAINS.APP_PRESERVE_ID' | translate"
                            formControlName="preserve_client_id"
                        ></settings-toggle>
                    </div>
                    @if (form.controls.redirect_uri) {
                        <div class="field">
                            <label for="client-id"
                                >{{ 'DOMAINS.APP_CLIENT_ID' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="client-id"
                                    [placeholder]="
                                        'DOMAINS.APP_CLIENT_PLACEHOLDER'
                                            | translate
                                    "
                                    [disabled]="true"
                                    [ngModel]="client_id()"
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            settings-form-field {
                margin-bottom: 1.5em;
            }
        `,
    ],
    imports: [
        MatFormFieldModule,
        MatChipsModule,
        FormsModule,
        TranslatePipe,
        SettingsToggleComponent,
        ReactiveFormsModule,
        MatInputModule,
        IconComponent,
        FullscreenModalShellComponent,
    ],
})
export class ApplicationFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<ApplicationFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceApplication; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private readonly _name = 'DOMAINS.APPLICATION';
    private _hotkey = inject(HotkeysService);
    private _injector = inject(Injector);

    @Output() public event = new EventEmitter<DialogEvent>();

    public form: UntypedFormGroup;
    public loading: string;
    public heading: string;
    public default_redirect_uri: string;
    public readonly client_id = signal('');
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    public subsystem_list: Signal<string[]> = signal([]);

    public readonly addSubsystem = (e: MatChipInputEvent) =>
        addChipItem(this.form.controls.subsystems as FormControl<string[]>, e);
    public readonly removeSubsystem = (i: string) =>
        removeChipItem(
            this.form.controls.subsystems as FormControl<string[]>,
            i,
        );

    public ngOnInit(): void {
        const item = this._data.item;
        const edit = !!item.id;
        this.heading = i18n(`DOMAINS.APPLICATION_${edit ? 'EDIT' : 'NEW'}`);
        this.form = generateApplicationFormFields(item);
        this.subsystem_list = toSignal(
            this.form.controls.subsystems.valueChanges,
            {
                initialValue: this.form.controls.subsystems.value || [],
                injector: this._injector,
            },
        );
        const { redirect_uri } = this.form.value;
        this.default_redirect_uri = redirect_uri || '';
        const redirect_uri_signal = toSignal(
            this.form.get('redirect_uri').valueChanges,
            {
                initialValue: redirect_uri || '',
                injector: this._injector,
            },
        );
        const preserve_client_id_signal = toSignal(
            this.form.get('preserve_client_id').valueChanges,
            {
                initialValue: !!this.form.value.preserve_client_id,
                injector: this._injector,
            },
        );
        effect(
            () => {
                const preserve = preserve_client_id_signal();
                const redirect_value = `${redirect_uri_signal() || ''}`;
                const trimmed_value = redirect_value.trim();
                if (redirect_value !== trimmed_value) {
                    this.form.patchValue(
                        { redirect_uri: trimmed_value },
                        { emitEvent: false },
                    );
                }
                const uri = preserve
                    ? this.default_redirect_uri
                    : trimmed_value;
                this.client_id.set(uri ? Md5.hashStr(uri) : '');
            },
            { injector: this._injector },
        );
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public async submit(): Promise<void> {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        const item = this._data.item as unknown as PlaceResource;
        this.loading = i18n(`${this._name}_SAVING`);
        this._dialog_ref.disableClose = true;
        const item_json = item.toJSON ? item.toJSON() : item;
        const form_item = (
            item.id
                ? cleanObject({ ...item_json, ...this.form.value }, [undefined])
                : { ...item_json, ...this.form.value }
        ) as Identity;
        const save_item = { ...form_item, uid: this.client_id() };
        delete (save_item as Identity & { client_id?: unknown }).client_id;
        try {
            const _item = await (save_item.id
                ? updateApplication(
                      save_item.id as string,
                      save_item as unknown as PlaceApplication,
                  )
                : addApplication(save_item as unknown as PlaceApplication));
            this._dialog_ref.disableClose = false;
            this.event.emit({ reason: 'done', metadata: { item: _item } });
            notifySuccess(i18n(`${this._name}_SAVE_SUCCESS`));
            this._dialog_ref.close();
        } catch (err) {
            this.loading = null;
            this._dialog_ref.disableClose = false;
            notifyError(
                i18n(`${this._name}_SAVE_ERROR`, {
                    error: JSON.stringify(
                        (await (err as Response).text?.()) ||
                            (err as Error).message ||
                            err,
                    ),
                }),
            );
        }
    }
}
