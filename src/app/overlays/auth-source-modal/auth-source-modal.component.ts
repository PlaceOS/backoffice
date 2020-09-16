import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import {
    PlaceDomain,
    PlaceOAuthSource,
    PlaceLDAPSource,
    PlaceSAMLSource,
    updateSAMLSource,
    addSAMLSource,
    updateLDAPSource,
    addLDAPSource,
    updateOAuthSource,
    addOAuthSource,
} from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { DialogEvent, Identity } from 'src/app/shared/utilities/types.utilities';
import {
    generateOAuthSourceForm,
    generateLDAPSourceForm,
    generateSAMLSourceForm,
} from 'src/app/shared/utilities/data/auth-sources.utilities';
import { Observable } from 'rxjs';
import { notifySuccess, notifyError } from 'src/app/common/notifications';

export interface AuthSourceModalData {
    /** Domain the auth source is associated with */
    domain: PlaceDomain;
    /** Item to add/update the trigger on */
    auth_source?: PlaceOAuthSource | PlaceLDAPSource | PlaceSAMLSource;
}

export type AuthSourceTypes = 'oauth' | 'saml' | 'ldap';

@Component({
    selector: 'app-auth-source-modal',
    templateUrl: './auth-source-modal.component.html',
    styleUrls: ['./auth-source-modal.component.scss'],
})
export class AuthSourceModalComponent extends BaseClass implements OnInit {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public loading: boolean;
    /** Form fields for trigger condition */
    public form: FormGroup;
    /** Item */
    public item: PlaceOAuthSource | PlaceLDAPSource | PlaceSAMLSource;
    /** List of available authentication sources */
    public source_types: Identity[] = [
        { id: 'oauth', name: 'OAuth' },
        { id: 'ldap', name: 'LDAP' },
        { id: 'saml', name: 'SAML2' },
    ];

    public active_type: AuthSourceTypes;

    /** Whether the triggers is new or not */
    public get is_new(): boolean {
        return !this._data.auth_source;
    }

    public get type(): AuthSourceTypes {
        return this.item instanceof PlaceSAMLSource
            ? 'saml'
            : this.item instanceof PlaceLDAPSource
            ? 'ldap'
            : 'oauth';
    }

    constructor(
        private _dialog: MatDialogRef<AuthSourceModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: AuthSourceModalData
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
                this.item = new PlaceSAMLSource(data);
                break;
            case 'ldap':
                this.item = new PlaceLDAPSource(data);
                break;
            default:
                this.item = new PlaceOAuthSource(data);
                break;
        }
        this.initialiseForm();
    }

    public updateMethod(item) {
        switch (this.type) {
            case 'saml':
                return item.id ? updateSAMLSource(item.id, item) : addSAMLSource(item);
            case 'ldap':
                return item.id ? updateLDAPSource(item.id, item) : addLDAPSource(item);
        }
        return item.id ? updateOAuthSource(item.id, item) : addOAuthSource(item);
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
        const method: Observable<any> = this.updateMethod({ ...this.item.toJSON(), ...this.form.value });
        method.toPromise().then(
            (item) => {
                this.event.emit({ reason: 'done', metadata: { source: item } });
                notifySuccess(
                    `Successfully ${this.is_new ? 'added' : 'updated'} auth source`
                );
                this._dialog.close();
            },
            (err) => {
                this.loading = false;
                notifyError(
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
        if (this.item instanceof PlaceOAuthSource) {
            this.form = generateOAuthSourceForm(this.item);
        } else if (this.item instanceof PlaceSAMLSource) {
            this.form = generateSAMLSourceForm(this.item);
        } else if (this.item instanceof PlaceLDAPSource) {
            this.form = generateLDAPSourceForm(this.item);
        }
    }
}
