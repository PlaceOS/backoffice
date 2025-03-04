import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
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

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import {
    notifyError,
    notifySuccess,
} from 'apps/backoffice/src/app/common/notifications';
import { DialogEvent, Identity } from 'apps/backoffice/src/app/common/types';
import {
    generateLDAPSourceForm,
    generateOAuthSourceForm,
    generateSAMLSourceForm,
} from 'apps/backoffice/src/app/domains/auth-sources.utilities';
import { Observable } from 'rxjs';
import { i18n } from '../common/translate';

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
            [loading]="loading"
            (save)="save()"
        >
            <div class="flex flex-col" *ngIf="is_new">
                <label for="type"
                    >{{ 'DOMAINS.AUTHENTICATION_SOURCE_TYPE' | translate }}:
                </label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="type"
                        [(ngModel)]="active_type"
                        (ngModelChange)="setType($event)"
                        [placeholder]="
                            'DOMAINS.AUTHENTICATION_SOURCE_SELECT' | translate
                        "
                    >
                        <mat-option
                            *ngFor="let type of source_types"
                            [value]="type.id"
                        >
                            {{ type.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <ng-container *ngIf="item">
                <ng-container [ngSwitch]="type">
                    <ng-container *ngSwitchCase="'saml'">
                        <saml-source-form [form]="form"></saml-source-form>
                    </ng-container>
                    <ng-container *ngSwitchCase="'ldap'">
                        <ldap-source-form [form]="form"></ldap-source-form>
                    </ng-container>
                    <ng-container *ngSwitchDefault>
                        <oauth-source-form [form]="form"></oauth-source-form>
                    </ng-container>
                </ng-container>
            </ng-container>
        </fullscreen-modal-shell>
    `,
    styles: [``],
})
export class AuthSourceModalComponent extends AsyncHandler implements OnInit {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public loading: boolean;
    /** Form fields for trigger condition */
    public form: UntypedFormGroup;
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
        @Inject(MAT_DIALOG_DATA) private _data: AuthSourceModalData,
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
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        this.loading = true;
        const method: Observable<any> = this.updateMethod({
            ...this.item.toJSON(),
            ...this.form.value,
        });
        method.toPromise().then(
            (item) => {
                this.event.emit({ reason: 'done', metadata: { source: item } });
                notifySuccess(i18n('DOMAINS.AUTHENTICATION_SAVE_SUCCESS'));
                this._dialog.close();
            },
            (err) => {
                this.loading = false;
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
