import {
    Component,
    effect,
    EventEmitter,
    inject,
    Injector,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import {
    addApplication,
    PlaceApplication,
    PlaceResource,
    updateApplication,
} from '@placeos/ts-client';

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Md5 } from 'ts-md5';
import { mergeFormItem, onSaveHotkey, submitFormDialog } from '../common/forms';
import { i18n } from '../common/locale.service';
import { DialogEvent } from '../common/types';
import { ChipListComponent } from '../ui/controls/chip-list.component';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
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
            [heading]="heading()"
            [loading]="loading()"
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
                                <app-form-field>
                                    <input
                                        id="application-name"
                                        placeholder="Application Name"
                                        [formField]="form.name"
                                    />
                                    <div error>
                                        {{
                                            'DOMAINS.APP_NAME_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                </app-form-field>
                            </div>
                        }
                        @if (form.scopes) {
                            <div class="field">
                                <label for="scopes"
                                    >{{
                                        'DOMAINS.APP_SCOPES' | translate
                                    }}:</label
                                >
                                <app-form-field>
                                    <input
                                        id="scopes"
                                        [placeholder]="
                                            'DOMAINS.APP_SCOPES' | translate
                                        "
                                        [formField]="form.scopes"
                                    />
                                </app-form-field>
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
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="subsystems-input"
                                    aria-label="Subsystem List"
                                    [placeholder]="
                                        'DOMAINS.APP_SUBSYSTEMS' | translate
                                    "
                                    [separators]="['Enter', ',', ' ']"
                                    [formField]="form.subsystems"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form.redirect_uri) {
                        <div class="field">
                            <label for="redirect-uri"
                                >{{ 'DOMAINS.APP_REDIRECT_URL' | translate }}:
                            </label>
                            <app-form-field>
                                <input
                                    id="redirect-uri"
                                    placeholder="Redirect URI e.g. http://localhost:4200/oauth-resp.html"
                                    [formField]="form.redirect_uri"
                                />
                                <div error>
                                    {{
                                        'DOMAINS.APP_REDIRECT_URL_REQUIRED'
                                            | translate
                                    }}
                                </div>
                            </app-form-field>
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
                            <app-form-field>
                                <input
                                    id="client-id"
                                    name="client-id"
                                    [placeholder]="
                                        'DOMAINS.APP_CLIENT_PLACEHOLDER'
                                            | translate
                                    "
                                    [disabled]="true"
                                    [ngModel]="client_id()"
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </app-form-field>
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
        FormFieldComponent,
        ChipListComponent,
        FormsModule,
        TranslatePipe,
        SettingsToggleComponent,
        FormField,
        FullscreenModalShellComponent,
    ],
})
export class ApplicationFormComponent implements OnInit {
    private _dialog_ref =
        inject<DialogRef<unknown, ApplicationFormComponent>>(DialogRef);
    private _data = inject<{ item: PlaceApplication; readonly?: string }>(
        DIALOG_DATA,
    );
    private readonly _name = 'DOMAINS.APPLICATION';
    private _injector = inject(Injector);

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(
        generateApplicationFormModel(this._data.item),
    );
    public readonly form = form(this.formModel, applyApplicationFormSchema);
    public readonly loading = signal<string | null>(null);
    public readonly heading = signal('');
    public readonly client_id = signal('');
    constructor() {
        onSaveHotkey(() => this.submit());
    }

    public ngOnInit(): void {
        const item = this._data.item;
        const edit = !!item.id;
        this.heading.set(i18n(`DOMAINS.APPLICATION_${edit ? 'EDIT' : 'NEW'}`));
        effect(
            () => {
                const redirect_value = `${this.formModel().redirect_uri || ''}`;
                const trimmed_value = redirect_value.trim();
                if (redirect_value !== trimmed_value) {
                    this.formModel.update((value) => ({
                        ...value,
                        redirect_uri: trimmed_value,
                    }));
                }
                // The backend ignores a uid sent by the client. It sets
                // md5(lowercase redirect_uri) on create and never changes it
                // on update, so existing apps always keep the stored uid.
                if (item.uid) {
                    this.client_id.set(item.uid);
                    return;
                }
                this.client_id.set(
                    trimmed_value
                        ? Md5.hashStr(trimmed_value.toLowerCase())
                        : '',
                );
            },
            { injector: this._injector },
        );
    }

    public async submit(): Promise<void> {
        await submitFormDialog(
            this.form,
            {
                loading: this.loading,
                event: this.event,
                close: () => this._dialog_ref.close(),
            },
            `${this._name}_`,
            () => {
                const save_item = {
                    ...mergeFormItem(
                        this._data.item as unknown as PlaceResource,
                        this.formModel(),
                    ),
                    uid: this.client_id(),
                } as unknown as PlaceApplication & { client_id?: unknown };
                delete save_item.client_id;
                return save_item.id
                    ? updateApplication(save_item.id, save_item)
                    : addApplication(save_item);
            },
        );
    }
}
