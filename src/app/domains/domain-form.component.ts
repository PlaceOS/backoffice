import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { addDomain, PlaceDomain, updateDomain } from '@placeos/ts-client';
import { mergeFormItem, onSaveHotkey, submitFormDialog } from '../common/forms';
import { i18n } from '../common/locale.service';
import { notifyWarn } from '../common/notifications';
import { DialogEvent } from '../common/types';
import { isValidDomain } from '../common/validation';
import { ChipListComponent } from '../ui/controls/chip-list.component';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { TranslatePipe } from '../ui/translate.pipe';
import {
    applyDomainFormSchema,
    generateDomainFormModel,
} from './domains.utilities';

@Component({
    selector: 'domain-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form domain class="flex flex-col">
                    <div class="fieldset">
                        @if (form.name) {
                            <div class="field">
                                <label
                                    for="domain-name"
                                    [class.error]="
                                        form.name().invalid() &&
                                        form.name().touched()
                                    "
                                >
                                    {{ 'COMMON.FIELD_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <app-form-field>
                                    <input
                                        id="domain-name"
                                        [placeholder]="
                                            'COMMON.FIELD_NAME' | translate
                                        "
                                        [formField]="form.name"
                                    />
                                    @if (form.name().invalid()) {
                                        <div error>
                                            {{
                                                'DOMAINS.NAME_REQUIRED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                </app-form-field>
                            </div>
                        }
                        @if (form.domain) {
                            <div class="field">
                                <label
                                    for="domain"
                                    [class.error]="
                                        form.domain().invalid() &&
                                        form.domain().touched()
                                    "
                                >
                                    {{ 'DOMAINS.NAME' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="domain"
                                        [placeholder]="
                                            'DOMAINS.NAME_PLACEHOLDER'
                                                | translate
                                        "
                                        [formField]="form.domain"
                                    />
                                    <div error>
                                        {{
                                            'DOMAINS.DOMAIN_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                </app-form-field>
                            </div>
                        }
                    </div>
                    @if (form.login_url) {
                        <div class="field">
                            <label
                                for="login-url"
                                [class.error]="
                                    form.login_url().invalid() &&
                                    form.login_url().touched()
                                "
                            >
                                {{ 'DOMAINS.LOGIN_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="login-url"
                                    [placeholder]="
                                        'DOMAINS.LOGIN_URL' | translate
                                    "
                                    [formField]="form.login_url"
                                />
                                @if (form.login_url().invalid()) {
                                    <div error>
                                        {{
                                            'DOMAINS.LOGIN_URL_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                }
                            </app-form-field>
                        </div>
                    }
                    @if (form.logout_url) {
                        <div class="field">
                            <label
                                for="logout-url"
                                [class.error]="
                                    form.logout_url().invalid() &&
                                    form.logout_url().touched()
                                "
                            >
                                {{ 'DOMAINS.LOGOUT_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="logout-url"
                                    [placeholder]="
                                        'DOMAINS.LOGOUT_URL' | translate
                                    "
                                    [formField]="form.logout_url"
                                />
                                @if (form.logout_url().invalid()) {
                                    <div error>
                                        {{
                                            'DOMAINS.LOGOUT_URL_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                }
                            </app-form-field>
                        </div>
                    }
                    @if (form.description) {
                        <div class="field">
                            <label for="description">{{
                                'COMMON.FIELD_DESCRIPTION' | translate
                            }}</label>
                            <app-form-field>
                                <textarea
                                    id="description"
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    [formField]="form.description"
                                ></textarea>
                            </app-form-field>
                        </div>
                    }
                    @if (form.email_domains) {
                        <div class="field">
                            <label
                                for="email-domains-input"
                                [class.error]="
                                    form.email_domains().invalid() &&
                                    form.email_domains().touched()
                                "
                            >
                                {{ 'DOMAINS.EMAIL_DOMAINS' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="email-domains-input"
                                    [attr.aria-label]="
                                        'DOMAINS.EMAIL_DOMAINS' | translate
                                    "
                                    [placeholder]="
                                        'DOMAINS.EMAIL_DOMAINS' | translate
                                    "
                                    [separators]="['Enter', ',', ' ']"
                                    [value]="formModel().email_domains"
                                    (valueChange)="setEmailDomains($event)"
                                />
                            </app-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    imports: [
        FormFieldComponent,
        ChipListComponent,
        TranslatePipe,
        FormField,
        FullscreenModalShellComponent,
    ],
})
export class DomainFormComponent {
    private _dialog_ref =
        inject<DialogRef<unknown, DomainFormComponent>>(DialogRef);
    private _data = inject<{ item: PlaceDomain; readonly?: string }>(
        DIALOG_DATA,
    );
    private readonly _name = 'DOMAINS';

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(
        generateDomainFormModel(this._data.item),
    );
    public readonly form = form(this.formModel, applyDomainFormSchema);
    public readonly loading = signal<string | null>(null);
    public heading = i18n(
        `${this._name}.${this._data.item.id ? 'EDIT' : 'NEW'}`,
    );

    /**
     * Update the email domains from the chip list.
     * New items that are not valid domains are dropped with a warning.
     */
    public setEmailDomains(list: string[]) {
        const current = this.formModel().email_domains;
        const email_domains = list.filter(
            (item) => current.includes(item) || isValidDomain(item),
        );
        if (email_domains.length < list.length) notifyWarn('Invalid email');
        this.formModel.update((value) => ({ ...value, email_domains }));
    }

    constructor() {
        onSaveHotkey(() => this.submit());
    }

    public async submit(): Promise<void> {
        await submitFormDialog(
            this.form,
            {
                loading: this.loading,
                event: this.event,
                close: () => this._dialog_ref.close(),
            },
            `${this._name}.`,
            () => {
                const form_item = mergeFormItem(
                    this._data.item,
                    this.formModel(),
                ) as unknown as PlaceDomain;
                return form_item.id
                    ? updateDomain(form_item.id, form_item)
                    : addDomain(form_item);
            },
        );
    }
}
