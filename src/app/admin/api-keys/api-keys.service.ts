import { computed, inject, resource, Service, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    create,
    get,
    PlaceDomain,
    PlaceUser,
    query,
    queryUsers,
    remove,
    showUser,
    update,
} from '@placeos/ts-client';
import { addDays, getUnixTime } from 'date-fns';
import { notifyError, notifySuccess } from '../../common/notifications';
import { waitForEvent } from '../../common/signals';
import { DialogEvent } from '../../common/types';
import { currentUser } from '../../common/user-state';
import { openConfirmModal } from '../../overlays/confirm-modal.component';
import { AdminDataService } from '../admin-data.service';
import { PlaceAPIKeyDetails } from './api-key-details.class';
import { APIKeyModalComponent } from './api-key-modal.component';

@Service()
export class APIKeyService {
    private _dialog = inject(MatDialog);
    private _admin_data = inject(AdminDataService);

    private _search = signal('');
    private _domain = this._admin_data.selectedDomain('api-keys');
    private _last_key = signal<PlaceAPIKeyDetails>(null);
    private _change = signal(0);
    private _loading = signal(false);

    public readonly last_key = this._last_key.asReadonly();
    public readonly active_domain = this._domain.asReadonly();
    public readonly loading = this._loading.asReadonly();

    public readonly available_domains = this._admin_data.domain_list;

    private readonly _available_scopes = resource({
        loader: async () => (await get('/api/engine/v2/scopes')) as string[],
    });

    public readonly available_scopes = computed(
        () => this._available_scopes.value() || [],
    );

    private readonly _available_keys = resource({
        params: () => ({
            domain: this._domain(),
            change: this._change(),
        }),
        loader: async ({ params }) => {
            const { domain } = params;
            this._loading.set(true);
            try {
                if (!domain) return [] as PlaceAPIKeyDetails[];
                const response = await query({
                    query_params: { authority_id: domain.id },
                    fn: (d) => new PlaceAPIKeyDetails(d),
                    path: 'api_keys',
                });
                return response.data as PlaceAPIKeyDetails[];
            } finally {
                this._loading.set(false);
            }
        },
    });

    public readonly available_keys = computed(
        () => this._available_keys.value() || [],
    );

    private readonly _users = resource({
        params: () => ({
            domain: this._domain(),
            q: this._search(),
            change: this._change(),
        }),
        loader: async ({ params }) => {
            const { domain, q } = params;
            if (!domain) return [] as PlaceUser[];
            return (await queryUsers({ authority_id: domain.id, q })).data;
        },
    });

    public readonly users = computed(() => this._users.value() || []);

    public setDomain(domain: PlaceDomain) {
        this._admin_data.setDomain('api-keys', domain);
    }

    public async selectDefaultDomain() {
        return this._admin_data.selectDefaultDomain('api-keys');
    }

    public setSearch(s: string) {
        this._search.set(s);
    }

    public async newKey() {
        const ref = this._dialog.open(APIKeyModalComponent, {
            data: { domain: this._domain() },
        });
        const details = await Promise.race([
            waitForEvent(
                ref.componentInstance.event,
                (_: DialogEvent) => _.reason === 'done',
            ),
            waitForEvent(ref.afterClosed()),
        ]);
        if (details?.reason !== 'done') return;
        ref.componentInstance.loading.set('Creating new API key...');
        const domain = this._domain();
        const api_key = details.metadata;
        const key = await create({
            query_params: {},
            fn: (d) => new PlaceAPIKeyDetails(d),
            path: 'api_keys',
            form_data: {
                ...api_key,
                expires_at:
                    (api_key.expires_at ?? api_key.ttl)
                        ? getUnixTime(Date.now() + api_key.ttl)
                        : undefined,
                authority_id: domain.id,
            },
        }).catch((_) => {
            ref.close();
            notifyError(_);
            throw _;
        });
        this._last_key.set(key as PlaceAPIKeyDetails);
        this._change.set(Date.now());
        notifySuccess('Successfully created new API key.');
        ref.close();
    }

    public async quickCreateKey() {
        const domain = this._domain();
        if (!domain) return;
        this._loading.set(true);
        try {
            const user = await this._currentUser();
            if (!user?.id) {
                notifyError('Unable to load current user details.');
                return;
            }
            const scopes = await this._scopes();
            if (!scopes.length) {
                notifyError('Unable to load API key scopes.');
                return;
            }
            const key = await create<PlaceAPIKeyDetails>({
                query_params: {},
                fn: (d) => new PlaceAPIKeyDetails(d),
                path: 'api_keys',
                form_data: {
                    name: `${this._userLabel(user)} API Key`,
                    description: `Created for ${this._userLabel(user)}`,
                    scopes,
                    user_id: user.id,
                    permissions: 'user',
                    authority_id: domain.id,
                    expires_at: getUnixTime(addDays(Date.now(), 1)), // expire 1 day from creation
                },
            }).catch((_) => {
                notifyError(_);
                throw _;
            });
            this._last_key.set(key as PlaceAPIKeyDetails);
            this._change.set(Date.now());
            notifySuccess('Successfully created new API key.');
        } finally {
            this._loading.set(false);
        }
    }

    public async editKey(key: PlaceAPIKeyDetails) {
        const ref = this._dialog.open(APIKeyModalComponent, {
            data: { domain: this._domain(), key },
        });
        const details = await Promise.race([
            waitForEvent(
                ref.componentInstance.event,
                (_: DialogEvent) => _.reason === 'done',
            ),
            waitForEvent(ref.afterClosed()),
        ]);
        if (details?.reason !== 'done') return;
        ref.componentInstance.loading.set('Updating API key...');
        const domain = this._domain();
        await update({
            id: key.id,
            query_params: {},
            fn: (d) => new PlaceAPIKeyDetails(d),
            path: 'api_keys',
            method: 'patch',
            form_data: {
                ...details.metadata,
                authority_id: domain.id,
            },
        }).catch((_) => {
            ref.close();
            notifyError(_);
            throw _;
        });
        this._change.set(Date.now());
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
        await remove({
            id: key.id,
            query_params: {},
            path: 'api_keys',
        });
        details.close();
        notifySuccess('Successfully removed API key.');
        this._change.set(Date.now());
    }

    private async _currentUser() {
        const cached_user = currentUser();
        if (cached_user?.id) return cached_user;
        return showUser('current').catch(() => null);
    }

    private async _scopes() {
        const scopes = this.available_scopes();
        if (scopes.length) return scopes;
        return get('/api/engine/v2/scopes').catch(() => []) as Promise<
            string[]
        >;
    }

    private _userLabel(user: PlaceUser) {
        return user?.name || user?.email || 'Current User';
    }
}
