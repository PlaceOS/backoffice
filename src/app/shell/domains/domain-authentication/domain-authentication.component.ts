import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PlaceDomain, PlaceSAMLSource, PlaceLDAPSource, queryOAuthSources, querySAMLSources, queryLDAPSources } from '@placeos/ts-client';
import { MatDialog } from '@angular/material/dialog';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { Identity, HashMap, DialogEvent } from 'src/app/shared/utilities/types.utilities';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { AuthSourceModalComponent, AuthSourceModalData } from 'src/app/overlays/auth-source-modal/auth-source-modal.component';
import { map } from 'rxjs/operators';

export interface PlaceAuthSourceLike extends Identity {
    authority_id: string;
    save: () => Promise<PlaceAuthSourceLike>;
    delete: () => Promise<void>;
}

@Component({
    selector: 'domain-authentication',
    templateUrl: './domain-authentication.template.html',
    styleUrls: ['./domain-authentication.styles.scss']
})
export class DomainAuthenticationComponent extends BaseDirective implements OnChanges, OnInit {
    /** Active domain item */
    @Input() public item: PlaceDomain;
    /** List of auth sources associated with the active domain */
    public auth_sources: PlaceAuthSourceLike[] = [];
    /** Mapping of auth sources to their type */
    public source_types: HashMap<'oauth' | 'saml' | 'ldap'> = {};

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item').subscribe(item => {
                this.item = item;
                this.loadAuthSources();
            })
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadAuthSources();
        }
    }

    /**
     * Load auth sources of all types for domain
     * @param offset Request page offset
     */
    public loadAuthSources(offset: number = 0) {
        if (!this.item) { return; }
        Promise.all([
            queryOAuthSources({ authority_id: this.item.id, offset } as any).pipe(map(resp => resp.data)).toPromise(),
            querySAMLSources({ authority_id: this.item.id, offset } as any).pipe(map(resp => resp.data)).toPromise(),
            queryLDAPSources({ authority_id: this.item.id, offset } as any).pipe(map(resp => resp.data)).toPromise()
        ]).then(
            responses => {
                if (!offset) {
                    this.auth_sources = [];
                }
                for (const list of responses) {
                    list.forEach(auth_source => this.addAuthSourceToList(auth_source));
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
                    domain: this.item
                }
            }
        );
        ref.afterClosed().subscribe(() => this.loadAuthSources());
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
                    auth_source: item as any
                }
            }
        );
        ref.afterClosed().subscribe(() => this.loadAuthSources());
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
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting auth source...';
                        item.delete().then(
                            () => {
                                this._service.notifySuccess('Successfully deleted auth source.');
                                ref.close();
                                this.unsub('delete_confirm');
                                this.loadAuthSources();
                            },
                            err => {
                                this._service.notifyError(
                                    `Error deleting auth source. Error ${JSON.stringify(err.response || err.message || err)}`
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
        const index = this.auth_sources.findIndex(a_source => a_source.id === source.id);
        if (index < 0) {
            this.auth_sources.push(source);
        } else {
            this.auth_sources.splice(index, 1, source);
        }
    }
}
