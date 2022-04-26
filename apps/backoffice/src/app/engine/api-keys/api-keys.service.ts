import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    create,
    PlaceDomain,
    PlaceUser,
    query,
    queryDomains,
    queryUsers,
    remove,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { debounce, debounceTime, first, map, shareReplay, switchMap } from 'rxjs/operators';
import { openConfirmModal } from '../../common/general';
import { notifyError, notifySuccess } from '../../common/notifications';
import { PlaceAPIKeyDetails } from './api-key-details.class';
import { APIKeyModalComponent } from './api-key-modal.component';

@Injectable()
export class APIKeyService {
    private _search = new BehaviorSubject<string>('');
    private _domain = new BehaviorSubject<PlaceDomain>(null);
    private _last_key = new BehaviorSubject<PlaceAPIKeyDetails>(null);
    private _change = new BehaviorSubject<number>(0);

    public readonly last_key = this._last_key.asObservable();
    public readonly active_domain = this._domain.asObservable();

    public readonly available_domains = queryDomains({ limit: 500 }).pipe(
        map((_) => _.data),
        shareReplay(1)
    );

    public readonly available_keys = combineLatest([
        this._domain,
        this._change,
    ]).pipe(
        switchMap(([domain]) => {
            return domain
                ? query({
                      query_params: { authority_id: domain.id },
                      fn: (d) => new PlaceAPIKeyDetails(d),
                      path: 'api_keys',
                  }).pipe(map((_) => _.data as PlaceAPIKeyDetails[]))
                : of([] as PlaceAPIKeyDetails[]);
        }),
        shareReplay(1)
    );

    public readonly users = combineLatest([
        this._domain,
        this._search,
        this._change,
    ]).pipe(
        debounceTime(300),
        switchMap(([domain, q]) => {
            return domain
                ? queryUsers({ authority_id: domain.id, q }).pipe(
                      map((_) => _.data as PlaceUser[])
                  )
                : of([] as PlaceUser[]);
        }),
        shareReplay(1)
    );

    constructor(private _dialog: MatDialog) {}

    public setDomain(domain: PlaceDomain) {
        this._domain.next(domain);
    }

    public setSearch(s: string) {
        this._search.next(s);
    }

    public async newKey() {
        const ref = this._dialog.open(APIKeyModalComponent);
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details?.reason !== 'done') return;
        ref.componentInstance.loading = 'Creating new API key...';
        const domain = this._domain.getValue();
        const key = await create({
            query_params: {},
            fn: (d) => new PlaceAPIKeyDetails(d),
            path: 'api_keys',
            form_data: {
                ...details.metadata,
                authority_id: domain.id,
            },
        })
            .toPromise()
            .catch((_) => {
                ref.close();
                notifyError(_);
                throw _;
            });
        this._last_key.next(key as any);
        this._change.next(Date.now());
        notifySuccess('Successfully created new API key.');
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
            this._dialog
        );
        if (details?.reason !== 'done') return;
        details.loading('Removing API key...');
        await remove({
            id: key.id,
            query_params: {},
            path: 'api_keys',
        }).toPromise();
        details.close();
        notifySuccess('Successfully removed API key.');
    }
}
