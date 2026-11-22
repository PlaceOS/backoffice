import {
    Component,
    computed,
    EventEmitter,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, submit } from '@angular/forms/signals';
import {
    type Domain,
    ldap_authentications,
    LdapAuthentication,
    oauth_authentications,
    OauthAuthentication,
    saml_authentications,
    SamlAuthentication,
} from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { readError } from '../common/errors';
import { cleanObject } from '../common/general';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { newItem, toBody } from '../common/placeos';
import { DialogEvent, Identity } from '../common/types';
import {
    applyLDAPSourceFormSchema,
    applyOAuthSourceFormSchema,
    applySAMLSourceFormSchema,
    authSourceType,
    generateLDAPSourceForm,
    generateOAuthSourceForm,
    generateSAMLSourceForm,
} from '../domains/auth-sources.utilities';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { OptionComponent } from '../ui/controls/option.component';
import { SelectComponent } from '../ui/controls/select.component';
import { LdapSourceFormComponent } from '../ui/forms/ldap-source-form.component';
import { OauthSourceFormComponent } from '../ui/forms/oauth-source-form.component';
import { SamlSourceFormComponent } from '../ui/forms/saml-source-form.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { TranslatePipe } from '../ui/translate.pipe';

export interface AuthSourceModalData {
    /** Domain the auth source is associated with */
    domain: Domain;
    /** Item to add/update the trigger on */
    auth_source?: OauthAuthentication | LdapAuthentication | SamlAuthentication;
}

export type AuthSourceTypes = 'oauth' | 'saml' | 'ldap';

@Component({
    selector: 'app-auth-source-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (is_new
                    ? 'DOMAINS.AUTHENTICATION_NEW'
                    : 'DOMAINS.AUTHENTICATION_EDIT'
                ) | translate
            "
            [loading]="loading()"
            [disable_confirm]="!item()"
            (save)="save()"
        >
            @if (is_new) {
                <div class="flex flex-col">
                    <label for="type"
                        >{{ 'DOMAINS.AUTHENTICATION_SOURCE_TYPE' | translate }}:
                    </label>
                    <app-form-field>
                        <app-select
                            name="type"
                            [(ngModel)]="active_type"
                            (ngModelChange)="setType($event)"
                            [placeholder]="
                                'DOMAINS.AUTHENTICATION_SOURCE_SELECT'
                                    | translate
                            "
                        >
                            @for (type of source_types; track type.id) {
                                <app-option [value]="type.id">
                                    {{ type.name }}
                                </app-option>
                            }
                        </app-select>
                    </app-form-field>
                </div>
            }
            @if (item()) {
                @switch (type()) {
                    @case ('saml') {
                        <saml-source-form
                            [form]="samlForm"
                            [formModel]="samlFormModel"
                        />
                    }
                    @case ('ldap') {
                        <ldap-source-form [form]="ldapForm" />
                    }
                    @default {
                        <oauth-source-form
                            [form]="oauthForm"
                            [formModel]="oauthFormModel"
                        />
                    }
                }
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        FullscreenModalShellComponent,
        TranslatePipe,
        FormsModule,
        SamlSourceFormComponent,
        LdapSourceFormComponent,
        OauthSourceFormComponent,
    ],
})
export class AuthSourceModalComponent implements OnInit {
    private _dialog =
        inject<DialogRef<unknown, AuthSourceModalComponent>>(DialogRef);
    private _data = inject<AuthSourceModalData>(DIALOG_DATA);

    /** List of available authentication sources */
    public source_types: Identity[] = [
        { id: 'oauth', name: 'OAuth' },
        { id: 'ldap', name: 'LDAP' },
        { id: 'saml', name: 'SAML2' },
    ];

