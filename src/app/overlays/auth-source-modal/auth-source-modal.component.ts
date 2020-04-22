import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import {
    EngineDomain,
    EngineOAuthSource,
    EngineLDAPSource,
    EngineSAMLSource
} from '@placeos/ts-client';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { DialogEvent, Identity } from 'src/app/shared/utilities/types.utilities';
import {
    generateOAuthSourceForm,
    generateLDAPSourceForm,
    generateSAMLSourceForm
} from 'src/app/shared/utilities/data/auth-sources.utilities';

export interface AuthSourceModalData {
    /** Domain the auth source is associated with */
    domain: EngineDomain;
    /** Item to add/update the trigger on */
    auth_source?: EngineOAuthSource | EngineLDAPSource | EngineSAMLSource;
}

export type AuthSourceTypes = 'oauth' | 'saml' | 'ldap';

@Component({
    selector: 'app-auth-source-modal',
    templateUrl: './auth-source-modal.component.html',
    styleUrls: ['./auth-source-modal.component.scss']
})
export class AuthSourceModalComponent extends BaseDirective implements OnInit {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public loading: boolean;
    /** Form fields for trigger condition */
    public form: FormGroup;
    /** Item */
    public item: EngineOAuthSource | EngineLDAPSource | EngineSAMLSource;
    /** List of available authentication sources */
    public source_types: Identity[] = [
        { id: 'oauth', name: 'OAuth' },
        { id: 'ldap', name: 'LDAP' },
        { id: 'saml', name: 'SAML2' }
    ];

    public active_type: AuthSourceTypes;

    /** Whether the triggers is new or not */
    public get is_new(): boolean {
        return !this._data.auth_source;
    }

    public get type(): AuthSourceTypes {
        return this.item instanceof EngineSAMLSource
            ? 'saml'
            : this.item instanceof EngineLDAPSource
            ? 'ldap'
            : 'oauth';
    }

    constructor(
        private _dialog: MatDialogRef<AuthSourceModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: AuthSourceModalData,
        private _service: ApplicationService
    ) {
        super();
    }

    public ngOnInit() {
        if (this._data.auth_source) {
            this.item = this._data.auth_source;
            this.active_type = this.type;
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
                this.item = new EngineSAMLSource(this._service.SAMLAuthSources, data);
                break;
            case 'ldap':
                this.item = new EngineLDAPSource(this._service.LDAPAuthSources, data);
                break;
            default:
                this.item = new EngineOAuthSource(this._service.OAuthSources, data);
                break;
        }
        this.initialiseForm();
    }

    /**
     * Create item if new or update if exsiting
     */
    public save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        this.loading = true;
        (this.item as any).save().then(
            item => {
                this.event.emit({ reason: 'done', metadata: { trigger: item } });
                this._service.notifySuccess(
                    `Successfully ${this.is_new ? 'added' : 'updated'} auth source`
                );
                this._dialog.close();
            },
            err => {
                this.loading = false;
                this._service.notifyError(
                    `Error ${
                        this.is_new ? 'adding' : 'updating'
                    } auth source. Error: ${JSON.stringify(err.response || err.message || err)}`
                );
            }
        );
    }

    /**
     * Generate the form fields for the active item type
     */
    private initialiseForm() {
        if (!this.item) {
            return;
        }
        if (this.item instanceof EngineOAuthSource) {
            this.form = generateOAuthSourceForm(this.item).form;
        } else if (this.item instanceof EngineSAMLSource) {
            this.form = generateSAMLSourceForm(this.item).form;
        } else if (this.item instanceof EngineLDAPSource) {
            this.form = generateLDAPSourceForm(this.item).form;
        }
    }
}
