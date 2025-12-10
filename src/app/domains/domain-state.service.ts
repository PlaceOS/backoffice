import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addApplication,
    get,
    PlaceApplication,
    PlaceDomain,
    PlaceLDAPSource,
    PlaceOAuthSource,
    PlaceSAMLSource,
    PlaceUser,
    queryApplications,
    queryLDAPSources,
    queryOAuthSources,
    querySAMLSources,
    queryUsers,
    removeApplication,
    removeLDAPSource,
    removeOAuthSource,
    removeSAMLSource,
    updateApplication,
    updateDomain,
} from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    lastValueFrom,
    Observable,
} from 'rxjs';
import {
    catchError,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { Identity } from '../common/types';
import { AuthSourceModalComponent } from '../overlays/auth-source-modal.component';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { ItemCreateUpdateModalComponent } from '../overlays/item-modal.component';

export type PlaceAuthSource =
    | PlaceOAuthSource
    | PlaceSAMLSource
    | PlaceLDAPSource;

@Injectable({
    providedIn: 'root',
})
export class DomainStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(MatDialog);

    private _loading = new BehaviorSubject<boolean>(false);

    private _changed = new BehaviorSubject<number>(0);

    public readonly item: Observable<PlaceDomain> = this._state.item as Observable<PlaceDomain>;

    public readonly loading = this._loading.asObservable();

    public readonly users: Observable<PlaceUser[]> = combineLatest([
        this._changed,
        this.item,
    ]).pipe(
        filter(([, item]) => item instanceof PlaceDomain),
        switchMap(([, item]) =>
            queryUsers({ authority_id: item.id, limit: 1000 } as Record<string, unknown>),
        ),
        map((response) => response.data.sort((a, b) => a.name.localeCompare(b.name))),
        catchError(() => []),
        shareReplay(1),
    );

    public readonly auth_sources: Observable<PlaceAuthSource[]> = combineLatest(
        [this._changed, this.item],
    ).pipe(
        filter(([, item]) => item instanceof PlaceDomain),
        switchMap(([, item]) => {
            const q = { authority_id: item.id };
            return combineLatest([
                querySAMLSources(q as Record<string, unknown>).pipe(map((response) => response.data)),
                queryOAuthSources(q as Record<string, unknown>).pipe(map((response) => response.data)),
                queryLDAPSources(q as Record<string, unknown>).pipe(map((response) => response.data)),
            ]);
        }),
        map((sources) => {
            let list = [];
            sources.forEach((array) => (list = list.concat(array)));
            return list;
        }),
        catchError(() => []),
        shareReplay(1),
    );

    public readonly applications: Observable<PlaceApplication[]> =
        combineLatest([this._changed, this.item]).pipe(
            filter(([, item]) => item instanceof PlaceDomain),
            switchMap(([, item]) =>
                queryApplications({ authority_id: item.id } as Record<string, unknown>),
            ),
            map((response) => response.data.sort((a, b) => a.name.localeCompare(b.name))),
            catchError(() => []),
            shareReplay(1),
        );

    public readonly counts = combineLatest([this._changed, this.item]).pipe(
        filter(([, item]) => item instanceof PlaceDomain),
        switchMap(async ([, item]) => {
            const q = { authority_id: item?.id };
            const details = await Promise.all([
                lastValueFrom(
                    queryApplications(q as Record<string, unknown>).pipe(map((response) => response.total)),
                ),
                lastValueFrom(
                    combineLatest([
                        querySAMLSources(q as Record<string, unknown>),
                        queryOAuthSources(q as Record<string, unknown>),
                        queryLDAPSources(q as Record<string, unknown>),
                    ]).pipe(
                        map(
                            ([saml, oauth, ldap]) =>
                                saml.total + oauth.total + ldap.total,
                        ),
                    ),
                ),
                lastValueFrom(queryUsers(q as Record<string, unknown>).pipe(map((response) => response.total))),
            ]);
            const [applications, auth_sources, users] = details;
            return {
                applications,
                auth_sources: auth_sources || 0,
                users,
            };
        }),
        shareReplay(1),
    );

    public get active_item() {
        return this._state.active_item;
    }

    public async update(domain: PlaceDomain) {
        const item = await updateDomain(domain.id, domain).toPromise();
        this._state.replaceItem(item as unknown as Identity);
    }

    public async performAzureIntegration() {
        const item = this.active_item;
        if (!(item instanceof PlaceDomain)) return;
        const result = await lastValueFrom(
            get(`/api/engine/v2/admin_consent/${encodeURIComponent(item.id)}`),
        ).catch((error) => {
            notifyError(i18n('DOMAINS.AZURE_INTEGRATION_ERROR', { error }));
            throw error;
        });
        if (result.url) {
            window.open(result.url, '_blank', 'noopener noreferrer');
        }
    }

    /**
     * Open the modal to create a new system
     */
    public async editApplication(item?: PlaceApplication) {
        item = item || new PlaceApplication({ owner_id: this.active_item.id });
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            data: {
                item,
                name: 'DOMAINS.APPLICATION',
                save: (i) => {
                    delete i.client_id;
                    return i.id
                        ? updateApplication(i.id, i)
                        : addApplication(i);
                },
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (!details) return;
        this._changed.next(new Date().valueOf());
    }

    /**
     * Remove application from domain
     * @param item Application to delete
     */
    public async deleteApplication(item: PlaceApplication) {
        const details = await openConfirmModal(
            {
                title: `Delete application`,
                content: `<p>Are you sure you want delete the application ${item.name}?</p><p>Configuration will be <strong>immediately</strong> updated</p>`,
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (!details) return;
        details.loading('Deleting domain application...');
        const err = await removeApplication(item.id)
            .toPromise()
            .catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error removing domain application. Error: ${
                    err.responseText || err.message || err
                }`,
            );
        notifySuccess('Successfully removed domain application.');
        this._changed.next(new Date().valueOf());
    }

    /**
     * Open the modal to create a new system
     */
    public async editAuthSource(item?: PlaceAuthSource) {
        const ref = this._dialog.open(AuthSourceModalComponent, {
            data: {
                auth_source: item,
                domain: this.active_item,
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (!details) return;
        this._changed.next(new Date().valueOf());
    }

    /**
     * Remove application from domain
     * @param item Application to delete
     */
    public async deleteAuthSource(item: PlaceAuthSource) {
        const details = await openConfirmModal(
            {
                title: `Delete auth source`,
                content: `<p>Are you sure you want delete this auth source?</p><p>Deleting this will remove this auth source <strong>immediately</strong></p>`,
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details?.loading('Deleting domain auth source...');
        const method =
            item instanceof PlaceSAMLSource
                ? removeSAMLSource
                : item instanceof PlaceOAuthSource
                  ? removeOAuthSource
                  : removeLDAPSource;
        const err = await lastValueFrom(method(item.id)).catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error removing domain auth source. Error: ${
                    err.responseText || err.message || err
                }`,
            );
        notifySuccess('Successfully removed domain auth source.');
        this._changed.next(new Date().valueOf());
    }
}
