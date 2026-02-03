import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    create,
    get,
    PlaceDomain,
    PlaceUser,
    query,
    queryDomains,
    queryUsers,
    remove,
    update,
} from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    lastValueFrom,
    Observable,
    of,
} from 'rxjs';
import {
    debounceTime,
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { notifyError, notifySuccess } from '../../common/notifications';
import { openConfirmModal } from '../../overlays/confirm-modal.component';
import { PlaceAPIKeyDetails } from './api-key-details.class';
import { APIKeyModalComponent } from './api-key-modal.component';

@Injectable({
    providedIn: 'root',
})
export class APIKeyService {
    private _dialog = inject(MatDialog);

    private _search = new BehaviorSubject<string>('');
    private _domain = new BehaviorSubject<PlaceDomain>(null);
    private _last_key = new BehaviorSubject<PlaceAPIKeyDetails>(null);
    private _change = new BehaviorSubject<number>(0);
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly last_key = this._last_key.asObservable();
    public readonly active_domain = this._domain.asObservable();
    public readonly loading = this._loading.asObservable();

    public readonly available_domains = queryDomains({ limit: 500 }).pipe(
        map((_) => _.data),
        shareReplay(1),
    );

    public readonly available_scopes: Observable<string[]> = get(
        '/api/engine/v2/scopes',
    ).pipe(
        map((_) => _ as string[]),
        shareReplay(1),
    );

    public readonly available_keys = combineLatest([
        this._domain,
        this._change,
    ]).pipe(
        switchMap(([domain]) => {
            this._loading.next(true);
            return domain
                ? query({
                      query_params: { authority_id: domain.id },
                      fn: (d) => new PlaceAPIKeyDetails(d),
                      path: 'api_keys',
                  }).pipe(map((_) => _.data as PlaceAPIKeyDetails[]))
                : of([] as PlaceAPIKeyDetails[]);
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1),
    );

    public readonly users = combineLatest([
        this._domain,
        this._search,
        this._change,
    ]).pipe(
        debounceTime(300),
        switchMap(([domain, q]) => {
            console.log('Users:', domain, q);
            return domain
                ? queryUsers({ authority_id: domain.id, q }).pipe(
                      map((_) => _.data as PlaceUser[]),
                  )
                : of([] as PlaceUser[]);
        }),
        shareReplay(1),
    );

    public setDomain(domain: PlaceDomain) {
        console.log('Setting domain:', domain);
        this._domain.next(domain);
    }

    public setSearch(s: string) {
        this._search.next(s);
    }

    public async newKey() {
        const ref = this._dialog.open(APIKeyModalComponent, {
            data: { domain: this._domain.getValue() },
        });
        const details = await Promise.race([
            lastValueFrom(
                ref.componentInstance.event.pipe(
                    first((_) => _.reason === 'done'),
                ),
            ),
            lastValueFrom(ref.afterClosed()),
        ]);
        if (details?.reason !== 'done') return;
        ref.componentInstance.loading.set('Creating new API key...');
        const domain = this._domain.getValue();
        const key = await lastValueFrom(
            create({
                query_params: {},
                fn: (d) => new PlaceAPIKeyDetails(d),
                path: 'api_keys',
                form_data: {
                    ...details.metadata,
                    authority_id: domain.id,
                },
            }),
        ).catch((_) => {
            ref.close();
            notifyError(_);
            throw _;
        });
        this._last_key.next(key as PlaceAPIKeyDetails);
        this._change.next(Date.now());
        notifySuccess('Successfully created new API key.');
        ref.close();
    }

    public async editKey(key: PlaceAPIKeyDetails) {
        const ref = this._dialog.open(APIKeyModalComponent, {
            data: { domain: this._domain.getValue(), key },
        });
        const details = await Promise.race([
            lastValueFrom(
                ref.componentInstance.event.pipe(
                    first((_) => _.reason === 'done'),
                ),
            ),
            lastValueFrom(ref.afterClosed()),
        ]);
        if (details?.reason !== 'done') return;
        ref.componentInstance.loading.set('Updating API key...');
        const domain = this._domain.getValue();
        const updated_key = await lastValueFrom(
            update({
                id: key.id,
                query_params: {},
                fn: (d) => new PlaceAPIKeyDetails(d),
                path: 'api_keys',
                method: 'patch',
                form_data: {
                    ...details.metadata,
                    authority_id: domain.id,
                },
            }),
        ).catch((_) => {
            ref.close();
            notifyError(_);
            throw _;
        });
        this._change.next(Date.now());
        notifySuccess('Successfully updated API key.');
        ref.close();
    }

    public async removeKey(key: PlaceAPIKeyDetails) {
        const details = await openConfirmModal(
            {
                title: 'Remove API Key',
                content: `Are you sure you wish to remove this API key?
                    Removing this key may result in applications using this key to stop working.`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (details?.reason !== 'done') return;
        details.loading('Removing API key...');
        await lastValueFrom(
            remove({
                id: key.id,
                query_params: {},
                path: 'api_keys',
            }),
        );
        details.close();
        notifySuccess('Successfully removed API key.');
        this._change.next(Date.now());
    }
}
