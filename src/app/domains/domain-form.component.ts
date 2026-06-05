import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    Signal,
    inject,
    signal,
} from '@angular/core';
import {
    FormControl,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    EncryptionLevel,
    PlaceDomain,
    PlaceSettings,
    addDomain,
    addSettings,
    cleanObject,
    updateDomain,
} from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { addChipItem, removeChipItem } from '../common/forms';
import { getInvalidFields } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import {
    notifyError,
    notifySuccess,
    notifyWarn,
} from '../common/notifications';
import { toSignal } from '../common/signals';
import { DialogEvent, Identity } from '../common/types';
import { isValidDomain } from '../common/validation';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateDomainFormFields } from './domains.utilities';

@Component({
    selector: 'domain-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form domain class="flex flex-col" [formGroup]="form">
                    <div class="fieldset">
                        @if (form.controls.name) {
                            <div class="field">
                                <label
                                    for="domain-name"
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
                                        name="domain-name"
                                        [placeholder]="
                                            'COMMON.FIELD_NAME' | translate
                                        "
                                        formControlName="name"
                                        required
                                    />
                                    @if (form.controls.name.invalid) {
                                        <mat-error>
                                            {{
                                                'DOMAINS.NAME_REQUIRED'
                                                    | translate
                                            }}
                                        </mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.domain) {
                            <div class="field">
                                <label
                                    for="domain"
                                    [class.error]="
                                        form.controls.domain.invalid &&
                                        form.controls.domain.touched
                                    "
                                >
                                    {{ 'DOMAINS.NAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="domain"
                                        [placeholder]="
                                            'DOMAINS.NAME_PLACEHOLDER'
                                                | translate
                                        "
                                        formControlName="domain"
                                    />
                                    <mat-error>{{
                                        'DOMAINS.DOMAIN_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.controls.login_url) {
                        <div class="field">
                            <label
                                for="login-url"
                                [class.error]="
                                    form.controls.login_url.invalid &&
                                    form.controls.login_url.touched
                                "
                            >
                                {{ 'DOMAINS.LOGIN_URL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="login-url"
                                    [placeholder]="
                                        'DOMAINS.LOGIN_URL' | translate
                                    "
                                    formControlName="login_url"
                                />
                                @if (form.controls.login_url.invalid) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.LOGIN_URL_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.logout_url) {
                        <div class="field">
                            <label
                                for="logout-url"
                                [class.error]="
                                    form.controls.logout_url.invalid &&
                                    form.controls.logout_url.touched
                                "
                            >
                                {{ 'DOMAINS.LOGOUT_URL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="logout-url"
                                    [placeholder]="
                                        'DOMAINS.LOGOUT_URL' | translate
                                    "
                                    formControlName="logout_url"
                                />
                                @if (form.controls.logout_url.invalid) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.LOGOUT_URL_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
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
                    @if (form.controls.email_domains) {
                        <div class="field">
                            <label
                                for="email-domains-input"
                                [class.error]="
                                    form.controls.email_domains.invalid &&
                                    form.controls.email_domains.touched
                                "
                            >
                                {{ 'DOMAINS.EMAIL_DOMAINS' | translate }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipList
                                    aria-label="Image List"
                                >
                                    @for (
                                        item of email_domain_list();
                                        track item
                                    ) {
                                        <mat-chip-row
                                            (removed)="removeEmailDomain(item)"
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
                                    id="email-domains-input"
                                    [placeholder]="
                                        'DOMAINS.EMAIL_DOMAINS' | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="
                                        addEmailDomain($event)
                                    "
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
            mat-checkbox {
                margin-top: 2.5em;
                margin-bottom: 1.5em;
            }

            @media screen and (max-width: 640px) {
                mat-checkbox {
                    margin-top: 0;
                }
            }
        `,
    ],
    imports: [
        MatFormFieldModule,
        MatChipsModule,
        MatInputModule,
        TranslatePipe,
        ReactiveFormsModule,
        IconComponent,
        FullscreenModalShellComponent,
    ],
})
export class DomainFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<DomainFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceDomain; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private _hotkey = inject(HotkeysService);
    private readonly _name = 'DOMAINS';

    @Output() public event = new EventEmitter<DialogEvent>();

    public form: UntypedFormGroup = generateDomainFormFields(this._data.item);
    public loading: string;
    public heading = i18n(
        `${this._name}.${this._data.item.id ? 'EDIT' : 'NEW'}`,
    );

    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly addEmailDomain = (e: MatChipInputEvent) => {
        if (!e?.value) return;
        if (!isValidDomain(e.value as string))
            return notifyWarn('Invalid email');
        addChipItem(
            this.form.controls.email_domains as FormControl<string[]>,
            e,
        );
    };
    public readonly removeEmailDomain = (i: string) =>
        removeChipItem(
            this.form.controls.email_domains as FormControl<string[]>,
            i,
        );

    public email_domain_list: Signal<string[]> = this.form.controls
        .email_domains
        ? toSignal(this.form.controls.email_domains.valueChanges, {
              initialValue: this.form.controls.email_domains.value || [],
          })
        : signal([]);

    public ngOnInit(): void {
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
        const item = this._data.item;
        this.loading = i18n(`${this._name}.SAVING`);
        this._dialog_ref.disableClose = true;
        const item_json = item.toJSON ? item.toJSON() : item;
        const form_item = (
            item.id
                ? cleanObject({ ...item_json, ...this.form.value }, [undefined])
                : { ...item_json, ...this.form.value }
        ) as Identity;
        try {
            const _item = await (form_item.id
                ? updateDomain(
                      form_item.id as string,
                      form_item as unknown as PlaceDomain,
                  )
                : addDomain(form_item as unknown as PlaceDomain));
            this._dialog_ref.disableClose = false;
            this.event.emit({ reason: 'done', metadata: { item: _item } });
            notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
            if (!this.form.value.id && this.form.controls.settings) {
                await this.newSettings(
                    _item as unknown as Identity,
                    this.form.controls.settings.value,
                );
            }
            this._dialog_ref.close();
        } catch (err) {
            this.loading = null;
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
    }

    private async newSettings(item: Identity, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id as string,
            settings_string,
            encryption_level: EncryptionLevel.Support,
        });
        await addSettings(new_settings).catch((err) => {
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
