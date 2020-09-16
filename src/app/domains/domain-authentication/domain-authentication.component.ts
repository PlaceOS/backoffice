import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import {
    PlaceDomain,
    PlaceSAMLSource,
    PlaceLDAPSource,
    queryOAuthSources,
    querySAMLSources,
    queryLDAPSources,
    removeSAMLSource,
    removeLDAPSource,
    removeOAuthSource,
} from '@placeos/ts-client';
import { MatDialog } from '@angular/material/dialog';

import { BaseClass } from 'src/app/common/base.class';
import { Identity, HashMap, DialogEvent } from 'src/app/common/types';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import {
    AuthSourceModalComponent,
    AuthSourceModalData,
} from 'src/app/overlays/auth-source-modal/auth-source-modal.component';
import { map, first } from 'rxjs/operators';
import { notifyError, notifySuccess } from 'src/app/common/notifications';
import { ActiveItemService } from 'src/app/common/item.service';

export interface PlaceAuthSourceLike extends Identity {
    authority_id: string;
    save: () => Promise<PlaceAuthSourceLike>;
    delete: () => Promise<void>;
}

@Component({
    selector: 'domain-authentication',
    templateUrl: './domain-authentication.template.html',
    styleUrls: ['./domain-authentication.styles.scss'],
})
export class DomainAuthenticationComponent extends BaseClass implements OnInit {
    /** List of auth sources associated with the active domain */
    public auth_sources: PlaceAuthSourceLike[] = [];
    /** Mapping of auth sources to their type */
    public source_types: HashMap<'oauth' | 'saml' | 'ldap'> = {};

    public get item(): PlaceDomain {
        return this._service.active_item as any;
    }

    constructor(private _dialog: MatDialog, private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadAuthSources();
        }))
    }

    /**
     * Load auth sources of all types for domain
     * @param offset Request page offset
     */
    public loadAuthSources(offset: number = 0) {
        if (!this.item) {
            return;
        }
        Promise.all([
            queryOAuthSources({ authority_id: this.item.id, offset } as any)
                .pipe(map((resp) => resp.data))
                .toPromise(),
            querySAMLSources({ authority_id: this.item.id, offset } as any)
                .pipe(map((resp) => resp.data))
                .toPromise(),
            queryLDAPSources({ authority_id: this.item.id, offset } as any)
                .pipe(map((resp) => resp.data))
                .toPromise(),
        ]).then(
            (responses) => {
                if (!offset) {
                    this.auth_sources = [];
                }
                for (const list of responses) {
                    list.forEach((auth_source) => this.addAuthSourceToList(auth_source));
                }
            },
            () => null
        );
    }

    /**
     * Open modal to create a new  auth source for the domain
     * @param item Auth source to delete
     */
    public newAuthSource(): void {
        const ref = this._dialog.open<AuthSourceModalComponent, AuthSourceModalData>(
            AuthSourceModalComponent,
            {
                width: 'auto',
                height: 'auto',
                data: {
                    domain: this.item,
                },
            }
        );
        ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).subscribe((event) => {
            this.addAuthSourceToList(event.metadata.source);
            this.timeout('load', () => this.loadAuthSources(), 2000);
        });
    }

    /**
     * Open modal to edit auth source
     * @param item Auth source to edit
     */
    public editAuthSource(item: PlaceAuthSourceLike): void {
        const ref = this._dialog.open<AuthSourceModalComponent, AuthSourceModalData>(
            AuthSourceModalComponent,
            {
                width: 'auto',
                height: 'auto',
                data: {
                    domain: this.item,
                    auth_source: item as any,
                },
            }
        );
        ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).subscribe((event) => {
            this.addAuthSourceToList(event.metadata.source);
            this.timeout('load', () => this.loadAuthSources(), 2000);
        });
    }

    public deleteMethod(item: any) {
        if (item instanceof PlaceSAMLSource) {
            return removeSAMLSource(item.id);
        } else if (item instanceof PlaceLDAPSource) {
            return removeLDAPSource(item.id);
        }
        return removeOAuthSource(item.id);
    }

    /**
     * Delete the auth source from the domain
     * @param item Auth source to delete
     */
    public deleteAuthSource(item: PlaceAuthSourceLike): void {
        if (item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Delete auth source`,
                        content: `<p>Are you sure you want delete this auth source?</p><p>Deleting this will remove this auth source <strong>immediately</strong></p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' },
                    },
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting auth source...';
                        this.deleteMethod(item)
                            .toPromise()
                            .then(
                                () => {
                                    this.auth_sources = this.auth_sources.filter(
                                        (source) => source.id !== item.id
                                    );
                                    notifySuccess(
                                        'Successfully deleted auth source.'
                                    );
                                    ref.close();
                                    this.unsub('delete_confirm');
                                    this.loadAuthSources();
                                },
                                (err) => {
                                    notifyError(
                                        `Error deleting auth source. Error ${JSON.stringify(
                                            err.response || err.message || err
                                        )}`
                                    );
                                    ref.componentInstance.loading = null;
                                }
                            );
                    }
                })
            );
        }
    }

    /**
     * Add source the the auth source list. Updated item if it already exists
     * @param source Source to add the the list
     */
    private addAuthSourceToList(source: PlaceAuthSourceLike) {
        this.source_types[source.id] =
            source instanceof PlaceSAMLSource
                ? 'saml'
                : source instanceof PlaceLDAPSource
                ? 'ldap'
                : 'oauth';
        const index = this.auth_sources.findIndex((a_source) => a_source.id === source.id);
        if (index < 0) {
            this.auth_sources.push(source);
        } else {
            this.auth_sources.splice(index, 1, source);
        }
    }
}
