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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    addLDAPSource,
    addOAuthSource,
    addSAMLSource,
    PlaceDomain,
    PlaceLDAPSource,
    PlaceOAuthSource,
    PlaceSAMLSource,
    updateLDAPSource,
    updateOAuthSource,
    updateSAMLSource,
} from '@placeos/ts-client';
import { lastValueFrom } from '../common/general';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler } from '../common/async-handler.class';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import {
    applyLDAPSourceFormSchema,
    applyOAuthSourceFormSchema,
    applySAMLSourceFormSchema,
    generateLDAPSourceForm,
    generateOAuthSourceForm,
    generateSAMLSourceForm,
} from '../domains/auth-sources.utilities';
import { LdapSourceFormComponent } from '../ui/forms/ldap-source-form.component';
import { OauthSourceFormComponent } from '../ui/forms/oauth-source-form.component';
import { SamlSourceFormComponent } from '../ui/forms/saml-source-form.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { TranslatePipe } from '../ui/translate.pipe';

export interface AuthSourceModalData {
    /** Domain the auth source is associated with */
    domain: PlaceDomain;
    /** Item to add/update the trigger on */
    auth_source?: PlaceOAuthSource | PlaceLDAPSource | PlaceSAMLSource;
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
            (save)="save()"
        >
            @if (is_new) {
                <div class="flex flex-col">
                    <label for="type"
                        >{{ 'DOMAINS.AUTHENTICATION_SOURCE_TYPE' | translate }}:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="type"
                            [(ngModel)]="active_type"
                            (ngModelChange)="setType($event)"
                            [placeholder]="
                                'DOMAINS.AUTHENTICATION_SOURCE_SELECT'
                                    | translate
                            "
                        >
                            @for (type of source_types; track type.id) {
                                <mat-option [value]="type.id">
                                    {{ type.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
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
                        <ldap-source-form
                            [form]="ldapForm"
                        />
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
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatSelectModule,
        TranslatePipe,
        FormsModule,
        SamlSourceFormComponent,
        LdapSourceFormComponent,
        OauthSourceFormComponent,
    ],
})
export class AuthSourceModalComponent extends AsyncHandler implements OnInit {
    private _dialog =
        inject<MatDialogRef<AuthSourceModalComponent>>(MatDialogRef);
    private _data = inject<AuthSourceModalData>(MAT_DIALOG_DATA);

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
            new PlaceSAMLSource({ authority_id: this._data.domain.id }),
        ),
    );
    public readonly samlForm = form(
        this.samlFormModel,
        applySAMLSourceFormSchema,
    );
    public readonly ldapFormModel = signal(
        generateLDAPSourceForm(
            new PlaceLDAPSource({ authority_id: this._data.domain.id }),
        ),
    );
    public readonly ldapForm = form(
        this.ldapFormModel,
        applyLDAPSourceFormSchema,
    );
    public readonly item = signal<
        PlaceOAuthSource | PlaceLDAPSource | PlaceSAMLSource
    >(null);
    public readonly active_type = signal<AuthSourceTypes>(null);
    public readonly type = computed(() =>
        this.item() instanceof PlaceSAMLSource
            ? 'saml'
            : this.item() instanceof PlaceLDAPSource
              ? 'ldap'
              : 'oauth',
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
                this.item.set(new PlaceSAMLSource(data));
                break;
            case 'ldap':
                this.item.set(new PlaceLDAPSource(data));
                break;
            default:
                this.item.set(new PlaceOAuthSource(data));
                break;
        }
        this.initialiseForm();
    }

    public updateMethod(item) {
        switch (this.type()) {
            case 'saml':
                return item.id
                    ? updateSAMLSource(item.id, item)
                    : addSAMLSource(item);
            case 'ldap':
                return item.id
                    ? updateLDAPSource(item.id, item)
                    : addLDAPSource(item);
        }
        return item.id
            ? updateOAuthSource(item.id, item)
            : addOAuthSource(item);
    }

    /**
     * Create item if new or update if exsiting
     */
    public async save() {
        if (!(await this.submitActiveForm())) {
            return;
        }
        this.loading.set('Saving authentication source...');
        const method: Promise<unknown> = lastValueFrom<unknown>(
            this.updateMethod({
                ...this.item().toJSON(),
                ...this.activeFormModel()(),
            }),
        );
        method.then(
            (item) => {
                this.event.emit({ reason: 'done', metadata: { source: item } });
                notifySuccess(i18n('DOMAINS.AUTHENTICATION_SAVE_SUCCESS'));
                this._dialog.close();
            },
            (err) => {
                this.loading.set('');
                notifyError(
                    i18n('DOMAINS.AUTHENTICATION_SAVE_ERROR', {
                        error: JSON.stringify(
                            err.response || err.message || err,
                        ),
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
        if (item instanceof PlaceOAuthSource) {
            this.oauthFormModel.set(generateOAuthSourceForm(item));
        } else if (item instanceof PlaceSAMLSource) {
            this.samlFormModel.set(generateSAMLSourceForm(item));
        } else if (item instanceof PlaceLDAPSource) {
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
                return this.samlFormModel;
            case 'ldap':
                return this.ldapFormModel;
        }
        return this.oauthFormModel;
    }
}