    /** Emitter for events on the modal */
    public readonly event = new EventEmitter<DialogEvent>();
    public readonly loading = signal('');
    public readonly oauthFormModel = signal(generateOAuthSourceForm());
    public readonly oauthForm = form(
        this.oauthFormModel,
        applyOAuthSourceFormSchema,
    );
    public readonly samlFormModel = signal(
        generateSAMLSourceForm(
            newItem(SamlAuthentication, { authority_id: this._data.domain.id }),
        ),
    );
    public readonly samlForm = form(
        this.samlFormModel,
        applySAMLSourceFormSchema,
    );
    public readonly ldapFormModel = signal(
        generateLDAPSourceForm(
            newItem(LdapAuthentication, { authority_id: this._data.domain.id }),
        ),
    );
    public readonly ldapForm = form(
        this.ldapFormModel,
        applyLDAPSourceFormSchema,
    );
    public readonly item = signal<
        OauthAuthentication | LdapAuthentication | SamlAuthentication
    >(null);
    public readonly active_type = signal<AuthSourceTypes>(null);
    public readonly type = computed(() =>
        this.item() ? authSourceType(this.item()) : 'oauth',
    );

    /** Whether the triggers is new or not */
    public get is_new(): boolean {
        return !this._data.auth_source;
    }

    public ngOnInit() {
        if (this._data.auth_source) {
            this.item.set(this._data.auth_source);
            this.active_type.set(this.type());
        }
        this.initialiseForm();
    }

    /**
     * Set the type of auth source to create
     * @param type Type of auth source
     */
    public setType(type: AuthSourceTypes) {
        const data = { authority_id: this._data.domain.id };
        switch (type) {
            case 'saml':
                this.item.set(newItem(SamlAuthentication, data));
                break;
            case 'ldap':
                this.item.set(newItem(LdapAuthentication, data));
                break;
            default:
                this.item.set(newItem(OauthAuthentication, data));
                break;
        }
        this.initialiseForm();
    }

    public updateMethod(item: { id?: string }) {
        // A new item has `null` fields. 6.x removed them before it sent the item
        const data = cleanObject({ ...item }, [null, undefined]);
        const id = item.id;
        switch (this.type()) {
            case 'saml': {
                const body = toBody(SamlAuthentication, data);
                return id
                    ? saml_authentications.update({ id, body }).then(orThrow)
                    : saml_authentications.create({ body }).then(orThrow);
            }
            case 'ldap': {
                const body = toBody(LdapAuthentication, data);
                return id
                    ? ldap_authentications.update({ id, body }).then(orThrow)
                    : ldap_authentications.create({ body }).then(orThrow);
            }
        }
        const body = toBody(OauthAuthentication, data);
        return id
            ? oauth_authentications.update({ id, body }).then(orThrow)
            : oauth_authentications.create({ body }).then(orThrow);
    }

    /**
     * Create item if new or update if exsiting
     */
    public async save() {
        // Nothing to save until a source type is chosen
        if (!this.item()) return;
        if (!(await this.submitActiveForm())) {
            return;
        }
        this.loading.set('Saving authentication source...');
        const method: Promise<unknown> = this.updateMethod({
            ...this.item(),
            ...this.activeFormModel(),
        });
        method.then(
            (item) => {
                this.event.emit({ reason: 'done', metadata: { source: item } });
                notifySuccess(i18n('DOMAINS.AUTHENTICATION_SAVE_SUCCESS'));
                this._dialog.close();
            },
            async (err) => {
                this.loading.set('');
                notifyError(
                    i18n('DOMAINS.AUTHENTICATION_SAVE_ERROR', {
                        error: await readError(err),
                    }),
                );
            },
        );
    }

    /**
     * Generate the form fields for the active item type
     */
    private initialiseForm() {
        if (!this.item()) return;
        const item = this.item();
        if ('client_id' in item) {
            this.oauthFormModel.set(generateOAuthSourceForm(item));
        } else if ('issuer' in item) {
            this.samlFormModel.set(generateSAMLSourceForm(item));
        } else {
            this.ldapFormModel.set(generateLDAPSourceForm(item));
        }
    }

    private async submitActiveForm(): Promise<boolean> {
        switch (this.type()) {
            case 'saml':
                await submit(this.samlForm, async () => undefined);
                return !this.samlForm().invalid();
            case 'ldap':
                await submit(this.ldapForm, async () => undefined);
                return !this.ldapForm().invalid();
        }
        await submit(this.oauthForm, async () => undefined);
        return !this.oauthForm().invalid();
    }

    private activeFormModel() {
        switch (this.type()) {
            case 'saml':
                return this.samlFormModel();
            case 'ldap':
                return this.ldapFormModel();
        }
        return this.oauthFormModel();
    }
}
