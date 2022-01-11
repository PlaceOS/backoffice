import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addApplication,
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
import { BehaviorSubject, combineLatest, merge, Observable, of } from 'rxjs';
import { catchError, filter, first, map, share, shareReplay, switchMap } from 'rxjs/operators';
import { openConfirmModal } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { AuthSourceModalComponent } from '../overlays/auth-source-modal/auth-source-modal.component';
import { ItemCreateUpdateModalComponent } from '../overlays/item-modal/item-modal.component';

export type PlaceAuthSource = PlaceOAuthSource | PlaceSAMLSource | PlaceLDAPSource;

@Injectable({
    providedIn: 'root',
})
export class DomainStateService {
    private _loading = new BehaviorSubject<boolean>(false);

    private _changed = new BehaviorSubject<number>(0);

    public readonly item: Observable<PlaceDomain> = this._state.item as any;

    public readonly loading = this._loading.asObservable();

    public readonly users: Observable<PlaceUser[]> = combineLatest([this._changed, this.item]).pipe(
        filter(([_, item]) => item instanceof PlaceDomain),
        switchMap(([_, item]) => queryUsers({ authority_id: item.id } as any)),
        map((_) => _.data),
        catchError((_) => []),
        shareReplay(1)
    );

    public readonly auth_sources: Observable<PlaceAuthSource[]> = combineLatest([
        this._changed,
        this.item,
    ]).pipe(
        filter(([_, item]) => item instanceof PlaceDomain),
        switchMap(([_, item]) => {
            const q = { authority_id: item.id };
            return combineLatest([
                querySAMLSources(q as any).pipe(map((_) => _.data)),
                queryOAuthSources(q as any).pipe(map((_) => _.data)),
                queryLDAPSources(q as any).pipe(map((_) => _.data)),
            ]);
        }),
        map((_) => {
            let list = [];
            _.forEach((array) => (list = list.concat(array)));
            return list;
        }),
        catchError((_) => []),
        shareReplay(1)
    );

    public readonly applications: Observable<PlaceApplication[]> = combineLatest([
        this._changed,
        this.item,
    ]).pipe(
        filter(([_, item]) => item instanceof PlaceDomain),
        switchMap(([_, item]) => queryApplications({ authority_id: item.id } as any)),
        map((_) => _.data),
        catchError((_) => []),
        shareReplay(1)
    );

    public readonly counts = combineLatest([
        this._changed,
        this.item,
    ]).pipe(
        filter(([_, item]) => item instanceof PlaceDomain),
        switchMap(async ([_, item]) => {
            const q = { authority_id: item?.id };
            const details = await Promise.all([
                queryApplications(q as any)
                    .pipe(map((_) => _.total))
                    .toPromise(),
                combineLatest([
                    querySAMLSources(q as any),
                    queryOAuthSources(q as any),
                    queryLDAPSources(q as any),
                ])
                    .pipe(map(([saml, oauth, ldap]) => saml.total + oauth.total + ldap.total))
                    .toPromise(),
                queryUsers(q as any)
                    .pipe(map((_) => _.total))
                    .toPromise(),
            ]);
            const [applications, auth_sources, users] = details;
            return {
                applications,
                auth_sources: auth_sources || 0,
                users,
            };
        }),
        shareReplay(1)
    );

    public get active_item() {
        return this._state.active_item;
    }

    constructor(private _state: ActiveItemService, private _dialog: MatDialog) {}

    public async update(domain: PlaceDomain) {
        const item = await updateDomain(domain.id, domain).toPromise();
        this._state.replaceItem(item);
    }

    /**
     * Open the modal to create a new system
     */
    public async editApplication(item?: PlaceApplication) {
        item = item || new PlaceApplication({ owner_id: this.active_item.id });
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item,
                name: 'Application',
                save: (i) => (i.id ? updateApplication(i.id, i) : addApplication(i)),
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).toPromise(),
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
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
            this._dialog
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
                }`
            );
        notifySuccess('Successfully removed domain application.');
        this._changed.next(new Date().valueOf());
    }

    /**
     * Open the modal to create a new system
     */
    public async editAuthSource(item?: PlaceAuthSource) {
        const ref = this._dialog.open(AuthSourceModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                auth_source: item,
                domain: this.active_item,
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).toPromise(),
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
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
            this._dialog
        );
        if (!details) return;
        details.loading('Deleting domain auth source...');
        const method =
            item instanceof PlaceSAMLSource
                ? removeSAMLSource
                : item instanceof PlaceOAuthSource
                ? removeOAuthSource
                : removeLDAPSource;
        const err = await method(item.id)
            .toPromise()
            .catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error removing domain auth source. Error: ${
                    err.responseText || err.message || err
                }`
            );
        notifySuccess('Successfully removed domain auth source.');
        this._changed.next(new Date().valueOf());
    }
}
