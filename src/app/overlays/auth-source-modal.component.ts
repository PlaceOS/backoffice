import {
    Component,
    computed,
    EventEmitter,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { FormGroup, FormsModule, UntypedFormGroup } from '@angular/forms';
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

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { lastValueFrom } from 'rxjs';
import { AsyncHandler } from '../common/async-handler.class';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import {
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
                        <saml-source-form [form]="form()" />
                    }
                    @case ('ldap') {
                        <ldap-source-form [form]="form()" />
                    }
                    @default {
                        <oauth-source-form [form]="form()" />
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
    public readonly form = signal<UntypedFormGroup>(new FormGroup({}));
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
    public save() {
        this.form().markAllAsTouched();
        if (!this.form().valid) {
            return;
        }
        this.loading.set('Saving authentication source...');
        const method: Promise<unknown> = lastValueFrom<unknown>(
            this.updateMethod({
                ...this.item().toJSON(),
                ...this.form().value,
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
            this.form.set(generateOAuthSourceForm(item));
        } else if (item instanceof PlaceSAMLSource) {
            this.form.set(generateSAMLSourceForm(item));
        } else if (item instanceof PlaceLDAPSource) {
            this.form.set(generateLDAPSourceForm(item));
        }
    }
}
