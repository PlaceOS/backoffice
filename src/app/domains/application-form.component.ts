import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    Component,
    computed,
    effect,
    EventEmitter,
    inject,
    Injector,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, submit } from '@angular/forms/signals';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {
    addApplication,
    cleanObject,
    PlaceApplication,
    PlaceResource,
    updateApplication,
} from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Md5 } from 'ts-md5';
import {
    addSignalChipItem,
    getInvalidSignalFields,
    removeSignalChipItem,
} from '../common/forms';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import {
    applyApplicationFormSchema,
    generateApplicationFormModel,
} from './applications.utilities';

@Component({
    selector: 'application-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form application class="flex flex-col">
                    <div class="fieldset">
                        @if (form.name) {
                            <div class="field">
                                <label
                                    for="application-name"
                                    [class.error]="
                                        form.name().invalid() &&
                                        form.name().touched()
                                    "
                                >
                                    {{ 'COMMON.FIELD_NAME' | translate
                                    }}<span>*</span>:
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        placeholder="Application Name"
                                        [formField]="form.name"
                                    />
                                    <mat-error>{{
                                        'DOMAINS.APP_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.scopes) {
                            <div class="field">
                                <label for="scopes"
                                    >{{
                                        'DOMAINS.APP_SCOPES' | translate
                                    }}:</label
                                >
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'DOMAINS.APP_SCOPES' | translate
                                        "
                                        [formField]="form.scopes"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.subsystems) {
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
                    @if (form.redirect_uri) {
                        <div class="field">
                            <label for="redirect-uri"
                                >{{ 'DOMAINS.APP_REDIRECT_URL' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    placeholder="Redirect URI e.g. http://localhost:4200/oauth-resp.html"
                                    [formField]="form.redirect_uri"
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
                            [label]="'DOMAINS.APP_SKIP' | translate"
                            [formField]="form.skip_authorization"
                        />
                        <settings-toggle
                            class="flex-1"
                            [label]="'DOMAINS.APP_PRESERVE_ID' | translate"
                            [formField]="form.preserve_client_id"
                        />
                    </div>
                    @if (form.redirect_uri) {
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
        FormField,
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

    public readonly formModel = signal(
        generateApplicationFormModel(this._data.item),
    );
    public readonly form = form(this.formModel, applyApplicationFormSchema);
    public loading: string;
    public heading: string;
    public default_redirect_uri: string;
    public readonly client_id = signal('');
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    public subsystem_list = computed(() => this.formModel().subsystems || []);

    public readonly addSubsystem = (e: MatChipInputEvent) =>
        this.formModel.update((value) => ({
            ...value,
            subsystems: addSignalChipItem(value.subsystems, e),
        }));
    public readonly removeSubsystem = (i: string) =>
        this.formModel.update((value) => ({
            ...value,
            subsystems: removeSignalChipItem(value.subsystems, i),
        }));

    public ngOnInit(): void {
        const item = this._data.item;
        const edit = !!item.id;
        this.heading = i18n(`DOMAINS.APPLICATION_${edit ? 'EDIT' : 'NEW'}`);
        const { redirect_uri } = this.formModel();
        this.default_redirect_uri = redirect_uri || '';
        effect(
            () => {
                const preserve = this.formModel().preserve_client_id;
                const redirect_value = `${this.formModel().redirect_uri || ''}`;
                const trimmed_value = redirect_value.trim();
                if (redirect_value !== trimmed_value) {
                    this.formModel.update((value) => ({
                        ...value,
                        redirect_uri: trimmed_value,
                    }));
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
        await submit(this.form, async () => {
            const item = this._data.item as unknown as PlaceResource;
            this.loading = i18n(`${this._name}_SAVING`);
            this._dialog_ref.disableClose = true;
            const item_json = item.toJSON ? item.toJSON() : item;
            const form_item = (
                item.id
                    ? cleanObject({ ...item_json, ...this.formModel() }, [
                          undefined,
                      ])
                    : { ...item_json, ...this.formModel() }
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
